#!/usr/bin/env python3
"""Общие хелперы для сборки вопросов (все *_extra.py и generate_questions.py)."""
from __future__ import annotations

from typing import Any, Iterable, Sequence


def q(
    topic: str,
    text: str,
    options: list[str],
    answer: int | Sequence[int],
    explain: str,
    code: str | None = None,
    *,
    kind: str | None = None,
    tags: Sequence[str] | None = None,
    difficulty: str | None = None,
) -> dict:
    """Собрать карточку вопроса.

    kind:
      - "single" (по умолчанию) — один верный индекс в answer
      - "multi" — несколько верных; answer = список индексов (после shuffle фронт
        пересчитает по текстам)
    tags — свободные метки (gil, cpython, git, …) для polish/фильтрации.
    difficulty — junior | middle | senior (опциональная подсказка автору).
    """
    answers: list[int]
    if isinstance(answer, (list, tuple, set)):
        answers = sorted({int(i) for i in answer})
        resolved_kind = kind or "multi"
    else:
        answers = [int(answer)]
        resolved_kind = kind or "single"

    if resolved_kind == "multi" and len(answers) < 2:
        raise ValueError(f"multi-вопрос требует ≥2 верных индекса: {text!r}")
    if resolved_kind == "single" and len(answers) != 1:
        raise ValueError(f"single-вопрос требует ровно 1 индекс: {text!r}")

    item: dict[str, Any] = {
        "topic": topic,
        "q": text,
        "options": list(options),
        "answer": answers[0] if resolved_kind == "single" else answers,
        "explain": explain,
        "kind": resolved_kind,
    }
    if code:
        item["code"] = code
    if tags:
        item["tags"] = list(tags)
    if difficulty:
        item["difficulty"] = difficulty
    return item


def q_multi(
    topic: str,
    text: str,
    options: list[str],
    correct: Sequence[int],
    explain: str,
    code: str | None = None,
    *,
    tags: Sequence[str] | None = None,
    difficulty: str | None = None,
) -> dict:
    """Удобный конструктор «выберите все верные»."""
    return q(
        topic,
        text,
        options,
        correct,
        explain,
        code=code,
        kind="multi",
        tags=tags,
        difficulty=difficulty,
    )


def uniq_opts(opts: Iterable[Any], n: int = 4) -> list[str]:
    """Уникальные строковые варианты, добиваем до n."""
    out: list[str] = []
    for o in opts:
        s = "None" if o is None else str(o)
        if s not in out:
            out.append(s)
        if len(out) >= n:
            break
    pad = 0
    while len(out) < n:
        cand = f"?{pad}"
        pad += 1
        if cand not in out:
            out.append(cand)
    return out[:n]


def mc(correct: Any, distractors: Iterable[Any], n: int = 4) -> tuple[list[str], int]:
    """Правильный ответ всегда на индексе 0 (как в остальном банке)."""
    opts = uniq_opts([correct, *distractors], n)
    c = "None" if correct is None else str(correct)
    if opts[0] != c:
        opts = [c] + [o for o in opts if o != c]
        opts = opts[:n]
        while len(opts) < n:
            opts.append(f"x{len(opts)}")
    return opts, 0


# Алиасы для обратной совместимости со старыми именами в шаблонах
_uniq = uniq_opts
_mc = mc

# Пояснение floor-division: к −∞, не «к нулю»
FLOOR_DIV_EXPLAIN = (
    "// — целочисленное деление с округлением к −∞ "
    "(floor division; для отрицательных это не то же самое, что «отрезать дробь»)."
)
