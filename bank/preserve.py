"""Сохранение починенных карточек: overrides + merge без удалений."""
from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parent.parent
OVERRIDES_DIR = ROOT / "bank" / "overrides"
DATA_DIR = ROOT / "js" / "data"

_JS_ASSIGN = re.compile(
    r"window\.(QUESTIONS_(?:JUNIOR|MIDDLE|SENIOR))\s*=\s*(\[.*\])\s*;?\s*\Z",
    re.S,
)


def question_key(item: dict[str, Any]) -> tuple[str, str | None]:
    """Ключ дедупа: текст вопроса + код."""
    return (str(item.get("q") or "").strip(), item.get("code"))


def load_js_bank(path: Path) -> list[dict[str, Any]]:
    if not path.is_file():
        return []
    text = path.read_text(encoding="utf-8")
    m = _JS_ASSIGN.search(text.strip())
    if not m:
        # fallback: первое [...]
        m2 = re.search(r"=\s*(\[.*\])\s*;?\s*$", text, re.S)
        if not m2:
            return []
        payload = m2.group(1)
    else:
        payload = m.group(2)
    data = json.loads(payload)
    if not isinstance(data, list):
        return []
    return data


def write_js_bank(path: Path, var: str, items: list[dict[str, Any]]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(items, ensure_ascii=False, indent=2)
    path.write_text(f"window.{var} = {payload};\n", encoding="utf-8")


def overrides_path(level: str) -> Path:
    return OVERRIDES_DIR / f"{level}.json"


def load_overrides(level: str) -> dict[str, dict[str, Any]]:
    path = overrides_path(level)
    if not path.is_file():
        return {}
    raw = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(raw, dict):
        raise ValueError(f"overrides {path} must be an object id → fields")
    out: dict[str, dict[str, Any]] = {}
    for k, v in raw.items():
        if isinstance(v, dict):
            out[str(k)] = v
    return out


def save_overrides(level: str, overrides: dict[str, dict[str, Any]]) -> None:
    OVERRIDES_DIR.mkdir(parents=True, exist_ok=True)
    path = overrides_path(level)
    # стабильный порядок по id
    def sort_key(qid: str) -> tuple[str, int]:
        m = re.match(r"^([jms])(\d+)$", qid)
        if m:
            return (m.group(1), int(m.group(2)))
        return (qid, 0)

    ordered = {k: overrides[k] for k in sorted(overrides.keys(), key=sort_key)}
    path.write_text(
        json.dumps(ordered, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


def apply_override(item: dict[str, Any], patch: dict[str, Any]) -> dict[str, Any]:
    """Накладывает патч; id из карточки не перезаписываем чужим."""
    merged = dict(item)
    for key, val in patch.items():
        if key == "id":
            continue
        merged[key] = val
    merged["fixed"] = True
    return merged


def sync_override_from_item(overrides: dict[str, dict[str, Any]], item: dict[str, Any]) -> None:
    """Сохраняет починенные поля в overrides по id."""
    qid = item.get("id")
    if not qid:
        return
    patch = {
        "q": item["q"],
        "options": list(item["options"]),
        "answer": item["answer"],
        "explain": item["explain"],
        "kind": item.get("kind", "single"),
        "topic": item.get("topic"),
        "group": item.get("group"),
        "fixed": True,
    }
    if item.get("code") is not None:
        patch["code"] = item["code"]
    if item.get("tags") is not None:
        patch["tags"] = list(item["tags"])
    if item.get("difficulty") is not None:
        patch["difficulty"] = item["difficulty"]
    overrides[str(qid)] = patch


def next_id(prefix: str, items: list[dict[str, Any]]) -> str:
    nums = []
    for it in items:
        m = re.match(rf"^{re.escape(prefix)}(\d+)$", str(it.get("id") or ""))
        if m:
            nums.append(int(m.group(1)))
    return f"{prefix}{(max(nums) if nums else 0) + 1}"


def merge_preserve(
    previous: list[dict[str, Any]],
    fresh: list[dict[str, Any]],
    overrides: dict[str, dict[str, Any]],
    *,
    level: str,
    append_new: bool = False,
) -> list[dict[str, Any]]:
    """Склеивает банки: ничего не удаляет, fixed/overrides побеждают.

    - Все карточки из previous остаются.
    - На каждую previous накладывается override по id (если есть).
    - Карточки с fixed=True не перезаписываются из fresh.
    - Новые из fresh дописываются ТОЛЬКО если append_new=True
      (иначе генератор не раздувает банк дубликатами с другим текстом q).
    """
    prefix = level[0]  # j / m / s
    if not previous:
        out: list[dict[str, Any]] = []
        for i, it in enumerate(fresh, 1):
            item = dict(it)
            item["id"] = f"{prefix}{i}"
            if item["id"] in overrides:
                item = apply_override(item, overrides[item["id"]])
            out.append(item)
        fresh_ids = {it["id"] for it in out}
        for qid, patch in overrides.items():
            if qid not in fresh_ids:
                orphan = apply_override({"id": qid}, patch)
                orphan["id"] = qid
                out.append(orphan)
        return out

    out = []
    seen_keys: set[tuple[str, str | None]] = set()

    for prev in previous:
        item = dict(prev)
        qid = str(item.get("id") or "")
        if qid in overrides:
            item = apply_override(item, overrides[qid])
        elif item.get("fixed"):
            item["fixed"] = True
        item["id"] = qid or next_id(prefix, out)
        out.append(item)
        seen_keys.add(question_key(item))

    prev_ids = {str(p.get("id")) for p in out}
    for qid, patch in overrides.items():
        if qid not in prev_ids:
            orphan = apply_override({"id": qid}, patch)
            orphan["id"] = qid
            out.append(orphan)
            seen_keys.add(question_key(orphan))
            prev_ids.add(qid)

    if append_new:
        for it in fresh:
            key = question_key(it)
            if key in seen_keys:
                continue
            item = dict(it)
            item["id"] = next_id(prefix, out)
            if item["id"] in overrides:
                item = apply_override(item, overrides[item["id"]])
            out.append(item)
            seen_keys.add(key)

    return out
