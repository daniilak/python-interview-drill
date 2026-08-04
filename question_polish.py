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

# Телеграфные «метка — смысл» для операторов и коротких клише
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

_CORRECT_ANSWER_RE = re.compile(
    r"(?:^|\s)(?:Правильный ответ|Верный ответ|Ответ)\s*:\s*«([^»]+)»\.?",
    re.I,
)
_TELEGRAPH_RE = re.compile(
    r"^([%&|^~]|//|\*\*|<<|>>|:=|[A-Za-z_][\w.]{0,24}|[А-Яа-яЁё][^—–]{0,40}?)\s*[—–]\s*(.+)$"
)


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
    if _looks_like_code(left):
        return _ensure_q(f"Что вернёт {left}")
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
    text = text.strip()
    if not text:
        return text
    return text[0].upper() + text[1:]


def _replace_arrows(text: str) -> str:
    """Заменяет стрелки на словесные связки (не трогает текст внутри «ёлочек»)."""
    if not text:
        return text

    parts = re.split(r"(«[^»]*»)", text)
    out_parts: list[str] = []
    for i, part in enumerate(parts):
        if i % 2 == 1:  # quoted answer / option — оставляем как есть
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
            # Цепочки с многоточием: A → … → B
            (
                r"([A-Za-z_][\w.]*)\s*(?:→|->)\s*(?:…|\.\.\.)\s*(?:→|->)\s*([A-Za-z_][\w.]*)",
                r"от \1 до \2 через промежуточные типы",
            ),
            (r"warning\s*(?:→|->)\s*exception", "предупреждение превращается в исключение"),
            (r"Local\s*(?:→|->)\s*Enclosing\s*(?:→|->)\s*Global\s*(?:→|->)\s*Builtins", "Local, затем Enclosing, Global и Builtins"),
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


def _expand_short_noun_phrase(body: str, corrects: list[str], kind: str) -> str:
    """Односложные обрывки вроде «Повтор строки» → связное предложение."""
    body = body.strip().rstrip(".")
    if not body or len(body) > 55:
        return body
    # Уже полноценное предложение с глаголом
    if re.search(
        r"\b(это|означает|возвращает|делает|нужен|нужно|позволяет|создаёт|создает|"
        r"хранит|работает|используется|происходит|нужны|важно|обычно|поэтому)\b",
        body,
        re.I,
    ):
        return body
    if kind == "multi":
        return f"Кратко: {body[0].lower()}{body[1:]}." if body else body
    correct = corrects[0] if corrects else ""
    return (
        f"Здесь важно понять: {body[0].lower()}{body[1:]}. "
        f"Именно поэтому подходит ответ «{correct}»."
        if correct
        else f"Здесь важно понять: {body[0].lower()}{body[1:]}."
    )


def _expand_telegraph_dash(text: str) -> str:
    """«% — остаток» → полноценное предложение."""
    text = text.strip()
    m = _TELEGRAPH_RE.match(text)
    if not m:
        return text
    left, right = m.group(1).strip(), m.group(2).strip().rstrip(".")
    if left in _OPERATOR_BLURBS and len(right) < 80:
        base = _OPERATOR_BLURBS[left]
        # Если правая часть уже описывает то же — не дублируем
        if right.lower() in base.lower() or base.lower().startswith(right.lower()[:20]):
            return base
        return f"{base} Здесь речь о том, что {right[0].lower()}{right[1:]}."
    if len(left) <= 40 and len(right) <= 120:
        return _capitalize_sentence(f"{left} означает следующее: {right}")
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


def _weave_answer(body: str, corrects: list[str], kind: str) -> str:
    """Встраивает верный ответ в текст естественно, без шаблона «Правильный ответ»."""
    body = body.strip()
    if kind == "multi":
        missing = [c for c in corrects if c.lower() not in body.lower()]
        if missing:
            joined = "; ".join(f"«{c}»" for c in corrects)
            extra = f"Верными здесь будут пункты: {joined}."
            return f"{_ensure_sentence(body)} {extra}" if body else extra
        return _ensure_sentence(body)

    correct = corrects[0]
    if correct.lower() in body.lower():
        return _ensure_sentence(body)

    # Короткая телега без глагола — дописываем вывод
    if not body:
        return f"Подходит вариант «{correct}»."

    if len(body) < 90 and not body.rstrip().endswith((".", "!", "?")):
        body = _ensure_sentence(body)

    connector = (
        f" Поэтому верный вариант — «{correct}»."
        if not body.endswith((".", "!", "?"))
        else f" Поэтому верный вариант — «{correct}»."
    )
    # Если уже есть точка в конце
    if body.endswith((".", "!", "?")):
        return f"{body} Поэтому верный вариант — «{correct}»."
    return f"{_ensure_sentence(body)} Поэтому верный вариант — «{correct}»."


def _humanize_explain_body(explain: str) -> str:
    """Полирует сырое объяснение: стрелки, телеграф, капитализация."""
    if not explain:
        return ""
    # Разбиваем на предложения грубо по точке, полируем каждое
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
    """Делает объяснение читаемым, как в задачнике: связный текст без телеграфа и дублей."""
    explain = (item.get("explain") or "").strip()
    options = item.get("options") or []
    corrects = _correct_texts(item)
    if not options or not corrects:
        return item

    q = item.get("q", "")
    kind = item.get("kind") or ("multi" if isinstance(item.get("answer"), list) else "single")

    # Очень длинные авторские тексты: только лёгкая чистка стрелок
    if len(explain) >= 280:
        cleaned = _humanize_explain_body(explain)
        cleaned, _ = _strip_correct_answer_boilerplate(cleaned)
        item = dict(item)
        item["explain"] = cleaned or explain
        return item

    body, extracted = _strip_correct_answer_boilerplate(explain)
    body = re.sub(r"(?:^|\s)Верные пункты\s*:\s*.+$", "", body, flags=re.I).strip()
    body = _humanize_explain_body(body)

    # Если тело совсем пустое — стартуем с операторного/топикового клише
    if not body:
        topic = item.get("topic", "")
        for op, blurb in _OPERATOR_BLURBS.items():
            if op in (item.get("code") or "") or op in q:
                body = blurb
                break
        if not body:
            hint = _topic_hint(item)
            if hint:
                body = hint
    else:
        # Односложные обрывки до вшивания ответа
        expanded = _expand_short_noun_phrase(body, corrects, kind)
        if expanded != body:
            body = expanded
            # Уже содержит «подходит ответ» — не дублировать weave
            if "подходит ответ" in body.lower() or "именно поэтому" in body.lower():
                text = _ensure_sentence(body)
                hint = _topic_hint(item)
                if hint and hint.lower() not in text.lower() and len(text) < 160:
                    text = f"{text} {hint}"
                if item.get("code") and len(text) < 180:
                    code_note = (
                        "Сверь формулировку с тем, что реально делает выражение в коде: "
                        "типы операндов и порядок операций часто важнее «интуиции»."
                    )
                    if "сверь" not in text.lower():
                        text = f"{_ensure_sentence(text)} {code_note}"
                item = dict(item)
                item["explain"] = re.sub(r"\s{2,}", " ", text).strip()
                return item

    text = _weave_answer(body, corrects, kind)

    # Минимальная планка качества: 2 фразы / ~120 символов
    if len(text) < 120:
        hint = _topic_hint(item)
        if hint and hint.lower() not in text.lower():
            text = f"{_ensure_sentence(text)} {hint}"

    if item.get("code") and len(text) < 160:
        code_note = (
            "Сверь ответ с тем, что реально делает выражение в коде: "
            "типы операндов и порядок операций часто важнее «интуиции»."
        )
        if "сверь ответ" not in text.lower():
            text = f"{_ensure_sentence(text)} {code_note}"

    if "argument clinic" in q.lower() or "argument clinic" in (explain or "").lower():
        clinic = (
            "Argument Clinic — генератор в исходниках CPython: "
            "ты описываешь сигнатуру функции, а он создаёт C-код для разбора аргументов "
            "вместо ручного PyArg_ParseTuple и дублирования документации."
        )
        if "argument clinic" not in text.lower() or "генератор" not in text.lower():
            text = f"{_ensure_sentence(text)} {clinic}"

    # Убрать случайные двойные пробелы и повторы «Поэтому верный вариант»
    text = re.sub(r"\s{2,}", " ", text).strip()
    text = re.sub(
        r"(Поэтому верный вариант — «[^»]+»\.)(?:\s*\1)+",
        r"\1",
        text,
    )

    item = dict(item)
    item["explain"] = text
    return item


def polish_question(item: dict) -> dict:
    item = dict(item)
    # Нормализуем kind
    if isinstance(item.get("answer"), list):
        item["kind"] = "multi"
    else:
        item.setdefault("kind", "single")

    topic = item.get("topic", "")
    code = item.get("code")
    # Структурированные карточки с явной формулировкой «Выбери все…» не ломаем эвристиками
    raw_q = (item.get("q") or "").strip()
    # Починка совсем сломанных format-строк в формулировке
    if re.search(r"04d\}'?$", raw_q) or "04d}'" in raw_q:
        raw_q = "Что вернёт выражение format(10, '04d')?"
        if not code:
            item["code"] = "print(format(10, '04d'))"
    if item["kind"] == "multi" or re.match(r"^выбери все\b", raw_q, re.I):
        cleaned = raw_q.rstrip("?").rstrip(":").strip()
        item["q"] = _ensure_q(cleaned) if cleaned else raw_q
    else:
        item["q"] = normalize_question(raw_q, topic=topic, code=code)
    item = enrich_explain(item)
    return item


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

    dash_q = _infer_dash_question(core)
    if dash_q:
        return dash_q

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
