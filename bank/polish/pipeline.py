"""Нормализация формулировок вопросов и расширение коротких объяснений."""
from __future__ import annotations

import re

# Уже полноценный вопрос — не трогаем
_CLEAR_START = re.compile(
    r"^(что|как|зачем|почему|когда|где|можно ли|нужно ли|чем|какой|какая|какое|какие|кто|есть ли|"
    r"выбери|укажи|назови|опиши|перечисли|сравни|гарантирован|опасно ли|верно ли|правда ли|"
    r"что вернёт|что вернет|что вернётся|что вернется|что выведет|что напечатает|что вызовет|что произойдёт|что произойдет|"
    r"что делает|что будет|что такое|в чём|в чем|для чего|какова|каков|"
    r"чем отличается|в чём разница|в чем разница|как создать|как объявить|как открыть|"
    r"как импортировать|как записать|как назвать|как объединить|как скопировать|как обменять|"
    r"что означает|ловушка|во что|с чем связан|с чем связаны|какой тип|какой модуль|"
    r"какой класс|какой метод|какой оператор|какой литерал|как правильно|как безопасно|"
    r"в чём риск|в чем риск|какая основн|какой основн|создаёт ли|создает ли|будет ли|"
    r"удалось ли|поддерживается ли|разрешено ли|допустимо ли|допустим ли|существует ли|когда возникает)\b",
    re.I,
)

# Похоже на код / выражение Python
_CODE_MARKERS = re.compile(
    r"[\[\](){}+\-*/%&|^=<>@]|"
    r"\b(def|class|import|from|with|for|if|else|elif|return|yield|lambda|print|"
    r"list|dict|set|tuple|range|enumerate|zip|map|filter|sorted|sum|max|min|any|all|"
    r"round|abs|len|type|int|str|float|bool|Counter|reduce|product|permutations|"
    r"combinations|accumulate|isinstance|getattr|setattr|hasattr|super|staticmethod|"
    r"classmethod|property|dataclass|field|match|case)\b",
    re.I,
)

# Концепты, которые нельзя оборачивать в «Что вернёт …?»
_CONCEPT_NOT_CODE = re.compile(
    r"\b(timing\s*attack|mutation\s*testing|circular\s*import|idempotent|"
    r"debug\s*builds?|staticmethod|classmethod|async\s+for|yield\b|"
    r"listcomp|nested|import\s+внутри|переменная\s+в\s+for|"
    r"вложенный\s+for|warning|race\s*condition|deadlock|cache\s*stampede|"
    r"lost\s*update|n\+1|soft\s*delete|event\s*sourcing|cqrs|raft|"
    r"metaclass|descriptor|gil\b|refcount|bytecode)\b",
    re.I,
)

_ACRONYMS = frozenset(
    {
        "PEP",
        "CPython",
        "GIL",
        "ORM",
        "API",
        "HTTP",
        "HTTPS",
        "SQL",
        "JSON",
        "YAML",
        "XML",
        "CSV",
        "URL",
        "URI",
        "UUID",
        "CPU",
        "RAM",
        "IO",
        "I/O",
        "FIFO",
        "LIFO",
        "MRO",
        "ABC",
        "SOLID",
        "DRY",
        "KISS",
        "YAGNI",
        "REST",
        "RPC",
        "TCP",
        "UDP",
        "SSL",
        "TLS",
        "JWT",
        "OAuth",
        "ASGI",
        "WSGI",
        "CLI",
        "REPL",
        "IDE",
        "CI",
        "CD",
        "CDN",
        "DB",
        "ORM",
        "TTL",
        "WAL",
        "ACID",
        "BASE",
        "CQRS",
        "EAFP",
        "LBYL",
        "LEGB",
        "FIFO",
        "NaN",
        "None",
        "True",
        "False",
        "PyPI",
        "POSIX",
        "ASCII",
        "UTF",
        "UTF-8",
        "CRUD",
        "DTO",
        "MVC",
        "MVP",
        "SLA",
        "SLO",
        "KPI",
    }
)

_TOPIC_CONTEXT: dict[str, str] = {
    "C-API": "Это про внутренности CPython и написание C-расширений, а не про обычный прикладной код.",
    "c-api": "Это про внутренности CPython и написание C-расширений, а не про обычный прикладной код.",
    "CPython": "Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "cpython": "Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "GIL": "GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "gil": "GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "asyncio": "Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "async": "Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "typing": "Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "метаклассы": "Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "дескрипторы": "Дескрипторы управляют доступом к атрибутам через __get__, __set__ и __delete__.",
    "packaging": "Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "security": "В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "architecture": "Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "db": "В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "cache": "Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "distributed": "В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "observability": "Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "performance": "Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "perf": "Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "testing": "Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "тесты": "Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "memory": "Память в CPython устроена через подсчёт ссылок, циклический GC, buffer protocol и иногда __slots__.",
    "память": "Память в CPython устроена через подсчёт ссылок, циклический GC, buffer protocol и иногда __slots__.",
    "gc": "Сборка мусора сочетает подсчёт ссылок и отдельный проход для циклов ссылок.",
    "GC": "Сборка мусора сочетает подсчёт ссылок и отдельный проход для циклов ссылок.",
    "git": "Git хранит историю коммитов; merge и rebase по-разному влияют на историю и на shared-ветки.",
    "rebase": "rebase переписывает хеши коммитов, поэтому на общих ветках его применяют только по договорённости.",
    "concurrency": "Конкурентность бывает на потоках, процессах и async — у каждого свои ограничения и цена синхронизации.",
    "buffer": "Buffer protocol и memoryview позволяют работать с памятью без лишних копий байтов.",
    "операторы": "Операторы Python имеют чёткую семантику: арифметика, побитовые операции, сравнения и срезы ведут себя предсказуемо, если помнить приоритет и типы операндов.",
    "строки": "Строки в Python неизменяемы: любой «изменяющий» метод возвращает новую строку, а срезы работают так же, как у последовательностей.",
    "списки": "Список — изменяемая последовательность: методы вроде append мутируют объект и часто возвращают None.",
    "словари": "Ключи словаря должны быть hashable; с Python 3.7 порядок вставки — часть языкового контракта.",
    "множества": "Множество хранит уникальные hashable элементы; порядок обхода не является контрактом языка.",
    "функции": "Аргументы по умолчанию вычисляются один раз при определении функции — отсюда ловушка с изменяемыми default.",
    "исключения": "Исключения лучше ловить точечно: широкий except Exception маскирует настоящие ошибки.",
    "декораторы": "Декоратор — это функция, которая принимает другую функцию и возвращает обёртку с доп. поведением.",
    "генераторы": "Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "itertools": "itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "HTTP": "В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "http": "В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "SQL": "SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "встроенные": "Встроенные функции вроде len, enumerate и zip работают с любыми подходящими итерируемыми объектами.",
    "сравнения": "Сравнения в Python идут по значению; пустые коллекции ложны в bool, но не равны False.",
    "кортежи": "Кортеж неизменяем и может быть ключом словаря, если все его элементы тоже hashable.",
    "циклы": "break выходит из ближайшего цикла, continue переходит к следующей итерации; у for есть ветка else без break.",
    "ООП": "В ООП Python методы получают self явно, а поиск атрибутов идёт по MRO.",
    "logging": "Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "логирование": "Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "enum": "Enum задаёт именованные константы с фиксированным набором значений.",
    "MRO": "MRO (Method Resolution Order) задаёт порядок поиска методов при множественном наследовании по алгоритму C3.",
    "SOLID": "SOLID — набор принципов объектного дизайна; в Python их обычно выражают через протоколы, ABC и композицию.",
    "pytest": "Pytest — основной тестовый раннер в Python-экосистеме: фикстуры, параметризация, плагины.",
}

_OPERATOR_BLURBS: dict[str, str] = {
    "%": "Оператор % возвращает остаток от деления.",
    "//": "Оператор // — целочисленное деление с округлением вниз (к −∞).",
    "**": "Оператор ** возводит число в степень.",
    "^": "Оператор ^ — побитовое исключающее ИЛИ (XOR), а не возведение в степень.",
    "|": "Оператор | — побитовое ИЛИ для целых или объединение для множеств и словарей.",
    "&": "Оператор & — побитовое И для целых или пересечение для множеств.",
    "<<": "Оператор << сдвигает биты влево (умножение на степень двойки).",
    ">>": "Оператор >> сдвигает биты вправо.",
    "~": "Оператор ~ — побитовая инверсия.",
    ":=": "Моржовый оператор := присваивает значение внутри выражения и сразу его возвращает.",
}

# Короткие номинальные explains → готовый разбор (без шаблона «Здесь важно понять»)
_NOUN_BLURBS: dict[str, str] = {
    "остаток": "Оператор % возвращает остаток от деления левого операнда на правый.",
    "повтор строки": "Умножение строки на целое повторяет её содержимое заданное число раз.",
    "конкатенация": "Оператор + для строк и списков склеивает последовательности в новый объект.",
    "целочисленное деление": "Оператор // делит нацело с округлением вниз, к минус бесконечности.",
    "возведение в степень": "Оператор ** возводит левый операнд в степень правого.",
    "неизменяемое множество": "frozenset — неизменяемое множество: его можно использовать как ключ dict или элемент set.",
    "пустой словарь": "Литерал {} создаёт пустой словарь; пустое множество получают через set().",
    "shallow copy": "Поверхностная копия дублирует контейнер, но вложенные объекты остаются общими.",
    "deep copy": "deepcopy рекурсивно копирует вложенные объекты, чтобы изменения во вложенности не протекали.",
}

_CORRECT_ANSWER_RE = re.compile(
    r"(?:^|\s)(?:Правильный ответ|Верный ответ|Ответ)\s*:\s*«([^»]+)»\.?",
    re.I,
)
_TELEGRAPH_RE = re.compile(
    r"^([%&|^~]|//|\*\*|<<|>>|:=|[A-Za-z_][\w.]{0,24}|[А-Яа-яЁё][^—–]{0,40}?)\s*[—–]\s*(.+)$"
)
_CJK_RE = re.compile(r"[\u4e00-\u9fff]")
_EXCEPTION_WHEN = re.compile(
    r"^(KeyError|IndexError|TypeError|ValueError|AttributeError|NameError|"
    r"ZeroDivisionError|StopIteration|ImportError|RuntimeError|AssertionError|"
    r"FileNotFoundError|PermissionError|OverflowError|RecursionError|"
    r"UnboundLocalError|SyntaxError|IndentationError|ModuleNotFoundError)"
    r"(?:\s+при)?$",
    re.I,
)


def _strip_ellipsis(text: str) -> str:
    return text.strip().rstrip("…").rstrip("...").strip()


def _ensure_q(text: str) -> str:
    text = text.strip()
    return text if text.endswith("?") else f"{text}?"


def _safe_join(prefix: str, body: str, suffix: str = "") -> str:
    """Склеивает строки без .format/.f-string, чтобы `{` в коде не ломал шаблон."""
    return f"{prefix}{body}{suffix}"


def _is_clear(text: str) -> bool:
    t = text.strip().rstrip("?").strip()
    if not t:
        return False
    candidate = f"{t}?"
    if _CLEAR_START.match(candidate):
        return True
    if re.search(
        r"\b(что вернётся|что вернется|что выведет|что произойдёт|что произойдет|что вернёт|что вернет|что будет)\b",
        candidate,
        re.I,
    ):
        return True
    if re.search(r"[—–-]\s*что\s+(будет|верн|вывед|произойд)", candidate, re.I):
        return True
    return False


def _infer_dash_question(core: str) -> str | None:
    """«7 // 2 — что будет?» уже ок; «expr — результат» → вопрос."""
    m = re.search(r"^(.+?)\s*[—–-]\s*(что\s+.+)$", core, re.I)
    if not m:
        return None
    left, right = m.group(1).strip(), m.group(2).strip()
    if _CLEAR_START.match(f"{right}?"):
        return _ensure_q(core)
    if _is_expression_code(left):
        return _ensure_q(_safe_join("Что вернёт ", left))
    return None


def _correct_texts(item: dict) -> list[str]:
    options = item.get("options") or []
    answer = item.get("answer", 0)
    idxs = answer if isinstance(answer, list) else [answer]
    out = []
    for i in idxs:
        if isinstance(i, int) and 0 <= i < len(options):
            out.append(str(options[i]).strip())
    return out


def _ensure_sentence(text: str) -> str:
    text = text.strip()
    if not text:
        return text
    if text[-1] not in ".!?…":
        text += "."
    return text


def _capitalize_sentence(text: str) -> str:
    """Капитализирует начало предложения, не ломая акронимы PEP/CPython/GIL/…"""
    text = text.strip()
    if not text:
        return text
    # Уже начинается с известного акронима / кода
    first_token = re.match(r"^([A-Za-z_][\w./+-]*)", text)
    if first_token and first_token.group(1) in _ACRONYMS:
        return text
    if first_token and first_token.group(1).isupper() and len(first_token.group(1)) >= 2:
        return text
    # Код/литерал в начале — не трогаем
    if text[0] in "'\"`([{_<0123456789" or text.startswith(("b'", 'b"', "f'", 'f"', "r'", 'r"')):
        return text
    return text[0].upper() + text[1:]


def _lower_sentence_start(text: str) -> str:
    """Понижает первую букву для встройки в середину фразы, сохраняя акронимы."""
    text = text.strip()
    if not text:
        return text
    first_token = re.match(r"^([A-Za-z_][\w./+-]*)", text)
    if first_token and (
        first_token.group(1) in _ACRONYMS
        or (first_token.group(1).isupper() and len(first_token.group(1)) >= 2)
    ):
        return text
    if text[0] in "'\"`([{_<0123456789":
        return text
    return text[0].lower() + text[1:]


def _replace_arrows(text: str) -> str:
    """Заменяет стрелки на словесные связки (не трогает текст внутри «ёлочек»)."""
    if not text:
        return text

    parts = re.split(r"(«[^»]*»)", text)
    out_parts: list[str] = []
    for i, part in enumerate(parts):
        if i % 2 == 1:
            # Даже внутри ёлочек для option-текстов стрелки лучше словами —
            # вызывающий код решает; здесь оставляем как есть только если это цитата ответа.
            out_parts.append(part)
            continue
        out = part
        for pat, rep in (
            (
                r"40001\s*/\s*serialization_failure\s*(?:→|->)\s*retry",
                "код 40001 (serialization_failure) обычно обрабатывают повтором попытки",
            ),
            (
                r"serialization_failure\s*(?:→|->)\s*retry",
                "ошибку сериализации обычно обрабатывают повтором попытки",
            ),
            (r"(?:→|->)\s*retry\b", ", после чего делают повтор попытки"),
            (r"\bretry\s*(?:→|->)\s*", "повтор попытки, затем "),
            (
                r"([A-Za-z_][\w.]*)\s*(?:→|->)\s*(?:…|\.\.\.)\s*(?:→|->)\s*([A-Za-z_][\w.]*)",
                r"от \1 до \2 через промежуточные типы",
            ),
            (r"warning\s*(?:→|->)\s*exception", "предупреждение превращается в исключение"),
            (
                r"Local\s*(?:→|->)\s*Enclosing\s*(?:→|->)\s*Global\s*(?:→|->)\s*Builtins",
                "Local, затем Enclosing, Global и Builtins",
            ),
            (r"hashable\s*(?:→|->)\s*", "hashable: "),
            (r"вход\s*(?:→|->)\s*ожидание", "вход и ожидаемый результат"),
            (r"int\s*(?:→|->)\s*str", "из int в str"),
            (r"object\s*(?:→|->)\s*JSON", "объект в JSON"),
            (r"JSON-строк\w*\s*(?:→|->)\s*", "JSON-строку в "),
            (r"utf-8\s*(?:→|->)\s*", "utf-8 даёт "),
        ):
            out = re.sub(pat, rep, out, flags=re.I)

        def arrow_pair(m: re.Match[str]) -> str:
            a, b = m.group(1).strip(), m.group(2).strip()
            if a in ("…", "...") or b in ("…", "..."):
                return f"{a} и далее {b}"
            if len(a) <= 28 and len(b) <= 28 and " " not in a and " " not in b:
                return f"{a}, а затем {b}"
            return f"{a}, и далее {b}"

        out = re.sub(
            r"([^\s→\-]{1,40})\s*(?:→|->|⇒)\s*([^\s→\-.,;!]{1,40})",
            arrow_pair,
            out,
        )
        out = re.sub(r"\s*(?:→|->|⇒)\s*", ", и далее ", out)
        out_parts.append(out)
    return "".join(out_parts)


def _replace_arrows_everywhere(text: str) -> str:
    """Стрелки → слова, в том числе внутри «ёлочек» (для options)."""
    if not text or "→" not in text and "->" not in text and "⇒" not in text:
        return text
    # Снимаем ёлочки временно: заменяем стрелки во всём тексте
    return _replace_arrows(text.replace("«", "").replace("»", ""))


def _expand_short_noun_phrase(body: str, corrects: list[str], kind: str) -> str:
    """Односложные обрывки → связное предложение без шаблона «Здесь важно понять»."""
    body = body.strip().rstrip(".")
    if not body or len(body) > 55:
        return body
    if re.search(
        r"\b(это|означает|возвращает|делает|нужен|нужно|позволяет|создаёт|создает|"
        r"хранит|работает|используется|происходит|нужны|важно|обычно|поэтому|"
        r"если|когда|потому|например|здесь|кратко)\b",
        body,
        re.I,
    ):
        return body

    key = body.lower().strip()
    if key in _NOUN_BLURBS:
        blurb = _NOUN_BLURBS[key]
        correct = corrects[0] if corrects and kind != "multi" else ""
        if correct and correct.lower() not in blurb.lower():
            return f"{blurb} Подходит ответ «{correct}»."
        return blurb

    if kind == "multi":
        return _ensure_sentence(_safe_join("Кратко: ", _lower_sentence_start(body)))

    correct = corrects[0] if corrects else ""
    lead = _capitalize_sentence(body)
    if correct:
        return f"{_ensure_sentence(lead)} Подходит ответ «{correct}»."
    return _ensure_sentence(lead)


def _expand_telegraph_dash(text: str) -> str:
    """«% — остаток» → полноценное предложение."""
    text = text.strip()
    m = _TELEGRAPH_RE.match(text)
    if not m:
        return text
    left, right = m.group(1).strip(), m.group(2).strip().rstrip(".")
    if left in _OPERATOR_BLURBS and len(right) < 80:
        base = _OPERATOR_BLURBS[left]
        if right.lower() in base.lower() or base.lower().startswith(right.lower()[:20]):
            return base
        return f"{base} Имеется в виду: {_lower_sentence_start(right)}."
    if len(left) <= 40 and len(right) <= 120:
        return _capitalize_sentence(f"{left} — {_lower_sentence_start(right)}")
    return text


def _strip_correct_answer_boilerplate(text: str) -> tuple[str, str | None]:
    """Убирает шаблон «Правильный ответ: …»; возвращает (очищенный текст, извлечённый ответ)."""
    found: str | None = None
    m = _CORRECT_ANSWER_RE.search(text)
    if m:
        found = m.group(1).strip()
        text = (_CORRECT_ANSWER_RE.sub(" ", text)).strip()
    text = re.sub(r"\s{2,}", " ", text).strip(" .")
    return text, found


def _topic_hint(item: dict) -> str | None:
    topic = item.get("topic", "")
    tags = item.get("tags") or []
    for tag in tags:
        hint = _TOPIC_CONTEXT.get(tag) or _TOPIC_CONTEXT.get(str(tag).capitalize())
        if hint:
            return hint
    return _TOPIC_CONTEXT.get(topic)


def _maybe_append_topic_hint(text: str, item: dict, min_len: int = 100) -> str:
    """Добавляет topic-хвост только если текст короткий и хвост ещё не встречался."""
    if len(text) >= min_len:
        return text
    hint = _topic_hint(item)
    if not hint:
        return text
    # Не копипастить: если начало хвоста уже есть — пропуск
    tip = hint[:48].lower()
    if tip in text.lower() or hint.lower() in text.lower():
        return text
    return f"{_ensure_sentence(text)} {hint}"


def _weave_answer(body: str, corrects: list[str], kind: str) -> str:
    """Встраивает верный ответ, если его ещё нет; без массового «Поэтому верный вариант»."""
    body = body.strip()
    if kind == "multi":
        missing = [c for c in corrects if c.lower() not in body.lower()]
        if missing:
            joined = "; ".join(f"«{c}»" for c in corrects)
            extra = f"Верными здесь будут пункты: {joined}."
            return f"{_ensure_sentence(body)} {extra}" if body else extra
        return _ensure_sentence(body)

    correct = corrects[0] if corrects else ""
    if not correct:
        return _ensure_sentence(body)

    if correct.lower() in body.lower():
        return _ensure_sentence(body)

    if not body:
        return f"Подходит вариант «{correct}»."

    # Достаточно длинный авторский текст — не дописываем шаблонный хвост
    if len(body) >= 120:
        return _ensure_sentence(body)

    body = _ensure_sentence(body)
    if "подходит" in body.lower() or "верный" in body.lower() or "вариант" in body.lower():
        return body
    return f"{body} Подходит ответ «{correct}»."


def _humanize_explain_body(explain: str) -> str:
    """Полирует сырое объяснение: стрелки, телеграф, капитализация."""
    if not explain:
        return ""
    chunks = re.split(r"(?<=[.!?])\s+", explain.strip())
    polished: list[str] = []
    for chunk in chunks:
        chunk = chunk.strip()
        if not chunk:
            continue
        chunk = _replace_arrows(chunk)
        chunk = _expand_telegraph_dash(chunk)
        chunk = _capitalize_sentence(chunk)
        chunk = _ensure_sentence(chunk)
        polished.append(chunk)
    return " ".join(polished)


def enrich_explain(item: dict) -> dict:
    """Делает объяснение читаемым: связный текст без шаблонного «учебника»."""
    explain = (item.get("explain") or "").strip()
    options = item.get("options") or []
    corrects = _correct_texts(item)
    if not options or not corrects:
        return item

    q = item.get("q", "")
    kind = item.get("kind") or ("multi" if isinstance(item.get("answer"), list) else "single")

    if len(explain) >= 280:
        cleaned = _humanize_explain_body(explain)
        cleaned, _ = _strip_correct_answer_boilerplate(cleaned)
        item = dict(item)
        item["explain"] = cleaned or explain
        return item

    body, _extracted = _strip_correct_answer_boilerplate(explain)
    body = re.sub(r"(?:^|\s)Верные пункты\s*:\s*.+$", "", body, flags=re.I).strip()
    body = _humanize_explain_body(body)

    if not body:
        topic = item.get("topic", "")
        for op, blurb in _OPERATOR_BLURBS.items():
            if op in (item.get("code") or "") or op in q:
                body = blurb
                break
        if not body:
            key = (explain or "").strip().lower().rstrip(".")
            if key in _NOUN_BLURBS:
                body = _NOUN_BLURBS[key]
        if not body:
            hint = _topic_hint(item)
            if hint:
                body = hint
            elif corrects:
                body = f"Разбор опирается на формулировку вопроса и выбор «{corrects[0]}»."
    else:
        expanded = _expand_short_noun_phrase(body, corrects, kind)
        if expanded != body:
            body = expanded

    text = _weave_answer(body, corrects, kind)
    text = _maybe_append_topic_hint(text, item, min_len=100)

    if item.get("code") and len(text) < 140:
        code_note = (
            "Сверь ответ с тем, что реально делает выражение в коде: "
            "типы операндов и порядок операций часто важнее «интуиции»."
        )
        if "сверь ответ" not in text.lower() and "сверь формулировку" not in text.lower():
            text = f"{_ensure_sentence(text)} {code_note}"

    if "argument clinic" in q.lower() or "argument clinic" in (explain or "").lower():
        clinic = (
            "Argument Clinic — генератор в исходниках CPython: "
            "ты описываешь сигнатуру функции, а он создаёт C-код для разбора аргументов "
            "вместо ручного PyArg_ParseTuple и дублирования документации."
        )
        if "argument clinic" not in text.lower() or "генератор" not in text.lower():
            text = f"{_ensure_sentence(text)} {clinic}"

    text = re.sub(r"\s{2,}", " ", text).strip()
    # Убрать устаревшие шаблоны, если всплыли из исходников
    text = text.replace("Здесь важно понять:", "").replace("Именно поэтому подходит ответ", "Подходит ответ")
    text = re.sub(r"\s{2,}", " ", text).strip()
    text = re.sub(
        r"(Подходит ответ «[^»]+»\.)(?:\s*\1)+",
        r"\1",
        text,
    )
    text = re.sub(
        r"(Поэтому верный вариант — «[^»]+»\.)(?:\s*\1)+",
        r"\1",
        text,
    )

    item = dict(item)
    item["explain"] = _capitalize_sentence(text) if text else text
    return item


def polish_question(item: dict) -> dict:
    item = dict(item)
    if isinstance(item.get("answer"), list):
        item["kind"] = "multi"
    else:
        item.setdefault("kind", "single")

    topic = item.get("topic", "")
    code = item.get("code")
    raw_q = (item.get("q") or "").strip()

    # CJK / битые исходники
    if _CJK_RE.search(raw_q):
        raw_q = _CJK_RE.sub("", raw_q).strip()
        if "метакласс" in raw_q.lower() or topic == "метаклассы":
            raw_q = "Конфликт метаклассов при множественном наследовании"
        elif not raw_q:
            raw_q = "В чём суть этого вопроса"

    if re.search(r"04d\}'?$", raw_q) or "04d}'" in raw_q:
        raw_q = "Что вернёт выражение format(10, '04d')?"
        if not code:
            item["code"] = "print(format(10, '04d'))"

    # Стрелки в options → слова
    if item.get("options"):
        item["options"] = [_replace_arrows_everywhere(str(o)) for o in item["options"]]

    if item["kind"] == "multi" or re.match(r"^выбери все\b", raw_q, re.I):
        cleaned = raw_q.rstrip("?").rstrip(":").strip()
        item["q"] = _ensure_q(cleaned) if cleaned else raw_q
    else:
        item["q"] = normalize_question(raw_q, topic=topic, code=code)

    # Починить артефакты «при в контексте»
    item["q"] = re.sub(r"\s+при\s+в\s+контексте\s+Python", " в Python", item["q"], flags=re.I)
    item["q"] = re.sub(r"\s+в\s+в\s+контексте", " в контексте", item["q"], flags=re.I)

    item = enrich_explain(item)
    return item


def _scrub_prose_for_code_check(text: str) -> str:
    """Убирает из текста конструкции, похожие на код, но бывающие в обычных формулировках."""
    scrubbed = re.sub(r"\([A-Z]{2,12}\)", "", text)
    scrubbed = re.sub(r"\b[A-Za-z]+/[A-Za-z]+\b", "", scrubbed)
    scrubbed = re.sub(r"\b[A-Za-z]+(?:\[[^\]]*\])?\([^)]*\)", "", scrubbed)
    return scrubbed


def _is_expression_code(text: str) -> bool:
    """Строже, чем _looks_like_code: реальное выражение/литерал, а не концепт с символами."""
    t = text.strip()
    if not t:
        return False
    if _CONCEPT_NOT_CODE.search(t):
        return False
    # Проза с глаголами/описанием — не «что вернёт»
    if re.search(
        r"\b(сравнивает|использует|синтаксис|ленивый|вложенн|отличается|нужен|"
        r"означает|позволяет|возвращает|делает|хранит|создаёт|создает|гарантирован|"
        r"опасн|риск|зачем|почему|когда|какой|какая|какие)\b",
        t,
        re.I,
    ):
        return False
    # Чистая кириллическая фраза с парой символов кода
    cyr = len(re.findall(r"[А-Яа-яЁё]", t))
    if cyr >= 6 and not re.search(r"[\"'\[\{].*[\"'\]\}]", t):
        return False
    words = re.findall(r"[A-Za-zА-Яа-яЁё_]{3,}", t)
    if words and not re.search(r"[\[\]{}()+\-*/%]|==|!=|<=|>=|\.", t):
        if len(words) >= 2 and not re.search(r"[\"'\d]", t):
            return False
    return _looks_like_code(t)


def _looks_like_code(text: str) -> bool:
    t = text.strip()
    if not t:
        return False
    if _CODE_MARKERS.search(_scrub_prose_for_code_check(t)):
        return True
    if re.match(r"^[\[\{'\"]", t) or re.search(r"\[[^\]]+\]", t):
        return True
    return False


def _looks_like_dict_or_set_literal(text: str) -> bool:
    t = text.strip()
    return bool(re.search(r"\{[^{}]*'[^']*'\s*:", t) or re.match(r"^\{", t))


def _infer_from_colon_label(core: str) -> str | None:
    """«Индексация: 'hello'[1]» → вопрос про выражение. Не трогает dict-литералы."""
    if ":" not in core:
        return None
    # Dict / set / slice with braces — не метка
    if _looks_like_dict_or_set_literal(core):
        return None
    if re.match(r"^[{\[\(]", core.strip()):
        return None
    # «case [x, *rest]:» — не метка с двоеточием в смысле label
    if core.strip().lower().startswith("case "):
        return None
    # Walrus := и аннотации a: int — осторожно
    if ":=" in core and core.count(":") == core.count(":="):
        return None

    label, rest = core.split(":", 1)
    label, rest = label.strip(), rest.strip()
    # Метка не должна заканчиваться на = (обломок :=)
    if label.endswith("=") or rest.startswith("="):
        return None
    # Метка должна быть коротким русским/латинским словом без кода
    if not label or len(label) > 40 or _looks_like_code(label):
        return None
    if re.search(r"[\[\]{}()\"'=]", label):
        return None
    if not rest:
        return _infer_from_nominal(label)
    rest_low = rest.lower()
    if rest_low.startswith("что выведет") or rest_low.startswith("что вернёт") or rest_low.startswith("что вернет"):
        return _ensure_q(_safe_join(f"{rest[0].upper()}{rest[1:]} (про ", label.strip().lower(), ")"))
    if _is_expression_code(rest):
        low = label.lower()
        if low in ("индексация", "срез", "срезы"):
            return _ensure_q(_safe_join("Что вернёт выражение ", rest))
        if low in ("ловушка",):
            return _ensure_q(_safe_join("Что выведет или вернёт код (ловушка): ", rest))
        return _ensure_q(_safe_join("Что вернёт ", rest))
    return None


def _infer_from_nominal(core: str) -> str:
    """Короткая номинальная фраза без глагола."""
    low = core.lower().strip()

    if low in ("что будет", "что выведет", "что вернёт", "что вернет"):
        return _ensure_q("Что произойдёт при выполнении этого кода")

    m_exc = _EXCEPTION_WHEN.match(core.strip())
    if m_exc:
        return _ensure_q(f"Когда возникает {m_exc.group(1)}")

    if low.startswith("открыть "):
        return _ensure_q(_safe_join("Как ", _lower_sentence_start(core)))

    if "комментарий" in low:
        return _ensure_q("Как записать однострочный комментарий в Python")

    if low.startswith("имена функций"):
        return _ensure_q("Как по PEP 8 называть функции")
    if low.startswith("имена классов"):
        return _ensure_q("Как по PEP 8 называть классы")
    if "по pep 8" in low:
        return _ensure_q(_safe_join("Как по PEP 8: ", core))

    if "тернарный оператор" in low:
        return _ensure_q("Как записать тернарный оператор в Python")

    if low.startswith("модуль "):
        tail = core.split(None, 1)[1] if " " in core else ""
        if tail:
            return _ensure_q(_safe_join("Какой стандартный модуль Python отвечает за ", tail))
        return _ensure_q(_safe_join("Что такое ", core))

    if low.startswith("метод "):
        return _ensure_q(_safe_join("Что делает ", core[6:].strip()))

    if "библиотек" in low:
        return _ensure_q(_safe_join("Какая ", core))

    if low.startswith("основн") or low.startswith("главн"):
        return _ensure_q(_safe_join("Какая ", low))

    if "гарантирован" in low:
        return _ensure_q(_safe_join("Гарантирован ли ", core.replace("гарантирован", "гарантирован").rstrip("?")))

    if low.endswith(" словари") or low.endswith(" словарь"):
        return _ensure_q(_safe_join("Что такое ", core))

    if low.startswith("runtime "):
        return _ensure_q(_safe_join("Как устроена ", core))

    if " в format" in low or " в f-string" in low:
        return _ensure_q(_safe_join("Как ведёт себя ", core))

    if "выглядит как" in low:
        return _ensure_q(_safe_join("Как выглядит проблема ", core.split("выглядит как")[0].strip()))

    if "симптом" in low:
        term = re.sub(r"\s+симптом.*$", "", core, flags=re.I).strip()
        return _ensure_q(_safe_join("Какой типичный симптом ", term))

    if " почему " in low:
        parts = re.split(r"\s+почему\s+", core, maxsplit=1, flags=re.I)
        if len(parts) == 2:
            return _ensure_q(_safe_join("Почему ", f"{parts[0]} {parts[1]}"))

    if low.startswith("утечёт") or low.startswith("утечет"):
        return _ensure_q(core)

    if low.startswith("второй вызов") or low.startswith("первый вызов"):
        return _ensure_q(_safe_join("Что произойдёт при ", core))

    if "в конце mro" in low or "в mro" in low:
        return _ensure_q(_safe_join("Верно ли, что ", core))

    if low.endswith(" существует"):
        return _ensure_q(_safe_join("Существует ли в Python ", core.replace(" существует", "")))

    if "сохраняет" in low or "хранит" in low:
        return _ensure_q(_safe_join("Верно ли, что ", core))

    if "затенит" in low or "перекроет" in low:
        return _ensure_q(_safe_join("Что произойдёт: ", core))

    if "поток" in low or "процесс" in low:
        return _ensure_q(_safe_join("Что верно про ", core))

    if low.startswith("несколько контекстов"):
        return _ensure_q(_safe_join("Что делает конструкция ", core.split(":", 1)[-1].strip()))

    if "интернирован" in low:
        return _ensure_q(_safe_join("Зачем нужно ", core))

    if re.match(r"^у\s+\w+", low):
        return _ensure_q(_safe_join("Верно ли, что ", core))

    if low.startswith("case "):
        return _ensure_q(_safe_join("Что означает паттерн match ", core, " в Python 3.10+"))

    if "экономит" in low or "экономия" in low:
        return _ensure_q(_safe_join("За счёт чего ", core))

    if "+ jitter" in low or "jitter" in low:
        return _ensure_q("Зачем добавляют jitter к TTL в кэше")

    if "идемпотент" in low and "зачем" in low:
        return _ensure_q("Зачем нужен идемпотентный ключ в платежах")

    if low.startswith("проблема "):
        return _ensure_q(_safe_join("Что такое ", core))

    if "pickle" in low and ("недовер" in low or "untrusted" in low):
        return _ensure_q("В чём риск pickle.loads из недоверенного источника")

    if "timing attack" in low:
        return _ensure_q("В чём риск timing attack при сравнении паролей через ==")

    if "mutation testing" in low:
        return _ensure_q("Что проверяет mutation testing")

    if "конфликт метакласс" in low or "метаклассов баз" in low:
        return _ensure_q("Что происходит при конфликте метаклассов баз")

    if low.endswith(" сравнивает") or " сравнивает" in low:
        term = re.sub(r"\s+сравнивает.*$", "", core, flags=re.I).strip() or core
        return _ensure_q(_safe_join("Что сравнивает ", term))

    if " использует" in low:
        term = re.sub(r"\s+использует.*$", "", core, flags=re.I).strip()
        return _ensure_q(_safe_join("Для чего используется ", term))

    if " синтаксис" in low:
        term = re.sub(r"\s+синтаксис.*$", "", core, flags=re.I).strip()
        return _ensure_q(_safe_join("Допустим ли синтаксис ", term))

    if "ленивый" in low:
        return _ensure_q(_safe_join("Верно ли, что ", core))

    if "exitstack" in low or "вложенными with" in low:
        return _ensure_q(_safe_join("Как лучше записать ", core))

    # Фразы-не-термины не оборачиваем в «Что означает «…»?»
    if len(core.split()) >= 4 and not _is_expression_code(core):
        return _ensure_q(_safe_join("Выбери верный вариант: ", core))

    return _ensure_q(_safe_join("Выбери верный вариант: ", core))


def normalize_question(text: str, topic: str = "", code: str | None = None) -> str:
    """Превращает обрывки и термины в понятный вопрос для новичка."""
    raw = (text or "").strip()
    if not raw:
        return raw

    # Голые вопросы
    bare = raw.rstrip("?").strip().lower()
    if bare in ("что будет", "что выведет", "что вернёт", "что вернет"):
        if code and code.strip():
            return _ensure_q("Что выведет код")
        return _ensure_q("Что произойдёт при выполнении этого фрагмента")

    has_ellipsis = raw.endswith("…") or raw.endswith("...")
    core = _strip_ellipsis(raw).rstrip("?").strip()
    # Убрать хвост «при» от «KeyError при…»
    core = re.sub(r"\s+при$", "", core, flags=re.I).strip()

    if _is_clear(core):
        # Уже ясный, но почистим «при в контексте»
        q = _ensure_q(core)
        q = re.sub(r"\s+при\s+в\s+контексте\s+Python", "", q, flags=re.I)
        return q

    dash_q = _infer_dash_question(core)
    if dash_q:
        return dash_q

    lower = core.lower()

    m_exc = _EXCEPTION_WHEN.match(core)
    if m_exc or (has_ellipsis and re.match(r"^[A-Za-z]+Error$", core)):
        name = m_exc.group(1) if m_exc else core
        return _ensure_q(f"Когда возникает {name}")

    if re.search(r"\bозначает\b", lower):
        term = re.sub(r"\s+означает.*$", "", core, flags=re.I).strip()
        if term and len(term.split()) <= 4:
            return _ensure_q(_safe_join("Что означает ", term))
        if term:
            return _ensure_q(_safe_join("Выбери верный вариант: ", term))

    if re.search(r"\bчто нарушен[оы]?\s*$", lower):
        return _ensure_q(core)
    if re.search(r"\b(нарушен|нарушено|нарушение)\s*$", lower):
        return _ensure_q(_safe_join("Какой принцип нарушен: ", core))

    for sep in (" — это", " - это"):
        if sep in core:
            term = core.split(sep, 1)[0].strip()
            return _ensure_q(_safe_join("Что такое ", term))

    if re.search(r"\bзачем$", lower) or lower.endswith(" зачем"):
        term = re.sub(r"\s+зачем$", "", core, flags=re.I).strip()
        if term.lower().startswith("if __name__"):
            return _ensure_q("Зачем нужна конструкция if __name__ == '__main__'")
        return _ensure_q(_safe_join("Зачем нужен ", term))

    if re.search(r"\bриск$", lower) or " риск" in lower:
        term = re.sub(r"\s+риск.*$", "", core, flags=re.I).strip()
        return _ensure_q(_safe_join("В чём риск ", term))

    if re.search(r"\bэто$", lower):
        term = re.sub(r"\s+это$", "", core, flags=re.I).strip()
        return _ensure_q(_safe_join("Что такое ", term))

    if lower.startswith("опасность "):
        tail = core.split(None, 1)[1] if " " in core else core
        return _ensure_q(_safe_join("В чём опасность выражения ", tail))

    if lower.startswith("опасно"):
        if ":" in core and not _looks_like_dict_or_set_literal(core):
            _, rest = core.split(":", 1)
            return _ensure_q(
                _safe_join("Опасно ли использовать изменяемый аргумент по умолчанию в ", rest.strip())
            )
        return _ensure_q(_safe_join("Опасно ли: ", core))

    if lower.startswith("можно ли"):
        return _ensure_q(core)

    colon_q = _infer_from_colon_label(core)
    if colon_q:
        return colon_q

    if core.endswith(":") and not _looks_like_dict_or_set_literal(core):
        return _infer_from_nominal(core[:-1].strip())

    if re.search(r"\bиспользуется\b", lower):
        term = re.sub(r"\s+используется.*$", "", core, flags=re.I).strip()
        return _ensure_q(_safe_join("Для чего используется ", term))

    if " нужен чтобы" in lower:
        term = re.split(r"\s+нужен чтобы", core, flags=re.I)[0].strip()
        return _ensure_q(_safe_join("Зачем нужен ", term))

    for verb, template_prefix in (
        ("позволяет", "Что позволяет "),
        ("показывает", "Что показывает "),
        ("возвращает", "Что возвращает "),
        ("вызывает", "Что вызывает "),
        ("даёт", "Что даёт "),
        ("превращает", "Во что превращает "),
        ("реализует", "Что реализует "),
        ("определяет", "Что определяет "),
        ("помогает", "Чем помогает "),
        ("проверяет", "Что проверяет "),
    ):
        if re.search(rf"\b{verb}\b", lower):
            term = re.sub(rf"\s+{verb}.*$", "", core, flags=re.I).strip()
            return _ensure_q(_safe_join(template_prefix, term))

    if re.search(r"\bцель\b", lower):
        term = re.sub(r"\s+цель.*$", "", core, flags=re.I).strip()
        return _ensure_q(_safe_join("Какова цель ", term))

    if re.search(r"\bvs\b", core, re.I) or " ≠ " in core:
        return _ensure_q(_safe_join("В чём разница: ", core))

    if re.match(r"^с чем связан", lower):
        return _ensure_q(
            _safe_join("Для чего используется ", core.split("связан", 1)[-1].strip().lstrip("ы").strip())
        )

    # Есть поле code → вопрос про вывод
    if code and code.strip():
        if re.search(r"что выведет|что верн", lower):
            return _ensure_q(core)
        if _is_clear(core):
            return _ensure_q(core)
        return _ensure_q("Что выведет код")

    # Реальное выражение / вызов
    if _is_expression_code(core):
        if re.search(r"что верн|что вывед", lower):
            return _ensure_q(core)
        if " при " in lower and _looks_like_code(core.split(" при ", 1)[0]):
            return _ensure_q(_safe_join("Что вернёт ", core))
        return _ensure_q(_safe_join("Что вернёт ", core))

    # Обрыв с многоточием — без лишнего «в контексте Python»
    if has_ellipsis:
        if topic in ("C-API", "CPython", "cffi/pybind", "subinterpreters"):
            return _ensure_q(_safe_join("Что такое ", core, " в C-API CPython"))
        if re.match(r"^[A-Za-z_][\w.]*$", core):
            return _ensure_q(_safe_join("Что такое ", core))
        if re.search(r"[a-zA-Z]{3,}", core) and not re.search(r"[а-яё]{3,}", core, re.I):
            return _ensure_q(_safe_join("Что такое ", core))
        if len(core.split()) <= 3:
            return _ensure_q(_safe_join("Что такое ", core))
        return _infer_from_nominal(core)

    if raw.endswith("?"):
        return _infer_from_nominal(core)

    return _infer_from_nominal(core)
