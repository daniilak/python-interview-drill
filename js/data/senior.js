window.QUESTIONS_SENIOR = [
  {
    "topic": "testing",
    "q": "Что проверяет mutation testing?",
    "options": [
      "ловят ли тесты намеренно испорченный код",
      "только coverage %",
      "perf",
      "типы"
    ],
    "answer": 0,
    "explain": "Дополнение к coverage. Подходит ответ «ловят ли тесты намеренно испорченный код». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s1"
  },
  {
    "topic": "security",
    "q": "В чём риск timing attack при сравнении паролей через ==?",
    "options": [
      "используй compare_digest",
      "== достаточно",
      "hash() ok",
      "id"
    ],
    "answer": 0,
    "explain": "Постоянное время. Подходит ответ «используй compare_digest». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s2"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: ob_type — про что?",
    "options": [
      "указатель на тип",
      "только pip",
      "HTTP header",
      "pytest fixture"
    ],
    "answer": 0,
    "explain": "Указатель на тип. Подходит ответ «указатель на тип». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s3"
  },
  {
    "topic": "typing",
    "q": "Чем помогает LiteralString (3.11)?",
    "options": [
      "отличать доверенные строки от произвольных",
      "шифровать",
      "intern",
      "bytes"
    ],
    "answer": 0,
    "explain": "Анти-SQL-injection в типах. Подходит ответ «отличать доверенные строки от произвольных». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "s4"
  },
  {
    "topic": "serialization",
    "q": "почему protobuf/schema evolution важны?",
    "options": [
      "совместимость клиентов при изменении полей",
      "красивый JSON",
      "GIL",
      "только скорость"
    ],
    "answer": 0,
    "explain": "Правила reserved/optional/default. Подходит ответ «совместимость клиентов при изменении полей».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s5"
  },
  {
    "topic": "алгоритмы",
    "q": "Выбери верный вариант: Consistent hashing важен для?",
    "options": [
      "минимального перераспределения ключей при добавлении нод",
      "сортировки list",
      "GIL",
      "pytest"
    ],
    "answer": 0,
    "explain": "Кольцо хешей для распределённого кэша. Подходит ответ «минимального перераспределения ключей при добавлении нод».",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "s6"
  },
  {
    "topic": "ctypes",
    "q": "Что такое ERRCHECK?",
    "options": [
      "постпроверка C вызова",
      "prealloc",
      "GIL",
      "typing"
    ],
    "answer": 0,
    "explain": "Обёртки ошибок. Подходит ответ «постпроверка C вызова».",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s7"
  },
  {
    "topic": "observability",
    "q": "Выбери верный вариант: Метка Prometheus `session_id` на высококардинальном трафике?",
    "options": [
      "опасно взрывом time series",
      "всегда обязательно",
      "ускоряет PromQL",
      "заменяет логи"
    ],
    "answer": 0,
    "explain": "Cardinality — главный враг метрик. Подходит ответ «опасно взрывом time series». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s8"
  },
  {
    "topic": "errors",
    "q": "Что вернёт notes и __context__/__cause__?",
    "options": [
      "разные слои отладки исключений",
      "синонимы",
      "только logging",
      "warnings"
    ],
    "answer": 0,
    "explain": "Цепочки и заметки. Подходит ответ «разные слои отладки исключений».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "s9"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: Сложность set.remove?",
    "options": [
      "O(1) амортизированно",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "Большая O: set.remove. Подходит ответ «O(1) амортизированно». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s10"
  },
  {
    "topic": "SOLID",
    "q": "Выбери верный вариант: Сколько букв в SOLID и что они обозначают?",
    "options": [
      "5 принципов ООП-проектирования",
      "3 паттерна GoF",
      "система типов Python",
      "модуль asyncio"
    ],
    "answer": 0,
    "explain": "S, O, L, I, D — базовый набор для собеседований. Подходит ответ «5 принципов ООП-проектирования». SOLID — набор принципов объектного дизайна; в Python их обычно выражают через протоколы, ABC и композицию.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s11"
  },
  {
    "topic": "concurrency",
    "q": "В чём разница: SEQ CST vs relaxed в C extensions?",
    "options": [
      "модели атомарности native",
      "GIL levels",
      "asyncio tasks",
      "typing"
    ],
    "answer": 0,
    "explain": "Сложно, редко на собесе джуна. Подходит ответ «модели атомарности native». Конкурентность бывает на потоках, процессах и async — у каждого свои ограничения и цена синхронизации.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s12"
  },
  {
    "topic": "asyncio",
    "q": "Что такое loop.add_signal_handler доступен?",
    "options": [
      "не на всех платформах (ограничения Windows)",
      "везде одинаково",
      "только в threads",
      "в PyPy only"
    ],
    "answer": 0,
    "explain": "Платформенные нюансы. Подходит ответ «не на всех платформах (ограничения Windows)». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s13"
  },
  {
    "topic": "git",
    "q": "Что делает git rebase и когда он опасен?",
    "options": [
      "переигрывает коммиты поверх другой базы; опасен на shared-истории без договорённости",
      "то же, что merge, всегда",
      "только удаляет remote",
      "создаёт тег автоматически"
    ],
    "answer": 0,
    "explain": "Rebase переписывает хеши. Interactive (-i): squash/fixup/reword/reorder/edit. Конфликты решаются на каждом коммите (не как один merge-коммит). На уже запушенной shared-ветке нужен force-with-lease и согласование с командой; иначе у коллег «разъедется» история. Merge предпочтительнее, когда важен факт слияния и неизменность опубликованных коммитов",
    "kind": "single",
    "tags": [
      "git",
      "rebase"
    ],
    "difficulty": "senior",
    "group": "Инструменты и стиль",
    "id": "s14"
  },
  {
    "topic": "ci",
    "q": "Что такое reproducible builds?",
    "options": [
      "пины, hashes, lockfiles",
      "latest always",
      "без CI",
      "random seeds off only"
    ],
    "answer": 0,
    "explain": "Детерминизм поставки. Подходит ответ «пины, hashes, lockfiles».",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s15"
  },
  {
    "topic": "метаклассы",
    "q": "Что такое Конфликт метаклассов баз?",
    "options": [
      "нужен согласованный metaclass",
      "берётся random",
      "запрет MI",
      "ABC auto"
    ],
    "answer": 0,
    "explain": "Most derived metaclass. Подходит ответ «нужен согласованный metaclass». Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s16"
  },
  {
    "topic": "rpc",
    "q": "Что такое idempotent gRPC retry?",
    "options": [
      "нужны ключи/политики",
      "всегда safe",
      "запрещены",
      "только unary"
    ],
    "answer": 0,
    "explain": "Повторы сети. Подходит ответ «нужны ключи/политики».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s17"
  },
  {
    "topic": "testing",
    "q": "Что вернёт Property-based testing (Hypothesis)?",
    "options": [
      "генерирует входы по свойствам",
      "заменяет unit тесты всегда",
      "только UI",
      "load test"
    ],
    "answer": 0,
    "explain": "Поиск контрпримеров. Подходит ответ «генерирует входы по свойствам». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s18"
  },
  {
    "topic": "security",
    "q": "Что такое sql injection лечится?",
    "options": [
      "параметризованными запросами / ORM bind",
      "экранированием вручную через replace",
      "uppercase SQL",
      "GIL"
    ],
    "answer": 0,
    "explain": "Никогда не склеивай SQL строками с user input. Подходит ответ «параметризованными запросами / ORM bind».",
    "kind": "single",
    "group": "Безопасность",
    "id": "s19"
  },
  {
    "topic": "CPython",
    "q": "Для чего используется dict?",
    "options": [
      "объясняет память и локальность",
      "обязательно писать на C",
      "заменяет list",
      "убирает hash collisions магией"
    ],
    "answer": 0,
    "explain": "Понимание стоимости операций. Подходит ответ «объясняет память и локальность». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s20"
  },
  {
    "topic": "typing",
    "q": "Что такое TypeVar bound=… ограничивает?",
    "options": [
      "верхнюю границу параметра типа",
      "runtime cast",
      "GIL",
      "slots"
    ],
    "answer": 0,
    "explain": "Generics. Подходит ответ «верхнюю границу параметра типа». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "s21"
  },
  {
    "topic": "cache",
    "q": "Выбери верный вариант: hot key split на 8 шардов идея?",
    "options": [
      "размазать нагрузку популярного ключа",
      "уменьшить TTL до 0",
      "один box сильнее",
      "запретить cache"
    ],
    "answer": 0,
    "explain": "Перекос ключей. Подходит ответ «размазать нагрузку популярного ключа». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s22"
  },
  {
    "topic": "алгоритмы",
    "q": "Выбери верный вариант: Amortized analysis list.append объясняет?",
    "options": [
      "редкие дорогие resize vs много дешёвых O(1)",
      "каждый append O(n)",
      "GIL per element",
      "weakref"
    ],
    "answer": 0,
    "explain": "Средняя стоимость операции за последовательность. Подходит ответ «редкие дорогие resize vs много дешёвых O(1)».",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "s23"
  },
  {
    "topic": "ctypes",
    "q": "Что такое ctypes удобен для?",
    "options": [
      "вызова C ABI без написания extension",
      "замены asyncio",
      "JIT",
      "typing"
    ],
    "answer": 0,
    "explain": "Цена: unsafe, ручные типы, нет pythonic errors. Подходит ответ «вызова C ABI без написания extension».",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s24"
  },
  {
    "topic": "observability",
    "q": "В чём риск Сэмплирование трейсов 1%?",
    "options": [
      "можно пропустить редкие ошибки — нужен tail-based/error sampling",
      "полная картина всегда",
      "ломает метрики RED",
      "запрещено"
    ],
    "answer": 0,
    "explain": "Комбинируй head + tail sampling. Подходит ответ «можно пропустить редкие ошибки — нужен tail-based/error sampling».",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s25"
  },
  {
    "topic": "errors",
    "q": "Выбери верный вариант: except* может матчить часть группы?",
    "options": [
      "остаток пропагируется",
      "глотает всё always",
      "syntax 3.8",
      "только BaseExceptionGroup drop"
    ],
    "answer": 0,
    "explain": "Частичная обработка. Подходит ответ «остаток пропагируется».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "s26"
  },
  {
    "topic": "pickle",
    "q": "Что вернёт out-of-band buffers?",
    "options": [
      "нулевое копирование крупных bytes",
      "JSON binary",
      "YAML",
      "XML"
    ],
    "answer": 0,
    "explain": "Protocol 5. Подходит ответ «нулевое копирование крупных bytes».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s27"
  },
  {
    "topic": "architecture",
    "q": "Выбери верный вариант: Паттерн Outbox?",
    "options": [
      "событие в одной транзакции с записью",
      "удалить тесты",
      "только monolith ban",
      "GIL pattern"
    ],
    "answer": 0,
    "explain": "Событие в одной транзакции с записью. Подходит ответ «событие в одной транзакции с записью». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s28"
  },
  {
    "topic": "concurrency",
    "q": "В чём разница: wait-free vs lock-free?",
    "options": [
      "прогресса гарантии разные",
      "синонимы",
      "GIL terms",
      "asyncio terms"
    ],
    "answer": 0,
    "explain": "Теория параллелизма. Подходит ответ «прогресса гарантии разные». Конкурентность бывает на потоках, процессах и async — у каждого свои ограничения и цена синхронизации.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s29"
  },
  {
    "topic": "asyncio",
    "q": "Что такое shield(awaitable)?",
    "options": [
      "защищает от отмены снаружи",
      "ускоряет",
      "делает multithread",
      "игнорирует exceptions"
    ],
    "answer": 0,
    "explain": "Отмена task снаружи не пробрасывается внутрь shield (с нюансами). Подходит ответ «защищает от отмены снаружи».",
    "kind": "single",
    "group": "Asyncio",
    "id": "s30"
  },
  {
    "topic": "git",
    "q": "Чем `git push --force-with-lease` безопаснее `--force`?",
    "options": [
      "откажется пушить, если remote ушёл вперёд с тех пор, как ты его видел",
      "никогда не переписывает историю",
      "делает rebase автоматически",
      "удаляет все remote-ветки"
    ],
    "answer": 0,
    "explain": "Обычный --force затрёт чужие коммиты на remote «вслепую». --force-with-lease проверяет, что tip remote совпадает с твоим ожиданием — защита от затирания работы коллег после rebase.",
    "kind": "single",
    "tags": [
      "git"
    ],
    "difficulty": "senior",
    "group": "Инструменты и стиль",
    "id": "s31"
  },
  {
    "topic": "packaging",
    "q": "Что вернёт wheel tags cp311-abi3?",
    "options": [
      "интерпретатор/ABI/платформа",
      "только version lib",
      "pep8 tag",
      "git"
    ],
    "answer": 0,
    "explain": "Выбор колеса pip. Подходит ответ «интерпретатор/ABI/платформа». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s32"
  },
  {
    "topic": "дескрипторы",
    "q": "Что такое Data descriptor имеет?",
    "options": [
      "__set__/__delete__ (+ __get__)",
      "только __get__",
      "только __call__",
      "slots"
    ],
    "answer": 0,
    "explain": "Перебивает instance dict. Подходит ответ «__set__/__delete__ (+ __get__)». Дескрипторы управляют доступом к атрибутам через __get__, __set__ и __delete__.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s33"
  },
  {
    "topic": "api",
    "q": "Что такое bulkhead?",
    "options": [
      "изоляция пулов ресурсов",
      "retry",
      "cache",
      "auth"
    ],
    "answer": 0,
    "explain": "Отказоустойчивость. Подходит ответ «изоляция пулов ресурсов».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s34"
  },
  {
    "topic": "testing",
    "q": "Что вернёт property-based (Hypothesis) ловит?",
    "options": [
      "краевые случаи генерацией входов",
      "только UI",
      "только perf",
      "flake network always"
    ],
    "answer": 0,
    "explain": "Дополнение к example-based тестам. Подходит ответ «краевые случаи генерацией входов». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s35"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: Десериализация через shelve из недоверенного источника?",
    "options": [
      "риск RCE / выполнения кода — нельзя",
      "безопасно как json",
      "только DoS",
      "ok за HTTPS"
    ],
    "answer": 0,
    "explain": "Не доверяй бинарным/пайтон-десериализаторам. Подходит ответ «риск RCE / выполнения кода — нельзя». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s36"
  },
  {
    "topic": "память",
    "q": "За счёт чего __slots__ экономит за счёт?",
    "options": [
      "отказа от per-instance __dict__",
      "сжатия bytecode",
      "отключения GC",
      "mmap"
    ],
    "answer": 0,
    "explain": "Фиксированные дескрипторы. Подходит ответ «отказа от per-instance __dict__». Память в CPython устроена через подсчёт ссылок, циклический GC, buffer protocol и иногда __slots__.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s37"
  },
  {
    "topic": "typing",
    "q": "Что такое Interop typing_extensions?",
    "options": [
      "бэкпорты фич typing",
      "runtime pydantic",
      "mypy plugin only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Для старых версий. Подходит ответ «бэкпорты фич typing». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "s38"
  },
  {
    "topic": "serialization",
    "q": "Что такое canonical JSON?",
    "options": [
      "стабильный байтовый вид для подписей",
      "pretty print",
      "pickle",
      "messagepack"
    ],
    "answer": 0,
    "explain": "Крипто/хэши документов. Подходит ответ «стабильный байтовый вид для подписей».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s39"
  },
  {
    "topic": "алгоритмы",
    "q": "Что даёт Bloom filter?",
    "options": [
      "вероятностное «точно нет / возможно да» без false negative",
      "точный set всегда",
      "сортировку",
      "ACID"
    ],
    "answer": 0,
    "explain": "Экономия памяти на больших множествах. Подходит ответ «вероятностное «точно нет / возможно да» без false negative».",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "s40"
  },
  {
    "topic": "C-API",
    "q": "Зачем нужен Py_INCREF / Py_DECREF?",
    "options": [
      "управлять владением ссылкой: не дать GC/dealloc уничтожить нужный объект и не утекать",
      "ускорить арифметику int",
      "отключить GC навсегда",
      "заменить GIL"
    ],
    "answer": 0,
    "explain": "Правила владения (stolen / new / borrowed reference) — главный источник багов в C-API. Borrowed (например из PyList_GetItem) нельзя DECREF «на всякий случай». Утечка INCREF, а затем рост RSS; лишний DECREF, а затем crash. Argument Clinic и pybind11/cffi снижают ручную боль. Argument Clinic — генератор в исходниках CPython: ты описываешь сигнатуру функции, а он создаёт C-код для разбора аргументов вместо ручного PyArg_ParseTuple и дублирования документации.",
    "kind": "single",
    "tags": [
      "c-api"
    ],
    "difficulty": "senior",
    "group": "Нативные расширения",
    "id": "s41"
  },
  {
    "topic": "observability",
    "q": "Выбери верный вариант: RED: буква E?",
    "options": [
      "Errors",
      "RAM",
      "EOF",
      "DNS"
    ],
    "answer": 0,
    "explain": "RED, а затем Errors. Подходит ответ «Errors». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s42"
  },
  {
    "topic": "errors",
    "q": "В чём разница: except* vs ExceptionGroup.raise?",
    "options": [
      "кроме* распаковывает группу по типам",
      "синонимы",
      "except* удаляет traceback",
      "только sync"
    ],
    "answer": 0,
    "explain": "Structured exceptions. Подходит ответ «кроме* распаковывает группу по типам».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "s43"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: Сложность bisect.insort?",
    "options": [
      "O(n) из‑за сдвига списка",
      "O(log n) полностью",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explain": "Большая O: bisect.insort. Подходит ответ «O(n) из‑за сдвига списка». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s44"
  },
  {
    "topic": "SOLID",
    "q": "Что такое Добавление нового типа скидки через новый класс Discount вместо правки calculate()?",
    "options": [
      "OCP",
      "нарушение DRY",
      "LSP",
      "YAGNI"
    ],
    "answer": 0,
    "explain": "Расширение без изменения существующей функции расчёта. Подходит ответ «OCP». SOLID — набор принципов объектного дизайна; в Python их обычно выражают через протоколы, ABC и композицию.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s45"
  },
  {
    "topic": "concurrency",
    "q": "Выбери верный вариант: Lock в asyncio не блокирует OS-thread, а?",
    "options": [
      "паркует корутину",
      "убивает loop",
      "берёт GIL навсегда",
      "spawn process"
    ],
    "answer": 0,
    "explain": "Кооперативность. Подходит ответ «паркует корутину». Конкурентность бывает на потоках, процессах и async — у каждого свои ограничения и цена синхронизации.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s46"
  },
  {
    "topic": "asyncio",
    "q": "В чём разница: Semaphore vs Lock в asyncio?",
    "options": [
      "Semaphore допускает N, Lock — 1",
      "нет разницы",
      "Lock для процессов",
      "Semaphore sync only"
    ],
    "answer": 0,
    "explain": "Ограничение конкурентности. Подходит ответ «Semaphore допускает N, Lock — 1». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s47"
  },
  {
    "topic": "git",
    "q": "Выбери все верные про git rebase?",
    "options": [
      "rebase переписывает историю (новые хеши коммитов)",
      "interactive rebase умеет squash/reword/reorder",
      "rebase безопасен на любой shared-ветке без договорённости",
      "после rebase уже запушенных коммитов часто нужен force-with-lease"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explain": "На shared-ветках rebase без договорённости ломает коллег. Конфликты решаются покоммитно; --onto и -i — мощные, но опасные инструменты. Верными здесь будут пункты: «rebase переписывает историю (новые хеши коммитов)»; «interactive rebase умеет squash/reword/reorder»; «после rebase уже запушенных коммитов часто нужен force-with-lease».",
    "kind": "multi",
    "tags": [
      "git",
      "rebase"
    ],
    "difficulty": "senior",
    "group": "Инструменты и стиль",
    "id": "s48"
  },
  {
    "topic": "ci",
    "q": "Выбери верный вариант: pip-audit / safety в CI ловят?",
    "options": [
      "известные CVE зависимостей",
      "pep8",
      "GIL bugs",
      "flaky tests"
    ],
    "answer": 0,
    "explain": "Supply-chain hygiene. Подходит ответ «известные CVE зависимостей».",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s49"
  },
  {
    "topic": "метаклассы",
    "q": "Что такое __init_subclass__ полезен чтобы?",
    "options": [
      "хукать создание подклассов без метакласса",
      "заменить __init__",
      "GIL",
      "slots auto"
    ],
    "answer": 0,
    "explain": "PEP 487. Подходит ответ «хукать создание подклассов без метакласса». Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s50"
  },
  {
    "topic": "api",
    "q": "Выбери верный вариант: rate limit 429 — клиенту стоит?",
    "options": [
      "backoff + Retry-After",
      "долбить без паузы",
      "сменить на POST",
      "игнор"
    ],
    "answer": 0,
    "explain": "Иначе бан/шторм. Подходит ответ «backoff + Retry-After».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s51"
  },
  {
    "topic": "testing",
    "q": "Что такое chaos engineering?",
    "options": [
      "намеренные сбои в системе",
      "unit mocks only",
      "pep8",
      "types"
    ],
    "answer": 0,
    "explain": "Устойчивость прод-подобных сред. Подходит ответ «намеренные сбои в системе». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s52"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: eval на пользовательском вводе?",
    "options": [
      "RCE риск",
      "безопасен с ast",
      "только SyntaxError",
      "sandbox stdlib guaranteed"
    ],
    "answer": 0,
    "explain": "Никогда. Подходит ответ «RCE риск». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s53"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: Флаг интерпретатора -O?",
    "options": [
      "убирает assert, __debug__=False",
      "включает JIT всегда",
      "отключает GC навсегда",
      "только Windows"
    ],
    "answer": 0,
    "explain": "Убирает assert, __debug__=False. Подходит ответ «убирает assert, __debug__=False». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s54"
  },
  {
    "topic": "typing",
    "q": "Выбери верный вариант: TypeForm / новые формы?",
    "options": [
      "эволюция typing API",
      "удаление annotations",
      "JSON schema stdlib",
      "slots"
    ],
    "answer": 0,
    "explain": "Следи за PEP. Подходит ответ «эволюция typing API». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "s55"
  },
  {
    "topic": "distributed",
    "q": "Что такое «poison message»?",
    "options": [
      "сообщение, которое вечно валит воркер",
      "только про GIL",
      "только SQL index",
      "HTTP 200 always"
    ],
    "answer": 0,
    "explain": "Сообщение, которое вечно валит воркер. Подходит ответ «сообщение, которое вечно валит воркер». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s56"
  },
  {
    "topic": "алгоритмы",
    "q": "Выбери верный вариант: Union-Find (disjoint set) применяют для?",
    "options": [
      "компонент связности в графе",
      "сортировки строк",
      "HTTP",
      "pickle"
    ],
    "answer": 0,
    "explain": "Почти константные union/find с path compression. Подходит ответ «компонент связности в графе».",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "s57"
  },
  {
    "topic": "cffi/pybind",
    "q": "Что такое PyO3 gil release в C-API CPython?",
    "options": [
      "allow threads в Rust",
      "удаляет GC",
      "async runtime",
      "WASM"
    ],
    "answer": 0,
    "explain": "Параллелизм native. Подходит ответ «allow threads в Rust».",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s58"
  },
  {
    "topic": "observability",
    "q": "Что такое continuous profiling privacy?",
    "options": [
      "стек может светить PII/пути",
      "безопасно всегда",
      "only CPU numbers",
      "no risk"
    ],
    "answer": 0,
    "explain": "Редактура/сэмплинг. Подходит ответ «стек может светить PII/пути». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s59"
  },
  {
    "topic": "errors",
    "q": "Выбери верный вариант: except* (3.11) работает с?",
    "options": [
      "ExceptionGroup",
      "любым Exception одинаково как except",
      "только BaseExceptionGroup ban",
      "warnings"
    ],
    "answer": 0,
    "explain": "Распаковка групп ошибок. Подходит ответ «ExceptionGroup».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "s60"
  },
  {
    "topic": "GC",
    "q": "Для чего используется gc.freeze()?",
    "options": [
      "чтобы не трейсить старые объекты после fork/copy-on-write",
      "удалить GIL",
      "очистить RAM сразу",
      "disable refcount"
    ],
    "answer": 0,
    "explain": "Оптимизация для copy-on-write. Подходит ответ «чтобы не трейсить старые объекты после fork/copy-on-write».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s61"
  },
  {
    "topic": "SOLID",
    "q": "Какой принцип SOLID нарушен, если клиент зависит от PostgresUserRepository напрямую?",
    "options": [
      "DIP",
      "SRP",
      "LSP",
      "ISP"
    ],
    "answer": 0,
    "explain": "Нужна абстракция хранилища, а не конкретный драйвер. Подходит ответ «DIP». SOLID — набор принципов объектного дизайна; в Python их обычно выражают через протоколы, ABC и композицию.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s62"
  },
  {
    "topic": "concurrency",
    "q": "Что такое atomic словари?",
    "options": [
      "отдельные операции под GIL, но не составные транзакции",
      "полная ACID",
      "lock-free guarantee для check-then-act",
      "process safe"
    ],
    "answer": 0,
    "explain": "I+=1 на shared не безопасен логически без lock. Подходит ответ «отдельные операции под GIL, но не составные транзакции».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s63"
  },
  {
    "topic": "async",
    "q": "Что такое Cancellation в asyncio Task?",
    "options": [
      "CancelledError в await-точке",
      "убивает OS thread",
      "игнорируется всегда",
      "только KeyboardInterrupt"
    ],
    "answer": 0,
    "explain": "Кооперативная отмена. Подходит ответ «CancelledError в await-точке». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s64"
  },
  {
    "topic": "packaging",
    "q": "Что такое wheel?",
    "options": [
      "бинарный/готовый дистрибутив пакета",
      "исходник tar только",
      "venv",
      "conda exclusive"
    ],
    "answer": 0,
    "explain": "PEP 427. Подходит ответ «бинарный/готовый дистрибутив пакета». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s65"
  },
  {
    "topic": "метаклассы",
    "q": "Что вызывает class A(metaclass=M):?",
    "options": [
      "M(name, bases, namespace)",
      "A.__new__ только",
      "import hook",
      "GC"
    ],
    "answer": 0,
    "explain": "Создание класса. Подходит ответ «M(name, bases, namespace)». Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s66"
  },
  {
    "topic": "api",
    "q": "Что такое Проблема chatty API?",
    "options": [
      "слишком много мелких round-trips",
      "один huge payload всегда лучше без меры",
      "только GraphQL term",
      "GIL"
    ],
    "answer": 0,
    "explain": "Нужен batch/aggregate. Подходит ответ «слишком много мелких round-trips».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s67"
  },
  {
    "topic": "testing",
    "q": "Что такое Contract tests проверяют?",
    "options": [
      "совместимость API между сервисами",
      "только UI",
      "GIL",
      "pep8"
    ],
    "answer": 0,
    "explain": "Consumer-driven contracts. Подходит ответ «совместимость API между сервисами». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s68"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: IDOR (API) кратко?",
    "options": [
      "доступ к чужим объектам по угадываемому id",
      "ускорение Python",
      "тип в typing",
      "только DevOps"
    ],
    "answer": 0,
    "explain": "Доступ к чужим объектам по угадываемому id. Подходит ответ «доступ к чужим объектам по угадываемому id».",
    "kind": "single",
    "group": "Безопасность",
    "id": "s69"
  },
  {
    "topic": "python",
    "q": "почему hash randomization?",
    "options": [
      "защита от collision DoS",
      "ускорение",
      "PEP8",
      "GIL"
    ],
    "answer": 0,
    "explain": "PYTHONHASHSEED. Подходит ответ «защита от collision DoS».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s70"
  },
  {
    "topic": "typing",
    "q": "Выбери верный вариант: TypeGuard / TypeIs помогают?",
    "options": [
      "сузить тип после user-defined проверки",
      "ускорить runtime",
      "заменить isinstance ban",
      "GC"
    ],
    "answer": 0,
    "explain": "Для чекеров типов. Подходит ответ «сузить тип после user-defined проверки». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "s71"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: SERIALIZABLE и аномалия «write skew»?",
    "options": [
      "зависит от СУБД — сверяй документацию/стандарт",
      "всегда разрешена везде",
      "всегда запрещена везде",
      "только в SQLite"
    ],
    "answer": 0,
    "explain": "Не путай SQL-standard и реализацию. Подходит ответ «зависит от СУБД — сверяй документацию/стандарт».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s72"
  },
  {
    "topic": "алгоритмы",
    "q": "Что такое Count-min sketch оценивает?",
    "options": [
      "частоты элементов в потоке с памятью меньше точного подсчёта",
      "точный top-1 всегда",
      "граф shortest path",
      "SQL plan"
    ],
    "answer": 0,
    "explain": "Пространственно эффективная приближённая частота. Подходит ответ «частоты элементов в потоке с памятью меньше точного подсчёта».",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "s73"
  },
  {
    "topic": "C-API",
    "q": "Что такое argument clinic в C-API CPython?",
    "options": [
      "генерация парсинга аргументов CPython",
      "mypy",
      "pytest",
      "ruff"
    ],
    "answer": 0,
    "explain": "Стандартизация C подписей. Подходит ответ «генерация парсинга аргументов CPython». Это про внутренности CPython и написание C-расширений, а не про обычный прикладной код. Argument Clinic — генератор в исходниках CPython: ты описываешь сигнатуру функции, а он создаёт C-код для разбора аргументов вместо ручного PyArg_ParseTuple и дублирования документации.",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s74"
  },
  {
    "topic": "observability",
    "q": "Выбери верный вариант: structured logging лучше print тем, что?",
    "options": [
      "поля JSON/ключ-значение, а затем поиск/алерты",
      "всегда быстрее",
      "без timestamp",
      "без уровней"
    ],
    "answer": 0,
    "explain": "Корреляция request_id и т.п. Подходит ответ «поля JSON/ключ-значение, а затем поиск/алерты». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s75"
  },
  {
    "topic": "errors",
    "q": "Что такое ExceptionGroup.split?",
    "options": [
      "делить группу по типам",
      "flatten logs",
      "suppress",
      "raise bare"
    ],
    "answer": 0,
    "explain": "PEP 654 helpers. Подходит ответ «делить группу по типам».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "s76"
  },
  {
    "topic": "import",
    "q": "Что такое module specs origin?",
    "options": [
      "откуда загружен",
      "version pep",
      "hash only",
      "author"
    ],
    "answer": 0,
    "explain": "Диагностика. Подходит ответ «откуда загружен».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s77"
  },
  {
    "topic": "SOLID",
    "q": "Как в Python обычно реализуют Dependency Inversion?",
    "options": [
      "протоколы/ABC + DI",
      "глобальные import",
      "GIL",
      "monkeypatch в проде"
    ],
    "answer": 0,
    "explain": "Модули верхнего уровня зависят от абстракций, а не от конкретных классов. Подходит ответ «протоколы/ABC + DI».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s78"
  },
  {
    "topic": "concurrency",
    "q": "Что такое False sharing?",
    "options": [
      "контеншн кэш-линий CPU между ядрами",
      "GIL false",
      "shared list append ok",
      "pickle share"
    ],
    "answer": 0,
    "explain": "Низкоуровневый perf. Подходит ответ «контеншн кэш-линий CPU между ядрами». Конкурентность бывает на потоках, процессах и async — у каждого свои ограничения и цена синхронизации.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s79"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт timeout context (3.11)?",
    "options": [
      "отмена по deadline scope",
      "только wait_for legacy",
      "thread join",
      "process kill"
    ],
    "answer": 0,
    "explain": "Asyncio.timeout. Подходит ответ «отмена по deadline scope». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s80"
  },
  {
    "topic": "packaging",
    "q": "Зачем нужен Классификатор Programming Language :: Python :: 3.13?",
    "options": [
      "заявить поддержку версии для PyPI/инструментов",
      "ускорить интерпретатор",
      "включить GIL",
      "заменить mypy"
    ],
    "answer": 0,
    "explain": "Метаданные дистрибутива. Подходит ответ «заявить поддержку версии для PyPI/инструментов». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s81"
  },
  {
    "topic": "runtime",
    "q": "Что такое faulthandler полезен чтобы?",
    "options": [
      "дампить трейсбеки при крашах/сигналах",
      "ускорить код",
      "типизировать",
      "убрать GC"
    ],
    "answer": 0,
    "explain": "Отладка зависаний и фатальных ошибок. Подходит ответ «дампить трейсбеки при крашах/сигналах».",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s82"
  },
  {
    "topic": "api",
    "q": "Зачем нужен Версия API `2024-01-01` в URL/заголовке?",
    "options": [
      "эволюция контракта без ломания клиентов",
      "ускорение CPU",
      "замена auth",
      "только документация"
    ],
    "answer": 0,
    "explain": "Совместимость. Подходит ответ «эволюция контракта без ломания клиентов».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s83"
  },
  {
    "topic": "testing",
    "q": "Что такое differential fuzzing?",
    "options": [
      "сравнение реализаций на случайных входах",
      "coverage gap only",
      "UI",
      "load"
    ],
    "answer": 0,
    "explain": "Поиск расхождений. Подходит ответ «сравнение реализаций на случайных входах». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s84"
  },
  {
    "topic": "security",
    "q": "Что такое jinja2 SandboxedEnvironment?",
    "options": [
      "ограничивает опасные конструкции",
      "полный RCE safe guarantee absolute",
      "заменяет CSP",
      "SQL"
    ],
    "answer": 0,
    "explain": "Не панацея. Подходит ответ «ограничивает опасные конструкции». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s85"
  },
  {
    "topic": "память",
    "q": "Что такое gc.get_stats?",
    "options": [
      "статистика сборов",
      "tracemalloc",
      "perf asm",
      "types"
    ],
    "answer": 0,
    "explain": "Интроспекция GC. Подходит ответ «статистика сборов». Память в CPython устроена через подсчёт ссылок, циклический GC, buffer protocol и иногда __slots__.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s86"
  },
  {
    "topic": "typing",
    "q": "Что такое Protocol (PEP 544)?",
    "options": [
      "структурная типизация (duck typing для чекеров)",
      "runtime ABC обязательно",
      "замена ABC всегда",
      "GIL type"
    ],
    "answer": 0,
    "explain": "Если есть нужные методы — подходит тип. Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "s87"
  },
  {
    "topic": "db",
    "q": "В чём риск logical replication slots?",
    "options": [
      "удержание WAL, а затем диск",
      "только CPU",
      "без рисков",
      "ORM"
    ],
    "answer": 0,
    "explain": "Мониторинг слотов. Подходит ответ «удержание WAL, а затем диск». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s88"
  },
  {
    "topic": "алгоритмы",
    "q": "Выбери верный вариант: Topological sort нужен для?",
    "options": [
      "упорядочивания DAG с зависимостями",
      "циклических графов всегда",
      "только trees",
      "hash map"
    ],
    "answer": 0,
    "explain": "Задачи, пакеты, makefile deps. Подходит ответ «упорядочивания DAG с зависимостями».",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "s89"
  },
  {
    "topic": "wasm",
    "q": "Выбери верный вариант: CPython на WASM ограничивается?",
    "options": [
      "sandbox / нет полного OS API",
      "скоростью равной native всегда",
      "отсутствием int",
      "запретом async"
    ],
    "answer": 0,
    "explain": "Pyodide и др. Подходит ответ «sandbox / нет полного OS API».",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s90"
  },
  {
    "topic": "observability",
    "q": "В чём разница: Span vs metric?",
    "options": [
      "span — трейс операции; metric — агрегат",
      "одно и то же",
      "span только ошибки",
      "metric = log line"
    ],
    "answer": 0,
    "explain": "OpenTelemetry модель. Подходит ответ «span — трейс операции; metric — агрегат». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s91"
  },
  {
    "topic": "errors",
    "q": "Выбери верный вариант: ExceptionGroup (3.11) нужен когда?",
    "options": [
      "несколько ошибок параллельно (TaskGroup)",
      "вместо Exception always",
      "только SyntaxError",
      "warnings"
    ],
    "answer": 0,
    "explain": "Except* разбирает группу. Подходит ответ «несколько ошибок параллельно (TaskGroup)».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "s92"
  },
  {
    "topic": "performance",
    "q": "Что вернёт soabi / tag в wheel?",
    "options": [
      "идентификатор интерпретатора/ABI",
      "pep8",
      "git tag",
      "semver only"
    ],
    "answer": 0,
    "explain": "Совместимость бинарей. Подходит ответ «идентификатор интерпретатора/ABI». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s93"
  },
  {
    "topic": "patterns",
    "q": "Выбери верный вариант: Registry pattern часто на?",
    "options": [
      "dict + декоратор регистрации",
      "только metaclass обязателен",
      "GIL registry",
      "XML"
    ],
    "answer": 0,
    "explain": "Плагины/handlers. Подходит ответ «dict + декоратор регистрации».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s94"
  },
  {
    "topic": "concurrency",
    "q": "Что вернёт memory barrier / volatile в Python?",
    "options": [
      "не как в C; полагайся на queue/Lock семантику",
      "есть volatile keyword",
      "GIL = full barrier always formally for data races без sync? нет",
      "atomic int std"
    ],
    "answer": 0,
    "explain": "Модель памяти осторожно. Подходит ответ «не как в C; полагайся на queue/Lock семантику». Конкурентность бывает на потоках, процессах и async — у каждого свои ограничения и цена синхронизации.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s95"
  },
  {
    "topic": "asyncio",
    "q": "В чём разница: proactor vs selector event loop Windows?",
    "options": [
      "разные IOCP/select модели",
      "одно и то же",
      "только subprocess",
      "GIL loops"
    ],
    "answer": 0,
    "explain": "Политика loop. Подходит ответ «разные IOCP/select модели». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s96"
  },
  {
    "topic": "packaging",
    "q": "В чём разница: manylinux2014 vs 2_28?",
    "options": [
      "разные glibc базы совместимости",
      "одно и то же",
      "macOS tags",
      "musl only"
    ],
    "answer": 0,
    "explain": "Аудит платформы. Подходит ответ «разные glibc базы совместимости». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s97"
  },
  {
    "topic": "метаклассы",
    "q": "Что такое Метакласс?",
    "options": [
      "класс класса (type subclass)",
      "декоратор",
      "модуль",
      "ABC"
    ],
    "answer": 0,
    "explain": "Type(name, bases, ns). Подходит ответ «класс класса (type subclass)». Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s98"
  },
  {
    "topic": "api",
    "q": "В чём разница: pagination cursor vs offset?",
    "options": [
      "cursor стабильнее при вставках; offset проще но «прыгает»",
      "offset always better",
      "cursor only SQL injection",
      "no difference"
    ],
    "answer": 0,
    "explain": "Ленты/фиды — чаще cursor. Подходит ответ «cursor стабильнее при вставках; offset проще но «прыгает»».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s99"
  },
  {
    "topic": "testing",
    "q": "Что такое approval tests?",
    "options": [
      "review эталона человеком",
      "property",
      "mutation",
      "chaos"
    ],
    "answer": 0,
    "explain": "Близко к snapshot. Подходит ответ «review эталона человеком». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s100"
  },
  {
    "topic": "security",
    "q": "В чём риск template injection в Jinja без sandbox?",
    "options": [
      "RCE через {{ }}",
      "только XSS HTML",
      "только DoS CPU always",
      "нет риска"
    ],
    "answer": 0,
    "explain": "Не доверяй шаблонам от пользователя. Подходит ответ «RCE через {{ }}». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s101"
  },
  {
    "topic": "байткод",
    "q": "Что такое LOAD_GLOBAL с кэшем?",
    "options": [
      "специализация 3.11+",
      "всегда полный dict scan без кэша в новых",
      "importlib",
      "typing"
    ],
    "answer": 0,
    "explain": "Adaptive. Подходит ответ «специализация 3.11+».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s102"
  },
  {
    "topic": "typing",
    "q": "Выбери верный вариант: ReadOnly в TypedDict (новые PEP)?",
    "options": [
      "ключи только для чтения в checker",
      "runtime const",
      "slots",
      "frozen dataclass same"
    ],
    "answer": 0,
    "explain": "Эволюция TypedDict. Подходит ответ «ключи только для чтения в checker». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "s103"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: При READ COMMITTED write skew?",
    "options": [
      "возможен или нет в зависимости от СУБД/реализации — проверяй документацию",
      "невозможен никогда нигде",
      "только в MyISAM",
      "только NoSQL"
    ],
    "answer": 0,
    "explain": "Теория изоляций ≠ конкретный движок. Подходит ответ «возможен или нет в зависимости от СУБД/реализации — проверяй документацию».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s104"
  },
  {
    "topic": "алгоритмы",
    "q": "Когда dict не O(1) в худшем случае?",
    "options": [
      "много коллизий / hash DoS (редко в современных CPython)",
      "никогда",
      "всегда O(n)",
      "только PyPy"
    ],
    "answer": 0,
    "explain": "Хеш-атаки и плохие __hash__ могут деградировать в цепочки. Подходит ответ «много коллизий / hash DoS (редко в современных CPython)».",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "s105"
  },
  {
    "topic": "ctypes",
    "q": "Что такое restype=None значит?",
    "options": [
      "void",
      "int",
      "auto py object",
      "error"
    ],
    "answer": 0,
    "explain": "Сигнатура C. Подходит ответ «void».",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s106"
  },
  {
    "topic": "observability",
    "q": "В чём разница: profiling vs tracing?",
    "options": [
      "стек/CPU vs запросы по сервисам",
      "одно",
      "logs synonim",
      "metrics synonim"
    ],
    "answer": 0,
    "explain": "Разные вопросы. Подходит ответ «стек/CPU vs запросы по сервисам». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s107"
  },
  {
    "topic": "errors",
    "q": "Что такое BaseExceptionGroup.subgroup?",
    "options": [
      "фильтр подгруппы",
      "flatten",
      "raise bare",
      "logging"
    ],
    "answer": 0,
    "explain": "API групп. Подходит ответ «фильтр подгруппы».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "s108"
  },
  {
    "topic": "performance",
    "q": "Что такое devirtualization в JIT?",
    "options": [
      "упрощает вызовы при мономорфности",
      "GIL",
      "typing cast runtime",
      "async"
    ],
    "answer": 0,
    "explain": "Связь со specialization. Подходит ответ «упрощает вызовы при мономорфности». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s109"
  },
  {
    "topic": "architecture",
    "q": "Что такое Anti-corruption layer переводит?",
    "options": [
      "внешнюю модель во внутренний язык домена",
      "JSON в XML only",
      "sync в async магией",
      "SQL в NoSQL auto"
    ],
    "answer": 0,
    "explain": "DDD boundary. Подходит ответ «внешнюю модель во внутренний язык домена». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s110"
  },
  {
    "topic": "concurrency",
    "q": "Что такое concurrent.futures.ProcessPoolExecutor хорош для?",
    "options": [
      "CPU-bound кусков",
      "крошечных print",
      "замены asyncio всегда",
      "GUI main thread"
    ],
    "answer": 0,
    "explain": "Пул процессов с future API. Подходит ответ «CPU-bound кусков». Конкурентность бывает на потоках, процессах и async — у каждого свои ограничения и цена синхронизации.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s111"
  },
  {
    "topic": "asyncio",
    "q": "Что такое readexactly?",
    "options": [
      "ровно n байт или IncompleteReadError",
      "до EOF always",
      "line",
      "http"
    ],
    "answer": 0,
    "explain": "Протоколы. Подходит ответ «ровно n байт или IncompleteReadError». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s112"
  },
  {
    "topic": "packaging",
    "q": "Выбери верный вариант: pylock.toml / lock standards эволюция?",
    "options": [
      "стандартизация локов экосистемы",
      "requirements.txt forever only standard",
      "poetry exclusive lock format eternal",
      "pip freeze ban"
    ],
    "answer": 0,
    "explain": "Следи за PEP. Подходит ответ «стандартизация локов экосистемы». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s113"
  },
  {
    "topic": "метаклассы",
    "q": "Выбери верный вариант: type(name, bases, ns) создаёт?",
    "options": [
      "новый класс",
      "экземпляр object",
      "модуль",
      "coroutine"
    ],
    "answer": 0,
    "explain": "Классы — объекты type. Подходит ответ «новый класс». Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s114"
  },
  {
    "topic": "api",
    "q": "Что такое offset-пагинация page_size=20 минус?",
    "options": [
      "«прыжки» при вставках; глубокий offset дорог",
      "нельзя реализовать в SQL",
      "всегда лучше cursor",
      "запрещена REST"
    ],
    "answer": 0,
    "explain": "Для лент чаще cursor. Подходит ответ ««прыжки» при вставках; глубокий offset дорог».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s115"
  },
  {
    "topic": "testing",
    "q": "Что такое ephemeral environment per PR?",
    "options": [
      "изоляция интеграций",
      "shared staging fight",
      "only local",
      "only prod"
    ],
    "answer": 0,
    "explain": "Современный CI/CD. Подходит ответ «изоляция интеграций». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s116"
  },
  {
    "topic": "security",
    "q": "Что вернёт shell=True + user input?",
    "options": [
      "инъекции / path traversal / open redirect — валидируй и параметризуй",
      "ускоряет код",
      "требуется PEP 8",
      "безопасно в FastAPI всегда"
    ],
    "answer": 0,
    "explain": "Классика AppSec. Подходит ответ «инъекции / path traversal / open redirect — валидируй и параметризуй».",
    "kind": "single",
    "group": "Безопасность",
    "id": "s117"
  },
  {
    "topic": "память",
    "q": "Выбери верный вариант: object header минимум содержит?",
    "options": [
      "refcount и указатель типа (CPython)",
      "только payload",
      "только GIL ticket",
      "JSON schema"
    ],
    "answer": 0,
    "explain": "PyObject_HEAD. Подходит ответ «refcount и указатель типа (CPython)». Память в CPython устроена через подсчёт ссылок, циклический GC, buffer protocol и иногда __slots__.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s118"
  },
  {
    "topic": "typing",
    "q": "В чём разница: NoReturn vs Never?",
    "options": [
      "сближаются; Never bottom",
      "NoReturn = Any",
      "Never = object",
      "синоним Optional"
    ],
    "answer": 0,
    "explain": "Семантика недостижимости. Подходит ответ «сближаются; Never bottom». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "s119"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: REPEATABLE READ и аномалия «phantom read»?",
    "options": [
      "зависит от СУБД — сверяй документацию/стандарт",
      "всегда разрешена везде",
      "всегда запрещена везде",
      "только в SQLite"
    ],
    "answer": 0,
    "explain": "Не путай SQL-standard и реализацию. Подходит ответ «зависит от СУБД — сверяй документацию/стандарт».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s120"
  },
  {
    "topic": "алгоритмы",
    "q": "Что даёт Sliding window на строке/массиве?",
    "options": [
      "O(n) вместо O(n²) для подотрезков фиксированной длины",
      "O(1) всегда",
      "только DFS",
      "только SQL"
    ],
    "answer": 0,
    "explain": "Два указателя двигаются по окну. Подходит ответ «O(n) вместо O(n²) для подотрезков фиксированной длины».",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "s121"
  },
  {
    "topic": "C-API",
    "q": "Что проверяет PyErr_Occurred?",
    "options": [
      "установлено ли исключение",
      "refcount",
      "GIL held?",
      "hash"
    ],
    "answer": 0,
    "explain": "C-API error protocol. Подходит ответ «установлено ли исключение». Это про внутренности CPython и написание C-расширений, а не про обычный прикладной код.",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s122"
  },
  {
    "topic": "observability",
    "q": "Что такое Структурированные логи?",
    "options": [
      "machine-readable поля (JSON и т.п.)",
      "только print traceback",
      "pickle logs",
      "HTML"
    ],
    "answer": 0,
    "explain": "Удобный поиск/алерты. Подходит ответ «machine-readable поля (JSON и т.п.)». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s123"
  },
  {
    "topic": "errors",
    "q": "Что такое traceback.hide_frame / фильтрация?",
    "options": [
      "чище трейсы библиотек (механики зависят от версии)",
      "удаляет error",
      "logging only",
      "warnings"
    ],
    "answer": 0,
    "explain": "UX ошибок. Подходит ответ «чище трейсы библиотек (механики зависят от версии)».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "s124"
  },
  {
    "topic": "import",
    "q": "Какой типичный симптом circular import типичный?",
    "options": [
      "AttributeError: partially initialized module",
      "SyntaxError всегда",
      "GIL deadlock only",
      "segfault"
    ],
    "answer": 0,
    "explain": "Лечится локальными import / перестройкой зависимостей. Подходит ответ «AttributeError: partially initialized module».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s125"
  },
  {
    "topic": "patterns",
    "q": "Выбери верный вариант: Domain Event отличается от Integration Event тем, что?",
    "options": [
      "domain — внутри bounded context; integration — для других сервисов",
      "одно и то же",
      "только Kafka",
      "только REST"
    ],
    "answer": 0,
    "explain": "Не все доменные события публикуют наружу. Подходит ответ «domain — внутри bounded context; integration — для других сервисов».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s126"
  },
  {
    "topic": "concurrency",
    "q": "Выбери верный вариант: message passing > shared memory когда?",
    "options": [
      "нужна простота рассуждений",
      "всегда медленнее useless",
      "GIL gone",
      "numpy only"
    ],
    "answer": 0,
    "explain": "Акторы/очереди. Подходит ответ «нужна простота рассуждений». Конкурентность бывает на потоках, процессах и async — у каждого свои ограничения и цена синхронизации.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s127"
  },
  {
    "topic": "async",
    "q": "Что выведет код?",
    "options": [
      "в await-точках / finally",
      "после return only",
      "в другом процессе",
      "никогда"
    ],
    "answer": 0,
    "explain": "Кооперативная отмена. Подходит ответ «в await-точках / finally». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "code": "async def work():\n    try:\n        await asyncio.sleep(10)\n    finally:\n        ...",
    "group": "Asyncio",
    "id": "s128"
  },
  {
    "topic": "packaging",
    "q": "Зачем нужен CI matrix с Python 3.10?",
    "options": [
      "ловить несовместимости версий",
      "только ради бейджа",
      "заменяет тесты",
      "нужен только latest"
    ],
    "answer": 0,
    "explain": "Совместимость пакета. Подходит ответ «ловить несовместимости версий». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s129"
  },
  {
    "topic": "дескрипторы",
    "q": "Что такое Non-data descriptor?",
    "options": [
      "только __get__, слабее instance __dict__",
      "сильнее всегда",
      "запрещён",
      "это property.setter"
    ],
    "answer": 0,
    "explain": "Функции — non-data descriptors. Подходит ответ «только __get__, слабее instance __dict__». Дескрипторы управляют доступом к атрибутам через __get__, __set__ и __delete__.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s130"
  },
  {
    "topic": "api",
    "q": "Что вернёт partial response / sparse fieldsets?",
    "options": [
      "клиент просит поля",
      "всегда full entity",
      "GraphQL only possible",
      "gRPC ban"
    ],
    "answer": 0,
    "explain": "Экономия трафика. Подходит ответ «клиент просит поля».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s131"
  },
  {
    "topic": "testing",
    "q": "Выбери верный вариант: contract / consumer-driven tests полезны когда?",
    "options": [
      "много сервисов и независимые релизы",
      "один монолит без API",
      "только UI",
      "GIL"
    ],
    "answer": 0,
    "explain": "Фиксируют ожидания потребителя API. Подходит ответ «много сервисов и независимые релизы». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s132"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: open redirect (web) кратко?",
    "options": [
      "редирект на вредоносный URL",
      "ускорение Python",
      "тип в typing",
      "только DevOps"
    ],
    "answer": 0,
    "explain": "Редирект на вредоносный URL. Подходит ответ «редирект на вредоносный URL». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s133"
  },
  {
    "topic": "CPython",
    "q": "Зачем нужен interning маленьких int (−5…256)?",
    "options": [
      "переиспользование объектов, меньше аллокаций",
      "обязательная математика",
      "безопасность",
      "убрать =="
    ],
    "answer": 0,
    "explain": "Поэтому is для таких int может «случайно» работать. Подходит ответ «переиспользование объектов, меньше аллокаций».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s134"
  },
  {
    "topic": "typing",
    "q": "Чем помогает dataclass_transform?",
    "options": [
      "библиотекам-кодогенераторам полей для чекеров",
      "ускорить dataclass",
      "SQL",
      "async"
    ],
    "answer": 0,
    "explain": "PEP 681. Подходит ответ «библиотекам-кодогенераторам полей для чекеров». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "s135"
  },
  {
    "topic": "caching",
    "q": "Выбери верный вариант: Кэш с вытеснением вручную часто на?",
    "options": [
      "OrderedDict / functools.lru_cache",
      "list.pop(0) как LRU идеал",
      "set",
      "queue.Queue only"
    ],
    "answer": 0,
    "explain": "Move_to_end паттерн. Подходит ответ «OrderedDict / functools.lru_cache».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s136"
  },
  {
    "topic": "алгоритмы",
    "q": "Выбери верный вариант: LRU cache вручную на OrderedDict — move_to_end?",
    "options": [
      "чтении/записи ключа для обновления «свежести»",
      "удалении всех",
      "sort",
      "pickle"
    ],
    "answer": 0,
    "explain": "Popitem(last=False) выкидывает LRU. Подходит ответ «чтении/записи ключа для обновления «свежести»».",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "s137"
  },
  {
    "topic": "wasm",
    "q": "Что такое WASI для Python?",
    "options": [
      "системный интерфейс для WASM",
      "GIL wasm",
      "NumPy GPU",
      "JDK"
    ],
    "answer": 0,
    "explain": "Портируемость. Подходит ответ «системный интерфейс для WASM».",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s138"
  },
  {
    "topic": "observability",
    "q": "Выбери верный вариант: Метка Prometheus `email` на высококардинальном трафике?",
    "options": [
      "опасно взрывом time series",
      "всегда обязательно",
      "ускоряет PromQL",
      "заменяет логи"
    ],
    "answer": 0,
    "explain": "Cardinality — главный враг метрик. Подходит ответ «опасно взрывом time series». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s139"
  },
  {
    "topic": "errors",
    "q": "Выбери верный вариант: ExceptionGroup как список ошибок gather?",
    "options": [
      "TaskGroup/3.11 стиль",
      "только logging",
      "замена tuple return",
      "warnings"
    ],
    "answer": 0,
    "explain": "Структурированные сбои. Подходит ответ «TaskGroup/3.11 стиль».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "s140"
  },
  {
    "topic": "performance",
    "q": "Чем помогает tracemalloc?",
    "options": [
      "искать утечки аллокаций",
      "ускорить network",
      "убрать GIL",
      "форматировать JSON"
    ],
    "answer": 0,
    "explain": "Трассировка аллокаций. Подходит ответ «искать утечки аллокаций». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s141"
  },
  {
    "topic": "architecture",
    "q": "Выбери верный вариант: Паттерн CQRS?",
    "options": [
      "разделить пути чтения и записи",
      "удалить тесты",
      "только monolith ban",
      "GIL pattern"
    ],
    "answer": 0,
    "explain": "Разделить пути чтения и записи. Подходит ответ «разделить пути чтения и записи». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s142"
  },
  {
    "topic": "concurrency",
    "q": "Что такое software transactional memory в Python?",
    "options": [
      "нет стандартного STM",
      "есть в stdlib",
      "GIL is STM",
      "asyncio STM"
    ],
    "answer": 0,
    "explain": "Используй locks/actors. Подходит ответ «нет стандартного STM». Конкурентность бывает на потоках, процессах и async — у каждого свои ограничения и цена синхронизации.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s143"
  },
  {
    "topic": "asyncio",
    "q": "Выбери верный вариант: TaskGroup (3.11) при ошибке в задаче?",
    "options": [
      "отменяет siblings и поднимает ExceptionGroup",
      "глотает",
      "убивает процесс",
      "игнорит cancel"
    ],
    "answer": 0,
    "explain": "Структурная конкурентность. Подходит ответ «отменяет siblings и поднимает ExceptionGroup». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s144"
  },
  {
    "topic": "packaging",
    "q": "Что такое PEP 621 project table?",
    "options": [
      "метаданные в pyproject",
      "runtime settings app",
      "mypy ini",
      "tox only"
    ],
    "answer": 0,
    "explain": "Стандартизация. Подходит ответ «метаданные в pyproject». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s145"
  },
  {
    "topic": "дескрипторы",
    "q": "В чём разница: data vs non-data descriptor?",
    "options": [
      "наличие __set__/__delete__ меняет приоритет в lookup",
      "нет разницы",
      "только slots",
      "только slots + GC"
    ],
    "answer": 0,
    "explain": "Data descriptor побеждает instance __dict__. Подходит ответ «наличие __set__/__delete__ меняет приоритет в lookup».",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s146"
  },
  {
    "topic": "api",
    "q": "В чём разница: pagination cursor vs offset?",
    "options": [
      "cursor стабильнее при вставках",
      "offset всегда лучше",
      "одно",
      "только GraphQL"
    ],
    "answer": 0,
    "explain": "Лента/фид. Подходит ответ «cursor стабильнее при вставках».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s147"
  },
  {
    "topic": "testing",
    "q": "Что такое testcontainers?",
    "options": [
      "реальные зависимости в Docker для тестов",
      "только mocks",
      "только in-memory fake always better",
      "chaos"
    ],
    "answer": 0,
    "explain": "Интеграции. Подходит ответ «реальные зависимости в Docker для тестов». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s148"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: XSS (web) кратко?",
    "options": [
      "внедрение скрипта в браузер жертвы",
      "ускорение Python",
      "тип в typing",
      "только DevOps"
    ],
    "answer": 0,
    "explain": "Внедрение скрипта в браузер жертвы. Подходит ответ «внедрение скрипта в браузер жертвы». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s149"
  },
  {
    "topic": "CPython",
    "q": "Почему локальные переменные быстрее глобальных?",
    "options": [
      "LOOKUP по индексу vs dict builtins/global",
      "GIL иначе работает",
      "кэш CPU магия языка",
      "интернирование имён"
    ],
    "answer": 0,
    "explain": "Оптимизация VM. Подходит ответ «LOOKUP по индексу vs dict builtins/global». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s150"
  },
  {
    "topic": "typing",
    "q": "Выбери верный вариант: TypeGuard / TypeIs нужны для?",
    "options": [
      "сужения типов в чекере",
      "runtime cast всегда",
      "GIL",
      "скорости"
    ],
    "answer": 0,
    "explain": "User-defined type guards. Подходит ответ «сужения типов в чекере». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "s151"
  },
  {
    "topic": "distributed",
    "q": "Выбери верный вариант: exactly-once в реальности часто?",
    "options": [
      "at-least-once + идемпотентность на приёме",
      "бесплатно в любой очереди",
      "только UDP",
      "GIL guarantee"
    ],
    "answer": 0,
    "explain": "Энд-ту-энд exactly-once дорог/условен. Подходит ответ «at-least-once + идемпотентность на приёме». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s152"
  },
  {
    "topic": "алгоритмы",
    "q": "Почему Timsort O(n) на уже отсортированных данных?",
    "options": [
      "находит уже упорядоченные runs и сливает эффективно",
      "quicksort pivot",
      "hash only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Адаптивность — сильная сторона Timsort. Подходит ответ «находит уже упорядоченные runs и сливает эффективно».",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "s153"
  },
  {
    "topic": "ctypes",
    "q": "В чём риск главный?",
    "options": [
      "segfault/UB при неверных типах/lifetime",
      "только медленно",
      "нет риска",
      "ломает pip"
    ],
    "answer": 0,
    "explain": "Нет защиты памяти Python. Подходит ответ «segfault/UB при неверных типах/lifetime».",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s154"
  },
  {
    "topic": "observability",
    "q": "В чём разница: trace vs log vs metric?",
    "options": [
      "trace — путь запроса; log — события; metric — агрегаты",
      "одно и то же",
      "metric = stacktrace",
      "log заменяет SLO"
    ],
    "answer": 0,
    "explain": "Три столпа observability. Подходит ответ «trace — путь запроса; log — события; metric — агрегаты». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s155"
  },
  {
    "topic": "errors",
    "q": "Что такое raise ExceptionGroup?",
    "options": [
      "несколько ошибок сразу",
      "только asyncio",
      "замена BaseException",
      "warnings"
    ],
    "answer": 0,
    "explain": "Параллельные сбои. Подходит ответ «несколько ошибок сразу».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "s156"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: vectorization (numpy) выигрывает за счёт?",
    "options": [
      "C-циклов без GIL-питона на элемент",
      "большего числа потоков Python always",
      "pickle",
      "f-string"
    ],
    "answer": 0,
    "explain": "Меньше интерпретации байткода. Подходит ответ «C-циклов без GIL-питона на элемент». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s157"
  },
  {
    "topic": "design",
    "q": "Что такое Tell, Don't Ask?",
    "options": [
      "меньше вытягивания состояния наружу",
      "больше геттеров везде",
      "анемичная модель идеал always",
      "GIL"
    ],
    "answer": 0,
    "explain": "ООП стиль. Подходит ответ «меньше вытягивания состояния наружу».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s158"
  },
  {
    "topic": "multiprocessing",
    "q": "Что вернёт fork + threads =?",
    "options": [
      "опасно (locks)",
      "рекомендуемый default everywhere",
      "быстрее spawn всегда без минусов",
      "async required"
    ],
    "answer": 0,
    "explain": "Только forking thread жив. Подходит ответ «опасно (locks)».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s159"
  },
  {
    "topic": "async",
    "q": "Что такое shield() защищает?",
    "options": [
      "awaitable от отмены снаружи",
      "от KeyboardInterrupt",
      "от GIL",
      "от MemoryError"
    ],
    "answer": 0,
    "explain": "Asyncio.shield. Подходит ответ «awaitable от отмены снаружи». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s160"
  },
  {
    "topic": "packaging",
    "q": "Зачем нужен Классификатор Programming Language :: Python :: 3.10?",
    "options": [
      "заявить поддержку версии для PyPI/инструментов",
      "ускорить интерпретатор",
      "включить GIL",
      "заменить mypy"
    ],
    "answer": 0,
    "explain": "Метаданные дистрибутива. Подходит ответ «заявить поддержку версии для PyPI/инструментов». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s161"
  },
  {
    "topic": "lazy",
    "q": "В чём риск MODULE_LEVEL __getattr__?",
    "options": [
      "неочевидные ImportError/стоимость",
      "всегда быстрее",
      "обязателен pep",
      "убирает циклы всегда без минусов"
    ],
    "answer": 0,
    "explain": "Явность vs магия. Подходит ответ «неочевидные ImportError/стоимость».",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s162"
  },
  {
    "topic": "api",
    "q": "Зачем нужен идемпотентный ключ в платежах?",
    "options": [
      "безопасный retry без двойного списания",
      "ускорение CPU",
      "шифрование",
      "пагинация"
    ],
    "answer": 0,
    "explain": "Клиент присылает уникальный ключ операции. Подходит ответ «безопасный retry без двойного списания».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s163"
  },
  {
    "topic": "testing",
    "q": "Выбери верный вариант: Test pyramid нарушен если?",
    "options": [
      "тысячи e2e и почти нет unit",
      "много unit",
      "есть integration",
      "есть fixtures"
    ],
    "answer": 0,
    "explain": "E2E медленные и хрупкие — не должны доминировать. Подходит ответ «тысячи e2e и почти нет unit». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s164"
  },
  {
    "topic": "security",
    "q": "Что такое secure cookie flags?",
    "options": [
      "HttpOnly Secure SameSite",
      "только Secure",
      "только path /",
      "Domain=* safe"
    ],
    "answer": 0,
    "explain": "Сессии. Подходит ответ «HttpOnly Secure SameSite». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s165"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: GC generations — про что?",
    "options": [
      "поколения циклического GC",
      "только pip",
      "HTTP header",
      "pytest fixture"
    ],
    "answer": 0,
    "explain": "Поколения циклического GC. Подходит ответ «поколения циклического GC». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s166"
  },
  {
    "topic": "typing",
    "q": "Что вернёт ParamSpec / Concatenate для?",
    "options": [
      "типизации декораторов (*args/**kwargs)",
      "list[int]",
      "Enum",
      "async IO"
    ],
    "answer": 0,
    "explain": "PEP 612. Подходит ответ «типизации декораторов (*args/**kwargs)». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "s167"
  },
  {
    "topic": "distributed",
    "q": "В чём разница: clock skew vs logical time?",
    "options": [
      "не полагайся на wall clock для порядка",
      "NTP perfect",
      "UUID time enough",
      "GIL time"
    ],
    "answer": 0,
    "explain": "Lamport/vector/hybrid. Подходит ответ «не полагайся на wall clock для порядка». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s168"
  },
  {
    "topic": "wasm",
    "q": "Выбери верный вариант: Ограничение сокетов/файлов в браузерном Pyodide?",
    "options": [
      "sandbox браузера",
      "нет int",
      "нет list",
      "нет функций"
    ],
    "answer": 0,
    "explain": "Другая среда исполнения. Подходит ответ «sandbox браузера».",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s169"
  },
  {
    "topic": "observability",
    "q": "Что такое OpenTelemetry закрывает?",
    "options": [
      "traces/metrics/logs стандарт",
      "только APM vendor lock обязательно",
      "GIL metrics",
      "pip audit"
    ],
    "answer": 0,
    "explain": "Единый стандарт телеметрии. Подходит ответ «traces/metrics/logs стандарт». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s170"
  },
  {
    "topic": "errors",
    "q": "Выбери верный вариант: chained exceptions __context__ при raise в except?",
    "options": [
      "автосвязь",
      "только from",
      "пропадает",
      "logging"
    ],
    "answer": 0,
    "explain": "Неявная цепочка. Подходит ответ «автосвязь».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "s171"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: Сложность list.append?",
    "options": [
      "O(1) амортизированно",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "Большая O для list.append. Подходит ответ «O(1) амортизированно». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s172"
  },
  {
    "topic": "SOLID",
    "q": "Что такое DIP не требует?",
    "options": [
      "обязательного DI-фреймворка",
      "абстракций",
      "тестируемости",
      "слабой связанности"
    ],
    "answer": 0,
    "explain": "Достаточно передать зависимость вручную; фреймворк опционален. Подходит ответ «обязательного DI-фреймворка».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s173"
  },
  {
    "topic": "signals",
    "q": "Что такое signal.set_wakeup_fd связан с?",
    "options": [
      "пробуждением loop от сигнала",
      "файловым GC",
      "HTTP/2",
      "typing"
    ],
    "answer": 0,
    "explain": "Интеграция с asyncio/selectors. Подходит ответ «пробуждением loop от сигнала».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s174"
  },
  {
    "topic": "async",
    "q": "Что такое flow control pause_writing?",
    "options": [
      "протокол транспорта при backpressure",
      "GIL pause",
      "thread pause",
      "process"
    ],
    "answer": 0,
    "explain": "Asyncio transports. Подходит ответ «протокол транспорта при backpressure». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s175"
  },
  {
    "topic": "packaging",
    "q": "Зачем нужен CI matrix с Python 3.11?",
    "options": [
      "ловить несовместимости версий",
      "только ради бейджа",
      "заменяет тесты",
      "нужен только latest"
    ],
    "answer": 0,
    "explain": "Совместимость пакета. Подходит ответ «ловить несовместимости версий». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s176"
  },
  {
    "topic": "runtime",
    "q": "Что вернёт sys.settrace / tracing?",
    "options": [
      "отладка/coverage на уровне событий",
      "ускорение hot path",
      "GIL off",
      "async only"
    ],
    "answer": 0,
    "explain": "Сильно замедляет; для prod — осторожно. Подходит ответ «отладка/coverage на уровне событий».",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s177"
  },
  {
    "topic": "api",
    "q": "Что такое HATEOAS спорность?",
    "options": [
      "гипермедиа в REST на практике редко полная",
      "обязателен HTTP",
      "GraphQL feature",
      "gRPC"
    ],
    "answer": 0,
    "explain": "Реалистичный REST. Подходит ответ «гипермедиа в REST на практике редко полная».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s178"
  },
  {
    "topic": "testing",
    "q": "В чём разница: load test ≠ stress test?",
    "options": [
      "разные цели (норма vs перегруз)",
      "синонимы",
      "только unit",
      "только chaos"
    ],
    "answer": 0,
    "explain": "Термины перфа. Подходит ответ «разные цели (норма vs перегруз)». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s179"
  },
  {
    "topic": "security",
    "q": "Что вернёт // or metadata IP?",
    "options": [
      "облачные метаданные под угрозой",
      "не бывает",
      "только XSS",
      "только CSRF"
    ],
    "answer": 0,
    "explain": "169.254.169.254 и т.п. Подходит ответ «облачные метаданные под угрозой». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s180"
  },
  {
    "topic": "память",
    "q": "Выбери верный вариант: цикл ссылок a.x=b; b.x=a собирает?",
    "options": [
      "generational GC (цикл), не только refcount",
      "только refcount сразу",
      "никогда",
      "только weakref"
    ],
    "answer": 0,
    "explain": "Refcount не рвёт циклы сам — нужен cyclic GC. Подходит ответ «generational GC (цикл), не только refcount».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s181"
  },
  {
    "topic": "typing",
    "q": "Выбери верный вариант: Self (3.11) в аннотациях?",
    "options": [
      "тип текущего класса",
      "Any",
      "object",
      "cls runtime"
    ],
    "answer": 0,
    "explain": "Удобно для fluent API. Подходит ответ «тип текущего класса». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "s182"
  },
  {
    "topic": "distributed",
    "q": "Что такое leader election?",
    "options": [
      "выбор primary",
      "DNS RR",
      "client sticky random",
      "SQL AUTOINCREMENT"
    ],
    "answer": 0,
    "explain": "Raft/etcd. Подходит ответ «выбор primary». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s183"
  },
  {
    "topic": "C-API",
    "q": "Что такое vectorcall protocol в C-API CPython?",
    "options": [
      "быстрые вызовы",
      "async",
      "import",
      "GC"
    ],
    "answer": 0,
    "explain": "PEP 590. Подходит ответ «быстрые вызовы». Это про внутренности CPython и написание C-расширений, а не про обычный прикладной код.",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s184"
  },
  {
    "topic": "observability",
    "q": "Что вернёт SLO / error budget?",
    "options": [
      "целевая надёжность и запас на изменения",
      "только uptime marketing",
      "CPU limit",
      "ticket SLA support only"
    ],
    "answer": 0,
    "explain": "SRE практика. Подходит ответ «целевая надёжность и запас на изменения». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s185"
  },
  {
    "topic": "errors",
    "q": "Что вернёт Exception groups (3.11) + except*?",
    "options": [
      "работа с несколькими исключениями сразу",
      "замена BaseException",
      "только asyncio",
      "deprecated"
    ],
    "answer": 0,
    "explain": "PEP 654. Подходит ответ «работа с несколькими исключениями сразу».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "s186"
  },
  {
    "topic": "performance",
    "q": "Что такое specializing adaptive interpreter?",
    "options": [
      "ускоряет стабильные типы",
      "убирает need for types",
      "удаляет GC",
      "WASM"
    ],
    "answer": 0,
    "explain": "3.11+. Подходит ответ «ускоряет стабильные типы». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s187"
  },
  {
    "topic": "design",
    "q": "Что означает Fail fast?",
    "options": [
      "рано обнаруживать ошибки",
      "глотать exceptions",
      "retry бесконечно",
      "lazy import всегда"
    ],
    "answer": 0,
    "explain": "Быстрый сигнал о проблеме. Подходит ответ «рано обнаруживать ошибки».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s188"
  },
  {
    "topic": "fork",
    "q": "Чем помогает os.register_at_fork?",
    "options": [
      "сбрасывать locks/состояние вокруг fork",
      "создать thread",
      "GIL off",
      "pickle"
    ],
    "answer": 0,
    "explain": "Безопасный fork. Подходит ответ «сбрасывать locks/состояние вокруг fork».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s189"
  },
  {
    "topic": "async",
    "q": "Что такое structured concurrency выигрыш?",
    "options": [
      "время жизни задач привязано к scope",
      "больше detach fire-and-forget",
      "GIL remove",
      "threads ban"
    ],
    "answer": 0,
    "explain": "TaskGroup/nurseries. Подходит ответ «время жизни задач привязано к scope». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s190"
  },
  {
    "topic": "packaging",
    "q": "В чём разница: wheel vs sdist?",
    "options": [
      "wheel — собранный дистрибутив; sdist — исходники для сборки",
      "синонимы",
      "wheel только win",
      "sdist быстрее install always"
    ],
    "answer": 0,
    "explain": "Предпочитай wheels в проде для скорости/репродьюса. Подходит ответ «wheel — собранный дистрибутив; sdist — исходники для сборки».",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s191"
  },
  {
    "topic": "runtime",
    "q": "Что такое sitecustomize/usercustomize?",
    "options": [
      "автоимпорт при старте",
      "pip config",
      "venv activate hook only",
      "pytest"
    ],
    "answer": 0,
    "explain": "Осторожно с сайд-эффектами. Подходит ответ «автоимпорт при старте».",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s192"
  },
  {
    "topic": "api",
    "q": "Выбери верный вариант: Клиент получил 429 — разумная стратегия?",
    "options": [
      "exponential backoff + jitter (+ Retry-After)",
      "сразу 100 ретраев",
      "сменить на POST",
      "игнор"
    ],
    "answer": 0,
    "explain": "Не усиливай шторм. Подходит ответ «exponential backoff + jitter (+ Retry-After)».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s193"
  },
  {
    "topic": "testing",
    "q": "Что такое synthetic canaries?",
    "options": [
      "прод-проверки синтетикой",
      "unit",
      "mutation",
      "chaos only"
    ],
    "answer": 0,
    "explain": "Ранний сигнал. Подходит ответ «прод-проверки синтетикой». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s194"
  },
  {
    "topic": "security",
    "q": "Что такое SSRF?",
    "options": [
      "сервер ходит по URL от пользователя во внутреннюю сеть",
      "XSS в браузере",
      "SQL inject",
      "CSRF form"
    ],
    "answer": 0,
    "explain": "Валидируй/проксируй исходящие запросы. Подходит ответ «сервер ходит по URL от пользователя во внутреннюю сеть».",
    "kind": "single",
    "group": "Безопасность",
    "id": "s195"
  },
  {
    "topic": "байткод",
    "q": "Выбери верный вариант: Опкод LOAD_FAST связан с?",
    "options": [
      "локальная переменная — быстрый доступ",
      "сетевым I/O",
      "только GC",
      "импортом pip"
    ],
    "answer": 0,
    "explain": "LOAD_FAST: локальная переменная — быстрый доступ. Подходит ответ «локальная переменная — быстрый доступ».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s196"
  },
  {
    "topic": "typing",
    "q": "Что вернёт PEP 695 (3.12) type params?",
    "options": [
      "синтаксис class A[T]: / def f[T]",
      "только TypeVar() runtime old",
      "убирает checkers",
      "GIL"
    ],
    "answer": 0,
    "explain": "Новый синтаксис generics. Подходит ответ «синтаксис class A[T]: / def f[T]». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "s197"
  },
  {
    "topic": "distributed",
    "q": "Выбери верный вариант: Семантика доставки at-most-once?",
    "options": [
      "можно потерять; без дублей",
      "всегда бесплатна в любой очереди",
      "только UDP",
      "гарантируется GIL"
    ],
    "answer": 0,
    "explain": "Можно потерять; без дублей. Подходит ответ «можно потерять; без дублей». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s198"
  },
  {
    "topic": "C-API",
    "q": "Что такое capsule name в C-API CPython?",
    "options": [
      "тип-безопасная передача указателей",
      "JSON",
      "pickle",
      "typing Capsule"
    ],
    "answer": 0,
    "explain": "PyCapsule. Подходит ответ «тип-безопасная передача указателей». Это про внутренности CPython и написание C-расширений, а не про обычный прикладной код.",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s199"
  },
  {
    "topic": "observability",
    "q": "Что такое trace sampling?",
    "options": [
      "доля трейсов для стоимости",
      "все или ничего always better",
      "только errors без head sampling strategies",
      "logs"
    ],
    "answer": 0,
    "explain": "Head/tail sampling. Подходит ответ «доля трейсов для стоимости». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s200"
  },
  {
    "topic": "exceptions",
    "q": "В чём разница: BaseException vs Exception?",
    "options": [
      "SystemExit/KeyboardInterrupt не от Exception",
      "нет разницы",
      "Exception выше",
      "BaseException deprecated"
    ],
    "answer": 0,
    "explain": "Не ловите BaseException широко. Подходит ответ «SystemExit/KeyboardInterrupt не от Exception».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "s201"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: Сложность dict.popitem()?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "Большая O: dict.popitem(). Подходит ответ «O(1)». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s202"
  },
  {
    "topic": "patterns",
    "q": "Выбери верный вариант: Circuit Breaker защищает от?",
    "options": [
      "каскадных сбоев при падении зависимости",
      "SQL injection",
      "XSS",
      "GIL contention"
    ],
    "answer": 0,
    "explain": "После порога ошибок — fast-fail без долбёжки. Подходит ответ «каскадных сбоев при падении зависимости».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s203"
  },
  {
    "topic": "GIL",
    "q": "Почему numpy.dot больших массивов масштабируется лучше чистого Python цикла в threads?",
    "options": [
      "много работы в C без GIL",
      "GIL отключён в numpy глобально навсегда",
      "threads = processes",
      "float быстрее int"
    ],
    "answer": 0,
    "explain": "Native sections. Подходит ответ «много работы в C без GIL». GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s204"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт asyncio.TaskGroup (3.11)?",
    "options": [
      "структурированное конкурентное выполнение задач",
      "замена threading",
      "удаляет loop",
      "GIL"
    ],
    "answer": 0,
    "explain": "Structured concurrency. Подходит ответ «структурированное конкурентное выполнение задач». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s205"
  },
  {
    "topic": "packaging",
    "q": "Зачем нужен abi3 / stable ABI?",
    "options": [
      "одно колесо на несколько версий CPython",
      "убрать GIL",
      "ускорить import",
      "заменить ctypes"
    ],
    "answer": 0,
    "explain": "Limited API. Подходит ответ «одно колесо на несколько версий CPython». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s206"
  },
  {
    "topic": "дескрипторы",
    "q": "Выбери верный вариант: Функции в классе становятся bound method через?",
    "options": [
      "__get__ дескриптора функции",
      "__call__ класса",
      "GIL",
      "import hook"
    ],
    "answer": 0,
    "explain": "Non-data descriptor. Подходит ответ «__get__ дескриптора функции». Дескрипторы управляют доступом к атрибутам через __get__, __set__ и __delete__.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s207"
  },
  {
    "topic": "api",
    "q": "Что такое проблема lost update при concurrent PUT?",
    "options": [
      "нужны ETag/version / if-match / транзакции",
      "только HTTPS",
      "больше CPU",
      "pickle"
    ],
    "answer": 0,
    "explain": "Оптимистичные блокировки. Подходит ответ «нужны ETag/version / if-match / транзакции».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s208"
  },
  {
    "topic": "testing",
    "q": "Выбери верный вариант: Property-based testing (Hypothesis) хорош для?",
    "options": [
      "поиска краевых случаев автоматически",
      "только happy path",
      "UI screenshot",
      "deploy"
    ],
    "answer": 0,
    "explain": "Генерация входов + shrinking минимального контрпримера. Подходит ответ «поиска краевых случаев автоматически».",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s209"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: Логировать сырой заголовок X-Forwarded-For?",
    "options": [
      "осторожно: секреты/PII — редактируй",
      "всегда полностью",
      "никогда никакие заголовки",
      "только в debug print"
    ],
    "answer": 0,
    "explain": "Redaction в логах. Подходит ответ «осторожно: секреты/PII — редактируй». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s210"
  },
  {
    "topic": "python",
    "q": "Выбери верный вариант: object.__hash__ по умолчанию основан на?",
    "options": [
      "id (идентичности)",
      "всех полях",
      "str(obj)",
      "random"
    ],
    "answer": 0,
    "explain": "Пока не переопределён eq без hash. Подходит ответ «id (идентичности)».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s211"
  },
  {
    "topic": "typing",
    "q": "Что такое TypeVar bound=... ограничивает?",
    "options": [
      "верхнюю границу допустимых типов",
      "только runtime cast",
      "скорость",
      "GIL"
    ],
    "answer": 0,
    "explain": "Дженерики с ограничением. Подходит ответ «верхнюю границу допустимых типов». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "s212"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: Повторять транзакцию до 5 раз при serialization failure?",
    "options": [
      "да, типичный паттерн retry",
      "никогда",
      "только DROP TABLE",
      "переключить на MyISAM"
    ],
    "answer": 0,
    "explain": "Код 40001 (serialization_failure) обычно обрабатывают повтором попытки. Подходит ответ «да, типичный паттерн retry».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s213"
  },
  {
    "topic": "subinterpreters",
    "q": "Что такое каналы между интерпретаторами в C-API CPython?",
    "options": [
      "ограниченный обмен",
      "shared objects freely any",
      "GIL one forever without isolation",
      "pickle only TCP"
    ],
    "answer": 0,
    "explain": "PEP 554+. Подходит ответ «ограниченный обмен».",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s214"
  },
  {
    "topic": "observability",
    "q": "В чём риск Сэмплирование трейсов 25%?",
    "options": [
      "можно пропустить редкие ошибки — нужен tail-based/error sampling",
      "полная картина всегда",
      "ломает метрики RED",
      "запрещено"
    ],
    "answer": 0,
    "explain": "Комбинируй head + tail sampling. Подходит ответ «можно пропустить редкие ошибки — нужен tail-based/error sampling».",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s215"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: n=1000: что важнее микрооптимизаций f-string?",
    "options": [
      "алгоритм/I/O/аллокации — профилируй",
      "всегда переписать на C",
      "отключить GC",
      "больше print"
    ],
    "answer": 0,
    "explain": "Сначала измерь bottleneck. Подходит ответ «алгоритм/I/O/аллокации — профилируй». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s216"
  },
  {
    "topic": "architecture",
    "q": "Выбери все верные про распределённые системы?",
    "options": [
      "идемпотентность consumer помогает при at-least-once доставке",
      "outbox pattern снижает потерю событий между БД и брокером",
      "exactly-once «бесплатно» даёт любой брокер сообщений",
      "circuit breaker защищает от каскадных сбоев зависимости"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explain": "Exactly-once end-to-end почти всегда иллюзия: нужна идемпотентность + дедуп + аккуратные транзакции/outbox. Верными здесь будут пункты: «идемпотентность consumer помогает при at-least-once доставке»; «outbox pattern снижает потерю событий между БД и брокером»; «circuit breaker защищает от каскадных сбоев зависимости».",
    "kind": "multi",
    "tags": [
      "distributed",
      "architecture"
    ],
    "difficulty": "senior",
    "group": "Архитектура и дизайн",
    "id": "s217"
  },
  {
    "topic": "multiprocessing",
    "q": "В чём разница: spawn vs fork start method?",
    "options": [
      "разный способ старта процесса и совместимость",
      "только имена",
      "GIL modes",
      "async"
    ],
    "answer": 0,
    "explain": "MacOS/Windows default spawn. Подходит ответ «разный способ старта процесса и совместимость».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s218"
  },
  {
    "topic": "asyncio",
    "q": "Что даёт TaskGroup (3.11+)?",
    "options": [
      "structured concurrency: ошибки/отмена детей согласованы",
      "только gather без ошибок",
      "thread pool",
      "GIL off"
    ],
    "answer": 0,
    "explain": "Предпочтительнее «голого» gather в новом коде. Подходит ответ «structured concurrency: ошибки/отмена детей согласованы».",
    "kind": "single",
    "group": "Asyncio",
    "id": "s219"
  },
  {
    "topic": "packaging",
    "q": "Зачем нужен Классификатор Programming Language :: Python :: 3.12?",
    "options": [
      "заявить поддержку версии для PyPI/инструментов",
      "ускорить интерпретатор",
      "включить GIL",
      "заменить mypy"
    ],
    "answer": 0,
    "explain": "Метаданные дистрибутива. Подходит ответ «заявить поддержку версии для PyPI/инструментов». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s220"
  },
  {
    "topic": "метаклассы",
    "q": "Выбери верный вариант: type(name, bases, dict) эквивалентен?",
    "options": [
      "динамическому созданию класса",
      "только eval",
      "dataclass",
      "Enum"
    ],
    "answer": 0,
    "explain": "Конструктор классов. Подходит ответ «динамическому созданию класса». Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s221"
  },
  {
    "topic": "rpc",
    "q": "В чём разница: grpc status codes vs HTTP?",
    "options": [
      "свой набор, маппят на HTTP в gateway",
      "идентичны 1:1 always",
      "только OK/ERR",
      "SMTP"
    ],
    "answer": 0,
    "explain": "Трансляция. Подходит ответ «свой набор, маппят на HTTP в gateway».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s222"
  },
  {
    "topic": "testing",
    "q": "Что вернёт property based + examples?",
    "options": [
      "регрессии на найденных кейсах",
      "только random forever without save",
      "mocks",
      "snapshots only"
    ],
    "answer": 0,
    "explain": "Hypothesis database. Подходит ответ «регрессии на найденных кейсах». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s223"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: RCE (web) кратко?",
    "options": [
      "удалённое исполнение кода",
      "ускорение Python",
      "тип в typing",
      "только DevOps"
    ],
    "answer": 0,
    "explain": "Удалённое исполнение кода. Подходит ответ «удалённое исполнение кода». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s224"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: Для int 2: надёжно ли `a is b` при равных значениях?",
    "options": [
      "может быть True из‑за интернирования",
      "всегда True по языку",
      "всегда False по языку",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Часто один и тот же объект (intern маленьких int). Подходит ответ «может быть True из‑за интернирования».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s225"
  },
  {
    "topic": "typing",
    "q": "Зачем нужен @overload?",
    "options": [
      "описать разные сигнатуры для чекера",
      "ускорить вызовы",
      "создать runtime branches auto",
      "убрать kwargs"
    ],
    "answer": 0,
    "explain": "Реализация одна — stubs/overloads для типов. Подходит ответ «описать разные сигнатуры для чекера». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "s226"
  },
  {
    "topic": "distributed",
    "q": "Что такое «load shedding»?",
    "options": [
      "отбрасывать лишнее под перегрузкой",
      "только про GIL",
      "только SQL index",
      "HTTP 200 always"
    ],
    "answer": 0,
    "explain": "Отбрасывать лишнее под перегрузкой. Подходит ответ «отбрасывать лишнее под перегрузкой». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s227"
  },
  {
    "topic": "C-API",
    "q": "Зачем нужен Py_LIMITED_API / stable ABI?",
    "options": [
      "бинарная совместимость расширений across versions",
      "убрать GIL",
      "faster pure python",
      "замена ctypes"
    ],
    "answer": 0,
    "explain": "Меньше пересборок под каждый minor. Подходит ответ «бинарная совместимость расширений across versions».",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s228"
  },
  {
    "topic": "observability",
    "q": "Выбери верный вариант: USE: буква S?",
    "options": [
      "Saturation",
      "UUID",
      "SQL",
      "ETA"
    ],
    "answer": 0,
    "explain": "USE, а затем Saturation. Подходит ответ «Saturation». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s229"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: n=10000: что важнее микрооптимизаций f-string?",
    "options": [
      "алгоритм/I/O/аллокации — профилируй",
      "всегда переписать на C",
      "отключить GC",
      "больше print"
    ],
    "answer": 0,
    "explain": "Сначала измерь bottleneck. Подходит ответ «алгоритм/I/O/аллокации — профилируй». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s230"
  },
  {
    "topic": "LoD",
    "q": "Выбери верный вариант: Law of Demeter («не разговаривай с чужими»)?",
    "options": [
      "обращаться только к своим объектам и ближайшим соседям",
      "запрет всех методов",
      "только global",
      "только staticmethod"
    ],
    "answer": 0,
    "explain": "Избегай цепочек a.get_b().get_c().do() — хрупко и связно. Подходит ответ «обращаться только к своим объектам и ближайшим соседям».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s231"
  },
  {
    "topic": "GIL",
    "q": "Что даёт Py_BEGIN_ALLOW_THREADS / Py_END_ALLOW_THREADS в C-расширении?",
    "options": [
      "временно отпускает GIL на участке без обращения к Python API",
      "включает JIT",
      "удаляет refcount",
      "делает dict atomic навсегда"
    ],
    "answer": 0,
    "explain": "Пока GIL отпущен, нельзя трогать Python-объекты: гонка с другими потоками/GC. Паттерн: подготовка аргументов под GIL, а затем ALLOW_THREADS, и далее чистый C/Fortran/IO, а затем END, и далее снова Python API. Ошибка здесь — use-after-free и порча интерпретатора.",
    "kind": "single",
    "tags": [
      "gil",
      "c-api"
    ],
    "difficulty": "senior",
    "group": "Потоки, процессы, GIL",
    "id": "s232"
  },
  {
    "topic": "asyncio",
    "q": "Что такое buffered protocol?",
    "options": [
      "управление буферами протокола",
      "только streams high-level",
      "UDP only",
      "HTTP router"
    ],
    "answer": 0,
    "explain": "Низкий уровень asyncio. Подходит ответ «управление буферами протокола». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s233"
  },
  {
    "topic": "packaging",
    "q": "Что вернёт reproducible sdist + wheel attestations?",
    "options": [
      "цепочка доверия артефактов",
      "MD5 enough",
      "trust PyPI without pins always",
      "git tag enough"
    ],
    "answer": 0,
    "explain": "Supply chain 2020s. Подходит ответ «цепочка доверия артефактов». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s234"
  },
  {
    "topic": "метаклассы",
    "q": "Что вернёт type.__call__ путь instance create?",
    "options": [
      "__call__ типа, а затем __new__/__init__ instance",
      "только __init__",
      "только __new__",
      "module exec"
    ],
    "answer": 0,
    "explain": "Механика creation. Подходит ответ «__call__ типа, а затем __new__/__init__ instance». Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s235"
  },
  {
    "topic": "api",
    "q": "Выбери верный вариант: Клиент получил 503 — разумная стратегия?",
    "options": [
      "exponential backoff + jitter (+ Retry-After)",
      "сразу 100 ретраев",
      "сменить на POST",
      "игнор"
    ],
    "answer": 0,
    "explain": "Не усиливай шторм. Подходит ответ «exponential backoff + jitter (+ Retry-After)».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s236"
  },
  {
    "topic": "testing",
    "q": "Выбери верный вариант: Flaky test чаще всего из-за?",
    "options": [
      "гонок, времени, внешних зависимостей",
      "assert True",
      "pytest версии",
      "PEP 8"
    ],
    "answer": 0,
    "explain": "Фикс: детерминизм, fake clock, изоляция I/O. Подходит ответ «гонок, времени, внешних зависимостей». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s237"
  },
  {
    "topic": "security",
    "q": "Что вернёт SQL f-string?",
    "options": [
      "инъекции / path traversal / open redirect — валидируй и параметризуй",
      "ускоряет код",
      "требуется PEP 8",
      "безопасно в FastAPI всегда"
    ],
    "answer": 0,
    "explain": "Классика AppSec. Подходит ответ «инъекции / path traversal / open redirect — валидируй и параметризуй».",
    "kind": "single",
    "group": "Безопасность",
    "id": "s238"
  },
  {
    "topic": "память",
    "q": "Что такое allocator hooks PYTHONMALLOC?",
    "options": [
      "отладка аллокаций",
      "faster always",
      "disable GC",
      "typing"
    ],
    "answer": 0,
    "explain": "Debug hooks. Подходит ответ «отладка аллокаций». Память в CPython устроена через подсчёт ссылок, циклический GC, buffer protocol и иногда __slots__.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s239"
  },
  {
    "topic": "typing",
    "q": "Выбери верный вариант: ParamSpec / Concatenate нужны для?",
    "options": [
      "типизации декораторов, сохраняющих сигнатуру",
      "только dataclasses",
      "SQL",
      "GIL"
    ],
    "answer": 0,
    "explain": "PEP 612. Подходит ответ «типизации декораторов, сохраняющих сигнатуру». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "s240"
  },
  {
    "topic": "distributed",
    "q": "Что такое read repair?",
    "options": [
      "починка при чтении реплик",
      "только compaction",
      "2PC",
      "TTL"
    ],
    "answer": 0,
    "explain": "AP системы. Подходит ответ «починка при чтении реплик». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s241"
  },
  {
    "topic": "C-API",
    "q": "Какова цель HPy проект?",
    "options": [
      "более стабильный/портируемый API расширений",
      "замена asyncio",
      "GIL remove only",
      "typing"
    ],
    "answer": 0,
    "explain": "Альтернатива историческому C-API. Подходит ответ «более стабильный/портируемый API расширений». Это про внутренности CPython и написание C-расширений, а не про обычный прикладной код.",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s242"
  },
  {
    "topic": "observability",
    "q": "В чём риск cardinality взрыв в метках —?",
    "options": [
      "миллионы time series, а затем дорого/медленно",
      "только prettier graphs",
      "безопасность",
      "GIL"
    ],
    "answer": 0,
    "explain": "Не клади user_id в label Prometheus без нужды. Подходит ответ «миллионы time series, а затем дорого/медленно».",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s243"
  },
  {
    "topic": "import",
    "q": "Что выведет код?",
    "options": [
      "частично инициализированный модуль / ImportError",
      "GIL dead",
      "SyntaxError",
      "OK always"
    ],
    "answer": 0,
    "explain": "Локальный import / рефакторинг. Подходит ответ «частично инициализированный модуль / ImportError». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "# a imports b, b imports a",
    "group": "Stdlib и производительность",
    "id": "s244"
  },
  {
    "topic": "architecture",
    "q": "Выбери верный вариант: Thundering herd при истечении TTL кэша лечат?",
    "options": [
      "jitter, single-flight, stale-while-revalidate",
      "больше sleep",
      "отключить кэш",
      "GIL lock"
    ],
    "answer": 0,
    "explain": "Много клиентов одновременно бьют в origin. Подходит ответ «jitter, single-flight, stale-while-revalidate».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s245"
  },
  {
    "topic": "GIL",
    "q": "Что такое GIL в CPython?",
    "options": [
      "mutex на выполнение байткода в одном процессе",
      "запрет потоков ОС",
      "замена multiprocessing",
      "только в PyPy"
    ],
    "answer": 0,
    "explain": "Один поток выполняет Python-байткод; I/O и C-ext могут отпускать GIL. Подходит ответ «mutex на выполнение байткода в одном процессе».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s246"
  },
  {
    "topic": "async",
    "q": "Что такое cancellation в asyncio?",
    "options": [
      "CancelledError в await-точке; finally должен убирать ресурсы",
      "мгновенный kill OS thread",
      "игнор finally",
      "GIL reset"
    ],
    "answer": 0,
    "explain": "Пиши cancellation-safe cleanup. Подходит ответ «CancelledError в await-точке; finally должен убирать ресурсы».",
    "kind": "single",
    "group": "Asyncio",
    "id": "s247"
  },
  {
    "topic": "packaging",
    "q": "Что такое editable install PEP 660?",
    "options": [
      "современный editable",
      "только egg links forever",
      "conda only",
      "poetry exclusive"
    ],
    "answer": 0,
    "explain": "Pyproject editable. Подходит ответ «современный editable». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s248"
  },
  {
    "topic": "метаклассы",
    "q": "В чём разница: __init_subclass__ vs metaclass?",
    "options": [
      "проще для хуков подклассов",
      "заменяет type полностью всегда",
      "только Py2",
      "GIL"
    ],
    "answer": 0,
    "explain": "PEP 487 предпочтение. Подходит ответ «проще для хуков подклассов». Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s249"
  },
  {
    "topic": "api",
    "q": "Зачем нужен Версия API `v1` в URL/заголовке?",
    "options": [
      "эволюция контракта без ломания клиентов",
      "ускорение CPU",
      "замена auth",
      "только документация"
    ],
    "answer": 0,
    "explain": "Совместимость. Подходит ответ «эволюция контракта без ломания клиентов».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s250"
  },
  {
    "topic": "testing",
    "q": "Что проверяет Mutation testing?",
    "options": [
      "качество тестов убийством мутантов кода",
      "скорость CI",
      "типы",
      "GIL"
    ],
    "answer": 0,
    "explain": "Сила тест-сьюта. Подходит ответ «качество тестов убийством мутантов кода». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s251"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: open redirect (API) кратко?",
    "options": [
      "редирект на вредоносный URL",
      "ускорение Python",
      "тип в typing",
      "только DevOps"
    ],
    "answer": 0,
    "explain": "Редирект на вредоносный URL. Подходит ответ «редирект на вредоносный URL». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s252"
  },
  {
    "topic": "байткод",
    "q": "Что показывает dis.dis?",
    "options": [
      "байткод функции",
      "машинный asm x86 всегда",
      "IR LLVM",
      "AST только"
    ],
    "answer": 0,
    "explain": "Дизассемблер bytecode. Подходит ответ «байткод функции».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s253"
  },
  {
    "topic": "typing",
    "q": "Что такое typing.overload нужен для?",
    "options": [
      "нескольких сигнатур для чекера",
      "runtime dispatch обязательно",
      "ускорения",
      "decorators"
    ],
    "answer": 0,
    "explain": "Только для type checkers. Подходит ответ «нескольких сигнатур для чекера». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "s254"
  },
  {
    "topic": "distributed",
    "q": "В чём риск heartbeat timeout ~500ms слишком маленький?",
    "options": [
      "ложные failover при GC/сети",
      "только быстрее recovery без минусов",
      "не влияет",
      "ломает TLS"
    ],
    "answer": 0,
    "explain": "Баланс sensitivity vs stability. Подходит ответ «ложные failover при GC/сети». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s255"
  },
  {
    "topic": "ctypes",
    "q": "В чём разница: CDLL vs WinDLL?",
    "options": [
      "calling convention различия",
      "Linux only both",
      "одно на всех ОС",
      "PyPy only"
    ],
    "answer": 0,
    "explain": "Windows stdcall nuances. Подходит ответ «calling convention различия».",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s256"
  },
  {
    "topic": "observability",
    "q": "Выбери верный вариант: RED: буква D?",
    "options": [
      "Duration",
      "RAM",
      "EOF",
      "DNS"
    ],
    "answer": 0,
    "explain": "RED, а затем Duration. Подходит ответ «Duration». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s257"
  },
  {
    "topic": "import",
    "q": "Что такое cached .pyc invalidation?",
    "options": [
      "hash/timestamp политики",
      "никогда",
      "только size",
      "git"
    ],
    "answer": 0,
    "explain": "PEP 552 и др. Подходит ответ «hash/timestamp политики».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s258"
  },
  {
    "topic": "architecture",
    "q": "Что вернёт outbox + polling/CDC?",
    "options": [
      "надёжная доставка событий",
      "только RPC sync",
      "GUI",
      "cron без БД"
    ],
    "answer": 0,
    "explain": "Transactional messaging. Подходит ответ «надёжная доставка событий». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s259"
  },
  {
    "topic": "concurrency",
    "q": "Что даёт concurrent.futures?",
    "options": [
      "Thread/ProcessPoolExecutor",
      "только asyncio",
      "GIL kill",
      "GPU"
    ],
    "answer": 0,
    "explain": "Высокоуровневые пулы. Подходит ответ «Thread/ProcessPoolExecutor». Конкурентность бывает на потоках, процессах и async — у каждого свои ограничения и цена синхронизации.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s260"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт Server.close + wait_closed?",
    "options": [
      "корректное завершение слушателя",
      "достаточно close без wait",
      "kill process",
      "SIGINT"
    ],
    "answer": 0,
    "explain": "Graceful. Подходит ответ «корректное завершение слушателя». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s261"
  },
  {
    "topic": "ci",
    "q": "Выбери верный вариант: Матрица версий Python в CI нужна чтобы?",
    "options": [
      "ловить несовместимости 3.x",
      "ускорить один job",
      "заменить mypy",
      "убрать зависимости"
    ],
    "answer": 0,
    "explain": "3.10/3.11/3.12… Подходит ответ «ловить несовместимости 3.x».",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s262"
  },
  {
    "topic": "lazy",
    "q": "Выбери верный вариант: import внутри функции плюсы?",
    "options": [
      "меньше циклов импорта / ленивый старт",
      "всегда быстрее",
      "обязателен pep8",
      "ломает typing всегда"
    ],
    "answer": 0,
    "explain": "Tradeoff читаемости. Подходит ответ «меньше циклов импорта / ленивый старт».",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s263"
  },
  {
    "topic": "api",
    "q": "Что такое idempotent create with client keys?",
    "options": [
      "UPSERT/по ключу запроса",
      "random UUID server only without store",
      "POST always once network perfect",
      "GET create"
    ],
    "answer": 0,
    "explain": "Клиентские ключи. Подходит ответ «UPSERT/по ключу запроса».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s264"
  },
  {
    "topic": "testing",
    "q": "Выбери верный вариант: Contract testing (Pact) фиксирует?",
    "options": [
      "ожидания consumer/provider API без полного e2e",
      "только unit mock",
      "UI pixels",
      "GIL"
    ],
    "answer": 0,
    "explain": "Версионируемые контракты между сервисами. Подходит ответ «ожидания consumer/provider API без полного e2e».",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s265"
  },
  {
    "topic": "security",
    "q": "В чём риск subprocess с shell=True?",
    "options": [
      "injection через строку команды",
      "только медленнее",
      "GIL",
      "нет риска"
    ],
    "answer": 0,
    "explain": "Передавайте list args. Подходит ответ «injection через строку команды». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s266"
  },
  {
    "topic": "память",
    "q": "Выбери верный вариант: цикл ссылок A→B→A собирает?",
    "options": [
      "generational GC (detect cycles)",
      "только refcount",
      "never",
      "OS OOM killer only"
    ],
    "answer": 0,
    "explain": "Refcount сам цикл не разорвёт. Подходит ответ «generational GC (detect cycles)». Память в CPython устроена через подсчёт ссылок, циклический GC, buffer protocol и иногда __slots__.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s267"
  },
  {
    "topic": "typing",
    "q": "Для чего используется reveal_type()?",
    "options": [
      "в type checkers для отладки типов",
      "runtime print type всегда",
      "dis",
      "gc"
    ],
    "answer": 0,
    "explain": "Mypy/pyright helper. Подходит ответ «в type checkers для отладки типов». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "s268"
  },
  {
    "topic": "distributed",
    "q": "Выбери верный вариант: Кворум в Raft/Consul-подобном кластере из 3 узлов?",
    "options": [
      "большинство: 2",
      "3",
      "1",
      "2"
    ],
    "answer": 0,
    "explain": "Большинство для выбора лидера/коммита. Подходит ответ «большинство: 2». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s269"
  },
  {
    "topic": "C-API",
    "q": "В чём разница: borrowed vs new reference?",
    "options": [
      "критично для корректности",
      "синонимы",
      "только PyPy",
      "async"
    ],
    "answer": 0,
    "explain": "Документация ownership. Подходит ответ «критично для корректности». Это про внутренности CPython и написание C-расширений, а не про обычный прикладной код.",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s270"
  },
  {
    "topic": "observability",
    "q": "Выбери верный вариант: Метка Prometheus `request_id` на высококардинальном трафике?",
    "options": [
      "обычно ок как low-cardinality/trace id не в metric labels",
      "всегда обязательно",
      "ускоряет PromQL",
      "заменяет логи"
    ],
    "answer": 0,
    "explain": "Cardinality — главный враг метрик. Подходит ответ «обычно ок как low-cardinality/trace id не в metric labels».",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s271"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: Инлайнинг мелких функций в чистом Python?",
    "options": [
      "ограничен интерпретатором; профилируй",
      "как в C всегда",
      "запрещён",
      "делает GIL"
    ],
    "answer": 0,
    "explain": "Другая модель затрат. Подходит ответ «ограничен интерпретатором; профилируй». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s272"
  },
  {
    "topic": "SOLID",
    "q": "Что означает OCP не?",
    "options": [
      "что код никогда не меняется",
      "расширение через новые типы",
      "полиморфизм",
      "абстракции"
    ],
    "answer": 0,
    "explain": "Закрыт для модификации — не «заморожен навсегда», а минимум правок ядра. Подходит ответ «что код никогда не меняется».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s273"
  },
  {
    "topic": "GIL",
    "q": "Какова цель free-threading (PEP 703)?",
    "options": [
      "опционально убрать GIL",
      "ускорить single-thread 10x всегда",
      "заменить asyncio",
      "удалить refcount"
    ],
    "answer": 0,
    "explain": "Эксперименты в 3.13+. Подходит ответ «опционально убрать GIL». GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s274"
  },
  {
    "topic": "asyncio",
    "q": "Что такое anyio/trio знамениты?",
    "options": [
      "structured concurrency идеями",
      "удалением async",
      "GIL-free CPython",
      "ORM"
    ],
    "answer": 0,
    "explain": "Nurseries/task groups. Подходит ответ «structured concurrency идеями». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s275"
  },
  {
    "topic": "packaging",
    "q": "Зачем нужен Классификатор Programming Language :: Python :: 3.14?",
    "options": [
      "заявить поддержку версии для PyPI/инструментов",
      "ускорить интерпретатор",
      "включить GIL",
      "заменить mypy"
    ],
    "answer": 0,
    "explain": "Метаданные дистрибутива. Подходит ответ «заявить поддержку версии для PyPI/инструментов». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s276"
  },
  {
    "topic": "lazy",
    "q": "Выбери верный вариант: module __getattr__ кэшируй если?",
    "options": [
      "дорогой импорт/вычисление",
      "всегда без кэша быстрее",
      "запрещено кэшировать",
      "only typing"
    ],
    "answer": 0,
    "explain": "Повторные обращения. Подходит ответ «дорогой импорт/вычисление».",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s277"
  },
  {
    "topic": "api",
    "q": "В чём разница: long polling vs websocket?",
    "options": [
      "разные модели push",
      "синонимы",
      "только HTTP/2 push mandatory",
      "UDP"
    ],
    "answer": 0,
    "explain": "Выбор транспорта. Подходит ответ «разные модели push».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s278"
  },
  {
    "topic": "testing",
    "q": "Что такое characterization tests?",
    "options": [
      "фиксируют текущее поведение легаси",
      "TDD greenfield only",
      "mutation",
      "fuzz"
    ],
    "answer": 0,
    "explain": "Перед рефакторингом. Подходит ответ «фиксируют текущее поведение легаси». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s279"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: Антипаттерн: open(user_path)?",
    "options": [
      "инъекции / path traversal / open redirect — валидируй и параметризуй",
      "ускоряет код",
      "требуется PEP 8",
      "безопасно в FastAPI всегда"
    ],
    "answer": 0,
    "explain": "Классика AppSec. Подходит ответ «инъекции / path traversal / open redirect — валидируй и параметризуй».",
    "kind": "single",
    "group": "Безопасность",
    "id": "s280"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: Флаг интерпретатора -X dev?",
    "options": [
      "режим разработки с доп. проверками",
      "включает JIT всегда",
      "отключает GC навсегда",
      "только Windows"
    ],
    "answer": 0,
    "explain": "Режим разработки с доп. Проверками. Подходит ответ «режим разработки с доп. проверками». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s281"
  },
  {
    "topic": "typing",
    "q": "Что такое cast(T, x) в typing?",
    "options": [
      "говорит чекеру тип, runtime no-op",
      "конвертирует значение",
      "валидирует",
      "бросает"
    ],
    "answer": 0,
    "explain": "Только для статического анализа. Подходит ответ «говорит чекеру тип, runtime no-op». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "s282"
  },
  {
    "topic": "distributed",
    "q": "Что такое «timeout budget»?",
    "options": [
      "общий дедлайн на цепочку вызовов",
      "только про GIL",
      "только SQL index",
      "HTTP 200 always"
    ],
    "answer": 0,
    "explain": "Общий дедлайн на цепочку вызовов. Подходит ответ «общий дедлайн на цепочку вызовов». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s283"
  },
  {
    "topic": "C-API",
    "q": "Что вернёт Py_INCREF/DECREF?",
    "options": [
      "ручной refcount",
      "GIL tokens",
      "hash",
      "GC generation"
    ],
    "answer": 0,
    "explain": "Владение ссылками. Подходит ответ «ручной refcount». Это про внутренности CPython и написание C-расширений, а не про обычный прикладной код.",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s284"
  },
  {
    "topic": "observability",
    "q": "Что такое USE method?",
    "options": [
      "Utilization Saturation Errors",
      "для запросов only RED",
      "logs",
      "traces only"
    ],
    "answer": 0,
    "explain": "Ресурсы. Подходит ответ «Utilization Saturation Errors». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s285"
  },
  {
    "topic": "performance",
    "q": "Что вернёт PGO / Bolt для CPython?",
    "options": [
      "профильная оптимизация бинарника",
      "pip optimize",
      "mypy",
      "ruff"
    ],
    "answer": 0,
    "explain": "Сборки CPython. Подходит ответ «профильная оптимизация бинарника». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s286"
  },
  {
    "topic": "architecture",
    "q": "Выбери верный вариант: ports & adapters тестируют?",
    "options": [
      "домен без инфры",
      "только UI",
      "только DB",
      "GIL"
    ],
    "answer": 0,
    "explain": "Гексагон. Подходит ответ «домен без инфры». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s287"
  },
  {
    "topic": "concurrency",
    "q": "Когда ProcessPool лучше ThreadPool?",
    "options": [
      "CPU-bound в CPython",
      "чистый network wait",
      "всегда",
      "никогда"
    ],
    "answer": 0,
    "explain": "Обход GIL ценой IPC. Подходит ответ «CPU-bound в CPython». Конкурентность бывает на потоках, процессах и async — у каждого свои ограничения и цена синхронизации.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s288"
  },
  {
    "topic": "async",
    "q": "Что такое backpressure в streams?",
    "options": [
      "пауза производителя",
      "безлимитный buffer ideal",
      "только TCP window ignore app",
      "GIL throttle"
    ],
    "answer": 0,
    "explain": "Не копить. Подходит ответ «пауза производителя». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s289"
  },
  {
    "topic": "packaging",
    "q": "Зачем нужен Классификатор Programming Language :: Python :: 3.11?",
    "options": [
      "заявить поддержку версии для PyPI/инструментов",
      "ускорить интерпретатор",
      "включить GIL",
      "заменить mypy"
    ],
    "answer": 0,
    "explain": "Метаданные дистрибутива. Подходит ответ «заявить поддержку версии для PyPI/инструментов». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s290"
  },
  {
    "topic": "метаклассы",
    "q": "Что такое __set_name__ у дескриптора?",
    "options": [
      "узнаёт имя атрибута в классе-владельце",
      "ставит __name__ функции",
      "GIL name",
      "pickle name"
    ],
    "answer": 0,
    "explain": "PEP 487. Подходит ответ «узнаёт имя атрибута в классе-владельце». Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s291"
  },
  {
    "topic": "api",
    "q": "Что такое offset-пагинация page_size=50 минус?",
    "options": [
      "«прыжки» при вставках; глубокий offset дорог",
      "нельзя реализовать в SQL",
      "всегда лучше cursor",
      "запрещена REST"
    ],
    "answer": 0,
    "explain": "Для лент чаще cursor. Подходит ответ ««прыжки» при вставках; глубокий offset дорог».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s292"
  },
  {
    "topic": "testing",
    "q": "Выбери верный вариант: Flaky test чаще лечится?",
    "options": [
      "убрать time/race/order dependency",
      "увеличить sleep 10s навсегда",
      "отключить CI",
      "random.seed каждый раз иначе"
    ],
    "answer": 0,
    "explain": "Детерминизм. Подходит ответ «убрать time/race/order dependency». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s293"
  },
  {
    "topic": "security",
    "q": "В чём риск pickle.loads из недоверенного источника?",
    "options": [
      "RCE-риск — нельзя",
      "безопасно как json",
      "только DoS",
      "ok с HTTPS"
    ],
    "answer": 0,
    "explain": "Pickle выполняет код при десериализации. Подходит ответ «RCE-риск — нельзя». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s294"
  },
  {
    "topic": "байткод",
    "q": "Что такое MAKE_FUNCTION использует?",
    "options": [
      "code object (+defaults/annotations/… )",
      "только str source",
      "AST",
      "GIL"
    ],
    "answer": 0,
    "explain": "Создание функции. Подходит ответ «code object (+defaults/annotations/… )».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s295"
  },
  {
    "topic": "typing",
    "q": "Что такое dataclass_transform для Pydantic/attrs?",
    "options": [
      "чтобы checker понимал поля",
      "runtime validation замена",
      "SQL",
      "async"
    ],
    "answer": 0,
    "explain": "PEP 681. Подходит ответ «чтобы checker понимал поля». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "s296"
  },
  {
    "topic": "db",
    "q": "Что такое advisory locks?",
    "options": [
      "лок приложения в PG",
      "row lock always same",
      "file lock OS only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Координация без row. Подходит ответ «лок приложения в PG». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s297"
  },
  {
    "topic": "C-API",
    "q": "Что вернёт PyUnstable_* APIs?",
    "options": [
      "могут меняться",
      "stable abi",
      "limited api same",
      "typing"
    ],
    "answer": 0,
    "explain": "Осторожно в расширениях. Подходит ответ «могут меняться». Это про внутренности CPython и написание C-расширений, а не про обычный прикладной код.",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s298"
  },
  {
    "topic": "observability",
    "q": "В чём риск Сэмплирование трейсов 5%?",
    "options": [
      "можно пропустить редкие ошибки — нужен tail-based/error sampling",
      "полная картина всегда",
      "ломает метрики RED",
      "запрещено"
    ],
    "answer": 0,
    "explain": "Комбинируй head + tail sampling. Подходит ответ «можно пропустить редкие ошибки — нужен tail-based/error sampling».",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s299"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: Сложность str += в цикле n раз?",
    "options": [
      "O(n²) типично",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 0,
    "explain": "Большая O для str += в цикле n раз. Подходит ответ «O(n²) типично». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s300"
  },
  {
    "topic": "design",
    "q": "Выбери верный вариант: Идемпотентность API важна для?",
    "options": [
      "безопасных повторов запросов",
      "GIL",
      "list.sort",
      "print"
    ],
    "answer": 0,
    "explain": "Повтор не меняет эффект. Подходит ответ «безопасных повторов запросов».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s301"
  },
  {
    "topic": "signals",
    "q": "Выбери верный вариант: обработчик сигнала в CPython выполняется?",
    "options": [
      "между байткод-инструкциями основного потока",
      "мгновенно в любом потоке",
      "только в C",
      "в GC"
    ],
    "answer": 0,
    "explain": "Ограничения на то, что безопасно делать в handler. Подходит ответ «между байткод-инструкциями основного потока».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s302"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт Happy Eyeballs / dual stack?",
    "options": [
      "связность IPv6/IPv4",
      "GIL",
      "HTTP/3 only",
      "DNSSEC"
    ],
    "answer": 0,
    "explain": "Asyncio детали соединений. Подходит ответ «связность IPv6/IPv4». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s303"
  },
  {
    "topic": "packaging",
    "q": "Что вернёт pyproject.toml [project] — стандарт?",
    "options": [
      "метаданных/сборки (PEP 621 и др.)",
      "только poetry proprietary",
      "замена requirements forever without lock",
      "CPython ini"
    ],
    "answer": 0,
    "explain": "Единая точка конфигурации пакета. Подходит ответ «метаданных/сборки (PEP 621 и др.)». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s304"
  },
  {
    "topic": "дескрипторы",
    "q": "Что такое __delete__?",
    "options": [
      "del obj.attr",
      "GC",
      "pop dict only",
      "weakref"
    ],
    "answer": 0,
    "explain": "Data descriptor. Подходит ответ «del obj.attr». Дескрипторы управляют доступом к атрибутам через __get__, __set__ и __delete__.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s305"
  },
  {
    "topic": "api",
    "q": "Что такое webhook security?",
    "options": [
      "подписи/секреты/ретраи",
      "открытый POST ok",
      "только IP allow without sig enough always",
      "GET idempotent body"
    ],
    "answer": 0,
    "explain": "Проверка подлинности. Подходит ответ «подписи/секреты/ретраи».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s306"
  },
  {
    "topic": "testing",
    "q": "Что вернёт contract test consumer-driven?",
    "options": [
      "потребитель задаёт ожидания API",
      "провайдер только OpenAPI без тестов",
      "UI screenshots",
      "load"
    ],
    "answer": 0,
    "explain": "Микросервисы. Подходит ответ «потребитель задаёт ожидания API». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s307"
  },
  {
    "topic": "security",
    "q": "В чём риск shell=True?",
    "options": [
      "injection",
      "только slow",
      "безопаснее list",
      "нет"
    ],
    "answer": 0,
    "explain": "Subprocess list args. Подходит ответ «injection». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "code": "import subprocess\n# subprocess.run(user_str, shell=True)",
    "group": "Безопасность",
    "id": "s308"
  },
  {
    "topic": "память",
    "q": "В чём разница: obmalloc vs system malloc порог?",
    "options": [
      "мелкие через pymalloc",
      "все через mmap",
      "все arena forever",
      "GC decides type"
    ],
    "answer": 0,
    "explain": "512/… исторические детали. Подходит ответ «мелкие через pymalloc». Память в CPython устроена через подсчёт ссылок, циклический GC, buffer protocol и иногда __slots__.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s309"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: READ UNCOMMITTED и аномалия «dirty read»?",
    "options": [
      "зависит от СУБД — сверяй документацию/стандарт",
      "всегда разрешена везде",
      "всегда запрещена везде",
      "только в SQLite"
    ],
    "answer": 0,
    "explain": "Не путай SQL-standard и реализацию. Подходит ответ «зависит от СУБД — сверяй документацию/стандарт».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s310"
  },
  {
    "topic": "C-API",
    "q": "Что такое limited API versioning в C-API CPython?",
    "options": [
      "PY_LIMITED_API",
      "нет версий",
      "semver pip only",
      "typing"
    ],
    "answer": 0,
    "explain": "Abi3. Подходит ответ «PY_LIMITED_API». Это про внутренности CPython и написание C-расширений, а не про обычный прикладной код.",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s311"
  },
  {
    "topic": "observability",
    "q": "Что такое OpenTelemetry context propagation?",
    "options": [
      "W3C traceparent и др.",
      "только cookies",
      "только IP",
      "GIL id"
    ],
    "answer": 0,
    "explain": "Сквозные трейсы. Подходит ответ «W3C traceparent и др.». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s312"
  },
  {
    "topic": "performance",
    "q": "Когда __slots__ почти не помогает?",
    "options": [
      "мало экземпляров / мало атрибутов",
      "миллионы объектов с 1 полем",
      "всегда помогает 100x",
      "только на str"
    ],
    "answer": 0,
    "explain": "Смотри профиль памяти. Подходит ответ «мало экземпляров / мало атрибутов». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s313"
  },
  {
    "topic": "design",
    "q": "Что вернёт dependency rule (clean arch)?",
    "options": [
      "зависимости к центру/домену",
      "к фреймворку inward ok",
      "DB в центре",
      "UI owns domain"
    ],
    "answer": 0,
    "explain": "Направление импортов. Подходит ответ «зависимости к центру/домену».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s314"
  },
  {
    "topic": "signals",
    "q": "Что верно про Обработка сигналов и потоки?",
    "options": [
      "сигналы в главном потоке",
      "в любом потоке одинаково",
      "только asyncio",
      "только multiprocessing"
    ],
    "answer": 0,
    "explain": "Ограничение CPython. Подходит ответ «сигналы в главном потоке».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s315"
  },
  {
    "topic": "async",
    "q": "Что такое cancellation points?",
    "options": [
      "await / yield точек",
      "любая строка Python",
      "только sleep",
      "OS preempt Python bytecode guaranteed cancel"
    ],
    "answer": 0,
    "explain": "Кооперативность. Подходит ответ «await / yield точек». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s316"
  },
  {
    "topic": "packaging",
    "q": "Что такое manylinux wheel гарантирует?",
    "options": [
      "ABI совместимость с широким Linux",
      "работу на Windows",
      "GIL-free",
      "мультиязычность"
    ],
    "answer": 0,
    "explain": "Аудит платформы. Подходит ответ «ABI совместимость с широким Linux». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s317"
  },
  {
    "topic": "метаклассы",
    "q": "Что такое динамический enum/метакласс фабрики?",
    "options": [
      "codegen на старте",
      "запрещено",
      "только AST rewrite disk",
      "eval only"
    ],
    "answer": 0,
    "explain": "Плагинные реестры. Подходит ответ «codegen на старте». Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s318"
  },
  {
    "topic": "API design",
    "q": "Выбери верный вариант: Хороший API в Python часто?",
    "options": [
      "явный, предсказуемый, с типами",
      "максимум магии __getattr__",
      "глобальные синглтоны везде",
      "молчаливые catch-all except"
    ],
    "answer": 0,
    "explain": "Явное лучше неявного (Zen). Подходит ответ «явный, предсказуемый, с типами».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s319"
  },
  {
    "topic": "testing",
    "q": "Что такое testpyramid?",
    "options": [
      "больше unit, меньше e2e",
      "только e2e",
      "только manual",
      "только mutation"
    ],
    "answer": 0,
    "explain": "Баланс стоимости. Подходит ответ «больше unit, меньше e2e». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s320"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: XSS (API) кратко?",
    "options": [
      "внедрение скрипта в браузер жертвы",
      "ускорение Python",
      "тип в typing",
      "только DevOps"
    ],
    "answer": 0,
    "explain": "Внедрение скрипта в браузер жертвы. Подходит ответ «внедрение скрипта в браузер жертвы». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s321"
  },
  {
    "topic": "память",
    "q": "Выбери все верные про память в CPython?",
    "options": [
      "циклические ссылки собирает cyclic GC, не только refcount",
      "__slots__ убирает __dict__ у экземпляров (экономия)",
      "weakref не увеличивает refcount целевого объекта",
      "del x всегда немедленно вызывает __del__ и освобождает память ОС"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explain": "Del уменьшает refcount; __del__ и возврат памяти ОС — не гарантия «сразу». Циклы — дело gc модуля. Верными здесь будут пункты: «циклические ссылки собирает cyclic GC, не только refcount»; «__slots__ убирает __dict__ у экземпляров (экономия)»; «weakref не увеличивает refcount целевого объекта».",
    "kind": "multi",
    "tags": [
      "memory",
      "gc"
    ],
    "difficulty": "senior",
    "group": "CPython и память",
    "id": "s322"
  },
  {
    "topic": "cache",
    "q": "Выбери верный вариант: Паттерн read-through?",
    "options": [
      "кэш сам ходит в store при miss",
      "только Redis Cluster",
      "запрещён",
      "равен TTL=0"
    ],
    "answer": 0,
    "explain": "Кэш сам ходит в store при miss. Подходит ответ «кэш сам ходит в store при miss». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s323"
  },
  {
    "topic": "subinterpreters",
    "q": "Какова цель PEP 554 / subinterpreters?",
    "options": [
      "изоляция внутри процесса",
      "удаление процессов",
      "JS bridge",
      "SQL"
    ],
    "answer": 0,
    "explain": "Меньше shared state. Подходит ответ «изоляция внутри процесса».",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s324"
  },
  {
    "topic": "observability",
    "q": "Выбери верный вариант: Метка Prometheus `user_id` на высококардинальном трафике?",
    "options": [
      "опасно взрывом time series",
      "всегда обязательно",
      "ускоряет PromQL",
      "заменяет логи"
    ],
    "answer": 0,
    "explain": "Cardinality — главный враг метрик. Подходит ответ «опасно взрывом time series». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s325"
  },
  {
    "topic": "performance",
    "q": "Что вернёт tracepoints / USDT?",
    "options": [
      "низкоуровневая инструментизация",
      "только logging",
      "only py-spy",
      "GIL probes std"
    ],
    "answer": 0,
    "explain": "Prod profiling. Подходит ответ «низкоуровневая инструментизация». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s326"
  },
  {
    "topic": "architecture",
    "q": "Зачем ACL?",
    "options": [
      "изолировать внешнюю модель",
      "ускорить SQL",
      "убрать тесты",
      "GIL"
    ],
    "answer": 0,
    "explain": "Anti-corruption layer. Подходит ответ «изолировать внешнюю модель». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "code": "# external_dto -> domain_model",
    "group": "Архитектура и дизайн",
    "id": "s327"
  },
  {
    "topic": "GIL",
    "q": "Что проверяет eval breaker?",
    "options": [
      "сигналы/переключения между байткодами",
      "только GC",
      "только I/O callbacks без сигнала",
      "pip"
    ],
    "answer": 0,
    "explain": "Кооперативные точки. Подходит ответ «сигналы/переключения между байткодами». GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s328"
  },
  {
    "topic": "asyncio",
    "q": "Что такое server start_serving?",
    "options": [
      "приём соединений",
      "client open",
      "DNS",
      "TLS ticket only"
    ],
    "answer": 0,
    "explain": "Asyncio.Server. Подходит ответ «приём соединений». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s329"
  },
  {
    "topic": "packaging",
    "q": "Что такое abi3 wheel?",
    "options": [
      "limited API multi-version",
      "один точный patch CPython only always",
      "pure python",
      "win only"
    ],
    "answer": 0,
    "explain": "Stable ABI. Подходит ответ «limited API multi-version». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s330"
  },
  {
    "topic": "дескрипторы",
    "q": "Выбери верный вариант: methods — non-data descriptors, поэтому?",
    "options": [
      "instance attr может затенить функцию",
      "нельзя затенить",
      "всегда bound",
      "GIL"
    ],
    "answer": 0,
    "explain": "Obj.f = 1 скроет method. Подходит ответ «instance attr может затенить функцию». Дескрипторы управляют доступом к атрибутам через __get__, __set__ и __delete__.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s331"
  },
  {
    "topic": "api",
    "q": "Что такое HATEOAS связан с?",
    "options": [
      "REST гипермедиа",
      "SOAP only",
      "GIL",
      "CSV"
    ],
    "answer": 0,
    "explain": "Ссылки в ответах API. Подходит ответ «REST гипермедиа».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s332"
  },
  {
    "topic": "testing",
    "q": "Какова цель Chaos engineering в тестах прод-like среды —?",
    "options": [
      "проверить устойчивость к сбоям до реального инцидента",
      "100% coverage",
      "удалить staging",
      "только load"
    ],
    "answer": 0,
    "explain": "Намеренные отказы: latency, kill pod. Подходит ответ «проверить устойчивость к сбоям до реального инцидента».",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s333"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: SQLi (API) кратко?",
    "options": [
      "инъекция в SQL",
      "ускорение Python",
      "тип в typing",
      "только DevOps"
    ],
    "answer": 0,
    "explain": "Инъекция в SQL. Подходит ответ «инъекция в SQL». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s334"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: Для int 100: надёжно ли `a is b` при равных значениях?",
    "options": [
      "может быть True из‑за интернирования",
      "всегда True по языку",
      "всегда False по языку",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Часто один и тот же объект (intern маленьких int). Подходит ответ «может быть True из‑за интернирования».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s335"
  },
  {
    "topic": "distributed",
    "q": "Что такое fencing token?",
    "options": [
      "старый primary не пишет после failover",
      "JWT refresh",
      "ETag",
      "cookie"
    ],
    "answer": 0,
    "explain": "Split brain. Подходит ответ «старый primary не пишет после failover». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s336"
  },
  {
    "topic": "ctypes",
    "q": "Что такое ctypes подходит для?",
    "options": [
      "вызова C ABI из Python",
      "замены asyncio",
      "ORM",
      "templating"
    ],
    "answer": 0,
    "explain": "FFI без компиляции расширения. Подходит ответ «вызова C ABI из Python».",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s337"
  },
  {
    "topic": "observability",
    "q": "Что такое exemplars связывают?",
    "options": [
      "метрики с трейсами",
      "логи с pep8",
      "CPU с GIL bit",
      "SQL с ORM name only"
    ],
    "answer": 0,
    "explain": "OpenTelemetry. Подходит ответ «метрики с трейсами». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s338"
  },
  {
    "topic": "performance",
    "q": "Зачем нужно интернирование строк / constant folding?",
    "options": [
      "компилятор/рантайм могут переиспользовать объекты",
      "запрещены",
      "только в PyPy",
      "ломают =="
    ],
    "answer": 0,
    "explain": "Не строй логику на is для строк/int. Подходит ответ «компилятор/рантайм могут переиспользовать объекты».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s339"
  },
  {
    "topic": "architecture",
    "q": "Что означает backpressure?",
    "options": [
      "потребитель сигналит замедлить производителя",
      "больше RAM always",
      "drop all metrics",
      "только TCP window в Python"
    ],
    "answer": 0,
    "explain": "Очереди, async streams, HTTP/2 windows… Подходит ответ «потребитель сигналит замедлить производителя».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s340"
  },
  {
    "topic": "multiprocessing",
    "q": "Что такое spawn заново импортирует?",
    "options": [
      "main-like модуль осторожно",
      "только pickle builtins",
      "shared mem objects auto",
      "threads"
    ],
    "answer": 0,
    "explain": "Боковая исполняемость. Подходит ответ «main-like модуль осторожно».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s341"
  },
  {
    "topic": "asyncio",
    "q": "Почему нельзя time.sleep в async?",
    "options": [
      "блокирует event loop",
      "убивает процесс",
      "TypeError always",
      "OK"
    ],
    "answer": 0,
    "explain": "Await asyncio.sleep. Подходит ответ «блокирует event loop». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "code": "async def bad():\n    import time\n    time.sleep(1)",
    "group": "Asyncio",
    "id": "s342"
  },
  {
    "topic": "packaging",
    "q": "Зачем нужен CI matrix с Python 3.12?",
    "options": [
      "ловить несовместимости версий",
      "только ради бейджа",
      "заменяет тесты",
      "нужен только latest"
    ],
    "answer": 0,
    "explain": "Совместимость пакета. Подходит ответ «ловить несовместимости версий». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s343"
  },
  {
    "topic": "метаклассы",
    "q": "Что такое class body executes inside namespace?",
    "options": [
      "да, затем type(...) ",
      "нет, декларативно without exec",
      "только annotations kept",
      "GIL"
    ],
    "answer": 0,
    "explain": "Class — executable suite. Подходит ответ «да, затем type(...)». Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s344"
  },
  {
    "topic": "api",
    "q": "Выбери верный вариант: Клиент получил 408 — разумная стратегия?",
    "options": [
      "exponential backoff + jitter (+ Retry-After)",
      "сразу 100 ретраев",
      "сменить на POST",
      "игнор"
    ],
    "answer": 0,
    "explain": "Не усиливай шторм. Подходит ответ «exponential backoff + jitter (+ Retry-After)».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s345"
  },
  {
    "topic": "testing",
    "q": "Что такое flaky quarantine?",
    "options": [
      "изоляция нестабильных тестов",
      "удаление assert",
      "sleep 30",
      "disable CI"
    ],
    "answer": 0,
    "explain": "Пока чинят. Подходит ответ «изоляция нестабильных тестов». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "s346"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: path traversal (API) кратко?",
    "options": [
      "доступ к файлам через ../",
      "ускорение Python",
      "тип в typing",
      "только DevOps"
    ],
    "answer": 0,
    "explain": "Доступ к файлам через ../. Подходит ответ «доступ к файлам через ../». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s347"
  },
  {
    "topic": "память",
    "q": "Что вернёт gc.get_threshold()[3] влияет на?",
    "options": [
      "частоту/пороги сбора поколений GC",
      "GIL timeout",
      "TCP window",
      "pip cache"
    ],
    "answer": 0,
    "explain": "Пороги генерационного GC. Подходит ответ «частоту/пороги сбора поколений GC». Память в CPython устроена через подсчёт ссылок, циклический GC, buffer protocol и иногда __slots__.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s348"
  },
  {
    "topic": "cache",
    "q": "В чём разница: write-through vs write-back?",
    "options": [
      "синхронная запись в кэш+стор vs отложенная",
      "одно",
      "только Redis term",
      "HTTP"
    ],
    "answer": 0,
    "explain": "Политики записи. Подходит ответ «синхронная запись в кэш+стор vs отложенная». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s349"
  },
  {
    "topic": "C-API",
    "q": "Что такое PyErr_SetString + return NULL — паттерн в C-API CPython?",
    "options": [
      "сообщить об ошибке в Python из C",
      "успех",
      "отключить GC",
      "release GIL"
    ],
    "answer": 0,
    "explain": "Вызывающая сторона проверяет ошибку. Подходит ответ «сообщить об ошибке в Python из C». Это про внутренности CPython и написание C-расширений, а не про обычный прикладной код.",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s350"
  },
  {
    "topic": "observability",
    "q": "Что вернёт high-cardinality trace attributes?",
    "options": [
      "дороже хранить/искать",
      "бесплатно",
      "лучше чем metrics labels always",
      "ignore PII ok"
    ],
    "answer": 0,
    "explain": "Бюджет телеметрии. Подходит ответ «дороже хранить/искать». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s351"
  },
  {
    "topic": "import",
    "q": "Что такое sys.modules кэширует?",
    "options": [
      "уже загруженные модули по имени",
      "только bytecode файлы",
      "pip packages",
      "типы"
    ],
    "answer": 0,
    "explain": "Повторный import берёт из кэша. Подходит ответ «уже загруженные модули по имени».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s352"
  },
  {
    "topic": "patterns",
    "q": "Выбери верный вариант: CQRS в связке с Event Sourcing?",
    "options": [
      "разные модели чтения/записи; состояние из потока событий",
      "один SQL table",
      "только cache",
      "GIL"
    ],
    "answer": 0,
    "explain": "Write model пишет события; read model строится проекциями. Подходит ответ «разные модели чтения/записи; состояние из потока событий».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s353"
  },
  {
    "topic": "GIL",
    "q": "Что выведет код?",
    "options": [
      "часто ≈ одно ядро",
      "линейный x2",
      "x4",
      "zero"
    ],
    "answer": 0,
    "explain": "GIL. Подходит ответ «часто ≈ одно ядро». GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "code": "# threading + pure python loop",
    "group": "Потоки, процессы, GIL",
    "id": "s354"
  },
  {
    "topic": "async",
    "q": "Что такое Backpressure в потоках данных?",
    "options": [
      "ограничение скорости производителя",
      "ускорение потребителя магией",
      "GIL throttle",
      "TCP only term"
    ],
    "answer": 0,
    "explain": "Не копить бесконечные очереди. Подходит ответ «ограничение скорости производителя». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s355"
  },
  {
    "topic": "packaging",
    "q": "Зачем нужен abi3 / stable ABI wheels?",
    "options": [
      "один wheel на несколько версий CPython",
      "быстрее pure python",
      "убрать mypy",
      "Docker only"
    ],
    "answer": 0,
    "explain": "Limited API. Подходит ответ «один wheel на несколько версий CPython». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s356"
  },
  {
    "topic": "метаклассы",
    "q": "Выбери верный вариант: type(name, bases, namespace) создаёт?",
    "options": [
      "новый класс",
      "экземпляр only",
      "модуль",
      "функцию"
    ],
    "answer": 0,
    "explain": "Class statement — синтаксический сахар над этим. Подходит ответ «новый класс». Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s357"
  },
  {
    "topic": "api",
    "q": "Выбери верный вариант: batch endpoints против chatty?",
    "options": [
      "меньше RTT",
      "всегда хуже cache",
      "запрещены REST",
      "only GraphQL"
    ],
    "answer": 0,
    "explain": "Эффективность. Подходит ответ «меньше RTT».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s358"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: Логировать сырой заголовок Authorization?",
    "options": [
      "осторожно: секреты/PII — редактируй",
      "всегда полностью",
      "никогда никакие заголовки",
      "только в debug print"
    ],
    "answer": 0,
    "explain": "Redaction в логах. Подходит ответ «осторожно: секреты/PII — редактируй». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s359"
  },
  {
    "topic": "байткод",
    "q": "Выбери верный вариант: Опкод CALL связан с?",
    "options": [
      "вызов функции",
      "сетевым I/O",
      "только GC",
      "импортом pip"
    ],
    "answer": 0,
    "explain": "CALL: вызов функции. Подходит ответ «вызов функции».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s360"
  },
  {
    "topic": "cache",
    "q": "Что такое versioned keys?",
    "options": [
      "инвалидация сменой версии в имени",
      "TTL=∞",
      "LRU off",
      "random keys"
    ],
    "answer": 0,
    "explain": "Простой приём. Подходит ответ «инвалидация сменой версии в имени». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s361"
  },
  {
    "topic": "ctypes",
    "q": "В чём разница: byref vs pointer?",
    "options": [
      "разные способы передачи адреса",
      "одно",
      "только arrays",
      "GIL"
    ],
    "answer": 0,
    "explain": "FFI нюансы. Подходит ответ «разные способы передачи адреса».",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s362"
  },
  {
    "topic": "observability",
    "q": "Выбери верный вариант: RED: буква R?",
    "options": [
      "Rate",
      "RAM",
      "EOF",
      "DNS"
    ],
    "answer": 0,
    "explain": "RED, а затем Rate. Подходит ответ «Rate». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s363"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: Сложность str.join n кусков?",
    "options": [
      "O(суммарная длина)",
      "O(n²) всегда",
      "O(1)",
      "O(n!)"
    ],
    "answer": 0,
    "explain": "Большая O: str.join n кусков. Подходит ответ «O(суммарная длина)». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s364"
  },
  {
    "topic": "design",
    "q": "Что вернёт policy + mechanism separation?",
    "options": [
      "решения отдельно от исполнения",
      "hardcode ifs everywhere",
      "god object",
      "anemic + services chaos"
    ],
    "answer": 0,
    "explain": "Гибкость. Подходит ответ «решения отдельно от исполнения».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s365"
  },
  {
    "topic": "fork",
    "q": "Что верно про После fork в многопоточном процессе опасно?",
    "options": [
      "состояние locks/threads",
      "только print",
      "int",
      "str intern"
    ],
    "answer": 0,
    "explain": "Только fork’нувший поток жив. Подходит ответ «состояние locks/threads».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s366"
  },
  {
    "topic": "asyncio",
    "q": "почему нельзя вызывать blocking time.sleep в корутине?",
    "options": [
      "блокирует event loop целиком",
      "ломает только эту task",
      "запрещено синтаксисом",
      "нужен GIL off"
    ],
    "answer": 0,
    "explain": "Asyncio.sleep / to_thread / executor. Подходит ответ «блокирует event loop целиком». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s367"
  },
  {
    "topic": "packaging",
    "q": "В чём риск venv --system-site-packages?",
    "options": [
      "утечка системных пакетов в изоляцию",
      "ускорение always worth",
      "security harden",
      "reproducible better"
    ],
    "answer": 0,
    "explain": "Чистота env. Подходит ответ «утечка системных пакетов в изоляцию». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s368"
  },
  {
    "topic": "метаклассы",
    "q": "Выбери верный вариант: namespace в __prepare__ может быть?",
    "options": [
      "OrderedDict/custom mapping",
      "только dict ban custom",
      "list",
      "set"
    ],
    "answer": 0,
    "explain": "Упорядоченные аннотации исторически. Подходит ответ «OrderedDict/custom mapping». Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s369"
  },
  {
    "topic": "api",
    "q": "Что такое GraphQL N+1?",
    "options": [
      "решается DataLoader/батчингом",
      "нет проблемы",
      "только SQL join auto",
      "gRPC"
    ],
    "answer": 0,
    "explain": "Классика GraphQL. Подходит ответ «решается DataLoader/батчингом».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s370"
  },
  {
    "topic": "security",
    "q": "Что такое open redirect?",
    "options": [
      "редирект на злой URL",
      "SSRF",
      "XSS stored only",
      "CSRF token"
    ],
    "answer": 0,
    "explain": "Валидируй next=. Подходит ответ «редирект на злой URL». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s371"
  },
  {
    "topic": "CPython",
    "q": "Что вернёт frame object (3.11+ changes)?",
    "options": [
      "дешевле/иная модель кадров",
      "исчезли полностью",
      "стали процессами",
      "JSON"
    ],
    "answer": 0,
    "explain": "Ускорение вызовов. Подходит ответ «дешевле/иная модель кадров». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s372"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: READ UNCOMMITTED и аномалия «non-repeatable read»?",
    "options": [
      "зависит от СУБД — сверяй документацию/стандарт",
      "всегда разрешена везде",
      "всегда запрещена везде",
      "только в SQLite"
    ],
    "answer": 0,
    "explain": "Не путай SQL-standard и реализацию. Подходит ответ «зависит от СУБД — сверяй документацию/стандарт».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s373"
  },
  {
    "topic": "C-API",
    "q": "В чём разница: heap types vs static types?",
    "options": [
      "динамика/модульность расширений",
      "скорость always heap worse irrelevant",
      "GIL",
      "typing"
    ],
    "answer": 0,
    "explain": "Современные расширения. Подходит ответ «динамика/модульность расширений». Это про внутренности CPython и написание C-расширений, а не про обычный прикладной код.",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s374"
  },
  {
    "topic": "observability",
    "q": "В чём риск Сэмплирование трейсов 10%?",
    "options": [
      "можно пропустить редкие ошибки — нужен tail-based/error sampling",
      "полная картина всегда",
      "ломает метрики RED",
      "запрещено"
    ],
    "answer": 0,
    "explain": "Комбинируй head + tail sampling. Подходит ответ «можно пропустить редкие ошибки — нужен tail-based/error sampling».",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s375"
  },
  {
    "topic": "performance",
    "q": "когда профилировать преждевременно — плохо; но первый инструмент?",
    "options": [
      "cProfile / py-spy / scalene — по задаче",
      "сразу переписать на C",
      "отключить GC навсегда",
      "больше print"
    ],
    "answer": 0,
    "explain": "Измеряй, потом оптимизируй. Подходит ответ «cProfile / py-spy / scalene — по задаче». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s376"
  },
  {
    "topic": "SOLID",
    "q": "Как в Python обычно соблюдают Open/Closed?",
    "options": [
      "протоколы/стратегии/регистры",
      "правку ядра каждый раз",
      "globals",
      "eval"
    ],
    "answer": 0,
    "explain": "Расширяем поведение новыми классами и хуками, не ломая существующий код. Подходит ответ «протоколы/стратегии/регистры».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s377"
  },
  {
    "topic": "concurrency",
    "q": "Выбери верный вариант: free-threaded CPython (3.13+) меняет?",
    "options": [
      "опциональная сборка без GIL",
      "удаляет потоки",
      "запрещает multiprocessing",
      "только asyncio"
    ],
    "answer": 0,
    "explain": "Новая модель памяти/потокобезопасности расширений. Подходит ответ «опциональная сборка без GIL». Конкурентность бывает на потоках, процессах и async — у каждого свои ограничения и цена синхронизации.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s378"
  },
  {
    "topic": "async",
    "q": "Что такое trio nursery cancel scope?",
    "options": [
      "эталон structured cancel",
      "fire and forget ideal",
      "GIL scope",
      "thread group"
    ],
    "answer": 0,
    "explain": "Влияние на asyncio TaskGroup. Подходит ответ «эталон structured cancel». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s379"
  },
  {
    "topic": "packaging",
    "q": "Что такое bytecode suppression / SOURCE_DATE_EPOCH?",
    "options": [
      "воспроизводимые артефакты",
      "ускорение import magic only",
      "typing",
      "GIL"
    ],
    "answer": 0,
    "explain": "Reproducible builds. Подходит ответ «воспроизводимые артефакты». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s380"
  },
  {
    "topic": "метаклассы",
    "q": "Что такое __init_subclass__ вызывается?",
    "options": [
      "при создании подкласса",
      "при import любого модуля",
      "при del",
      "только metaclass"
    ],
    "answer": 0,
    "explain": "Хуки регистрации без своего metaclass. Подходит ответ «при создании подкласса». Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s381"
  },
  {
    "topic": "api",
    "q": "Что такое versioning via media type?",
    "options": [
      "Accept versioning",
      "только URL /v1",
      "только header X-Api always mandatory one way",
      "query ver worst always"
    ],
    "answer": 0,
    "explain": "Варианты эволюции. Подходит ответ «Accept versioning».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s382"
  },
  {
    "topic": "security",
    "q": "Что вернёт supply chain signing (Sigstore)?",
    "options": [
      "проверка происхождения артефактов",
      "pep8 sign",
      "GPG only ancient mandatory",
      "JWT API"
    ],
    "answer": 0,
    "explain": "Современная поставка. Подходит ответ «проверка происхождения артефактов». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s383"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: Py_INCREF/DECREF — про что?",
    "options": [
      "ручное управление refcnt в C-API",
      "только pip",
      "HTTP header",
      "pytest fixture"
    ],
    "answer": 0,
    "explain": "Ручное управление refcnt в C-API. Подходит ответ «ручное управление refcnt в C-API». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s384"
  },
  {
    "topic": "cache",
    "q": "В чём риск TTL=30s без jitter —?",
    "options": [
      "синхронный stampede при массовом истечении",
      "только больше RAM",
      "невозможность hit",
      "GIL"
    ],
    "answer": 0,
    "explain": "Добавляй jitter / soft TTL / singleflight. Подходит ответ «синхронный stampede при массовом истечении».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s385"
  },
  {
    "topic": "ctypes",
    "q": "Что такое restype/argtypes важны чтобы?",
    "options": [
      "правильно маршалить C типы",
      "ускорить Python loop 100x",
      "убрать GC",
      "async"
    ],
    "answer": 0,
    "explain": "Без них легко UB. Подходит ответ «правильно маршалить C типы».",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s386"
  },
  {
    "topic": "observability",
    "q": "Что такое profiling in prod continuous?",
    "options": [
      "сэмплирующие профилировщики",
      "cProfile на каждый request",
      "print",
      "dis"
    ],
    "answer": 0,
    "explain": "Py-spy/scalene и др. Подходит ответ «сэмплирующие профилировщики». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s387"
  },
  {
    "topic": "import",
    "q": "Что такое sys.abiflags?",
    "options": [
      "флаги ABI интерпретатора",
      "pip flags",
      "ruff",
      "mypy"
    ],
    "answer": 0,
    "explain": "Интроспекция сборки. Подходит ответ «флаги ABI интерпретатора».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s388"
  },
  {
    "topic": "architecture",
    "q": "Что такое strangler fig pattern?",
    "options": [
      "постепенно заменять легаси новым вокруг",
      "big-bang rewrite",
      "только monolith forever",
      "удалить тесты"
    ],
    "answer": 0,
    "explain": "Эволюционная миграция. Подходит ответ «постепенно заменять легаси новым вокруг». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s389"
  },
  {
    "topic": "concurrency",
    "q": "Что такое subinterpreters per request idea?",
    "options": [
      "изоляция state ценой сложности",
      "замена k8s",
      "GIL remove complete",
      "faster than threads always"
    ],
    "answer": 0,
    "explain": "Исследовательские модели. Подходит ответ «изоляция state ценой сложности». Конкурентность бывает на потоках, процессах и async — у каждого свои ограничения и цена синхронизации.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s390"
  },
  {
    "topic": "async",
    "q": "Что такое graceful shutdown?",
    "options": [
      "отмена задач + close ресурсов",
      "os._exit сразу ideal",
      "игнор tasks",
      "SIGINT ignore"
    ],
    "answer": 0,
    "explain": "Прод-практика. Подходит ответ «отмена задач + close ресурсов». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s391"
  },
  {
    "topic": "packaging",
    "q": "Что такое PEP 517 isolated build?",
    "options": [
      "сбор в чистом env",
      "reuse site-packages dirty always",
      "conda exclusive",
      "no build backend"
    ],
    "answer": 0,
    "explain": "Воспроизводимость. Подходит ответ «сбор в чистом env». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s392"
  },
  {
    "topic": "метаклассы",
    "q": "Что вызывает class A(metaclass=M)?",
    "options": [
      "M(...) при создании класса",
      "M при каждом инстансе only",
      "только importlib",
      "GC"
    ],
    "answer": 0,
    "explain": "Метакласс контролирует создание класса. Подходит ответ «M(...) при создании класса». Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s393"
  },
  {
    "topic": "api",
    "q": "Что такое rate limit token bucket?",
    "options": [
      "сглаживание нагрузки",
      "только hard max without refill",
      "circuit",
      "bulkhead"
    ],
    "answer": 0,
    "explain": "Алгоритм. Подходит ответ «сглаживание нагрузки».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s394"
  },
  {
    "topic": "security",
    "q": "Что такое HTTP header injection CRLF?",
    "options": [
      "внедрение заголовков/ответа",
      "XSS only",
      "SQLi",
      "SSRF only"
    ],
    "answer": 0,
    "explain": "Валидируй заголовки. Подходит ответ «внедрение заголовков/ответа». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s395"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: Флаг интерпретатора -S?",
    "options": [
      "не импортировать site автоматически",
      "включает JIT всегда",
      "отключает GC навсегда",
      "только Windows"
    ],
    "answer": 0,
    "explain": "Не импортировать site автоматически. Подходит ответ «не импортировать site автоматически». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s396"
  },
  {
    "topic": "distributed",
    "q": "Выбери верный вариант: CAP: при partition выбирают?",
    "options": [
      "C или A (упрощённо)",
      "все три всегда",
      "только P off",
      "GIL"
    ],
    "answer": 0,
    "explain": "Сетевые разделы. Подходит ответ «C или A (упрощённо)». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s397"
  },
  {
    "topic": "subinterpreters",
    "q": "Зачем изоляция subinterpreters?",
    "options": [
      "меньше shared mutable state в процессе",
      "замена Docker",
      "удаление async",
      "быстрее JSON"
    ],
    "answer": 0,
    "explain": "Параллелизм без полного multiprocess. Подходит ответ «меньше shared mutable state в процессе».",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s398"
  },
  {
    "topic": "observability",
    "q": "Что такое baggage в телеметрии?",
    "options": [
      "ключ-значения вдоль трейса",
      "только headers auth",
      "logs only",
      "metrics labels unlimited safe"
    ],
    "answer": 0,
    "explain": "Осторожно с PII. Подходит ответ «ключ-значения вдоль трейса». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s399"
  },
  {
    "topic": "import",
    "q": "Что позволяет importlib?",
    "options": [
      "программный импорт и лоадеры",
      "только pip",
      "компиляцию C",
      "удаление sys"
    ],
    "answer": 0,
    "explain": "Метапуть импорта. Подходит ответ «программный импорт и лоадеры».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s400"
  },
  {
    "topic": "patterns",
    "q": "Что вернёт retry with jitter full/equal?",
    "options": [
      "стратегии AWS-like backoff",
      "linear only",
      "no jitter better under load",
      "fixed 1s ideal stampede"
    ],
    "answer": 0,
    "explain": "Сглаживание пиков. Подходит ответ «стратегии AWS-like backoff».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s401"
  },
  {
    "topic": "concurrency",
    "q": "Почему multiprocessing обходит GIL?",
    "options": [
      "отдельные процессы, а затем свой интерпретатор/память",
      "отключает GIL в родителе",
      "использует greenlet",
      "только Windows fibers"
    ],
    "answer": 0,
    "explain": "Цена: pickle/IPC и память. Подходит ответ «отдельные процессы, а затем свой интерпретатор/память». Конкурентность бывает на потоках, процессах и async — у каждого свои ограничения и цена синхронизации.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s402"
  },
  {
    "topic": "async",
    "q": "В чём разница: wait vs gather exceptions?",
    "options": [
      "разные политики ошибок/возврата",
      "идентичны",
      "wait cancels always same as gather return_exceptions",
      "threads"
    ],
    "answer": 0,
    "explain": "Читай доки. Подходит ответ «разные политики ошибок/возврата». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s403"
  },
  {
    "topic": "ci",
    "q": "Что такое SBOM?",
    "options": [
      "перечень компонентов поставки",
      "тест-план",
      "flamegraph",
      "OpenAPI"
    ],
    "answer": 0,
    "explain": "Supply chain. Подходит ответ «перечень компонентов поставки».",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s404"
  },
  {
    "topic": "метаклассы",
    "q": "Что возвращает __prepare__ метакласса?",
    "options": [
      "namespace mapping для тела класса",
      "MRO",
      "GIL state",
      "module"
    ],
    "answer": 0,
    "explain": "Кастомный namespace. Подходит ответ «namespace mapping для тела класса». Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s405"
  },
  {
    "topic": "rpc",
    "q": "Выбери верный вариант: gRPC в Python часто через?",
    "options": [
      "grpcio + protobuf",
      "только json.dumps",
      "ftp",
      "smtp"
    ],
    "answer": 0,
    "explain": "Контракты .proto. Подходит ответ «grpcio + protobuf».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s406"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: SSRF (web) кратко?",
    "options": [
      "сервер ходит на внутренние URL по указке",
      "ускорение Python",
      "тип в typing",
      "только DevOps"
    ],
    "answer": 0,
    "explain": "Сервер ходит на внутренние URL по указке. Подходит ответ «сервер ходит на внутренние URL по указке».",
    "kind": "single",
    "group": "Безопасность",
    "id": "s407"
  },
  {
    "topic": "CPython",
    "q": "Что вернёт immortal objects (3.12)?",
    "options": [
      "некоторые объекты без смены refcnt",
      "все immortal",
      "no GC needed",
      "GIL immortal"
    ],
    "answer": 0,
    "explain": "Оптимизация. Подходит ответ «некоторые объекты без смены refcnt». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s408"
  },
  {
    "topic": "cache",
    "q": "Что вернёт refresh-ahead?",
    "options": [
      "продление до истечения",
      "только lazy load",
      "write-only",
      "negative only"
    ],
    "answer": 0,
    "explain": "Сглаживание miss. Подходит ответ «продление до истечения». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s409"
  },
  {
    "topic": "C-API",
    "q": "Что такое PyErr_SetString в C-API CPython?",
    "options": [
      "ставить исключение",
      "логировать only",
      "clear frames",
      "release GIL"
    ],
    "answer": 0,
    "explain": "Ошибки из C. Подходит ответ «ставить исключение». Это про внутренности CPython и написание C-расширений, а не про обычный прикладной код.",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s410"
  },
  {
    "topic": "observability",
    "q": "Что такое RED method?",
    "options": [
      "Rate Errors Duration",
      "CPU RAM Disk",
      "CRUD",
      "GIL RSS"
    ],
    "answer": 0,
    "explain": "Сервисные метрики. Подходит ответ «Rate Errors Duration». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s411"
  },
  {
    "topic": "perf",
    "q": "Выбери верный вариант: Инлайн кэш специализации байткода (3.11+)?",
    "options": [
      "ускоряет атрибуты/вызовы на горячих путях",
      "убирает GIL",
      "меняет синтаксис",
      "отключает GC"
    ],
    "answer": 0,
    "explain": "Adaptive interpreter. Подходит ответ «ускоряет атрибуты/вызовы на горячих путях». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s412"
  },
  {
    "topic": "SoC",
    "q": "Выбери верный вариант: Fat models / thin views в веб-приложении — пример?",
    "options": [
      "разделения ответственности",
      "нарушения SRP",
      "только LSP",
      "GIL"
    ],
    "answer": 0,
    "explain": "Логика в модели, представление тонкое — soC на практике. Подходит ответ «разделения ответственности».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s413"
  },
  {
    "topic": "signals",
    "q": "Что такое SIGINT → KeyboardInterrupt в?",
    "options": [
      "главном потоке",
      "любом потоке одинаково",
      "только asyncio",
      "только workers"
    ],
    "answer": 0,
    "explain": "Ограничение. Подходит ответ «главном потоке».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s414"
  },
  {
    "topic": "asyncio",
    "q": "Выбери верный вариант: create_shared_memory — не путать с?",
    "options": [
      "multiprocessing.shared_memory",
      "Queue",
      "Lock",
      "Event"
    ],
    "answer": 0,
    "explain": "Разные модули. Подходит ответ «multiprocessing.shared_memory». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s415"
  },
  {
    "topic": "packaging",
    "q": "Что такое pyproject.toml — современный?",
    "options": [
      "стандарт манифеста сборки (PEP 518/621)",
      "только Poetry файл",
      "замена requirements без смысла",
      "runtime config app"
    ],
    "answer": 0,
    "explain": "Единая точка конфига пакета. Подходит ответ «стандарт манифеста сборки (PEP 518/621)». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s416"
  },
  {
    "topic": "дескрипторы",
    "q": "В чём разница: precedence: data descriptor vs instance dict?",
    "options": [
      "data descriptor побеждает",
      "instance всегда",
      "random",
      "slots ban"
    ],
    "answer": 0,
    "explain": "Attribute lookup. Подходит ответ «data descriptor побеждает». Дескрипторы управляют доступом к атрибутам через __get__, __set__ и __delete__.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s417"
  },
  {
    "topic": "api",
    "q": "Что такое optimistic concurrency ETag?",
    "options": [
      "If-Match при обновлении",
      "only cache GET",
      "CORS",
      "JWT"
    ],
    "answer": 0,
    "explain": "Конфликты записей. Подходит ответ «If-Match при обновлении».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s418"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: SQLi (web) кратко?",
    "options": [
      "инъекция в SQL",
      "ускорение Python",
      "тип в typing",
      "только DevOps"
    ],
    "answer": 0,
    "explain": "Инъекция в SQL. Подходит ответ «инъекция в SQL». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s419"
  },
  {
    "topic": "python",
    "q": "Что такое tomllib (3.11+) читает?",
    "options": [
      "TOML",
      "YAML",
      "INI only",
      "JSON5"
    ],
    "answer": 0,
    "explain": "Стандартная библиотека для чтения TOML. Подходит ответ «TOML».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s420"
  },
  {
    "topic": "distributed",
    "q": "Что такое split brain?",
    "options": [
      "два лидера/раздельное мнение о кластере",
      "DNS fail",
      "GC pause only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Кворумы/fencing. Подходит ответ «два лидера/раздельное мнение о кластере». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s421"
  },
  {
    "topic": "C-API",
    "q": "Что вернёт Capsule в C-API?",
    "options": [
      "безопасно передаёт C указатели",
      "JSON",
      "async handle",
      "GIL token"
    ],
    "answer": 0,
    "explain": "PyCapsule. Подходит ответ «безопасно передаёт C указатели». Это про внутренности CPython и написание C-расширений, а не про обычный прикладной код.",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s422"
  },
  {
    "topic": "observability",
    "q": "Выбери верный вариант: USE: буква E?",
    "options": [
      "Errors",
      "UUID",
      "SQL",
      "ETA"
    ],
    "answer": 0,
    "explain": "USE, а затем Errors. Подходит ответ «Errors». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s423"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: zero-copy / buffer protocol польза?",
    "options": [
      "меньше копий памяти между слоями",
      "убирает GC",
      "запрещает bytes",
      "только asyncio"
    ],
    "answer": 0,
    "explain": "Memoryview / PEP 3118. Подходит ответ «меньше копий памяти между слоями». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s424"
  },
  {
    "topic": "Zen",
    "q": "Что показывает import this?",
    "options": [
      "Zen of Python",
      "sys.path",
      "GIL poem",
      "PEP 8"
    ],
    "answer": 0,
    "explain": "Пасхалка с афоризмами. Подходит ответ «Zen of Python».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s425"
  },
  {
    "topic": "GIL",
    "q": "Почему CPU-bound чистый Python плохо масштабируется потоками в CPython?",
    "options": [
      "GIL допускает исполнение байткода только одним потоком за раз",
      "потоки запрещены языком",
      "OS не умеет scheduling",
      "list не thread-safe никогда даже под GIL"
    ],
    "answer": 0,
    "explain": "GIL сериализует исполнение Python-байткода. I/O и многие C-вызовы отпускают GIL, а затем потоки полезны для ожидания. Для CPU: multiprocessing, нативные расширения с Py_BEGIN_ALLOW_THREADS, или free-threaded сборка (PEP 703) — но тогда нужна собственная потокобезопасность структур данных",
    "kind": "single",
    "tags": [
      "gil",
      "concurrency"
    ],
    "difficulty": "senior",
    "group": "Потоки, процессы, GIL",
    "id": "s426"
  },
  {
    "topic": "async",
    "q": "Что вернёт TCP_NODELAY / latency?",
    "options": [
      "настройки сокета влияют на хвосты",
      "только Python sleep",
      "GIL socket",
      "HTTP/3 only"
    ],
    "answer": 0,
    "explain": "Сетевой перф. Подходит ответ «настройки сокета влияют на хвосты». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s427"
  },
  {
    "topic": "packaging",
    "q": "Что вернёт cross-building wheels?",
    "options": [
      " cibuildwheel / матрица платформ",
      "один manylinux на macOS app",
      "pure py always",
      "conda only"
    ],
    "answer": 0,
    "explain": "Нативные расширения. Подходит ответ «cibuildwheel / матрица платформ». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s428"
  },
  {
    "topic": "дескрипторы",
    "q": "Что выведет код?",
    "options": [
      "да (non-data descriptor)",
      "нет",
      "ошибка",
      "только slots"
    ],
    "answer": 0,
    "explain": "Функции — non-data. Подходит ответ «да (non-data descriptor)». Дескрипторы управляют доступом к атрибутам через __get__, __set__ и __delete__.",
    "kind": "single",
    "code": "class A:\n    def f(self): return 1\na = A()\na.f = 2\nprint(a.f)",
    "group": "Метаклассы и типы",
    "id": "s429"
  },
  {
    "topic": "api",
    "q": "Что вернёт problem+json?",
    "options": [
      "стандарт ошибок API",
      "успех 200 body",
      "graphql errors only",
      "SOAP"
    ],
    "answer": 0,
    "explain": "RFC 7807. Подходит ответ «стандарт ошибок API».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s430"
  },
  {
    "topic": "security",
    "q": "Что вернёт content-type confusion / desync?",
    "options": [
      "разное толкование запроса proxy vs app",
      "только XSS",
      "только SQLi",
      "GIL"
    ],
    "answer": 0,
    "explain": "HTTP request smuggling рядом. Подходит ответ «разное толкование запроса proxy vs app». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s431"
  },
  {
    "topic": "память",
    "q": "Что такое debug builds with assertions?",
    "options": [
      "другие перф/поведение",
      "идентичны release",
      "faster",
      "no GC"
    ],
    "answer": 0,
    "explain": "Сравнивай apples-to-apples. Подходит ответ «другие перф/поведение». Память в CPython устроена через подсчёт ссылок, циклический GC, buffer protocol и иногда __slots__.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s432"
  },
  {
    "topic": "cache",
    "q": "Что вернёт two-phase load (lock+double check)?",
    "options": [
      "классика против stampede",
      "только TTL",
      "random sleep only always enough",
      "no lock needed under GIL for IO? всё равно"
    ],
    "answer": 0,
    "explain": "Паттерн. Подходит ответ «классика против stampede». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s433"
  },
  {
    "topic": "cffi/pybind",
    "q": "Что такое pybind11/PyO3?",
    "options": [
      "обёртки C++/Rust для расширений",
      "чистый Python web",
      "linters",
      "formatters"
    ],
    "answer": 0,
    "explain": "Нативные модули. Подходит ответ «обёртки C++/Rust для расширений».",
    "kind": "single",
    "group": "Нативные расширения",
    "id": "s434"
  },
  {
    "topic": "observability",
    "q": "Выбери верный вариант: RED metrics для сервисов?",
    "options": [
      "Rate, Errors, Duration",
      "RAM, EOF, Disk",
      "RPC, ETL, DDL",
      "only logs"
    ],
    "answer": 0,
    "explain": "Базовый набор SLO. Подходит ответ «Rate, Errors, Duration». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s435"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: Сложность bytearray extend?",
    "options": [
      "O(k) амортизированно",
      "O(n²)",
      "O(log n)",
      "O(1) всегда точно"
    ],
    "answer": 0,
    "explain": "Большая O: bytearray extend. Подходит ответ «O(k) амортизированно». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s436"
  },
  {
    "topic": "architecture",
    "q": "Что такое outbox pattern решает?",
    "options": [
      "атомарность записи в БД + публикации события",
      "только кэш",
      "GIL",
      "UI state"
    ],
    "answer": 0,
    "explain": "Событие пишется в outbox-таблицу в той же транзакции. Подходит ответ «атомарность записи в БД + публикации события».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s437"
  },
  {
    "topic": "GIL",
    "q": "Как C-расширение отпускает GIL?",
    "options": [
      "Py_BEGIN_ALLOW_THREADS",
      "gil.disable()",
      "threading.ungil",
      "нельзя"
    ],
    "answer": 0,
    "explain": "Макросы ALLOW/END_ALLOW_THREADS. Подходит ответ «Py_BEGIN_ALLOW_THREADS». GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s438"
  },
  {
    "topic": "asyncio",
    "q": "Выбери верный вариант: contextvars копируются в Tasks?",
    "options": [
      "да, контекст задачи",
      "нет никогда",
      "только threading local",
      "process"
    ],
    "answer": 0,
    "explain": "Request id в async. Подходит ответ «да, контекст задачи». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s439"
  },
  {
    "topic": "ci",
    "q": "Что такое matrix builds проверяют?",
    "options": [
      "несколько версий Python/OS",
      "только latest",
      "только mypy",
      "только black"
    ],
    "answer": 0,
    "explain": "Совместимость пакета. Подходит ответ «несколько версий Python/OS».",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s440"
  },
  {
    "topic": "дескрипторы",
    "q": "Что такое __get__/__set__/__delete__ — протокол?",
    "options": [
      "дескрипторов (property — частный случай)",
      "только metaclasses",
      "async context",
      "import hooks"
    ],
    "answer": 0,
    "explain": "Управляют доступом к атрибутам. Подходит ответ «дескрипторов (property — частный случай)». Дескрипторы управляют доступом к атрибутам через __get__, __set__ и __delete__.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s441"
  },
  {
    "topic": "api",
    "q": "Выбери верный вариант: Клиент получил 502 — разумная стратегия?",
    "options": [
      "exponential backoff + jitter (+ Retry-After)",
      "сразу 100 ретраев",
      "сменить на POST",
      "игнор"
    ],
    "answer": 0,
    "explain": "Не усиливай шторм. Подходит ответ «exponential backoff + jitter (+ Retry-After)».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s442"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: RCE (API) кратко?",
    "options": [
      "удалённое исполнение кода",
      "ускорение Python",
      "тип в typing",
      "только DevOps"
    ],
    "answer": 0,
    "explain": "Удалённое исполнение кода. Подходит ответ «удалённое исполнение кода». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s443"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: Флаг интерпретатора -X faulthandler?",
    "options": [
      "дамп трейсов при фатальных сбоях",
      "включает JIT всегда",
      "отключает GC навсегда",
      "только Windows"
    ],
    "answer": 0,
    "explain": "Дамп трейсов при фатальных сбоях. Подходит ответ «дамп трейсов при фатальных сбоях». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s444"
  },
  {
    "topic": "distributed",
    "q": "Что вернёт exactly-once end-to-end?",
    "options": [
      "очень дорого/редко; чаще effectively once",
      "бесплатно в Kafka magic без дизайна",
      "UDP guarantee",
      "GIL cluster"
    ],
    "answer": 0,
    "explain": "Идемпотентность. Подходит ответ «очень дорого/редко; чаще effectively once». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s445"
  },
  {
    "topic": "observability",
    "q": "Что вернёт tail-based sampling?",
    "options": [
      "решение хранить трейс после факта (ошибки/медленно)",
      "только в начале",
      "random 1%",
      "no traces"
    ],
    "answer": 0,
    "explain": "Дорогие трейсы умно. Подходит ответ «решение хранить трейс после факта (ошибки/медленно)». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s446"
  },
  {
    "topic": "performance",
    "q": "Что такое perf/flamegraph для?",
    "options": [
      "CPU профилей натив/питон с инструментами",
      "только pep8",
      "только coverage",
      "YAML"
    ],
    "answer": 0,
    "explain": "Горячие стеки. Подходит ответ «CPU профилей натив/питон с инструментами». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s447"
  },
  {
    "topic": "architecture",
    "q": "Выбери верный вариант: Idempotent consumer в Kafka обрабатывает?",
    "options": [
      "повторное сообщение без дубля эффекта",
      "только один раз без retry",
      "только sync",
      "pickle"
    ],
    "answer": 0,
    "explain": "Ключ идемпотентности или upsert по business id. Подходит ответ «повторное сообщение без дубля эффекта».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s448"
  },
  {
    "topic": "concurrency",
    "q": "Выбери верный вариант: RCU-подобные идеи в Python редки; вместо?",
    "options": [
      "иммутабельные структуры + замена ссылки",
      "volatile",
      "GIL off assumed",
      "memcpy"
    ],
    "answer": 0,
    "explain": "Паттерны чтения. Подходит ответ «иммутабельные структуры + замена ссылки». Конкурентность бывает на потоках, процессах и async — у каждого свои ограничения и цена синхронизации.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s449"
  },
  {
    "topic": "async",
    "q": "Что такое aenter failure и cancel?",
    "options": [
      "изучай семантику CM при ошибках",
      "always simple",
      "как sync identically without nuance",
      "GIL"
    ],
    "answer": 0,
    "explain": "Тонкости. Подходит ответ «изучай семантику CM при ошибках». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s450"
  },
  {
    "topic": "packaging",
    "q": "Зачем нужен Классификатор Programming Language :: Python :: 3.9?",
    "options": [
      "заявить поддержку версии для PyPI/инструментов",
      "ускорить интерпретатор",
      "включить GIL",
      "заменить mypy"
    ],
    "answer": 0,
    "explain": "Метаданные дистрибутива. Подходит ответ «заявить поддержку версии для PyPI/инструментов». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s451"
  },
  {
    "topic": "runtime",
    "q": "Выбери верный вариант: __getattr__ на модуле (PEP 562)?",
    "options": [
      "ленивые атрибуты модуля",
      "запрещён",
      "только классы",
      "GIL hook"
    ],
    "answer": 0,
    "explain": "Module-level getattr. Подходит ответ «ленивые атрибуты модуля».",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s452"
  },
  {
    "topic": "api",
    "q": "Что такое offset-пагинация page_size=100 минус?",
    "options": [
      "«прыжки» при вставках; глубокий offset дорог",
      "нельзя реализовать в SQL",
      "всегда лучше cursor",
      "запрещена REST"
    ],
    "answer": 0,
    "explain": "Для лент чаще cursor. Подходит ответ ««прыжки» при вставках; глубокий offset дорог».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s453"
  },
  {
    "topic": "security",
    "q": "Что такое dependency confusion?",
    "options": [
      "подмена пакета именем из публичного индекса",
      "GIL bug",
      "PEP8",
      "typo squatting only DNS"
    ],
    "answer": 0,
    "explain": "Пины/индексы/scopes. Подходит ответ «подмена пакета именем из публичного индекса». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s454"
  },
  {
    "topic": "CPython",
    "q": "Что такое PyObject заголовок (упрощённо)?",
    "options": [
      "refcount + указатель на тип (и ещё поля)",
      "только данные без типа",
      "только GIL token",
      "только hash"
    ],
    "answer": 0,
    "explain": "Любой объект в CPython — pyObject*. Подходит ответ «refcount + указатель на тип (и ещё поля)». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s455"
  },
  {
    "topic": "distributed",
    "q": "Что такое vector clocks?",
    "options": [
      "частичный порядок событий",
      "NTP sync perfect",
      "Lamport = vector always",
      "GIS"
    ],
    "answer": 0,
    "explain": "Конфликты версий. Подходит ответ «частичный порядок событий». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s456"
  },
  {
    "topic": "observability",
    "q": "Что такое cardinality взрыв labels?",
    "options": [
      "дорогие метрики",
      "лучше always more labels",
      "не влияет",
      "только logs"
    ],
    "answer": 0,
    "explain": "Осторожно user_id в labels. Подходит ответ «дорогие метрики». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s457"
  },
  {
    "topic": "pickle",
    "q": "Почему pickle опасен из недоверенного источника?",
    "options": [
      "может выполнить код при загрузке",
      "только большой размер",
      "ломает UTF-8",
      "медленный hash"
    ],
    "answer": 0,
    "explain": "Arbitrary code execution. Подходит ответ «может выполнить код при загрузке».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s458"
  },
  {
    "topic": "SOLID",
    "q": "Что такое «Одна причина для изменения» в SRP?",
    "options": [
      "роль модуля в системе",
      "число строк кода",
      "число багов",
      "число import"
    ],
    "answer": 0,
    "explain": "Причина = актор или зона требований (оплата, отчёты, API). Подходит ответ «роль модуля в системе». SOLID — набор принципов объектного дизайна; в Python их обычно выражают через протоколы, ABC и композицию.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s459"
  },
  {
    "topic": "multiprocessing",
    "q": "В чём риск fork без exec на macOS/spawn —?",
    "options": [
      "небезопасное состояние lock/threads после fork",
      "только медленнее",
      "нет риска",
      "только Windows"
    ],
    "answer": 0,
    "explain": "Поэтому default start method часто spawn. Подходит ответ «небезопасное состояние lock/threads после fork».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s460"
  },
  {
    "topic": "asyncio",
    "q": "что такое backpressure?",
    "options": [
      "торможение производителя, когда потребитель не успевает",
      "увеличение concurrency always",
      "GIL pause",
      "DNS cache"
    ],
    "answer": 0,
    "explain": "Очереди с maxsize, потоки с паузами. Подходит ответ «торможение производителя, когда потребитель не успевает».",
    "kind": "single",
    "group": "Asyncio",
    "id": "s461"
  },
  {
    "topic": "packaging",
    "q": "Что вернёт abi flags / pymalloc tag?",
    "options": [
      "сборка интерпретатора влияет на расширения",
      "pure py wheels care",
      "pep8",
      "ruff"
    ],
    "answer": 0,
    "explain": "Совместимость .so. Подходит ответ «сборка интерпретатора влияет на расширения». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s462"
  },
  {
    "topic": "метаклассы",
    "q": "Что такое types.new_class?",
    "options": [
      "высокоуровневое создание класса",
      "только eval",
      "NamedTuple",
      "Enum functional same exactly"
    ],
    "answer": 0,
    "explain": "С __prepare__ и т.д. Подходит ответ «высокоуровневое создание класса». Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s463"
  },
  {
    "topic": "api",
    "q": "Зачем нужен Версия API `v2` в URL/заголовке?",
    "options": [
      "эволюция контракта без ломания клиентов",
      "ускорение CPU",
      "замена auth",
      "только документация"
    ],
    "answer": 0,
    "explain": "Совместимость. Подходит ответ «эволюция контракта без ломания клиентов».",
    "kind": "single",
    "group": "Веб и API",
    "id": "s464"
  },
  {
    "topic": "security",
    "q": "Что такое JWT none alg attack?",
    "options": [
      "подмена алгоритма",
      "XSS",
      "CSRF",
      "SQLi"
    ],
    "answer": 0,
    "explain": "Жёстко задавай alg. Подходит ответ «подмена алгоритма». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s465"
  },
  {
    "topic": "CPython",
    "q": "Какая основная структура объекта cpython?",
    "options": [
      "PyObject (refcount + type)",
      "только указатель",
      "JVM object header",
      "Go interface"
    ],
    "answer": 0,
    "explain": "Все объекты — pyObject-совместимы. Подходит ответ «PyObject (refcount + type)». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s466"
  },
  {
    "topic": "serialization",
    "q": "В чём разница: MessagePack/Protobuf vs JSON когда?",
    "options": [
      "нужна компактность/схема/скорость",
      "всегда хуже JSON",
      "только логи",
      "для str keys only"
    ],
    "answer": 0,
    "explain": "Бинарные протоколы. Подходит ответ «нужна компактность/схема/скорость».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s467"
  },
  {
    "topic": "observability",
    "q": "Выбери верный вариант: USE: буква U?",
    "options": [
      "Utilization",
      "UUID",
      "SQL",
      "ETA"
    ],
    "answer": 0,
    "explain": "USE, а затем Utilization. Подходит ответ «Utilization». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s468"
  },
  {
    "topic": "pickle",
    "q": "В чём риск pickle.loads(недовер.)?",
    "options": [
      "RCE",
      "только большой RAM",
      "UTF error",
      "медленно"
    ],
    "answer": 0,
    "explain": "Может исполнить код. Подходит ответ «RCE». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "# pickle.loads(user_bytes)",
    "group": "Stdlib и производительность",
    "id": "s469"
  },
  {
    "topic": "принципы",
    "q": "Defensive programming vs fail fast — что вернее?",
    "options": [
      "fail fast на границе; внутри — инварианты и assert",
      "всегда try/except pass",
      "никаких проверок",
      "только logging"
    ],
    "answer": 0,
    "explain": "На границе системы — строгая валидация; внутри — доверие к контрактам. Подходит ответ «fail fast на границе; внутри — инварианты и assert».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s470"
  },
  {
    "topic": "multiprocessing",
    "q": "Что даёт shared_memory (3.8+)?",
    "options": [
      "общий буфер между процессами",
      "shared GIL",
      "общие произвольные объекты Python transparently",
      "TCP"
    ],
    "answer": 0,
    "explain": "Bytes-like sharing. Подходит ответ «общий буфер между процессами».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s471"
  },
  {
    "topic": "async",
    "q": "Что такое nursery cancel all children on error?",
    "options": [
      "structured concurrency default идея",
      "leave orphans",
      "only parent cancel",
      "threads join none"
    ],
    "answer": 0,
    "explain": "Надёжные иерархии задач. Подходит ответ «structured concurrency default идея». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s472"
  },
  {
    "topic": "packaging",
    "q": "Зачем нужен CI matrix с Python 3.13?",
    "options": [
      "ловить несовместимости версий",
      "только ради бейджа",
      "заменяет тесты",
      "нужен только latest"
    ],
    "answer": 0,
    "explain": "Совместимость пакета. Подходит ответ «ловить несовместимости версий». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s473"
  },
  {
    "topic": "метаклассы",
    "q": "Что такое __new__ метакласса создаёт?",
    "options": [
      "объект класса",
      "instance",
      "module",
      "frame"
    ],
    "answer": 0,
    "explain": "Type.__new__ цепочка. Подходит ответ «объект класса». Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s474"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: Логировать сырой заголовок X-API-Key?",
    "options": [
      "осторожно: секреты/PII — редактируй",
      "всегда полностью",
      "никогда никакие заголовки",
      "только в debug print"
    ],
    "answer": 0,
    "explain": "Redaction в логах. Подходит ответ «осторожно: секреты/PII — редактируй». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s475"
  },
  {
    "topic": "python",
    "q": "В чём разница: Интернирование идентификаторов vs произвольных строк?",
    "options": [
      "идентификаторы часто interned",
      "все str interned always",
      "никогда",
      "только bytes"
    ],
    "answer": 0,
    "explain": "Деталь CPython. Подходит ответ «идентификаторы часто interned».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s476"
  },
  {
    "topic": "distributed",
    "q": "Выбери верный вариант: Consensus (Raft/Paxos) нужен для?",
    "options": [
      "согласованного лидера/лога",
      "локального dict",
      "sort",
      "GIL cluster"
    ],
    "answer": 0,
    "explain": "Распределённые системы. Подходит ответ «согласованного лидера/лога». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s477"
  },
  {
    "topic": "observability",
    "q": "Что такое log correlation id?",
    "options": [
      "сквозная связь запросов",
      "random каждый call без передачи",
      "только trace without logs",
      "CPU id"
    ],
    "answer": 0,
    "explain": "Contextvars. Подходит ответ «сквозная связь запросов». Наблюдаемость строится на логах, метриках, трейсах и профилировании уже в проде.",
    "kind": "single",
    "group": "Наблюдаемость и качество",
    "id": "s478"
  },
  {
    "topic": "performance",
    "q": "Что такое Профилирование CPU: стандартно?",
    "options": [
      "cProfile / pyinstrument",
      "print time только в проде без меры",
      "gc.collect loop",
      "dis всегда"
    ],
    "answer": 0,
    "explain": "Измеряй до оптимизации. Подходит ответ «cProfile / pyinstrument». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s479"
  },
  {
    "topic": "architecture",
    "q": "Выбери верный вариант: CAP теорема: при partition сеть выбирают между?",
    "options": [
      "consistency и availability",
      "speed и memory",
      "SQL и NoSQL",
      "sync и async"
    ],
    "answer": 0,
    "explain": "P — partition tolerance; C и A — tradeoff. Подходит ответ «consistency и availability». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s480"
  },
  {
    "topic": "multiprocessing",
    "q": "Что такое Reducer замена для?",
    "options": [
      "кастом pickle между процессами",
      "json",
      "YAML",
      "HTTP"
    ],
    "answer": 0,
    "explain": "ForkingPickler. Подходит ответ «кастом pickle между процессами».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s481"
  },
  {
    "topic": "async",
    "q": "Что такое anyio from_thread?",
    "options": [
      "мост threads↔async",
      "process",
      "GIL bridge CPU",
      "WSGI"
    ],
    "answer": 0,
    "explain": "Интеграции. Подходит ответ «мост threads↔async». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s482"
  },
  {
    "topic": "packaging",
    "q": "Что такое PEP 517 build backend?",
    "options": [
      "изолированная сборка через pyproject",
      "только setup.py exec нативно обязателен",
      "pip uninstall",
      "venv"
    ],
    "answer": 0,
    "explain": "Современный build. Подходит ответ «изолированная сборка через pyproject». Сборка и распространение пакетов опирается на wheel, pyproject.toml и декларацию зависимостей.",
    "kind": "single",
    "group": "Упаковка и CI",
    "id": "s483"
  },
  {
    "topic": "дескрипторы",
    "q": "Выбери верный вариант: data descriptor (с __set__) побеждает?",
    "options": [
      "instance __dict__",
      "всегда non-data",
      "только slots",
      "ничего"
    ],
    "answer": 0,
    "explain": "Порядок поиска атрибутов важен. Подходит ответ «instance __dict__». Дескрипторы управляют доступом к атрибутам через __get__, __set__ и __delete__.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s484"
  },
  {
    "topic": "security",
    "q": "Что такое SSRF?",
    "options": [
      "сервер ходит на внутренние URL по воле клиента",
      "XSS",
      "SQLi",
      "CSRF"
    ],
    "answer": 0,
    "explain": "Фильтруй URL. Подходит ответ «сервер ходит на внутренние URL по воле клиента». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s485"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: Флаг интерпретатора -OO?",
    "options": [
      "как -O плюс выкидывает docstrings",
      "включает JIT всегда",
      "отключает GC навсегда",
      "только Windows"
    ],
    "answer": 0,
    "explain": "Как -O плюс выкидывает docstrings. Подходит ответ «как -O плюс выкидывает docstrings». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s486"
  },
  {
    "topic": "db",
    "q": "Что такое BRIN index?",
    "options": [
      "для естественно упорядоченных больших таблиц",
      "замена BTree всегда",
      "hash only",
      "fulltext"
    ],
    "answer": 0,
    "explain": "PostgreSQL. Подходит ответ «для естественно упорядоченных больших таблиц». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s487"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: Сложность deque.popleft?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "Большая O для deque.popleft. Подходит ответ «O(1)». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s488"
  },
  {
    "topic": "design",
    "q": "Что вернёт parse, don't validate (часто)?",
    "options": [
      "парсить в богатые типы на границе",
      "валидировать везде сырые dict",
      "Any",
      "JSON forever"
    ],
    "answer": 0,
    "explain": "Typed boundaries. Подходит ответ «парсить в богатые типы на границе».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s489"
  },
  {
    "topic": "GIL",
    "q": "Выбери верный вариант: Отпускание GIL в blocking I/O?",
    "options": [
      "позволяет другим потокам идти",
      "убивает refcount",
      "отключает GC forever",
      "free-threads only"
    ],
    "answer": 0,
    "explain": "I/O bound. Подходит ответ «позволяет другим потокам идти». GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s490"
  },
  {
    "topic": "asyncio",
    "q": "Что такое datagram endpoint?",
    "options": [
      "UDP",
      "только TCP",
      "HTTP/3 synonym",
      "unix signals"
    ],
    "answer": 0,
    "explain": "Asyncio UDP. Подходит ответ «UDP». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s491"
  },
  {
    "topic": "метаклассы",
    "q": "Что такое ABCMeta + metaclass conflict?",
    "options": [
      "нужна кооперация метаклассов",
      "ABC запрещает MI",
      "type ban",
      "Protocol replaces always"
    ],
    "answer": 0,
    "explain": "Сложные иерархии. Подходит ответ «нужна кооперация метаклассов». Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "group": "Метаклассы и типы",
    "id": "s492"
  },
  {
    "topic": "security",
    "q": "Что такое pickle is not a data format for untrusted?",
    "options": [
      "да",
      "нет, безопасен как json",
      "безопасен с protocol 0",
      "безопасен в base64"
    ],
    "answer": 0,
    "explain": "Код при load. Подходит ответ «да». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s493"
  },
  {
    "topic": "python",
    "q": "В чём разница: decimal vs float для денег?",
    "options": [
      "Decimal/целые копейки",
      "float ok banking",
      "fractions mandatory",
      "int рублей без копеек always"
    ],
    "answer": 0,
    "explain": "Точность. Подходит ответ «Decimal/целые копейки».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s494"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: Повторять транзакцию до 10 раз при serialization failure?",
    "options": [
      "да, типичный паттерн retry",
      "никогда",
      "только DROP TABLE",
      "переключить на MyISAM"
    ],
    "answer": 0,
    "explain": "Код 40001 (serialization_failure) обычно обрабатывают повтором попытки. Подходит ответ «да, типичный паттерн retry».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s495"
  },
  {
    "topic": "performance",
    "q": "Что вернёт Сложность dict[key]?",
    "options": [
      "O(1) амортизированно",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "Большая O для dict[key]. Подходит ответ «O(1) амортизированно». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s496"
  },
  {
    "topic": "design",
    "q": "В чём риск Feature toggle?",
    "options": [
      "мертвый код/комбинаторный взрыв",
      "нет рисков",
      "заменяет CI",
      "types"
    ],
    "answer": 0,
    "explain": "Гигиена флагов. Подходит ответ «мертвый код/комбинаторный взрыв».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s497"
  },
  {
    "topic": "multiprocessing",
    "q": "Что такое resource_tracker?",
    "options": [
      "следит за shared ресурсами spawn",
      "GC",
      "pip",
      "typing"
    ],
    "answer": 0,
    "explain": "Утечки semaphore/shm. Подходит ответ «следит за shared ресурсами spawn».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s498"
  },
  {
    "topic": "asyncio",
    "q": "Почему блокирующий вызов в async плох?",
    "options": [
      "блокирует event loop",
      "убивает процесс",
      "ломает типы",
      "обязателен"
    ],
    "answer": 0,
    "explain": "Используйте to_thread / executors. Подходит ответ «блокирует event loop». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s499"
  },
  {
    "topic": "security",
    "q": "Что такое path traversal?",
    "options": [
      "../ выход из директории",
      "XSS",
      "CRLF",
      "GIL"
    ],
    "answer": 0,
    "explain": "Нормализуй пути. Подходит ответ «../ выход из директории». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s500"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: Для int 256: надёжно ли `a is b` при равных значениях?",
    "options": [
      "может быть True из‑за интернирования",
      "всегда True по языку",
      "всегда False по языку",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Часто один и тот же объект (intern маленьких int). Подходит ответ «может быть True из‑за интернирования».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s501"
  },
  {
    "topic": "db",
    "q": "Что такое pessimistic lock?",
    "options": [
      "блокировка на время работы",
      "только retry",
      "eventual",
      "cache"
    ],
    "answer": 0,
    "explain": "FOR UPDATE. Подходит ответ «блокировка на время работы». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s502"
  },
  {
    "topic": "performance",
    "q": "Когда имеет смысл Cython/PyO3?",
    "options": [
      "горячие CPU участки",
      "каждый CRUD",
      "логирование",
      "конфиг YAML"
    ],
    "answer": 0,
    "explain": "Нативный код для hotspots. Подходит ответ «горячие CPU участки». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s503"
  },
  {
    "topic": "patterns",
    "q": "Что такое Specification pattern?",
    "options": [
      "композиция бизнес-правил",
      "regex only",
      "JSON schema only",
      "ABC ban"
    ],
    "answer": 0,
    "explain": "Доменные предикаты. Подходит ответ «композиция бизнес-правил».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s504"
  },
  {
    "topic": "concurrency",
    "q": "Выбери верный вариант: lock-free queue в чистом Python?",
    "options": [
      "сложно/редко нужно; std queue+GIL",
      "легко и всегда быстрее",
      "stdlib lockfree",
      "asyncio Queue lockfree OS"
    ],
    "answer": 0,
    "explain": "Практичность. Подходит ответ «сложно/редко нужно; std queue+GIL». Конкурентность бывает на потоках, процессах и async — у каждого свои ограничения и цена синхронизации.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s505"
  },
  {
    "topic": "asyncio",
    "q": "Выбери верный вариант: Task cancellation должна быть?",
    "options": [
      "корректно обрабатываться в finally",
      "проигнорирована всегда",
      "мгновенный kill OS",
      "только KeyboardInterrupt"
    ],
    "answer": 0,
    "explain": "Безопасная отмена. Подходит ответ «корректно обрабатываться в finally». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "s506"
  },
  {
    "topic": "security",
    "q": "Что такое unsafe deserialization gadgets?",
    "options": [
      "цепочки для RCE при pickle/yaml",
      "только buffer overflow C",
      "XSS",
      "CSRF"
    ],
    "answer": 0,
    "explain": "Не десериализуй недоверенное. Подходит ответ «цепочки для RCE при pickle/yaml». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s507"
  },
  {
    "topic": "python",
    "q": "Почему str+= в цикле может быть ок в CPython иногда, но стиль — join?",
    "options": [
      "квадратичный риск / читаемость / портабельность",
      "join медленнее всегда",
      "+= запрещён",
      "GIL"
    ],
    "answer": 0,
    "explain": "Пиши join для надёжности. Подходит ответ «квадратичный риск / читаемость / портабельность».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s508"
  },
  {
    "topic": "distributed",
    "q": "В чём риск heartbeat timeout ~50ms слишком маленький?",
    "options": [
      "ложные failover при GC/сети",
      "только быстрее recovery без минусов",
      "не влияет",
      "ломает TLS"
    ],
    "answer": 0,
    "explain": "Баланс sensitivity vs stability. Подходит ответ «ложные failover при GC/сети». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s509"
  },
  {
    "topic": "import",
    "q": "Что такое frozen modules?",
    "options": [
      "встроенные в бинарник",
      "pip freeze",
      "venv freeze",
      "docker layer"
    ],
    "answer": 0,
    "explain": "Startup. Подходит ответ «встроенные в бинарник».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s510"
  },
  {
    "topic": "architecture",
    "q": "Выбери верный вариант: Паттерн Saga?",
    "options": [
      "распределённый процесс + компенсации",
      "удалить тесты",
      "только monolith ban",
      "GIL pattern"
    ],
    "answer": 0,
    "explain": "Распределённый процесс + компенсации. Подходит ответ «распределённый процесс + компенсации». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s511"
  },
  {
    "topic": "fork",
    "q": "Выбери верный вариант: posix_spawn иногда предпочтительнее fork?",
    "options": [
      "безопасность/скорость в ряде кейсов",
      "всегда хуже",
      "Windows only name",
      "GIL"
    ],
    "answer": 0,
    "explain": "Создание процессов. Подходит ответ «безопасность/скорость в ряде кейсов».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "s512"
  },
  {
    "topic": "asyncio",
    "q": "Почему `time.sleep` внутри корутины — проблема, а `asyncio.sleep` — нет?",
    "options": [
      "time.sleep блокирует поток event loop; asyncio.sleep отдаёт управление loop",
      "asyncio.sleep быстрее на CPU",
      "time.sleep запрещён синтаксисом",
      "разницы нет"
    ],
    "answer": 0,
    "explain": "Один поток loop: любой блокирующий sync (sleep, тяжёлый CPU, sync HTTP) останавливает все задачи. Вынос: asyncio.to_thread / run_in_executor, нативные async-драйверы. Structured concurrency (TaskGroup) отменяет детей при ошибке — меньше «осиротевших» задач.",
    "kind": "single",
    "tags": [
      "asyncio"
    ],
    "difficulty": "senior",
    "group": "Asyncio",
    "id": "s513"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: SSRF (API) кратко?",
    "options": [
      "сервер ходит на внутренние URL по указке",
      "ускорение Python",
      "тип в typing",
      "только DevOps"
    ],
    "answer": 0,
    "explain": "Сервер ходит на внутренние URL по указке. Подходит ответ «сервер ходит на внутренние URL по указке».",
    "kind": "single",
    "group": "Безопасность",
    "id": "s514"
  },
  {
    "topic": "память",
    "q": "Что вернёт gc.get_threshold()[1] влияет на?",
    "options": [
      "частоту/пороги сбора поколений GC",
      "GIL timeout",
      "TCP window",
      "pip cache"
    ],
    "answer": 0,
    "explain": "Пороги генерационного GC. Подходит ответ «частоту/пороги сбора поколений GC». Память в CPython устроена через подсчёт ссылок, циклический GC, buffer protocol и иногда __slots__.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s515"
  },
  {
    "topic": "db",
    "q": "Какой типичный симптом pool_size=5 исчерпан —?",
    "options": [
      "запросы ждут коннект / таймауты",
      "CPU 100% всегда",
      "только disk full",
      "GIL deadlock only"
    ],
    "answer": 0,
    "explain": "Утечки, длинные транзакции, мало пула. Подходит ответ «запросы ждут коннект / таймауты». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s516"
  },
  {
    "topic": "performance",
    "q": "Что такое false sharing лечится?",
    "options": [
      "выравниванием/паддингом данных",
      "GIL off",
      "больше threads всегда",
      "async"
    ],
    "answer": 0,
    "explain": "Кэш-линии. Подходит ответ «выравниванием/паддингом данных». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s517"
  },
  {
    "topic": "patterns",
    "q": "Что такое Стратегия естественно выражается?",
    "options": [
      "функциями/callable первого класса",
      "только наследованием",
      "GIL strategies",
      "enum switch C-style обязателен"
    ],
    "answer": 0,
    "explain": "First-class functions. Подходит ответ «функциями/callable первого класса».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s518"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: Для секретов в логах важно?",
    "options": [
      "редактирование / не логировать",
      "print всегда",
      "pickle secrets",
      "держать в URL"
    ],
    "answer": 0,
    "explain": "Leak prevention. Подходит ответ «редактирование / не логировать». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s519"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: Для int 1: надёжно ли `a is b` при равных значениях?",
    "options": [
      "может быть True из‑за интернирования",
      "всегда True по языку",
      "всегда False по языку",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Часто один и тот же объект (intern маленьких int). Подходит ответ «может быть True из‑за интернирования».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s520"
  },
  {
    "topic": "cache",
    "q": "Что такое stampede lock per key?",
    "options": [
      "один пересчёт",
      "все считают",
      "TTL=0",
      "no cache"
    ],
    "answer": 0,
    "explain": "Mutex/singleflight. Подходит ответ «один пересчёт». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s521"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: polymorphic call sites вредят specialization?",
    "options": [
      "да, разные типы, а затем deopt",
      "нет, только помогают",
      "GIL",
      "typing ignore"
    ],
    "answer": 0,
    "explain": "Стабильность типов. Подходит ответ «да, разные типы, а затем deopt». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s522"
  },
  {
    "topic": "cohesion",
    "q": "Выбери верный вариант: Пакет billing/ с invoice, payment, refund в одном модуле — хорошая?",
    "options": [
      "связность по домену",
      "связанность с UI",
      "нарушение DRY",
      "нарушение LSP"
    ],
    "answer": 0,
    "explain": "Одна предметная область — высокая cohesion. Подходит ответ «связность по домену».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s523"
  },
  {
    "topic": "security",
    "q": "Выбери все опасные практики?",
    "options": [
      "pickle.loads из недоверенного источника",
      "yaml.load без SafeLoader на пользовательском вводе",
      "subprocess с shell=True и неэкранированным вводом",
      "использование secrets.compare_digest для сравнения токенов"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explain": "Compare_digest как раз безопаснее обычного == для секретов (timing-safe). Остальное — классические RCE/injection векторы. Верными здесь будут пункты: «pickle.loads из недоверенного источника»; «yaml.load без SafeLoader на пользовательском вводе»; «subprocess с shell=True и неэкранированным вводом».",
    "kind": "multi",
    "tags": [
      "security"
    ],
    "difficulty": "senior",
    "group": "Безопасность",
    "id": "s524"
  },
  {
    "topic": "CPython",
    "q": "Что показывает dis.dis(f)?",
    "options": [
      "байткод функции",
      "AST",
      "машинный код CPU",
      "GIL state"
    ],
    "answer": 0,
    "explain": "Дизассемблер байткода. Подходит ответ «байткод функции». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s525"
  },
  {
    "topic": "cache",
    "q": "Выбери верный вариант: hot key split на 16 шардов идея?",
    "options": [
      "размазать нагрузку популярного ключа",
      "уменьшить TTL до 0",
      "один box сильнее",
      "запретить cache"
    ],
    "answer": 0,
    "explain": "Перекос ключей. Подходит ответ «размазать нагрузку популярного ключа». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s526"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: Сложность heapq.heappop?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "Большая O: heapq.heappop. Подходит ответ «O(log n)». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s527"
  },
  {
    "topic": "architecture",
    "q": "Что вернёт turbo monolith / modular?",
    "options": [
      "высокая модульность без сети",
      "microservices or death",
      "shared DB free for all",
      "BFF ban"
    ],
    "answer": 0,
    "explain": "Командный масштаб. Подходит ответ «высокая модульность без сети». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s528"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: CSP nonce для скриптов?",
    "options": [
      "разрешает конкретные inline",
      "отключает JS",
      "заменяет XSS filters server only",
      "CORS"
    ],
    "answer": 0,
    "explain": "Современный XSS defense. Подходит ответ «разрешает конкретные inline». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s529"
  },
  {
    "topic": "память",
    "q": "Что вернёт gc.get_threshold()[2] влияет на?",
    "options": [
      "частоту/пороги сбора поколений GC",
      "GIL timeout",
      "TCP window",
      "pip cache"
    ],
    "answer": 0,
    "explain": "Пороги генерационного GC. Подходит ответ «частоту/пороги сбора поколений GC». Память в CPython устроена через подсчёт ссылок, циклический GC, buffer protocol и иногда __slots__.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s530"
  },
  {
    "topic": "cache",
    "q": "Что вернёт soft TTL ≈15s + background refresh идея?",
    "options": [
      "отдавать stale и обновлять асинхронно",
      "удалить ключ навсегда",
      "удвоить RAM",
      "отключить app"
    ],
    "answer": 0,
    "explain": "Против stampede. Подходит ответ «отдавать stale и обновлять асинхронно». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s531"
  },
  {
    "topic": "import",
    "q": "Выбери верный вариант: namespace packages без __init__?",
    "options": [
      "PEP 420",
      "запрещены 3.x",
      "только src layout poetry",
      "zip only"
    ],
    "answer": 0,
    "explain": "Разнесённые пакеты. Подходит ответ «PEP 420».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s532"
  },
  {
    "topic": "architecture",
    "q": "Выбери верный вариант: Паттерн Sidecar?",
    "options": [
      "вспомогательный процесс рядом с сервисом",
      "удалить тесты",
      "только monolith ban",
      "GIL pattern"
    ],
    "answer": 0,
    "explain": "Вспомогательный процесс рядом с сервисом. Подходит ответ «вспомогательный процесс рядом с сервисом».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s533"
  },
  {
    "topic": "security",
    "q": "В чём разница: HTML escape vs URL encode?",
    "options": [
      "разные контексты экранирования",
      "взаимозаменяемы",
      "одно enough XSS",
      "SQL escape same"
    ],
    "answer": 0,
    "explain": "Контекстные энкодеры. Подходит ответ «разные контексты экранирования». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s534"
  },
  {
    "topic": "память",
    "q": "Выбери верный вариант: object travels through generations если?",
    "options": [
      "выживает сборам",
      "сразу old",
      "never",
      "только slots"
    ],
    "answer": 0,
    "explain": "GC ages. Подходит ответ «выживает сборам». Память в CPython устроена через подсчёт ссылок, циклический GC, buffer protocol и иногда __slots__.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s535"
  },
  {
    "topic": "db",
    "q": "Какой типичный симптом N+1: 1 запрос списка + 1000 связанных —?",
    "options": [
      "лишние round-trip в БД (ORM lazy)",
      "слишком большой JOIN всегда",
      "только отсутствие индекса PK",
      "GIL"
    ],
    "answer": 0,
    "explain": "Лечится eager/join/IN. Подходит ответ «лишние round-trip в БД (ORM lazy)». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s536"
  },
  {
    "topic": "performance",
    "q": "Что такое branch misprediction в C hot loops?",
    "options": [
      "важно для native расширений",
      "для Python bytecode тот же asm level всегда",
      "GIL predicts",
      "async"
    ],
    "answer": 0,
    "explain": "Низкий уровень. Подходит ответ «важно для native расширений». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s537"
  },
  {
    "topic": "architecture",
    "q": "Что такое CQRS идея?",
    "options": [
      "разделить модели/пути чтения и записи",
      "запретить SQL",
      "только microservices",
      "убрать БД"
    ],
    "answer": 0,
    "explain": "Сложные домены, разные нагрузки. Подходит ответ «разделить модели/пути чтения и записи». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s538"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: ast.literal_eval безопаснее eval потому что?",
    "options": [
      "только литералы, не вызовы",
      "быстрее",
      "одинаково опасен",
      "запрещён"
    ],
    "answer": 0,
    "explain": "Ограниченный парсер. Подходит ответ «только литералы, не вызовы». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s539"
  },
  {
    "topic": "CPython",
    "q": "Что делает LOAD_FAST в bytecode?",
    "options": [
      "загрузка локальной переменной",
      "global",
      "attr",
      "const int always"
    ],
    "answer": 0,
    "explain": "Быстрый доступ по индексу locals. Подходит ответ «загрузка локальной переменной». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s540"
  },
  {
    "topic": "events",
    "q": "Что такое CDC?",
    "options": [
      "захват изменений БД",
      "CDN",
      "CPU counter",
      "GC dump"
    ],
    "answer": 0,
    "explain": "Debezium и др. Подходит ответ «захват изменений БД».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s541"
  },
  {
    "topic": "import",
    "q": "Что такое lazy loaders tradeoffs?",
    "options": [
      "старт быстрее, ошибки позже",
      "всегда лучше",
      "запрещены",
      "typing only"
    ],
    "answer": 0,
    "explain": "Диагностика сложнее. Подходит ответ «старт быстрее, ошибки позже».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s542"
  },
  {
    "topic": "architecture",
    "q": "Что такое modular monolith?",
    "options": [
      "модули+границы без распределёнки сразу",
      "microservices mandatory",
      "big ball",
      "shared DB unrestricted ideal"
    ],
    "answer": 0,
    "explain": "Прагматичный старт. Подходит ответ «модули+границы без распределёнки сразу». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s543"
  },
  {
    "topic": "security",
    "q": "В чём риск timing attack при сравнении паролей через ==?",
    "options": [
      "hmac.compare_digest / secrets.compare_digest",
      "обычный ==",
      "len() check only",
      "hash() =="
    ],
    "answer": 0,
    "explain": "Константное по времени сравнение. Подходит ответ «hmac.compare_digest / secrets.compare_digest». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s544"
  },
  {
    "topic": "память",
    "q": "В чём разница: resident vs virtual memory?",
    "options": [
      "RSS vs VSIZE разные метрики",
      "одно и то же",
      "только swap",
      "только arena"
    ],
    "answer": 0,
    "explain": "Интерпретация top/ps. Подходит ответ «RSS vs VSIZE разные метрики». Память в CPython устроена через подсчёт ссылок, циклический GC, buffer protocol и иногда __slots__.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s545"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: READ UNCOMMITTED и аномалия «write skew»?",
    "options": [
      "зависит от СУБД — сверяй документацию/стандарт",
      "всегда разрешена везде",
      "всегда запрещена везде",
      "только в SQLite"
    ],
    "answer": 0,
    "explain": "Не путай SQL-standard и реализацию. Подходит ответ «зависит от СУБД — сверяй документацию/стандарт».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s546"
  },
  {
    "topic": "import",
    "q": "Что означает find_spec None?",
    "options": [
      "модуль не найден",
      "found",
      "cached",
      "namespace always"
    ],
    "answer": 0,
    "explain": "Проверка опциональных deps. Подходит ответ «модуль не найден».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s547"
  },
  {
    "topic": "architecture",
    "q": "Что вернёт hexagonal / ports & adapters?",
    "options": [
      "ядро не зависит от деталей UI/БД",
      "всё в одном контроллере",
      "только monolith ban",
      "GIL architecture"
    ],
    "answer": 0,
    "explain": "Тестируемость и замена адаптеров. Подходит ответ «ядро не зависит от деталей UI/БД». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s548"
  },
  {
    "topic": "security",
    "q": "Что такое marshmallow/pydantic на границе?",
    "options": [
      "валидация не доверенного ввода",
      "замена firewall",
      "замена auth",
      "pickle safe"
    ],
    "answer": 0,
    "explain": "Parse don't trust. Подходит ответ «валидация не доверенного ввода». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s549"
  },
  {
    "topic": "CPython",
    "q": "Что вернёт PEP 523 / frame evaluation API?",
    "options": [
      "хуки для JIT/отладчиков",
      "удаление frames",
      "GIL API",
      "typing"
    ],
    "answer": 0,
    "explain": "Расширяемость VM. Подходит ответ «хуки для JIT/отладчиков». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s550"
  },
  {
    "topic": "db",
    "q": "Что выведет код?",
    "options": [
      "цикл запросов по связям",
      "один JOIN",
      "VACUUM",
      "index only"
    ],
    "answer": 0,
    "explain": "ORM классика. Подходит ответ «цикл запросов по связям». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "code": "for u in users:\n    print(u.orders)  # lazy?",
    "group": "Данные и распределёнка",
    "id": "s551"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: Сложность bisect.bisect_left?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "Большая O для bisect.bisect_left. Подходит ответ «O(log n)». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s552"
  },
  {
    "topic": "architecture",
    "q": "Выбери верный вариант: Паттерн Strangler?",
    "options": [
      "постепенная замена легаси",
      "удалить тесты",
      "только monolith ban",
      "GIL pattern"
    ],
    "answer": 0,
    "explain": "Постепенная замена легаси. Подходит ответ «постепенная замена легаси». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s553"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: xml.etree без безопасных настроек?",
    "options": [
      "XXE/entity риски на некоторых парсерах/истории",
      "всегда safe",
      "только JSON",
      "YAML"
    ],
    "answer": 0,
    "explain": "Defusedxml и т.п. Подходит ответ «XXE/entity риски на некоторых парсерах/истории». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s554"
  },
  {
    "topic": "python",
    "q": "Что такое dict resize cost?",
    "options": [
      "амортизированный O(1) insert",
      "каждый insert O(n) строго",
      "never resizes",
      "tree rebalance"
    ],
    "answer": 0,
    "explain": "Амортизация. Подходит ответ «амортизированный O(1) insert».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s555"
  },
  {
    "topic": "cache",
    "q": "Зачем нужен negative cache TTL=6s?",
    "options": [
      "не долбить origin на повторных miss/404",
      "хранить пароли",
      "увеличить hit forever",
      "отключить Redis"
    ],
    "answer": 0,
    "explain": "Короткий TTL на отсутствие. Подходит ответ «не долбить origin на повторных miss/404». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s556"
  },
  {
    "topic": "pickle",
    "q": "Что позволяет reduce протокол?",
    "options": [
      "кастомную сериализацию",
      "ускорить JSON",
      "убрать security risk",
      "GIL"
    ],
    "answer": 0,
    "explain": "__reduce__. Подходит ответ «кастомную сериализацию».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s557"
  },
  {
    "topic": "SOLID",
    "q": "Что означает Single Responsibility Principle (SRP)?",
    "options": [
      "у класса/модуля одна причина для изменения",
      "один метод на класс",
      "один файл на репозиторий",
      "один разработчик на модуль"
    ],
    "answer": 0,
    "explain": "SRP про зону ответственности, не про количество методов. Подходит ответ «у класса/модуля одна причина для изменения».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s558"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: Десериализация через marshal из недоверенного источника?",
    "options": [
      "риск RCE / выполнения кода — нельзя",
      "безопасно как json",
      "только DoS",
      "ok за HTTPS"
    ],
    "answer": 0,
    "explain": "Не доверяй бинарным/пайтон-десериализаторам. Подходит ответ «риск RCE / выполнения кода — нельзя». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s559"
  },
  {
    "topic": "память",
    "q": "Что такое shared pages after fork until write?",
    "options": [
      "COW",
      "full copy immediate always on mac spawn?",
      "depends start method",
      "нет COW на linux fork"
    ],
    "answer": 0,
    "explain": "Уточняй платформу/метод. Подходит ответ «COW». Память в CPython устроена через подсчёт ссылок, циклический GC, buffer protocol и иногда __slots__.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s560"
  },
  {
    "topic": "serialization",
    "q": "В чём разница: msgpack/protobuf vs json?",
    "options": [
      "компактнее/схема; json человекочитаем",
      "json всегда быстрее binary",
      "protobuf текстовый",
      "msgpack = pickle safe"
    ],
    "answer": 0,
    "explain": "Выбор по контракту и экосистеме. Подходит ответ «компактнее/схема; json человекочитаем».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s561"
  },
  {
    "topic": "performance",
    "q": "Что такое allocation sampling?",
    "options": [
      "профиль памяти",
      "CPU only",
      "network",
      "disk SMART"
    ],
    "answer": 0,
    "explain": "Memray/tracemalloc. Подходит ответ «профиль памяти». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s562"
  },
  {
    "topic": "patterns",
    "q": "Что такое Hexagonal Architecture порты?",
    "options": [
      "интерфейсы, через которые ядро общается с внешним миром",
      "TCP ports only",
      "Docker EXPOSE",
      "ORM columns"
    ],
    "answer": 0,
    "explain": "Адаптеры реализуют порты для БД, HTTP, CLI. Подходит ответ «интерфейсы, через которые ядро общается с внешним миром».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s563"
  },
  {
    "topic": "security",
    "q": "В чём риск pickle.loads из недоверенного источника?",
    "options": [
      "риск RCE / выполнения кода — нельзя",
      "безопасно как json",
      "только DoS",
      "ok за HTTPS"
    ],
    "answer": 0,
    "explain": "Не доверяй бинарным/пайтон-десериализаторам. Подходит ответ «риск RCE / выполнения кода — нельзя». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s564"
  },
  {
    "topic": "память",
    "q": "Что такое pymalloc?",
    "options": [
      "аллокатор мелких объектов CPython",
      "OS malloc только",
      "GPU heap",
      "swap file"
    ],
    "answer": 0,
    "explain": "Арена/пулы для small allocs. Подходит ответ «аллокатор мелких объектов CPython». Память в CPython устроена через подсчёт ссылок, циклический GC, buffer protocol и иногда __slots__.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s565"
  },
  {
    "topic": "distributed",
    "q": "Выбери верный вариант: Кворум в Raft/Consul-подобном кластере из 5 узлов?",
    "options": [
      "большинство: 3",
      "5",
      "1",
      "4"
    ],
    "answer": 0,
    "explain": "Большинство для выбора лидера/коммита. Подходит ответ «большинство: 3». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s566"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: Сложность sorted(list)?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(n²) всегда"
    ],
    "answer": 0,
    "explain": "Большая O для sorted(list). Подходит ответ «O(n log n)». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s567"
  },
  {
    "topic": "SOLID",
    "q": "Что такое LSP важен?",
    "options": [
      "полиморфизме и подстановке в тестах/клиентах",
      "только при import",
      "только в async",
      "сериализации JSON"
    ],
    "answer": 0,
    "explain": "Клиент кода с Base не должен знать про подкласс. Подходит ответ «полиморфизме и подстановке в тестах/клиентах».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s568"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: CSRF (API) кратко?",
    "options": [
      "запрос от имени пользователя без его намерения",
      "ускорение Python",
      "тип в typing",
      "только DevOps"
    ],
    "answer": 0,
    "explain": "Запрос от имени пользователя без его намерения. Подходит ответ «запрос от имени пользователя без его намерения».",
    "kind": "single",
    "group": "Безопасность",
    "id": "s569"
  },
  {
    "topic": "python",
    "q": "Выбери верный вариант: сумма range больших — лучше?",
    "options": [
      "арифметика ряда / формула",
      "list materialize always",
      "numpy mandatory",
      "decimal"
    ],
    "answer": 0,
    "explain": "Не строй гигантский list. Подходит ответ «арифметика ряда / формула».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s570"
  },
  {
    "topic": "cache",
    "q": "Выбери верный вариант: hot key split на 4 шардов идея?",
    "options": [
      "размазать нагрузку популярного ключа",
      "уменьшить TTL до 0",
      "один box сильнее",
      "запретить cache"
    ],
    "answer": 0,
    "explain": "Перекос ключей. Подходит ответ «размазать нагрузку популярного ключа». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s571"
  },
  {
    "topic": "pickle",
    "q": "Что такое reduce_ex protocol?",
    "options": [
      "версия протокола сериализации",
      "AES",
      "zlib only",
      "json"
    ],
    "answer": 0,
    "explain": "__reduce_ex__. Подходит ответ «версия протокола сериализации».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s572"
  },
  {
    "topic": "architecture",
    "q": "Что такое BFF pattern?",
    "options": [
      "backend for frontend",
      "bus for files",
      "binary fast format",
      "bulkhead"
    ],
    "answer": 0,
    "explain": "Адаптация API под клиент. Подходит ответ «backend for frontend». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s573"
  },
  {
    "topic": "security",
    "q": "Что такое yaml.load без SafeLoader?",
    "options": [
      "может выполнить код (устар. PyYAML)",
      "безопасен всегда",
      "только JSON",
      "не существует"
    ],
    "answer": 0,
    "explain": "Safe_load / SafeLoader. Подходит ответ «может выполнить код (устар. PyYAML)». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s574"
  },
  {
    "topic": "память",
    "q": "Что вернёт gc.get_threshold()[0] влияет на?",
    "options": [
      "частоту/пороги сбора поколений GC",
      "GIL timeout",
      "TCP window",
      "pip cache"
    ],
    "answer": 0,
    "explain": "Пороги генерационного GC. Подходит ответ «частоту/пороги сбора поколений GC». Память в CPython устроена через подсчёт ссылок, циклический GC, buffer protocol и иногда __slots__.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s575"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: READ COMMITTED не защищает от?",
    "options": [
      "части anomalies (зависит от СУБД; phantom и т.д.)",
      "всего всегда",
      "только DDL",
      "только disk full"
    ],
    "answer": 0,
    "explain": "Знай модель изоляции своей БД. Подходит ответ «части anomalies (зависит от СУБД; phantom и т.д.)». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s576"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: n=100: что важнее микрооптимизаций f-string?",
    "options": [
      "алгоритм/I/O/аллокации — профилируй",
      "всегда переписать на C",
      "отключить GC",
      "больше print"
    ],
    "answer": 0,
    "explain": "Сначала измерь bottleneck. Подходит ответ «алгоритм/I/O/аллокации — профилируй». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s577"
  },
  {
    "topic": "Zen",
    "q": "Что такое Special cases aren't special enough?",
    "options": [
      "избегать слишком особых веток",
      "писать только special",
      "GIL poem",
      "PEP 8 quote"
    ],
    "answer": 0,
    "explain": "Zen. Подходит ответ «избегать слишком особых веток».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s578"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: Десериализация через yaml.load (unsafe) из недоверенного источника?",
    "options": [
      "риск RCE / выполнения кода — нельзя",
      "безопасно как json",
      "только DoS",
      "ok за HTTPS"
    ],
    "answer": 0,
    "explain": "Не доверяй бинарным/пайтон-десериализаторам. Подходит ответ «риск RCE / выполнения кода — нельзя». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s579"
  },
  {
    "topic": "python",
    "q": "Что такое str immutable ⇒ slice?",
    "options": [
      "часто новая строка (с оговорками interning/пусто)",
      "view всегда",
      "bytes shared always",
      "mmap"
    ],
    "answer": 0,
    "explain": "Копии. Подходит ответ «часто новая строка (с оговорками interning/пусто)».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s580"
  },
  {
    "topic": "cache",
    "q": "Что вернёт soft TTL ≈3600s + background refresh идея?",
    "options": [
      "отдавать stale и обновлять асинхронно",
      "удалить ключ навсегда",
      "удвоить RAM",
      "отключить app"
    ],
    "answer": 0,
    "explain": "Против stampede. Подходит ответ «отдавать stale и обновлять асинхронно». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s581"
  },
  {
    "topic": "performance",
    "q": "Почему «переписать на async / убрать GIL» — плохой первый шаг оптимизации?",
    "options": [
      "сначала профилируй: узкое место часто I/O, алгоритм O(n²) или лишние копии, а не «мало потоков»",
      "профилирование запрещено в проде",
      "GIL всегда главный bottleneck",
      "async всегда быстрее sync"
    ],
    "answer": 0,
    "explain": "Инструменты: cProfile/py-spy/scalene, tracemalloc, логи latency-гистограмм. Частые wins: алгоритмы, кэш, batching, меньше сериализации, connection pool, правильные индексы БД. Async и free-threading — после того, как понятна модель нагрузки.",
    "kind": "single",
    "tags": [
      "performance"
    ],
    "difficulty": "senior",
    "group": "Stdlib и производительность",
    "id": "s582"
  },
  {
    "topic": "SOLID",
    "q": "Square наследует Rectangle, но set_width ломает инвариант квадрата — что нарушено?",
    "options": [
      "LSP",
      "SRP",
      "DRY",
      "KISS"
    ],
    "answer": 0,
    "explain": "Классический пример нарушения подстановки Лисков. Подходит ответ «LSP». SOLID — набор принципов объектного дизайна; в Python их обычно выражают через протоколы, ABC и композицию.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s583"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: Антипаттерн: redirect=user_url?",
    "options": [
      "инъекции / path traversal / open redirect — валидируй и параметризуй",
      "ускоряет код",
      "требуется PEP 8",
      "безопасно в FastAPI всегда"
    ],
    "answer": 0,
    "explain": "Классика AppSec. Подходит ответ «инъекции / path traversal / open redirect — валидируй и параметризуй».",
    "kind": "single",
    "group": "Безопасность",
    "id": "s584"
  },
  {
    "topic": "python",
    "q": "Почему dict быстрее list для поиска ключа?",
    "options": [
      "средний O(1) hash",
      "sorted binary всегда",
      "GIL",
      "intering only"
    ],
    "answer": 0,
    "explain": "Хеш-таблица. Подходит ответ «средний O(1) hash».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s585"
  },
  {
    "topic": "distributed",
    "q": "Что такое «circuit breaker»?",
    "options": [
      "временно не звать падающий dependency",
      "только про GIL",
      "только SQL index",
      "HTTP 200 always"
    ],
    "answer": 0,
    "explain": "Временно не звать падающий dependency. Подходит ответ «временно не звать падающий dependency». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s586"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: Сложность list.pop()?",
    "options": [
      "O(1) с конца",
      "O(n) с конца",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "Большая O: list.pop(). Подходит ответ «O(1) с конца». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s587"
  },
  {
    "topic": "architecture",
    "q": "В чём разница: control plane vs data plane?",
    "options": [
      "управление vs трафик данных",
      "frontend/backend",
      "ETL/ELT",
      "CQRS exact synonym"
    ],
    "answer": 0,
    "explain": "Инфра/сервисы. Подходит ответ «управление vs трафик данных». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s588"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: IDOR (web) кратко?",
    "options": [
      "доступ к чужим объектам по угадываемому id",
      "ускорение Python",
      "тип в typing",
      "только DevOps"
    ],
    "answer": 0,
    "explain": "Доступ к чужим объектам по угадываемому id. Подходит ответ «доступ к чужим объектам по угадываемому id».",
    "kind": "single",
    "group": "Безопасность",
    "id": "s589"
  },
  {
    "topic": "CPython",
    "q": "Что такое pymalloc arenas в C-API CPython?",
    "options": [
      "пулы мелких аллокаций",
      "mmap файлов пользователя",
      "GPU heap",
      "JVM"
    ],
    "answer": 0,
    "explain": "Объектный аллокатор. Подходит ответ «пулы мелких аллокаций». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s590"
  },
  {
    "topic": "db",
    "q": "Зачем нужен Connection pool?",
    "options": [
      "переиспользовать соединения",
      "ускорить JSON",
      "убрать индексы",
      "заменить ORM"
    ],
    "answer": 0,
    "explain": "Дорогой handshake. Подходит ответ «переиспользовать соединения». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s591"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: Сложность set.add?",
    "options": [
      "O(1) амортизированно",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "Большая O для set.add. Подходит ответ «O(1) амортизированно». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s592"
  },
  {
    "topic": "design",
    "q": "В чём риск feature flag?",
    "options": [
      "мертвый код, комбинаторный взрыв состояний",
      "только ускорение",
      "бесплатная A/B без цены",
      "безопасность always"
    ],
    "answer": 0,
    "explain": "Нужны TTL флагов и уборка. Подходит ответ «мертвый код, комбинаторный взрыв состояний».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s593"
  },
  {
    "topic": "security",
    "q": "Что такое mass assignment?",
    "options": [
      "лишние поля во входной модели",
      "XSS",
      "SSRF",
      "CSRF"
    ],
    "answer": 0,
    "explain": "Явные allowlists полей. Подходит ответ «лишние поля во входной модели». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s594"
  },
  {
    "topic": "байткод",
    "q": "Выбери верный вариант: .compile / ast.parse связаны с?",
    "options": [
      "компиляцией в code object",
      "сетевым RPC",
      "SQL",
      "GIL"
    ],
    "answer": 0,
    "explain": "Фронтенд интерпретатора. Подходит ответ «компиляцией в code object».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s595"
  },
  {
    "topic": "db",
    "q": "Какой типичный симптом N+1: 1 запрос списка + 1 связанных —?",
    "options": [
      "лишние round-trip в БД (ORM lazy)",
      "слишком большой JOIN всегда",
      "только отсутствие индекса PK",
      "GIL"
    ],
    "answer": 0,
    "explain": "Лечится eager/join/IN. Подходит ответ «лишние round-trip в БД (ORM lazy)». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s596"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: Сложность ''.join(parts)?",
    "options": [
      "O(n)",
      "O(n²)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explain": "Большая O для ''.join(parts). Подходит ответ «O(n)». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s597"
  },
  {
    "topic": "architecture",
    "q": "Что вернёт event-carried state transfer?",
    "options": [
      "событие несёт данные, меньше follow-up reads",
      "только id ссылки always",
      "RPC",
      "cron"
    ],
    "answer": 0,
    "explain": "Связанность сервисов. Подходит ответ «событие несёт данные, меньше follow-up reads». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s598"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: path traversal (web) кратко?",
    "options": [
      "доступ к файлам через ../",
      "ускорение Python",
      "тип в typing",
      "только DevOps"
    ],
    "answer": 0,
    "explain": "Доступ к файлам через ../. Подходит ответ «доступ к файлам через ../». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s599"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: Для int 0: надёжно ли `a is b` при равных значениях?",
    "options": [
      "может быть True из‑за интернирования",
      "всегда True по языку",
      "всегда False по языку",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Часто один и тот же объект (intern маленьких int). Подходит ответ «может быть True из‑за интернирования».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s600"
  },
  {
    "topic": "distributed",
    "q": "Что такое «bulkhead»?",
    "options": [
      "изоляция пулов/ресурсов по частям системы",
      "только про GIL",
      "только SQL index",
      "HTTP 200 always"
    ],
    "answer": 0,
    "explain": "Изоляция пулов/ресурсов по частям системы. Подходит ответ «изоляция пулов/ресурсов по частям системы».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s601"
  },
  {
    "topic": "performance",
    "q": "Что такое COW после fork?",
    "options": [
      "страницы копируются при записи",
      "полное копирование сразу always",
      "shared forever writable without cost",
      "GIL pages"
    ],
    "answer": 0,
    "explain": "Gc.freeze помогает. Подходит ответ «страницы копируются при записи». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s602"
  },
  {
    "topic": "SOLID",
    "q": "Выбери верный вариант: Новый способ оплаты добавляют новым классом PaymentProvider — ближе к?",
    "options": [
      "OCP",
      "нарушению ISP",
      "LSP",
      "YAGNI"
    ],
    "answer": 0,
    "explain": "Расширение без правки старого кода оплаты. Подходит ответ «OCP». SOLID — набор принципов объектного дизайна; в Python их обычно выражают через протоколы, ABC и композицию.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s603"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: CSRF (web) кратко?",
    "options": [
      "запрос от имени пользователя без его намерения",
      "ускорение Python",
      "тип в typing",
      "только DevOps"
    ],
    "answer": 0,
    "explain": "Запрос от имени пользователя без его намерения. Подходит ответ «запрос от имени пользователя без его намерения».",
    "kind": "single",
    "group": "Безопасность",
    "id": "s604"
  },
  {
    "topic": "байткод",
    "q": "Что вернёт CACHE / specialized opcodes в 3.11+?",
    "options": [
      "ускоряют горячие пути",
      "меняют синтаксис языка",
      "удаляют exceptions",
      "заменяют AST"
    ],
    "answer": 0,
    "explain": "Adaptive interpreter. Подходит ответ «ускоряют горячие пути».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s605"
  },
  {
    "topic": "caching",
    "q": "Что такое request coalescing?",
    "options": [
      "один промах на ключ",
      "TTL=0",
      "LRU off",
      "write-only"
    ],
    "answer": 0,
    "explain": "Анти-стампид. Подходит ответ «один промах на ключ».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s606"
  },
  {
    "topic": "performance",
    "q": "когда __slots__ реально помогает?",
    "options": [
      "много мелких объектов с фиксированными полями",
      "на одном singleton",
      "всегда на любом классе",
      "только dataclasses without fields"
    ],
    "answer": 0,
    "explain": "Меньше памяти на __dict__. Подходит ответ «много мелких объектов с фиксированными полями». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s607"
  },
  {
    "topic": "принципы",
    "q": "Чем помогает Unit-тесты мокают Repository через Protocol —?",
    "options": [
      "DIP и тестируемость",
      "только GIL",
      "только pickle",
      "Zen"
    ],
    "answer": 0,
    "explain": "Зависимость от абстракции упрощает подмену в тестах. Подходит ответ «DIP и тестируемость».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s608"
  },
  {
    "topic": "security",
    "q": "Почему pickle/yaml.load/unsafe deserialize опасны на недоверенном вводе?",
    "options": [
      "могут сконструировать объекты и выполнить код при десериализации (RCE gadgets)",
      "только занимают много памяти",
      "запрещены PEP 8",
      "работают только на Windows"
    ],
    "answer": 0,
    "explain": "Не десериализуй недоверенное бинарное/YAML/JSON-pickle. Для данных — json + явная схема (pydantic). Для YAML — safe_load. Секреты не логируй; сравнивай токены через secrets.compare_digest. SSRF: не давай пользователю выбирать URL к metadata IP (169.254.169.254) без allowlist.",
    "kind": "single",
    "tags": [
      "security"
    ],
    "difficulty": "senior",
    "group": "Безопасность",
    "id": "s609"
  },
  {
    "topic": "байткод",
    "q": "Что такое RETURN_GENERATOR?",
    "options": [
      "создание генератора из frame",
      "async only",
      "return value ordinary",
      "import"
    ],
    "answer": 0,
    "explain": "Детали компилятора. Подходит ответ «создание генератора из frame».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s610"
  },
  {
    "topic": "cache",
    "q": "Что такое TTL jitter?",
    "options": [
      "размазывает истечения",
      "увеличивает stampede",
      "отключает LRU",
      "шифрует"
    ],
    "answer": 0,
    "explain": "Анти-стампид. Подходит ответ «размазывает истечения». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s611"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: n=10: что важнее микрооптимизаций f-string?",
    "options": [
      "алгоритм/I/O/аллокации — профилируй",
      "всегда переписать на C",
      "отключить GC",
      "больше print"
    ],
    "answer": 0,
    "explain": "Сначала измерь bottleneck. Подходит ответ «алгоритм/I/O/аллокации — профилируй». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s612"
  },
  {
    "topic": "design",
    "q": "Что вернёт ACL anti-corruption?",
    "options": [
      "перевод внешней модели",
      "firewall OS",
      "JWT",
      "WAF"
    ],
    "answer": 0,
    "explain": "DDD. Подходит ответ «перевод внешней модели».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s613"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: Логировать сырой заголовок Cookie?",
    "options": [
      "осторожно: секреты/PII — редактируй",
      "всегда полностью",
      "никогда никакие заголовки",
      "только в debug print"
    ],
    "answer": 0,
    "explain": "Redaction в логах. Подходит ответ «осторожно: секреты/PII — редактируй». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s614"
  },
  {
    "topic": "CPython",
    "q": "Что вернёт PEP 703 free-threading implications?",
    "options": [
      "гонка данных без GIL — нужны sync",
      "весь код thread-safe auto",
      "удаляет asyncio",
      "запрещает C-API"
    ],
    "answer": 0,
    "explain": "Новая эпоха. Подходит ответ «гонка данных без GIL — нужны sync». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s615"
  },
  {
    "topic": "cache",
    "q": "Что вернёт soft TTL ≈60s + background refresh идея?",
    "options": [
      "отдавать stale и обновлять асинхронно",
      "удалить ключ навсегда",
      "удвоить RAM",
      "отключить app"
    ],
    "answer": 0,
    "explain": "Против stampede. Подходит ответ «отдавать stale и обновлять асинхронно». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s616"
  },
  {
    "topic": "performance",
    "q": "Что такое Py_TPFLAGS_HAVE_VECTORCALL?",
    "options": [
      "тип поддерживает vectorcall",
      "async flag",
      "GC flag",
      "heaptype ban"
    ],
    "answer": 0,
    "explain": "C-API perf. Подходит ответ «тип поддерживает vectorcall». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s617"
  },
  {
    "topic": "SOLID",
    "q": "Чем помогает SRP?",
    "options": [
      "тестировании и изменениях по одной причине",
      "ускорении GIL",
      "компиляции в C",
      "удалении типов"
    ],
    "answer": 0,
    "explain": "Меньше причин менять модуль — меньше регрессий. Подходит ответ «тестировании и изменениях по одной причине».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s618"
  },
  {
    "topic": "security",
    "q": "В чём риск prototype pollution больше про JS; в Python аналог?",
    "options": [
      "массовое обновление __dict__/merge без фильтра",
      "GIL pollution",
      "import pollution always",
      "нет аналогов концепта"
    ],
    "answer": 0,
    "explain": "Контролируй merge. Подходит ответ «массовое обновление __dict__/merge без фильтра». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s619"
  },
  {
    "topic": "CPython",
    "q": "Что такое interned strings живут в в C-API CPython?",
    "options": [
      "внутренней таблице",
      "каждом frame отдельно без шаринга",
      "только .pyc",
      "GPU"
    ],
    "answer": 0,
    "explain": "Дедуп. Подходит ответ «внутренней таблице». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s620"
  },
  {
    "topic": "cache",
    "q": "В чём риск TTL=120s без jitter —?",
    "options": [
      "синхронный stampede при массовом истечении",
      "только больше RAM",
      "невозможность hit",
      "GIL"
    ],
    "answer": 0,
    "explain": "Добавляй jitter / soft TTL / singleflight. Подходит ответ «синхронный stampede при массовом истечении».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s621"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: Сложность list.pop(0)?",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explain": "Большая O: list.pop(0). Подходит ответ «O(n)». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s622"
  },
  {
    "topic": "принципы",
    "q": "Микросервис на 50 строк дублирует валидацию из монолита без общей библиотеки — что нарушено?",
    "options": [
      "DRY на уровне организации",
      "только LSP",
      "GIL",
      "ISP"
    ],
    "answer": 0,
    "explain": "DRY актуален и между сервисами, если логика одна. Подходит ответ «DRY на уровне организации».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s623"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: secrets модуль лучше random для?",
    "options": [
      "токенов/криптостойкой случайности",
      "shuffle списков UI",
      "range seed tests",
      "math.sin"
    ],
    "answer": 0,
    "explain": "OS CSPRNG. Подходит ответ «токенов/криптостойкой случайности». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s624"
  },
  {
    "topic": "python",
    "q": "В чём разница: dataclasses без slots vs slots?",
    "options": [
      "память/__dict__",
      "скорость JSON",
      "typing only",
      "hash"
    ],
    "answer": 0,
    "explain": "Выбор представления. Подходит ответ «память/__dict__».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s625"
  },
  {
    "topic": "cache",
    "q": "Что такое asymmetric TTLs tiers?",
    "options": [
      "разные времена на слоях",
      "один TTL везде mandatory",
      "no TTL",
      "negative only"
    ],
    "answer": 0,
    "explain": "Иерархия. Подходит ответ «разные времена на слоях». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s626"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: Сложность list.insert(0, x)?",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explain": "Большая O для list.insert(0, x). Подходит ответ «O(n)». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s627"
  },
  {
    "topic": "architecture",
    "q": "Выбери верный вариант: CQRS не обязан Event Sourcing?",
    "options": [
      "да, можно раздельно",
      "нет, всегда вместе",
      "запрещены оба",
      "только Mongo"
    ],
    "answer": 0,
    "explain": "Частая путаница. Подходит ответ «да, можно раздельно». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s628"
  },
  {
    "topic": "security",
    "q": "Что вернёт Content-Security-Policy?",
    "options": [
      "ограничение ресурсов в браузере",
      "Python GIL policy",
      "pip audit",
      "JWT"
    ],
    "answer": 0,
    "explain": "XSS mitigation. Подходит ответ «ограничение ресурсов в браузере». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s629"
  },
  {
    "topic": "память",
    "q": "Почему cyclic GC нужен, если есть refcount?",
    "options": [
      "циклы ссылок (A, а затем B, и далее A) держат refcount > 0 навсегда без сборщика циклов",
      "refcount не работает для int",
      "GC заменяет refcount полностью",
      "только для multiprocessing"
    ],
    "answer": 0,
    "explain": "CPython: refcount для большинства объектов + periodic cyclic GC для контейнеров с циклом. __del__ на объектах в цикле усложняет сборку (и может откладывать утилизацию). Gc.disable() не «ускоряет прод» магически — измеряй; иногда паузы GC важны latency-sensitive сервисам.",
    "kind": "single",
    "tags": [
      "memory",
      "gc"
    ],
    "difficulty": "senior",
    "group": "CPython и память",
    "id": "s630"
  },
  {
    "topic": "db",
    "q": "Что вернёт hot partition / hotspot key?",
    "options": [
      "перекос нагрузки шарда",
      "идеальное равномерное всегда",
      "только CPU",
      "DNS"
    ],
    "answer": 0,
    "explain": "Дизайн ключей. Подходит ответ «перекос нагрузки шарда». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s631"
  },
  {
    "topic": "performance",
    "q": "Что вернёт computed goto / computed interpreters?",
    "options": [
      "ускорение VM dispatch",
      "async",
      "typing",
      "pip"
    ],
    "answer": 0,
    "explain": "История CPython perf. Подходит ответ «ускорение VM dispatch». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s632"
  },
  {
    "topic": "patterns",
    "q": "Выбери верный вариант: Outbox + inbox pattern вместе дают?",
    "options": [
      "at-least-once доставку без потери между БД и брокером",
      "exactly-once бесплатно всегда",
      "только sync HTTP",
      "GIL safety"
    ],
    "answer": 0,
    "explain": "Транзакционная запись события + идемпотентный consumer. Подходит ответ «at-least-once доставку без потери между БД и брокером».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s633"
  },
  {
    "topic": "security",
    "q": "В чём риск pickle.load из сети —?",
    "options": [
      "RCE через произвольные объекты",
      "только DoS CPU",
      "безопасен всегда",
      "только XSS"
    ],
    "answer": 0,
    "explain": "Никогда не unpickle недоверенное. Подходит ответ «RCE через произвольные объекты». В безопасности важно не доверять пользовательскому вводу, секретам и десериализации извне.",
    "kind": "single",
    "group": "Безопасность",
    "id": "s634"
  },
  {
    "topic": "CPython",
    "q": "Что хранит заголовок PyObject (упрощённо, до immortal objects)?",
    "options": [
      "refcount и указатель на тип (PyTypeObject*)",
      "только имя класса",
      "только GIL-токен",
      "только указатель на __dict__"
    ],
    "answer": 0,
    "explain": "Любой объект — pyObject*: ob_refcnt + ob_type (+ у var-object ещё размер). Тип описывает tp_dealloc, tp_methods, slots протокола. Immortal objects (3.12+) меняют модель refcount для констант, но идея «объект = заголовок + полезные данные» остаётся.",
    "kind": "single",
    "tags": [
      "cpython",
      "c-api"
    ],
    "difficulty": "senior",
    "group": "CPython и память",
    "id": "s635"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: READ COMMITTED и аномалия «write skew»?",
    "options": [
      "зависит от СУБД — сверяй документацию/стандарт",
      "всегда разрешена везде",
      "всегда запрещена везде",
      "только в SQLite"
    ],
    "answer": 0,
    "explain": "Не путай SQL-standard и реализацию. Подходит ответ «зависит от СУБД — сверяй документацию/стандарт».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s636"
  },
  {
    "topic": "pickle",
    "q": "Что такое persistent_id?",
    "options": [
      "внешние ссылки в pickle",
      "UUID primary key ORM auto",
      "HTTP",
      "path"
    ],
    "answer": 0,
    "explain": "Кастомный Pickler. Подходит ответ «внешние ссылки в pickle».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s637"
  },
  {
    "topic": "LoD",
    "q": "Выбери верный вариант: order.customer.address.zip_code вместо order.shipping_zip() — в чём проблема?",
    "options": [
      "нарушения LoD / train wreck",
      "только PEP 8",
      "GIL",
      "async"
    ],
    "answer": 0,
    "explain": "Клиент знает слишком много о внутренностях чужих объектов. Подходит ответ «нарушения LoD / train wreck».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s638"
  },
  {
    "topic": "CPython",
    "q": "Что хранит PyObject заголовок примерно?",
    "options": [
      "refcount + указатель на тип",
      "только значение",
      "только GC next",
      "имя переменной"
    ],
    "answer": 0,
    "explain": "База любого managed-объекта. Подходит ответ «refcount + указатель на тип». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s639"
  },
  {
    "topic": "db",
    "q": "Что такое write skew example?",
    "options": [
      "аномалия при snapshot isolation",
      "dirty read",
      "phantom only term",
      "lost update only term"
    ],
    "answer": 0,
    "explain": "Классика теории. Подходит ответ «аномалия при snapshot isolation». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s640"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: Сложность heapq.heappush?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explain": "Большая O для heapq.heappush. Подходит ответ «O(log n)». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s641"
  },
  {
    "topic": "SOLID",
    "q": "Класс UserService и парсит JSON, и пишет в БД, и шлёт email — что нарушено?",
    "options": [
      "SRP",
      "LSP",
      "ISP",
      "GIL"
    ],
    "answer": 0,
    "explain": "Слишком много причин менять один класс. Подходит ответ «SRP». SOLID — набор принципов объектного дизайна; в Python их обычно выражают через протоколы, ABC и композицию.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s642"
  },
  {
    "topic": "python",
    "q": "Что выведет код?",
    "options": [
      "лимит str↔int digits",
      "нет защиты",
      "GIL",
      "float"
    ],
    "answer": 0,
    "explain": "DoS mitigation. Подходит ответ «лимит str↔int digits». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import sys\n# sys.set_int_max_str_digits",
    "group": "CPython и память",
    "id": "s643"
  },
  {
    "topic": "cache",
    "q": "Что вернёт soft TTL ≈300s + background refresh идея?",
    "options": [
      "отдавать stale и обновлять асинхронно",
      "удалить ключ навсегда",
      "удвоить RAM",
      "отключить app"
    ],
    "answer": 0,
    "explain": "Против stampede. Подходит ответ «отдавать stale и обновлять асинхронно». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s644"
  },
  {
    "topic": "import",
    "q": "Что такое sys.meta_path?",
    "options": [
      "finders для импорта",
      "PYTHONPATH str",
      "site-packages list only",
      "GIL queue"
    ],
    "answer": 0,
    "explain": "PEP 302/451. Подходит ответ «finders для импорта».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s645"
  },
  {
    "topic": "SOLID",
    "q": "Что означает Interface Segregation Principle (ISP)?",
    "options": [
      "клиент не зависит от методов, которые не использует",
      "один интерфейс на 100 методов",
      "запрет Protocol",
      "только один метод"
    ],
    "answer": 0,
    "explain": "Лучше несколько узких интерфейсов, чем один «толстый». Подходит ответ «клиент не зависит от методов, которые не использует».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s646"
  },
  {
    "topic": "python",
    "q": "Что такое сумма многих float?",
    "options": [
      "ошибки округления; math.fsum",
      "точна всегда decimal",
      "int",
      "fractions auto"
    ],
    "answer": 0,
    "explain": "Численная устойчивость. Подходит ответ «ошибки округления; math.fsum».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s647"
  },
  {
    "topic": "distributed",
    "q": "Выбери верный вариант: Exactly-once на практике часто?",
    "options": [
      "at-least-once + идемпотентность",
      "гарантия брокера без дизайна",
      "только UDP",
      "GIL cluster"
    ],
    "answer": 0,
    "explain": "Реалистичная модель. Подходит ответ «at-least-once + идемпотентность». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s648"
  },
  {
    "topic": "performance",
    "q": "В чём разница: JIT в PyPy vs CPython specializing?",
    "options": [
      "разные стратегии ускорения",
      "идентичны",
      "CPython JIT default forever historically",
      "PyPy без GC"
    ],
    "answer": 0,
    "explain": "Сравнивай workload. Подходит ответ «разные стратегии ускорения». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s649"
  },
  {
    "topic": "принципы",
    "q": "Абстрактная фабрика для единственного if в учебном скрипте — что нарушено?",
    "options": [
      "KISS / YAGNI",
      "SRP",
      "LSP",
      "DIP"
    ],
    "answer": 0,
    "explain": "Избыточная архитектура без выгоды. Подходит ответ «KISS / YAGNI».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s650"
  },
  {
    "topic": "байткод",
    "q": "В чём разница: LOAD_FAST vs LOAD_GLOBAL по стоимости?",
    "options": [
      "локальные быстрее глобальных/builtins lookup",
      "одинаково",
      "global быстрее",
      "только PyPy"
    ],
    "answer": 0,
    "explain": "Локальные — массив быстрого доступа. Подходит ответ «локальные быстрее глобальных/builtins lookup».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s651"
  },
  {
    "topic": "distributed",
    "q": "Что такое idempotent consumer + dedupe store?",
    "options": [
      "effectively-once обработка",
      "exactly broker magic",
      "at-most-once only",
      "batch off"
    ],
    "answer": 0,
    "explain": "Практика очередей. Подходит ответ «effectively-once обработка». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s652"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: static typing не ускоряет CPython само по себе?",
    "options": [
      "да, это для людей/чекеров/codegen",
      "mypy ускоряет runtime",
      "annotations JIT always",
      "GIL off by typing"
    ],
    "answer": 0,
    "explain": "Частый миф. Подходит ответ «да, это для людей/чекеров/codegen». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s653"
  },
  {
    "topic": "design",
    "q": "Выбери верный вариант: ACL + facade на легаси?",
    "options": [
      "изолирует старое API",
      "расширяет легаси во все сервисы",
      "shared tables",
      "big bang"
    ],
    "answer": 0,
    "explain": "Миграции. Подходит ответ «изолирует старое API».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s654"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: tp_dealloc — про что?",
    "options": [
      "слот деаллокации типа",
      "только pip",
      "HTTP header",
      "pytest fixture"
    ],
    "answer": 0,
    "explain": "Слот деаллокации типа. Подходит ответ «слот деаллокации типа». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s655"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: optimistic locking через version?",
    "options": [
      "конфликт при параллельной записи",
      "SELECT FOR UPDATE always",
      "без версии",
      "только serializable"
    ],
    "answer": 0,
    "explain": "Version column. Подходит ответ «конфликт при параллельной записи». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s656"
  },
  {
    "topic": "import",
    "q": "Что такое spec.loader.exec_module?",
    "options": [
      "исполняет модуль",
      "находит файл only",
      "pip install",
      "compileall"
    ],
    "answer": 0,
    "explain": "Жизненный цикл import. Подходит ответ «исполняет модуль».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "s657"
  },
  {
    "topic": "architecture",
    "q": "Что такое shared kernel?",
    "options": [
      "малое общее ядро между командами",
      "big monolith shared DB god",
      "BFF",
      "ACL"
    ],
    "answer": 0,
    "explain": "DDD boundaries. Подходит ответ «малое общее ядро между командами». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s658"
  },
  {
    "topic": "python",
    "q": "Что такое sys.set_int_max_str_digits?",
    "options": [
      "защита от DoS конвертации огромных int↔str",
      "ускорение",
      "typing",
      "json"
    ],
    "answer": 0,
    "explain": "DoS mitigation. Подходит ответ «защита от DoS конвертации огромных int↔str».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s659"
  },
  {
    "topic": "db",
    "q": "Какой типичный симптом pool_size=20 исчерпан —?",
    "options": [
      "запросы ждут коннект / таймауты",
      "CPU 100% всегда",
      "только disk full",
      "GIL deadlock only"
    ],
    "answer": 0,
    "explain": "Утечки, длинные транзакции, мало пула. Подходит ответ «запросы ждут коннект / таймауты». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s660"
  },
  {
    "topic": "SOLID",
    "q": "Выбери верный вариант: God-object на 2000 строк с API, SQL и email — нарушает в первую очередь?",
    "options": [
      "SRP",
      "только LSP",
      "только OCP",
      "Zen"
    ],
    "answer": 0,
    "explain": "Много причин для изменения одного класса. Подходит ответ «SRP». SOLID — набор принципов объектного дизайна; в Python их обычно выражают через протоколы, ABC и композицию.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s661"
  },
  {
    "topic": "байткод",
    "q": "Выбери верный вариант: Опкод LOAD_GLOBAL связан с?",
    "options": [
      "глобальная / должее lookup",
      "сетевым I/O",
      "только GC",
      "импортом pip"
    ],
    "answer": 0,
    "explain": "LOAD_GLOBAL: глобальная / должее lookup. Подходит ответ «глобальная / должее lookup».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s662"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: SERIALIZABLE и аномалия «phantom read»?",
    "options": [
      "зависит от СУБД — сверяй документацию/стандарт",
      "всегда разрешена везде",
      "всегда запрещена везде",
      "только в SQLite"
    ],
    "answer": 0,
    "explain": "Не путай SQL-standard и реализацию. Подходит ответ «зависит от СУБД — сверяй документацию/стандарт».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s663"
  },
  {
    "topic": "design",
    "q": "В чём разница: domain events vs integration events?",
    "options": [
      "внутренние vs внешние контракты",
      "синонимы always",
      "only Kafka",
      "only DB triggers"
    ],
    "answer": 0,
    "explain": "Границы. Подходит ответ «внутренние vs внешние контракты».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s664"
  },
  {
    "topic": "python",
    "q": "Почему list.pop(0) медленный?",
    "options": [
      "O(n) сдвиг элементов",
      "O(1) на деле",
      "GIL lock N раз",
      "hash rebuild"
    ],
    "answer": 0,
    "explain": "Для очереди — deque. Подходит ответ «O(n) сдвиг элементов».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s665"
  },
  {
    "topic": "distributed",
    "q": "Что такое sticky sessions downside?",
    "options": [
      "хуже балансировка/failover",
      "всегда лучше JWT",
      "нет минусов",
      "заменяет cache"
    ],
    "answer": 0,
    "explain": "Состояние на узле. Подходит ответ «хуже балансировка/failover». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s666"
  },
  {
    "topic": "architecture",
    "q": "Что такое Canary release?",
    "options": [
      "процент трафика на новую версию для проверки",
      "полная замена сразу",
      "только staging",
      "rollback запрещён"
    ],
    "answer": 0,
    "explain": "Постепенное увеличение доли на новой версии. Подходит ответ «процент трафика на новую версию для проверки».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s667"
  },
  {
    "topic": "CPython",
    "q": "Что такое tiered interpreter proposals в C-API CPython?",
    "options": [
      "дальнейшие уровни оптимизации VM",
      "удаление bytecode",
      "JVM merge",
      "GIL eternal only topic"
    ],
    "answer": 0,
    "explain": "Roadmap перфа. Подходит ответ «дальнейшие уровни оптимизации VM». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s668"
  },
  {
    "topic": "distributed",
    "q": "Что такое clock skew ломает?",
    "options": [
      "логику по wall-clock без NTP/logical clocks",
      "только SSD",
      "только GIL",
      "hash()"
    ],
    "answer": 0,
    "explain": "Лучше monotonic / version vectors где нужно. Подходит ответ «логику по wall-clock без NTP/logical clocks».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s669"
  },
  {
    "topic": "patterns",
    "q": "Что такое Unit of Work?",
    "options": [
      "транзакционная граница изменений",
      "один SQL always",
      "singleton DB",
      "pool"
    ],
    "answer": 0,
    "explain": "ORM sessions. Подходит ответ «транзакционная граница изменений».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s670"
  },
  {
    "topic": "память",
    "q": "Зачем нужен weakref.ref(obj)?",
    "options": [
      "ссылаться без удержания объекта от GC",
      "ускорить dict",
      "заменить deepcopy",
      "отключить GIL"
    ],
    "answer": 0,
    "explain": "Кэши, наблюдатели, canonical maps. Подходит ответ «ссылаться без удержания объекта от GC». Память в CPython устроена через подсчёт ссылок, циклический GC, buffer protocol и иногда __slots__.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s671"
  },
  {
    "topic": "distributed",
    "q": "Что вернёт backpressure end-to-end?",
    "options": [
      "от клиента до воркеров согласованно",
      "только один слой queue maxsize",
      "drop always",
      "retry amplify"
    ],
    "answer": 0,
    "explain": "Системное мышление. Подходит ответ «от клиента до воркеров согласованно». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s672"
  },
  {
    "topic": "architecture",
    "q": "Выбери верный вариант: API Gateway часто берёт на себя?",
    "options": [
      "auth, rate limit, routing, TLS termination",
      "только SQL",
      "только ORM",
      "GIL"
    ],
    "answer": 0,
    "explain": "Единая точка входа для клиентов. Подходит ответ «auth, rate limit, routing, TLS termination». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s673"
  },
  {
    "topic": "CPython",
    "q": "Что выведет код?",
    "options": [
      "да, с 3.7 как контракт",
      "нет никогда",
      "только OrderedDict",
      "random"
    ],
    "answer": 0,
    "explain": "Языковой guarantee. Подходит ответ «да, с 3.7 как контракт». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "code": "print(list({'b': 1, 'a': 2}))",
    "group": "CPython и память",
    "id": "s674"
  },
  {
    "topic": "db",
    "q": "Что такое TOCTOU в файлах/БД?",
    "options": [
      "гонка проверка, а затем использование",
      "только CPU",
      "только DNS",
      "GIL"
    ],
    "answer": 0,
    "explain": "Атомарные операции. Подходит ответ «гонка проверка, а затем использование». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s675"
  },
  {
    "topic": "architecture",
    "q": "Что такое CQRS разделяет?",
    "options": [
      "чтение и запись модели/запросов",
      "CPU и IO",
      "sync async",
      "тесты и прод"
    ],
    "answer": 0,
    "explain": "Command Query Responsibility Segregation. Подходит ответ «чтение и запись модели/запросов». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s676"
  },
  {
    "topic": "CPython",
    "q": "Что такое PEP 649 deferred annotations (направление) в C-API CPython?",
    "options": [
      "ленивые аннотации без from __future__ в перспективе",
      "удаление typing",
      "runtime enforce",
      "GIL"
    ],
    "answer": 0,
    "explain": "Эволюция annotations. Подходит ответ «ленивые аннотации без from __future__ в перспективе». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s677"
  },
  {
    "topic": "db",
    "q": "Что вернёт fillfactor / page split?",
    "options": [
      "физдизайн хранения/индексов",
      "ORM",
      "HTTP",
      "GIL"
    ],
    "answer": 0,
    "explain": "Тюнинг PG/InnoDB. Подходит ответ «физдизайн хранения/индексов». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s678"
  },
  {
    "topic": "patterns",
    "q": "Выбери верный вариант: Saga pattern в микросервисах решает?",
    "options": [
      "распределённые транзакции через компенсирующие шаги",
      "один ACID на все сервисы",
      "только HTTP retry",
      "pickle queue"
    ],
    "answer": 0,
    "explain": "Нет глобального 2PC — откаты компенсацией. Подходит ответ «распределённые транзакции через компенсирующие шаги».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s679"
  },
  {
    "topic": "python",
    "q": "Выбери верный вариант: Плюс __dict__ у экземпляра?",
    "options": [
      "гибкость атрибутов",
      "всегда меньше памяти чем slots",
      "быстрее slots всегда",
      "обязателен"
    ],
    "answer": 0,
    "explain": "Tradeoff гибкость/память. Подходит ответ «гибкость атрибутов».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s680"
  },
  {
    "topic": "cache",
    "q": "Что вернёт in-process + Redis tiers?",
    "options": [
      "локальность + общая консистентность сложнее",
      "достаточно одного always",
      "no invalidation needed",
      "GIL cache enough"
    ],
    "answer": 0,
    "explain": "Сложность инвалидации. Подходит ответ «локальность + общая консистентность сложнее». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s681"
  },
  {
    "topic": "design",
    "q": "Что такое Law of Demeter в Python?",
    "options": [
      "меньше obj.a.b.c цепочек",
      "запрет import",
      "один модуль на проект",
      "GIL law"
    ],
    "answer": 0,
    "explain": "Слабая связанность. Подходит ответ «меньше obj.a.b.c цепочек».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s682"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: Для int 257: надёжно ли `a is b` при равных значениях?",
    "options": [
      "is может быть False; сравнивай через ==",
      "всегда True по языку",
      "всегда False по языку",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Не полагайся на is — интернирование не контракт для больших int. Подходит ответ «is может быть False; сравнивай через ==».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s683"
  },
  {
    "topic": "cache",
    "q": "Зачем нужен negative cache TTL=30s?",
    "options": [
      "не долбить origin на повторных miss/404",
      "хранить пароли",
      "увеличить hit forever",
      "отключить Redis"
    ],
    "answer": 0,
    "explain": "Короткий TTL на отсутствие. Подходит ответ «не долбить origin на повторных miss/404». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s684"
  },
  {
    "topic": "design",
    "q": "Что такое hexagonal testing: domain pure?",
    "options": [
      "без I/O в unit домена",
      "всегда с DB",
      "только e2e",
      "GIL tests"
    ],
    "answer": 0,
    "explain": "Быстрые тесты ядра. Подходит ответ «без I/O в unit домена».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s685"
  },
  {
    "topic": "CPython",
    "q": "Что такое tp_dict у типа в C-API CPython?",
    "options": [
      "атрибуты/методы типа",
      "instance dict",
      "MRO list only",
      "module"
    ],
    "answer": 0,
    "explain": "Type object fields. Подходит ответ «атрибуты/методы типа». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s686"
  },
  {
    "topic": "distributed",
    "q": "Что вернёт lease / heartbeat?",
    "options": [
      "временное владение ресурсом",
      "вечный lock",
      "2PC",
      "DNS TTL only"
    ],
    "answer": 0,
    "explain": "Лидерство/локи. Подходит ответ «временное владение ресурсом». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s687"
  },
  {
    "topic": "принципы",
    "q": "Что означает «Tell, don't ask»?",
    "options": [
      "сказать объекту что сделать, а не вытаскивать данные и решать снаружи",
      "не задавать вопросов на собесе",
      "только getter/setter",
      "отказ от методов"
    ],
    "answer": 0,
    "explain": "Логика ближе к данным: account.withdraw(100), а не if balance > 100. Подходит ответ «сказать объекту что сделать, а не вытаскивать данные и решать снаружи».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s688"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: pymalloc — про что?",
    "options": [
      "аллокатор мелких объектов",
      "только pip",
      "HTTP header",
      "pytest fixture"
    ],
    "answer": 0,
    "explain": "Аллокатор мелких объектов. Подходит ответ «аллокатор мелких объектов». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s689"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: READ COMMITTED и аномалия «dirty read»?",
    "options": [
      "зависит от СУБД — сверяй документацию/стандарт",
      "всегда разрешена везде",
      "всегда запрещена везде",
      "только в SQLite"
    ],
    "answer": 0,
    "explain": "Не путай SQL-standard и реализацию. Подходит ответ «зависит от СУБД — сверяй документацию/стандарт».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s690"
  },
  {
    "topic": "patterns",
    "q": "Выбери верный вариант: В Python Singleton часто заменяют?",
    "options": [
      "модулем как синглтоном",
      "обязательным metaclass везде",
      "Borg только",
      "GoF строго"
    ],
    "answer": 0,
    "explain": "Модуль загружается один раз. Подходит ответ «модулем как синглтоном».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s691"
  },
  {
    "topic": "CPython",
    "q": "Что такое PyVarObject дополнительно хранит в C-API CPython?",
    "options": [
      "ob_size",
      "только refcnt",
      "GIL ticket",
      "typeid str"
    ],
    "answer": 0,
    "explain": "Переменный размер. Подходит ответ «ob_size». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s692"
  },
  {
    "topic": "distributed",
    "q": "Что такое phi accrual failure detection?",
    "options": [
      "адаптивный suspicion level",
      "hard timeout only",
      "Raft",
      "DNS"
    ],
    "answer": 0,
    "explain": "Аккруал-детекторы. Подходит ответ «адаптивный suspicion level». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s693"
  },
  {
    "topic": "architecture",
    "q": "Что такое Гексагональная архитектура акцентирует?",
    "options": [
      "порты/адаптеры, ядро без инфры",
      "монолит UI",
      "GIL layers",
      "один большой модуль"
    ],
    "answer": 0,
    "explain": "Домен независим от фреймворка. Подходит ответ «порты/адаптеры, ядро без инфры». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s694"
  },
  {
    "topic": "interning",
    "q": "Выбери верный вариант: Пул малых int диапазон типично?",
    "options": [
      "-5..256 в CPython",
      "все int",
      "только 0,1",
      "нет пула"
    ],
    "answer": 0,
    "explain": "Деталь реализации. Подходит ответ «-5..256 в CPython».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s695"
  },
  {
    "topic": "cache",
    "q": "Зачем нужен TTL + jitter?",
    "options": [
      "размазать истечения ключей во времени",
      "увеличить TTL forever",
      "отключить redis",
      "GIL"
    ],
    "answer": 0,
    "explain": "Против синхронного stampede. Подходит ответ «размазать истечения ключей во времени». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s696"
  },
  {
    "topic": "architecture",
    "q": "Что вернёт anti-corruption + published language?",
    "options": [
      "явный перевод + общий язык",
      "shared DB tables as API",
      "random JSON",
      "RPC god"
    ],
    "answer": 0,
    "explain": "Интеграции. Подходит ответ «явный перевод + общий язык». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s697"
  },
  {
    "topic": "python",
    "q": "почему list.pop(0) O(n)?",
    "options": [
      "сдвиг массива",
      "hash rebuild",
      "GIL N times documented",
      "malloc each"
    ],
    "answer": 0,
    "explain": "Используй deque. Подходит ответ «сдвиг массива».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s698"
  },
  {
    "topic": "db",
    "q": "В чём разница: partitioning vs sharding?",
    "options": [
      "часто внутри БД vs across nodes",
      "синонимы строго",
      "только index",
      "только view"
    ],
    "answer": 0,
    "explain": "Масштаб данных. Подходит ответ «часто внутри БД vs across nodes». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s699"
  },
  {
    "topic": "architecture",
    "q": "Что такое strangler fig?",
    "options": [
      "постепенная замена легаси",
      "big bang rewrite only",
      "monorepo ban",
      "CQRS"
    ],
    "answer": 0,
    "explain": "Миграция систем. Подходит ответ «постепенная замена легаси». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s700"
  },
  {
    "topic": "память",
    "q": "Что такое cyclic GC поколения?",
    "options": [
      "young/old коллекции",
      "только refcount",
      "только RSS OS",
      "swap"
    ],
    "answer": 0,
    "explain": "Gc generations. Подходит ответ «young/old коллекции». Память в CPython устроена через подсчёт ссылок, циклический GC, buffer protocol и иногда __slots__.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s701"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: SERIALIZABLE и аномалия «dirty read»?",
    "options": [
      "зависит от СУБД — сверяй документацию/стандарт",
      "всегда разрешена везде",
      "всегда запрещена везде",
      "только в SQLite"
    ],
    "answer": 0,
    "explain": "Не путай SQL-standard и реализацию. Подходит ответ «зависит от СУБД — сверяй документацию/стандарт».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s702"
  },
  {
    "topic": "SOLID",
    "q": "Что означает Liskov Substitution Principle (LSP)?",
    "options": [
      "подтип можно подставить вместо базового без сюрпризов",
      "подкласс всегда больше",
      "запрет override",
      "только ABC"
    ],
    "answer": 0,
    "explain": "Поведение подкласса не должно ломать ожидания клиента базового типа. Подходит ответ «подтип можно подставить вместо базового без сюрпризов».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s703"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: Для int 5: надёжно ли `a is b` при равных значениях?",
    "options": [
      "может быть True из‑за интернирования",
      "всегда True по языку",
      "всегда False по языку",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Часто один и тот же объект (intern маленьких int). Подходит ответ «может быть True из‑за интернирования».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s704"
  },
  {
    "topic": "distributed",
    "q": "Что такое «hedged requests»?",
    "options": [
      "параллельный дубль запроса к реплике",
      "только про GIL",
      "только SQL index",
      "HTTP 200 always"
    ],
    "answer": 0,
    "explain": "Параллельный дубль запроса к реплике. Подходит ответ «параллельный дубль запроса к реплике». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s705"
  },
  {
    "topic": "принципы",
    "q": "Что означает Fail fast в API?",
    "options": [
      "рано валидировать и падать с ясной ошибкой",
      "глотать все исключения",
      "retry бесконечно",
      "молчаливый None"
    ],
    "answer": 0,
    "explain": "Ошибка на входе лучше, чем тихая порча данных дальше. Подходит ответ «рано валидировать и падать с ясной ошибкой».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s706"
  },
  {
    "topic": "CPython",
    "q": "Что такое PEP 669 low impact monitoring в C-API CPython?",
    "options": [
      "дешёвые хуки наблюдения",
      "settrace старый only",
      "GIL monitor",
      "typing"
    ],
    "answer": 0,
    "explain": "3.12+ observability VM. Подходит ответ «дешёвые хуки наблюдения». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s707"
  },
  {
    "topic": "queues",
    "q": "В чём риск priority queue fairness?",
    "options": [
      "starve низкий приоритет",
      "не бывает",
      "GIL fair always",
      "RR CPU"
    ],
    "answer": 0,
    "explain": "Aging/квоты. Подходит ответ «starve низкий приоритет».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s708"
  },
  {
    "topic": "SOLID",
    "q": "Выбери верный вариант: typing.Protocol для новых адаптеров без правки клиента — пример?",
    "options": [
      "OCP + абстракция",
      "только ISP",
      "GIL",
      "pickle"
    ],
    "answer": 0,
    "explain": "Клиент зависит от Protocol; новые реализации подключаются снаружи. Подходит ответ «OCP + абстракция».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s709"
  },
  {
    "topic": "байткод",
    "q": "Выбери верный вариант: Опкод BINARY_OP связан с?",
    "options": [
      "арифметика/операции",
      "сетевым I/O",
      "только GC",
      "импортом pip"
    ],
    "answer": 0,
    "explain": "BINARY_OP: арифметика/операции. Подходит ответ «арифметика/операции».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s710"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: При SERIALIZABLE write skew?",
    "options": [
      "возможен или нет в зависимости от СУБД/реализации — проверяй документацию",
      "невозможен никогда нигде",
      "только в MyISAM",
      "только NoSQL"
    ],
    "answer": 0,
    "explain": "Теория изоляций ≠ конкретный движок. Подходит ответ «возможен или нет в зависимости от СУБД/реализации — проверяй документацию».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s711"
  },
  {
    "topic": "SOLID",
    "q": "Что делает базового класса бросает NotImplementedError, подкласс — всегда ValueError — возможная проблема?",
    "options": [
      "контракта / LSP для вызывающего",
      "только GIL",
      "только typing",
      "PEP 8"
    ],
    "answer": 0,
    "explain": "Исключения и контракты — часть подстановки. Подходит ответ «контракта / LSP для вызывающего». SOLID — набор принципов объектного дизайна; в Python их обычно выражают через протоколы, ABC и композицию.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s712"
  },
  {
    "topic": "байткод",
    "q": "Что такое EXTENDED_ARG нужен для?",
    "options": [
      "больших аргументов инструкции",
      "async",
      "import",
      "GIL"
    ],
    "answer": 0,
    "explain": "Префикс opcode. Подходит ответ «больших аргументов инструкции».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s713"
  },
  {
    "topic": "cache",
    "q": "Что вернёт write-around?",
    "options": [
      "запись в store минуя кэш",
      "write-through",
      "write-back",
      "no write"
    ],
    "answer": 0,
    "explain": "Политика. Подходит ответ «запись в store минуя кэш». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s714"
  },
  {
    "topic": "SOLID",
    "q": "Что такое Если подкласс усиливает предусловия или ослабляет постусловия?",
    "options": [
      "нарушение LSP",
      "норма ООП",
      "только в Java",
      "ISP"
    ],
    "answer": 0,
    "explain": "Контракт подтипа не должен быть строже/слабее неожиданно. Подходит ответ «нарушение LSP». SOLID — набор принципов объектного дизайна; в Python их обычно выражают через протоколы, ABC и композицию.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s715"
  },
  {
    "topic": "память",
    "q": "Что такое mimalloc/other in experiments?",
    "options": [
      "альтернативные аллокаторы сборок",
      "замена gc",
      "замена typing",
      "pip"
    ],
    "answer": 0,
    "explain": "Перф-сборки. Подходит ответ «альтернативные аллокаторы сборок». Память в CPython устроена через подсчёт ссылок, циклический GC, buffer protocol и иногда __slots__.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s716"
  },
  {
    "topic": "db",
    "q": "Что такое connection leak?",
    "options": [
      "невозврат в пул",
      "slow query only",
      "missing index only",
      "ORM lazy"
    ],
    "answer": 0,
    "explain": "Finally/context. Подходит ответ «невозврат в пул». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s717"
  },
  {
    "topic": "SOLID",
    "q": "Выбери верный вариант: Readable + Writable разделены вместо одного HugeFile — пример?",
    "options": [
      "ISP",
      "LSP",
      "GIL",
      "DRY"
    ],
    "answer": 0,
    "explain": "Клиент читает только то, что ему нужно. Подходит ответ «ISP». SOLID — набор принципов объектного дизайна; в Python их обычно выражают через протоколы, ABC и композицию.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s718"
  },
  {
    "topic": "python",
    "q": "почему не полагаться на dict order до 3.7 как на язык?",
    "options": [
      "стал guarantee с 3.7; раньше CPython detail",
      "никогда не был",
      "был с 2.7 language",
      "только OrderedDict language"
    ],
    "answer": 0,
    "explain": "История. Подходит ответ «стал guarantee с 3.7; раньше CPython detail».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s719"
  },
  {
    "topic": "db",
    "q": "Какой типичный симптом pool_size=50 исчерпан —?",
    "options": [
      "запросы ждут коннект / таймауты",
      "CPU 100% всегда",
      "только disk full",
      "GIL deadlock only"
    ],
    "answer": 0,
    "explain": "Утечки, длинные транзакции, мало пула. Подходит ответ «запросы ждут коннект / таймауты». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s720"
  },
  {
    "topic": "design",
    "q": "Выбери верный вариант: Hexagonal: adapters зависят от?",
    "options": [
      "портов ядра, не наоборот",
      "фреймворка в домене",
      "GIL",
      "БД схемы в UI"
    ],
    "answer": 0,
    "explain": "Инверсия зависимостей. Подходит ответ «портов ядра, не наоборот».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s721"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: ob_refcnt — про что?",
    "options": [
      "счётчик ссылок объекта",
      "только pip",
      "HTTP header",
      "pytest fixture"
    ],
    "answer": 0,
    "explain": "Счётчик ссылок объекта. Подходит ответ «счётчик ссылок объекта». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s722"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: READ COMMITTED и аномалия «non-repeatable read»?",
    "options": [
      "зависит от СУБД — сверяй документацию/стандарт",
      "всегда разрешена везде",
      "всегда запрещена везде",
      "только в SQLite"
    ],
    "answer": 0,
    "explain": "Не путай SQL-standard и реализацию. Подходит ответ «зависит от СУБД — сверяй документацию/стандарт».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s723"
  },
  {
    "topic": "architecture",
    "q": "Выбери верный вариант: Паттерн ACL?",
    "options": [
      "anti-corruption layer к легаси",
      "удалить тесты",
      "только monolith ban",
      "GIL pattern"
    ],
    "answer": 0,
    "explain": "Anti-corruption layer к легаси. Подходит ответ «anti-corruption layer к легаси». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s724"
  },
  {
    "topic": "python",
    "q": "Выбери верный вариант: PEP 703 связан с?",
    "options": [
      "делает GIL опциональным",
      "pattern matching",
      "tomllib",
      "dataclasses"
    ],
    "answer": 0,
    "explain": "Free-threading initiative. Подходит ответ «делает GIL опциональным».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s725"
  },
  {
    "topic": "retries",
    "q": "Что вернёт budget / deadline?",
    "options": [
      "общий лимит времени на ретраи",
      "infinite backoff",
      "только count",
      "jitter off"
    ],
    "answer": 0,
    "explain": "Не ретраить вечно. Подходит ответ «общий лимит времени на ретраи».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s726"
  },
  {
    "topic": "patterns",
    "q": "Выбери верный вариант: Strangler Fig pattern при миграции монолита?",
    "options": [
      "постепенно оборачивает и заменяет части системы",
      "big bang rewrite",
      "удаляет тесты",
      "только Docker"
    ],
    "answer": 0,
    "explain": "Новый функционал — в новом сервисе, старый душится. Подходит ответ «постепенно оборачивает и заменяет части системы».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s727"
  },
  {
    "topic": "python",
    "q": "Выбери верный вариант: int произвольной длины цена?",
    "options": [
      "больше цифр, а затем дороже операции",
      "O(1) always like CPU int",
      "float same",
      "decimal cheaper"
    ],
    "answer": 0,
    "explain": "Большие числа. Подходит ответ «больше цифр, а затем дороже операции».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s728"
  },
  {
    "topic": "distributed",
    "q": "Что такое «graceful degradation»?",
    "options": [
      "урезать функции, но жить",
      "только про GIL",
      "только SQL index",
      "HTTP 200 always"
    ],
    "answer": 0,
    "explain": "Урезать функции, но жить. Подходит ответ «урезать функции, но жить». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s729"
  },
  {
    "topic": "SOLID",
    "q": "Класс вынужден реализовать пустые методы save() и fly() «для интерфейса» — что нарушено?",
    "options": [
      "ISP",
      "OCP",
      "YAGNI",
      "Zen"
    ],
    "answer": 0,
    "explain": "«Толстый» интерфейс заставляет реализовывать лишнее. Подходит ответ «ISP». SOLID — набор принципов объектного дизайна; в Python их обычно выражают через протоколы, ABC и композицию.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s730"
  },
  {
    "topic": "память",
    "q": "Что даёт memoryview / buffer protocol на практике?",
    "options": [
      "нулевое/дешёвое представление чужого буфера без лишнего копирования bytes",
      "всегда быстрее list для любых данных",
      "замену multiprocessing",
      "автоматическую сериализацию в JSON"
    ],
    "answer": 0,
    "explain": "Bytes/bytearray/array/numpy/socket — через buffer protocol. Memoryview позволяет срезать и читать без copy. Осторожно: underlying buffer не должен уехать (lifetime); для записи смотри readonly. Типичный win: парсинг бинарных протоколов, zero-copy пути в сетевых стеках.",
    "kind": "single",
    "tags": [
      "memory",
      "buffer"
    ],
    "difficulty": "senior",
    "group": "CPython и память",
    "id": "s731"
  },
  {
    "topic": "cache",
    "q": "Выбери верный вариант: hot key split на 2 шардов идея?",
    "options": [
      "размазать нагрузку популярного ключа",
      "уменьшить TTL до 0",
      "один box сильнее",
      "запретить cache"
    ],
    "answer": 0,
    "explain": "Перекос ключей. Подходит ответ «размазать нагрузку популярного ключа». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s732"
  },
  {
    "topic": "Zen",
    "q": "Что такое «Explicit is better than implicit» из?",
    "options": [
      "The Zen of Python (PEP 20)",
      "PEP 8 только",
      "GIL docs",
      "POSIX"
    ],
    "answer": 0,
    "explain": "Import this. Подходит ответ «The Zen of Python (PEP 20)».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s733"
  },
  {
    "topic": "python",
    "q": "В чём разница: math.fsum vs sum?",
    "options": [
      "точный накопленный float sum",
      "одно",
      "decimal",
      "int"
    ],
    "answer": 0,
    "explain": "Численные алгоритмы. Подходит ответ «точный накопленный float sum».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s734"
  },
  {
    "topic": "db",
    "q": "Что даёт MVCC в PostgreSQL?",
    "options": [
      "версионность строк для читателей",
      "только locks table",
      "GIL-like lock",
      "columnar only"
    ],
    "answer": 0,
    "explain": "Мультиверсионность. Подходит ответ «версионность строк для читателей». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s735"
  },
  {
    "topic": "design",
    "q": "Выбери верный вариант: invariant в домене лучше держать?",
    "options": [
      "в конструкторе/фабрике типа",
      "в UI only",
      "в БД триггерах only silently",
      "в логах"
    ],
    "answer": 0,
    "explain": "Непроницаемые типы. Подходит ответ «в конструкторе/фабрике типа».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s736"
  },
  {
    "topic": "CPython",
    "q": "Выбери все верные про устройство CPython?",
    "options": [
      "у каждого PyObject есть refcount (в классической модели)",
      "GIL защищает целостность runtime-структур интерпретатора",
      "удаление GIL автоматически делает весь Python-код линейно масштабируемым на CPU",
      "memoryview позволяет работать с буфером без лишнего копирования байт"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explain": "Free-threading (PEP 703) снимает GIL, но не отменяет гонки в своём коде и накладные расходы синхронизации. Memoryview — zero-copy взгляд на buffer protocol. Верными здесь будут пункты: «у каждого PyObject есть refcount (в классической модели)»; «GIL защищает целостность runtime-структур интерпретатора»; «memoryview позволяет работать с буфером без лишнего копирования байт».",
    "kind": "multi",
    "tags": [
      "cpython",
      "gil",
      "memory"
    ],
    "difficulty": "senior",
    "group": "CPython и память",
    "id": "s737"
  },
  {
    "topic": "cache",
    "q": "Что такое near cache?",
    "options": [
      "локальный слой + распределённый",
      "только CDN",
      "только DB buffer",
      "GPU"
    ],
    "answer": 0,
    "explain": "Иерархия кэшей. Подходит ответ «локальный слой + распределённый». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s738"
  },
  {
    "topic": "architecture",
    "q": "В чём риск Blue-green deployment снижает?",
    "options": [
      "даунтайма при выкатке: переключение трафика на новую среду",
      "багов в коде полностью",
      "нужды в тестах",
      "GIL"
    ],
    "answer": 0,
    "explain": "Две среды; switch после проверки green. Подходит ответ «даунтайма при выкатке: переключение трафика на новую среду».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s739"
  },
  {
    "topic": "python",
    "q": "Почему pop(0) медленный?",
    "options": [
      "O(n) сдвиг",
      "O(1)",
      "GIL N",
      "hash"
    ],
    "answer": 0,
    "explain": "Массив сдвигает элементы. Подходит ответ «O(n) сдвиг». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "xs = list(range(10000))\nxs.pop(0)",
    "group": "CPython и память",
    "id": "s740"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: REPEATABLE READ и аномалия «write skew»?",
    "options": [
      "зависит от СУБД — сверяй документацию/стандарт",
      "всегда разрешена везде",
      "всегда запрещена везде",
      "только в SQLite"
    ],
    "answer": 0,
    "explain": "Не путай SQL-standard и реализацию. Подходит ответ «зависит от СУБД — сверяй документацию/стандарт».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s741"
  },
  {
    "topic": "architecture",
    "q": "Выбери верный вариант: Паттерн BFF?",
    "options": [
      "backend for frontend — API под клиент",
      "удалить тесты",
      "только monolith ban",
      "GIL pattern"
    ],
    "answer": 0,
    "explain": "Backend for frontend — API под клиент. Подходит ответ «backend for frontend — API под клиент». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s742"
  },
  {
    "topic": "python",
    "q": "почему __eq__ без __hash__ → unhashable?",
    "options": [
      "None hash в class",
      "random",
      "id hash kept always with custom eq",
      "TypeError on class create"
    ],
    "answer": 0,
    "explain": "Безопасность set/dict. Подходит ответ «None hash в class».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s743"
  },
  {
    "topic": "db",
    "q": "Что такое vacuum в PostgreSQL?",
    "options": [
      "очистка/видимость версий строк",
      "только backup",
      "только index rebuild always synonym",
      "replication slot"
    ],
    "answer": 0,
    "explain": "MVCC hygiene. Подходит ответ «очистка/видимость версий строк». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s744"
  },
  {
    "topic": "SOLID",
    "q": "Выбери верный вариант: В Python ISP часто выражают через?",
    "options": [
      "typing.Protocol с узкими методами",
      "один класс Object",
      "только наследование",
      "global state"
    ],
    "answer": 0,
    "explain": "Несколько Protocol вместо одного GodInterface. Подходит ответ «typing.Protocol с узкими методами». SOLID — набор принципов объектного дизайна; в Python их обычно выражают через протоколы, ABC и композицию.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s745"
  },
  {
    "topic": "CPython",
    "q": "Что такое interning маленьких int в C-API CPython?",
    "options": [
      "кэш часто используемых int (детали зависят от версии/build)",
      "все int всегда unique",
      "только float",
      "только str ascii"
    ],
    "answer": 0,
    "explain": "Поэтому is у маленьких int может быть True «случайно» — для идентичности не опирайся. Подходит ответ «кэш часто используемых int (детали зависят от версии/build)».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s746"
  },
  {
    "topic": "distributed",
    "q": "Что вернёт quorum N/2+1?",
    "options": [
      "большинство для решения",
      "все узлы always",
      "один leader without logs",
      "DNS"
    ],
    "answer": 0,
    "explain": "Consensus. Подходит ответ «большинство для решения». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s747"
  },
  {
    "topic": "design",
    "q": "Выбери верный вариант: postel's law осторожно потому?",
    "options": [
      "толерантный парсер копит хаос",
      "всегда плох",
      "всегда идеален",
      "только HTTP/1"
    ],
    "answer": 0,
    "explain": "Строгость на границах. Подходит ответ «толерантный парсер копит хаос».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s748"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: dict insertion order — про что?",
    "options": [
      "сохранение порядка с 3.7+ как язык. контракт",
      "только pip",
      "HTTP header",
      "pytest fixture"
    ],
    "answer": 0,
    "explain": "Сохранение порядка с 3.7+ как язык. Контракт. Подходит ответ «сохранение порядка с 3.7+ как язык. контракт».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s749"
  },
  {
    "topic": "cache",
    "q": "Выбери верный вариант: Паттерн cache-aside?",
    "options": [
      "приложение само читает/пишет кэш",
      "только Redis Cluster",
      "запрещён",
      "равен TTL=0"
    ],
    "answer": 0,
    "explain": "Приложение само читает/пишет кэш. Подходит ответ «приложение само читает/пишет кэш». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s750"
  },
  {
    "topic": "SOLID",
    "q": "Что такое Сервис принимает Repository (Protocol), а не psycopg2 connection?",
    "options": [
      "DIP",
      "нарушение SRP",
      "только mock",
      "GIL"
    ],
    "answer": 0,
    "explain": "Зависимость от абстракции Repository. Подходит ответ «DIP». SOLID — набор принципов объектного дизайна; в Python их обычно выражают через протоколы, ABC и композицию.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s751"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: interned strings — про что?",
    "options": [
      "переиспользование некоторых str",
      "только pip",
      "HTTP header",
      "pytest fixture"
    ],
    "answer": 0,
    "explain": "Переиспользование некоторых str. Подходит ответ «переиспользование некоторых str». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s752"
  },
  {
    "topic": "cache",
    "q": "Что такое probabilistic early expiration?",
    "options": [
      "ранний refresh с вероятностью",
      "fixed TTL only",
      "lock only",
      "no cache"
    ],
    "answer": 0,
    "explain": "XFetch-подобные идеи. Подходит ответ «ранний refresh с вероятностью». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s753"
  },
  {
    "topic": "design",
    "q": "Что такое policy object?",
    "options": [
      "вынесенные правила решения",
      "god service",
      "anemic getters only",
      "SQL view"
    ],
    "answer": 0,
    "explain": "Гибкость поведения. Подходит ответ «вынесенные правила решения».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s754"
  },
  {
    "topic": "CPython",
    "q": "Что меняет free-threaded CPython (PEP 703) с точки зрения разработчика?",
    "options": [
      "нет GIL по умолчанию в такой сборке — нужна потокобезопасность своего кода и зависимостей",
      "Python становится однопоточным",
      "удаляется refcount",
      "asyncio больше не нужен"
    ],
    "answer": 0,
    "explain": "Без GIL гонки в чистом Python становятся реальными (list.append, dict update, свои кэши). Многие C-расширения предполагали GIL — их надо аудировать. Это не «бесплатный xN к скорости»: синхронизация, false sharing, single-thread regressions. Измеряй на своём workload.",
    "kind": "single",
    "tags": [
      "gil",
      "cpython"
    ],
    "difficulty": "senior",
    "group": "CPython и память",
    "id": "s755"
  },
  {
    "topic": "cache",
    "q": "Что такое Cache stampede?",
    "options": [
      "массовый промах кэша одновременно",
      "переполнение диска",
      "hash collision",
      "GIL thrash"
    ],
    "answer": 0,
    "explain": "Нужны lock/soft expire/singleflight. Подходит ответ «массовый промах кэша одновременно». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s756"
  },
  {
    "topic": "design",
    "q": "Выбери верный вариант: law of demeter грубо?",
    "options": [
      "не цепочй obj.a.b.c — говори с соседями",
      "больше getters always",
      "god object ok",
      "no DTOs"
    ],
    "answer": 0,
    "explain": "Меньше связности. Подходит ответ «не цепочй obj.a.b.c — говори с соседями».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s757"
  },
  {
    "topic": "CPython",
    "q": "Что вернёт specializing adaptive interpreter (3.11+)?",
    "options": [
      "байткод адаптируется под типы в hot path",
      "удаляет GC",
      "отключает typing",
      "заменяет LLVM always"
    ],
    "answer": 0,
    "explain": "Ускорение без смены языка. Подходит ответ «байткод адаптируется под типы в hot path». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s758"
  },
  {
    "topic": "distributed",
    "q": "Выбери верный вариант: Семантика доставки at-least-once?",
    "options": [
      "дубли возможны, а затем идемпотентность",
      "всегда бесплатна в любой очереди",
      "только UDP",
      "гарантируется GIL"
    ],
    "answer": 0,
    "explain": "Дубли возможны, а затем идемпотентность. Подходит ответ «дубли возможны, а затем идемпотентность». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s759"
  },
  {
    "topic": "SOLID",
    "q": "Что означает Open/Closed Principle (OCP)?",
    "options": [
      "открыт для расширения, закрыт для модификации",
      "файл только на чтение",
      "запрет наследования",
      "только final классы"
    ],
    "answer": 0,
    "explain": "Новое поведение добавляем, старый код не ломаем. Подходит ответ «открыт для расширения, закрыт для модификации».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s760"
  },
  {
    "topic": "байткод",
    "q": "Чем смотреть bytecode?",
    "options": [
      "dis.dis",
      "ast only",
      "pdb only",
      "pip"
    ],
    "answer": 0,
    "explain": "Dis модуль. Подходит ответ «dis.dis». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import dis\ndef f(x): return x+1\ndis.dis(f)",
    "group": "CPython и память",
    "id": "s761"
  },
  {
    "topic": "db",
    "q": "Что такое read replica lag?",
    "options": [
      "устаревшие чтения",
      "strong always",
      "нет лагов у async",
      "GIL"
    ],
    "answer": 0,
    "explain": "Eventual consistency. Подходит ответ «устаревшие чтения». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s762"
  },
  {
    "topic": "patterns",
    "q": "Что такое Sidecar pattern в Kubernetes?",
    "options": [
      "вспомогательный контейнер рядом с основным в pod",
      "отдельный кластер",
      "только ingress",
      "ORM"
    ],
    "answer": 0,
    "explain": "Логирование, proxy, mesh — рядом с app. Подходит ответ «вспомогательный контейнер рядом с основным в pod».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s763"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: arenas/pools — про что?",
    "options": [
      "структура pymalloc",
      "только pip",
      "HTTP header",
      "pytest fixture"
    ],
    "answer": 0,
    "explain": "Структура pymalloc. Подходит ответ «структура pymalloc». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s764"
  },
  {
    "topic": "consistency",
    "q": "Что такое linearizability?",
    "options": [
      "сильная real-time порядок операций",
      "eventual",
      "read-your-writes weaker always",
      "FIFO messages only"
    ],
    "answer": 0,
    "explain": "Модели. Подходит ответ «сильная real-time порядок операций».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s765"
  },
  {
    "topic": "принципы",
    "q": "if user.get_role() == 'admin': user.delete() вместо user.delete_if_allowed() — что нарушено?",
    "options": [
      "Tell, don't ask",
      "только DRY",
      "LSP",
      "GIL"
    ],
    "answer": 0,
    "explain": "Проверка прав лучше внутри объекта/сервиса. Подходит ответ «Tell, don't ask».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s766"
  },
  {
    "topic": "string",
    "q": "Почему str immutable важно для?",
    "options": [
      "безопасности ключей dict / шаринга",
      "скорости +=",
      "GIL",
      "UTF-16"
    ],
    "answer": 0,
    "explain": "Хешируемость и кэш. Подходит ответ «безопасности ключей dict / шаринга».",
    "kind": "single",
    "group": "CPython и память",
    "id": "s767"
  },
  {
    "topic": "distributed",
    "q": "Что такое «retry storm»?",
    "options": [
      "ретраи без jitter усиливают сбой",
      "только про GIL",
      "только SQL index",
      "HTTP 200 always"
    ],
    "answer": 0,
    "explain": "Ретраи без jitter усиливают сбой. Подходит ответ «ретраи без jitter усиливают сбой». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s768"
  },
  {
    "topic": "design",
    "q": "Что такое anti-corruption layer?",
    "options": [
      "адаптер, изолирующий домен от чужой модели/legacy",
      "firewall OS",
      "GIL wrapper",
      "кэш Redis"
    ],
    "answer": 0,
    "explain": "DDD: не протекает внешняя модель. Подходит ответ «адаптер, изолирующий домен от чужой модели/legacy».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s769"
  },
  {
    "topic": "CPython",
    "q": "Что такое Словари CPython оптимизированы как в C-API CPython?",
    "options": [
      "compact + insertion-ordered (3.6+)",
      "hash table без порядка",
      "tree map",
      "B-tree"
    ],
    "answer": 0,
    "explain": "Порядок вставки — язык. Контракт с 3.7. Подходит ответ «compact + insertion-ordered (3.6+)». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s770"
  },
  {
    "topic": "distributed",
    "q": "Выбери верный вариант: Кворум в Raft/Consul-подобном кластере из 7 узлов?",
    "options": [
      "большинство: 4",
      "7",
      "1",
      "6"
    ],
    "answer": 0,
    "explain": "Большинство для выбора лидера/коммита. Подходит ответ «большинство: 4». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s771"
  },
  {
    "topic": "architecture",
    "q": "Что такое Saga pattern решает?",
    "options": [
      "распределённые транзакции через шаги/компенсации",
      "локальный GIL",
      "UI navigation",
      "sort"
    ],
    "answer": 0,
    "explain": "Вместо 2PC часто. Подходит ответ «распределённые транзакции через шаги/компенсации». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s772"
  },
  {
    "topic": "CPython",
    "q": "Что такое code object не содержит в C-API CPython?",
    "options": [
      "значения heap объектов напрямую как runtime heap graph",
      "bytecode",
      "consts",
      "names"
    ],
    "answer": 0,
    "explain": "Это шаблон исполнения. Подходит ответ «значения heap объектов напрямую как runtime heap graph». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s773"
  },
  {
    "topic": "queues",
    "q": "Что даёт maxsize в Queue?",
    "options": [
      "backpressure",
      "unlimited always better",
      "priority",
      "disk"
    ],
    "answer": 0,
    "explain": "Не расти без предела. Подходит ответ «backpressure».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s774"
  },
  {
    "topic": "Zen",
    "q": "Выбери верный вариант: «Simple is better than complex» поддерживает?",
    "options": [
      "KISS",
      "отказ от функций",
      "только ООП",
      "premature optimization"
    ],
    "answer": 0,
    "explain": "Простое решение предпочтительнее сложного. Подходит ответ «KISS».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s775"
  },
  {
    "topic": "память",
    "q": "Что такое tracemalloc.start() влияет на?",
    "options": [
      "overhead + возможность снимков аллокаций",
      "только скорость сети",
      "удаление GIL",
      "pickle"
    ],
    "answer": 0,
    "explain": "Диагностика утечек. Подходит ответ «overhead + возможность снимков аллокаций». Память в CPython устроена через подсчёт ссылок, циклический GC, buffer protocol и иногда __slots__.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s776"
  },
  {
    "topic": "consistency",
    "q": "Что такое Read-your-writes?",
    "options": [
      "гарантия увидеть свои записи",
      "strong serializable всегда",
      "eventual only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Модель консистентности. Подходит ответ «гарантия увидеть свои записи».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s777"
  },
  {
    "topic": "SOLID",
    "q": "Что означает Dependency Inversion Principle (DIP)?",
    "options": [
      "зависимость от абстракций, не от деталей",
      "инверсия списка",
      "import внизу файла",
      "отказ от DI"
    ],
    "answer": 0,
    "explain": "Высокоуровневый код не привязан к конкретной БД/файлу. Подходит ответ «зависимость от абстракций, не от деталей».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s778"
  },
  {
    "topic": "память",
    "q": "Что выведет код?",
    "options": [
      "нет __dict__ у экземпляра",
      "сжатия bytecode",
      "отключения GC",
      "mmap"
    ],
    "answer": 0,
    "explain": "Фиксированные атрибуты. Подходит ответ «нет __dict__ у экземпляра». Память в CPython устроена через подсчёт ссылок, циклический GC, buffer protocol и иногда __slots__.",
    "kind": "single",
    "code": "class A:\n    __slots__ = ('x',)",
    "group": "CPython и память",
    "id": "s779"
  },
  {
    "topic": "serialization",
    "q": "Что такое schema evolution backward/forward?",
    "options": [
      "совместимость старых/новых клиентов",
      "только JSON pretty",
      "pickle auto",
      "XML ban"
    ],
    "answer": 0,
    "explain": "Protobuf/Avro правила. Подходит ответ «совместимость старых/новых клиентов».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s780"
  },
  {
    "topic": "architecture",
    "q": "В чём разница: Horizontal scaling vs vertical — в чём разница?",
    "options": [
      "больше машин vs мощнее одна машина",
      "одно и то же",
      "только cloud",
      "только Python"
    ],
    "answer": 0,
    "explain": "Scale out — добавить инстансы; scale up — больше CPU/RAM. Подходит ответ «больше машин vs мощнее одна машина».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s781"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: adaptive specializing interpreter — про что?",
    "options": [
      "ускорение hot path с 3.11+",
      "только pip",
      "HTTP header",
      "pytest fixture"
    ],
    "answer": 0,
    "explain": "Ускорение hot path с 3.11+. Подходит ответ «ускорение hot path с 3.11+». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка как таковой.",
    "kind": "single",
    "group": "CPython и память",
    "id": "s782"
  },
  {
    "topic": "distributed",
    "q": "В чём разница: outbox vs inbox?",
    "options": [
      "отправка vs идемпотентный приём",
      "синонимы",
      "только Kafka Stream",
      "RPC"
    ],
    "answer": 0,
    "explain": "Надёжный обмен. Подходит ответ «отправка vs идемпотентный приём». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s783"
  },
  {
    "topic": "patterns",
    "q": "Что такое Backend for Frontend (BFF)?",
    "options": [
      "отдельный API под нужды конкретного клиента",
      "один REST на все UI",
      "только GraphQL ban",
      "CDN"
    ],
    "answer": 0,
    "explain": "Мобильный и веб-клиент не тянут один толстый API. Подходит ответ «отдельный API под нужды конкретного клиента».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s784"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: Повторять транзакцию до 3 раз при serialization failure?",
    "options": [
      "да, типичный паттерн retry",
      "никогда",
      "только DROP TABLE",
      "переключить на MyISAM"
    ],
    "answer": 0,
    "explain": "Код 40001 (serialization_failure) обычно обрабатывают повтором попытки. Подходит ответ «да, типичный паттерн retry».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s785"
  },
  {
    "topic": "design",
    "q": "Что такое Антикоррупционный слой?",
    "options": [
      "изолирует внешнюю модель от домена",
      "логирует SQL",
      "кэширует",
      "сжимает JSON"
    ],
    "answer": 0,
    "explain": "DDD. Подходит ответ «изолирует внешнюю модель от домена».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s786"
  },
  {
    "topic": "distributed",
    "q": "Что такое идемпотентный API важен?",
    "options": [
      "ретраях сети: повтор не должен дважды списать деньги",
      "только GET cache",
      "только UDP",
      "GIL"
    ],
    "answer": 0,
    "explain": "Idempotency-Key, natural keys. Подходит ответ «ретраях сети: повтор не должен дважды списать деньги».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s787"
  },
  {
    "topic": "architecture",
    "q": "Выбери верный вариант: Паттерн Event Sourcing?",
    "options": [
      "состояние как поток событий",
      "удалить тесты",
      "только monolith ban",
      "GIL pattern"
    ],
    "answer": 0,
    "explain": "Состояние как поток событий. Подходит ответ «состояние как поток событий». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s788"
  },
  {
    "topic": "cache",
    "q": "Выбери верный вариант: Паттерн write-around?",
    "options": [
      "запись в store, минуя кэш",
      "только Redis Cluster",
      "запрещён",
      "равен TTL=0"
    ],
    "answer": 0,
    "explain": "Запись в store, минуя кэш. Подходит ответ «запись в store, минуя кэш». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s789"
  },
  {
    "topic": "SOLID",
    "q": "Как в Python обычно внедряют зависимости для DIP?",
    "options": [
      "конструктор/функция + Protocol/ABC",
      "только singleton global",
      "import внутри метода всегда",
      "eval"
    ],
    "answer": 0,
    "explain": "DI через параметры конструктора или фабрики. Подходит ответ «конструктор/функция + Protocol/ABC». SOLID — набор принципов объектного дизайна; в Python их обычно выражают через протоколы, ABC и композицию.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s790"
  },
  {
    "topic": "cache",
    "q": "В чём риск TTL=60s без jitter —?",
    "options": [
      "синхронный stampede при массовом истечении",
      "только больше RAM",
      "невозможность hit",
      "GIL"
    ],
    "answer": 0,
    "explain": "Добавляй jitter / soft TTL / singleflight. Подходит ответ «синхронный stampede при массовом истечении».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s791"
  },
  {
    "topic": "architecture",
    "q": "В чём разница: published language vs ACL?",
    "options": [
      "общий язык vs переводчик",
      "синонимы",
      "BFF",
      "shared kernel opposite always"
    ],
    "answer": 0,
    "explain": "Интеграционные стили. Подходит ответ «общий язык vs переводчик». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s792"
  },
  {
    "topic": "idempotency keys",
    "q": "Выбери верный вариант: Ключ идемпотентности в API?",
    "options": [
      "предотвращает дубль эффекта",
      "шифрует body",
      "заменяет auth",
      "сжимает JSON"
    ],
    "answer": 0,
    "explain": "Повтор POST безопаснее. Подходит ответ «предотвращает дубль эффекта».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s793"
  },
  {
    "topic": "architecture",
    "q": "В чём разница: saga vs 2PC?",
    "options": [
      "saga — локальные транзакции + компенсации; 2PC — распределённый commit",
      "одно и то же",
      "saga только monolith",
      "2PC без координатора"
    ],
    "answer": 0,
    "explain": "В микросервисах чаще saga. Подходит ответ «saga — локальные транзакции + компенсации; 2PC — распределённый commit».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s794"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: READ UNCOMMITTED и аномалия «phantom read»?",
    "options": [
      "зависит от СУБД — сверяй документацию/стандарт",
      "всегда разрешена везде",
      "всегда запрещена везде",
      "только в SQLite"
    ],
    "answer": 0,
    "explain": "Не путай SQL-standard и реализацию. Подходит ответ «зависит от СУБД — сверяй документацию/стандарт».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s795"
  },
  {
    "topic": "architecture",
    "q": "Что такое Load balancer round-robin?",
    "options": [
      "поочерёдная раздача запросов инстансам",
      "случайный выбор всегда",
      "только sticky session",
      "только gRPC"
    ],
    "answer": 0,
    "explain": "Простейшая стратегия балансировки. Подходит ответ «поочерёдная раздача запросов инстансам». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s796"
  },
  {
    "topic": "cache",
    "q": "Что такое cache stampede / thundering herd?",
    "options": [
      "толпа одновременных пересчётов одного ключа",
      "нормальный hit ratio",
      "только CDN",
      "GIL"
    ],
    "answer": 0,
    "explain": "Lock/singleflight/early refresh. Подходит ответ «толпа одновременных пересчётов одного ключа». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s797"
  },
  {
    "topic": "Zen",
    "q": "Выбери верный вариант: «Namespaces are one honking great idea» в Python связано с?",
    "options": [
      "модулями и пакетами",
      "только class",
      "GIL",
      "asyncio"
    ],
    "answer": 0,
    "explain": "Import module — изоляция имён и зон ответственности. Подходит ответ «модулями и пакетами».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s798"
  },
  {
    "topic": "distributed",
    "q": "Что такое at-least-once доставка значит?",
    "options": [
      "сообщение может прийти >1 раза, а затем нужна идемпотентность",
      "ровно один раз always",
      "never",
      "only batch"
    ],
    "answer": 0,
    "explain": "Типично для очередей. Подходит ответ «сообщение может прийти >1 раза, а затем нужна идемпотентность».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s799"
  },
  {
    "topic": "patterns",
    "q": "Что такое Bulkhead pattern?",
    "options": [
      "изоляция пулов ресурсов (потоки/соединения)",
      "кэш L1",
      "ORM lazy load",
      "pickle pool"
    ],
    "answer": 0,
    "explain": "Сбой в одном пуле не исчерпывает все ресурсы. Подходит ответ «изоляция пулов ресурсов (потоки/соединения)».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s800"
  },
  {
    "topic": "distributed",
    "q": "В чём разница: saga choreography vs orchestration?",
    "options": [
      "события между сервисами vs центральный координатор",
      "одно",
      "2PC",
      "только Kafka"
    ],
    "answer": 0,
    "explain": "Распределённые процессы. Подходит ответ «события между сервисами vs центральный координатор». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s801"
  },
  {
    "topic": "architecture",
    "q": "Выбери верный вариант: Sticky session (session affinity) нужна когда?",
    "options": [
      "состояние сессии локально на инстансе",
      "stateless API всегда",
      "только cache",
      "только CDN"
    ],
    "answer": 0,
    "explain": "Иначе пользователь прыгает между серверами без shared session store. Подходит ответ «состояние сессии локально на инстансе».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s802"
  },
  {
    "topic": "db",
    "q": "Что такое synchronous_commit off tradeoff?",
    "options": [
      "скорость vs риск потери при crash",
      "всегда safe faster",
      "только replica",
      "ORM"
    ],
    "answer": 0,
    "explain": "PG настройки. Подходит ответ «скорость vs риск потери при crash». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s803"
  },
  {
    "topic": "SOLID",
    "q": "Как в Python часто выделяют ответственности по SRP?",
    "options": [
      "отдельные модули/классы: repo, service, api",
      "один god-object",
      "только global",
      "eval"
    ],
    "answer": 0,
    "explain": "Слои и роли: хранение, бизнес-логика, интерфейс. Подходит ответ «отдельные модули/классы: repo, service, api».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s804"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: REPEATABLE READ и аномалия «dirty read»?",
    "options": [
      "зависит от СУБД — сверяй документацию/стандарт",
      "всегда разрешена везде",
      "всегда запрещена везде",
      "только в SQLite"
    ],
    "answer": 0,
    "explain": "Не путай SQL-standard и реализацию. Подходит ответ «зависит от СУБД — сверяй документацию/стандарт».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s805"
  },
  {
    "topic": "architecture",
    "q": "Что означает Eventual consistency?",
    "options": [
      "реплики сойдутся со временем без мгновенной согласованности",
      "всегда strong",
      "только single node",
      "без реплик"
    ],
    "answer": 0,
    "explain": "Типично для Dynamo-style хранилищ. Подходит ответ «реплики сойдутся со временем без мгновенной согласованности».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s806"
  },
  {
    "topic": "cache",
    "q": "Что такое stampede / thundering herd?",
    "options": [
      "масса запросов одновременно пересчитывает один ключ",
      "OOM от одного ключа",
      "DNS fail",
      "GIL"
    ],
    "answer": 0,
    "explain": "Lock/singleflight, soft TTL, jitter. Подходит ответ «масса запросов одновременно пересчитывает один ключ».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s807"
  },
  {
    "topic": "patterns",
    "q": "Что такое Null Object pattern?",
    "options": [
      "объект с no-op поведением вместо None",
      "NoneType subclass обязателен",
      "Optional ban",
      "mock only"
    ],
    "answer": 0,
    "explain": "Меньше ветвлений. Подходит ответ «объект с no-op поведением вместо None».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s808"
  },
  {
    "topic": "events",
    "q": "Выбери верный вариант: Outbox pattern нужен для?",
    "options": [
      "надёжной публикации событий с БД",
      "GUI",
      "сортировки",
      "GIL"
    ],
    "answer": 0,
    "explain": "Транзакционная отправка. Подходит ответ «надёжной публикации событий с БД».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s809"
  },
  {
    "topic": "architecture",
    "q": "Что такое data mesh принцип?",
    "options": [
      "доменные владельцы данных",
      "одно озеро без владельцев",
      "только ETL nightly",
      "CQRS synonym"
    ],
    "answer": 0,
    "explain": "Орг+тех. Подходит ответ «доменные владельцы данных». Архитектура — про границы модулей и сервисов и про то, где живут зависимости.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "s810"
  },
  {
    "topic": "cache",
    "q": "Что такое hot key split?",
    "options": [
      "шардинг популярного ключа",
      "TTL decrease only",
      "one box",
      "CPU pin"
    ],
    "answer": 0,
    "explain": "Перекос ключей. Подходит ответ «шардинг популярного ключа». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s811"
  },
  {
    "topic": "db",
    "q": "Что такое snapshot isolation anomaly?",
    "options": [
      "write skew и др.",
      "не бывает аномалий",
      "только dirty read",
      "GIL"
    ],
    "answer": 0,
    "explain": "Уровни изоляции. Подходит ответ «write skew и др.». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s812"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: serializable critical section через?",
    "options": [
      "правильные уровни/ретраи сериализации",
      "READ UNCOMMITTED",
      "autocommit",
      "NoSQL only"
    ],
    "answer": 0,
    "explain": "Аномалии. Подходит ответ «правильные уровни/ретраи сериализации». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s813"
  },
  {
    "topic": "cache",
    "q": "Выбери верный вариант: Паттерн write-through?",
    "options": [
      "запись в кэш и store синхронно",
      "только Redis Cluster",
      "запрещён",
      "равен TTL=0"
    ],
    "answer": 0,
    "explain": "Запись в кэш и store синхронно. Подходит ответ «запись в кэш и store синхронно». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s814"
  },
  {
    "topic": "distributed",
    "q": "Выбери верный вариант: Семантика доставки exactly-once?",
    "options": [
      "на практике часто = at-least-once + идемпотентный приём",
      "всегда бесплатна в любой очереди",
      "только UDP",
      "гарантируется GIL"
    ],
    "answer": 0,
    "explain": "На практике часто = at-least-once + идемпотентный приём. Подходит ответ «на практике часто = at-least-once + идемпотентный приём».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s815"
  },
  {
    "topic": "cache",
    "q": "В чём риск TTL=600s без jitter —?",
    "options": [
      "синхронный stampede при массовом истечении",
      "только больше RAM",
      "невозможность hit",
      "GIL"
    ],
    "answer": 0,
    "explain": "Добавляй jitter / soft TTL / singleflight. Подходит ответ «синхронный stampede при массовом истечении».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s816"
  },
  {
    "topic": "db",
    "q": "В чём риск online DDL?",
    "options": [
      "блокировки/нагрузка при миграциях",
      "всегда free",
      "только SQLite",
      "ORM"
    ],
    "answer": 0,
    "explain": "Планируй окна/алгоритмы. Подходит ответ «блокировки/нагрузка при миграциях». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s817"
  },
  {
    "topic": "cache",
    "q": "Что вернёт multi-layer cache invalidation?",
    "options": [
      "сложная согласованность",
      "trivial",
      "не нужна never",
      "TTL only solves all"
    ],
    "answer": 0,
    "explain": "Hard problem. Подходит ответ «сложная согласованность». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s818"
  },
  {
    "topic": "db",
    "q": "Какой типичный симптом connection pool exhaustion?",
    "options": [
      "запросы висят в ожидании свободного коннекта",
      "всегда CPU 100%",
      "только disk",
      "GIL"
    ],
    "answer": 0,
    "explain": "Таймауты, утечки, длинные транзакции. Подходит ответ «запросы висят в ожидании свободного коннекта».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s819"
  },
  {
    "topic": "distributed",
    "q": "Что такое CRDT?",
    "options": [
      "слияние без координатора",
      "2PC",
      "saga",
      "mutex cluster"
    ],
    "answer": 0,
    "explain": "Conflict-free types. Подходит ответ «слияние без координатора». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s820"
  },
  {
    "topic": "cache",
    "q": "Выбери верный вариант: Singleflight / request coalescing против?",
    "options": [
      "cache stampede",
      "LRU",
      "TTL",
      "CDN only"
    ],
    "answer": 0,
    "explain": "Один промах — один запрос. Подходит ответ «cache stampede». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s821"
  },
  {
    "topic": "cache",
    "q": "Что такое Stampede?",
    "options": [
      "массовый промах кэша",
      "LRU overflow",
      "hash collision",
      "GIL thrash"
    ],
    "answer": 0,
    "explain": "Singleflight/lock. Подходит ответ «массовый промах кэша». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "code": "# cache miss storm",
    "group": "Данные и распределёнка",
    "id": "s822"
  },
  {
    "topic": "cache",
    "q": "Что такое thundering herd?",
    "options": [
      "масса клиентов бьёт origin",
      "один client",
      "DNS only",
      "GC"
    ],
    "answer": 0,
    "explain": "Locks/singleflight. Подходит ответ «масса клиентов бьёт origin». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s823"
  },
  {
    "topic": "db",
    "q": "Что вернёт connection pooler (PgBouncer) transaction pooling нюанс?",
    "options": [
      "session state/prepared осторожно",
      "прозрачно всегда",
      "заменяет replicas",
      "ORM off"
    ],
    "answer": 0,
    "explain": "Режим пулера. Подходит ответ «session state/prepared осторожно». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s824"
  },
  {
    "topic": "cache",
    "q": "В чём разница: side-cache vs inline cache в CPU sense?",
    "options": [
      "разные уровни; в app — обычно отдельный store",
      "одно",
      "GIL cache",
      "bytecode cache same"
    ],
    "answer": 0,
    "explain": "Не путать термины. Подходит ответ «разные уровни; в app — обычно отдельный store». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s825"
  },
  {
    "topic": "cache",
    "q": "Зачем нужен negative cache TTL=60s?",
    "options": [
      "не долбить origin на повторных miss/404",
      "хранить пароли",
      "увеличить hit forever",
      "отключить Redis"
    ],
    "answer": 0,
    "explain": "Короткий TTL на отсутствие. Подходит ответ «не долбить origin на повторных miss/404». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s826"
  },
  {
    "topic": "db",
    "q": "Что такое covering index?",
    "options": [
      "индекс, из которого можно ответить без обращения к таблице",
      "полный table scan",
      "только PK",
      "foreign key"
    ],
    "answer": 0,
    "explain": "Index-only scan. Подходит ответ «индекс, из которого можно ответить без обращения к таблице». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s827"
  },
  {
    "topic": "db",
    "q": "В чём разница: Repeatable read vs read committed?",
    "options": [
      "разный уровень видимости аномалий",
      "одно и то же",
      "только MySQL term",
      "GIL isolation"
    ],
    "answer": 0,
    "explain": "Изоляция транзакций. Подходит ответ «разный уровень видимости аномалий». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s828"
  },
  {
    "topic": "cache",
    "q": "Зачем нужен negative cache TTL=12s?",
    "options": [
      "не долбить origin на повторных miss/404",
      "хранить пароли",
      "увеличить hit forever",
      "отключить Redis"
    ],
    "answer": 0,
    "explain": "Короткий TTL на отсутствие. Подходит ответ «не долбить origin на повторных miss/404». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s829"
  },
  {
    "topic": "db",
    "q": "Какой типичный симптом N+1: 1 запрос списка + 100 связанных —?",
    "options": [
      "лишние round-trip в БД (ORM lazy)",
      "слишком большой JOIN всегда",
      "только отсутствие индекса PK",
      "GIL"
    ],
    "answer": 0,
    "explain": "Лечится eager/join/IN. Подходит ответ «лишние round-trip в БД (ORM lazy)». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s830"
  },
  {
    "topic": "serialization",
    "q": "Что такое protobuf unknown fields?",
    "options": [
      "сохраняют forward compat",
      "всегда drop",
      "ломают wire",
      "JSON only"
    ],
    "answer": 0,
    "explain": "Эволюция схемы. Подходит ответ «сохраняют forward compat».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s831"
  },
  {
    "topic": "distributed",
    "q": "Что такое poison message?",
    "options": [
      "сообщение, которое всегда валит consumer",
      "TTL",
      "heartbeat",
      "leader"
    ],
    "answer": 0,
    "explain": "DLQ паттерн. Подходит ответ «сообщение, которое всегда валит consumer». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s832"
  },
  {
    "topic": "cache",
    "q": "Зачем нужен negative cache TTL=3s?",
    "options": [
      "не долбить origin на повторных miss/404",
      "хранить пароли",
      "увеличить hit forever",
      "отключить Redis"
    ],
    "answer": 0,
    "explain": "Короткий TTL на отсутствие. Подходит ответ «не долбить origin на повторных miss/404». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s833"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: SERIALIZABLE и аномалия «non-repeatable read»?",
    "options": [
      "зависит от СУБД — сверяй документацию/стандарт",
      "всегда разрешена везде",
      "всегда запрещена везде",
      "только в SQLite"
    ],
    "answer": 0,
    "explain": "Не путай SQL-standard и реализацию. Подходит ответ «зависит от СУБД — сверяй документацию/стандарт».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s834"
  },
  {
    "topic": "queues",
    "q": "В чём разница: asyncio.Queue vs queue.Queue?",
    "options": [
      "для event loop vs для потоков",
      "одно и то же",
      "первая для процессов",
      "вторая для async"
    ],
    "answer": 0,
    "explain": "Не смешивать модели. Подходит ответ «для event loop vs для потоков».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s835"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: REPEATABLE READ и аномалия «non-repeatable read»?",
    "options": [
      "зависит от СУБД — сверяй документацию/стандарт",
      "всегда разрешена везде",
      "всегда запрещена везде",
      "только в SQLite"
    ],
    "answer": 0,
    "explain": "Не путай SQL-standard и реализацию. Подходит ответ «зависит от СУБД — сверяй документацию/стандарт».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s836"
  },
  {
    "topic": "db",
    "q": "Что такое idle_in_transaction_session_timeout?",
    "options": [
      "убивает зависшие транзакции",
      "pool size",
      "vacuum",
      "index"
    ],
    "answer": 0,
    "explain": "Гигиена соединений. Подходит ответ «убивает зависшие транзакции». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s837"
  },
  {
    "topic": "cache",
    "q": "Что такое negative caching?",
    "options": [
      "кэш промахов/404",
      "только hit",
      "write-only",
      "LRU off"
    ],
    "answer": 0,
    "explain": "Защита от повторов miss. Подходит ответ «кэш промахов/404». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s838"
  },
  {
    "topic": "db",
    "q": "Какой типичный симптом N+1: 1 запрос списка + 10 связанных —?",
    "options": [
      "лишние round-trip в БД (ORM lazy)",
      "слишком большой JOIN всегда",
      "только отсутствие индекса PK",
      "GIL"
    ],
    "answer": 0,
    "explain": "Лечится eager/join/IN. Подходит ответ «лишние round-trip в БД (ORM lazy)». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s839"
  },
  {
    "topic": "db",
    "q": "Что такое LISTEN/NOTIFY?",
    "options": [
      "лёгкие события PostgreSQL",
      "Kafka replacement always",
      "CDC full",
      "RPC"
    ],
    "answer": 0,
    "explain": "Сигналы внутри БД. Подходит ответ «лёгкие события PostgreSQL». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s840"
  },
  {
    "topic": "distributed",
    "q": "В чём риск heartbeat timeout ~200ms слишком маленький?",
    "options": [
      "ложные failover при GC/сети",
      "только быстрее recovery без минусов",
      "не влияет",
      "ломает TLS"
    ],
    "answer": 0,
    "explain": "Баланс sensitivity vs stability. Подходит ответ «ложные failover при GC/сети». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s841"
  },
  {
    "topic": "cache",
    "q": "Что вернёт soft TTL ≈5s + background refresh идея?",
    "options": [
      "отдавать stale и обновлять асинхронно",
      "удалить ключ навсегда",
      "удвоить RAM",
      "отключить app"
    ],
    "answer": 0,
    "explain": "Против stampede. Подходит ответ «отдавать stale и обновлять асинхронно». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s842"
  },
  {
    "topic": "distributed",
    "q": "Что такое gossip protocol?",
    "options": [
      "эпидемическое распространение состояния",
      "2PC",
      "Raft leader only term",
      "SMTP"
    ],
    "answer": 0,
    "explain": "Членство кластера. Подходит ответ «эпидемическое распространение состояния». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s843"
  },
  {
    "topic": "distributed",
    "q": "В чём риск heartbeat timeout ~100ms слишком маленький?",
    "options": [
      "ложные failover при GC/сети",
      "только быстрее recovery без минусов",
      "не влияет",
      "ломает TLS"
    ],
    "answer": 0,
    "explain": "Баланс sensitivity vs stability. Подходит ответ «ложные failover при GC/сети». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s844"
  },
  {
    "topic": "db",
    "q": "Какой типичный симптом pool_size=10 исчерпан —?",
    "options": [
      "запросы ждут коннект / таймауты",
      "CPU 100% всегда",
      "только disk full",
      "GIL deadlock only"
    ],
    "answer": 0,
    "explain": "Утечки, длинные транзакции, мало пула. Подходит ответ «запросы ждут коннект / таймауты». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s845"
  },
  {
    "topic": "retries",
    "q": "Что вернёт Exponential backoff + jitter чтобы?",
    "options": [
      "не долбить сервис синхронно",
      "ускорить CPU",
      "убрать ошибки навсегда",
      "кэшировать GIL"
    ],
    "answer": 0,
    "explain": "Устойчивость клиентов. Подходит ответ «не долбить сервис синхронно».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s846"
  },
  {
    "topic": "db",
    "q": "Что такое N+1 проблема?",
    "options": [
      "много запросов вместо join/prefetch",
      "один огромный SQL",
      "GIL waits",
      "index miss only"
    ],
    "answer": 0,
    "explain": "ORM классика. Подходит ответ «много запросов вместо join/prefetch». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s847"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: READ COMMITTED и аномалия «phantom read»?",
    "options": [
      "зависит от СУБД — сверяй документацию/стандарт",
      "всегда разрешена везде",
      "всегда запрещена везде",
      "только в SQLite"
    ],
    "answer": 0,
    "explain": "Не путай SQL-standard и реализацию. Подходит ответ «зависит от СУБД — сверяй документацию/стандарт».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s848"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: При REPEATABLE READ write skew?",
    "options": [
      "возможен или нет в зависимости от СУБД/реализации — проверяй документацию",
      "невозможен никогда нигде",
      "только в MyISAM",
      "только NoSQL"
    ],
    "answer": 0,
    "explain": "Теория изоляций ≠ конкретный движок. Подходит ответ «возможен или нет в зависимости от СУБД/реализации — проверяй документацию».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s849"
  },
  {
    "topic": "cache",
    "q": "Выбери верный вариант: Паттерн write-back?",
    "options": [
      "запись в кэш, store отложенно",
      "только Redis Cluster",
      "запрещён",
      "равен TTL=0"
    ],
    "answer": 0,
    "explain": "Запись в кэш, store отложенно. Подходит ответ «запись в кэш, store отложенно». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s850"
  },
  {
    "topic": "distributed",
    "q": "Что такое hedged requests?",
    "options": [
      "параллельные дубли против хвоста латентности",
      "retry serial only",
      "cache",
      "bulkhead opposite"
    ],
    "answer": 0,
    "explain": "Хвостовая задержка. Подходит ответ «параллельные дубли против хвоста латентности». В распределённых системах приходится жить с очередями, задержками, идемпотентностью и частичными сбоями.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s851"
  },
  {
    "topic": "cache",
    "q": "Что такое negative caching кэширует?",
    "options": [
      "факт отсутствия (404/miss) на короткое время",
      "только hits",
      "пароли",
      "байткод"
    ],
    "answer": 0,
    "explain": "Против повторных дорогих miss. Подходит ответ «факт отсутствия (404/miss) на короткое время». Кэш полезен для скорости, но всегда поднимает вопросы согласованности, инвалидации и hot keys.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s852"
  },
  {
    "topic": "db",
    "q": "Что такое materialized view?",
    "options": [
      "кэш запроса на диске/сервере",
      "обычный VIEW always same cost",
      "index only",
      "temp table session"
    ],
    "answer": 0,
    "explain": "Обновление/refresh. Подходит ответ «кэш запроса на диске/сервере». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s853"
  },
  {
    "topic": "serialization",
    "q": "Почему protobuf schema-first?",
    "options": [
      "явный контракт и совместимость полей",
      "человекочитаемее JSON always",
      "без версий",
      "медленнее всегда"
    ],
    "answer": 0,
    "explain": "Эволюция API. Подходит ответ «явный контракт и совместимость полей».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s854"
  },
  {
    "topic": "cache",
    "q": "В чём риск TTL=300s без jitter —?",
    "options": [
      "синхронный stampede при массовом истечении",
      "только больше RAM",
      "невозможность hit",
      "GIL"
    ],
    "answer": 0,
    "explain": "Добавляй jitter / soft TTL / singleflight. Подходит ответ «синхронный stampede при массовом истечении».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s855"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: Повторять транзакцию до 2 раз при serialization failure?",
    "options": [
      "да, типичный паттерн retry",
      "никогда",
      "только DROP TABLE",
      "переключить на MyISAM"
    ],
    "answer": 0,
    "explain": "Код 40001 (serialization_failure) обычно обрабатывают повтором попытки. Подходит ответ «да, типичный паттерн retry».",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s856"
  },
  {
    "topic": "db",
    "q": "Выбери верный вариант: SELECT FOR UPDATE связан с?",
    "options": [
      "блокировкой строк транзакции",
      "readonly replica hint always",
      "кэшем Redis",
      "VACUUM"
    ],
    "answer": 0,
    "explain": "Пессимистичные блокировки. Подходит ответ «блокировкой строк транзакции». В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "group": "Данные и распределёнка",
    "id": "s857"
  }
];
