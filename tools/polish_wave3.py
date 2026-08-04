#!/usr/bin/env python3
"""Волна качества #3: True/False, code-output, телеграф, boilerplate."""
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

BOILER = re.compile(
    r"\s*(На собеседовании важно уметь объяснить это своими словами\.?|"
    r"Запомни формулировку: так отличают этот случай от похожих на собеседовании\.?|"
    r"Это и есть ожидаемый ответ: соседние варианты обычно про другие механизмы или слишком сильные упрощения\.?|"
    r"Это ожидаемый ответ на собеседовании; соседние варианты обычно про другие темы\.?|"
    r"Кратко зафиксируй формулировку своими словами — так лучше запоминается\.?)",
    re.I,
)

TOPIC_TAIL = re.compile(
    r"\s*(В распределённых системах приходится жить с очередями.*?|"
    r"Тесты бывают unit, integration.*?|"
    r"В безопасности важно не доверять.*?|"
    r"Аннотации типов — подсказки.*?|"
    r"Конкурентность бывает на потоках.*?|"
    r"Кэш полезен для скорости.*?|"
    r"Архитектура — про границы.*?|"
    r"Речь про асинхронный event loop.*?|"
    r"Вопрос про устройство интерпретатора.*?|"
    r"Память в CPython устроена.*?|"
    r"Сборка и распространение пакетов.*?|"
    r"Наблюдаемость строится на логах.*?|"
    r"В ООП Python методы получают self явно.*?|"
    r"Это про внутренности CPython и написание C-расширений.*?|"
    r"Сравнения в Python идут по значению.*?|"
    r"Множество хранит уникальные hashable элементы.*?|"
    r"Ключи словаря должны быть hashable.*?|"
    r"Кортеж неизменяем и может быть ключом словаря.*?|"
    r"Сверь ответ с тем, что реально делает выражение в коде.*?)$",
    re.I | re.S,
)

GENERIC_DIST = {
    "это не про эту тему",
    "это не про эту тему, а про синтаксис списков",
    "устаревшее поведение, которого в современных версиях нет",
    "это устаревший приём без практического смысла",
    "это поведение, которое всегда включено по умолчанию",
    "это только про однопоточный скрипт без сети",
    "это настройка формата логов в модуле logging",
    "это синтаксис list comprehension",
    "это ускорение интерпретатора CPython",
    "это аннотация typing без эффекта в runtime",
    "это параметр только для CI",
    "синтаксическая ошибка в любом случае",
}

TINY_TECH = re.compile(
    r"^(XSS only|SQLi|SSRF only|CSRF|venv|conda exclusive|poetry exclusive|"
    r"SOAP|graphql errors only|line|http|time|сеть|файлы tmp|snapshot|load|"
    r"fuzz network|Path|hash|json|grep|pattern|main|doctest only|"
    r"self|args|cls \(класс\)|нет аргументов|dict values|annotations raw only|"
    r"Queue|Lock|Event|circuit|bulkhead|Raft|hard timeout only|"
    r"faster|no GC|pip uninstall|egg links forever|"
    r"только Event|только asyncio|только multiproc|"
    r"O\(1\)|O\(n\)|O\(log n\)|O\(n²\))$",
    re.I,
)

# True/False-подобные ответы
BOOLISH = {"True", "False", "true", "false", "None", "ошибка", "Error", "TypeError", "ValueError"}

CURATED: dict[str, dict] = {
    "s395": {
        "q": "Чем опасна HTTP header injection (CRLF)?",
        "options": [
            "можно внедрить лишние заголовки или разбить ответ через \\r\\n",
            "это то же самое, что XSS в браузере, только на сервере",
            "это всегда SQL injection в заголовке Authorization",
            "это атака только на DNS-резолвер",
        ],
        "answer": 0,
        "explain": (
            "Если в заголовок попадает необработанный ввод с CRLF (`\\r\\n`), атакующий может "
            "добавить свои заголовки или начать тело ответа (response splitting). Валидируй и "
            "режь перевод строки в именах/значениях заголовков."
        ),
    },
    "s693": {
        "q": "Что такое φ-accrual failure detection?",
        "options": [
            "адаптивная оценка «насколько подозрителен» узел вместо жёсткого timeout",
            "единственный способ — всегда hard timeout 30 секунд",
            "это алгоритм выбора лидера Raft",
            "это проверка синтаксиса Python на удалённой ноде",
        ],
        "answer": 0,
        "explain": (
            "φ-accrual считает suspicion level по истории heartbeat: чем дольше тишина "
            "относительно обычной задержки, тем выше φ. Можно порог настраивать гибче, чем "
            "фиксированный timeout — меньше ложных срабатываний при джиттере сети."
        ),
    },
    "s65": {
        "q": "Что такое wheel в мире упаковки Python?",
        "options": [
            "готовый дистрибутив пакета (часто с бинарниками) по PEP 427",
            "только исходный tar.gz без сборки",
            "то же самое, что каталог venv",
            "формат, доступный исключительно в conda",
        ],
        "answer": 0,
        "explain": (
            "Wheel (`.whl`) — zip-дистрибутив, который pip ставит без сборки из исходников "
            "(PEP 427). Для нативных пакетов внутри уже скомпилированные артефакты под "
            "платформу/ABI. Исходники — sdist; venv — окружение, не формат пакета."
        ),
    },
    "s112": {
        "q": "Что делает StreamReader.readexactly(n) в asyncio?",
        "options": [
            "читает ровно n байт или бросает IncompleteReadError",
            "читает до EOF и всегда молча обрезает хвост",
            "читает одну текстовую строку до \\n",
            "выполняет полный HTTP-запрос",
        ],
        "answer": 0,
        "explain": (
            "`readexactly(n)` ждёт ровно n байт. Если поток закрылся раньше — "
            "`IncompleteReadError` (частичные данные доступны в исключении). Это удобно для "
            "бинарных протоколов с фиксированной длиной кадра."
        ),
    },
    "s248": {
        "q": "Что изменил editable install по PEP 660?",
        "options": [
            "стандартизировал editable-установку через build backend / pyproject",
            "оставил только устаревшие egg-link навсегда",
            "сделал editable доступным только в conda",
            "запретил editable вне Poetry",
        ],
        "answer": 0,
        "explain": (
            "PEP 660 описывает editable installs через тот же pyproject/build-backend, что и "
            "обычная сборка. Вместо хрупких egg-link появляется предсказуемый механизм "
            "`pip install -e` для современных упаковщиков."
        ),
    },
    "s394": {
        "q": "Как работает rate limit по алгоритму token bucket?",
        "options": [
            "токены копятся с заданной скоростью — запрос тратит токены, иначе отказ/ждёт",
            "есть только жёсткий max без пополнения токенов",
            "это то же самое, что circuit breaker",
            "это изоляция пулов по паттерну bulkhead",
        ],
        "answer": 0,
        "explain": (
            "Token bucket: ведро пополняется с rate R до ёмкости B. Каждый запрос забирает "
            "токены; если не хватает — throttle. Сглаживает пики лучше «голого» hard max без refill."
        ),
    },
    "s414": {
        "q": "В каком потоке SIGINT обычно становится KeyboardInterrupt?",
        "options": [
            "в главном потоке интерпретатора",
            "одинаково и надёжно в любом потоке",
            "только внутри asyncio Task",
            "только в multiprocessing worker",
        ],
        "answer": 0,
        "explain": (
            "Обработчик SIGINT в CPython заводит `KeyboardInterrupt` в главном потоке. "
            "В обычных worker-потоках этот сигнал так не превращается в исключение — "
            "не жди одинакового поведения «в любом потоке»."
        ),
    },
    "s465": {
        "q": "В чём суть атаки JWT none alg?",
        "options": [
            "подмена алгоритма на `none` и принятие токена без подписи",
            "ускорение проверки подписи через кэш CPU",
            "это CSRF через cookie SameSite",
            "это классический SQL injection в payload",
        ],
        "answer": 0,
        "explain": (
            "Атака `alg=none`: злоумышленник шлёт JWT без подписи, а дырявая библиотека "
            "принимает алгоритм `none`. Всегда явно белый список алгоритмов и проверяй подпись "
            "секретом/ключом сам."
        ),
    },
    "s483": {
        "q": "Что задаёт PEP 517 build backend?",
        "options": [
            "изолированную сборку пакета через хуки в pyproject.toml",
            "обязательный запуск setup.py напрямую как единственный способ",
            "команду pip uninstall",
            "создание venv вместо сборки",
        ],
        "answer": 0,
        "explain": (
            "PEP 517: pip вызывает заявленный build-backend (setuptools, hatchling, …) в "
            "изолированном окружении по интерфейсу хуков. Не нужно вручную `setup.py install` "
            "как единственный путь."
        ),
    },
    "j60": {
        "q": "Что означает режим 'r' у open()?",
        "options": [
            "чтение текста (по умолчанию)",
            "запись текста с обрезкой файла",
            "дозапись в конец файла",
            "бинарная запись",
        ],
        "answer": 0,
        "explain": (
            "`'r'` — read text. Файл должен существовать. Для записи — `'w'`, дозаписи — `'a'`, "
            "бинарного чтения — `'rb'`. Режим по умолчанию как раз текстовое чтение."
        ),
    },
    "j228": {
        "q": "Что вернёт `A.__name__` для `class A: ...`?",
        "options": [
            "'A'",
            "имя модуля, где объявлен класс",
            "полный qualified name со всеми пакетами",
            "TypeError",
        ],
        "answer": 0,
        "explain": (
            "`__name__` у класса — короткое имя (`'A'`). Имя модуля — в `__module__`, "
            "а «полный путь» для отображения чаще собирают через `__qualname__` / `__module__`."
        ),
    },
    "j332": {
        "q": "Что возвращает функция без `return`?",
        "options": [
            "None",
            "пустую строку ''",
            "0",
            "исключение RuntimeError",
        ],
        "answer": 0,
        "explain": (
            "Если `return` нет (или голый `return`), функция возвращает `None`. Это не ошибка "
            "и не 0 — именно объект None."
        ),
    },
    "m46": {
        "q": "Что возвращает dataclasses.fields()?",
        "options": [
            "кортеж объектов Field с описанием полей",
            "только словарь текущих значений экземпляра",
            "JSON-строку со схемой",
            "сырые __annotations__ без метаданных Field",
        ],
        "answer": 0,
        "explain": (
            "`fields(class_or_instance)` даёт кортеж `Field`: имя, тип, default, metadata и т.д. "
            "Это интроспекция схемы dataclass, а не `asdict` со значениями."
        ),
    },
    "m166": {
        "q": "Какой первый аргумент у метода с @classmethod?",
        "options": [
            "cls — сам класс, а не экземпляр",
            "self — экземпляр, как у обычного метода",
            "*args без неявного первого аргумента",
            "методу нельзя иметь аргументы",
        ],
        "answer": 0,
        "explain": (
            "`@classmethod` получает класс (`cls`). Так пишут альтернативные конструкторы "
            "(`from_json`). Обычный метод получает `self`, `@staticmethod` — ничего неявного."
        ),
    },
    "m96": {
        "q": "Для чего в pytest фикстуры capsys/capfd?",
        "options": [
            "перехватить stdout/stderr внутри теста",
            "создать временные файлы",
            "поднять HTTP-сервер",
            "заморозить системное время",
        ],
        "answer": 0,
        "explain": (
            "`capsys` / `capfd` ловят то, что тест (и тестируемый код) пишет в stdout/stderr. "
            "Удобно проверять CLI-вывод. Для файлов — `tmp_path`, для времени — freeze/mock."
        ),
    },
}


def _cap(s: str) -> str:
    s = s.strip()
    return s[0].upper() + s[1:] if s else s


def _period(s: str) -> str:
    s = s.strip()
    if s and s[-1] not in ".!?…":
        s += "."
    return s


def correct_text(item: dict) -> str:
    opts = item.get("options") or []
    ans = item.get("answer")
    if isinstance(ans, int) and 0 <= ans < len(opts):
        return opts[ans]
    if isinstance(ans, list):
        return "; ".join(opts[i] for i in ans if isinstance(i, int) and 0 <= i < len(opts))
    return ""


def is_code_or_bool_question(item: dict) -> bool:
    q = item.get("q") or ""
    opts = item.get("options") or []
    if item.get("code"):
        return True
    if re.match(r"^Что (выведет|вернёт|верно про bool)", q, re.I):
        return True
    if any(o in BOOLISH or re.match(r"^-?\d+(\.\d+)?$", o) or o.startswith("'") or o.startswith('"') for o in opts):
        # большинство вариантов — значения/True/False
        score = sum(
            1
            for o in opts
            if o in BOOLISH
            or re.match(r"^-?\d+(\.\d+)?$", o.strip())
            or (len(o) <= 12 and (o.startswith("'") or o.startswith('"') or o.startswith("(") or o.startswith("[")))
        )
        return score >= 1 and isinstance(item.get("answer"), int)
    return False


def fix_bool_code_options(item: dict) -> list[str]:
    """Вернуть осмысленные дистракторы для True/False/значение/ошибка."""
    opts = list(item.get("options") or [])
    ans = item.get("answer")
    if not isinstance(ans, int) or not (0 <= ans < len(opts)):
        return opts
    correct = opts[ans]
    pool_bool = ["False", "True", "ошибка", "None"]
    pool_num = ["0", "1", "-1", "ошибка", "None"]
    pool_gen = ["ошибка", "None", "False", "пустой результат"]

    if correct in ("True", "False"):
        pool = [x for x in pool_bool if x != correct]
    elif re.match(r"^-?\d+(\.\d+)?$", correct.strip()):
        pool = [x for x in pool_num if x != correct]
        # добавить близкие
        try:
            n = int(float(correct))
            for cand in (str(n + 1), str(n - 1), str(n * 2)):
                if cand != correct and cand not in pool:
                    pool.insert(0, cand)
        except ValueError:
            pass
    elif correct in ("None", "ошибка") or correct.endswith("Error"):
        pool = ["True", "False", "0", "''"]
    else:
        pool = list(pool_gen)

    used = {correct}
    out = []
    pi = 0
    for i, o in enumerate(opts):
        if i == ans:
            out.append(o)
            continue
        if o in GENERIC_DIST or o.startswith("это ") or TINY_TECH.match(o.strip()):
            repl = None
            for _ in range(12):
                cand = pool[pi % len(pool)]
                pi += 1
                if cand not in used:
                    repl = cand
                    break
            out.append(repl or "ошибка")
            used.add(out[-1])
        else:
            out.append(o)
            used.add(o)
    return out


def fix_concept_options(item: dict) -> list[str]:
    opts = list(item.get("options") or [])
    ans = item.get("answer")
    if not isinstance(ans, int) or item.get("kind") == "multi":
        return opts
    topic = str(item.get("topic") or "")
    pools = {
        "distributed": [
            "жёсткий таймаут без учёта сетевого джиттера",
            "полная остановка кластера при любой ошибке",
            "кэширование ответов без ключей и TTL",
        ],
        "security": [
            "отключение проверки подписи «для удобства»",
            "склеивание SQL со строками из запроса",
            "хранение секретов в репозитории в открытом виде",
        ],
        "packaging": [
            "ручной копипаст site-packages между машинами",
            "установка пакетов только через curl|sh без пинов",
            "хранение зависимостей без указания версий",
        ],
        "asyncio": [
            "блокирующий time.sleep внутри корутины",
            "создание нового процесса на каждый await",
            "отключение event loop в середине запроса",
        ],
        "testing": [
            "проверку только вручную без автотестов",
            "зависимость тестов от реального внешнего API без моков",
            "случайные sleep вместо детерминированных фикстур",
        ],
        "db": [
            "полный table scan вместо индекса всегда",
            "игнорирование транзакций при записи",
            "одинаковые гарантии во всех СУБД без чтения документации",
        ],
    }
    pool = list(pools.get(topic, [
        "слишком общее утверждение без связи с механизмом",
        "поведение другой библиотеки или другого уровня стека",
        "оптимизация, которая ломает корректность",
    ]))

    used = {opts[ans]}
    pi = 0
    out = []
    for i, o in enumerate(opts):
        if i == ans:
            out.append(o)
            continue
        bad = (
            o in GENERIC_DIST
            or o.startswith("это не про")
            or o.startswith("это только")
            or o.startswith("это устарев")
            or (len(o) <= 6 and not re.match(r"^O\(", o))
            or bool(TINY_TECH.match(o.strip()))
            or o in {"venv", "json", "hash", "SOAP", "Path", "main", "time", "line", "http", "load"}
        )
        if bad:
            repl = None
            for _ in range(15):
                cand = pool[pi % len(pool)]
                pi += 1
                if cand not in used:
                    repl = cand
                    break
            out.append(repl or o)
            used.add(out[-1])
        else:
            out.append(o)
            used.add(o)
    return out


def rewrite_question(q: str) -> str:
    q = q.strip()
    m = re.match(r"^Что означает\s+[«\"]?(.*?)[»\"]?\??\s*$", q, re.I | re.S)
    if m:
        core = m.group(1).strip().strip(" «»\"")
        low = core.lower()
        special = {
            "режим 'r' при открытии файла": "Что означает режим 'r' у open()?",
            "editable install pep 660": "Что изменил editable install по PEP 660?",
            "http header injection crlf": "Чем опасна HTTP header injection (CRLF)?",
            "phi accrual failure detection": "Что такое φ-accrual failure detection?",
            "rate limit token bucket": "Как работает rate limit по алгоритму token bucket?",
            "jwt none alg attack": "В чём суть атаки JWT none alg?",
            "pep 517 build backend": "Что задаёт PEP 517 build backend?",
            "sigint → keyboardinterrupt в": "В каком потоке SIGINT обычно становится KeyboardInterrupt?",
            "bytecode suppression / source_date_epoch": (
                "Зачем bytecode suppression и SOURCE_DATE_EPOCH для reproducible builds?"
            ),
            "debug builds with assertions": "Чем debug-сборки с assertions отличаются от release?",
            "aenter failure и cancel": "Что важно знать про сбой в __aenter__ и отмену?",
            "dependency injection вручную в python": "Как обычно делают Dependency Injection вручную в Python?",
        }
        if low in special:
            return special[low]
        if "в c-api cpython" in low:
            term = re.sub(r"\s*в c-api cpython\s*$", "", core, flags=re.I).strip()
            return f"Что такое {term} в C-API CPython?"
        if len(core) <= 50:
            return f"Что такое {core}?"
        return f"Что верно про {core}?"

    m2 = re.match(r"^Выбери верный вариант:\s*(.+)$", q, re.I)
    if m2:
        core = m2.group(1).strip().rstrip("?")
        return core if core.endswith("?") else f"Что верно про {core}?"

    m3 = re.match(r"^Что возвращает\s+Функция", q)
    if m3:
        return "Что возвращает функция без return?"

    m4 = re.match(r"^Что верно про create_shared_memory — не путать с\?$", q, re.I)
    if m4:
        return "С чем не стоит путать create_shared_memory из multiprocessing?"

    return q


def clean_explain(explain: str, correct: str, q: str) -> str:
    text = BOILER.sub("", explain or "")
    text = TOPIC_TAIL.sub("", text)
    text = re.sub(r"\s*(Проще говоря:|Итого:|Кратко:)\s*", " ", text, flags=re.I)
    text = re.sub(r"\s{2,}", " ", text).strip(" .")
    if not text:
        if correct:
            return _period(_cap(f"{correct.rstrip('.')}. Разберись, почему соседние варианты мимо"))
        return text

    # Убрать телеграф «Слово. Определение.»
    parts = [p.strip() for p in re.split(r"(?<=\.)\s+", text) if p.strip()]
    if len(parts) >= 2 and len(parts[0]) <= 28 and not parts[0].endswith(("?", "!")):
        # склеить первую метку со второй мыслью
        text = f"{parts[0].rstrip('.')} — {_cap(parts[1][0].lower() + parts[1][1:]) if parts[1] else ''}"
        if len(parts) > 2:
            text = text.rstrip(".") + ". " + " ".join(parts[2:])

    text = _period(_cap(text))

    if len(text) < 100 and correct and correct.lower() not in text.lower():
        text = _period(_cap(f"{text.rstrip('.')}: {correct.rstrip('.')}"))

    if len(text) < 90 and correct:
        text = _period(
            _cap(
                f"{correct.rstrip('.')}. "
                f"Соседние варианты обычно путают это с другим механизмом или уровнем стека"
            )
        )

    # финальная чистка двойных шаблонов
    text = BOILER.sub("", text)
    text = re.sub(r"\s{2,}", " ", text).strip()
    return _period(text)


def polish(item: dict) -> tuple[dict, bool]:
    qid = str(item.get("id") or "")
    if qid in CURATED:
        out = dict(item)
        out.update(CURATED[qid])
        out["fixed"] = True
        return out, True

    out = dict(item)
    changed = False

    new_q = rewrite_question(out.get("q") or "")
    if new_q != out.get("q"):
        out["q"] = new_q
        changed = True

    if is_code_or_bool_question(out):
        new_opts = fix_bool_code_options(out)
    else:
        new_opts = fix_concept_options(out)
    if new_opts != list(out.get("options") or []):
        out["options"] = new_opts
        changed = True

    new_expl = clean_explain(out.get("explain") or "", correct_text(out), out.get("q") or "")
    if new_expl != (out.get("explain") or ""):
        out["explain"] = new_expl
        changed = True

    # ещё раз: если explain всё ещё с boilerplate
    if BOILER.search(out.get("explain") or ""):
        out["explain"] = BOILER.sub("", out["explain"]).strip()
        out["explain"] = _period(_cap(out["explain"]))
        changed = True

    if changed:
        out["fixed"] = True
    return out, changed


def process(level: str, limit: int | None = None) -> int:
    path = DATA_DIR / f"{level}.js"
    items = load_js_bank(path)
    overrides = load_overrides(level)
    n = 0
    for i, item in enumerate(items):
        new_item, changed = polish(item)
        if changed:
            items[i] = new_item
            sync_override_from_item(overrides, new_item)
            n += 1
            if limit is not None and n >= limit:
                break
    save_overrides(level, overrides)
    write_js_bank(path, LEVEL_VAR[level], items)
    print(f"{level}: polished {n}/{len(items)}")
    return n


def main(argv: list[str] | None = None) -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--level", default="all", choices=["all", "junior", "middle", "senior"])
    p.add_argument("--limit", type=int, default=None)
    args = p.parse_args(argv)
    levels = ["senior", "middle", "junior"] if args.level == "all" else [args.level]
    total = sum(process(level, args.limit) for level in levels)
    print(f"DONE: {total}")


if __name__ == "__main__":
    main()
