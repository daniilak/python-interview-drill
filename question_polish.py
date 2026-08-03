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
    r"удалось ли|поддерживается ли|разрешено ли|допустимо ли)\b",
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

_TOPIC_CONTEXT: dict[str, str] = {
    "C-API": "Относится к внутренностям CPython и написанию C-расширений, не к обычному прикладному коду.",
    "CPython": "Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "GIL": "GIL (Global Interpreter Lock) ограничивает параллельное исполнение байткода в CPython.",
    "asyncio": "Речь про асинхронный event loop и корутины в asyncio.",
    "typing": "Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "метаклассы": "Метакласс создаёт класс так же, как класс создаёт экземпляр.",
    "дескрипторы": "Дескрипторы управляют доступом к атрибутам через __get__ / __set__ / __delete__.",
    "packaging": "Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "security": "Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "architecture": "Архитектурные паттерны и границы модулей/сервисов.",
    "db": "Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "cache": "Кэширование: согласованность, инвалидация, hot keys.",
    "distributed": "Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "observability": "Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "performance": "Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "testing": "Тестирование: unit, integration, property-based, нагрузочные сценарии.",
}


def _strip_ellipsis(text: str) -> str:
    return text.strip().rstrip("…").rstrip("...").strip()


def _ensure_q(text: str) -> str:
    text = text.strip()
    return text if text.endswith("?") else f"{text}?"


def _is_clear(text: str) -> bool:
    t = text.strip().rstrip("?").strip()
    if not t:
        return False
    candidate = f"{t}?"
    if _CLEAR_START.match(candidate):
        return True
    # Вопрос может начинаться с «Если…», но содержать явный вопрос
    if re.search(
        r"\b(что вернётся|что вернется|что выведет|что произойдёт|что произойдет|что вернёт|что вернет)\b",
        candidate,
        re.I,
    ):
        return True
    return False


def _scrub_prose_for_code_check(text: str) -> str:
    """Убирает из текста конструкции, похожие на код, но бывающие в обычных формулировках."""
    scrubbed = re.sub(r"\([A-Z]{2,12}\)", "", text)
    scrubbed = re.sub(r"\b[A-Za-z]+/[A-Za-z]+\b", "", scrubbed)
    scrubbed = re.sub(r"\b[A-Za-z]+\([^)]*\)", "", scrubbed)
    return scrubbed


def _looks_like_code(text: str) -> bool:
    t = text.strip()
    if not t:
        return False
    if _CODE_MARKERS.search(_scrub_prose_for_code_check(t)):
        return True
    # литералы и срезы
    if re.match(r"^[\[\{'\"]", t) or re.search(r"\[[^\]]+\]", t):
        return True
    return False


def _infer_from_colon_label(core: str) -> str | None:
    """«Индексация: 'hello'[1]» → вопрос про выражение."""
    if ":" not in core:
        return None
    label, rest = core.split(":", 1)
    label, rest = label.strip(), rest.strip()
    if not rest:
        return _infer_from_nominal(label)
    rest_low = rest.lower()
    if rest_low.startswith("что выведет") or rest_low.startswith("что вернёт") or rest_low.startswith("что вернет"):
        return _ensure_q(f"{rest[0].upper()}{rest[1:]} (про {label.strip().lower()})")
    if _looks_like_code(rest):
        low = label.lower()
        if low in ("индексация", "срез", "срезы"):
            return _ensure_q(f"Что вернёт выражение {rest}")
        if low in ("ловушка",):
            return _ensure_q(f"Что выведет или вернёт код (ловушка): {rest}")
        return _ensure_q(f"Что вернёт {rest}")
    return None


def _infer_from_nominal(core: str) -> str:
    """Короткая номинальная фраза без глагола."""
    low = core.lower().strip()

    # «Открыть файл на чтение»
    if low.startswith("открыть "):
        return _ensure_q(f"Как {core[0].lower()}{core[1:]}")

    # «Однострочный комментарий»
    if "комментарий" in low:
        return _ensure_q("Как записать однострочный комментарий в Python")

    # «Имена функций по PEP 8»
    if low.startswith("имена функций"):
        return _ensure_q("Как по PEP 8 называть функции")
    if low.startswith("имена классов"):
        return _ensure_q("Как по PEP 8 называть классы")
    if "по pep 8" in low:
        return _ensure_q(f"Как по PEP 8: {core}")

    # «Тернарный оператор в Python»
    if "тернарный оператор" in low:
        return _ensure_q("Как записать тернарный оператор в Python")

    # «Модуль regex» / «Модуль для JSON»
    if low.startswith("модуль "):
        tail = core.split(None, 1)[1] if " " in core else ""
        if tail:
            return _ensure_q(f"Какой стандартный модуль Python отвечает за {tail}")
        return _ensure_q(f"Что такое {core}")

    # «Метод .pop() без аргументов»
    if low.startswith("метод "):
        return _ensure_q(f"Что делает {core[6:].strip()}")

    # «Популярная sync HTTP библиотека»
    if "библиотек" in low:
        return _ensure_q(f"Какая {core}")

    # «Основная структура объекта CPython»
    if low.startswith("основн") or low.startswith("главн"):
        return _ensure_q(f"Какая {low}")

    # «Порядок элементов set гарантирован языком»
    if "гарантирован" in low:
        return _ensure_q(f"Гарантирован ли {core.replace('гарантирован', 'гарантирован').rstrip('?')}")

    # «atomic словари»
    if low.endswith(" словари") or low.endswith(" словарь"):
        return _ensure_q(f"Что такое {core}")

    # «Runtime проверка list[int]»
    if low.startswith("runtime "):
        return _ensure_q(f"Как устроена {core}")

    # «bool в format»
    if " в format" in low or " в f-string" in low:
        return _ensure_q(f"Как ведёт себя {core}")

    # «N+1 выглядит как»
    if "выглядит как" in low:
        return _ensure_q(f"Как выглядит проблема {core.split('выглядит как')[0].strip()}")

    # «circular import симптом»
    if "симптом" in low:
        term = re.sub(r"\s+симптом.*$", "", core, flags=re.I).strip()
        return _ensure_q(f"Какой типичный симптом {term}")

    # «multiprocessing почему обходит GIL»
    if " почему " in low:
        parts = re.split(r"\s+почему\s+", core, maxsplit=1, flags=re.I)
        if len(parts) == 2:
            return _ensure_q(f"Почему {parts[0]} {parts[1]}")

    # «Утечёт ли i наружу»
    if low.startswith("утечёт") or low.startswith("утечет"):
        return _ensure_q(core)

    # «Второй вызов heavy(2)»
    if low.startswith("второй вызов") or low.startswith("первый вызов"):
        return _ensure_q(f"Что произойдёт при {core}")

    # «object всегда в конце MRO»
    if "в конце mro" in low or "в mro" in low:
        return _ensure_q(f"Верно ли, что {core}")

    # «abstractclassmethod существует»
    if low.endswith(" существует"):
        return _ensure_q(f"Существует ли в Python {core.replace(' существует', '')}")

    # «dict сохраняет порядок вставки»
    if "сохраняет" in low or "хранит" in low:
        return _ensure_q(f"Верно ли, что {core}")

    # «Instance attr затенит функцию»
    if "затенит" in low or "перекроет" in low:
        return _ensure_q(f"Что произойдёт: {core}")

    # «Два CPU-потока на чистом Python»
    if "поток" in low or "процесс" in low:
        return _ensure_q(f"Что верно про {core}")

    # «Несколько контекстов: with A() as a, B() as b»
    if low.startswith("несколько контекстов"):
        return _ensure_q(f"Что делает конструкция {core.split(':', 1)[-1].strip()}")

    # «Интернирование строк: sys.intern»
    if "интернирован" in low:
        return _ensure_q(f"Зачем нужно {core}")

    # «У list итератор отдельный объект»
    if re.match(r"^у\s+\w+", low):
        return _ensure_q(f"Верно ли, что {core}")

    # «case [x, *rest]:»
    if low.startswith("case "):
        return _ensure_q(f"Что означает паттерн match {core} в Python 3.10+")

    # «field(default_factory=list) зачем» handled elsewhere

    # «__slots__ экономит за счёт»
    if "экономит" in low or "экономия" in low:
        return _ensure_q(f"За счёт чего {core}")

    # «TTL + jitter зачем»
    if "+ jitter" in low or "jitter" in low:
        return _ensure_q(f"Зачем добавляют jitter к TTL в кэше")

    # «идемпотентный ключ в платежах зачем»
    if "идемпотент" in low and "зачем" in low:
        return _ensure_q(f"Зачем нужен идемпотентный ключ в платежах")

    # «проблема lost update при concurrent PUT»
    if low.startswith("проблема "):
        return _ensure_q(f"Что такое {core}")

    # «pickle.loads из недоверенного источника»
    if "pickle" in low and ("недовер" in low or "untrusted" in low):
        return _ensure_q("В чём риск pickle.loads из недоверенного источника")

    # default nominal
    return _ensure_q(f"Выбери верный вариант: {core}")


def normalize_question(text: str, topic: str = "", code: str | None = None) -> str:
    """Превращает обрывки и термины в понятный вопрос для новичка."""
    raw = (text or "").strip()
    if not raw:
        return raw

    has_ellipsis = raw.endswith("…") or raw.endswith("...")
    core = _strip_ellipsis(raw).rstrip("?").strip()

    # Уже ясный вопрос
    if _is_clear(core):
        return _ensure_q(core)

    lower = core.lower()

    # «Open/Closed Principle (OCP) означает…» / «*args означает…»
    if re.search(r"\bозначает\b", lower):
        term = re.sub(r"\s+означает.*$", "", core, flags=re.I).strip()
        if term:
            return _ensure_q(f"Что означает {term}")

    # Сценарии «… — что нарушено?» / «… — нарушен…»
    if re.search(r"\bчто нарушен[оы]?\s*$", lower):
        return _ensure_q(core)
    if re.search(r"\b(нарушен|нарушено|нарушение)\s*$", lower):
        return _ensure_q(f"Какой принцип нарушен: {core}")

    # «X — это…»
    for sep in (" — это", " - это"):
        if sep in core:
            term = core.split(sep, 1)[0].strip()
            return _ensure_q(f"Что такое {term}")

    # «… зачем» / «X зачем»
    if re.search(r"\bзачем$", lower) or lower.endswith(" зачем"):
        term = re.sub(r"\s+зачем$", "", core, flags=re.I).strip()
        if term.lower().startswith("if __name__"):
            return _ensure_q("Зачем нужна конструкция if __name__ == '__main__'")
        return _ensure_q(f"Зачем нужен {term}")

    # «… риск» / «риск?»
    if re.search(r"\bриск$", lower) or " риск" in lower:
        term = re.sub(r"\s+риск.*$", "", core, flags=re.I).strip()
        return _ensure_q(f"В чём риск {term}")

    # «Stampede это»
    if re.search(r"\bэто$", lower):
        term = re.sub(r"\s+это$", "", core, flags=re.I).strip()
        return _ensure_q(f"Что такое {term}")

    # «Опасность [[]]*3»
    if lower.startswith("опасность "):
        tail = core.split(None, 1)[1] if " " in core else core
        return _ensure_q(f"В чём опасность выражения {tail}")

    # «Опасно в default: def f(x=[])»
    if lower.startswith("опасно"):
        if ":" in core:
            _, rest = core.split(":", 1)
            return _ensure_q(f"Опасно ли использовать изменяемый аргумент по умолчанию в {rest.strip()}")
        return _ensure_q(f"Опасно ли: {core}")

    # «Можно ли …» без вопросительного знака
    if lower.startswith("можно ли"):
        return _ensure_q(core)

    # Метка с двоеточием
    colon_q = _infer_from_colon_label(core)
    if colon_q:
        return colon_q

    # Заканчивается двоеточием
    if core.endswith(":"):
        return _infer_from_nominal(core[:-1].strip())

    # «… используется»
    if re.search(r"\bиспользуется\b", lower):
        term = re.sub(r"\s+используется.*$", "", core, flags=re.I).strip()
        return _ensure_q(f"Для чего используется {term}")

    # «… нужен чтобы»
    if " нужен чтобы" in lower:
        term = re.split(r"\s+нужен чтобы", core, flags=re.I)[0].strip()
        return _ensure_q(f"Зачем нужен {term}")

    # «… позволяет / показывает / возвращает / вызывает / даёт»
    for verb, template in (
        ("позволяет", "Что позволяет {t}"),
        ("показывает", "Что показывает {t}"),
        ("возвращает", "Что возвращает {t}"),
        ("вызывает", "Что вызывает {t}"),
        ("даёт", "Что даёт {t}"),
        ("превращает", "Во что превращает {t}"),
        ("реализует", "Что реализует {t}"),
        ("определяет", "Что определяет {t}"),
        ("помогает", "Чем помогает {t}"),
    ):
        if re.search(rf"\b{verb}\b", lower):
            term = re.sub(rf"\s+{verb}.*$", "", core, flags=re.I).strip()
            return _ensure_q(template.format(t=term))

    # «… цель»
    if re.search(r"\bцель\b", lower):
        term = re.sub(r"\s+цель.*$", "", core, flags=re.I).strip()
        return _ensure_q(f"Какова цель {term}")

    # vs / ≠
    if re.search(r"\bvs\b", core, re.I) or " ≠ " in core:
        return _ensure_q(f"В чём разница: {core}")

    # «С чем связаны X» — часто криво сформулировано
    if re.match(r"^с чем связан", lower):
        return _ensure_q(f"Для чего используется {core.split('связан', 1)[-1].strip().lstrip('ы').strip()}")

    # Код в поле code → «что выведет код»
    if code and code.strip():
        if re.search(r"что выведет|что верн", lower):
            return _ensure_q(core)
        return _ensure_q("Что выведет код")

    # Выражение / вызов функции
    if _looks_like_code(core):
        if re.search(r"что верн|что вывед", lower):
            return _ensure_q(core)
        # «a[1:4] при a=[0,1,2,3,4]»
        if " при " in lower:
            return _ensure_q(f"Что вернёт {core}")
        # «list(zip(...))»
        return _ensure_q(f"Что вернёт {core}")

    # Обрыв с многоточием
    if has_ellipsis:
        if topic in ("C-API", "CPython", "cffi/pybind", "subinterpreters"):
            return _ensure_q(f"Что такое {core} в C-API CPython")
        if re.search(r"[a-zA-Z]{3,}", core) and not re.search(r"[а-яё]{4,}", core, re.I):
            return _ensure_q(f"Что такое {core} в контексте Python")
        return _ensure_q(f"Что означает «{core}»")

    # Номинальные фразы с «?» в исходнике
    if raw.endswith("?"):
        return _infer_from_nominal(core)

    return _infer_from_nominal(core)


def enrich_explain(item: dict) -> dict:
    """Дополняет короткие explain, чтобы после ошибки было что учить."""
    explain = (item.get("explain") or "").strip()
    options = item.get("options") or []
    answer_idx = item.get("answer", 0)
    if not options or answer_idx >= len(options):
        return item

    correct = str(options[answer_idx]).strip()
    topic = item.get("topic", "")
    q = item.get("q", "")

    if len(explain) >= 160:
        return item

    parts: list[str] = []
    if explain:
        parts.append(explain.rstrip(".") + ".")

    correct_in_explain = correct.lower() in explain.lower()
    if not correct_in_explain and correct:
        parts.append(f"Правильный ответ: «{correct}».")

    combined = " ".join(parts)
    if len(combined) < 100 and not item.get("code"):
        hint = _TOPIC_CONTEXT.get(topic)
        if hint:
            parts.append(hint)

    if "argument clinic" in q.lower() or "argument clinic" in explain.lower():
        parts.append(
            "Argument Clinic — генератор в исходниках CPython: "
            "описываешь сигнатуру функции, он создаёт C-код для разбора аргументов "
            "(вместо ручного PyArg_ParseTuple и дублирования документации)."
        )

    item = dict(item)
    item["explain"] = " ".join(parts)
    return item


def polish_question(item: dict) -> dict:
    item = dict(item)
    topic = item.get("topic", "")
    code = item.get("code")
    item["q"] = normalize_question(item.get("q", ""), topic=topic, code=code)
    item = enrich_explain(item)
    return item
