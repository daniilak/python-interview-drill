#!/usr/bin/env python3
"""Волна 4: убрать «Верный ответ», раскрыть термины, починить «Что верно про…»."""
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

# id → полная карточка (эталон)
CURATED: dict[str, dict] = {
    "s404": {
        "q": "Что такое SBOM?",
        "options": [
            "перечень компонентов и зависимостей поставки ПО",
            "план ручного тестирования релизов",
            "график CPU flamegraph",
            "схема OpenAPI для HTTP-ручек",
        ],
        "answer": 0,
        "explain": (
            "SBOM (Software Bill of Materials) — список того, из чего собран продукт: "
            "библиотеки, версии, лицензии. Нужен для security/compliance и реагирования на CVE."
        ),
    },
    "s143": {
        "q": "Есть ли в стандартном Python software transactional memory (STM)?",
        "options": [
            "нет стандартного STM — обычно берут locks/actors/очереди",
            "да, модуль stm в stdlib с Python 3.11",
            "GIL и есть полноценный STM",
            "asyncio.Queue реализует STM",
        ],
        "answer": 0,
        "explain": (
            "В CPython нет стандартного STM. Для общей памяти используют threading.Lock, "
            "очереди, multiprocessing, actors. GIL не заменяет транзакционную память."
        ),
    },
    "s233": {
        "q": "Что такое buffered protocol в asyncio?",
        "options": [
            "низкоуровневое управление буферами чтения/записи протокола",
            "только высокоуровневые StreamReader/StreamWriter",
            "исключительно UDP без TCP",
            "роутер HTTP-запросов в aiohttp",
        ],
        "answer": 0,
        "explain": (
            "Buffered protocol даёт колбэки get_buffer/buffer_updated — можно принимать данные "
            "прямо в свой буфер без лишних копий. Streams — более высокий уровень API."
        ),
    },
    "s361": {
        "q": "Зачем в кэше используют versioned keys?",
        "options": [
            "инвалидировать данные, меняя версию в имени ключа",
            "отключать LRU навсегда",
            "генерировать случайные ключи на каждый hit",
            "хранить все версии в одном ключе через pickle",
        ],
        "answer": 0,
        "explain": (
            "Versioned keys: `user:42:v7`. Сменили схему/данные — подняли версию, старые ключи "
            "сами «умирают» по TTL. Проще массовой точечной инвалидации по шаблону."
        ),
    },
    "s370": {
        "q": "В чём суть проблемы GraphQL N+1?",
        "options": [
            "на каждое поле/узел уходит отдельный запрос — лечат DataLoader/батчингом",
            "проблемы не существует в GraphQL",
            "SQL JOIN всегда решает это автоматически",
            "это баг только ORM Hibernate",
        ],
        "answer": 0,
        "explain": (
            "N+1: резолвер списка делает N запросов за связанными сущностями. В GraphQL это "
            "часто. Лечат батчингом/DataLoader, dataloader-паттерном и продуманным fetching."
        ),
    },
    "s434": {
        "q": "Для чего нужны pybind11 и PyO3?",
        "options": [
            "писать обёртки C++/Rust как расширения Python",
            "заменить Django/Flask на чистый C++",
            "линтить Python без flake8",
            "форматировать код вместо black",
        ],
        "answer": 0,
        "explain": (
            "pybind11 (C++) и PyO3 (Rust) помогают делать native-расширения с нормальным API "
            "для Python. Это не веб-фреймворки и не линтеры."
        ),
    },
    "s565": {
        "q": "Что такое pymalloc в CPython?",
        "options": [
            "специализированный аллокатор мелких объектов интерпретатора",
            "единственный способ — всегда сырой OS malloc",
            "куча видеопамяти GPU",
            "файл подкачки ОС",
        ],
        "answer": 0,
        "explain": (
            "pymalloc обслуживает мелкие блоки (до ~512 байт) пулами/аренами — меньше накладных "
            "расходов, чем звать OS malloc на каждый объект. Крупные объекты идут в системный аллокатор."
        ),
    },
    "s578": {
        "q": "Что означает дзен «Special cases aren't special enough to break the rules»?",
        "options": [
            "не плодить слишком особые ветки, которые ломают общие правила",
            "писать код только из special cases",
            "это цитата про устройство GIL",
            "это правило из PEP 8 про пробелы",
        ],
        "answer": 0,
        "explain": (
            "Из Zen of Python: особые случаи редко оправдывают нарушение общего дизайна. "
            "Лучше единообразие, чем лес if-ов «только для этого клиента»."
        ),
    },
    "s169": {
        "q": "Чем ограничены сокеты и файлы в браузерном Pyodide?",
        "options": [
            "песочницей браузера — нет произвольного OS I/O как на сервере",
            "в Pyodide нет типа int",
            "в Pyodide нет list",
            "в Pyodide нельзя определять функции",
        ],
        "answer": 0,
        "explain": (
            "Pyodide крутится в браузерной песочнице: сеть/файлы ограничены моделью браузера "
            "(и Emscripten), это не полный POSIX. Типы int/list/функции на месте."
        ),
    },
    "s653": {
        "q": "Ускоряет ли static typing сам по себе исполнение в CPython?",
        "options": [
            "нет — аннотации для людей, чекеров и иногда codegen, не для скорости VM",
            "да, mypy ускоряет runtime автоматически",
            "аннотации всегда включают JIT",
            "typing отключает GIL",
        ],
        "answer": 0,
        "explain": (
            "Аннотации в CPython почти не влияют на скорость байткода. mypy/pyright — "
            "статический анализ. Ускорение — профайлер, алгоритмы, native-код, не «навесил types»."
        ),
    },
    "m81": {
        "q": "Что делает contextlib.redirect_stdout?",
        "options": [
            "временно подменяет sys.stdout на другой поток",
            "настраивает logging.handlers",
            "запускает subprocess",
            "работает только с pathlib.Path",
        ],
        "answer": 0,
        "explain": (
            "redirect_stdout(new_target) на время with перенаправляет print/stdout. Удобно "
            "тестировать CLI. Это не logging и не subprocess."
        ),
    },
    "m108": {
        "q": "Что планирует asyncio.create_task?",
        "options": [
            "выполнение корутины на текущем event loop",
            "новый OS-поток",
            "новый процесс",
            "синхронный вызов функции сразу в этом же стеке без loop",
        ],
        "answer": 0,
        "explain": (
            "create_task оборачивает корутину в Task и планирует её на loop. Это не thread/process "
            "и не обычный sync-вызов."
        ),
    },
    "m224": {
        "q": "Для чего нужен dataclasses.make_dataclass?",
        "options": [
            "динамически создать класс-dataclass во время выполнения",
            "только как замена NamedTuple",
            "только как замена TypedDict",
            "это синтаксический сахар для JSON Schema",
        ],
        "answer": 0,
        "explain": (
            "make_dataclass собирает dataclass из имени и списка полей в runtime — удобно для "
            "кодогенерации/динамических схем. NamedTuple/TypedDict — другие инструменты."
        ),
    },
    "m293": {
        "q": "Зачем нужен loop.call_soon_threadsafe?",
        "options": [
            "запланировать колбэк на loop из другого потока",
            "из корутины вместо create_task",
            "создать новый процесс",
            "освободить GIL навсегда",
        ],
        "answer": 0,
        "explain": (
            "call_soon_threadsafe — безопасный способ дернуть loop из чужого потока. "
            "Из корутин на том же loop обычно create_task/call_soon."
        ),
    },
    "m380": {
        "q": "Что означает аннотация typing.NoReturn?",
        "options": [
            "функция не завершается нормальным return (exit/throw/бесконечный цикл)",
            "то же самое, что return None",
            "ускоряет байткод в runtime",
            "доступна только в Python 2.7",
        ],
        "answer": 0,
        "explain": (
            "NoReturn — для функций вроде sys.exit или вечного loop: нормального возврата нет. "
            "Это не `-> None`. В новых версиях близок typing.Never."
        ),
    },
    "m418": {
        "q": "Что такое composition root?",
        "options": [
            "место, где собирают граф зависимостей приложения",
            "когда каждый модуль сам делает new зависимостей",
            "случайный global singleton",
            "побочный эффект на import модуля",
        ],
        "answer": 0,
        "explain": (
            "Composition root — обычно main/bootstrap: там связывают реализации с портами. "
            "Остальной код принимает зависимости явно, а не разбрасывает new/global."
        ),
    },
    "m90": {
        "q": "Делят ли экземпляры @dataclass Point поле `x: int = 0`?",
        "options": [
            "нет — immutable default для int безопасен, у каждого экземпляра своё значение",
            "да — как с default [] у list",
            "это SyntaxError",
            "работает только с frozen=True",
        ],
        "answer": 0,
        "explain": (
            "Проблемный shared default — мутабельный (`list`, `dict`). У `int = 0` каждый "
            "экземпляр получает своё значение поля; это не общий список на класс."
        ),
    },
    "m382": {
        "q": "Как передать значение внутрь генератора через yield-выражение?",
        "options": [
            "методом gen.send(value)",
            "только через next(gen)",
            "только через gen.throw",
            "только через gen.close",
        ],
        "answer": 0,
        "explain": (
            "`x = yield` получает то, что передали `gen.send(x)`. `next` шлёт None, "
            "`throw` кидает исключение внутрь, `close` завершает генератор."
        ),
    },
    "m274": {
        "q": "Команда пишет «фабрику фабрик» ради одного if — что нарушено?",
        "options": [
            "KISS — решение сложнее задачи",
            "только DRY, и больше ничего",
            "обязательный принцип из asyncio",
            "Liskov Substitution",
        ],
        "answer": 0,
        "explain": (
            "Оверинжиниринг ради одного условия ломает KISS. Сначала простой if/функция; "
            "фабрики фабрик — когда вариативность реально выросла."
        ),
    },
    "m487": {
        "q": "Registry плагинов вместо giant if/elif — пример каких принципов?",
        "options": [
            "Open/Closed и Strategy: новые ветки — новые реализации",
            "нарушение LSP",
            "только про GIL",
            "антипаттерн без исключений",
        ],
        "answer": 0,
        "explain": (
            "Регистр стратегий/плагинов позволяет добавить обработчик без правки гигантского "
            "if/elif — Open/Closed + Strategy."
        ),
    },
    "j244": {
        "q": "Что делает срез xs[:]?",
        "options": [
            "поверхностную копию последовательности",
            "глубокую копию всех вложенных объектов",
            "всегда возвращает тот же объект (is)",
            "создаёт итератор без копии",
        ],
        "answer": 0,
        "explain": (
            "`xs[:]` копирует верхний уровень list/tuple и т.п. Вложенные объекты те же "
            "(shallow). Для deep — copy.deepcopy; итератор — iter(xs)."
        ),
    },
    "j1313": {
        "q": "Какой тип у литерала b'hi'?",
        "options": [
            "bytes",
            "str",
            "bytearray",
            "memoryview",
        ],
        "answer": 0,
        "explain": (
            "`b'...'` — неизменяемые bytes. str — текстовые кавычки без b, bytearray — "
            "изменяемый аналог, memoryview — взгляд на буфер."
        ),
    },
    "j1339": {
        "q": "Подклассом какого типа является bool?",
        "options": [
            "int",
            "это не тип, а синтаксическая ошибка",
            "только object, без int",
            "float",
        ],
        "answer": 0,
        "explain": (
            "bool — подкласс int: True == 1, False == 0. Поэтому True + True == 2. "
            "Но лучше не использовать bool как число в бизнес-логике."
        ),
    },
    "j35": {
        "q": "Что будет при assert cond, msg если cond ложно?",
        "options": [
            "AssertionError (с msg, если передали)",
            "тихое игнорирование",
            "print(msg) без исключения",
            "SystemExit",
        ],
        "answer": 0,
        "explain": (
            "Упавший assert бросает AssertionError. При python -O ассерты вырезаются — "
            "не клади в них критичную логику."
        ),
    },
    "j38": {
        "q": "Какой базовый класс у обычных ошибок, которые ловят в except?",
        "options": [
            "Exception",
            "только BaseException целиком",
            "класс Error из Java",
            "Throwable",
        ],
        "answer": 0,
        "explain": (
            "Обычные ошибки наследуют Exception. BaseException шире (SystemExit, "
            "KeyboardInterrupt) — except BaseException глотает выход из программы."
        ),
    },
    "j39": {
        "q": "Какова средняя сложность поиска ключа в dict в CPython?",
        "options": [
            "O(1) амортизированно",
            "O(n) всегда",
            "O(log n) как у дерева",
            "O(n log n)",
        ],
        "answer": 0,
        "explain": (
            "Словарь — хеш-таблица: средний поиск/вставка O(1) амортизированно. "
            "Худшие случаи редки; не путать с отсортированными структурами O(log n)."
        ),
    },
    "j727": {
        "q": "Выбери все изменяемые типы",
        "options": ["list", "tuple", "dict", "frozenset"],
        "answer": [0, 2],
        "kind": "multi",
        "explain": (
            "Изменяемые: list и dict. tuple и frozenset неизменяемы (и hashable при "
            "hashable содержимом). Строка тоже immutable."
        ),
    },
}

VERNYI = re.compile(
    r"\s*(Верный ответ:\s*[^.]*\.?|Правильный ответ — [^.]*\.?|"
    r"Ответ:\s*[^.]*\.\s*Разбери, почему остальные варианты не подходят по смыслу операции\.?|"
    r"Отдели правильный механизм от похожих, но неверных формулировок\.?|"
    r"Сравни с соседними git-командами: они делают другое\.?|"
    r"Подумай, блокирует ли это event loop и кто владеет ресурсами\.?|"
    r"Это подсказка для type checker, а не обязательная runtime-проверка\.?|"
    r"Хороший тест проверяет поведение, а не детали реализации вслепую\.?|"
    r"Сверяй с документацией своей СУБД — стандарт и реализация расходятся\.?|"
    r"Не доверяй пользовательскому вводу на границе системы\.?)",
    re.I,
)

GENERIC_OPT = re.compile(
    r"^(слишком общее утверждение|поведение другой библиотеки|оптимизация, которая ломает|"
    r"это не про|устаревшее поведение)",
    re.I,
)


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


def strip_vernyi(explain: str, correct: str) -> str:
    text = explain or ""
    # убрать повторы «Правильный ответ — X»
    if correct:
        esc = re.escape(correct.rstrip("."))
        text = re.sub(rf"(?:Правильный ответ — {esc}\.\s*)+", "", text, flags=re.I)
        text = re.sub(rf"(?:Верный ответ:\s*{esc}\.\s*)+", "", text, flags=re.I)
        text = re.sub(rf"(?:Ответ:\s*{esc}\.\s*)+", "", text, flags=re.I)
    text = VERNYI.sub(" ", text)
    text = re.sub(r"\s{2,}", " ", text).strip(" .")
    # если осталось ровно правильный ответ текстом
    if correct and text.lower().rstrip(".") == correct.lower().rstrip("."):
        return ""
    return text


def rewrite_verno_pro(q: str) -> str:
    q = q.strip()
    m = re.match(r"^Что верно про\s+(.+?)\??\s*$", q, re.I | re.S)
    if not m:
        return q
    core = m.group(1).strip().rstrip("?")
    low = core.lower()

    special = {
        "ограничение сокетов/файлов в браузерном pyodide": (
            "Чем ограничены сокеты и файлы в браузерном Pyodide?"
        ),
        "static typing не ускоряет cpython само по себе": (
            "Ускоряет ли static typing сам по себе исполнение в CPython?"
        ),
        "@dataclass class point: x: int = 0 — экземпляры делят x": (
            "Делят ли экземпляры @dataclass Point поле `x: int = 0`?"
        ),
        "yield выражение может принимать значение через": (
            "Как передать значение внутрь генератора через yield-выражение?"
        ),
        "registry плагинов вместо giant if/elif — пример": (
            "Registry плагинов вместо giant if/elif — пример каких принципов?"
        ),
        "средняя сложность поиска ключа в dict в cpython": (
            "Какова средняя сложность поиска ключа в dict в CPython?"
        ),
        "bool — подкласс какого типа": "Подклассом какого типа является bool?",
        "assert cond, msg — при false": "Что будет при assert cond, msg если cond ложно?",
        "create_task планирует": "Что планирует asyncio.create_task?",
    }
    if low in special:
        return special[low]

    # «Что верно про X?» где X уже вопрос/утверждение
    if re.match(r"^(да|нет|можно|нужно|есть|ускоряет|делят)", low):
        return _cap(core) + ("" if core.endswith("?") else "?")

    # код/идентификатор
    if re.match(r"^[`'\"A-Za-z_\(]", core) and len(core) < 60:
        return f"Что верно про {core}?"

    # длинная русская фраза — превратить в нормальный вопрос
    if len(core) > 40:
        if "не " in low or "нет " in low:
            return f"Верно ли, что {core[0].lower() + core[1:]}?"
        return f"Что означает: {core}?"

    return f"Что такое {core}?" if len(core.split()) <= 4 else f"Что верно про {core}?"


def improve_options(item: dict) -> list[str]:
    opts = list(item.get("options") or [])
    ans = item.get("answer")
    if item.get("kind") == "multi" or not isinstance(ans, int):
        return opts
    if not (0 <= ans < len(opts)):
        return opts

    # Для code/bool — не трогать значения
    if item.get("code") or all(
        o in {"True", "False", "None", "ошибка"} or re.match(r"^-?\d+(\.\d+)?$", o) or o.startswith("(") or o.startswith("[") or o.startswith("'")
        for o in opts
        if o
    ):
        # только заменить generic
        pass

    topic = str(item.get("topic") or "")
    pools = {
        "distributed": [
            "жёсткий timeout без учёта джиттера сети",
            "полная остановка всего кластера при любой ошибке",
            "кэш без ключей и без TTL",
        ],
        "asyncio": [
            "блокирующий time.sleep внутри корутины",
            "новый OS-поток на каждый await",
            "отключение event loop посреди запроса",
        ],
        "packaging": [
            "ручной копипаст site-packages",
            "зависимости без версий",
            "curl|sh вместо пинов и lock-файла",
        ],
        "testing": [
            "только ручная проверка без автотестов",
            "flaky sleep вместо детерминированных фикстур",
            "тесты, завязанные на внешний API без моков",
        ],
        "typing": [
            "обязательная проверка типов на каждом вызове в CPython",
            "ускорение байткода аннотациями",
            "замена исключений кодами возврата",
        ],
        "cache": [
            "отключение кэша целиком",
            "бесконечный TTL без инвалидации",
            "случайное удаление ключей на каждый hit",
        ],
        "security": [
            "отключение проверки подписи «для удобства»",
            "секреты в репозитории открытым текстом",
            "склеивание SQL со строковым вводом",
        ],
        "CPython": [
            "это настройка только pip",
            "это синтаксис list comprehension",
            "это опция Django ORM",
        ],
    }
    pool = list(
        pools.get(topic)
        or [
            "утверждение про другой уровень стека",
            "поведение, которого в CPython нет",
            "опасное упрощение, ломающее корректность",
        ]
    )

    eng_short = re.compile(
        r"^(logging|subprocess|files only Path|OS thread|process|sync call|"
        r"NamedTuple only|TypedDict|asyncio|GIL free|GIL is STM|asyncio STM|"
        r"linters|formatters|flamegraph|OpenAPI|тест-план|LRU off|random keys|"
        r"UDP only|HTTP router|GPU heap|swap file|GIL poem|PEP 8 quote|"
        r"pure Python web|чистый Python web|deep copy|iterator|"
        r"object только|float|Error|Throwable|SystemExit|print msg|"
        r"тихо игнор|Never only 2\.7|return None|global random|"
        r"import side effect only|anti-pattern|только GIL|нарушение LSP|"
        r"DRY только|send|next only|throw only|close only|"
        r"есть в stdlib|нет int|нет list|нет функций)$",
        re.I,
    )

    used = {opts[ans]}
    pi = 0
    out = []
    for i, o in enumerate(opts):
        if i == ans:
            out.append(o)
            continue
        bad = (
            bool(GENERIC_OPT.match(o))
            or bool(eng_short.match(o.strip()))
            or o in {"logging", "subprocess", "process", "asyncio", "TypedDict"}
            or (len(o) <= 10 and re.match(r"^[A-Za-z][A-Za-z0-9_]*$", o) and o not in {"True", "False", "None", "Exception", "list", "dict", "tuple", "set", "int", "str", "bytes", "bool", "re"})
        )
        # da/net как единственное слово — расширить если это не yes/no quiz с полными фразами
        if re.match(r"^(да|нет)\b", o, re.I) and len(o) < 8:
            bad = True
        if bad:
            repl = None
            for _ in range(20):
                cand = pool[pi % len(pool)]
                pi += 1
                if cand not in used and cand != opts[ans]:
                    repl = cand
                    break
            out.append(repl or o)
            used.add(out[-1])
        else:
            out.append(o)
            used.add(o)
    return out


def expand_explain(body: str, correct: str, q: str) -> str:
    body = strip_vernyi(body, correct)
    if not body:
        if not correct:
            return ""
        # Сгенерировать минимально достойный разбор
        if q.lower().startswith("что такое") or q.lower().startswith("что означает"):
            return _period(_cap(f"{correct.rstrip('.')}. Запомни определение и чем это не является"))
        return _period(
            _cap(f"{correct.rstrip('.')}. Так отличают верный механизм от похожих формулировок")
        )

    # Убрать эхо «X. Правильный ответ — X»
    if correct and body.lower().startswith(correct.lower().rstrip(".")):
        rest = body[len(correct.rstrip(".")) :].lstrip(" .—–-")
        if rest:
            body = _cap(f"{correct.rstrip('.')}. {rest}")
        else:
            body = _cap(correct)

    body = _period(_cap(body))
    if len(body) < 80 and correct and correct.lower() not in body.lower():
        body = _period(f"{body.rstrip('.')}: {correct.rstrip('.')}")
    # ещё раз вычистить vernyi если всплыл
    body = strip_vernyi(body, correct)
    return _period(_cap(body)) if body else _period(_cap(correct))


def polish(item: dict) -> tuple[dict, bool]:
    qid = str(item.get("id") or "")
    if qid in CURATED:
        out = dict(item)
        out.update(CURATED[qid])
        out["fixed"] = True
        return out, True

    out = dict(item)
    changed = False

    new_q = rewrite_verno_pro(out.get("q") or "")
    # мелочи
    new_q = re.sub(r"^Что такое create_task планирует\?$", "Что планирует asyncio.create_task?", new_q)
    new_q = re.sub(r"^Что такое xs\[:\]\?$", "Что делает срез xs[:]?", new_q)
    new_q = re.sub(r"^Что такое b'hi'\?$", "Какой тип у литерала b'hi'?", new_q)
    if new_q != out.get("q"):
        out["q"] = new_q
        changed = True

    new_opts = improve_options(out)
    if new_opts != list(out.get("options") or []):
        out["options"] = new_opts
        changed = True

    new_expl = expand_explain(out.get("explain") or "", correct_text(out), out.get("q") or "")
    if new_expl != (out.get("explain") or ""):
        out["explain"] = new_expl
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
    print(f"{level}: {n}/{len(items)}")
    return n


def main(argv: list[str] | None = None) -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--level", default="all", choices=["all", "junior", "middle", "senior"])
    p.add_argument("--limit", type=int, default=None)
    args = p.parse_args(argv)
    levels = ["senior", "middle", "junior"] if args.level == "all" else [args.level]
    print(f"DONE: {sum(process(l, args.limit) for l in levels)}")


if __name__ == "__main__":
    main()
