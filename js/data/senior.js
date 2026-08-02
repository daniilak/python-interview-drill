window.QUESTIONS_SENIOR = [
  {
    "topic": "CPython",
    "q": "Основная структура объекта CPython?",
    "options": [
      "PyObject (refcount + type)",
      "только указатель",
      "JVM object header",
      "Go interface"
    ],
    "answer": 0,
    "explain": "Все объекты — PyObject-совместимы.",
    "group": "CPython и память",
    "id": "s1"
  },
  {
    "topic": "CPython",
    "q": "Словари CPython оптимизированы как…",
    "options": [
      "compact + insertion-ordered (3.6+)",
      "hash table без порядка",
      "tree map",
      "B-tree"
    ],
    "answer": 0,
    "explain": "Порядок вставки — язык. контракт с 3.7.",
    "group": "CPython и память",
    "id": "s2"
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
    "explain": "Макросы ALLOW/END_ALLOW_THREADS.",
    "group": "Потоки, процессы, GIL",
    "id": "s3"
  },
  {
    "topic": "GIL",
    "q": "free-threading (PEP 703) цель…",
    "options": [
      "опционально убрать GIL",
      "ускорить single-thread 10x всегда",
      "заменить asyncio",
      "удалить refcount"
    ],
    "answer": 0,
    "explain": "Эксперименты в 3.13+.",
    "group": "Потоки, процессы, GIL",
    "id": "s4"
  },
  {
    "topic": "память",
    "q": "pymalloc — это…",
    "options": [
      "аллокатор мелких объектов CPython",
      "OS malloc только",
      "GPU heap",
      "swap file"
    ],
    "answer": 0,
    "explain": "Арена/пулы для small allocs.",
    "group": "CPython и память",
    "id": "s5"
  },
  {
    "topic": "память",
    "q": "__slots__ экономит за счёт…",
    "options": [
      "отказа от per-instance __dict__",
      "сжатия bytecode",
      "отключения GC",
      "mmap"
    ],
    "answer": 0,
    "explain": "Фиксированные дескрипторы.",
    "group": "CPython и память",
    "id": "s6"
  },
  {
    "topic": "GC",
    "q": "gc.freeze() используется…",
    "options": [
      "чтобы не трейсить старые объекты после fork/copy-on-write",
      "удалить GIL",
      "очистить RAM сразу",
      "disable refcount"
    ],
    "answer": 0,
    "explain": "Оптимизация для copy-on-write.",
    "group": "Stdlib и производительность",
    "id": "s7"
  },
  {
    "topic": "import",
    "q": "importlib позволяет…",
    "options": [
      "программный импорт и лоадеры",
      "только pip",
      "компиляцию C",
      "удаление sys"
    ],
    "answer": 0,
    "explain": "Метапуть импорта.",
    "group": "Stdlib и производительность",
    "id": "s8"
  },
  {
    "topic": "import",
    "q": "sys.meta_path — это…",
    "options": [
      "finders для импорта",
      "PYTHONPATH str",
      "site-packages list only",
      "GIL queue"
    ],
    "answer": 0,
    "explain": "PEP 302/451.",
    "group": "Stdlib и производительность",
    "id": "s9"
  },
  {
    "topic": "байткод",
    "q": "dis.dis показывает…",
    "options": [
      "байткод функции",
      "машинный asm x86 всегда",
      "IR LLVM",
      "AST только"
    ],
    "answer": 0,
    "explain": "Дизассемблер bytecode.",
    "group": "CPython и память",
    "id": "s10"
  },
  {
    "topic": "байткод",
    "q": ".compile / ast.parse связаны с…",
    "options": [
      "компиляцией в code object",
      "сетевым RPC",
      "SQL",
      "GIL"
    ],
    "answer": 0,
    "explain": "Фронтенд интерпретатора.",
    "group": "CPython и память",
    "id": "s11"
  },
  {
    "topic": "дескрипторы",
    "q": "Data descriptor имеет…",
    "options": [
      "__set__/__delete__ (+ __get__)",
      "только __get__",
      "только __call__",
      "slots"
    ],
    "answer": 0,
    "explain": "Перебивает instance dict.",
    "group": "Метаклассы и типы",
    "id": "s12"
  },
  {
    "topic": "дескрипторы",
    "q": "Non-data descriptor…",
    "options": [
      "только __get__, слабее instance __dict__",
      "сильнее всегда",
      "запрещён",
      "это property.setter"
    ],
    "answer": 0,
    "explain": "Функции — non-data descriptors.",
    "group": "Метаклассы и типы",
    "id": "s13"
  },
  {
    "topic": "метаклассы",
    "q": "Метакласс — это…",
    "options": [
      "класс класса (type subclass)",
      "декоратор",
      "модуль",
      "ABC"
    ],
    "answer": 0,
    "explain": "type(name, bases, ns).",
    "group": "Метаклассы и типы",
    "id": "s14"
  },
  {
    "topic": "метаклассы",
    "q": "class A(metaclass=M): вызывает…",
    "options": [
      "M(name, bases, namespace)",
      "A.__new__ только",
      "import hook",
      "GC"
    ],
    "answer": 0,
    "explain": "Создание класса.",
    "group": "Метаклассы и типы",
    "id": "s15"
  },
  {
    "topic": "метаклассы",
    "q": "__init_subclass__ полезен чтобы…",
    "options": [
      "хукать создание подклассов без метакласса",
      "заменить __init__",
      "GIL",
      "slots auto"
    ],
    "answer": 0,
    "explain": "PEP 487.",
    "group": "Метаклассы и типы",
    "id": "s16"
  },
  {
    "topic": "typing",
    "q": "typing.overload нужен для…",
    "options": [
      "нескольких сигнатур для чекера",
      "runtime dispatch обязательно",
      "ускорения",
      "decorators"
    ],
    "answer": 0,
    "explain": "Только для type checkers.",
    "group": "Typing и dataclasses",
    "id": "s17"
  },
  {
    "topic": "typing",
    "q": "TypeVar bound=… ограничивает…",
    "options": [
      "верхнюю границу параметра типа",
      "runtime cast",
      "GIL",
      "slots"
    ],
    "answer": 0,
    "explain": "Generics.",
    "group": "Typing и dataclasses",
    "id": "s18"
  },
  {
    "topic": "typing",
    "q": "ParamSpec / Concatenate для…",
    "options": [
      "типизации декораторов (*args/**kwargs)",
      "list[int]",
      "Enum",
      "async IO"
    ],
    "answer": 0,
    "explain": "PEP 612.",
    "group": "Typing и dataclasses",
    "id": "s19"
  },
  {
    "topic": "typing",
    "q": "LiteralString (3.11) помогает…",
    "options": [
      "отличать доверенные строки от произвольных",
      "шифровать",
      "intern",
      "bytes"
    ],
    "answer": 0,
    "explain": "Анти-SQL-injection в типах.",
    "group": "Typing и dataclasses",
    "id": "s20"
  },
  {
    "topic": "concurrency",
    "q": "concurrent.futures даёт…",
    "options": [
      "Thread/ProcessPoolExecutor",
      "только asyncio",
      "GIL kill",
      "GPU"
    ],
    "answer": 0,
    "explain": "Высокоуровневые пулы.",
    "group": "Потоки, процессы, GIL",
    "id": "s21"
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
    "explain": "Обход GIL ценой IPC.",
    "group": "Потоки, процессы, GIL",
    "id": "s22"
  },
  {
    "topic": "asyncio",
    "q": "Semaphore vs Lock в asyncio?",
    "options": [
      "Semaphore допускает N, Lock — 1",
      "нет разницы",
      "Lock для процессов",
      "Semaphore sync only"
    ],
    "answer": 0,
    "explain": "Ограничение конкурентности.",
    "group": "Asyncio",
    "id": "s23"
  },
  {
    "topic": "asyncio",
    "q": "asyncio.TaskGroup (3.11)…",
    "options": [
      "структурированное конкурентное выполнение задач",
      "замена threading",
      "удаляет loop",
      "GIL"
    ],
    "answer": 0,
    "explain": "Structured concurrency.",
    "group": "Asyncio",
    "id": "s24"
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
    "explain": "Используйте to_thread / executors.",
    "group": "Asyncio",
    "id": "s25"
  },
  {
    "topic": "asyncio",
    "q": "loop.add_signal_handler доступен…",
    "options": [
      "не на всех платформах (ограничения Windows)",
      "везде одинаково",
      "только в threads",
      "в PyPy only"
    ],
    "answer": 0,
    "explain": "Платформенные нюансы.",
    "group": "Asyncio",
    "id": "s26"
  },
  {
    "topic": "multiprocessing",
    "q": "spawn vs fork start method…",
    "options": [
      "разный способ старта процесса и совместимость",
      "только имена",
      "GIL modes",
      "async"
    ],
    "answer": 0,
    "explain": "macOS/Windows default spawn.",
    "group": "Потоки, процессы, GIL",
    "id": "s27"
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
    "explain": "Arbitrary code execution.",
    "group": "Stdlib и производительность",
    "id": "s28"
  },
  {
    "topic": "security",
    "q": "Для секретов в логах важно…",
    "options": [
      "редактирование / не логировать",
      "print всегда",
      "pickle secrets",
      "держать в URL"
    ],
    "answer": 0,
    "explain": "Leak prevention.",
    "group": "Безопасность",
    "id": "s29"
  },
  {
    "topic": "API design",
    "q": "Хороший API в Python часто…",
    "options": [
      "явный, предсказуемый, с типами",
      "максимум магии __getattr__",
      "глобальные синглтоны везде",
      "молчаливые catch-all except"
    ],
    "answer": 0,
    "explain": "Явное лучше неявного (Zen).",
    "group": "Веб и API",
    "id": "s30"
  },
  {
    "topic": "Zen",
    "q": "«Explicit is better than implicit» из…",
    "options": [
      "The Zen of Python (PEP 20)",
      "PEP 8 только",
      "GIL docs",
      "POSIX"
    ],
    "answer": 0,
    "explain": "import this.",
    "group": "Архитектура и дизайн",
    "id": "s31"
  },
  {
    "topic": "SOLID",
    "q": "Dependency Inversion в Python часто через…",
    "options": [
      "протоколы/ABC + DI",
      "глобальные import",
      "GIL",
      "monkeypatch в проде"
    ],
    "answer": 0,
    "explain": "Зависимость от абстракций.",
    "group": "Архитектура и дизайн",
    "id": "s32"
  },
  {
    "topic": "patterns",
    "q": "В Python Singleton часто заменяют…",
    "options": [
      "модулем как синглтоном",
      "обязательным metaclass везде",
      "Borg только",
      "GoF строго"
    ],
    "answer": 0,
    "explain": "Модуль загружается один раз.",
    "group": "Архитектура и дизайн",
    "id": "s33"
  },
  {
    "topic": "patterns",
    "q": "Стратегия естественно выражается…",
    "options": [
      "функциями/callable первого класса",
      "только наследованием",
      "GIL strategies",
      "enum switch C-style обязателен"
    ],
    "answer": 0,
    "explain": "First-class functions.",
    "group": "Архитектура и дизайн",
    "id": "s34"
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
    "explain": "Нативный код для hotspots.",
    "group": "Stdlib и производительность",
    "id": "s35"
  },
  {
    "topic": "performance",
    "q": "Профилирование CPU: стандартно…",
    "options": [
      "cProfile / pyinstrument",
      "print time только в проде без меры",
      "gc.collect loop",
      "dis всегда"
    ],
    "answer": 0,
    "explain": "Измеряй до оптимизации.",
    "group": "Stdlib и производительность",
    "id": "s36"
  },
  {
    "topic": "performance",
    "q": "tracemalloc помогает…",
    "options": [
      "искать утечки аллокаций",
      "ускорить network",
      "убрать GIL",
      "форматировать JSON"
    ],
    "answer": 0,
    "explain": "Трассировка аллокаций.",
    "group": "Stdlib и производительность",
    "id": "s37"
  },
  {
    "topic": "caching",
    "q": "Кэш с вытеснением вручную часто на…",
    "options": [
      "OrderedDict / functools.lru_cache",
      "list.pop(0) как LRU идеал",
      "set",
      "queue.Queue only"
    ],
    "answer": 0,
    "explain": "move_to_end паттерн.",
    "group": "Данные и распределёнка",
    "id": "s38"
  },
  {
    "topic": "design",
    "q": "Fail fast означает…",
    "options": [
      "рано обнаруживать ошибки",
      "глотать exceptions",
      "retry бесконечно",
      "lazy import всегда"
    ],
    "answer": 0,
    "explain": "Быстрый сигнал о проблеме.",
    "group": "Архитектура и дизайн",
    "id": "s39"
  },
  {
    "topic": "design",
    "q": "Идемпотентность API важна для…",
    "options": [
      "безопасных повторов запросов",
      "GIL",
      "list.sort",
      "print"
    ],
    "answer": 0,
    "explain": "Повтор не меняет эффект.",
    "group": "Архитектура и дизайн",
    "id": "s40"
  },
  {
    "topic": "observability",
    "q": "Структурированные логи — это…",
    "options": [
      "machine-readable поля (JSON и т.п.)",
      "только print traceback",
      "pickle logs",
      "HTML"
    ],
    "answer": 0,
    "explain": "Удобный поиск/алерты.",
    "group": "Observability и качество",
    "id": "s41"
  },
  {
    "topic": "packaging",
    "q": "pyproject.toml — современный…",
    "options": [
      "стандарт манифеста сборки (PEP 518/621)",
      "только Poetry файл",
      "замена requirements без смысла",
      "runtime config app"
    ],
    "answer": 0,
    "explain": "Единая точка конфига пакета.",
    "group": "Packaging и CI",
    "id": "s42"
  },
  {
    "topic": "packaging",
    "q": "wheel — это…",
    "options": [
      "бинарный/готовый дистрибутив пакета",
      "исходник tar только",
      "venv",
      "conda exclusive"
    ],
    "answer": 0,
    "explain": "PEP 427.",
    "group": "Packaging и CI",
    "id": "s43"
  },
  {
    "topic": "packaging",
    "q": "abi3 / stable ABI нужен чтобы…",
    "options": [
      "одно колесо на несколько версий CPython",
      "убрать GIL",
      "ускорить import",
      "заменить ctypes"
    ],
    "answer": 0,
    "explain": "Limited API.",
    "group": "Packaging и CI",
    "id": "s44"
  },
  {
    "topic": "C-API",
    "q": "Capsule в C-API…",
    "options": [
      "безопасно передаёт C указатели",
      "JSON",
      "async handle",
      "GIL token"
    ],
    "answer": 0,
    "explain": "PyCapsule.",
    "group": "Нативные расширения",
    "id": "s45"
  },
  {
    "topic": "ctypes",
    "q": "ctypes подходит для…",
    "options": [
      "вызова C ABI из Python",
      "замены asyncio",
      "ORM",
      "templating"
    ],
    "answer": 0,
    "explain": "FFI без компиляции расширения.",
    "group": "Нативные расширения",
    "id": "s46"
  },
  {
    "topic": "cffi/pybind",
    "q": "pybind11/PyO3 — это…",
    "options": [
      "обёртки C++/Rust для расширений",
      "чистый Python web",
      "linters",
      "formatters"
    ],
    "answer": 0,
    "explain": "Нативные модули.",
    "group": "Нативные расширения",
    "id": "s47"
  },
  {
    "topic": "subinterpreters",
    "q": "PEP 554 / subinterpreters цель…",
    "options": [
      "изоляция внутри процесса",
      "удаление процессов",
      "JS bridge",
      "SQL"
    ],
    "answer": 0,
    "explain": "Меньше shared state.",
    "group": "Нативные расширения",
    "id": "s48"
  },
  {
    "topic": "typing",
    "q": "reveal_type() используется…",
    "options": [
      "в type checkers для отладки типов",
      "runtime print type всегда",
      "dis",
      "gc"
    ],
    "answer": 0,
    "explain": "mypy/pyright helper.",
    "group": "Typing и dataclasses",
    "id": "s49"
  },
  {
    "topic": "typing",
    "q": "cast(T, x) в typing…",
    "options": [
      "говорит чекеру тип, runtime no-op",
      "конвертирует значение",
      "валидирует",
      "бросает"
    ],
    "answer": 0,
    "explain": "Только для статического анализа.",
    "group": "Typing и dataclasses",
    "id": "s50"
  },
  {
    "topic": "runtime",
    "q": "__getattr__ на модуле (PEP 562)…",
    "options": [
      "ленивые атрибуты модуля",
      "запрещён",
      "только классы",
      "GIL hook"
    ],
    "answer": 0,
    "explain": "Module-level getattr.",
    "group": "Метаклассы и типы",
    "id": "s51"
  },
  {
    "topic": "lazy",
    "q": "import внутри функции плюсы…",
    "options": [
      "меньше циклов импорта / ленивый старт",
      "всегда быстрее",
      "обязателен pep8",
      "ломает typing всегда"
    ],
    "answer": 0,
    "explain": "Tradeoff читаемости.",
    "group": "Метаклассы и типы",
    "id": "s52"
  },
  {
    "topic": "exceptions",
    "q": "BaseException vs Exception…",
    "options": [
      "SystemExit/KeyboardInterrupt не от Exception",
      "нет разницы",
      "Exception выше",
      "BaseException deprecated"
    ],
    "answer": 0,
    "explain": "Не ловите BaseException широко.",
    "group": "Исключения и контекст",
    "id": "s53"
  },
  {
    "topic": "signals",
    "q": "Обработка сигналов и потоки…",
    "options": [
      "сигналы в главном потоке",
      "в любом потоке одинаково",
      "только asyncio",
      "только multiprocessing"
    ],
    "answer": 0,
    "explain": "Ограничение CPython.",
    "group": "Потоки, процессы, GIL",
    "id": "s54"
  },
  {
    "topic": "fork",
    "q": "После fork в многопоточном процессе опасно…",
    "options": [
      "состояние locks/threads",
      "только print",
      "int",
      "str intern"
    ],
    "answer": 0,
    "explain": "Только fork’нувший поток жив.",
    "group": "Потоки, процессы, GIL",
    "id": "s55"
  },
  {
    "topic": "security",
    "q": "yaml.load без SafeLoader…",
    "options": [
      "может выполнить код (устар. PyYAML)",
      "безопасен всегда",
      "только JSON",
      "не существует"
    ],
    "answer": 0,
    "explain": "safe_load / SafeLoader.",
    "group": "Безопасность",
    "id": "s56"
  },
  {
    "topic": "security",
    "q": "subprocess с shell=True риск…",
    "options": [
      "injection через строку команды",
      "только медленнее",
      "GIL",
      "нет риска"
    ],
    "answer": 0,
    "explain": "Передавайте list args.",
    "group": "Безопасность",
    "id": "s57"
  },
  {
    "topic": "architecture",
    "q": "Гексагональная архитектура акцентирует…",
    "options": [
      "порты/адаптеры, ядро без инфры",
      "монолит UI",
      "GIL layers",
      "один большой модуль"
    ],
    "answer": 0,
    "explain": "Домен независим от фреймворка.",
    "group": "Архитектура и дизайн",
    "id": "s58"
  },
  {
    "topic": "architecture",
    "q": "CQRS разделяет…",
    "options": [
      "чтение и запись модели/запросов",
      "CPU и IO",
      "sync async",
      "тесты и прод"
    ],
    "answer": 0,
    "explain": "Command Query Responsibility Segregation.",
    "group": "Архитектура и дизайн",
    "id": "s59"
  },
  {
    "topic": "events",
    "q": "Outbox pattern нужен для…",
    "options": [
      "надёжной публикации событий с БД",
      "GUI",
      "сортировки",
      "GIL"
    ],
    "answer": 0,
    "explain": "Транзакционная отправка.",
    "group": "Данные и распределёнка",
    "id": "s60"
  },
  {
    "topic": "retries",
    "q": "Exponential backoff + jitter чтобы…",
    "options": [
      "не долбить сервис синхронно",
      "ускорить CPU",
      "убрать ошибки навсегда",
      "кэшировать GIL"
    ],
    "answer": 0,
    "explain": "Устойчивость клиентов.",
    "group": "Данные и распределёнка",
    "id": "s61"
  },
  {
    "topic": "idempotency keys",
    "q": "Ключ идемпотентности в API…",
    "options": [
      "предотвращает дубль эффекта",
      "шифрует body",
      "заменяет auth",
      "сжимает JSON"
    ],
    "answer": 0,
    "explain": "Повтор POST безопаснее.",
    "group": "Данные и распределёнка",
    "id": "s62"
  },
  {
    "topic": "consistency",
    "q": "Read-your-writes — это…",
    "options": [
      "гарантия увидеть свои записи",
      "strong serializable всегда",
      "eventual only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Модель консистентности.",
    "group": "Данные и распределёнка",
    "id": "s63"
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
    "explain": "Для очереди — deque.",
    "group": "CPython и память",
    "id": "s64"
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
    "explain": "Хеш-таблица.",
    "group": "CPython и память",
    "id": "s65"
  },
  {
    "topic": "interning",
    "q": "Пул малых int диапазон типично…",
    "options": [
      "-5..256 в CPython",
      "все int",
      "только 0,1",
      "нет пула"
    ],
    "answer": 0,
    "explain": "Деталь реализации.",
    "group": "CPython и память",
    "id": "s66"
  },
  {
    "topic": "string",
    "q": "Почему str immutable важно для…",
    "options": [
      "безопасности ключей dict / шаринга",
      "скорости +=",
      "GIL",
      "UTF-16"
    ],
    "answer": 0,
    "explain": "Хешируемость и кэш.",
    "group": "CPython и память",
    "id": "s67"
  },
  {
    "topic": "async",
    "q": "Backpressure в потоках данных — это…",
    "options": [
      "ограничение скорости производителя",
      "ускорение потребителя магией",
      "GIL throttle",
      "TCP only term"
    ],
    "answer": 0,
    "explain": "Не копить бесконечные очереди.",
    "group": "Asyncio",
    "id": "s68"
  },
  {
    "topic": "queues",
    "q": "asyncio.Queue vs queue.Queue?",
    "options": [
      "для event loop vs для потоков",
      "одно и то же",
      "первая для процессов",
      "вторая для async"
    ],
    "answer": 0,
    "explain": "Не смешивать модели.",
    "group": "Данные и распределёнка",
    "id": "s69"
  },
  {
    "topic": "testing",
    "q": "Property-based testing (Hypothesis)…",
    "options": [
      "генерирует входы по свойствам",
      "заменяет unit тесты всегда",
      "только UI",
      "load test"
    ],
    "answer": 0,
    "explain": "Поиск контрпримеров.",
    "group": "Тесты и качество",
    "id": "s70"
  },
  {
    "topic": "testing",
    "q": "Mutation testing проверяет…",
    "options": [
      "качество тестов убийством мутантов кода",
      "скорость CI",
      "типы",
      "GIL"
    ],
    "answer": 0,
    "explain": "Сила тест-сьюта.",
    "group": "Тесты и качество",
    "id": "s71"
  },
  {
    "topic": "ci",
    "q": "Матрица версий Python в CI нужна чтобы…",
    "options": [
      "ловить несовместимости 3.x",
      "ускорить один job",
      "заменить mypy",
      "убрать зависимости"
    ],
    "answer": 0,
    "explain": "3.10/3.11/3.12…",
    "group": "Packaging и CI",
    "id": "s72"
  },
  {
    "topic": "api",
    "q": "HATEOAS связан с…",
    "options": [
      "REST гипермедиа",
      "SOAP only",
      "GIL",
      "CSV"
    ],
    "answer": 0,
    "explain": "Ссылки в ответах API.",
    "group": "Веб и API",
    "id": "s73"
  },
  {
    "topic": "rpc",
    "q": "gRPC в Python часто через…",
    "options": [
      "grpcio + protobuf",
      "только json.dumps",
      "ftp",
      "smtp"
    ],
    "answer": 0,
    "explain": "Контракты .proto.",
    "group": "Веб и API",
    "id": "s74"
  },
  {
    "topic": "serialization",
    "q": "MessagePack/Protobuf vs JSON когда…",
    "options": [
      "нужна компактность/схема/скорость",
      "всегда хуже JSON",
      "только логи",
      "для str keys only"
    ],
    "answer": 0,
    "explain": "Бинарные протоколы.",
    "group": "Данные и распределёнка",
    "id": "s75"
  },
  {
    "topic": "db",
    "q": "N+1 проблема — это…",
    "options": [
      "много запросов вместо join/prefetch",
      "один огромный SQL",
      "GIL waits",
      "index miss only"
    ],
    "answer": 0,
    "explain": "ORM классика.",
    "group": "Данные и распределёнка",
    "id": "s76"
  },
  {
    "topic": "db",
    "q": "SELECT FOR UPDATE связан с…",
    "options": [
      "блокировкой строк транзакции",
      "readonly replica hint always",
      "кэшем Redis",
      "VACUUM"
    ],
    "answer": 0,
    "explain": "Пессимистичные блокировки.",
    "group": "Данные и распределёнка",
    "id": "s77"
  },
  {
    "topic": "db",
    "q": "MVCC в PostgreSQL даёт…",
    "options": [
      "версионность строк для читателей",
      "только locks table",
      "GIL-like lock",
      "columnar only"
    ],
    "answer": 0,
    "explain": "Мультиверсионность.",
    "group": "Данные и распределёнка",
    "id": "s78"
  },
  {
    "topic": "cache",
    "q": "Cache stampede — это…",
    "options": [
      "массовый промах кэша одновременно",
      "переполнение диска",
      "hash collision",
      "GIL thrash"
    ],
    "answer": 0,
    "explain": "Нужны lock/soft expire/singleflight.",
    "group": "Данные и распределёнка",
    "id": "s79"
  },
  {
    "topic": "distributed",
    "q": "Consensus (Raft/Paxos) нужен для…",
    "options": [
      "согласованного лидера/лога",
      "локального dict",
      "sort",
      "GIL cluster"
    ],
    "answer": 0,
    "explain": "Распределённые системы.",
    "group": "Данные и распределёнка",
    "id": "s80"
  },
  {
    "topic": "python",
    "q": "Плюс __dict__ у экземпляра…",
    "options": [
      "гибкость атрибутов",
      "всегда меньше памяти чем slots",
      "быстрее slots всегда",
      "обязателен"
    ],
    "answer": 0,
    "explain": "Tradeoff гибкость/память.",
    "group": "CPython и память",
    "id": "s81"
  },
  {
    "topic": "python",
    "q": "object.__hash__ по умолчанию основан на…",
    "options": [
      "id (идентичности)",
      "всех полях",
      "str(obj)",
      "random"
    ],
    "answer": 0,
    "explain": "Пока не переопределён eq без hash.",
    "group": "CPython и память",
    "id": "s82"
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
    "explain": "Быстрый доступ по индексу locals.",
    "group": "CPython и память",
    "id": "s83"
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
    "explain": "Оптимизация VM.",
    "group": "CPython и память",
    "id": "s84"
  },
  {
    "topic": "async",
    "q": "Cancellation в asyncio Task…",
    "options": [
      "CancelledError в await-точке",
      "убивает OS thread",
      "игнорируется всегда",
      "только KeyboardInterrupt"
    ],
    "answer": 0,
    "explain": "Кооперативная отмена.",
    "group": "Asyncio",
    "id": "s85"
  },
  {
    "topic": "async",
    "q": "shield() защищает…",
    "options": [
      "awaitable от отмены снаружи",
      "от KeyboardInterrupt",
      "от GIL",
      "от MemoryError"
    ],
    "answer": 0,
    "explain": "asyncio.shield.",
    "group": "Asyncio",
    "id": "s86"
  },
  {
    "topic": "design",
    "q": "Антикоррупционный слой…",
    "options": [
      "изолирует внешнюю модель от домена",
      "логирует SQL",
      "кэширует",
      "сжимает JSON"
    ],
    "answer": 0,
    "explain": "DDD.",
    "group": "Архитектура и дизайн",
    "id": "s87"
  },
  {
    "topic": "observability",
    "q": "OpenTelemetry закрывает…",
    "options": [
      "traces/metrics/logs стандарт",
      "только APM vendor lock обязательно",
      "GIL metrics",
      "pip audit"
    ],
    "answer": 0,
    "explain": "Единый стандарт телеметрии.",
    "group": "Observability и качество",
    "id": "s88"
  },
  {
    "topic": "errors",
    "q": "Exception groups (3.11) + except* …",
    "options": [
      "работа с несколькими исключениями сразу",
      "замена BaseException",
      "только asyncio",
      "deprecated"
    ],
    "answer": 0,
    "explain": "PEP 654.",
    "group": "Исключения и контекст",
    "id": "s89"
  },
  {
    "topic": "typing",
    "q": "Self (3.11) в аннотациях…",
    "options": [
      "тип текущего класса",
      "Any",
      "object",
      "cls runtime"
    ],
    "answer": 0,
    "explain": "Удобно для fluent API.",
    "group": "Typing и dataclasses",
    "id": "s90"
  },
  {
    "topic": "perf",
    "q": "Инлайн кэш специализации байткода (3.11+)…",
    "options": [
      "ускоряет атрибуты/вызовы на горячих путях",
      "убирает GIL",
      "меняет синтаксис",
      "отключает GC"
    ],
    "answer": 0,
    "explain": "Adaptive interpreter.",
    "group": "Stdlib и производительность",
    "id": "s91"
  },
  {
    "topic": "wasm",
    "q": "CPython на WASM ограничивается…",
    "options": [
      "sandbox / нет полного OS API",
      "скоростью равной native всегда",
      "отсутствием int",
      "запретом async"
    ],
    "answer": 0,
    "explain": "Pyodide и др.",
    "group": "Нативные расширения",
    "id": "s92"
  },
  {
    "topic": "CPython",
    "q": "dict использует открытую адресацию / compact table — зачем знание на собесе?",
    "options": [
      "объясняет память и локальность",
      "обязательно писать на C",
      "заменяет list",
      "убирает hash collisions магией"
    ],
    "answer": 0,
    "explain": "Понимание стоимости операций.",
    "group": "CPython и память",
    "id": "s93"
  },
  {
    "topic": "CPython",
    "q": "code object не содержит…",
    "options": [
      "значения heap объектов напрямую как runtime heap graph",
      "bytecode",
      "consts",
      "names"
    ],
    "answer": 0,
    "explain": "Это шаблон исполнения.",
    "group": "CPython и память",
    "id": "s94"
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
    "explain": "Native sections.",
    "group": "Потоки, процессы, GIL",
    "id": "s95"
  },
  {
    "topic": "память",
    "q": "tracemalloc.start() влияет на…",
    "options": [
      "overhead + возможность снимков аллокаций",
      "только скорость сети",
      "удаление GIL",
      "pickle"
    ],
    "answer": 0,
    "explain": "Диагностика утечек.",
    "group": "CPython и память",
    "id": "s96"
  },
  {
    "topic": "память",
    "q": "object header минимум содержит…",
    "options": [
      "refcount и указатель типа (CPython)",
      "только payload",
      "только GIL ticket",
      "JSON schema"
    ],
    "answer": 0,
    "explain": "PyObject_HEAD.",
    "group": "CPython и память",
    "id": "s97"
  },
  {
    "topic": "байткод",
    "q": "CACHE / specialized opcodes в 3.11+…",
    "options": [
      "ускоряют горячие пути",
      "меняют синтаксис языка",
      "удаляют exceptions",
      "заменяют AST"
    ],
    "answer": 0,
    "explain": "Adaptive interpreter.",
    "group": "CPython и память",
    "id": "s98"
  },
  {
    "topic": "дескрипторы",
    "q": "Функции в классе становятся bound method через…",
    "options": [
      "__get__ дескриптора функции",
      "__call__ класса",
      "GIL",
      "import hook"
    ],
    "answer": 0,
    "explain": "Non-data descriptor.",
    "group": "Метаклассы и типы",
    "id": "s99"
  },
  {
    "topic": "метаклассы",
    "q": "type(name, bases, dict) эквивалентен…",
    "options": [
      "динамическому созданию класса",
      "только eval",
      "dataclass",
      "Enum"
    ],
    "answer": 0,
    "explain": "Конструктор классов.",
    "group": "Метаклассы и типы",
    "id": "s100"
  },
  {
    "topic": "метаклассы",
    "q": "__prepare__ метакласса возвращает…",
    "options": [
      "namespace mapping для тела класса",
      "MRO",
      "GIL state",
      "module"
    ],
    "answer": 0,
    "explain": "Кастомный namespace.",
    "group": "Метаклассы и типы",
    "id": "s101"
  },
  {
    "topic": "typing",
    "q": "TypeGuard / TypeIs нужны для…",
    "options": [
      "сужения типов в чекере",
      "runtime cast всегда",
      "GIL",
      "скорости"
    ],
    "answer": 0,
    "explain": "User-defined type guards.",
    "group": "Typing и dataclasses",
    "id": "s102"
  },
  {
    "topic": "typing",
    "q": "dataclass_transform помогает…",
    "options": [
      "библиотекам-кодогенераторам полей для чекеров",
      "ускорить dataclass",
      "SQL",
      "async"
    ],
    "answer": 0,
    "explain": "PEP 681.",
    "group": "Typing и dataclasses",
    "id": "s103"
  },
  {
    "topic": "concurrency",
    "q": "False sharing — это…",
    "options": [
      "контеншн кэш-линий CPU между ядрами",
      "GIL false",
      "shared list append ok",
      "pickle share"
    ],
    "answer": 0,
    "explain": "Низкоуровневый perf.",
    "group": "Потоки, процессы, GIL",
    "id": "s104"
  },
  {
    "topic": "concurrency",
    "q": "Lock в asyncio не блокирует OS-thread, а…",
    "options": [
      "паркует корутину",
      "убивает loop",
      "берёт GIL навсегда",
      "spawn process"
    ],
    "answer": 0,
    "explain": "Кооперативность.",
    "group": "Потоки, процессы, GIL",
    "id": "s105"
  },
  {
    "topic": "asyncio",
    "q": "Task cancellation должна быть…",
    "options": [
      "корректно обрабатываться в finally",
      "проигнорирована всегда",
      "мгновенный kill OS",
      "только KeyboardInterrupt"
    ],
    "answer": 0,
    "explain": "Безопасная отмена.",
    "group": "Asyncio",
    "id": "s106"
  },
  {
    "topic": "asyncio",
    "q": "anyio/trio знамениты…",
    "options": [
      "structured concurrency идеями",
      "удалением async",
      "GIL-free CPython",
      "ORM"
    ],
    "answer": 0,
    "explain": "Nurseries/task groups.",
    "group": "Asyncio",
    "id": "s107"
  },
  {
    "topic": "multiprocessing",
    "q": "shared_memory (3.8+) даёт…",
    "options": [
      "общий буфер между процессами",
      "shared GIL",
      "общие произвольные объекты Python transparently",
      "TCP"
    ],
    "answer": 0,
    "explain": "Bytes-like sharing.",
    "group": "Потоки, процессы, GIL",
    "id": "s108"
  },
  {
    "topic": "pickle",
    "q": "reduce протокол позволяет…",
    "options": [
      "кастомную сериализацию",
      "ускорить JSON",
      "убрать security risk",
      "GIL"
    ],
    "answer": 0,
    "explain": "__reduce__.",
    "group": "Stdlib и производительность",
    "id": "s109"
  },
  {
    "topic": "security",
    "q": "ast.literal_eval безопаснее eval потому что…",
    "options": [
      "только литералы, не вызовы",
      "быстрее",
      "одинаково опасен",
      "запрещён"
    ],
    "answer": 0,
    "explain": "Ограниченный парсер.",
    "group": "Безопасность",
    "id": "s110"
  },
  {
    "topic": "security",
    "q": "template injection в Jinja без sandbox риск…",
    "options": [
      "RCE через {{ }}",
      "только XSS HTML",
      "только DoS CPU always",
      "нет риска"
    ],
    "answer": 0,
    "explain": "Не доверяй шаблонам от пользователя.",
    "group": "Безопасность",
    "id": "s111"
  },
  {
    "topic": "packaging",
    "q": "PEP 517 build backend — это…",
    "options": [
      "изолированная сборка через pyproject",
      "только setup.py exec нативно обязателен",
      "pip uninstall",
      "venv"
    ],
    "answer": 0,
    "explain": "Современный build.",
    "group": "Packaging и CI",
    "id": "s112"
  },
  {
    "topic": "packaging",
    "q": "manylinux wheel гарантирует…",
    "options": [
      "ABI совместимость с широким Linux",
      "работу на Windows",
      "GIL-free",
      "мультиязычность"
    ],
    "answer": 0,
    "explain": "Аудит платформы.",
    "group": "Packaging и CI",
    "id": "s113"
  },
  {
    "topic": "architecture",
    "q": "Anti-corruption layer переводит…",
    "options": [
      "внешнюю модель во внутренний язык домена",
      "JSON в XML only",
      "sync в async магией",
      "SQL в NoSQL auto"
    ],
    "answer": 0,
    "explain": "DDD boundary.",
    "group": "Архитектура и дизайн",
    "id": "s114"
  },
  {
    "topic": "architecture",
    "q": "Saga pattern решает…",
    "options": [
      "распределённые транзакции через шаги/компенсации",
      "локальный GIL",
      "UI navigation",
      "sort"
    ],
    "answer": 0,
    "explain": "Вместо 2PC часто.",
    "group": "Архитектура и дизайн",
    "id": "s115"
  },
  {
    "topic": "db",
    "q": "Repeatable read vs read committed…",
    "options": [
      "разный уровень видимости аномалий",
      "одно и то же",
      "только MySQL term",
      "GIL isolation"
    ],
    "answer": 0,
    "explain": "Изоляция транзакций.",
    "group": "Данные и распределёнка",
    "id": "s116"
  },
  {
    "topic": "db",
    "q": "Connection pool нужен чтобы…",
    "options": [
      "переиспользовать соединения",
      "ускорить JSON",
      "убрать индексы",
      "заменить ORM"
    ],
    "answer": 0,
    "explain": "Дорогой handshake.",
    "group": "Данные и распределёнка",
    "id": "s117"
  },
  {
    "topic": "cache",
    "q": "Singleflight / request coalescing против…",
    "options": [
      "cache stampede",
      "LRU",
      "TTL",
      "CDN only"
    ],
    "answer": 0,
    "explain": "Один промах — один запрос.",
    "group": "Данные и распределёнка",
    "id": "s118"
  },
  {
    "topic": "distributed",
    "q": "Exactly-once на практике часто…",
    "options": [
      "at-least-once + идемпотентность",
      "гарантия брокера без дизайна",
      "только UDP",
      "GIL cluster"
    ],
    "answer": 0,
    "explain": "Реалистичная модель.",
    "group": "Данные и распределёнка",
    "id": "s119"
  },
  {
    "topic": "performance",
    "q": "Инлайнинг мелких функций в чистом Python…",
    "options": [
      "ограничен интерпретатором; профилируй",
      "как в C всегда",
      "запрещён",
      "делает GIL"
    ],
    "answer": 0,
    "explain": "Другая модель затрат.",
    "group": "Stdlib и производительность",
    "id": "s120"
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
    "explain": "Смотри профиль памяти.",
    "group": "Stdlib и производительность",
    "id": "s121"
  },
  {
    "topic": "observability",
    "q": "Span vs metric…",
    "options": [
      "span — трейс операции; metric — агрегат",
      "одно и то же",
      "span только ошибки",
      "metric = log line"
    ],
    "answer": 0,
    "explain": "OpenTelemetry модель.",
    "group": "Observability и качество",
    "id": "s122"
  },
  {
    "topic": "testing",
    "q": "Contract tests проверяют…",
    "options": [
      "совместимость API между сервисами",
      "только UI",
      "GIL",
      "pep8"
    ],
    "answer": 0,
    "explain": "Consumer-driven contracts.",
    "group": "Тесты и качество",
    "id": "s123"
  },
  {
    "topic": "testing",
    "q": "Flaky test чаще лечится…",
    "options": [
      "убрать time/race/order dependency",
      "увеличить sleep 10s навсегда",
      "отключить CI",
      "random.seed каждый раз иначе"
    ],
    "answer": 0,
    "explain": "Детерминизм.",
    "group": "Тесты и качество",
    "id": "s124"
  },
  {
    "topic": "api",
    "q": "Проблема chatty API…",
    "options": [
      "слишком много мелких round-trips",
      "один huge payload всегда лучше без меры",
      "только GraphQL term",
      "GIL"
    ],
    "answer": 0,
    "explain": "Нужен batch/aggregate.",
    "group": "Веб и API",
    "id": "s125"
  },
  {
    "topic": "serialization",
    "q": "Почему protobuf schema-first…",
    "options": [
      "явный контракт и совместимость полей",
      "человекочитаемее JSON always",
      "без версий",
      "медленнее всегда"
    ],
    "answer": 0,
    "explain": "Эволюция API.",
    "group": "Данные и распределёнка",
    "id": "s126"
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
    "explain": "Пиши join для надёжности.",
    "group": "CPython и память",
    "id": "s127"
  },
  {
    "topic": "python",
    "q": "Интернирование идентификаторов vs произвольных строк…",
    "options": [
      "идентификаторы часто interned",
      "все str interned always",
      "никогда",
      "только bytes"
    ],
    "answer": 0,
    "explain": "Деталь CPython.",
    "group": "CPython и память",
    "id": "s128"
  },
  {
    "topic": "errors",
    "q": "except* vs ExceptionGroup.raise…",
    "options": [
      "кроме* распаковывает группу по типам",
      "синонимы",
      "except* удаляет traceback",
      "только sync"
    ],
    "answer": 0,
    "explain": "Structured exceptions.",
    "group": "Исключения и контекст",
    "id": "s129"
  },
  {
    "topic": "design",
    "q": "Law of Demeter в Python…",
    "options": [
      "меньше obj.a.b.c цепочек",
      "запрет import",
      "один модуль на проект",
      "GIL law"
    ],
    "answer": 0,
    "explain": "Слабая связанность.",
    "group": "Архитектура и дизайн",
    "id": "s130"
  },
  {
    "topic": "design",
    "q": "Hexagonal: adapters зависят от…",
    "options": [
      "портов ядра, не наоборот",
      "фреймворка в домене",
      "GIL",
      "БД схемы в UI"
    ],
    "answer": 0,
    "explain": "Инверсия зависимостей.",
    "group": "Архитектура и дизайн",
    "id": "s131"
  },
  {
    "topic": "Zen",
    "q": "import this показывает…",
    "options": [
      "Zen of Python",
      "sys.path",
      "GIL poem",
      "PEP 8"
    ],
    "answer": 0,
    "explain": "Пасхалка с афоризмами.",
    "group": "Архитектура и дизайн",
    "id": "s132"
  },
  {
    "topic": "C-API",
    "q": "PyErr_Occurred проверяет…",
    "options": [
      "установлено ли исключение",
      "refcount",
      "GIL held?",
      "hash"
    ],
    "answer": 0,
    "explain": "C-API error protocol.",
    "group": "Нативные расширения",
    "id": "s133"
  },
  {
    "topic": "ctypes",
    "q": "restype/argtypes важны чтобы…",
    "options": [
      "правильно маршалить C типы",
      "ускорить Python loop 100x",
      "убрать GC",
      "async"
    ],
    "answer": 0,
    "explain": "Без них легко UB.",
    "group": "Нативные расширения",
    "id": "s134"
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
    "explain": "Параллелизм без полного multiprocess.",
    "group": "Нативные расширения",
    "id": "s135"
  },
  {
    "topic": "fork",
    "q": "os.register_at_fork помогает…",
    "options": [
      "сбрасывать locks/состояние вокруг fork",
      "создать thread",
      "GIL off",
      "pickle"
    ],
    "answer": 0,
    "explain": "Безопасный fork.",
    "group": "Потоки, процессы, GIL",
    "id": "s136"
  },
  {
    "topic": "signals",
    "q": "signal.set_wakeup_fd связан с…",
    "options": [
      "пробуждением loop от сигнала",
      "файловым GC",
      "HTTP/2",
      "typing"
    ],
    "answer": 0,
    "explain": "Интеграция с asyncio/selectors.",
    "group": "Потоки, процессы, GIL",
    "id": "s137"
  },
  {
    "topic": "lazy",
    "q": "MODULE_LEVEL __getattr__ риск…",
    "options": [
      "неочевидные ImportError/стоимость",
      "всегда быстрее",
      "обязателен pep",
      "убирает циклы всегда без минусов"
    ],
    "answer": 0,
    "explain": "Явность vs магия.",
    "group": "Метаклассы и типы",
    "id": "s138"
  },
  {
    "topic": "patterns",
    "q": "Registry pattern часто на…",
    "options": [
      "dict + декоратор регистрации",
      "только metaclass обязателен",
      "GIL registry",
      "XML"
    ],
    "answer": 0,
    "explain": "Плагины/handlers.",
    "group": "Архитектура и дизайн",
    "id": "s139"
  },
  {
    "topic": "patterns",
    "q": "Null Object pattern…",
    "options": [
      "объект с no-op поведением вместо None",
      "NoneType subclass обязателен",
      "Optional ban",
      "mock only"
    ],
    "answer": 0,
    "explain": "Меньше ветвлений.",
    "group": "Архитектура и дизайн",
    "id": "s140"
  },
  {
    "topic": "ci",
    "q": "pip-audit / safety в CI ловят…",
    "options": [
      "известные CVE зависимостей",
      "pep8",
      "GIL bugs",
      "flaky tests"
    ],
    "answer": 0,
    "explain": "Supply-chain hygiene.",
    "group": "Packaging и CI",
    "id": "s141"
  },
  {
    "topic": "wasm",
    "q": "Ограничение сокетов/файлов в браузерном Pyodide…",
    "options": [
      "sandbox браузера",
      "нет int",
      "нет list",
      "нет функций"
    ],
    "answer": 0,
    "explain": "Другая среда исполнения.",
    "group": "Нативные расширения",
    "id": "s142"
  },
  {
    "topic": "CPython",
    "q": "PyVarObject дополнительно хранит…",
    "options": [
      "ob_size",
      "только refcnt",
      "GIL ticket",
      "typeid str"
    ],
    "answer": 0,
    "explain": "Переменный размер.",
    "group": "CPython и память",
    "id": "s143"
  },
  {
    "topic": "CPython",
    "q": "tp_dict у типа…",
    "options": [
      "атрибуты/методы типа",
      "instance dict",
      "MRO list only",
      "module"
    ],
    "answer": 0,
    "explain": "Type object fields.",
    "group": "CPython и память",
    "id": "s144"
  },
  {
    "topic": "CPython",
    "q": "interned strings живут в…",
    "options": [
      "внутренней таблице",
      "каждом frame отдельно без шаринга",
      "только .pyc",
      "GPU"
    ],
    "answer": 0,
    "explain": "Дедуп.",
    "group": "CPython и память",
    "id": "s145"
  },
  {
    "topic": "CPython",
    "q": "pymalloc arenas…",
    "options": [
      "пулы мелких аллокаций",
      "mmap файлов пользователя",
      "GPU heap",
      "JVM"
    ],
    "answer": 0,
    "explain": "Объектный аллокатор.",
    "group": "CPython и память",
    "id": "s146"
  },
  {
    "topic": "CPython",
    "q": "frame object (3.11+ changes)…",
    "options": [
      "дешевле/иная модель кадров",
      "исчезли полностью",
      "стали процессами",
      "JSON"
    ],
    "answer": 0,
    "explain": "Ускорение вызовов.",
    "group": "CPython и память",
    "id": "s147"
  },
  {
    "topic": "байткод",
    "q": "EXTENDED_ARG нужен для…",
    "options": [
      "больших аргументов инструкции",
      "async",
      "import",
      "GIL"
    ],
    "answer": 0,
    "explain": "Префикс opcode.",
    "group": "CPython и память",
    "id": "s148"
  },
  {
    "topic": "байткод",
    "q": "MAKE_FUNCTION использует…",
    "options": [
      "code object (+defaults/annotations/… )",
      "только str source",
      "AST",
      "GIL"
    ],
    "answer": 0,
    "explain": "Создание функции.",
    "group": "CPython и память",
    "id": "s149"
  },
  {
    "topic": "байткод",
    "q": "LOAD_GLOBAL с кэшем…",
    "options": [
      "специализация 3.11+",
      "всегда полный dict scan без кэша в новых",
      "importlib",
      "typing"
    ],
    "answer": 0,
    "explain": "Adaptive.",
    "group": "CPython и память",
    "id": "s150"
  },
  {
    "topic": "GIL",
    "q": "eval breaker проверяет…",
    "options": [
      "сигналы/переключения между байткодами",
      "только GC",
      "только I/O callbacks без сигнала",
      "pip"
    ],
    "answer": 0,
    "explain": "Кооперативные точки.",
    "group": "Потоки, процессы, GIL",
    "id": "s151"
  },
  {
    "topic": "GIL",
    "q": "Отпускание GIL в blocking I/O…",
    "options": [
      "позволяет другим потокам идти",
      "убивает refcount",
      "отключает GC forever",
      "free-threads only"
    ],
    "answer": 0,
    "explain": "I/O bound.",
    "group": "Потоки, процессы, GIL",
    "id": "s152"
  },
  {
    "topic": "память",
    "q": "obmalloc vs system malloc порог…",
    "options": [
      "мелкие через pymalloc",
      "все через mmap",
      "все arena forever",
      "GC decides type"
    ],
    "answer": 0,
    "explain": "512/… исторические детали.",
    "group": "CPython и память",
    "id": "s153"
  },
  {
    "topic": "память",
    "q": "cyclic GC поколения…",
    "options": [
      "young/old коллекции",
      "только refcount",
      "только RSS OS",
      "swap"
    ],
    "answer": 0,
    "explain": "gc generations.",
    "group": "CPython и память",
    "id": "s154"
  },
  {
    "topic": "память",
    "q": "gc.get_stats…",
    "options": [
      "статистика сборов",
      "tracemalloc",
      "perf asm",
      "types"
    ],
    "answer": 0,
    "explain": "Интроспекция GC.",
    "group": "CPython и память",
    "id": "s155"
  },
  {
    "topic": "import",
    "q": "spec.loader.exec_module…",
    "options": [
      "исполняет модуль",
      "находит файл only",
      "pip install",
      "compileall"
    ],
    "answer": 0,
    "explain": "Жизненный цикл import.",
    "group": "Stdlib и производительность",
    "id": "s156"
  },
  {
    "topic": "import",
    "q": "cached .pyc invalidation…",
    "options": [
      "hash/timestamp политики",
      "никогда",
      "только size",
      "git"
    ],
    "answer": 0,
    "explain": "PEP 552 и др.",
    "group": "Stdlib и производительность",
    "id": "s157"
  },
  {
    "topic": "дескрипторы",
    "q": "precedence: data descriptor vs instance dict…",
    "options": [
      "data descriptor побеждает",
      "instance всегда",
      "random",
      "slots ban"
    ],
    "answer": 0,
    "explain": "Attribute lookup.",
    "group": "Метаклассы и типы",
    "id": "s158"
  },
  {
    "topic": "дескрипторы",
    "q": "methods — non-data descriptors, поэтому…",
    "options": [
      "instance attr может затенить функцию",
      "нельзя затенить",
      "всегда bound",
      "GIL"
    ],
    "answer": 0,
    "explain": "obj.f = 1 скроет method.",
    "group": "Метаклассы и типы",
    "id": "s159"
  },
  {
    "topic": "метаклассы",
    "q": "__new__ метакласса создаёт…",
    "options": [
      "объект класса",
      "instance",
      "module",
      "frame"
    ],
    "answer": 0,
    "explain": "type.__new__ цепочка.",
    "group": "Метаклассы и типы",
    "id": "s160"
  },
  {
    "topic": "метаклассы",
    "q": "冲突 метаклассов баз…",
    "options": [
      "нужен согласованный metaclass",
      "берётся random",
      "запрет MI",
      "ABC auto"
    ],
    "answer": 0,
    "explain": "Most derived metaclass.",
    "group": "Метаклассы и типы",
    "id": "s161"
  },
  {
    "topic": "метаклассы",
    "q": "__init_subclass__ vs metaclass…",
    "options": [
      "проще для хуков подклассов",
      "заменяет type полностью всегда",
      "только Py2",
      "GIL"
    ],
    "answer": 0,
    "explain": "PEP 487 предпочтение.",
    "group": "Метаклассы и типы",
    "id": "s162"
  },
  {
    "topic": "typing",
    "q": "PEP 695 (3.12) type params…",
    "options": [
      "синтаксис class A[T]: / def f[T]",
      "только TypeVar() runtime old",
      "убирает checkers",
      "GIL"
    ],
    "answer": 0,
    "explain": "Новый синтаксис generics.",
    "group": "Typing и dataclasses",
    "id": "s163"
  },
  {
    "topic": "typing",
    "q": "TypeForm / новые формы…",
    "options": [
      "эволюция typing API",
      "удаление annotations",
      "JSON schema stdlib",
      "slots"
    ],
    "answer": 0,
    "explain": "Следи за PEP.",
    "group": "Typing и dataclasses",
    "id": "s164"
  },
  {
    "topic": "typing",
    "q": "dataclass_transform для Pydantic/attrs…",
    "options": [
      "чтобы checker понимал поля",
      "runtime validation замена",
      "SQL",
      "async"
    ],
    "answer": 0,
    "explain": "PEP 681.",
    "group": "Typing и dataclasses",
    "id": "s165"
  },
  {
    "topic": "concurrency",
    "q": "memory barrier / volatile в Python…",
    "options": [
      "не как в C; полагайся на queue/Lock семантику",
      "есть volatile keyword",
      "GIL = full barrier always formally for data races без sync? нет",
      "atomic int std"
    ],
    "answer": 0,
    "explain": "Модель памяти осторожно.",
    "group": "Потоки, процессы, GIL",
    "id": "s166"
  },
  {
    "topic": "concurrency",
    "q": "atomic словари?…",
    "options": [
      "отдельные операции под GIL, но не составные транзакции",
      "полная ACID",
      "lock-free guarantee для check-then-act",
      "process safe"
    ],
    "answer": 0,
    "explain": "i+=1 на shared не безопасен логически без lock.",
    "group": "Потоки, процессы, GIL",
    "id": "s167"
  },
  {
    "topic": "asyncio",
    "q": "Happy Eyeballs / dual stack…",
    "options": [
      "связность IPv6/IPv4",
      "GIL",
      "HTTP/3 only",
      "DNSSEC"
    ],
    "answer": 0,
    "explain": "asyncio детали соединений.",
    "group": "Asyncio",
    "id": "s168"
  },
  {
    "topic": "asyncio",
    "q": "proactor vs selector event loop Windows…",
    "options": [
      "разные IOCP/select модели",
      "одно и то же",
      "только subprocess",
      "GIL loops"
    ],
    "answer": 0,
    "explain": "Политика loop.",
    "group": "Asyncio",
    "id": "s169"
  },
  {
    "topic": "asyncio",
    "q": "contextvars копируются в Tasks…",
    "options": [
      "да, контекст задачи",
      "нет никогда",
      "только threading local",
      "process"
    ],
    "answer": 0,
    "explain": "request id в async.",
    "group": "Asyncio",
    "id": "s170"
  },
  {
    "topic": "multiprocessing",
    "q": "resource_tracker…",
    "options": [
      "следит за shared ресурсами spawn",
      "GC",
      "pip",
      "typing"
    ],
    "answer": 0,
    "explain": "Утечки semaphore/shm.",
    "group": "Потоки, процессы, GIL",
    "id": "s171"
  },
  {
    "topic": "multiprocessing",
    "q": "fork + threads =…",
    "options": [
      "опасно (locks)",
      "рекомендуемый default everywhere",
      "быстрее spawn всегда без минусов",
      "async required"
    ],
    "answer": 0,
    "explain": "Только forking thread жив.",
    "group": "Потоки, процессы, GIL",
    "id": "s172"
  },
  {
    "topic": "pickle",
    "q": "reduce_ex protocol…",
    "options": [
      "версия протокола сериализации",
      "AES",
      "zlib only",
      "json"
    ],
    "answer": 0,
    "explain": "__reduce_ex__.",
    "group": "Stdlib и производительность",
    "id": "s173"
  },
  {
    "topic": "pickle",
    "q": "persistent_id…",
    "options": [
      "внешние ссылки в pickle",
      "UUID primary key ORM auto",
      "HTTP",
      "path"
    ],
    "answer": 0,
    "explain": "Кастомный Pickler.",
    "group": "Stdlib и производительность",
    "id": "s174"
  },
  {
    "topic": "security",
    "q": "eval на пользовательском вводе…",
    "options": [
      "RCE риск",
      "безопасен с ast",
      "только SyntaxError",
      "sandbox stdlib guaranteed"
    ],
    "answer": 0,
    "explain": "Никогда.",
    "group": "Безопасность",
    "id": "s175"
  },
  {
    "topic": "security",
    "q": "xml.etree без безопасных настроек…",
    "options": [
      "XXE/entity риски на некоторых парсерах/истории",
      "всегда safe",
      "только JSON",
      "YAML"
    ],
    "answer": 0,
    "explain": "defusedxml и т.п.",
    "group": "Безопасность",
    "id": "s176"
  },
  {
    "topic": "security",
    "q": "timing attack на == паролей…",
    "options": [
      "используй compare_digest",
      "== достаточно",
      "hash() ok",
      "id"
    ],
    "answer": 0,
    "explain": "Постоянное время.",
    "group": "Безопасность",
    "id": "s177"
  },
  {
    "topic": "security",
    "q": "dependency confusion…",
    "options": [
      "подмена пакета именем из публичного индекса",
      "GIL bug",
      "PEP8",
      "typo squatting only DNS"
    ],
    "answer": 0,
    "explain": "Пины/индексы/scopes.",
    "group": "Безопасность",
    "id": "s178"
  },
  {
    "topic": "packaging",
    "q": "editable install PEP 660…",
    "options": [
      "современный editable",
      "только egg links forever",
      "conda only",
      "poetry exclusive"
    ],
    "answer": 0,
    "explain": "pyproject editable.",
    "group": "Packaging и CI",
    "id": "s179"
  },
  {
    "topic": "packaging",
    "q": "abi3 wheel…",
    "options": [
      "limited API multi-version",
      "один точный patch CPython only always",
      "pure python",
      "win only"
    ],
    "answer": 0,
    "explain": "Stable ABI.",
    "group": "Packaging и CI",
    "id": "s180"
  },
  {
    "topic": "packaging",
    "q": "manylinux2014 vs 2_28…",
    "options": [
      "разные glibc базы совместимости",
      "одно и то же",
      "macOS tags",
      "musl only"
    ],
    "answer": 0,
    "explain": "Аудит платформы.",
    "group": "Packaging и CI",
    "id": "s181"
  },
  {
    "topic": "architecture",
    "q": "ports & adapters тестируют…",
    "options": [
      "домен без инфры",
      "только UI",
      "только DB",
      "GIL"
    ],
    "answer": 0,
    "explain": "Гексагон.",
    "group": "Архитектура и дизайн",
    "id": "s182"
  },
  {
    "topic": "architecture",
    "q": "CQRS не обязан Event Sourcing…",
    "options": [
      "да, можно раздельно",
      "нет, всегда вместе",
      "запрещены оба",
      "только Mongo"
    ],
    "answer": 0,
    "explain": "Частая путаница.",
    "group": "Архитектура и дизайн",
    "id": "s183"
  },
  {
    "topic": "architecture",
    "q": "outbox + polling/CDC…",
    "options": [
      "надёжная доставка событий",
      "только RPC sync",
      "GUI",
      "cron без БД"
    ],
    "answer": 0,
    "explain": "Transactional messaging.",
    "group": "Архитектура и дизайн",
    "id": "s184"
  },
  {
    "topic": "design",
    "q": "Tell, Don't Ask…",
    "options": [
      "меньше вытягивания состояния наружу",
      "больше геттеров везде",
      "анемичная модель идеал always",
      "GIL"
    ],
    "answer": 0,
    "explain": "ООП стиль.",
    "group": "Архитектура и дизайн",
    "id": "s185"
  },
  {
    "topic": "design",
    "q": "Feature toggle риск…",
    "options": [
      "мертвый код/комбинаторный взрыв",
      "нет рисков",
      "заменяет CI",
      "types"
    ],
    "answer": 0,
    "explain": "Гигиена флагов.",
    "group": "Архитектура и дизайн",
    "id": "s186"
  },
  {
    "topic": "patterns",
    "q": "Unit of Work…",
    "options": [
      "транзакционная граница изменений",
      "один SQL always",
      "singleton DB",
      "pool"
    ],
    "answer": 0,
    "explain": "ORM sessions.",
    "group": "Архитектура и дизайн",
    "id": "s187"
  },
  {
    "topic": "patterns",
    "q": "Specification pattern…",
    "options": [
      "композиция бизнес-правил",
      "regex only",
      "JSON schema only",
      "ABC ban"
    ],
    "answer": 0,
    "explain": "Доменные предикаты.",
    "group": "Архитектура и дизайн",
    "id": "s188"
  },
  {
    "topic": "db",
    "q": "optimistic locking через version…",
    "options": [
      "конфликт при параллельной записи",
      "SELECT FOR UPDATE always",
      "без версии",
      "только serializable"
    ],
    "answer": 0,
    "explain": "version column.",
    "group": "Данные и распределёнка",
    "id": "s189"
  },
  {
    "topic": "db",
    "q": "pessimistic lock…",
    "options": [
      "блокировка на время работы",
      "только retry",
      "eventual",
      "cache"
    ],
    "answer": 0,
    "explain": "FOR UPDATE.",
    "group": "Данные и распределёнка",
    "id": "s190"
  },
  {
    "topic": "db",
    "q": "read replica lag…",
    "options": [
      "устаревшие чтения",
      "strong always",
      "нет лагов у async",
      "GIL"
    ],
    "answer": 0,
    "explain": "Eventual consistency.",
    "group": "Данные и распределёнка",
    "id": "s191"
  },
  {
    "topic": "db",
    "q": "partitioning vs sharding…",
    "options": [
      "часто внутри БД vs across nodes",
      "синонимы строго",
      "только index",
      "только view"
    ],
    "answer": 0,
    "explain": "Масштаб данных.",
    "group": "Данные и распределёнка",
    "id": "s192"
  },
  {
    "topic": "cache",
    "q": "write-through vs write-back…",
    "options": [
      "синхронная запись в кэш+стор vs отложенная",
      "одно",
      "только Redis term",
      "HTTP"
    ],
    "answer": 0,
    "explain": "Политики записи.",
    "group": "Данные и распределёнка",
    "id": "s193"
  },
  {
    "topic": "cache",
    "q": "TTL jitter…",
    "options": [
      "размазывает истечения",
      "увеличивает stampede",
      "отключает LRU",
      "шифрует"
    ],
    "answer": 0,
    "explain": "Анти-стампид.",
    "group": "Данные и распределёнка",
    "id": "s194"
  },
  {
    "topic": "distributed",
    "q": "CAP: при partition выбирают…",
    "options": [
      "C или A (упрощённо)",
      "все три всегда",
      "только P off",
      "GIL"
    ],
    "answer": 0,
    "explain": "Сетевые разделы.",
    "group": "Данные и распределёнка",
    "id": "s195"
  },
  {
    "topic": "distributed",
    "q": "saga choreography vs orchestration…",
    "options": [
      "события между сервисами vs центральный координатор",
      "одно",
      "2PC",
      "только Kafka"
    ],
    "answer": 0,
    "explain": "Распределённые процессы.",
    "group": "Данные и распределёнка",
    "id": "s196"
  },
  {
    "topic": "distributed",
    "q": "poison message…",
    "options": [
      "сообщение, которое всегда валит consumer",
      "TTL",
      "heartbeat",
      "leader"
    ],
    "answer": 0,
    "explain": "DLQ паттерн.",
    "group": "Данные и распределёнка",
    "id": "s197"
  },
  {
    "topic": "performance",
    "q": "perf/flamegraph для…",
    "options": [
      "CPU профилей натив/питон с инструментами",
      "только pep8",
      "только coverage",
      "YAML"
    ],
    "answer": 0,
    "explain": "Горячие стеки.",
    "group": "Stdlib и производительность",
    "id": "s198"
  },
  {
    "topic": "performance",
    "q": "allocation sampling…",
    "options": [
      "профиль памяти",
      "CPU only",
      "network",
      "disk SMART"
    ],
    "answer": 0,
    "explain": "memray/tracemalloc.",
    "group": "Stdlib и производительность",
    "id": "s199"
  },
  {
    "topic": "performance",
    "q": "false sharing лечится…",
    "options": [
      "выравниванием/паддингом данных",
      "GIL off",
      "больше threads всегда",
      "async"
    ],
    "answer": 0,
    "explain": "Кэш-линии.",
    "group": "Stdlib и производительность",
    "id": "s200"
  },
  {
    "topic": "observability",
    "q": "exemplars связывают…",
    "options": [
      "метрики с трейсами",
      "логи с pep8",
      "CPU с GIL bit",
      "SQL с ORM name only"
    ],
    "answer": 0,
    "explain": "OpenTelemetry.",
    "group": "Observability и качество",
    "id": "s201"
  },
  {
    "topic": "observability",
    "q": "cardinality взрыв labels…",
    "options": [
      "дорогие метрики",
      "лучше always more labels",
      "не влияет",
      "только logs"
    ],
    "answer": 0,
    "explain": "Осторожно user_id в labels.",
    "group": "Observability и качество",
    "id": "s202"
  },
  {
    "topic": "testing",
    "q": "testpyramid…",
    "options": [
      "больше unit, меньше e2e",
      "только e2e",
      "только manual",
      "только mutation"
    ],
    "answer": 0,
    "explain": "Баланс стоимости.",
    "group": "Тесты и качество",
    "id": "s203"
  },
  {
    "topic": "testing",
    "q": "contract test consumer-driven…",
    "options": [
      "потребитель задаёт ожидания API",
      "провайдер только OpenAPI без тестов",
      "UI screenshots",
      "load"
    ],
    "answer": 0,
    "explain": "Микросервисы.",
    "group": "Тесты и качество",
    "id": "s204"
  },
  {
    "topic": "api",
    "q": "pagination cursor vs offset…",
    "options": [
      "cursor стабильнее при вставках",
      "offset всегда лучше",
      "одно",
      "только GraphQL"
    ],
    "answer": 0,
    "explain": "Лента/фид.",
    "group": "Веб и API",
    "id": "s205"
  },
  {
    "topic": "api",
    "q": "problem+json…",
    "options": [
      "стандарт ошибок API",
      "успех 200 body",
      "graphql errors only",
      "SOAP"
    ],
    "answer": 0,
    "explain": "RFC 7807.",
    "group": "Веб и API",
    "id": "s206"
  },
  {
    "topic": "rpc",
    "q": "idempotent gRPC retry…",
    "options": [
      "нужны ключи/политики",
      "всегда safe",
      "запрещены",
      "только unary"
    ],
    "answer": 0,
    "explain": "Повторы сети.",
    "group": "Веб и API",
    "id": "s207"
  },
  {
    "topic": "serialization",
    "q": "schema evolution backward/forward…",
    "options": [
      "совместимость старых/новых клиентов",
      "только JSON pretty",
      "pickle auto",
      "XML ban"
    ],
    "answer": 0,
    "explain": "Protobuf/Avro правила.",
    "group": "Данные и распределёнка",
    "id": "s208"
  },
  {
    "topic": "python",
    "q": "почему list.pop(0) O(n)?…",
    "options": [
      "сдвиг массива",
      "hash rebuild",
      "GIL N times documented",
      "malloc each"
    ],
    "answer": 0,
    "explain": "Используй deque.",
    "group": "CPython и память",
    "id": "s209"
  },
  {
    "topic": "python",
    "q": "dict resize cost…",
    "options": [
      "амортизированный O(1) insert",
      "каждый insert O(n) строго",
      "never resizes",
      "tree rebalance"
    ],
    "answer": 0,
    "explain": "Амортизация.",
    "group": "CPython и память",
    "id": "s210"
  },
  {
    "topic": "python",
    "q": "str immutable ⇒ slice…",
    "options": [
      "часто новая строка (с оговорками interning/пусто)",
      "view всегда",
      "bytes shared always",
      "mmap"
    ],
    "answer": 0,
    "explain": "Копии.",
    "group": "CPython и память",
    "id": "s211"
  },
  {
    "topic": "async",
    "q": "structured concurrency выигрыш…",
    "options": [
      "время жизни задач привязано к scope",
      "больше detach fire-and-forget",
      "GIL remove",
      "threads ban"
    ],
    "answer": 0,
    "explain": "TaskGroup/nurseries.",
    "group": "Asyncio",
    "id": "s212"
  },
  {
    "topic": "async",
    "q": "cancellation points…",
    "options": [
      "await / yield точек",
      "любая строка Python",
      "только sleep",
      "OS preempt Python bytecode guaranteed cancel"
    ],
    "answer": 0,
    "explain": "Кооперативность.",
    "group": "Asyncio",
    "id": "s213"
  },
  {
    "topic": "queues",
    "q": "maxsize в Queue даёт…",
    "options": [
      "backpressure",
      "unlimited always better",
      "priority",
      "disk"
    ],
    "answer": 0,
    "explain": "Не расти без предела.",
    "group": "Данные и распределёнка",
    "id": "s214"
  },
  {
    "topic": "errors",
    "q": "ExceptionGroup.split…",
    "options": [
      "делить группу по типам",
      "flatten logs",
      "suppress",
      "raise bare"
    ],
    "answer": 0,
    "explain": "PEP 654 helpers.",
    "group": "Исключения и контекст",
    "id": "s215"
  },
  {
    "topic": "errors",
    "q": "raise ExceptionGroup…",
    "options": [
      "несколько ошибок сразу",
      "только asyncio",
      "замена BaseException",
      "warnings"
    ],
    "answer": 0,
    "explain": "Параллельные сбои.",
    "group": "Исключения и контекст",
    "id": "s216"
  },
  {
    "topic": "design",
    "q": "postel's law осторожно потому…",
    "options": [
      "толерантный парсер копит хаос",
      "всегда плох",
      "всегда идеален",
      "только HTTP/1"
    ],
    "answer": 0,
    "explain": "Строгость на границах.",
    "group": "Архитектура и дизайн",
    "id": "s217"
  },
  {
    "topic": "design",
    "q": "ACL anti-corruption…",
    "options": [
      "перевод внешней модели",
      "firewall OS",
      "JWT",
      "WAF"
    ],
    "answer": 0,
    "explain": "DDD.",
    "group": "Архитектура и дизайн",
    "id": "s218"
  },
  {
    "topic": "Zen",
    "q": "Special cases aren't special enough…",
    "options": [
      "избегать слишком особых веток",
      "писать только special",
      "GIL poem",
      "PEP 8 quote"
    ],
    "answer": 0,
    "explain": "Zen.",
    "group": "Архитектура и дизайн",
    "id": "s219"
  },
  {
    "topic": "SOLID",
    "q": "Open/Closed в Python часто через…",
    "options": [
      "протоколы/стратегии/регистры",
      "правку ядра каждый раз",
      "globals",
      "eval"
    ],
    "answer": 0,
    "explain": "Расширение без ломания.",
    "group": "Архитектура и дизайн",
    "id": "s220"
  },
  {
    "topic": "C-API",
    "q": "Py_INCREF/DECREF…",
    "options": [
      "ручной refcount",
      "GIL tokens",
      "hash",
      "GC generation"
    ],
    "answer": 0,
    "explain": "Владение ссылками.",
    "group": "Нативные расширения",
    "id": "s221"
  },
  {
    "topic": "C-API",
    "q": "PyErr_SetString…",
    "options": [
      "ставить исключение",
      "логировать only",
      "clear frames",
      "release GIL"
    ],
    "answer": 0,
    "explain": "Ошибки из C.",
    "group": "Нативные расширения",
    "id": "s222"
  },
  {
    "topic": "C-API",
    "q": "borrowed vs new reference…",
    "options": [
      "критично для корректности",
      "синонимы",
      "только PyPy",
      "async"
    ],
    "answer": 0,
    "explain": "Документация ownership.",
    "group": "Нативные расширения",
    "id": "s223"
  },
  {
    "topic": "ctypes",
    "q": "byref vs pointer…",
    "options": [
      "разные способы передачи адреса",
      "одно",
      "только arrays",
      "GIL"
    ],
    "answer": 0,
    "explain": "FFI нюансы.",
    "group": "Нативные расширения",
    "id": "s224"
  },
  {
    "topic": "ctypes",
    "q": "restype=None значит…",
    "options": [
      "void",
      "int",
      "auto py object",
      "error"
    ],
    "answer": 0,
    "explain": "Сигнатура C.",
    "group": "Нативные расширения",
    "id": "s225"
  },
  {
    "topic": "cffi/pybind",
    "q": "PyO3 gil release…",
    "options": [
      "allow threads в Rust",
      "удаляет GC",
      "async runtime",
      "WASM"
    ],
    "answer": 0,
    "explain": "Параллелизм native.",
    "group": "Нативные расширения",
    "id": "s226"
  },
  {
    "topic": "subinterpreters",
    "q": "каналы между интерпретаторами…",
    "options": [
      "ограниченный обмен",
      "shared objects freely any",
      "GIL one forever without isolation",
      "pickle only TCP"
    ],
    "answer": 0,
    "explain": "PEP 554+.",
    "group": "Нативные расширения",
    "id": "s227"
  },
  {
    "topic": "wasm",
    "q": "WASI для Python…",
    "options": [
      "системный интерфейс для WASM",
      "GIL wasm",
      "NumPy GPU",
      "JDK"
    ],
    "answer": 0,
    "explain": "Портируемость.",
    "group": "Нативные расширения",
    "id": "s228"
  },
  {
    "topic": "runtime",
    "q": "sitecustomize/usercustomize…",
    "options": [
      "автоимпорт при старте",
      "pip config",
      "venv activate hook only",
      "pytest"
    ],
    "answer": 0,
    "explain": "Осторожно с сайд-эффектами.",
    "group": "Метаклассы и типы",
    "id": "s229"
  },
  {
    "topic": "lazy",
    "q": "module __getattr__ кэшируй если…",
    "options": [
      "дорогой импорт/вычисление",
      "всегда без кэша быстрее",
      "запрещено кэшировать",
      "only typing"
    ],
    "answer": 0,
    "explain": "Повторные обращения.",
    "group": "Метаклассы и типы",
    "id": "s230"
  },
  {
    "topic": "signals",
    "q": "SIGINT → KeyboardInterrupt в…",
    "options": [
      "главном потоке",
      "любом потоке одинаково",
      "только asyncio",
      "только workers"
    ],
    "answer": 0,
    "explain": "Ограничение.",
    "group": "Потоки, процессы, GIL",
    "id": "s231"
  },
  {
    "topic": "fork",
    "q": "posix_spawn иногда предпочтительнее fork…",
    "options": [
      "безопасность/скорость в ряде кейсов",
      "всегда хуже",
      "Windows only name",
      "GIL"
    ],
    "answer": 0,
    "explain": "Создание процессов.",
    "group": "Потоки, процессы, GIL",
    "id": "s232"
  },
  {
    "topic": "ci",
    "q": "reproducible builds…",
    "options": [
      "пины, hashes, lockfiles",
      "latest always",
      "без CI",
      "random seeds off only"
    ],
    "answer": 0,
    "explain": "Детерминизм поставки.",
    "group": "Packaging и CI",
    "id": "s233"
  },
  {
    "topic": "ci",
    "q": "SBOM…",
    "options": [
      "перечень компонентов поставки",
      "тест-план",
      "flamegraph",
      "OpenAPI"
    ],
    "answer": 0,
    "explain": "Supply chain.",
    "group": "Packaging и CI",
    "id": "s234"
  },
  {
    "topic": "packaging",
    "q": "PEP 621 project table…",
    "options": [
      "метаданные в pyproject",
      "runtime settings app",
      "mypy ini",
      "tox only"
    ],
    "answer": 0,
    "explain": "Стандартизация.",
    "group": "Packaging и CI",
    "id": "s235"
  },
  {
    "topic": "observability",
    "q": "RED method…",
    "options": [
      "Rate Errors Duration",
      "CPU RAM Disk",
      "CRUD",
      "GIL RSS"
    ],
    "answer": 0,
    "explain": "Сервисные метрики.",
    "group": "Observability и качество",
    "id": "s236"
  },
  {
    "topic": "observability",
    "q": "USE method…",
    "options": [
      "Utilization Saturation Errors",
      "для запросов only RED",
      "logs",
      "traces only"
    ],
    "answer": 0,
    "explain": "Ресурсы.",
    "group": "Observability и качество",
    "id": "s237"
  },
  {
    "topic": "caching",
    "q": "request coalescing…",
    "options": [
      "один промах на ключ",
      "TTL=0",
      "LRU off",
      "write-only"
    ],
    "answer": 0,
    "explain": "Анти-стампид.",
    "group": "Данные и распределёнка",
    "id": "s238"
  },
  {
    "topic": "consistency",
    "q": "linearizability…",
    "options": [
      "сильная real-time порядок операций",
      "eventual",
      "read-your-writes weaker always",
      "FIFO messages only"
    ],
    "answer": 0,
    "explain": "Модели.",
    "group": "Данные и распределёнка",
    "id": "s239"
  },
  {
    "topic": "retries",
    "q": "budget / deadline…",
    "options": [
      "общий лимит времени на ретраи",
      "infinite backoff",
      "только count",
      "jitter off"
    ],
    "answer": 0,
    "explain": "Не ретраить вечно.",
    "group": "Данные и распределёнка",
    "id": "s240"
  },
  {
    "topic": "events",
    "q": "CDC…",
    "options": [
      "захват изменений БД",
      "CDN",
      "CPU counter",
      "GC dump"
    ],
    "answer": 0,
    "explain": "Debezium и др.",
    "group": "Данные и распределёнка",
    "id": "s241"
  },
  {
    "topic": "serialization",
    "q": "protobuf unknown fields…",
    "options": [
      "сохраняют forward compat",
      "всегда drop",
      "ломают wire",
      "JSON only"
    ],
    "answer": 0,
    "explain": "Эволюция схемы.",
    "group": "Данные и распределёнка",
    "id": "s242"
  },
  {
    "topic": "api",
    "q": "rate limit token bucket…",
    "options": [
      "сглаживание нагрузки",
      "только hard max without refill",
      "circuit",
      "bulkhead"
    ],
    "answer": 0,
    "explain": "Алгоритм.",
    "group": "Веб и API",
    "id": "s243"
  },
  {
    "topic": "api",
    "q": "bulkhead…",
    "options": [
      "изоляция пулов ресурсов",
      "retry",
      "cache",
      "auth"
    ],
    "answer": 0,
    "explain": "Отказоустойчивость.",
    "group": "Веб и API",
    "id": "s244"
  },
  {
    "topic": "testing",
    "q": "chaos engineering…",
    "options": [
      "намеренные сбои в системе",
      "unit mocks only",
      "pep8",
      "types"
    ],
    "answer": 0,
    "explain": "Устойчивость прод-подобных сред.",
    "group": "Тесты и качество",
    "id": "s245"
  },
  {
    "topic": "testing",
    "q": "differential fuzzing…",
    "options": [
      "сравнение реализаций на случайных входах",
      "coverage gap only",
      "UI",
      "load"
    ],
    "answer": 0,
    "explain": "Поиск расхождений.",
    "group": "Тесты и качество",
    "id": "s246"
  },
  {
    "topic": "python",
    "q": "почему hash randomization…",
    "options": [
      "защита от collision DoS",
      "ускорение",
      "PEP8",
      "GIL"
    ],
    "answer": 0,
    "explain": "PYTHONHASHSEED.",
    "group": "CPython и память",
    "id": "s247"
  },
  {
    "topic": "python",
    "q": "dataclasses без slots vs slots…",
    "options": [
      "память/__dict__",
      "скорость JSON",
      "typing only",
      "hash"
    ],
    "answer": 0,
    "explain": "Выбор представления.",
    "group": "CPython и память",
    "id": "s248"
  },
  {
    "topic": "async",
    "q": "backpressure в streams…",
    "options": [
      "пауза производителя",
      "безлимитный buffer ideal",
      "только TCP window ignore app",
      "GIL throttle"
    ],
    "answer": 0,
    "explain": "Не копить.",
    "group": "Asyncio",
    "id": "s249"
  },
  {
    "topic": "queues",
    "q": "priority queue fairness риск…",
    "options": [
      "starve низкий приоритет",
      "не бывает",
      "GIL fair always",
      "RR CPU"
    ],
    "answer": 0,
    "explain": "Aging/квоты.",
    "group": "Данные и распределёнка",
    "id": "s250"
  },
  {
    "topic": "security",
    "q": "SSRF…",
    "options": [
      "сервер ходит на внутренние URL по воле клиента",
      "XSS",
      "SQLi",
      "CSRF"
    ],
    "answer": 0,
    "explain": "Фильтруй URL.",
    "group": "Безопасность",
    "id": "s251"
  },
  {
    "topic": "security",
    "q": "path traversal…",
    "options": [
      "../ выход из директории",
      "XSS",
      "CRLF",
      "GIL"
    ],
    "answer": 0,
    "explain": "Нормализуй пути.",
    "group": "Безопасность",
    "id": "s252"
  },
  {
    "topic": "architecture",
    "q": "strangler fig…",
    "options": [
      "постепенная замена легаси",
      "big bang rewrite only",
      "monorepo ban",
      "CQRS"
    ],
    "answer": 0,
    "explain": "Миграция систем.",
    "group": "Архитектура и дизайн",
    "id": "s253"
  },
  {
    "topic": "architecture",
    "q": "BFF pattern…",
    "options": [
      "backend for frontend",
      "bus for files",
      "binary fast format",
      "bulkhead"
    ],
    "answer": 0,
    "explain": "Адаптация API под клиент.",
    "group": "Архитектура и дизайн",
    "id": "s254"
  },
  {
    "topic": "db",
    "q": "vacuum в PostgreSQL…",
    "options": [
      "очистка/видимость версий строк",
      "только backup",
      "только index rebuild always synonym",
      "replication slot"
    ],
    "answer": 0,
    "explain": "MVCC hygiene.",
    "group": "Данные и распределёнка",
    "id": "s255"
  },
  {
    "topic": "db",
    "q": "connection leak…",
    "options": [
      "невозврат в пул",
      "slow query only",
      "missing index only",
      "ORM lazy"
    ],
    "answer": 0,
    "explain": "finally/context.",
    "group": "Данные и распределёнка",
    "id": "s256"
  },
  {
    "topic": "cache",
    "q": "near cache…",
    "options": [
      "локальный слой + распределённый",
      "только CDN",
      "только DB buffer",
      "GPU"
    ],
    "answer": 0,
    "explain": "Иерархия кэшей.",
    "group": "Данные и распределёнка",
    "id": "s257"
  },
  {
    "topic": "distributed",
    "q": "vector clocks…",
    "options": [
      "частичный порядок событий",
      "NTP sync perfect",
      "Lamport = vector always",
      "GIS"
    ],
    "answer": 0,
    "explain": "Конфликты версий.",
    "group": "Данные и распределёнка",
    "id": "s258"
  },
  {
    "topic": "distributed",
    "q": "CRDT…",
    "options": [
      "слияние без координатора",
      "2PC",
      "saga",
      "mutex cluster"
    ],
    "answer": 0,
    "explain": "Conflict-free types.",
    "group": "Данные и распределёнка",
    "id": "s259"
  },
  {
    "topic": "performance",
    "q": "COW после fork…",
    "options": [
      "страницы копируются при записи",
      "полное копирование сразу always",
      "shared forever writable without cost",
      "GIL pages"
    ],
    "answer": 0,
    "explain": "gc.freeze помогает.",
    "group": "Stdlib и производительность",
    "id": "s260"
  },
  {
    "topic": "performance",
    "q": "specializing adaptive interpreter…",
    "options": [
      "ускоряет стабильные типы",
      "убирает need for types",
      "удаляет GC",
      "WASM"
    ],
    "answer": 0,
    "explain": "3.11+.",
    "group": "Stdlib и производительность",
    "id": "s261"
  },
  {
    "topic": "observability",
    "q": "trace sampling…",
    "options": [
      "доля трейсов для стоимости",
      "все или ничего always better",
      "только errors без head sampling strategies",
      "logs"
    ],
    "answer": 0,
    "explain": "Head/tail sampling.",
    "group": "Observability и качество",
    "id": "s262"
  },
  {
    "topic": "packaging",
    "q": "PEP 517 isolated build…",
    "options": [
      "сбор в чистом env",
      "reuse site-packages dirty always",
      "conda exclusive",
      "no build backend"
    ],
    "answer": 0,
    "explain": "Воспроизводимость.",
    "group": "Packaging и CI",
    "id": "s263"
  },
  {
    "topic": "C-API",
    "q": "capsule name…",
    "options": [
      "тип-безопасная передача указателей",
      "JSON",
      "pickle",
      "typing Capsule"
    ],
    "answer": 0,
    "explain": "PyCapsule.",
    "group": "Нативные расширения",
    "id": "s264"
  },
  {
    "topic": "ctypes",
    "q": "CDLL vs WinDLL…",
    "options": [
      "calling convention различия",
      "Linux only both",
      "одно на всех ОС",
      "PyPy only"
    ],
    "answer": 0,
    "explain": "Windows stdcall nuances.",
    "group": "Нативные расширения",
    "id": "s265"
  },
  {
    "topic": "метаклассы",
    "q": "types.new_class…",
    "options": [
      "высокоуровневое создание класса",
      "только eval",
      "NamedTuple",
      "Enum functional same exactly"
    ],
    "answer": 0,
    "explain": "С __prepare__ и т.д.",
    "group": "Метаклассы и типы",
    "id": "s266"
  },
  {
    "topic": "typing",
    "q": "Interop typing_extensions…",
    "options": [
      "бэкпорты фич typing",
      "runtime pydantic",
      "mypy plugin only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Для старых версий.",
    "group": "Typing и dataclasses",
    "id": "s267"
  },
  {
    "topic": "concurrency",
    "q": "RCU-подобные идеи в Python редки; вместо…",
    "options": [
      "иммутабельные структуры + замена ссылки",
      "volatile",
      "GIL off assumed",
      "memcpy"
    ],
    "answer": 0,
    "explain": "Паттерны чтения.",
    "group": "Потоки, процессы, GIL",
    "id": "s268"
  },
  {
    "topic": "asyncio",
    "q": "timeout context (3.11)…",
    "options": [
      "отмена по deadline scope",
      "только wait_for legacy",
      "thread join",
      "process kill"
    ],
    "answer": 0,
    "explain": "asyncio.timeout.",
    "group": "Asyncio",
    "id": "s269"
  },
  {
    "topic": "multiprocessing",
    "q": "spawn заново импортирует…",
    "options": [
      "main-like модуль осторожно",
      "только pickle builtins",
      "shared mem objects auto",
      "threads"
    ],
    "answer": 0,
    "explain": "Боковая исполняемость.",
    "group": "Потоки, процессы, GIL",
    "id": "s270"
  },
  {
    "topic": "pickle",
    "q": "out-of-band buffers…",
    "options": [
      "нулевое копирование крупных bytes",
      "JSON binary",
      "YAML",
      "XML"
    ],
    "answer": 0,
    "explain": "protocol 5.",
    "group": "Stdlib и производительность",
    "id": "s271"
  },
  {
    "topic": "security",
    "q": "jinja2 SandboxedEnvironment…",
    "options": [
      "ограничивает опасные конструкции",
      "полный RCE safe guarantee absolute",
      "заменяет CSP",
      "SQL"
    ],
    "answer": 0,
    "explain": "Не панацея.",
    "group": "Безопасность",
    "id": "s272"
  },
  {
    "topic": "security",
    "q": "Content-Security-Policy…",
    "options": [
      "ограничение ресурсов в браузере",
      "Python GIL policy",
      "pip audit",
      "JWT"
    ],
    "answer": 0,
    "explain": "XSS mitigation.",
    "group": "Безопасность",
    "id": "s273"
  },
  {
    "topic": "architecture",
    "q": "event-carried state transfer…",
    "options": [
      "событие несёт данные, меньше follow-up reads",
      "только id ссылки always",
      "RPC",
      "cron"
    ],
    "answer": 0,
    "explain": "Связанность сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s274"
  },
  {
    "topic": "design",
    "q": "parse, don't validate (часто)…",
    "options": [
      "парсить в богатые типы на границе",
      "валидировать везде сырые dict",
      "Any",
      "JSON forever"
    ],
    "answer": 0,
    "explain": "Typed boundaries.",
    "group": "Архитектура и дизайн",
    "id": "s275"
  },
  {
    "topic": "patterns",
    "q": "retry with jitter full/equal…",
    "options": [
      "стратегии AWS-like backoff",
      "linear only",
      "no jitter better under load",
      "fixed 1s ideal stampede"
    ],
    "answer": 0,
    "explain": "Сглаживание пиков.",
    "group": "Архитектура и дизайн",
    "id": "s276"
  },
  {
    "topic": "db",
    "q": "materialized view…",
    "options": [
      "кэш запроса на диске/сервере",
      "обычный VIEW always same cost",
      "index only",
      "temp table session"
    ],
    "answer": 0,
    "explain": "Обновление/refresh.",
    "group": "Данные и распределёнка",
    "id": "s277"
  },
  {
    "topic": "db",
    "q": "TOCTOU в файлах/БД…",
    "options": [
      "гонка проверка→использование",
      "только CPU",
      "только DNS",
      "GIL"
    ],
    "answer": 0,
    "explain": "Атомарные операции.",
    "group": "Данные и распределёнка",
    "id": "s278"
  },
  {
    "topic": "cache",
    "q": "negative caching…",
    "options": [
      "кэш промахов/404",
      "только hit",
      "write-only",
      "LRU off"
    ],
    "answer": 0,
    "explain": "Защита от повторов miss.",
    "group": "Данные и распределёнка",
    "id": "s279"
  },
  {
    "topic": "distributed",
    "q": "quorum N/2+1…",
    "options": [
      "большинство для решения",
      "все узлы always",
      "один leader without logs",
      "DNS"
    ],
    "answer": 0,
    "explain": "Consensus.",
    "group": "Данные и распределёнка",
    "id": "s280"
  },
  {
    "topic": "distributed",
    "q": "fencing token…",
    "options": [
      "старый primary не пишет после failover",
      "JWT refresh",
      "ETag",
      "cookie"
    ],
    "answer": 0,
    "explain": "Split brain.",
    "group": "Данные и распределёнка",
    "id": "s281"
  },
  {
    "topic": "performance",
    "q": "branch misprediction в C hot loops…",
    "options": [
      "важно для native расширений",
      "для Python bytecode тот же asm level всегда",
      "GIL predicts",
      "async"
    ],
    "answer": 0,
    "explain": "Низкий уровень.",
    "group": "Stdlib и производительность",
    "id": "s282"
  },
  {
    "topic": "performance",
    "q": "soabi / tag в wheel…",
    "options": [
      "идентификатор интерпретатора/ABI",
      "pep8",
      "git tag",
      "semver only"
    ],
    "answer": 0,
    "explain": "Совместимость бинарей.",
    "group": "Stdlib и производительность",
    "id": "s283"
  },
  {
    "topic": "observability",
    "q": "log correlation id…",
    "options": [
      "сквозная связь запросов",
      "random каждый call без передачи",
      "только trace without logs",
      "CPU id"
    ],
    "answer": 0,
    "explain": "contextvars.",
    "group": "Observability и качество",
    "id": "s284"
  },
  {
    "topic": "api",
    "q": "HATEOAS спорность…",
    "options": [
      "гипермедиа в REST на практике редко полная",
      "обязателен HTTP",
      "GraphQL feature",
      "gRPC"
    ],
    "answer": 0,
    "explain": "Реалистичный REST.",
    "group": "Веб и API",
    "id": "s285"
  },
  {
    "topic": "rpc",
    "q": "grpc status codes vs HTTP…",
    "options": [
      "свой набор, маппят на HTTP в gateway",
      "идентичны 1:1 always",
      "только OK/ERR",
      "SMTP"
    ],
    "answer": 0,
    "explain": "Трансляция.",
    "group": "Веб и API",
    "id": "s286"
  },
  {
    "topic": "serialization",
    "q": "canonical JSON…",
    "options": [
      "стабильный байтовый вид для подписей",
      "pretty print",
      "pickle",
      "messagepack"
    ],
    "answer": 0,
    "explain": "Крипто/хэши документов.",
    "group": "Данные и распределёнка",
    "id": "s287"
  },
  {
    "topic": "python",
    "q": "почему не полагаться на dict order до 3.7 как на язык…",
    "options": [
      "стал guarantee с 3.7; раньше CPython detail",
      "никогда не был",
      "был с 2.7 language",
      "только OrderedDict language"
    ],
    "answer": 0,
    "explain": "История.",
    "group": "CPython и память",
    "id": "s288"
  },
  {
    "topic": "async",
    "q": "trio nursery cancel scope…",
    "options": [
      "эталон structured cancel",
      "fire and forget ideal",
      "GIL scope",
      "thread group"
    ],
    "answer": 0,
    "explain": "Влияние на asyncio TaskGroup.",
    "group": "Asyncio",
    "id": "s289"
  },
  {
    "topic": "errors",
    "q": "except* может матчить часть группы…",
    "options": [
      "остаток пропагируется",
      "глотает всё always",
      "syntax 3.8",
      "только BaseExceptionGroup drop"
    ],
    "answer": 0,
    "explain": "Частичная обработка.",
    "group": "Исключения и контекст",
    "id": "s290"
  },
  {
    "topic": "C-API",
    "q": "vectorcall protocol…",
    "options": [
      "быстрые вызовы",
      "async",
      "import",
      "GC"
    ],
    "answer": 0,
    "explain": "PEP 590.",
    "group": "Нативные расширения",
    "id": "s291"
  },
  {
    "topic": "ctypes",
    "q": "ERRCHECK…",
    "options": [
      "постпроверка C вызова",
      "prealloc",
      "GIL",
      "typing"
    ],
    "answer": 0,
    "explain": "Обёртки ошибок.",
    "group": "Нативные расширения",
    "id": "s292"
  },
  {
    "topic": "метаклассы",
    "q": "namespace в __prepare__ может быть…",
    "options": [
      "OrderedDict/custom mapping",
      "только dict ban custom",
      "list",
      "set"
    ],
    "answer": 0,
    "explain": "Упорядоченные аннотации исторически.",
    "group": "Метаклассы и типы",
    "id": "s293"
  },
  {
    "topic": "typing",
    "q": "NoReturn vs Never…",
    "options": [
      "сближаются; Never bottom",
      "NoReturn = Any",
      "Never = object",
      "синоним Optional"
    ],
    "answer": 0,
    "explain": "Семантика недостижимости.",
    "group": "Typing и dataclasses",
    "id": "s294"
  },
  {
    "topic": "concurrency",
    "q": "lock-free queue в чистом Python…",
    "options": [
      "сложно/редко нужно; std queue+GIL",
      "легко и всегда быстрее",
      "stdlib lockfree",
      "asyncio Queue lockfree OS"
    ],
    "answer": 0,
    "explain": "Практичность.",
    "group": "Потоки, процессы, GIL",
    "id": "s295"
  },
  {
    "topic": "asyncio",
    "q": "server start_serving…",
    "options": [
      "приём соединений",
      "client open",
      "DNS",
      "TLS ticket only"
    ],
    "answer": 0,
    "explain": "asyncio.Server.",
    "group": "Asyncio",
    "id": "s296"
  },
  {
    "topic": "multiprocessing",
    "q": "Reducer замена для…",
    "options": [
      "кастом pickle между процессами",
      "json",
      "YAML",
      "HTTP"
    ],
    "answer": 0,
    "explain": "ForkingPickler.",
    "group": "Потоки, процессы, GIL",
    "id": "s297"
  },
  {
    "topic": "security",
    "q": "HTTP header injection CRLF…",
    "options": [
      "внедрение заголовков/ответа",
      "XSS only",
      "SQLi",
      "SSRF only"
    ],
    "answer": 0,
    "explain": "Валидируй заголовки.",
    "group": "Безопасность",
    "id": "s298"
  },
  {
    "topic": "architecture",
    "q": "shared kernel…",
    "options": [
      "малое общее ядро между командами",
      "big monolith shared DB god",
      "BFF",
      "ACL"
    ],
    "answer": 0,
    "explain": "DDD boundaries.",
    "group": "Архитектура и дизайн",
    "id": "s299"
  },
  {
    "topic": "db",
    "q": "online DDL риск…",
    "options": [
      "блокировки/нагрузка при миграциях",
      "всегда free",
      "только SQLite",
      "ORM"
    ],
    "answer": 0,
    "explain": "Планируй окна/алгоритмы.",
    "group": "Данные и распределёнка",
    "id": "s300"
  },
  {
    "topic": "cache",
    "q": "thundering herd…",
    "options": [
      "масса клиентов бьёт origin",
      "один client",
      "DNS only",
      "GC"
    ],
    "answer": 0,
    "explain": "locks/singleflight.",
    "group": "Данные и распределёнка",
    "id": "s301"
  },
  {
    "topic": "distributed",
    "q": "gossip protocol…",
    "options": [
      "эпидемическое распространение состояния",
      "2PC",
      "Raft leader only term",
      "SMTP"
    ],
    "answer": 0,
    "explain": "Членство кластера.",
    "group": "Данные и распределёнка",
    "id": "s302"
  },
  {
    "topic": "performance",
    "q": "PGO / Bolt для CPython…",
    "options": [
      "профильная оптимизация бинарника",
      "pip optimize",
      "mypy",
      "ruff"
    ],
    "answer": 0,
    "explain": "Сборки CPython.",
    "group": "Stdlib и производительность",
    "id": "s303"
  },
  {
    "topic": "observability",
    "q": "OpenTelemetry context propagation…",
    "options": [
      "W3C traceparent и др.",
      "только cookies",
      "только IP",
      "GIL id"
    ],
    "answer": 0,
    "explain": "Сквозные трейсы.",
    "group": "Observability и качество",
    "id": "s304"
  },
  {
    "topic": "packaging",
    "q": "venv --system-site-packages риск…",
    "options": [
      "утечка системных пакетов в изоляцию",
      "ускорение always worth",
      "security harden",
      "reproducible better"
    ],
    "answer": 0,
    "explain": "Чистота env.",
    "group": "Packaging и CI",
    "id": "s305"
  },
  {
    "topic": "api",
    "q": "optimistic concurrency ETag…",
    "options": [
      "If-Match при обновлении",
      "only cache GET",
      "CORS",
      "JWT"
    ],
    "answer": 0,
    "explain": "Конфликты записей.",
    "group": "Веб и API",
    "id": "s306"
  },
  {
    "topic": "testing",
    "q": "flaky quarantine…",
    "options": [
      "изоляция нестабильных тестов",
      "удаление assert",
      "sleep 30",
      "disable CI"
    ],
    "answer": 0,
    "explain": "Пока чинят.",
    "group": "Тесты и качество",
    "id": "s307"
  },
  {
    "topic": "python",
    "q": "почему __eq__ без __hash__ → unhashable…",
    "options": [
      "None hash в class",
      "random",
      "id hash kept always with custom eq",
      "TypeError on class create"
    ],
    "answer": 0,
    "explain": "Безопасность set/dict.",
    "group": "CPython и память",
    "id": "s308"
  },
  {
    "topic": "async",
    "q": "anyio from_thread…",
    "options": [
      "мост threads↔async",
      "process",
      "GIL bridge CPU",
      "WSGI"
    ],
    "answer": 0,
    "explain": "Интеграции.",
    "group": "Asyncio",
    "id": "s309"
  },
  {
    "topic": "security",
    "q": "pickle is not a data format for untrusted…",
    "options": [
      "да",
      "нет, безопасен как json",
      "безопасен с protocol 0",
      "безопасен в base64"
    ],
    "answer": 0,
    "explain": "Код при load.",
    "group": "Безопасность",
    "id": "s310"
  },
  {
    "topic": "design",
    "q": "invariant в домене лучше держать…",
    "options": [
      "в конструкторе/фабрике типа",
      "в UI only",
      "в БД триггерах only silently",
      "в логах"
    ],
    "answer": 0,
    "explain": "Непроницаемые типы.",
    "group": "Архитектура и дизайн",
    "id": "s311"
  },
  {
    "topic": "db",
    "q": "LISTEN/NOTIFY…",
    "options": [
      "лёгкие события PostgreSQL",
      "Kafka replacement always",
      "CDC full",
      "RPC"
    ],
    "answer": 0,
    "explain": "Сигналы внутри БД.",
    "group": "Данные и распределёнка",
    "id": "s312"
  },
  {
    "topic": "cache",
    "q": "stampede lock per key…",
    "options": [
      "один пересчёт",
      "все считают",
      "TTL=0",
      "no cache"
    ],
    "answer": 0,
    "explain": "Mutex/singleflight.",
    "group": "Данные и распределёнка",
    "id": "s313"
  },
  {
    "topic": "distributed",
    "q": "exactly-once end-to-end…",
    "options": [
      "очень дорого/редко; чаще effectively once",
      "бесплатно в Kafka magic без дизайна",
      "UDP guarantee",
      "GIL cluster"
    ],
    "answer": 0,
    "explain": "Идемпотентность.",
    "group": "Данные и распределёнка",
    "id": "s314"
  },
  {
    "topic": "CPython",
    "q": "PEP 703 free-threading implications…",
    "options": [
      "гонка данных без GIL — нужны sync",
      "весь код thread-safe auto",
      "удаляет asyncio",
      "запрещает C-API"
    ],
    "answer": 0,
    "explain": "Новая эпоха.",
    "group": "CPython и память",
    "id": "s315"
  },
  {
    "topic": "байткод",
    "q": "RETURN_GENERATOR…",
    "options": [
      "создание генератора из frame",
      "async only",
      "return value ordinary",
      "import"
    ],
    "answer": 0,
    "explain": "Детали компилятора.",
    "group": "CPython и память",
    "id": "s316"
  },
  {
    "topic": "память",
    "q": "mimalloc/other in experiments…",
    "options": [
      "альтернативные аллокаторы сборок",
      "замена gc",
      "замена typing",
      "pip"
    ],
    "answer": 0,
    "explain": "Перф-сборки.",
    "group": "CPython и память",
    "id": "s317"
  },
  {
    "topic": "import",
    "q": "frozen modules…",
    "options": [
      "встроенные в бинарник",
      "pip freeze",
      "venv freeze",
      "docker layer"
    ],
    "answer": 0,
    "explain": "Startup.",
    "group": "Stdlib и производительность",
    "id": "s318"
  },
  {
    "topic": "дескрипторы",
    "q": "__delete__…",
    "options": [
      "del obj.attr",
      "GC",
      "pop dict only",
      "weakref"
    ],
    "answer": 0,
    "explain": "Data descriptor.",
    "group": "Метаклассы и типы",
    "id": "s319"
  },
  {
    "topic": "метаклассы",
    "q": "type.__call__ путь instance create…",
    "options": [
      "__call__ типа → __new__/__init__ instance",
      "только __init__",
      "только __new__",
      "module exec"
    ],
    "answer": 0,
    "explain": "Механика creation.",
    "group": "Метаклассы и типы",
    "id": "s320"
  },
  {
    "topic": "typing",
    "q": "ReadOnly в TypedDict (новые PEP)…",
    "options": [
      "ключи только для чтения в checker",
      "runtime const",
      "slots",
      "frozen dataclass same"
    ],
    "answer": 0,
    "explain": "Эволюция TypedDict.",
    "group": "Typing и dataclasses",
    "id": "s321"
  },
  {
    "topic": "concurrency",
    "q": "SEQ CST vs relaxed в C extensions…",
    "options": [
      "модели атомарности native",
      "GIL levels",
      "asyncio tasks",
      "typing"
    ],
    "answer": 0,
    "explain": "Сложно, редко на собесе джуна.",
    "group": "Потоки, процессы, GIL",
    "id": "s322"
  },
  {
    "topic": "asyncio",
    "q": "create_shared_memory — не путать с…",
    "options": [
      "multiprocessing.shared_memory",
      "Queue",
      "Lock",
      "Event"
    ],
    "answer": 0,
    "explain": "Разные модули.",
    "group": "Asyncio",
    "id": "s323"
  },
  {
    "topic": "security",
    "q": "secure cookie flags…",
    "options": [
      "HttpOnly Secure SameSite",
      "только Secure",
      "только path /",
      "Domain=* safe"
    ],
    "answer": 0,
    "explain": "Сессии.",
    "group": "Безопасность",
    "id": "s324"
  },
  {
    "topic": "architecture",
    "q": "modular monolith…",
    "options": [
      "модули+границы без распределёнки сразу",
      "microservices mandatory",
      "big ball",
      "shared DB unrestricted ideal"
    ],
    "answer": 0,
    "explain": "Прагматичный старт.",
    "group": "Архитектура и дизайн",
    "id": "s325"
  },
  {
    "topic": "db",
    "q": "snapshot isolation anomaly…",
    "options": [
      "write skew и др.",
      "не бывает аномалий",
      "только dirty read",
      "GIL"
    ],
    "answer": 0,
    "explain": "Уровни изоляции.",
    "group": "Данные и распределёнка",
    "id": "s326"
  },
  {
    "topic": "cache",
    "q": "multi-layer cache invalidation…",
    "options": [
      "сложная согласованность",
      "trivial",
      "не нужна never",
      "TTL only solves all"
    ],
    "answer": 0,
    "explain": "Hard problem.",
    "group": "Данные и распределёнка",
    "id": "s327"
  },
  {
    "topic": "distributed",
    "q": "leader election…",
    "options": [
      "выбор primary",
      "DNS RR",
      "client sticky random",
      "SQL AUTOINCREMENT"
    ],
    "answer": 0,
    "explain": "Raft/etcd.",
    "group": "Данные и распределёнка",
    "id": "s328"
  },
  {
    "topic": "performance",
    "q": "Py_TPFLAGS_HAVE_VECTORCALL…",
    "options": [
      "тип поддерживает vectorcall",
      "async flag",
      "GC flag",
      "heaptype ban"
    ],
    "answer": 0,
    "explain": "C-API perf.",
    "group": "Stdlib и производительность",
    "id": "s329"
  },
  {
    "topic": "observability",
    "q": "baggage в телеметрии…",
    "options": [
      "ключ-значения вдоль трейса",
      "только headers auth",
      "logs only",
      "metrics labels unlimited safe"
    ],
    "answer": 0,
    "explain": "Осторожно с PII.",
    "group": "Observability и качество",
    "id": "s330"
  },
  {
    "topic": "packaging",
    "q": "bytecode suppression / SOURCE_DATE_EPOCH…",
    "options": [
      "воспроизводимые артефакты",
      "ускорение import magic only",
      "typing",
      "GIL"
    ],
    "answer": 0,
    "explain": "Reproducible builds.",
    "group": "Packaging и CI",
    "id": "s331"
  },
  {
    "topic": "api",
    "q": "versioning via media type…",
    "options": [
      "Accept versioning",
      "только URL /v1",
      "только header X-Api always mandatory one way",
      "query ver worst always"
    ],
    "answer": 0,
    "explain": "Варианты эволюции.",
    "group": "Веб и API",
    "id": "s332"
  },
  {
    "topic": "testing",
    "q": "characterization tests…",
    "options": [
      "фиксируют текущее поведение легаси",
      "TDD greenfield only",
      "mutation",
      "fuzz"
    ],
    "answer": 0,
    "explain": "Перед рефакторингом.",
    "group": "Тесты и качество",
    "id": "s333"
  },
  {
    "topic": "python",
    "q": "сумма многих float…",
    "options": [
      "ошибки округления; math.fsum",
      "точна всегда decimal",
      "int",
      "fractions auto"
    ],
    "answer": 0,
    "explain": "Численная устойчивость.",
    "group": "CPython и память",
    "id": "s334"
  },
  {
    "topic": "async",
    "q": "graceful shutdown…",
    "options": [
      "отмена задач + close ресурсов",
      "os._exit сразу ideal",
      "игнор tasks",
      "SIGINT ignore"
    ],
    "answer": 0,
    "explain": "Прод-практика.",
    "group": "Asyncio",
    "id": "s335"
  },
  {
    "topic": "errors",
    "q": "BaseExceptionGroup.subgroup…",
    "options": [
      "фильтр подгруппы",
      "flatten",
      "raise bare",
      "logging"
    ],
    "answer": 0,
    "explain": "API групп.",
    "group": "Исключения и контекст",
    "id": "s336"
  },
  {
    "topic": "C-API",
    "q": "heap types vs static types…",
    "options": [
      "динамика/модульность расширений",
      "скорость always heap worse irrelevant",
      "GIL",
      "typing"
    ],
    "answer": 0,
    "explain": "Современные расширения.",
    "group": "Нативные расширения",
    "id": "s337"
  },
  {
    "topic": "design",
    "q": "policy object…",
    "options": [
      "вынесенные правила решения",
      "god service",
      "anemic getters only",
      "SQL view"
    ],
    "answer": 0,
    "explain": "Гибкость поведения.",
    "group": "Архитектура и дизайн",
    "id": "s338"
  },
  {
    "topic": "db",
    "q": "advisory locks…",
    "options": [
      "лок приложения в PG",
      "row lock always same",
      "file lock OS only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Координация без row.",
    "group": "Данные и распределёнка",
    "id": "s339"
  },
  {
    "topic": "distributed",
    "q": "hedged requests…",
    "options": [
      "параллельные дубли против хвоста латентности",
      "retry serial only",
      "cache",
      "bulkhead opposite"
    ],
    "answer": 0,
    "explain": "Хвостовая задержка.",
    "group": "Данные и распределёнка",
    "id": "s340"
  },
  {
    "topic": "security",
    "q": "supply chain signing (Sigstore)…",
    "options": [
      "проверка происхождения артефактов",
      "pep8 sign",
      "GPG only ancient mandatory",
      "JWT API"
    ],
    "answer": 0,
    "explain": "Современная поставка.",
    "group": "Безопасность",
    "id": "s341"
  },
  {
    "topic": "performance",
    "q": "JIT в PyPy vs CPython specializing…",
    "options": [
      "разные стратегии ускорения",
      "идентичны",
      "CPython JIT default forever historically",
      "PyPy без GC"
    ],
    "answer": 0,
    "explain": "Сравнивай workload.",
    "group": "Stdlib и производительность",
    "id": "s342"
  },
  {
    "topic": "observability",
    "q": "SLO / error budget…",
    "options": [
      "целевая надёжность и запас на изменения",
      "только uptime marketing",
      "CPU limit",
      "ticket SLA support only"
    ],
    "answer": 0,
    "explain": "SRE практика.",
    "group": "Observability и качество",
    "id": "s343"
  },
  {
    "topic": "architecture",
    "q": "data mesh принцип…",
    "options": [
      "доменные владельцы данных",
      "одно озеро без владельцев",
      "только ETL nightly",
      "CQRS synonym"
    ],
    "answer": 0,
    "explain": "Орг+тех.",
    "group": "Архитектура и дизайн",
    "id": "s344"
  },
  {
    "topic": "api",
    "q": "webhook security…",
    "options": [
      "подписи/секреты/ретраи",
      "открытый POST ok",
      "только IP allow without sig enough always",
      "GET idempotent body"
    ],
    "answer": 0,
    "explain": "Проверка подлинности.",
    "group": "Веб и API",
    "id": "s345"
  },
  {
    "topic": "testing",
    "q": "load test ≠ stress test…",
    "options": [
      "разные цели (норма vs перегруз)",
      "синонимы",
      "только unit",
      "только chaos"
    ],
    "answer": 0,
    "explain": "Термины перфа.",
    "group": "Тесты и качество",
    "id": "s346"
  },
  {
    "topic": "python",
    "q": "decimal vs float для денег…",
    "options": [
      "Decimal/целые копейки",
      "float ok banking",
      "fractions mandatory",
      "int рублей без копеек always"
    ],
    "answer": 0,
    "explain": "Точность.",
    "group": "CPython и память",
    "id": "s347"
  },
  {
    "topic": "async",
    "q": "TCP_NODELAY / latency…",
    "options": [
      "настройки сокета влияют на хвосты",
      "только Python sleep",
      "GIL socket",
      "HTTP/3 only"
    ],
    "answer": 0,
    "explain": "Сетевой перф.",
    "group": "Asyncio",
    "id": "s348"
  },
  {
    "topic": "CPython",
    "q": "PEP 523 / frame evaluation API…",
    "options": [
      "хуки для JIT/отладчиков",
      "удаление frames",
      "GIL API",
      "typing"
    ],
    "answer": 0,
    "explain": "Расширяемость VM.",
    "group": "CPython и память",
    "id": "s349"
  },
  {
    "topic": "память",
    "q": "resident vs virtual memory…",
    "options": [
      "RSS vs VSIZE разные метрики",
      "одно и то же",
      "только swap",
      "только arena"
    ],
    "answer": 0,
    "explain": "Интерпретация top/ps.",
    "group": "CPython и память",
    "id": "s350"
  },
  {
    "topic": "import",
    "q": "namespace packages без __init__…",
    "options": [
      "PEP 420",
      "запрещены 3.x",
      "только src layout poetry",
      "zip only"
    ],
    "answer": 0,
    "explain": "Разнесённые пакеты.",
    "group": "Stdlib и производительность",
    "id": "s351"
  },
  {
    "topic": "метаклассы",
    "q": "ABCMeta + metaclass conflict…",
    "options": [
      "нужна кооперация метаклассов",
      "ABC запрещает MI",
      "type ban",
      "Protocol replaces always"
    ],
    "answer": 0,
    "explain": "Сложные иерархии.",
    "group": "Метаклассы и типы",
    "id": "s352"
  },
  {
    "topic": "security",
    "q": "marshmallow/pydantic на границе…",
    "options": [
      "валидация не доверенного ввода",
      "замена firewall",
      "замена auth",
      "pickle safe"
    ],
    "answer": 0,
    "explain": "Parse don't trust.",
    "group": "Безопасность",
    "id": "s353"
  },
  {
    "topic": "db",
    "q": "fillfactor / page split…",
    "options": [
      "физдизайн хранения/индексов",
      "ORM",
      "HTTP",
      "GIL"
    ],
    "answer": 0,
    "explain": "Тюнинг PG/InnoDB.",
    "group": "Данные и распределёнка",
    "id": "s354"
  },
  {
    "topic": "cache",
    "q": "two-phase load (lock+double check)…",
    "options": [
      "классика против stampede",
      "только TTL",
      "random sleep only always enough",
      "no lock needed under GIL for IO? всё равно"
    ],
    "answer": 0,
    "explain": "Паттерн.",
    "group": "Данные и распределёнка",
    "id": "s355"
  },
  {
    "topic": "distributed",
    "q": "idempotent consumer + dedupe store…",
    "options": [
      "effectively-once обработка",
      "exactly broker magic",
      "at-most-once only",
      "batch off"
    ],
    "answer": 0,
    "explain": "Практика очередей.",
    "group": "Данные и распределёнка",
    "id": "s356"
  },
  {
    "topic": "performance",
    "q": "computed goto / computed interpreters…",
    "options": [
      "ускорение VM dispatch",
      "async",
      "typing",
      "pip"
    ],
    "answer": 0,
    "explain": "История CPython perf.",
    "group": "Stdlib и производительность",
    "id": "s357"
  },
  {
    "topic": "api",
    "q": "GraphQL N+1…",
    "options": [
      "решается DataLoader/батчингом",
      "нет проблемы",
      "только SQL join auto",
      "gRPC"
    ],
    "answer": 0,
    "explain": "Классика GraphQL.",
    "group": "Веб и API",
    "id": "s358"
  },
  {
    "topic": "testing",
    "q": "testcontainers…",
    "options": [
      "реальные зависимости в Docker для тестов",
      "только mocks",
      "только in-memory fake always better",
      "chaos"
    ],
    "answer": 0,
    "explain": "Интеграции.",
    "group": "Тесты и качество",
    "id": "s359"
  },
  {
    "topic": "design",
    "q": "hexagonal testing: domain pure…",
    "options": [
      "без I/O в unit домена",
      "всегда с DB",
      "только e2e",
      "GIL tests"
    ],
    "answer": 0,
    "explain": "Быстрые тесты ядра.",
    "group": "Архитектура и дизайн",
    "id": "s360"
  },
  {
    "topic": "observability",
    "q": "profiling in prod continuous…",
    "options": [
      "сэмплирующие профилировщики",
      "cProfile на каждый request",
      "print",
      "dis"
    ],
    "answer": 0,
    "explain": "py-spy/scalene и др.",
    "group": "Observability и качество",
    "id": "s361"
  },
  {
    "topic": "packaging",
    "q": "cross-building wheels…",
    "options": [
      " cibuildwheel / матрица платформ",
      "один manylinux на macOS app",
      "pure py always",
      "conda only"
    ],
    "answer": 0,
    "explain": "Нативные расширения.",
    "group": "Packaging и CI",
    "id": "s362"
  },
  {
    "topic": "C-API",
    "q": "argument clinic…",
    "options": [
      "генерация парсинга аргументов CPython",
      "mypy",
      "pytest",
      "ruff"
    ],
    "answer": 0,
    "explain": "Стандартизация C подписей.",
    "group": "Нативные расширения",
    "id": "s363"
  },
  {
    "topic": "concurrency",
    "q": "subinterpreters per request idea…",
    "options": [
      "изоляция state ценой сложности",
      "замена k8s",
      "GIL remove complete",
      "faster than threads always"
    ],
    "answer": 0,
    "explain": "Исследовательские модели.",
    "group": "Потоки, процессы, GIL",
    "id": "s364"
  },
  {
    "topic": "asyncio",
    "q": "datagram endpoint…",
    "options": [
      "UDP",
      "только TCP",
      "HTTP/3 synonym",
      "unix signals"
    ],
    "answer": 0,
    "explain": "asyncio UDP.",
    "group": "Asyncio",
    "id": "s365"
  },
  {
    "topic": "security",
    "q": "HTML escape vs URL encode…",
    "options": [
      "разные контексты экранирования",
      "взаимозаменяемы",
      "одно enough XSS",
      "SQL escape same"
    ],
    "answer": 0,
    "explain": "Контекстные энкодеры.",
    "group": "Безопасность",
    "id": "s366"
  },
  {
    "topic": "architecture",
    "q": "anti-corruption + published language…",
    "options": [
      "явный перевод + общий язык",
      "shared DB tables as API",
      "random JSON",
      "RPC god"
    ],
    "answer": 0,
    "explain": "Интеграции.",
    "group": "Архитектура и дизайн",
    "id": "s367"
  },
  {
    "topic": "db",
    "q": "hot partition / hotspot key…",
    "options": [
      "перекос нагрузки шарда",
      "идеальное равномерное всегда",
      "только CPU",
      "DNS"
    ],
    "answer": 0,
    "explain": "Дизайн ключей.",
    "group": "Данные и распределёнка",
    "id": "s368"
  },
  {
    "topic": "cache",
    "q": "refresh-ahead…",
    "options": [
      "продление до истечения",
      "только lazy load",
      "write-only",
      "negative only"
    ],
    "answer": 0,
    "explain": "Сглаживание miss.",
    "group": "Данные и распределёнка",
    "id": "s369"
  },
  {
    "topic": "distributed",
    "q": "outbox vs inbox…",
    "options": [
      "отправка vs идемпотентный приём",
      "синонимы",
      "только Kafka Stream",
      "RPC"
    ],
    "answer": 0,
    "explain": "Надёжный обмен.",
    "group": "Данные и распределёнка",
    "id": "s370"
  },
  {
    "topic": "python",
    "q": "сумма range больших — лучше…",
    "options": [
      "арифметика ряда / формула",
      "list materialize always",
      "numpy mandatory",
      "decimal"
    ],
    "answer": 0,
    "explain": "Не строй гигантский list.",
    "group": "CPython и память",
    "id": "s371"
  },
  {
    "topic": "async",
    "q": "wait vs gather exceptions…",
    "options": [
      "разные политики ошибок/возврата",
      "идентичны",
      "wait cancels always same as gather return_exceptions",
      "threads"
    ],
    "answer": 0,
    "explain": "Читай доки.",
    "group": "Asyncio",
    "id": "s372"
  },
  {
    "topic": "errors",
    "q": "notes и __context__/__cause__…",
    "options": [
      "разные слои отладки исключений",
      "синонимы",
      "только logging",
      "warnings"
    ],
    "answer": 0,
    "explain": "Цепочки и заметки.",
    "group": "Исключения и контекст",
    "id": "s373"
  },
  {
    "topic": "CPython",
    "q": "PEP 669 low impact monitoring…",
    "options": [
      "дешёвые хуки наблюдения",
      "settrace старый only",
      "GIL monitor",
      "typing"
    ],
    "answer": 0,
    "explain": "3.12+ observability VM.",
    "group": "CPython и память",
    "id": "s374"
  },
  {
    "topic": "память",
    "q": "object travels through generations если…",
    "options": [
      "выживает сборам",
      "сразу old",
      "never",
      "только slots"
    ],
    "answer": 0,
    "explain": "GC ages.",
    "group": "CPython и память",
    "id": "s375"
  },
  {
    "topic": "import",
    "q": "find_spec None означает…",
    "options": [
      "модуль не найден",
      "found",
      "cached",
      "namespace always"
    ],
    "answer": 0,
    "explain": "Проверка опциональных deps.",
    "group": "Stdlib и производительность",
    "id": "s376"
  },
  {
    "topic": "метаклассы",
    "q": "динамический enum/метакласс фабрики…",
    "options": [
      "codegen на старте",
      "запрещено",
      "только AST rewrite disk",
      "eval only"
    ],
    "answer": 0,
    "explain": "Плагинные реестры.",
    "group": "Метаклассы и типы",
    "id": "s377"
  },
  {
    "topic": "security",
    "q": "CSP nonce для скриптов…",
    "options": [
      "разрешает конкретные inline",
      "отключает JS",
      "заменяет XSS filters server only",
      "CORS"
    ],
    "answer": 0,
    "explain": "Современный XSS defense.",
    "group": "Безопасность",
    "id": "s378"
  },
  {
    "topic": "db",
    "q": "BRIN index…",
    "options": [
      "для естественно упорядоченных больших таблиц",
      "замена BTree всегда",
      "hash only",
      "fulltext"
    ],
    "answer": 0,
    "explain": "PostgreSQL.",
    "group": "Данные и распределёнка",
    "id": "s379"
  },
  {
    "topic": "cache",
    "q": "side-cache vs inline cache в CPU sense…",
    "options": [
      "разные уровни; в app — обычно отдельный store",
      "одно",
      "GIL cache",
      "bytecode cache same"
    ],
    "answer": 0,
    "explain": "Не путать термины.",
    "group": "Данные и распределёнка",
    "id": "s380"
  },
  {
    "topic": "distributed",
    "q": "lease / heartbeat…",
    "options": [
      "временное владение ресурсом",
      "вечный lock",
      "2PC",
      "DNS TTL only"
    ],
    "answer": 0,
    "explain": "Лидерство/локи.",
    "group": "Данные и распределёнка",
    "id": "s381"
  },
  {
    "topic": "performance",
    "q": "polymorphic call sites вредят specialization…",
    "options": [
      "да, разные типы → deopt",
      "нет, только помогают",
      "GIL",
      "typing ignore"
    ],
    "answer": 0,
    "explain": "Стабильность типов.",
    "group": "Stdlib и производительность",
    "id": "s382"
  },
  {
    "topic": "api",
    "q": "long polling vs websocket…",
    "options": [
      "разные модели push",
      "синонимы",
      "только HTTP/2 push mandatory",
      "UDP"
    ],
    "answer": 0,
    "explain": "Выбор транспорта.",
    "group": "Веб и API",
    "id": "s383"
  },
  {
    "topic": "testing",
    "q": "property based + examples…",
    "options": [
      "регрессии на найденных кейсах",
      "только random forever without save",
      "mocks",
      "snapshots only"
    ],
    "answer": 0,
    "explain": "Hypothesis database.",
    "group": "Тесты и качество",
    "id": "s384"
  },
  {
    "topic": "design",
    "q": "dependency rule (clean arch)…",
    "options": [
      "зависимости к центру/домену",
      "к фреймворку inward ok",
      "DB в центре",
      "UI owns domain"
    ],
    "answer": 0,
    "explain": "Направление импортов.",
    "group": "Архитектура и дизайн",
    "id": "s385"
  },
  {
    "topic": "observability",
    "q": "high-cardinality trace attributes…",
    "options": [
      "дороже хранить/искать",
      "бесплатно",
      "лучше чем metrics labels always",
      "ignore PII ok"
    ],
    "answer": 0,
    "explain": "Бюджет телеметрии.",
    "group": "Observability и качество",
    "id": "s386"
  },
  {
    "topic": "packaging",
    "q": "abi flags / pymalloc tag…",
    "options": [
      "сборка интерпретатора влияет на расширения",
      "pure py wheels care",
      "pep8",
      "ruff"
    ],
    "answer": 0,
    "explain": "Совместимость .so.",
    "group": "Packaging и CI",
    "id": "s387"
  },
  {
    "topic": "C-API",
    "q": "limited API versioning…",
    "options": [
      "PY_LIMITED_API",
      "нет версий",
      "semver pip only",
      "typing"
    ],
    "answer": 0,
    "explain": "abi3.",
    "group": "Нативные расширения",
    "id": "s388"
  },
  {
    "topic": "concurrency",
    "q": "message passing > shared memory когда…",
    "options": [
      "нужна простота рассуждений",
      "всегда медленнее useless",
      "GIL gone",
      "numpy only"
    ],
    "answer": 0,
    "explain": "Акторы/очереди.",
    "group": "Потоки, процессы, GIL",
    "id": "s389"
  },
  {
    "topic": "asyncio",
    "q": "Server.close + wait_closed…",
    "options": [
      "корректное завершение слушателя",
      "достаточно close без wait",
      "kill process",
      "SIGINT"
    ],
    "answer": 0,
    "explain": "Graceful.",
    "group": "Asyncio",
    "id": "s390"
  },
  {
    "topic": "security",
    "q": "open redirect…",
    "options": [
      "редирект на злой URL",
      "SSRF",
      "XSS stored only",
      "CSRF token"
    ],
    "answer": 0,
    "explain": "Валидируй next=.",
    "group": "Безопасность",
    "id": "s391"
  },
  {
    "topic": "architecture",
    "q": "published language vs ACL…",
    "options": [
      "общий язык vs переводчик",
      "синонимы",
      "BFF",
      "shared kernel opposite always"
    ],
    "answer": 0,
    "explain": "Интеграционные стили.",
    "group": "Архитектура и дизайн",
    "id": "s392"
  },
  {
    "topic": "db",
    "q": "synchronous_commit off tradeoff…",
    "options": [
      "скорость vs риск потери при crash",
      "всегда safe faster",
      "только replica",
      "ORM"
    ],
    "answer": 0,
    "explain": "PG настройки.",
    "group": "Данные и распределёнка",
    "id": "s393"
  },
  {
    "topic": "cache",
    "q": "asymmetric TTLs tiers…",
    "options": [
      "разные времена на слоях",
      "один TTL везде mandatory",
      "no TTL",
      "negative only"
    ],
    "answer": 0,
    "explain": "Иерархия.",
    "group": "Данные и распределёнка",
    "id": "s394"
  },
  {
    "topic": "distributed",
    "q": "sticky sessions downside…",
    "options": [
      "хуже балансировка/failover",
      "всегда лучше JWT",
      "нет минусов",
      "заменяет cache"
    ],
    "answer": 0,
    "explain": "Состояние на узле.",
    "group": "Данные и распределёнка",
    "id": "s395"
  },
  {
    "topic": "python",
    "q": "math.fsum vs sum…",
    "options": [
      "точный накопленный float sum",
      "одно",
      "decimal",
      "int"
    ],
    "answer": 0,
    "explain": "Численные алгоритмы.",
    "group": "CPython и память",
    "id": "s396"
  },
  {
    "topic": "async",
    "q": "aenter failure и cancel…",
    "options": [
      "изучай семантику CM при ошибках",
      "always simple",
      "как sync identically without nuance",
      "GIL"
    ],
    "answer": 0,
    "explain": "Тонкости",
    "group": "Asyncio",
    "id": "s397"
  },
  {
    "topic": "errors",
    "q": "chained exceptions __context__ при raise в except…",
    "options": [
      "автосвязь",
      "только from",
      "пропадает",
      "logging"
    ],
    "answer": 0,
    "explain": "Неявная цепочка.",
    "group": "Исключения и контекст",
    "id": "s398"
  },
  {
    "topic": "CPython",
    "q": "PEP 649 deferred annotations (направление)…",
    "options": [
      "ленивые аннотации без from __future__ в перспективе",
      "удаление typing",
      "runtime enforce",
      "GIL"
    ],
    "answer": 0,
    "explain": "Эволюция annotations.",
    "group": "CPython и память",
    "id": "s399"
  },
  {
    "topic": "память",
    "q": "shared pages after fork until write…",
    "options": [
      "COW",
      "full copy immediate always on mac spawn?",
      "depends start method",
      "нет COW на linux fork"
    ],
    "answer": 0,
    "explain": "Уточняй платформу/метод.",
    "group": "CPython и память",
    "id": "s400"
  },
  {
    "topic": "import",
    "q": "sys.abiflags…",
    "options": [
      "флаги ABI интерпретатора",
      "pip flags",
      "ruff",
      "mypy"
    ],
    "answer": 0,
    "explain": "Интроспекция сборки.",
    "group": "Stdlib и производительность",
    "id": "s401"
  },
  {
    "topic": "метаклассы",
    "q": "class body executes inside namespace…",
    "options": [
      "да, затем type(...) ",
      "нет, декларативно without exec",
      "только annotations kept",
      "GIL"
    ],
    "answer": 0,
    "explain": "class — executable suite.",
    "group": "Метаклассы и типы",
    "id": "s402"
  },
  {
    "topic": "security",
    "q": "JWT none alg attack…",
    "options": [
      "подмена алгоритма",
      "XSS",
      "CSRF",
      "SQLi"
    ],
    "answer": 0,
    "explain": "Жёстко задавай alg.",
    "group": "Безопасность",
    "id": "s403"
  },
  {
    "topic": "db",
    "q": "connection pooler (PgBouncer) transaction pooling нюанс…",
    "options": [
      "session state/prepared осторожно",
      "прозрачно всегда",
      "заменяет replicas",
      "ORM off"
    ],
    "answer": 0,
    "explain": "Режим пулера.",
    "group": "Данные и распределёнка",
    "id": "s404"
  },
  {
    "topic": "cache",
    "q": "probabilistic early expiration…",
    "options": [
      "ранний refresh с вероятностью",
      "fixed TTL only",
      "lock only",
      "no cache"
    ],
    "answer": 0,
    "explain": "XFetch-подобные идеи.",
    "group": "Данные и распределёнка",
    "id": "s405"
  },
  {
    "topic": "distributed",
    "q": "phi accrual failure detection…",
    "options": [
      "адаптивный suspicion level",
      "hard timeout only",
      "Raft",
      "DNS"
    ],
    "answer": 0,
    "explain": "Аккруал-детекторы.",
    "group": "Данные и распределёнка",
    "id": "s406"
  },
  {
    "topic": "performance",
    "q": "devirtualization в JIT…",
    "options": [
      "упрощает вызовы при мономорфности",
      "GIL",
      "typing cast runtime",
      "async"
    ],
    "answer": 0,
    "explain": "Связь со specialization.",
    "group": "Stdlib и производительность",
    "id": "s407"
  },
  {
    "topic": "api",
    "q": "idempotent create with client keys…",
    "options": [
      "UPSERT/по ключу запроса",
      "random UUID server only without store",
      "POST always once network perfect",
      "GET create"
    ],
    "answer": 0,
    "explain": "Клиентские ключи.",
    "group": "Веб и API",
    "id": "s408"
  },
  {
    "topic": "testing",
    "q": "approval tests…",
    "options": [
      "review эталона человеком",
      "property",
      "mutation",
      "chaos"
    ],
    "answer": 0,
    "explain": "Близко к snapshot.",
    "group": "Тесты и качество",
    "id": "s409"
  },
  {
    "topic": "design",
    "q": "ACL + facade на легаси…",
    "options": [
      "изолирует старое API",
      "расширяет легаси во все сервисы",
      "shared tables",
      "big bang"
    ],
    "answer": 0,
    "explain": "Миграции.",
    "group": "Архитектура и дизайн",
    "id": "s410"
  },
  {
    "topic": "observability",
    "q": "tail-based sampling…",
    "options": [
      "решение хранить трейс после факта (ошибки/медленно)",
      "только в начале",
      "random 1%",
      "no traces"
    ],
    "answer": 0,
    "explain": "Дорогие трейсы умно.",
    "group": "Observability и качество",
    "id": "s411"
  },
  {
    "topic": "packaging",
    "q": "pylock.toml / lock standards эволюция…",
    "options": [
      "стандартизация локов экосистемы",
      "requirements.txt forever only standard",
      "poetry exclusive lock format eternal",
      "pip freeze ban"
    ],
    "answer": 0,
    "explain": "Следи за PEP.",
    "group": "Packaging и CI",
    "id": "s412"
  },
  {
    "topic": "C-API",
    "q": "HPy проект цель…",
    "options": [
      "более стабильный/портируемый API расширений",
      "замена asyncio",
      "GIL remove only",
      "typing"
    ],
    "answer": 0,
    "explain": "Альтернатива историческому C-API.",
    "group": "Нативные расширения",
    "id": "s413"
  },
  {
    "topic": "concurrency",
    "q": "software transactional memory в Python…",
    "options": [
      "нет стандартного STM",
      "есть в stdlib",
      "GIL is STM",
      "asyncio STM"
    ],
    "answer": 0,
    "explain": "Используй locks/actors.",
    "group": "Потоки, процессы, GIL",
    "id": "s414"
  },
  {
    "topic": "asyncio",
    "q": "readexactly…",
    "options": [
      "ровно n байт или IncompleteReadError",
      "до EOF always",
      "line",
      "http"
    ],
    "answer": 0,
    "explain": "Протоколы.",
    "group": "Asyncio",
    "id": "s415"
  },
  {
    "topic": "security",
    "q": "mass assignment…",
    "options": [
      "лишние поля во входной модели",
      "XSS",
      "SSRF",
      "CSRF"
    ],
    "answer": 0,
    "explain": "Явные allowlists полей.",
    "group": "Безопасность",
    "id": "s416"
  },
  {
    "topic": "architecture",
    "q": "turbo monolith / modular…",
    "options": [
      "высокая модульность без сети",
      "microservices or death",
      "shared DB free for all",
      "BFF ban"
    ],
    "answer": 0,
    "explain": "Командный масштаб.",
    "group": "Архитектура и дизайн",
    "id": "s417"
  },
  {
    "topic": "db",
    "q": "write skew example…",
    "options": [
      "аномалия при snapshot isolation",
      "dirty read",
      "phantom only term",
      "lost update only term"
    ],
    "answer": 0,
    "explain": "Классика теории.",
    "group": "Данные и распределёнка",
    "id": "s418"
  },
  {
    "topic": "cache",
    "q": "versioned keys…",
    "options": [
      "инвалидация сменой версии в имени",
      "TTL=∞",
      "LRU off",
      "random keys"
    ],
    "answer": 0,
    "explain": "Простой приём.",
    "group": "Данные и распределёнка",
    "id": "s419"
  },
  {
    "topic": "distributed",
    "q": "clock skew vs logical time…",
    "options": [
      "не полагайся на wall clock для порядка",
      "NTP perfect",
      "UUID time enough",
      "GIL time"
    ],
    "answer": 0,
    "explain": "Lamport/vector/hybrid.",
    "group": "Данные и распределёнка",
    "id": "s420"
  },
  {
    "topic": "python",
    "q": "int произвольной длины цена…",
    "options": [
      "больше цифр → дороже операции",
      "O(1) always like CPU int",
      "float same",
      "decimal cheaper"
    ],
    "answer": 0,
    "explain": "Большие числа.",
    "group": "CPython и память",
    "id": "s421"
  },
  {
    "topic": "async",
    "q": "flow control pause_writing…",
    "options": [
      "протокол транспорта при backpressure",
      "GIL pause",
      "thread pause",
      "process"
    ],
    "answer": 0,
    "explain": "asyncio transports.",
    "group": "Asyncio",
    "id": "s422"
  },
  {
    "topic": "errors",
    "q": "ExceptionGroup как список ошибок gather…",
    "options": [
      "TaskGroup/3.11 стиль",
      "только logging",
      "замена tuple return",
      "warnings"
    ],
    "answer": 0,
    "explain": "Структурированные сбои.",
    "group": "Исключения и контекст",
    "id": "s423"
  },
  {
    "topic": "CPython",
    "q": "immortal objects (3.12)…",
    "options": [
      "некоторые объекты без смены refcnt",
      "все immortal",
      "no GC needed",
      "GIL immortal"
    ],
    "answer": 0,
    "explain": "Оптимизация.",
    "group": "CPython и память",
    "id": "s424"
  },
  {
    "topic": "память",
    "q": "allocator hooks PYTHONMALLOC…",
    "options": [
      "отладка аллокаций",
      "faster always",
      "disable GC",
      "typing"
    ],
    "answer": 0,
    "explain": "debug hooks.",
    "group": "CPython и память",
    "id": "s425"
  },
  {
    "topic": "import",
    "q": "module specs origin…",
    "options": [
      "откуда загружен",
      "version pep",
      "hash only",
      "author"
    ],
    "answer": 0,
    "explain": "Диагностика.",
    "group": "Stdlib и производительность",
    "id": "s426"
  },
  {
    "topic": "security",
    "q": "prototype pollution больше про JS; в Python аналог риска…",
    "options": [
      "массовое обновление __dict__/merge без фильтра",
      "GIL pollution",
      "import pollution always",
      "нет аналогов концепта"
    ],
    "answer": 0,
    "explain": "Контролируй merge.",
    "group": "Безопасность",
    "id": "s427"
  },
  {
    "topic": "db",
    "q": "serializable critical section через…",
    "options": [
      "правильные уровни/ретраи сериализации",
      "READ UNCOMMITTED",
      "autocommit",
      "NoSQL only"
    ],
    "answer": 0,
    "explain": "Аномалии.",
    "group": "Данные и распределёнка",
    "id": "s428"
  },
  {
    "topic": "cache",
    "q": "hot key split…",
    "options": [
      "шардинг популярного ключа",
      "TTL decrease only",
      "one box",
      "CPU pin"
    ],
    "answer": 0,
    "explain": "Перекос ключей.",
    "group": "Данные и распределёнка",
    "id": "s429"
  },
  {
    "topic": "distributed",
    "q": "backpressure end-to-end…",
    "options": [
      "от клиента до воркеров согласованно",
      "только один слой queue maxsize",
      "drop always",
      "retry amplify"
    ],
    "answer": 0,
    "explain": "Системное мышление.",
    "group": "Данные и распределёнка",
    "id": "s430"
  },
  {
    "topic": "performance",
    "q": "tracepoints / USDT…",
    "options": [
      "низкоуровневая инструментизация",
      "только logging",
      "only py-spy",
      "GIL probes std"
    ],
    "answer": 0,
    "explain": "Prod profiling.",
    "group": "Stdlib и производительность",
    "id": "s431"
  },
  {
    "topic": "api",
    "q": "partial response / sparse fieldsets…",
    "options": [
      "клиент просит поля",
      "всегда full entity",
      "GraphQL only possible",
      "gRPC ban"
    ],
    "answer": 0,
    "explain": "Экономия трафика.",
    "group": "Веб и API",
    "id": "s432"
  },
  {
    "topic": "testing",
    "q": "synthetic canaries…",
    "options": [
      "прод-проверки синтетикой",
      "unit",
      "mutation",
      "chaos only"
    ],
    "answer": 0,
    "explain": "Ранний сигнал.",
    "group": "Тесты и качество",
    "id": "s433"
  },
  {
    "topic": "design",
    "q": "domain events vs integration events…",
    "options": [
      "внутренние vs внешние контракты",
      "синонимы always",
      "only Kafka",
      "only DB triggers"
    ],
    "answer": 0,
    "explain": "Границы.",
    "group": "Архитектура и дизайн",
    "id": "s434"
  },
  {
    "topic": "observability",
    "q": "profiling vs tracing…",
    "options": [
      "стек/CPU vs запросы по сервисам",
      "одно",
      "logs synonim",
      "metrics synonim"
    ],
    "answer": 0,
    "explain": "Разные вопросы.",
    "group": "Observability и качество",
    "id": "s435"
  },
  {
    "topic": "packaging",
    "q": "wheel tags cp311-abi3…",
    "options": [
      "интерпретатор/ABI/платформа",
      "только version lib",
      "pep8 tag",
      "git"
    ],
    "answer": 0,
    "explain": "Выбор колеса pip.",
    "group": "Packaging и CI",
    "id": "s436"
  },
  {
    "topic": "C-API",
    "q": "PyUnstable_* APIs…",
    "options": [
      "могут меняться",
      "stable abi",
      "limited api same",
      "typing"
    ],
    "answer": 0,
    "explain": "Осторожно в расширениях.",
    "group": "Нативные расширения",
    "id": "s437"
  },
  {
    "topic": "concurrency",
    "q": "wait-free vs lock-free…",
    "options": [
      "прогресса гарантии разные",
      "синонимы",
      "GIL terms",
      "asyncio terms"
    ],
    "answer": 0,
    "explain": "Теория параллелизма.",
    "group": "Потоки, процессы, GIL",
    "id": "s438"
  },
  {
    "topic": "asyncio",
    "q": "buffered protocol…",
    "options": [
      "управление буферами протокола",
      "только streams high-level",
      "UDP only",
      "HTTP router"
    ],
    "answer": 0,
    "explain": "Низкий уровень asyncio.",
    "group": "Asyncio",
    "id": "s439"
  },
  {
    "topic": "security",
    "q": "unsafe deserialization gadgets…",
    "options": [
      "цепочки для RCE при pickle/yaml",
      "только buffer overflow C",
      "XSS",
      "CSRF"
    ],
    "answer": 0,
    "explain": "Не десериализуй недоверенное.",
    "group": "Безопасность",
    "id": "s440"
  },
  {
    "topic": "architecture",
    "q": "control plane vs data plane…",
    "options": [
      "управление vs трафик данных",
      "frontend/backend",
      "ETL/ELT",
      "CQRS exact synonym"
    ],
    "answer": 0,
    "explain": "Инфра/сервисы.",
    "group": "Архитектура и дизайн",
    "id": "s441"
  },
  {
    "topic": "db",
    "q": "logical replication slots риск…",
    "options": [
      "удержание WAL → диск",
      "только CPU",
      "без рисков",
      "ORM"
    ],
    "answer": 0,
    "explain": "Мониторинг слотов.",
    "group": "Данные и распределёнка",
    "id": "s442"
  },
  {
    "topic": "cache",
    "q": "in-process + Redis tiers…",
    "options": [
      "локальность + общая консистентность сложнее",
      "достаточно одного always",
      "no invalidation needed",
      "GIL cache enough"
    ],
    "answer": 0,
    "explain": "Сложность инвалидации.",
    "group": "Данные и распределёнка",
    "id": "s443"
  },
  {
    "topic": "distributed",
    "q": "split brain…",
    "options": [
      "два лидера/раздельное мнение о кластере",
      "DNS fail",
      "GC pause only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Кворумы/fencing.",
    "group": "Данные и распределёнка",
    "id": "s444"
  },
  {
    "topic": "python",
    "q": "sys.set_int_max_str_digits…",
    "options": [
      "защита от DoS конвертации огромных int↔str",
      "ускорение",
      "typing",
      "json"
    ],
    "answer": 0,
    "explain": "DoS mitigation.",
    "group": "CPython и память",
    "id": "s445"
  },
  {
    "topic": "async",
    "q": "nursery cancel all children on error…",
    "options": [
      "structured concurrency default идея",
      "leave orphans",
      "only parent cancel",
      "threads join none"
    ],
    "answer": 0,
    "explain": "Надёжные иерархии задач.",
    "group": "Asyncio",
    "id": "s446"
  },
  {
    "topic": "errors",
    "q": "traceback.hide_frame / фильтрация…",
    "options": [
      "чище трейсы библиотек (механики зависят от версии)",
      "удаляет error",
      "logging only",
      "warnings"
    ],
    "answer": 0,
    "explain": "UX ошибок.",
    "group": "Исключения и контекст",
    "id": "s447"
  },
  {
    "topic": "CPython",
    "q": "tiered interpreter proposals…",
    "options": [
      "дальнейшие уровни оптимизации VM",
      "удаление bytecode",
      "JVM merge",
      "GIL eternal only topic"
    ],
    "answer": 0,
    "explain": "Roadmap перфа.",
    "group": "CPython и память",
    "id": "s448"
  },
  {
    "topic": "память",
    "q": "debug builds with assertions…",
    "options": [
      "другие перф/поведение",
      "идентичны release",
      "faster",
      "no GC"
    ],
    "answer": 0,
    "explain": "Сравнивай apples-to-apples.",
    "group": "CPython и память",
    "id": "s449"
  },
  {
    "topic": "import",
    "q": "lazy loaders tradeoffs…",
    "options": [
      "старт быстрее, ошибки позже",
      "всегда лучше",
      "запрещены",
      "typing only"
    ],
    "answer": 0,
    "explain": "Диагностика сложнее.",
    "group": "Stdlib и производительность",
    "id": "s450"
  },
  {
    "topic": "security",
    "q": "SSRF via file:// or metadata IP…",
    "options": [
      "облачные метаданные под угрозой",
      "не бывает",
      "только XSS",
      "только CSRF"
    ],
    "answer": 0,
    "explain": "169.254.169.254 и т.п.",
    "group": "Безопасность",
    "id": "s451"
  },
  {
    "topic": "db",
    "q": "idle_in_transaction_session_timeout…",
    "options": [
      "убивает зависшие транзакции",
      "pool size",
      "vacuum",
      "index"
    ],
    "answer": 0,
    "explain": "Гигиена соединений.",
    "group": "Данные и распределёнка",
    "id": "s452"
  },
  {
    "topic": "cache",
    "q": "write-around…",
    "options": [
      "запись в store минуя кэш",
      "write-through",
      "write-back",
      "no write"
    ],
    "answer": 0,
    "explain": "Политика.",
    "group": "Данные и распределёнка",
    "id": "s453"
  },
  {
    "topic": "distributed",
    "q": "read repair…",
    "options": [
      "починка при чтении реплик",
      "только compaction",
      "2PC",
      "TTL"
    ],
    "answer": 0,
    "explain": "AP системы.",
    "group": "Данные и распределёнка",
    "id": "s454"
  },
  {
    "topic": "performance",
    "q": "static typing не ускоряет CPython само по себе…",
    "options": [
      "да, это для людей/чекеров/codegen",
      "mypy ускоряет runtime",
      "annotations JIT always",
      "GIL off by typing"
    ],
    "answer": 0,
    "explain": "Частый миф.",
    "group": "Stdlib и производительность",
    "id": "s455"
  },
  {
    "topic": "api",
    "q": "batch endpoints против chatty…",
    "options": [
      "меньше RTT",
      "всегда хуже cache",
      "запрещены REST",
      "only GraphQL"
    ],
    "answer": 0,
    "explain": "Эффективность.",
    "group": "Веб и API",
    "id": "s456"
  },
  {
    "topic": "testing",
    "q": "ephemeral environment per PR…",
    "options": [
      "изоляция интеграций",
      "shared staging fight",
      "only local",
      "only prod"
    ],
    "answer": 0,
    "explain": "Современный CI/CD.",
    "group": "Тесты и качество",
    "id": "s457"
  },
  {
    "topic": "design",
    "q": "policy + mechanism separation…",
    "options": [
      "решения отдельно от исполнения",
      "hardcode ifs everywhere",
      "god object",
      "anemic + services chaos"
    ],
    "answer": 0,
    "explain": "Гибкость.",
    "group": "Архитектура и дизайн",
    "id": "s458"
  },
  {
    "topic": "observability",
    "q": "continuous profiling privacy…",
    "options": [
      "стек может светить PII/пути",
      "безопасно всегда",
      "only CPU numbers",
      "no risk"
    ],
    "answer": 0,
    "explain": "Редактура/сэмплинг.",
    "group": "Observability и качество",
    "id": "s459"
  },
  {
    "topic": "packaging",
    "q": "reproducible sdist + wheel attestations…",
    "options": [
      "цепочка доверия артефактов",
      "MD5 enough",
      "trust PyPI without pins always",
      "git tag enough"
    ],
    "answer": 0,
    "explain": "Supply chain 2020s.",
    "group": "Packaging и CI",
    "id": "s460"
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
    "explain": "Массив сдвигает элементы.",
    "code": "xs = list(range(10000))\nxs.pop(0)",
    "group": "CPython и память",
    "id": "s461"
  },
  {
    "topic": "CPython",
    "q": "dict сохраняет порядок вставки?",
    "options": [
      "да, с 3.7 как контракт",
      "нет никогда",
      "только OrderedDict",
      "random"
    ],
    "answer": 0,
    "explain": "Языковой guarantee.",
    "code": "print(list({'b': 1, 'a': 2}))",
    "group": "CPython и память",
    "id": "s462"
  },
  {
    "topic": "GIL",
    "q": "Два CPU-потока на чистом Python?",
    "options": [
      "часто ≈ одно ядро",
      "линейный x2",
      "x4",
      "zero"
    ],
    "answer": 0,
    "explain": "GIL.",
    "code": "# threading + pure python loop",
    "group": "Потоки, процессы, GIL",
    "id": "s463"
  },
  {
    "topic": "память",
    "q": "__slots__ экономит за счёт?",
    "options": [
      "нет __dict__ у экземпляра",
      "сжатия bytecode",
      "отключения GC",
      "mmap"
    ],
    "answer": 0,
    "explain": "Фиксированные атрибуты.",
    "code": "class A:\n    __slots__ = ('x',)",
    "group": "CPython и память",
    "id": "s464"
  },
  {
    "topic": "дескрипторы",
    "q": "Instance attr затенит функцию?",
    "options": [
      "да (non-data descriptor)",
      "нет",
      "ошибка",
      "только slots"
    ],
    "answer": 0,
    "explain": "Функции — non-data.",
    "code": "class A:\n    def f(self): return 1\na = A()\na.f = 2\nprint(a.f)",
    "group": "Метаклассы и типы",
    "id": "s465"
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
    "explain": "await asyncio.sleep.",
    "code": "async def bad():\n    import time\n    time.sleep(1)",
    "group": "Asyncio",
    "id": "s466"
  },
  {
    "topic": "pickle",
    "q": "pickle.loads(недовер.) риск?",
    "options": [
      "RCE",
      "только большой RAM",
      "UTF error",
      "медленно"
    ],
    "answer": 0,
    "explain": "Может исполнить код.",
    "code": "# pickle.loads(user_bytes)",
    "group": "Stdlib и производительность",
    "id": "s467"
  },
  {
    "topic": "security",
    "q": "shell=True риск?",
    "options": [
      "injection",
      "только slow",
      "безопаснее list",
      "нет"
    ],
    "answer": 0,
    "explain": "subprocess list args.",
    "code": "import subprocess\n# subprocess.run(user_str, shell=True)",
    "group": "Безопасность",
    "id": "s468"
  },
  {
    "topic": "db",
    "q": "N+1 выглядит как?",
    "options": [
      "цикл запросов по связям",
      "один JOIN",
      "VACUUM",
      "index only"
    ],
    "answer": 0,
    "explain": "ORM классика.",
    "code": "for u in users:\n    print(u.orders)  # lazy?",
    "group": "Данные и распределёнка",
    "id": "s469"
  },
  {
    "topic": "cache",
    "q": "Stampede это?",
    "options": [
      "массовый промах кэша",
      "LRU overflow",
      "hash collision",
      "GIL thrash"
    ],
    "answer": 0,
    "explain": "Singleflight/lock.",
    "code": "# cache miss storm",
    "group": "Данные и распределёнка",
    "id": "s470"
  },
  {
    "topic": "python",
    "q": "int('1'*100000) защита?",
    "options": [
      "лимит str↔int digits",
      "нет защиты",
      "GIL",
      "float"
    ],
    "answer": 0,
    "explain": "DoS mitigation.",
    "code": "import sys\n# sys.set_int_max_str_digits",
    "group": "CPython и память",
    "id": "s471"
  },
  {
    "topic": "async",
    "q": "CancelledError где ловить?",
    "options": [
      "в await-точках / finally",
      "после return only",
      "в другом процессе",
      "никогда"
    ],
    "answer": 0,
    "explain": "Кооперативная отмена.",
    "code": "async def work():\n    try:\n        await asyncio.sleep(10)\n    finally:\n        ...",
    "group": "Asyncio",
    "id": "s472"
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
    "explain": "dis модуль.",
    "code": "import dis\ndef f(x): return x+1\ndis.dis(f)",
    "group": "CPython и память",
    "id": "s473"
  },
  {
    "topic": "import",
    "q": "circular import симптом?",
    "options": [
      "частично инициализированный модуль / ImportError",
      "GIL dead",
      "SyntaxError",
      "OK always"
    ],
    "answer": 0,
    "explain": "Локальный import / рефакторинг.",
    "code": "# a imports b, b imports a",
    "group": "Stdlib и производительность",
    "id": "s474"
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
    "explain": "Anti-corruption layer.",
    "code": "# external_dto -> domain_model",
    "group": "Архитектура и дизайн",
    "id": "s475"
  }
];
