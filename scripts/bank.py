#!/usr/bin/env python3
"""Обслуживание банка вопросов PyСобес.

Команды:
  python3 scripts/bank.py validate  # проверить topic-файлы, бандлы и manifest
  python3 scripts/bank.py bundle    # пересобрать js/data/{junior,middle,senior}.js
  python3 scripts/bank.py release   # пересобрать и проверить перед публикацией
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "js" / "data"
LEVELS = {
    "junior": "QUESTIONS_JUNIOR",
    "middle": "QUESTIONS_MIDDLE",
    "senior": "QUESTIONS_SENIOR",
}

META_RE = re.compile(
    r"^//\s*@meta\s+topic=([^\s]+(?:\s+[^\s]+)*?)\s+group=(.+?)\s*$",
    re.M,
)
PUSH_RE = re.compile(r"\.push\((.*)\)\s*;\s*$", re.S)
BUNDLE_RE = re.compile(r"window\.\w+\s*=\s*(\[.*\])\s*;\s*$", re.S)


class BankError(ValueError):
    pass


def sort_key(card: dict) -> tuple[int, str]:
    card_id = str(card.get("id") or "")
    match = re.match(r"^[jms](\d+)$", card_id)
    return (int(match.group(1)) if match else 10**9, card_id)


def read_cards_from_push(text: str, path: Path) -> list[dict]:
    match = PUSH_RE.search(text)
    if not match:
        raise BankError(f"{path.relative_to(ROOT)}: не найден блок .push(...)")
    try:
        cards = json.loads("[" + match.group(1) + "]")
    except json.JSONDecodeError as exc:
        raise BankError(f"{path.relative_to(ROOT)}: некорректный JSON в карточках: {exc}") from exc
    if not isinstance(cards, list):
        raise BankError(f"{path.relative_to(ROOT)}: .push(...) должен содержать список карточек")
    return cards


def read_topic_file(path: Path) -> tuple[str, str, list[dict]]:
    text = path.read_text(encoding="utf-8")
    meta = META_RE.search(text)
    if not meta:
        raise BankError(f"{path.relative_to(ROOT)}: нет строки // @meta topic=... group=...")
    return meta.group(1).strip(), meta.group(2).strip(), read_cards_from_push(text, path)


def infer_meta_from_cards(cards: list[dict]) -> tuple[str, str]:
    topics = Counter(str(card.get("topic") or "") for card in cards)
    groups = Counter(str(card.get("group") or "") for card in cards)
    if not topics:
        raise BankError("empty card list")
    topic = topics.most_common(1)[0][0]
    group = groups.most_common(1)[0][0]
    if not topic:
        raise BankError("cards without topic and no @meta")
    if not group:
        raise BankError("cards without group and no @meta")
    return topic, group


def write_topic_file(path: Path, level: str, topic: str, group: str, cards: list[dict]) -> None:
    body_cards: list[dict] = []
    for card in cards:
        item = {key: value for key, value in card.items() if key not in ("topic", "group")}
        if card.get("group") and card.get("group") != group:
            item["group"] = card["group"]
        body_cards.append(item)

    body = ",\n".join(json.dumps(card, ensure_ascii=False, indent=2) for card in body_cards)
    indented = "\n".join(("  " + line if line else line) for line in body.splitlines())
    var_name = LEVELS[level]
    path.write_text(
        f"// @meta topic={topic} group={group}\n"
        f"// {level} · {len(body_cards)} cards\n"
        f"(window.{var_name} = window.{var_name} || []).push(\n"
        f"{indented}\n"
        f");\n",
        encoding="utf-8",
    )


def normalize_topic_files(level: str) -> None:
    level_dir = DATA / level
    for path in sorted(level_dir.glob("*.js")):
        text = path.read_text(encoding="utf-8")
        if META_RE.search(text):
            topic, group, cards = read_topic_file(path)
        else:
            cards = read_cards_from_push(text, path)
            topic, group = infer_meta_from_cards(cards)
        write_topic_file(path, level, topic, group, cards)


def enrich_card(card: dict, topic: str, default_group: str) -> dict:
    item = dict(card)
    item["topic"] = topic
    item["group"] = item.pop("group", default_group) or default_group
    return item


def bundle_level(level: str, var_name: str) -> tuple[int, list[dict]]:
    items: list[dict] = []
    manifest_rows: list[dict] = []

    for path in sorted((DATA / level).glob("*.js")):
        topic, group, cards = read_topic_file(path)
        items.extend(enrich_card(card, topic, group) for card in cards)
        manifest_rows.append({"topic": topic, "file": path.name, "count": len(cards), "group": group})

    payload = json.dumps(sorted(items, key=sort_key), ensure_ascii=False, indent=2)
    out = DATA / f"{level}.js"
    out.write_text(
        f"// AUTO-BUNDLED from js/data/{level}/*.js — не правь руками.\n"
        f"window.{var_name} = {payload};\n",
        encoding="utf-8",
    )
    print(f"{level}: {len(items)} → {out} ({len(manifest_rows)} topic files)")
    return len(items), manifest_rows


def bundle_all() -> None:
    manifest: dict[str, list[dict]] = {}
    for level, var_name in LEVELS.items():
        normalize_topic_files(level)
        _, rows = bundle_level(level, var_name)
        manifest[level] = rows
    (DATA / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("manifest.json updated")


def fail(errors: list[str], path: Path, message: str) -> None:
    errors.append(f"{path.relative_to(ROOT)}: {message}")


def parse_bundle(path: Path, errors: list[str]) -> list[dict]:
    text = path.read_text(encoding="utf-8")
    match = BUNDLE_RE.search(text)
    if not match:
        fail(errors, path, "не найден window.QUESTIONS_* = [...]")
        return []
    try:
        cards = json.loads(match.group(1))
    except json.JSONDecodeError as exc:
        fail(errors, path, f"некорректный JSON в бандле: {exc}")
        return []
    if not isinstance(cards, list):
        fail(errors, path, "бандл должен содержать список карточек")
        return []
    return cards


def validate_card(card: dict, path: Path, level: str, topic: str, group: str, errors: list[str]) -> dict | None:
    if not isinstance(card, dict):
        fail(errors, path, "карточка должна быть объектом")
        return None

    card_id = str(card.get("id") or "").strip()
    label = card_id or "<без id>"
    question = str(card.get("q") or "").strip()
    options = card.get("options")
    answer = card.get("answer")
    kind = card.get("kind") or ("multi" if isinstance(answer, list) else "single")

    if not card_id:
        fail(errors, path, "карточка без id")
    elif not card_id.startswith(level[0]):
        fail(errors, path, f"{label}: id не соответствует уровню {level}")
    if not question:
        fail(errors, path, f"{label}: пустой вопрос")
    if not isinstance(options, list) or len(options) != 4:
        fail(errors, path, f"{label}: нужно ровно четыре варианта ответа")
        options = []
    if any(not str(option).strip() for option in options):
        fail(errors, path, f"{label}: есть пустой вариант ответа")
    if len({str(option).strip() for option in options}) != len(options):
        fail(errors, path, f"{label}: варианты ответа дублируются")

    if kind == "multi":
        if not isinstance(answer, list) or not answer:
            fail(errors, path, f"{label}: multi-вопросу нужен непустой список answer")
        else:
            normalized = []
            for item in answer:
                if not isinstance(item, int) or item < 0 or item >= len(options):
                    fail(errors, path, f"{label}: индекс answer вне диапазона")
                else:
                    normalized.append(item)
            if len(set(normalized)) != len(normalized):
                fail(errors, path, f"{label}: индексы answer дублируются")
    elif not isinstance(answer, int) or answer < 0 or answer >= len(options):
        fail(errors, path, f"{label}: answer должен быть индексом варианта")

    if not str(card.get("explain") or "").strip():
        fail(errors, path, f"{label}: пустой разбор")

    enriched = dict(card)
    enriched["topic"] = topic
    enriched["group"] = enriched.get("group") or group
    return enriched


def source_cards(level: str, errors: list[str]) -> list[dict]:
    cards: list[dict] = []
    level_dir = DATA / level
    if not level_dir.exists():
        fail(errors, level_dir, "папка уровня не найдена")
        return cards

    for path in sorted(level_dir.glob("*.js")):
        try:
            topic, group, raw_cards = read_topic_file(path)
        except BankError as exc:
            errors.append(str(exc))
            continue
        for card in raw_cards:
            enriched = validate_card(card, path, level, topic, group, errors)
            if enriched:
                cards.append(enriched)
    return cards


def validate_level(level: str, var_name: str, seen_ids: dict[str, str], errors: list[str]) -> int:
    cards = source_cards(level, errors)
    for card in cards:
        card_id = str(card.get("id") or "")
        if not card_id:
            continue
        if card_id in seen_ids:
            fail(errors, DATA / level, f"{card_id}: дубль id, уже есть в {seen_ids[card_id]}")
        else:
            seen_ids[card_id] = level

    bundle_path = DATA / f"{level}.js"
    bundled = parse_bundle(bundle_path, errors)
    source_ids = [card.get("id") for card in sorted(cards, key=sort_key)]
    bundle_ids = [card.get("id") for card in bundled]
    if source_ids != bundle_ids:
        fail(errors, bundle_path, "бандл не совпадает с topic-файлами; запусти scripts/bank.py bundle")
    if bundled and not re.search(rf"window\.{var_name}\s*=", bundle_path.read_text(encoding="utf-8")):
        fail(errors, bundle_path, f"ожидалась переменная window.{var_name}")
    return len(cards)


def validate_manifest(errors: list[str]) -> None:
    path = DATA / "manifest.json"
    try:
        manifest = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        fail(errors, path, f"manifest не читается: {exc}")
        return

    for level in LEVELS:
        rows = manifest.get(level)
        if not isinstance(rows, list):
            fail(errors, path, f"нет списка manifest для {level}")
            continue
        files = {row.get("file") for row in rows if isinstance(row, dict)}
        actual = {p.name for p in (DATA / level).glob("*.js")}
        if files != actual:
            fail(errors, path, f"manifest для {level} не совпадает с topic-файлами")


def validate_all() -> int:
    errors: list[str] = []
    seen_ids: dict[str, str] = {}
    counts = {
        level: validate_level(level, var_name, seen_ids, errors)
        for level, var_name in LEVELS.items()
    }
    validate_manifest(errors)

    if errors:
        print("Bank validation failed:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1

    total = sum(counts.values())
    print(
        "Bank validation passed: "
        + ", ".join(f"{level}={count}" for level, count in counts.items())
        + f", total={total}"
    )
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description="Сборка и проверка банка вопросов PyСобес")
    parser.add_argument("command", nargs="?", choices=("validate", "bundle", "release"), default="release")
    args = parser.parse_args()

    try:
        if args.command == "validate":
            return validate_all()
        if args.command == "bundle":
            bundle_all()
            return 0
        bundle_all()
        return validate_all()
    except BankError as exc:
        print(f"Bank command failed: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
