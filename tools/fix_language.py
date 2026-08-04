#!/usr/bin/env python3
"""Правка формулировок банка: без удалений, с записью в overrides.

Запуск из корня:
  python3 tools/fix_language.py              # все уровни
  python3 tools/fix_language.py --level senior
  python3 tools/fix_language.py --level senior --limit 50
  python3 tools/fix_language.py --ids s31,s768
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

_ROOT = Path(__file__).resolve().parent.parent
if str(_ROOT) not in sys.path:
    sys.path.insert(0, str(_ROOT))

from bank.preserve import (  # noqa: E402
    DATA_DIR,
    load_js_bank,
    load_overrides,
    save_overrides,
    sync_override_from_item,
    write_js_bank,
)

LEVEL_VAR = {
    "junior": "QUESTIONS_JUNIOR",
    "middle": "QUESTIONS_MIDDLE",
    "senior": "QUESTIONS_SENIOR",
}

_PODHODIT = re.compile(
    r"\s*Подходит ответ «([^»]+)»\.?",
    re.I,
)
_PODHODIT_VARIANT = re.compile(
    r"\s*Подходит вариант «([^»]+)»\.?",
    re.I,
)
_CHTO_TAKOE = re.compile(r"^Что такое\s+(.+?)\??\s*$", re.I | re.S)
_GUILLEMETS = re.compile(r"^[«\"](.+?)[»\"]$")

# Мусорные дистракторы из bulk-генераторов → замены по смыслу темы
_GARBAGE = {
    "только про GIL",
    "только SQL index",
    "HTTP 200 always",
    "только Redis Cluster",
    "запрещён",
    "равен TTL=0",
    "ускорение Python",
    "тип в typing",
    "только DevOps",
    "GIL wrapper",
    "firewall OS",
    "кэш Redis",
    "удалить ключ навсегда",
    "удвоить RAM",
    "отключить app",
}

_TOPIC_DISTRACTORS: dict[str, list[str]] = {
    "distributed": [
        "это про настройку одного процесса без сети",
        "это синоним обычного HTTP-кэша браузера",
        "это только про синтаксис Python, не про системы",
    ],
    "security": [
        "это способ ускорить интерпретатор CPython",
        "это тип из модуля typing",
        "это настройка только для CI/CD пайплайна",
    ],
    "cache": [
        "это обязательное отключение любого кэша",
        "это увеличение RAM без смены политики",
        "это удаление ключей без стратегии истечения",
    ],
    "db": [
        "это всегда запрещено во всех СУБД одинаково",
        "это всегда разрешено во всех СУБД одинаково",
        "это относится только к файловому кэшу ОС",
    ],
    "architecture": [
        "это встроенная фича GIL",
        "это замена реляционной БД",
        "это только про CSS и вёрстку",
    ],
    "design": [
        "это файрвол операционной системы",
        "это обёртка вокруг GIL",
        "это обязательный Redis-кэш",
    ],
    "observability": [
        "это объём оперативной памяти сервера",
        "это код завершения процесса",
        "это только DNS-запись",
    ],
    "git": [
        "команда никогда не переписывает историю",
        "команда сама делает rebase без спроса",
        "команда удаляет все remote-ветки",
    ],
}

_DEFAULT_DISTRACTORS = [
    "это не про данный контекст, а про синтаксис Python",
    "это устаревший синоним без практического смысла",
    "это настройка, которая всегда включена по умолчанию везде",
]


def _ensure_period(text: str) -> str:
    text = text.strip()
    if not text:
        return text
    if text[-1] not in ".!?…":
        text += "."
    return text


def _capitalize(text: str) -> str:
    text = text.strip()
    if not text:
        return text
    return text[0].upper() + text[1:]


def strip_podhodit(explain: str) -> str:
    explain = _PODHODIT.sub("", explain)
    explain = _PODHODIT_VARIANT.sub("", explain)
    explain = re.sub(r"\s{2,}", " ", explain).strip()
    return _ensure_period(explain) if explain else explain


def correct_text(item: dict) -> str:
    opts = item.get("options") or []
    ans = item.get("answer")
    if item.get("kind") == "multi" and isinstance(ans, list):
        parts = [opts[i] for i in ans if isinstance(i, int) and 0 <= i < len(opts)]
        return "; ".join(parts)
    if isinstance(ans, int) and 0 <= ans < len(opts):
        return opts[ans]
    return ""


def fix_options(item: dict) -> list[str]:
    opts = list(item.get("options") or [])
    if len(opts) < 2:
        return opts
    ans = item.get("answer")
    correct_idx = ans if isinstance(ans, int) else (ans[0] if isinstance(ans, list) and ans else 0)
    topic = str(item.get("topic") or "")
    pool = list(_TOPIC_DISTRACTORS.get(topic, _DEFAULT_DISTRACTORS))
    # дополняем общими, если темы мало
    for d in _DEFAULT_DISTRACTORS:
        if d not in pool:
            pool.append(d)

    used = set()
    pi = 0
    new_opts = []
    for i, opt in enumerate(opts):
        if i == correct_idx:
            new_opts.append(opt)
            used.add(opt)
            continue
        if opt.strip() in _GARBAGE or opt.strip() in {
            "только про GIL",
            "HTTP 200 always",
            "только SQL index",
        }:
            # подобрать замену
            repl = None
            while pi < len(pool) * 3:
                cand = pool[pi % len(pool)]
                pi += 1
                if cand not in used and cand != opts[correct_idx]:
                    repl = cand
                    break
            new_opts.append(repl or f"неверный вариант про {topic or 'тему'}")
            used.add(new_opts[-1])
        else:
            new_opts.append(opt)
            used.add(opt)
    return new_opts


def _core_term(raw: str) -> str:
    raw = raw.strip().rstrip("?").strip()
    m = _GUILLEMETS.match(raw)
    if m:
        return m.group(1).strip()
    return raw


def rewrite_chto_takoe(q: str, correct: str, topic: str) -> str | None:
    """Чинит сломанные «Что такое …?» от polish."""
    m = _CHTO_TAKOE.match(q.strip())
    if not m:
        return None
    core = _core_term(m.group(1))
    low = core.lower()

    # Уже нормальный короткий термин в кавычках/без — делаем человеческий вопрос
    verbish = bool(
        re.search(
            r"\b(лечится|полезен|нужен|нужна|нужно|означает|проверяют|закрывает|"
            r"связан|даёт|дает|решает|ограничивает|создаёт|создает|хранит|"
            r"вызывается|используется|доступен|минус|плюс|важно|гарантирует)\b",
            low,
        )
    )
    # «Что такое sql injection лечится?» → вопрос по смыслу верного ответа
    if verbish:
        # Часто ядро — обрубок исходной фразы. Собираем нормальный вопрос.
        if "лечится" in low:
            subj = re.sub(r"\s*лечится.*$", "", core, flags=re.I).strip()
            return f"Как обычно защищаются от {subj}?"
        if low.endswith("?") or "чтобы" in low:
            base = re.sub(r"\s*полезен чтобы\??$", "", core, flags=re.I).strip()
            base = re.sub(r"\s*нужен для\??$", "", base, flags=re.I).strip()
            if base:
                return f"Зачем нужен {base}?"
        if "ограничивает" in low:
            subj = re.sub(r"\s*ограничивает\??$", "", core, flags=re.I).strip()
            return f"Что ограничивает {subj}?"
        if "проверяют" in low:
            subj = re.sub(r"\s*проверяют\??$", "", core, flags=re.I).strip()
            return f"Что проверяют {subj}?"
        if "закрывает" in low:
            subj = re.sub(r"\s*закрывает\??$", "", core, flags=re.I).strip()
            return f"Что закрывает {subj}?"
        if "решает" in low:
            subj = re.sub(r"\s*решает\??$", "", core, flags=re.I).strip()
            return f"Какую задачу решает {subj}?"
        if "связан" in low:
            subj = re.sub(r"\s*связан.*$", "", core, flags=re.I).strip()
            return f"С чем связан {subj}?"
        if "доступен" in low:
            subj = re.sub(r"\s*доступен\??$", "", core, flags=re.I).strip()
            return f"Где доступен {subj}?"
        if "минус" in low:
            subj = re.sub(r"\s*минус\??$", "", core, flags=re.I).strip()
            return f"В чём минус {subj}?"
        # общий случай: не «что такое», а «что верно / что делает»
        return f"Что верно про {core}?"

    # Чистый термин: «retry storm», bulkhead, SSRF…
    if len(core) <= 60 and not re.search(r"[.!?]", core):
        # Если верный ответ похож на определение — спрашиваем смысл
        if correct and len(correct) > 15:
            return f"Что означает «{core}»?"
        return f"Что такое {core}?"

    # Длинный обрубок
    if len(core) > 60:
        return f"Что описывает формулировка: {core}?"

    return f"Что такое {core}?"


def enrich_explain(explain: str, correct: str, q: str) -> str:
    explain = strip_podhodit(explain)
    if not explain:
        if correct:
            return _ensure_period(
                _capitalize(f"{correct.rstrip('.')}. Это и есть суть вопроса")
            )
        return explain

    # Если explain == correct почти дословно и очень короткий — развернуть
    if correct and explain.rstrip(".").lower() == correct.rstrip(".").lower() and len(explain) < 100:
        explain = _capitalize(
            f"{correct.rstrip('.')}. На собеседовании ждут именно это определение, "
            f"а не соседние похожие термины"
        )
    elif len(explain) < 40 and correct and correct.lower() not in explain.lower():
        explain = _capitalize(
            f"{explain.rstrip('.')}. Имеется в виду: {correct.rstrip('.')}"
        )
    elif len(explain) < 40:
        explain = _capitalize(
            f"{explain.rstrip('.')}. Кратко: {correct}" if correct else explain
        )

    # Русификация только безопасных цельных фраз (не ломать падежи)
    replacements = [
        (r"\btip remote\b", "текущий коммит на remote"),
        (r"\bshared-ветк", "общей ветк"),
        (r"\bбез jitter\b", "без jitter (случайной задержки)"),
        (r"\bс jitter\b", "с jitter (случайной задержкой)"),
    ]
    for pat, repl in replacements:
        explain = re.sub(pat, repl, explain, flags=re.I)

    return _ensure_period(_capitalize(explain))


def polish_option(text: str) -> str:
    """Чуть живее верный/неверные варианты без ломки смысла."""
    t = text.strip()
    t = re.sub(r"^ретраи без jitter усиливают сбой$",
               "повторные запросы без jitter усиливают аварию", t, flags=re.I)
    t = re.sub(r"\bретраи без jitter\b", "повторные запросы без jitter", t, flags=re.I)
    return t


def fix_item(item: dict, *, refix: bool = False) -> tuple[dict, bool]:
    """Возвращает (новый_item, changed). По умолчанию не трогает already fixed."""
    if item.get("fixed") and not refix:
        return item, False

    original = dict(item)
    q = str(item.get("q") or "")
    correct = correct_text(item)
    topic = str(item.get("topic") or "")

    new_q = rewrite_chto_takoe(q, correct, topic)
    if new_q and new_q != q:
        q = new_q

    # «X — это…» / ««X» — это…»
    m_eto = re.match(r"^[«\"]?(.+?)[»\"]?\s*[—–-]\s*это…?\s*$", q.strip(), re.I)
    if m_eto:
        term = m_eto.group(1).strip()
        q = f"Что означает «{term}»?"

    # Паттерн «Паттерн X:» без вопроса
    m_pat = re.match(r"^Паттерн\s+(.+):\s*$", q.strip(), re.I)
    if m_pat:
        q = f"В чём суть паттерна {m_pat.group(1).strip()}?"

    options = [polish_option(o) for o in fix_options(item)]
    explain = enrich_explain(
        str(item.get("explain") or ""),
        correct_text({**item, "options": options, "answer": item.get("answer")}),
        q,
    )

    changed = (
        q != original.get("q")
        or options != list(original.get("options") or [])
        or explain != original.get("explain")
    )
    if not changed:
        return item, False

    out = dict(item)
    out["q"] = q if q.endswith("?") or out.get("code") else (q if q.endswith(("…", ".", "!")) else q)
    # Вопросы без "?" — добавить, если это вопросительная форма
    if out["q"] and not out.get("code"):
        ql = out["q"].strip()
        if re.match(
            r"^(Что|Чем|Как|Зачем|Почему|Когда|Где|Какой|Какая|Какое|Какие|В чём|Верно ли|Можно ли|Нужно ли|С чем|Какую)",
            ql,
            re.I,
        ) and not ql.endswith("?"):
            out["q"] = ql.rstrip(".") + "?"
    out["options"] = options
    out["explain"] = explain
    out["fixed"] = True
    return out, True


def process_level(
    level: str,
    *,
    ids: set[str] | None,
    limit: int | None,
    refix: bool,
) -> tuple[int, int]:
    path = DATA_DIR / f"{level}.js"
    items = load_js_bank(path)
    if not items:
        print(f"{level}: пусто или не прочитано ({path})")
        return 0, 0

    overrides = load_overrides(level)
    changed_n = 0
    scanned = 0

    for i, item in enumerate(items):
        qid = str(item.get("id") or "")
        if ids is not None and qid not in ids:
            continue
        scanned += 1

        # при refix снимаем флаг, чтобы правила применились снова
        work = dict(item)
        if refix:
            work.pop("fixed", None)

        new_item, changed = fix_item(work, refix=refix)
        if not changed and refix:
            # всё равно прогнать explain/options polish
            q = str(work.get("q") or "")
            opts = [polish_option(o) for o in (work.get("options") or [])]
            expl = enrich_explain(str(work.get("explain") or ""), correct_text({**work, "options": opts}), q)
            rq = rewrite_chto_takoe(q, correct_text({**work, "options": opts}), str(work.get("topic") or ""))
            new_q = rq or q
            if new_q != item.get("q") or opts != list(item.get("options") or []) or expl != item.get("explain"):
                new_item = dict(work)
                new_item["q"] = new_q
                new_item["options"] = opts
                new_item["explain"] = expl
                new_item["fixed"] = True
                changed = True

        if changed:
            items[i] = new_item
            sync_override_from_item(overrides, new_item)
            changed_n += 1
            if limit is not None and changed_n >= limit:
                break

    save_overrides(level, overrides)
    write_js_bank(path, LEVEL_VAR[level], items)
    print(f"{level}: scanned={scanned}, fixed_now={changed_n}, overrides={len(overrides)} → {path}")
    return scanned, changed_n


def main(argv: list[str] | None = None) -> None:
    parser = argparse.ArgumentParser(description="Правка языка карточек PyСобес")
    parser.add_argument("--level", choices=["junior", "middle", "senior", "all"], default="all")
    parser.add_argument("--limit", type=int, default=None, help="Макс. число НОВЫХ правок на уровень")
    parser.add_argument("--ids", type=str, default="", help="Список id через запятую")
    parser.add_argument(
        "--refix",
        action="store_true",
        help="Ещё раз прогнать уже fixed (улучшение правил)",
    )
    args = parser.parse_args(argv)

    ids = {x.strip() for x in args.ids.split(",") if x.strip()} or None
    levels = ["junior", "middle", "senior"] if args.level == "all" else [args.level]

    total_c = 0
    for level in levels:
        _, c = process_level(level, ids=ids, limit=args.limit, refix=args.refix)
        total_c += c
    print(f"DONE: newly fixed {total_c}")


if __name__ == "__main__":
    main()
