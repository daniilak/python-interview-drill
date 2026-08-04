#!/usr/bin/env python3
"""Регрессионный аудит банков вопросов после generate_questions.py.

Пороги согласованы с ТЗ §5 (релиз 1.2). Exit code ≠ 0 при нарушении.
"""
from __future__ import annotations

import json
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path

_HERE = Path(__file__).resolve().parent
ROOT = _HERE.parent if _HERE.name == "tools" else _HERE
DATA = ROOT / "js" / "data"

TEMPLATE_IMPORTANT = "Здесь важно понять"
TEMPLATE_THEREFORE = "Поэтому верный вариант"
TEMPLATE_MEANS = "означает следующее"
TEMPLATE_CORRECT = re.compile(r"(?:Правильный|Верный)\s+ответ\s*:", re.I)
CAP_ARTIFACTS = re.compile(r"\b(pEP|cPython|gIL|oRM)\b")
CJK = re.compile(r"[\u4e00-\u9fff]")
BAD_CONTEXT = re.compile(r"при\s+в\s+контексте", re.I)
# Явно сломанные артефакты (dict-литерал съеден двоеточием и т.п.)
TRUNCATED = re.compile(r"Что вернёт\s+1\}|Что вернёт\s+=\s*[^=]")
BARE_Q = re.compile(r"^Что\s+(будет|выведет)\??$", re.I)
ARROW_OUTSIDE_QUOTES = re.compile(r"→")

# «Что вернёт/выведет» допустимо только если похоже на код/выражение
RETURN_WRAP = re.compile(r"^Что\s+(верн[её]т|выведет)\s+(.+?)\??$", re.I)
CODEISH = re.compile(
    r"[\[\](){}+\-*/%&|^=<>@.]|"
    r"\b(def|class|lambda|print|len|type|list|dict|set|tuple|range|"
    r"True|False|None|int|str|float|bool)\b|"
    r"^['\"0-9]",
)


def load_bank(path: Path) -> list[dict]:
    text = path.read_text(encoding="utf-8")
    # window.QUESTIONS_X = [...];
    start = text.find("[")
    end = text.rfind("]")
    if start < 0 or end < 0:
        raise SystemExit(f"Cannot parse {path}")
    return json.loads(text[start : end + 1])


def arrows_outside_guillemets(text: str) -> bool:
    if "→" not in text:
        return False
    parts = re.split(r"(«[^»]*»)", text)
    for i, part in enumerate(parts):
        if i % 2 == 0 and "→" in part:
            return True
    return False


def audit_items(items: list[dict], level: str) -> dict:
    n = len(items) or 1
    counts = Counter()
    short_explains: list[str] = []
    bad_qs: list[str] = []
    groups: dict[str, int] = defaultdict(int)
    topics: dict[str, int] = defaultdict(int)

    for it in items:
        explain = it.get("explain") or ""
        q = it.get("q") or ""
        opts = it.get("options") or []
        groups[it.get("group") or "?"] += 1
        topics[it.get("topic") or "?"] += 1

        if TEMPLATE_IMPORTANT in explain:
            counts["template_important"] += 1
        if TEMPLATE_THEREFORE in explain:
            counts["template_therefore"] += 1
        if TEMPLATE_MEANS in explain:
            counts["template_means"] += 1
        if TEMPLATE_CORRECT.search(explain):
            counts["correct_answer_boilerplate"] += 1
        if CAP_ARTIFACTS.search(explain) or CAP_ARTIFACTS.search(q):
            counts["cap_artifacts"] += 1
        if len(explain) < 80:
            counts["short_explain"] += 1
            if len(short_explains) < 8:
                short_explains.append(f"{it.get('id')}: {explain[:70]}")
        if arrows_outside_guillemets(explain):
            counts["arrows_explain"] += 1
        for opt in opts:
            if arrows_outside_guillemets(str(opt)):
                counts["arrows_options"] += 1
                break
        if CJK.search(q) or CJK.search(explain):
            counts["cjk"] += 1
            bad_qs.append(f"{it.get('id')}: CJK in q/explain")
        if BAD_CONTEXT.search(q):
            counts["bad_context"] += 1
            bad_qs.append(f"{it.get('id')}: {q}")
        if TRUNCATED.search(q):
            counts["truncated_q"] += 1
            bad_qs.append(f"{it.get('id')}: {q}")
        if BARE_Q.match(q.strip()):
            counts["bare_q"] += 1
            bad_qs.append(f"{it.get('id')}: {q}")
        m = RETURN_WRAP.match(q.strip())
        if m:
            body = m.group(2).strip()
            if not CODEISH.search(body) and not it.get("code"):
                counts["false_return_wrap"] += 1
                if counts["false_return_wrap"] <= 5:
                    bad_qs.append(f"{it.get('id')} false wrap: {q}")

    tiny_groups = {g: c for g, c in groups.items() if c <= 2}
    topic_case_dupes = find_case_dupes(topics)

    return {
        "level": level,
        "n": len(items),
        "counts": dict(counts),
        "pct_important": 100.0 * counts["template_important"] / n,
        "tiny_groups": tiny_groups,
        "topic_case_dupes": topic_case_dupes,
        "short_samples": short_explains,
        "bad_q_samples": bad_qs[:12],
        "groups": dict(groups),
    }


def find_case_dupes(topics: dict[str, int]) -> list[tuple[str, str]]:
    by_low: dict[str, list[str]] = defaultdict(list)
    for t in topics:
        by_low[t.lower()].append(t)
    out = []
    for variants in by_low.values():
        if len(set(variants)) > 1:
            out.append(tuple(sorted(variants)))
    return out


def check_thresholds(reports: list[dict]) -> list[str]:
    fails: list[str] = []
    total = sum(r["n"] for r in reports) or 1
    important = sum(r["counts"].get("template_important", 0) for r in reports)
    pct = 100.0 * important / total
    if pct >= 5.0:
        fails.append(f"«Здесь важно понять» = {pct:.1f}% (нужно < 5%)")

    for key, label in (
        ("correct_answer_boilerplate", "«Правильный ответ:» в explain"),
        ("cap_artifacts", "артефакты pEP/cPython/gIL/oRM"),
        ("cjk", "CJK-иероглифы"),
        ("bad_context", "«при в контексте»"),
        ("truncated_q", "обрезанные q"),
        ("bare_q", "голые «Что будет/выведет»"),
        ("arrows_options", "→ в options вне ёлочек"),
    ):
        n = sum(r["counts"].get(key, 0) for r in reports)
        if n > 0:
            fails.append(f"{label}: {n}")

    for r in reports:
        for g, c in r["tiny_groups"].items():
            if g != "Разное" and "черновик" not in g.lower():
                fails.append(f"{r['level']}: крошечная группа «{g}» ({c})")
        for pair in r["topic_case_dupes"]:
            fails.append(f"{r['level']}: дубли topic {pair}")

    return fails


def print_report(reports: list[dict]) -> None:
    total = sum(r["n"] for r in reports)
    important = sum(r["counts"].get("template_important", 0) for r in reports)
    therefore = sum(r["counts"].get("template_therefore", 0) for r in reports)
    means = sum(r["counts"].get("template_means", 0) for r in reports)
    short = sum(r["counts"].get("short_explain", 0) for r in reports)
    print(f"TOTAL cards: {total}")
    print(f"  «Здесь важно понять»: {important} ({100*important/total:.1f}%)")
    print(f"  «Поэтому верный вариант»: {therefore}")
    print(f"  «означает следующее»: {means}")
    print(f"  explain < 80: {short}")
    for r in reports:
        c = r["counts"]
        print(f"\n[{r['level']}] n={r['n']}")
        print(
            f"  important={c.get('template_important',0)} "
            f"false_return={c.get('false_return_wrap',0)} "
            f"cjk={c.get('cjk',0)} bad_ctx={c.get('bad_context',0)} "
            f"trunc={c.get('truncated_q',0)} arrows_opt={c.get('arrows_options',0)}"
        )
        if r["tiny_groups"]:
            print(f"  tiny groups: {r['tiny_groups']}")
        if r["topic_case_dupes"]:
            print(f"  topic case dupes: {r['topic_case_dupes']}")
        for s in r["bad_q_samples"][:5]:
            print(f"  ! {s}")


def main() -> int:
    reports = []
    for name in ("junior", "middle", "senior"):
        path = DATA / f"{name}.js"
        if not path.exists():
            print(f"missing {path}", file=sys.stderr)
            return 2
        reports.append(audit_items(load_bank(path), name))

    print_report(reports)
    fails = check_thresholds(reports)
    print()
    if fails:
        print("FAIL:")
        for f in fails:
            print(f"  - {f}")
        return 1
    print("OK: audit thresholds passed")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
