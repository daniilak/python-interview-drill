window.QUESTIONS_SENIOR = [
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
    "explain": "Все объекты — PyObject-совместимы. Правильный ответ: «PyObject (refcount + type)». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s1"
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
    "explain": "Порядок вставки — язык. контракт с 3.7. Правильный ответ: «compact + insertion-ordered (3.6+)». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s2"
  },
  {
    "topic": "GIL",
    "q": "Что вернёт Как C-расширение отпускает GIL?",
    "options": [
      "Py_BEGIN_ALLOW_THREADS",
      "gil.disable()",
      "threading.ungil",
      "нельзя"
    ],
    "answer": 0,
    "explain": "Макросы ALLOW/END_ALLOW_THREADS. Правильный ответ: «Py_BEGIN_ALLOW_THREADS». GIL (Global Interpreter Lock) ограничивает параллельное исполнение байткода в CPython.",
    "group": "Потоки, процессы, GIL",
    "id": "s3"
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
    "explain": "Эксперименты в 3.13+. Правильный ответ: «опционально убрать GIL». GIL (Global Interpreter Lock) ограничивает параллельное исполнение байткода в CPython.",
    "group": "Потоки, процессы, GIL",
    "id": "s4"
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
    "explain": "Арена/пулы для small allocs. Правильный ответ: «аллокатор мелких объектов CPython».",
    "group": "CPython и память",
    "id": "s5"
  },
  {
    "topic": "память",
    "q": "Что означает «__slots__ экономит за счёт»?",
    "options": [
      "отказа от per-instance __dict__",
      "сжатия bytecode",
      "отключения GC",
      "mmap"
    ],
    "answer": 0,
    "explain": "Фиксированные дескрипторы. Правильный ответ: «отказа от per-instance __dict__».",
    "group": "CPython и память",
    "id": "s6"
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
    "explain": "Оптимизация для copy-on-write. Правильный ответ: «чтобы не трейсить старые объекты после fork/copy-on-write».",
    "group": "Stdlib и производительность",
    "id": "s7"
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
    "explain": "Метапуть импорта. Правильный ответ: «программный импорт и лоадеры».",
    "group": "Stdlib и производительность",
    "id": "s8"
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
    "explain": "PEP 302/451. Правильный ответ: «finders для импорта».",
    "group": "Stdlib и производительность",
    "id": "s9"
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
    "explain": "Дизассемблер bytecode. Правильный ответ: «байткод функции».",
    "group": "CPython и память",
    "id": "s10"
  },
  {
    "topic": "байткод",
    "q": "Что вернёт .compile / ast.parse связаны с?",
    "options": [
      "компиляцией в code object",
      "сетевым RPC",
      "SQL",
      "GIL"
    ],
    "answer": 0,
    "explain": "Фронтенд интерпретатора. Правильный ответ: «компиляцией в code object».",
    "group": "CPython и память",
    "id": "s11"
  },
  {
    "topic": "дескрипторы",
    "q": "Что означает «Data descriptor имеет»?",
    "options": [
      "__set__/__delete__ (+ __get__)",
      "только __get__",
      "только __call__",
      "slots"
    ],
    "answer": 0,
    "explain": "Перебивает instance dict. Правильный ответ: «__set__/__delete__ (+ __get__)». Дескрипторы управляют доступом к атрибутам через __get__ / __set__ / __delete__.",
    "group": "Метаклассы и типы",
    "id": "s12"
  },
  {
    "topic": "дескрипторы",
    "q": "Что вернёт Non-data descriptor?",
    "options": [
      "только __get__, слабее instance __dict__",
      "сильнее всегда",
      "запрещён",
      "это property.setter"
    ],
    "answer": 0,
    "explain": "Функции — non-data descriptors. Правильный ответ: «только __get__, слабее instance __dict__». Дескрипторы управляют доступом к атрибутам через __get__ / __set__ / __delete__.",
    "group": "Метаклассы и типы",
    "id": "s13"
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
    "explain": "type(name, bases, ns). Правильный ответ: «класс класса (type subclass)». Метакласс создаёт класс так же, как класс создаёт экземпляр.",
    "group": "Метаклассы и типы",
    "id": "s14"
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
    "explain": "Создание класса. Правильный ответ: «M(name, bases, namespace)». Метакласс создаёт класс так же, как класс создаёт экземпляр.",
    "group": "Метаклассы и типы",
    "id": "s15"
  },
  {
    "topic": "метаклассы",
    "q": "Что означает «__init_subclass__ полезен чтобы»?",
    "options": [
      "хукать создание подклассов без метакласса",
      "заменить __init__",
      "GIL",
      "slots auto"
    ],
    "answer": 0,
    "explain": "PEP 487. Правильный ответ: «хукать создание подклассов без метакласса». Метакласс создаёт класс так же, как класс создаёт экземпляр.",
    "group": "Метаклассы и типы",
    "id": "s16"
  },
  {
    "topic": "typing",
    "q": "Что означает «typing.overload нужен для»?",
    "options": [
      "нескольких сигнатур для чекера",
      "runtime dispatch обязательно",
      "ускорения",
      "decorators"
    ],
    "answer": 0,
    "explain": "Только для type checkers. Правильный ответ: «нескольких сигнатур для чекера». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "s17"
  },
  {
    "topic": "typing",
    "q": "Что вернёт TypeVar bound=… ограничивает?",
    "options": [
      "верхнюю границу параметра типа",
      "runtime cast",
      "GIL",
      "slots"
    ],
    "answer": 0,
    "explain": "Generics. Правильный ответ: «верхнюю границу параметра типа». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "s18"
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
    "explain": "PEP 612. Правильный ответ: «типизации декораторов (*args/**kwargs)». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "s19"
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
    "explain": "Анти-SQL-injection в типах. Правильный ответ: «отличать доверенные строки от произвольных». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "s20"
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
    "explain": "Высокоуровневые пулы. Правильный ответ: «Thread/ProcessPoolExecutor».",
    "group": "Потоки, процессы, GIL",
    "id": "s21"
  },
  {
    "topic": "concurrency",
    "q": "Выбери верный вариант: Когда ProcessPool лучше ThreadPool?",
    "options": [
      "CPU-bound в CPython",
      "чистый network wait",
      "всегда",
      "никогда"
    ],
    "answer": 0,
    "explain": "Обход GIL ценой IPC. Правильный ответ: «CPU-bound в CPython».",
    "group": "Потоки, процессы, GIL",
    "id": "s22"
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
    "explain": "Ограничение конкурентности. Правильный ответ: «Semaphore допускает N, Lock — 1». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "s23"
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
    "explain": "Structured concurrency. Правильный ответ: «структурированное конкурентное выполнение задач». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "s24"
  },
  {
    "topic": "asyncio",
    "q": "Выбери верный вариант: Почему блокирующий вызов в async плох?",
    "options": [
      "блокирует event loop",
      "убивает процесс",
      "ломает типы",
      "обязателен"
    ],
    "answer": 0,
    "explain": "Используйте to_thread / executors. Правильный ответ: «блокирует event loop». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "s25"
  },
  {
    "topic": "asyncio",
    "q": "Что означает «loop.add_signal_handler доступен»?",
    "options": [
      "не на всех платформах (ограничения Windows)",
      "везде одинаково",
      "только в threads",
      "в PyPy only"
    ],
    "answer": 0,
    "explain": "Платформенные нюансы. Правильный ответ: «не на всех платформах (ограничения Windows)». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "s26"
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
    "explain": "macOS/Windows default spawn. Правильный ответ: «разный способ старта процесса и совместимость».",
    "group": "Потоки, процессы, GIL",
    "id": "s27"
  },
  {
    "topic": "pickle",
    "q": "В чём риск pickle.loads из недоверенного источника?",
    "options": [
      "может выполнить код при загрузке",
      "только большой размер",
      "ломает UTF-8",
      "медленный hash"
    ],
    "answer": 0,
    "explain": "Arbitrary code execution. Правильный ответ: «может выполнить код при загрузке».",
    "group": "Stdlib и производительность",
    "id": "s28"
  },
  {
    "topic": "security",
    "q": "Что означает «Для секретов в логах важно»?",
    "options": [
      "редактирование / не логировать",
      "print всегда",
      "pickle secrets",
      "держать в URL"
    ],
    "answer": 0,
    "explain": "Leak prevention. Правильный ответ: «редактирование / не логировать». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s29"
  },
  {
    "topic": "API design",
    "q": "Что означает «Хороший API в Python часто»?",
    "options": [
      "явный, предсказуемый, с типами",
      "максимум магии __getattr__",
      "глобальные синглтоны везде",
      "молчаливые catch-all except"
    ],
    "answer": 0,
    "explain": "Явное лучше неявного (Zen). Правильный ответ: «явный, предсказуемый, с типами».",
    "group": "Веб и API",
    "id": "s30"
  },
  {
    "topic": "Zen",
    "q": "Что такое «Explicit is better than implicit» из в контексте Python?",
    "options": [
      "The Zen of Python (PEP 20)",
      "PEP 8 только",
      "GIL docs",
      "POSIX"
    ],
    "answer": 0,
    "explain": "import this. Правильный ответ: «The Zen of Python (PEP 20)».",
    "group": "Архитектура и дизайн",
    "id": "s31"
  },
  {
    "topic": "SOLID",
    "q": "Что означает «Dependency Inversion в Python часто через»?",
    "options": [
      "протоколы/ABC + DI",
      "глобальные import",
      "GIL",
      "monkeypatch в проде"
    ],
    "answer": 0,
    "explain": "Зависимость от абстракций. Правильный ответ: «протоколы/ABC + DI».",
    "group": "Архитектура и дизайн",
    "id": "s32"
  },
  {
    "topic": "patterns",
    "q": "Что означает «В Python Singleton часто заменяют»?",
    "options": [
      "модулем как синглтоном",
      "обязательным metaclass везде",
      "Borg только",
      "GoF строго"
    ],
    "answer": 0,
    "explain": "Модуль загружается один раз. Правильный ответ: «модулем как синглтоном».",
    "group": "Архитектура и дизайн",
    "id": "s33"
  },
  {
    "topic": "patterns",
    "q": "Что означает «Стратегия естественно выражается»?",
    "options": [
      "функциями/callable первого класса",
      "только наследованием",
      "GIL strategies",
      "enum switch C-style обязателен"
    ],
    "answer": 0,
    "explain": "First-class functions. Правильный ответ: «функциями/callable первого класса».",
    "group": "Архитектура и дизайн",
    "id": "s34"
  },
  {
    "topic": "performance",
    "q": "Что вернёт Когда имеет смысл Cython/PyO3?",
    "options": [
      "горячие CPU участки",
      "каждый CRUD",
      "логирование",
      "конфиг YAML"
    ],
    "answer": 0,
    "explain": "Нативный код для hotspots. Правильный ответ: «горячие CPU участки». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s35"
  },
  {
    "topic": "performance",
    "q": "Что означает «Профилирование CPU: стандартно»?",
    "options": [
      "cProfile / pyinstrument",
      "print time только в проде без меры",
      "gc.collect loop",
      "dis всегда"
    ],
    "answer": 0,
    "explain": "Измеряй до оптимизации. Правильный ответ: «cProfile / pyinstrument». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s36"
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
    "explain": "Трассировка аллокаций. Правильный ответ: «искать утечки аллокаций». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s37"
  },
  {
    "topic": "caching",
    "q": "Что означает «Кэш с вытеснением вручную часто на»?",
    "options": [
      "OrderedDict / functools.lru_cache",
      "list.pop(0) как LRU идеал",
      "set",
      "queue.Queue only"
    ],
    "answer": 0,
    "explain": "move_to_end паттерн. Правильный ответ: «OrderedDict / functools.lru_cache».",
    "group": "Данные и распределёнка",
    "id": "s38"
  },
  {
    "topic": "design",
    "q": "Что означает «Fail fast означает»?",
    "options": [
      "рано обнаруживать ошибки",
      "глотать exceptions",
      "retry бесконечно",
      "lazy import всегда"
    ],
    "answer": 0,
    "explain": "Быстрый сигнал о проблеме. Правильный ответ: «рано обнаруживать ошибки».",
    "group": "Архитектура и дизайн",
    "id": "s39"
  },
  {
    "topic": "design",
    "q": "Что означает «Идемпотентность API важна для»?",
    "options": [
      "безопасных повторов запросов",
      "GIL",
      "list.sort",
      "print"
    ],
    "answer": 0,
    "explain": "Повтор не меняет эффект. Правильный ответ: «безопасных повторов запросов».",
    "group": "Архитектура и дизайн",
    "id": "s40"
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
    "explain": "Удобный поиск/алерты. Правильный ответ: «machine-readable поля (JSON и т.п.)». Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s41"
  },
  {
    "topic": "packaging",
    "q": "Что означает «pyproject.toml — современный»?",
    "options": [
      "стандарт манифеста сборки (PEP 518/621)",
      "только Poetry файл",
      "замена requirements без смысла",
      "runtime config app"
    ],
    "answer": 0,
    "explain": "Единая точка конфига пакета. Правильный ответ: «стандарт манифеста сборки (PEP 518/621)». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s42"
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
    "explain": "PEP 427. Правильный ответ: «бинарный/готовый дистрибутив пакета». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s43"
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
    "explain": "Limited API. Правильный ответ: «одно колесо на несколько версий CPython». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s44"
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
    "explain": "PyCapsule. Правильный ответ: «безопасно передаёт C указатели». Относится к внутренностям CPython и написанию C-расширений, не к обычному прикладному коду.",
    "group": "Нативные расширения",
    "id": "s45"
  },
  {
    "topic": "ctypes",
    "q": "Что означает «ctypes подходит для»?",
    "options": [
      "вызова C ABI из Python",
      "замены asyncio",
      "ORM",
      "templating"
    ],
    "answer": 0,
    "explain": "FFI без компиляции расширения. Правильный ответ: «вызова C ABI из Python».",
    "group": "Нативные расширения",
    "id": "s46"
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
    "explain": "Нативные модули. Правильный ответ: «обёртки C++/Rust для расширений».",
    "group": "Нативные расширения",
    "id": "s47"
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
    "explain": "Меньше shared state. Правильный ответ: «изоляция внутри процесса».",
    "group": "Нативные расширения",
    "id": "s48"
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
    "explain": "mypy/pyright helper. Правильный ответ: «в type checkers для отладки типов». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "s49"
  },
  {
    "topic": "typing",
    "q": "Что вернёт cast(T, x) в typing?",
    "options": [
      "говорит чекеру тип, runtime no-op",
      "конвертирует значение",
      "валидирует",
      "бросает"
    ],
    "answer": 0,
    "explain": "Только для статического анализа. Правильный ответ: «говорит чекеру тип, runtime no-op». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "s50"
  },
  {
    "topic": "runtime",
    "q": "Что вернёт __getattr__ на модуле (PEP 562)?",
    "options": [
      "ленивые атрибуты модуля",
      "запрещён",
      "только классы",
      "GIL hook"
    ],
    "answer": 0,
    "explain": "Module-level getattr. Правильный ответ: «ленивые атрибуты модуля».",
    "group": "Метаклассы и типы",
    "id": "s51"
  },
  {
    "topic": "lazy",
    "q": "Что вернёт import внутри функции плюсы?",
    "options": [
      "меньше циклов импорта / ленивый старт",
      "всегда быстрее",
      "обязателен pep8",
      "ломает typing всегда"
    ],
    "answer": 0,
    "explain": "Tradeoff читаемости. Правильный ответ: «меньше циклов импорта / ленивый старт».",
    "group": "Метаклассы и типы",
    "id": "s52"
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
    "explain": "Не ловите BaseException широко. Правильный ответ: «SystemExit/KeyboardInterrupt не от Exception».",
    "group": "Исключения и контекст",
    "id": "s53"
  },
  {
    "topic": "signals",
    "q": "Что означает «Обработка сигналов и потоки»?",
    "options": [
      "сигналы в главном потоке",
      "в любом потоке одинаково",
      "только asyncio",
      "только multiprocessing"
    ],
    "answer": 0,
    "explain": "Ограничение CPython. Правильный ответ: «сигналы в главном потоке».",
    "group": "Потоки, процессы, GIL",
    "id": "s54"
  },
  {
    "topic": "fork",
    "q": "Что означает «После fork в многопоточном процессе опасно»?",
    "options": [
      "состояние locks/threads",
      "только print",
      "int",
      "str intern"
    ],
    "answer": 0,
    "explain": "Только fork’нувший поток жив. Правильный ответ: «состояние locks/threads».",
    "group": "Потоки, процессы, GIL",
    "id": "s55"
  },
  {
    "topic": "security",
    "q": "Что такое yaml.load без SafeLoader в контексте Python?",
    "options": [
      "может выполнить код (устар. PyYAML)",
      "безопасен всегда",
      "только JSON",
      "не существует"
    ],
    "answer": 0,
    "explain": "safe_load / SafeLoader. Правильный ответ: «может выполнить код (устар. PyYAML)». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s56"
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
    "explain": "Передавайте list args. Правильный ответ: «injection через строку команды». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s57"
  },
  {
    "topic": "architecture",
    "q": "Что означает «Гексагональная архитектура акцентирует»?",
    "options": [
      "порты/адаптеры, ядро без инфры",
      "монолит UI",
      "GIL layers",
      "один большой модуль"
    ],
    "answer": 0,
    "explain": "Домен независим от фреймворка. Правильный ответ: «порты/адаптеры, ядро без инфры». Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s58"
  },
  {
    "topic": "architecture",
    "q": "Что означает «CQRS разделяет»?",
    "options": [
      "чтение и запись модели/запросов",
      "CPU и IO",
      "sync async",
      "тесты и прод"
    ],
    "answer": 0,
    "explain": "Command Query Responsibility Segregation. Правильный ответ: «чтение и запись модели/запросов». Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s59"
  },
  {
    "topic": "events",
    "q": "Что означает «Outbox pattern нужен для»?",
    "options": [
      "надёжной публикации событий с БД",
      "GUI",
      "сортировки",
      "GIL"
    ],
    "answer": 0,
    "explain": "Транзакционная отправка. Правильный ответ: «надёжной публикации событий с БД».",
    "group": "Данные и распределёнка",
    "id": "s60"
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
    "explain": "Устойчивость клиентов. Правильный ответ: «не долбить сервис синхронно».",
    "group": "Данные и распределёнка",
    "id": "s61"
  },
  {
    "topic": "idempotency keys",
    "q": "Что означает «Ключ идемпотентности в API»?",
    "options": [
      "предотвращает дубль эффекта",
      "шифрует body",
      "заменяет auth",
      "сжимает JSON"
    ],
    "answer": 0,
    "explain": "Повтор POST безопаснее. Правильный ответ: «предотвращает дубль эффекта».",
    "group": "Данные и распределёнка",
    "id": "s62"
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
    "explain": "Модель консистентности. Правильный ответ: «гарантия увидеть свои записи».",
    "group": "Данные и распределёнка",
    "id": "s63"
  },
  {
    "topic": "python",
    "q": "Что вернёт Почему list.pop(0) медленный?",
    "options": [
      "O(n) сдвиг элементов",
      "O(1) на деле",
      "GIL lock N раз",
      "hash rebuild"
    ],
    "answer": 0,
    "explain": "Для очереди — deque. Правильный ответ: «O(n) сдвиг элементов».",
    "group": "CPython и память",
    "id": "s64"
  },
  {
    "topic": "python",
    "q": "Что вернёт Почему dict быстрее list для поиска ключа?",
    "options": [
      "средний O(1) hash",
      "sorted binary всегда",
      "GIL",
      "intering only"
    ],
    "answer": 0,
    "explain": "Хеш-таблица. Правильный ответ: «средний O(1) hash».",
    "group": "CPython и память",
    "id": "s65"
  },
  {
    "topic": "interning",
    "q": "Что вернёт Пул малых int диапазон типично?",
    "options": [
      "-5..256 в CPython",
      "все int",
      "только 0,1",
      "нет пула"
    ],
    "answer": 0,
    "explain": "Деталь реализации. Правильный ответ: «-5..256 в CPython».",
    "group": "CPython и память",
    "id": "s66"
  },
  {
    "topic": "string",
    "q": "Что вернёт Почему str immutable важно для?",
    "options": [
      "безопасности ключей dict / шаринга",
      "скорости +=",
      "GIL",
      "UTF-16"
    ],
    "answer": 0,
    "explain": "Хешируемость и кэш. Правильный ответ: «безопасности ключей dict / шаринга».",
    "group": "CPython и память",
    "id": "s67"
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
    "explain": "Не копить бесконечные очереди. Правильный ответ: «ограничение скорости производителя».",
    "group": "Asyncio",
    "id": "s68"
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
    "explain": "Не смешивать модели. Правильный ответ: «для event loop vs для потоков».",
    "group": "Данные и распределёнка",
    "id": "s69"
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
    "explain": "Поиск контрпримеров. Правильный ответ: «генерирует входы по свойствам». Тестирование: unit, integration, property-based, нагрузочные сценарии.",
    "group": "Тесты и качество",
    "id": "s70"
  },
  {
    "topic": "testing",
    "q": "Что означает «Mutation testing проверяет»?",
    "options": [
      "качество тестов убийством мутантов кода",
      "скорость CI",
      "типы",
      "GIL"
    ],
    "answer": 0,
    "explain": "Сила тест-сьюта. Правильный ответ: «качество тестов убийством мутантов кода». Тестирование: unit, integration, property-based, нагрузочные сценарии.",
    "group": "Тесты и качество",
    "id": "s71"
  },
  {
    "topic": "ci",
    "q": "Что означает «Матрица версий Python в CI нужна чтобы»?",
    "options": [
      "ловить несовместимости 3.x",
      "ускорить один job",
      "заменить mypy",
      "убрать зависимости"
    ],
    "answer": 0,
    "explain": "3.10/3.11/3.12…. Правильный ответ: «ловить несовместимости 3.x».",
    "group": "Packaging и CI",
    "id": "s72"
  },
  {
    "topic": "api",
    "q": "Что означает «HATEOAS связан с»?",
    "options": [
      "REST гипермедиа",
      "SOAP only",
      "GIL",
      "CSV"
    ],
    "answer": 0,
    "explain": "Ссылки в ответах API. Правильный ответ: «REST гипермедиа».",
    "group": "Веб и API",
    "id": "s73"
  },
  {
    "topic": "rpc",
    "q": "Что означает «gRPC в Python часто через»?",
    "options": [
      "grpcio + protobuf",
      "только json.dumps",
      "ftp",
      "smtp"
    ],
    "answer": 0,
    "explain": "Контракты .proto. Правильный ответ: «grpcio + protobuf».",
    "group": "Веб и API",
    "id": "s74"
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
    "explain": "Бинарные протоколы. Правильный ответ: «нужна компактность/схема/скорость».",
    "group": "Данные и распределёнка",
    "id": "s75"
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
    "explain": "ORM классика. Правильный ответ: «много запросов вместо join/prefetch». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s76"
  },
  {
    "topic": "db",
    "q": "Что вернёт SELECT FOR UPDATE связан с?",
    "options": [
      "блокировкой строк транзакции",
      "readonly replica hint always",
      "кэшем Redis",
      "VACUUM"
    ],
    "answer": 0,
    "explain": "Пессимистичные блокировки. Правильный ответ: «блокировкой строк транзакции». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s77"
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
    "explain": "Мультиверсионность. Правильный ответ: «версионность строк для читателей». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s78"
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
    "explain": "Нужны lock/soft expire/singleflight. Правильный ответ: «массовый промах кэша одновременно». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s79"
  },
  {
    "topic": "distributed",
    "q": "Что вернёт Consensus (Raft/Paxos) нужен для?",
    "options": [
      "согласованного лидера/лога",
      "локального dict",
      "sort",
      "GIL cluster"
    ],
    "answer": 0,
    "explain": "Распределённые системы. Правильный ответ: «согласованного лидера/лога». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s80"
  },
  {
    "topic": "python",
    "q": "Что означает «Плюс __dict__ у экземпляра»?",
    "options": [
      "гибкость атрибутов",
      "всегда меньше памяти чем slots",
      "быстрее slots всегда",
      "обязателен"
    ],
    "answer": 0,
    "explain": "Tradeoff гибкость/память. Правильный ответ: «гибкость атрибутов».",
    "group": "CPython и память",
    "id": "s81"
  },
  {
    "topic": "python",
    "q": "Что означает «object.__hash__ по умолчанию основан на»?",
    "options": [
      "id (идентичности)",
      "всех полях",
      "str(obj)",
      "random"
    ],
    "answer": 0,
    "explain": "Пока не переопределён eq без hash. Правильный ответ: «id (идентичности)».",
    "group": "CPython и память",
    "id": "s82"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: Что делает LOAD_FAST в bytecode?",
    "options": [
      "загрузка локальной переменной",
      "global",
      "attr",
      "const int always"
    ],
    "answer": 0,
    "explain": "Быстрый доступ по индексу locals. Правильный ответ: «загрузка локальной переменной». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s83"
  },
  {
    "topic": "CPython",
    "q": "Выбери верный вариант: Почему локальные переменные быстрее глобальных?",
    "options": [
      "LOOKUP по индексу vs dict builtins/global",
      "GIL иначе работает",
      "кэш CPU магия языка",
      "интернирование имён"
    ],
    "answer": 0,
    "explain": "Оптимизация VM. Правильный ответ: «LOOKUP по индексу vs dict builtins/global». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s84"
  },
  {
    "topic": "async",
    "q": "Что такое Cancellation в asyncio Task в контексте Python?",
    "options": [
      "CancelledError в await-точке",
      "убивает OS thread",
      "игнорируется всегда",
      "только KeyboardInterrupt"
    ],
    "answer": 0,
    "explain": "Кооперативная отмена. Правильный ответ: «CancelledError в await-точке».",
    "group": "Asyncio",
    "id": "s85"
  },
  {
    "topic": "async",
    "q": "Что вернёт shield() защищает?",
    "options": [
      "awaitable от отмены снаружи",
      "от KeyboardInterrupt",
      "от GIL",
      "от MemoryError"
    ],
    "answer": 0,
    "explain": "asyncio.shield. Правильный ответ: «awaitable от отмены снаружи».",
    "group": "Asyncio",
    "id": "s86"
  },
  {
    "topic": "design",
    "q": "Что означает «Антикоррупционный слой»?",
    "options": [
      "изолирует внешнюю модель от домена",
      "логирует SQL",
      "кэширует",
      "сжимает JSON"
    ],
    "answer": 0,
    "explain": "DDD. Правильный ответ: «изолирует внешнюю модель от домена».",
    "group": "Архитектура и дизайн",
    "id": "s87"
  },
  {
    "topic": "observability",
    "q": "Что означает «OpenTelemetry закрывает»?",
    "options": [
      "traces/metrics/logs стандарт",
      "только APM vendor lock обязательно",
      "GIL metrics",
      "pip audit"
    ],
    "answer": 0,
    "explain": "Единый стандарт телеметрии. Правильный ответ: «traces/metrics/logs стандарт». Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s88"
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
    "explain": "PEP 654. Правильный ответ: «работа с несколькими исключениями сразу».",
    "group": "Исключения и контекст",
    "id": "s89"
  },
  {
    "topic": "typing",
    "q": "Что вернёт Self (3.11) в аннотациях?",
    "options": [
      "тип текущего класса",
      "Any",
      "object",
      "cls runtime"
    ],
    "answer": 0,
    "explain": "Удобно для fluent API. Правильный ответ: «тип текущего класса». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "s90"
  },
  {
    "topic": "perf",
    "q": "Что вернёт Инлайн кэш специализации байткода (3.11+)?",
    "options": [
      "ускоряет атрибуты/вызовы на горячих путях",
      "убирает GIL",
      "меняет синтаксис",
      "отключает GC"
    ],
    "answer": 0,
    "explain": "Adaptive interpreter. Правильный ответ: «ускоряет атрибуты/вызовы на горячих путях».",
    "group": "Stdlib и производительность",
    "id": "s91"
  },
  {
    "topic": "wasm",
    "q": "Что означает «CPython на WASM ограничивается»?",
    "options": [
      "sandbox / нет полного OS API",
      "скоростью равной native всегда",
      "отсутствием int",
      "запретом async"
    ],
    "answer": 0,
    "explain": "Pyodide и др. Правильный ответ: «sandbox / нет полного OS API».",
    "group": "Нативные расширения",
    "id": "s92"
  },
  {
    "topic": "CPython",
    "q": "Что вернёт dict использует открытую адресацию / compact table — зачем знание на собесе?",
    "options": [
      "объясняет память и локальность",
      "обязательно писать на C",
      "заменяет list",
      "убирает hash collisions магией"
    ],
    "answer": 0,
    "explain": "Понимание стоимости операций. Правильный ответ: «объясняет память и локальность». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s93"
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
    "explain": "Это шаблон исполнения. Правильный ответ: «значения heap объектов напрямую как runtime heap graph». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s94"
  },
  {
    "topic": "GIL",
    "q": "Выбери верный вариант: Почему numpy.dot больших массивов масштабируется лучше чистого Python цикла в threads?",
    "options": [
      "много работы в C без GIL",
      "GIL отключён в numpy глобально навсегда",
      "threads = processes",
      "float быстрее int"
    ],
    "answer": 0,
    "explain": "Native sections. Правильный ответ: «много работы в C без GIL». GIL (Global Interpreter Lock) ограничивает параллельное исполнение байткода в CPython.",
    "group": "Потоки, процессы, GIL",
    "id": "s95"
  },
  {
    "topic": "память",
    "q": "Что вернёт tracemalloc.start() влияет на?",
    "options": [
      "overhead + возможность снимков аллокаций",
      "только скорость сети",
      "удаление GIL",
      "pickle"
    ],
    "answer": 0,
    "explain": "Диагностика утечек. Правильный ответ: «overhead + возможность снимков аллокаций».",
    "group": "CPython и память",
    "id": "s96"
  },
  {
    "topic": "память",
    "q": "Что означает «object header минимум содержит»?",
    "options": [
      "refcount и указатель типа (CPython)",
      "только payload",
      "только GIL ticket",
      "JSON schema"
    ],
    "answer": 0,
    "explain": "PyObject_HEAD. Правильный ответ: «refcount и указатель типа (CPython)».",
    "group": "CPython и память",
    "id": "s97"
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
    "explain": "Adaptive interpreter. Правильный ответ: «ускоряют горячие пути».",
    "group": "CPython и память",
    "id": "s98"
  },
  {
    "topic": "дескрипторы",
    "q": "Что означает «Функции в классе становятся bound method через»?",
    "options": [
      "__get__ дескриптора функции",
      "__call__ класса",
      "GIL",
      "import hook"
    ],
    "answer": 0,
    "explain": "Non-data descriptor. Правильный ответ: «__get__ дескриптора функции». Дескрипторы управляют доступом к атрибутам через __get__ / __set__ / __delete__.",
    "group": "Метаклассы и типы",
    "id": "s99"
  },
  {
    "topic": "метаклассы",
    "q": "Что вернёт type(name, bases, dict) эквивалентен?",
    "options": [
      "динамическому созданию класса",
      "только eval",
      "dataclass",
      "Enum"
    ],
    "answer": 0,
    "explain": "Конструктор классов. Правильный ответ: «динамическому созданию класса». Метакласс создаёт класс так же, как класс создаёт экземпляр.",
    "group": "Метаклассы и типы",
    "id": "s100"
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
    "explain": "Кастомный namespace. Правильный ответ: «namespace mapping для тела класса». Метакласс создаёт класс так же, как класс создаёт экземпляр.",
    "group": "Метаклассы и типы",
    "id": "s101"
  },
  {
    "topic": "typing",
    "q": "Что вернёт TypeGuard / TypeIs нужны для?",
    "options": [
      "сужения типов в чекере",
      "runtime cast всегда",
      "GIL",
      "скорости"
    ],
    "answer": 0,
    "explain": "User-defined type guards. Правильный ответ: «сужения типов в чекере». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "s102"
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
    "explain": "PEP 681. Правильный ответ: «библиотекам-кодогенераторам полей для чекеров». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "s103"
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
    "explain": "Низкоуровневый perf. Правильный ответ: «контеншн кэш-линий CPU между ядрами».",
    "group": "Потоки, процессы, GIL",
    "id": "s104"
  },
  {
    "topic": "concurrency",
    "q": "Что вернёт Lock в asyncio не блокирует OS-thread, а?",
    "options": [
      "паркует корутину",
      "убивает loop",
      "берёт GIL навсегда",
      "spawn process"
    ],
    "answer": 0,
    "explain": "Кооперативность. Правильный ответ: «паркует корутину».",
    "group": "Потоки, процессы, GIL",
    "id": "s105"
  },
  {
    "topic": "asyncio",
    "q": "Что означает «Task cancellation должна быть»?",
    "options": [
      "корректно обрабатываться в finally",
      "проигнорирована всегда",
      "мгновенный kill OS",
      "только KeyboardInterrupt"
    ],
    "answer": 0,
    "explain": "Безопасная отмена. Правильный ответ: «корректно обрабатываться в finally». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "s106"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт anyio/trio знамениты?",
    "options": [
      "structured concurrency идеями",
      "удалением async",
      "GIL-free CPython",
      "ORM"
    ],
    "answer": 0,
    "explain": "Nurseries/task groups. Правильный ответ: «structured concurrency идеями». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "s107"
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
    "explain": "Bytes-like sharing. Правильный ответ: «общий буфер между процессами».",
    "group": "Потоки, процессы, GIL",
    "id": "s108"
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
    "explain": "__reduce__. Правильный ответ: «кастомную сериализацию».",
    "group": "Stdlib и производительность",
    "id": "s109"
  },
  {
    "topic": "security",
    "q": "Что означает «ast.literal_eval безопаснее eval потому что»?",
    "options": [
      "только литералы, не вызовы",
      "быстрее",
      "одинаково опасен",
      "запрещён"
    ],
    "answer": 0,
    "explain": "Ограниченный парсер. Правильный ответ: «только литералы, не вызовы». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s110"
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
    "explain": "Не доверяй шаблонам от пользователя. Правильный ответ: «RCE через {{ }}». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s111"
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
    "explain": "Современный build. Правильный ответ: «изолированная сборка через pyproject». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s112"
  },
  {
    "topic": "packaging",
    "q": "Что означает «manylinux wheel гарантирует»?",
    "options": [
      "ABI совместимость с широким Linux",
      "работу на Windows",
      "GIL-free",
      "мультиязычность"
    ],
    "answer": 0,
    "explain": "Аудит платформы. Правильный ответ: «ABI совместимость с широким Linux». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s113"
  },
  {
    "topic": "architecture",
    "q": "Что вернёт Anti-corruption layer переводит?",
    "options": [
      "внешнюю модель во внутренний язык домена",
      "JSON в XML only",
      "sync в async магией",
      "SQL в NoSQL auto"
    ],
    "answer": 0,
    "explain": "DDD boundary. Правильный ответ: «внешнюю модель во внутренний язык домена». Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s114"
  },
  {
    "topic": "architecture",
    "q": "Что означает «Saga pattern решает»?",
    "options": [
      "распределённые транзакции через шаги/компенсации",
      "локальный GIL",
      "UI navigation",
      "sort"
    ],
    "answer": 0,
    "explain": "Вместо 2PC часто. Правильный ответ: «распределённые транзакции через шаги/компенсации». Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s115"
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
    "explain": "Изоляция транзакций. Правильный ответ: «разный уровень видимости аномалий». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s116"
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
    "explain": "Дорогой handshake. Правильный ответ: «переиспользовать соединения». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s117"
  },
  {
    "topic": "cache",
    "q": "Что вернёт Singleflight / request coalescing против?",
    "options": [
      "cache stampede",
      "LRU",
      "TTL",
      "CDN only"
    ],
    "answer": 0,
    "explain": "Один промах — один запрос. Правильный ответ: «cache stampede». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s118"
  },
  {
    "topic": "distributed",
    "q": "Что вернёт Exactly-once на практике часто?",
    "options": [
      "at-least-once + идемпотентность",
      "гарантия брокера без дизайна",
      "только UDP",
      "GIL cluster"
    ],
    "answer": 0,
    "explain": "Реалистичная модель. Правильный ответ: «at-least-once + идемпотентность». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s119"
  },
  {
    "topic": "performance",
    "q": "Что означает «Инлайнинг мелких функций в чистом Python»?",
    "options": [
      "ограничен интерпретатором; профилируй",
      "как в C всегда",
      "запрещён",
      "делает GIL"
    ],
    "answer": 0,
    "explain": "Другая модель затрат. Правильный ответ: «ограничен интерпретатором; профилируй». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s120"
  },
  {
    "topic": "performance",
    "q": "Чем помогает Когда __slots__ почти не?",
    "options": [
      "мало экземпляров / мало атрибутов",
      "миллионы объектов с 1 полем",
      "всегда помогает 100x",
      "только на str"
    ],
    "answer": 0,
    "explain": "Смотри профиль памяти. Правильный ответ: «мало экземпляров / мало атрибутов». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s121"
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
    "explain": "OpenTelemetry модель. Правильный ответ: «span — трейс операции; metric — агрегат». Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s122"
  },
  {
    "topic": "testing",
    "q": "Что означает «Contract tests проверяют»?",
    "options": [
      "совместимость API между сервисами",
      "только UI",
      "GIL",
      "pep8"
    ],
    "answer": 0,
    "explain": "Consumer-driven contracts. Правильный ответ: «совместимость API между сервисами». Тестирование: unit, integration, property-based, нагрузочные сценарии.",
    "group": "Тесты и качество",
    "id": "s123"
  },
  {
    "topic": "testing",
    "q": "Что означает «Flaky test чаще лечится»?",
    "options": [
      "убрать time/race/order dependency",
      "увеличить sleep 10s навсегда",
      "отключить CI",
      "random.seed каждый раз иначе"
    ],
    "answer": 0,
    "explain": "Детерминизм. Правильный ответ: «убрать time/race/order dependency». Тестирование: unit, integration, property-based, нагрузочные сценарии.",
    "group": "Тесты и качество",
    "id": "s124"
  },
  {
    "topic": "api",
    "q": "Что означает «Проблема chatty API»?",
    "options": [
      "слишком много мелких round-trips",
      "один huge payload всегда лучше без меры",
      "только GraphQL term",
      "GIL"
    ],
    "answer": 0,
    "explain": "Нужен batch/aggregate. Правильный ответ: «слишком много мелких round-trips».",
    "group": "Веб и API",
    "id": "s125"
  },
  {
    "topic": "serialization",
    "q": "Что вернёт Почему protobuf schema-first?",
    "options": [
      "явный контракт и совместимость полей",
      "человекочитаемее JSON always",
      "без версий",
      "медленнее всегда"
    ],
    "answer": 0,
    "explain": "Эволюция API. Правильный ответ: «явный контракт и совместимость полей».",
    "group": "Данные и распределёнка",
    "id": "s126"
  },
  {
    "topic": "python",
    "q": "Что вернёт Почему str+= в цикле может быть ок в CPython иногда, но стиль — join?",
    "options": [
      "квадратичный риск / читаемость / портабельность",
      "join медленнее всегда",
      "+= запрещён",
      "GIL"
    ],
    "answer": 0,
    "explain": "Пиши join для надёжности. Правильный ответ: «квадратичный риск / читаемость / портабельность».",
    "group": "CPython и память",
    "id": "s127"
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
    "explain": "Деталь CPython. Правильный ответ: «идентификаторы часто interned».",
    "group": "CPython и память",
    "id": "s128"
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
    "explain": "Structured exceptions. Правильный ответ: «кроме* распаковывает группу по типам».",
    "group": "Исключения и контекст",
    "id": "s129"
  },
  {
    "topic": "design",
    "q": "Что такое Law of Demeter в Python в контексте Python?",
    "options": [
      "меньше obj.a.b.c цепочек",
      "запрет import",
      "один модуль на проект",
      "GIL law"
    ],
    "answer": 0,
    "explain": "Слабая связанность. Правильный ответ: «меньше obj.a.b.c цепочек».",
    "group": "Архитектура и дизайн",
    "id": "s130"
  },
  {
    "topic": "design",
    "q": "Что означает «Hexagonal: adapters зависят от»?",
    "options": [
      "портов ядра, не наоборот",
      "фреймворка в домене",
      "GIL",
      "БД схемы в UI"
    ],
    "answer": 0,
    "explain": "Инверсия зависимостей. Правильный ответ: «портов ядра, не наоборот».",
    "group": "Архитектура и дизайн",
    "id": "s131"
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
    "explain": "Пасхалка с афоризмами. Правильный ответ: «Zen of Python».",
    "group": "Архитектура и дизайн",
    "id": "s132"
  },
  {
    "topic": "C-API",
    "q": "Что такое PyErr_Occurred проверяет в C-API CPython?",
    "options": [
      "установлено ли исключение",
      "refcount",
      "GIL held?",
      "hash"
    ],
    "answer": 0,
    "explain": "C-API error protocol. Правильный ответ: «установлено ли исключение». Относится к внутренностям CPython и написанию C-расширений, не к обычному прикладному коду.",
    "group": "Нативные расширения",
    "id": "s133"
  },
  {
    "topic": "ctypes",
    "q": "Что вернёт restype/argtypes важны чтобы?",
    "options": [
      "правильно маршалить C типы",
      "ускорить Python loop 100x",
      "убрать GC",
      "async"
    ],
    "answer": 0,
    "explain": "Без них легко UB. Правильный ответ: «правильно маршалить C типы».",
    "group": "Нативные расширения",
    "id": "s134"
  },
  {
    "topic": "subinterpreters",
    "q": "Выбери верный вариант: Зачем изоляция subinterpreters?",
    "options": [
      "меньше shared mutable state в процессе",
      "замена Docker",
      "удаление async",
      "быстрее JSON"
    ],
    "answer": 0,
    "explain": "Параллелизм без полного multiprocess. Правильный ответ: «меньше shared mutable state в процессе».",
    "group": "Нативные расширения",
    "id": "s135"
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
    "explain": "Безопасный fork. Правильный ответ: «сбрасывать locks/состояние вокруг fork».",
    "group": "Потоки, процессы, GIL",
    "id": "s136"
  },
  {
    "topic": "signals",
    "q": "Что означает «signal.set_wakeup_fd связан с»?",
    "options": [
      "пробуждением loop от сигнала",
      "файловым GC",
      "HTTP/2",
      "typing"
    ],
    "answer": 0,
    "explain": "Интеграция с asyncio/selectors. Правильный ответ: «пробуждением loop от сигнала».",
    "group": "Потоки, процессы, GIL",
    "id": "s137"
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
    "explain": "Явность vs магия. Правильный ответ: «неочевидные ImportError/стоимость».",
    "group": "Метаклассы и типы",
    "id": "s138"
  },
  {
    "topic": "patterns",
    "q": "Что означает «Registry pattern часто на»?",
    "options": [
      "dict + декоратор регистрации",
      "только metaclass обязателен",
      "GIL registry",
      "XML"
    ],
    "answer": 0,
    "explain": "Плагины/handlers. Правильный ответ: «dict + декоратор регистрации».",
    "group": "Архитектура и дизайн",
    "id": "s139"
  },
  {
    "topic": "patterns",
    "q": "Что такое Null Object pattern в контексте Python?",
    "options": [
      "объект с no-op поведением вместо None",
      "NoneType subclass обязателен",
      "Optional ban",
      "mock only"
    ],
    "answer": 0,
    "explain": "Меньше ветвлений. Правильный ответ: «объект с no-op поведением вместо None».",
    "group": "Архитектура и дизайн",
    "id": "s140"
  },
  {
    "topic": "ci",
    "q": "Что вернёт pip-audit / safety в CI ловят?",
    "options": [
      "известные CVE зависимостей",
      "pep8",
      "GIL bugs",
      "flaky tests"
    ],
    "answer": 0,
    "explain": "Supply-chain hygiene. Правильный ответ: «известные CVE зависимостей».",
    "group": "Packaging и CI",
    "id": "s141"
  },
  {
    "topic": "wasm",
    "q": "Что вернёт Ограничение сокетов/файлов в браузерном Pyodide?",
    "options": [
      "sandbox браузера",
      "нет int",
      "нет list",
      "нет функций"
    ],
    "answer": 0,
    "explain": "Другая среда исполнения. Правильный ответ: «sandbox браузера».",
    "group": "Нативные расширения",
    "id": "s142"
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
    "explain": "Переменный размер. Правильный ответ: «ob_size». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s143"
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
    "explain": "Type object fields. Правильный ответ: «атрибуты/методы типа». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s144"
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
    "explain": "Дедуп. Правильный ответ: «внутренней таблице». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s145"
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
    "explain": "Объектный аллокатор. Правильный ответ: «пулы мелких аллокаций». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s146"
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
    "explain": "Ускорение вызовов. Правильный ответ: «дешевле/иная модель кадров». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s147"
  },
  {
    "topic": "байткод",
    "q": "Что означает «EXTENDED_ARG нужен для»?",
    "options": [
      "больших аргументов инструкции",
      "async",
      "import",
      "GIL"
    ],
    "answer": 0,
    "explain": "Префикс opcode. Правильный ответ: «больших аргументов инструкции».",
    "group": "CPython и память",
    "id": "s148"
  },
  {
    "topic": "байткод",
    "q": "Что означает «MAKE_FUNCTION использует»?",
    "options": [
      "code object (+defaults/annotations/… )",
      "только str source",
      "AST",
      "GIL"
    ],
    "answer": 0,
    "explain": "Создание функции. Правильный ответ: «code object (+defaults/annotations/… )».",
    "group": "CPython и память",
    "id": "s149"
  },
  {
    "topic": "байткод",
    "q": "Что означает «LOAD_GLOBAL с кэшем»?",
    "options": [
      "специализация 3.11+",
      "всегда полный dict scan без кэша в новых",
      "importlib",
      "typing"
    ],
    "answer": 0,
    "explain": "Adaptive. Правильный ответ: «специализация 3.11+».",
    "group": "CPython и память",
    "id": "s150"
  },
  {
    "topic": "GIL",
    "q": "Что означает «eval breaker проверяет»?",
    "options": [
      "сигналы/переключения между байткодами",
      "только GC",
      "только I/O callbacks без сигнала",
      "pip"
    ],
    "answer": 0,
    "explain": "Кооперативные точки. Правильный ответ: «сигналы/переключения между байткодами». GIL (Global Interpreter Lock) ограничивает параллельное исполнение байткода в CPython.",
    "group": "Потоки, процессы, GIL",
    "id": "s151"
  },
  {
    "topic": "GIL",
    "q": "Что вернёт Отпускание GIL в blocking I/O?",
    "options": [
      "позволяет другим потокам идти",
      "убивает refcount",
      "отключает GC forever",
      "free-threads only"
    ],
    "answer": 0,
    "explain": "I/O bound. Правильный ответ: «позволяет другим потокам идти». GIL (Global Interpreter Lock) ограничивает параллельное исполнение байткода в CPython.",
    "group": "Потоки, процессы, GIL",
    "id": "s152"
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
    "explain": "512/… исторические детали. Правильный ответ: «мелкие через pymalloc».",
    "group": "CPython и память",
    "id": "s153"
  },
  {
    "topic": "память",
    "q": "Что означает «cyclic GC поколения»?",
    "options": [
      "young/old коллекции",
      "только refcount",
      "только RSS OS",
      "swap"
    ],
    "answer": 0,
    "explain": "gc generations. Правильный ответ: «young/old коллекции».",
    "group": "CPython и память",
    "id": "s154"
  },
  {
    "topic": "память",
    "q": "Что такое gc.get_stats в контексте Python?",
    "options": [
      "статистика сборов",
      "tracemalloc",
      "perf asm",
      "types"
    ],
    "answer": 0,
    "explain": "Интроспекция GC. Правильный ответ: «статистика сборов».",
    "group": "CPython и память",
    "id": "s155"
  },
  {
    "topic": "import",
    "q": "Что такое spec.loader.exec_module в контексте Python?",
    "options": [
      "исполняет модуль",
      "находит файл only",
      "pip install",
      "compileall"
    ],
    "answer": 0,
    "explain": "Жизненный цикл import. Правильный ответ: «исполняет модуль».",
    "group": "Stdlib и производительность",
    "id": "s156"
  },
  {
    "topic": "import",
    "q": "Что такое cached .pyc invalidation в контексте Python?",
    "options": [
      "hash/timestamp политики",
      "никогда",
      "только size",
      "git"
    ],
    "answer": 0,
    "explain": "PEP 552 и др. Правильный ответ: «hash/timestamp политики».",
    "group": "Stdlib и производительность",
    "id": "s157"
  },
  {
    "topic": "дескрипторы",
    "q": "Что вернёт data descriptor vs instance dict?",
    "options": [
      "data descriptor побеждает",
      "instance всегда",
      "random",
      "slots ban"
    ],
    "answer": 0,
    "explain": "Attribute lookup. Правильный ответ: «data descriptor побеждает». Дескрипторы управляют доступом к атрибутам через __get__ / __set__ / __delete__.",
    "group": "Метаклассы и типы",
    "id": "s158"
  },
  {
    "topic": "дескрипторы",
    "q": "Что вернёт methods — non-data descriptors, поэтому?",
    "options": [
      "instance attr может затенить функцию",
      "нельзя затенить",
      "всегда bound",
      "GIL"
    ],
    "answer": 0,
    "explain": "obj.f = 1 скроет method. Правильный ответ: «instance attr может затенить функцию». Дескрипторы управляют доступом к атрибутам через __get__ / __set__ / __delete__.",
    "group": "Метаклассы и типы",
    "id": "s159"
  },
  {
    "topic": "метаклассы",
    "q": "Что означает «__new__ метакласса создаёт»?",
    "options": [
      "объект класса",
      "instance",
      "module",
      "frame"
    ],
    "answer": 0,
    "explain": "type.__new__ цепочка. Правильный ответ: «объект класса». Метакласс создаёт класс так же, как класс создаёт экземпляр.",
    "group": "Метаклассы и типы",
    "id": "s160"
  },
  {
    "topic": "метаклассы",
    "q": "Что означает «冲突 метаклассов баз»?",
    "options": [
      "нужен согласованный metaclass",
      "берётся random",
      "запрет MI",
      "ABC auto"
    ],
    "answer": 0,
    "explain": "Most derived metaclass. Правильный ответ: «нужен согласованный metaclass». Метакласс создаёт класс так же, как класс создаёт экземпляр.",
    "group": "Метаклассы и типы",
    "id": "s161"
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
    "explain": "PEP 487 предпочтение. Правильный ответ: «проще для хуков подклассов». Метакласс создаёт класс так же, как класс создаёт экземпляр.",
    "group": "Метаклассы и типы",
    "id": "s162"
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
    "explain": "Новый синтаксис generics. Правильный ответ: «синтаксис class A[T]: / def f[T]». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "s163"
  },
  {
    "topic": "typing",
    "q": "Что вернёт TypeForm / новые формы?",
    "options": [
      "эволюция typing API",
      "удаление annotations",
      "JSON schema stdlib",
      "slots"
    ],
    "answer": 0,
    "explain": "Следи за PEP. Правильный ответ: «эволюция typing API». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "s164"
  },
  {
    "topic": "typing",
    "q": "Что вернёт dataclass_transform для Pydantic/attrs?",
    "options": [
      "чтобы checker понимал поля",
      "runtime validation замена",
      "SQL",
      "async"
    ],
    "answer": 0,
    "explain": "PEP 681. Правильный ответ: «чтобы checker понимал поля». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "s165"
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
    "explain": "Модель памяти осторожно. Правильный ответ: «не как в C; полагайся на queue/Lock семантику».",
    "group": "Потоки, процессы, GIL",
    "id": "s166"
  },
  {
    "topic": "concurrency",
    "q": "Что означает «atomic словари»?",
    "options": [
      "отдельные операции под GIL, но не составные транзакции",
      "полная ACID",
      "lock-free guarantee для check-then-act",
      "process safe"
    ],
    "answer": 0,
    "explain": "i+=1 на shared не безопасен логически без lock. Правильный ответ: «отдельные операции под GIL, но не составные транзакции».",
    "group": "Потоки, процессы, GIL",
    "id": "s167"
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
    "explain": "asyncio детали соединений. Правильный ответ: «связность IPv6/IPv4». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "s168"
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
    "explain": "Политика loop. Правильный ответ: «разные IOCP/select модели». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "s169"
  },
  {
    "topic": "asyncio",
    "q": "Что означает «contextvars копируются в Tasks»?",
    "options": [
      "да, контекст задачи",
      "нет никогда",
      "только threading local",
      "process"
    ],
    "answer": 0,
    "explain": "request id в async. Правильный ответ: «да, контекст задачи». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "s170"
  },
  {
    "topic": "multiprocessing",
    "q": "Что такое resource_tracker в контексте Python?",
    "options": [
      "следит за shared ресурсами spawn",
      "GC",
      "pip",
      "typing"
    ],
    "answer": 0,
    "explain": "Утечки semaphore/shm. Правильный ответ: «следит за shared ресурсами spawn».",
    "group": "Потоки, процессы, GIL",
    "id": "s171"
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
    "explain": "Только forking thread жив. Правильный ответ: «опасно (locks)».",
    "group": "Потоки, процессы, GIL",
    "id": "s172"
  },
  {
    "topic": "pickle",
    "q": "Что такое reduce_ex protocol в контексте Python?",
    "options": [
      "версия протокола сериализации",
      "AES",
      "zlib only",
      "json"
    ],
    "answer": 0,
    "explain": "__reduce_ex__. Правильный ответ: «версия протокола сериализации».",
    "group": "Stdlib и производительность",
    "id": "s173"
  },
  {
    "topic": "pickle",
    "q": "Что такое persistent_id в контексте Python?",
    "options": [
      "внешние ссылки в pickle",
      "UUID primary key ORM auto",
      "HTTP",
      "path"
    ],
    "answer": 0,
    "explain": "Кастомный Pickler. Правильный ответ: «внешние ссылки в pickle».",
    "group": "Stdlib и производительность",
    "id": "s174"
  },
  {
    "topic": "security",
    "q": "Что означает «eval на пользовательском вводе»?",
    "options": [
      "RCE риск",
      "безопасен с ast",
      "только SyntaxError",
      "sandbox stdlib guaranteed"
    ],
    "answer": 0,
    "explain": "Никогда. Правильный ответ: «RCE риск». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s175"
  },
  {
    "topic": "security",
    "q": "Что означает «xml.etree без безопасных настроек»?",
    "options": [
      "XXE/entity риски на некоторых парсерах/истории",
      "всегда safe",
      "только JSON",
      "YAML"
    ],
    "answer": 0,
    "explain": "defusedxml и т.п. Правильный ответ: «XXE/entity риски на некоторых парсерах/истории». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s176"
  },
  {
    "topic": "security",
    "q": "Что вернёт timing attack на == паролей?",
    "options": [
      "используй compare_digest",
      "== достаточно",
      "hash() ok",
      "id"
    ],
    "answer": 0,
    "explain": "Постоянное время. Правильный ответ: «используй compare_digest». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s177"
  },
  {
    "topic": "security",
    "q": "Что такое dependency confusion в контексте Python?",
    "options": [
      "подмена пакета именем из публичного индекса",
      "GIL bug",
      "PEP8",
      "typo squatting only DNS"
    ],
    "answer": 0,
    "explain": "Пины/индексы/scopes. Правильный ответ: «подмена пакета именем из публичного индекса». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s178"
  },
  {
    "topic": "packaging",
    "q": "Что такое editable install PEP 660 в контексте Python?",
    "options": [
      "современный editable",
      "только egg links forever",
      "conda only",
      "poetry exclusive"
    ],
    "answer": 0,
    "explain": "pyproject editable. Правильный ответ: «современный editable». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s179"
  },
  {
    "topic": "packaging",
    "q": "Что такое abi3 wheel в контексте Python?",
    "options": [
      "limited API multi-version",
      "один точный patch CPython only always",
      "pure python",
      "win only"
    ],
    "answer": 0,
    "explain": "Stable ABI. Правильный ответ: «limited API multi-version». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s180"
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
    "explain": "Аудит платформы. Правильный ответ: «разные glibc базы совместимости». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s181"
  },
  {
    "topic": "architecture",
    "q": "Что вернёт ports & adapters тестируют?",
    "options": [
      "домен без инфры",
      "только UI",
      "только DB",
      "GIL"
    ],
    "answer": 0,
    "explain": "Гексагон. Правильный ответ: «домен без инфры». Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s182"
  },
  {
    "topic": "architecture",
    "q": "Что означает «CQRS не обязан Event Sourcing»?",
    "options": [
      "да, можно раздельно",
      "нет, всегда вместе",
      "запрещены оба",
      "только Mongo"
    ],
    "answer": 0,
    "explain": "Частая путаница. Правильный ответ: «да, можно раздельно». Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s183"
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
    "explain": "Transactional messaging. Правильный ответ: «надёжная доставка событий». Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s184"
  },
  {
    "topic": "design",
    "q": "Что такое Tell, Don't Ask в контексте Python?",
    "options": [
      "меньше вытягивания состояния наружу",
      "больше геттеров везде",
      "анемичная модель идеал always",
      "GIL"
    ],
    "answer": 0,
    "explain": "ООП стиль. Правильный ответ: «меньше вытягивания состояния наружу».",
    "group": "Архитектура и дизайн",
    "id": "s185"
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
    "explain": "Гигиена флагов. Правильный ответ: «мертвый код/комбинаторный взрыв».",
    "group": "Архитектура и дизайн",
    "id": "s186"
  },
  {
    "topic": "patterns",
    "q": "Что такое Unit of Work в контексте Python?",
    "options": [
      "транзакционная граница изменений",
      "один SQL always",
      "singleton DB",
      "pool"
    ],
    "answer": 0,
    "explain": "ORM sessions. Правильный ответ: «транзакционная граница изменений».",
    "group": "Архитектура и дизайн",
    "id": "s187"
  },
  {
    "topic": "patterns",
    "q": "Что такое Specification pattern в контексте Python?",
    "options": [
      "композиция бизнес-правил",
      "regex only",
      "JSON schema only",
      "ABC ban"
    ],
    "answer": 0,
    "explain": "Доменные предикаты. Правильный ответ: «композиция бизнес-правил».",
    "group": "Архитектура и дизайн",
    "id": "s188"
  },
  {
    "topic": "db",
    "q": "Что означает «optimistic locking через version»?",
    "options": [
      "конфликт при параллельной записи",
      "SELECT FOR UPDATE always",
      "без версии",
      "только serializable"
    ],
    "answer": 0,
    "explain": "version column. Правильный ответ: «конфликт при параллельной записи». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s189"
  },
  {
    "topic": "db",
    "q": "Что такое pessimistic lock в контексте Python?",
    "options": [
      "блокировка на время работы",
      "только retry",
      "eventual",
      "cache"
    ],
    "answer": 0,
    "explain": "FOR UPDATE. Правильный ответ: «блокировка на время работы». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s190"
  },
  {
    "topic": "db",
    "q": "Что такое read replica lag в контексте Python?",
    "options": [
      "устаревшие чтения",
      "strong always",
      "нет лагов у async",
      "GIL"
    ],
    "answer": 0,
    "explain": "Eventual consistency. Правильный ответ: «устаревшие чтения». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s191"
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
    "explain": "Масштаб данных. Правильный ответ: «часто внутри БД vs across nodes». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s192"
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
    "explain": "Политики записи. Правильный ответ: «синхронная запись в кэш+стор vs отложенная». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s193"
  },
  {
    "topic": "cache",
    "q": "Что такое TTL jitter в контексте Python?",
    "options": [
      "размазывает истечения",
      "увеличивает stampede",
      "отключает LRU",
      "шифрует"
    ],
    "answer": 0,
    "explain": "Анти-стампид. Правильный ответ: «размазывает истечения». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s194"
  },
  {
    "topic": "distributed",
    "q": "Что означает «CAP: при partition выбирают»?",
    "options": [
      "C или A (упрощённо)",
      "все три всегда",
      "только P off",
      "GIL"
    ],
    "answer": 0,
    "explain": "Сетевые разделы. Правильный ответ: «C или A (упрощённо)». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s195"
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
    "explain": "Распределённые процессы. Правильный ответ: «события между сервисами vs центральный координатор». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s196"
  },
  {
    "topic": "distributed",
    "q": "Что такое poison message в контексте Python?",
    "options": [
      "сообщение, которое всегда валит consumer",
      "TTL",
      "heartbeat",
      "leader"
    ],
    "answer": 0,
    "explain": "DLQ паттерн. Правильный ответ: «сообщение, которое всегда валит consumer». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s197"
  },
  {
    "topic": "performance",
    "q": "Что вернёт perf/flamegraph для?",
    "options": [
      "CPU профилей натив/питон с инструментами",
      "только pep8",
      "только coverage",
      "YAML"
    ],
    "answer": 0,
    "explain": "Горячие стеки. Правильный ответ: «CPU профилей натив/питон с инструментами». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s198"
  },
  {
    "topic": "performance",
    "q": "Что такое allocation sampling в контексте Python?",
    "options": [
      "профиль памяти",
      "CPU only",
      "network",
      "disk SMART"
    ],
    "answer": 0,
    "explain": "memray/tracemalloc. Правильный ответ: «профиль памяти». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s199"
  },
  {
    "topic": "performance",
    "q": "Что означает «false sharing лечится»?",
    "options": [
      "выравниванием/паддингом данных",
      "GIL off",
      "больше threads всегда",
      "async"
    ],
    "answer": 0,
    "explain": "Кэш-линии. Правильный ответ: «выравниванием/паддингом данных». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s200"
  },
  {
    "topic": "observability",
    "q": "Что означает «exemplars связывают»?",
    "options": [
      "метрики с трейсами",
      "логи с pep8",
      "CPU с GIL bit",
      "SQL с ORM name only"
    ],
    "answer": 0,
    "explain": "OpenTelemetry. Правильный ответ: «метрики с трейсами». Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s201"
  },
  {
    "topic": "observability",
    "q": "Что означает «cardinality взрыв labels»?",
    "options": [
      "дорогие метрики",
      "лучше always more labels",
      "не влияет",
      "только logs"
    ],
    "answer": 0,
    "explain": "Осторожно user_id в labels. Правильный ответ: «дорогие метрики». Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s202"
  },
  {
    "topic": "testing",
    "q": "Что такое testpyramid в контексте Python?",
    "options": [
      "больше unit, меньше e2e",
      "только e2e",
      "только manual",
      "только mutation"
    ],
    "answer": 0,
    "explain": "Баланс стоимости. Правильный ответ: «больше unit, меньше e2e». Тестирование: unit, integration, property-based, нагрузочные сценарии.",
    "group": "Тесты и качество",
    "id": "s203"
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
    "explain": "Микросервисы. Правильный ответ: «потребитель задаёт ожидания API». Тестирование: unit, integration, property-based, нагрузочные сценарии.",
    "group": "Тесты и качество",
    "id": "s204"
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
    "explain": "Лента/фид. Правильный ответ: «cursor стабильнее при вставках».",
    "group": "Веб и API",
    "id": "s205"
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
    "explain": "RFC 7807. Правильный ответ: «стандарт ошибок API».",
    "group": "Веб и API",
    "id": "s206"
  },
  {
    "topic": "rpc",
    "q": "Что такое idempotent gRPC retry в контексте Python?",
    "options": [
      "нужны ключи/политики",
      "всегда safe",
      "запрещены",
      "только unary"
    ],
    "answer": 0,
    "explain": "Повторы сети. Правильный ответ: «нужны ключи/политики».",
    "group": "Веб и API",
    "id": "s207"
  },
  {
    "topic": "serialization",
    "q": "Что вернёт schema evolution backward/forward?",
    "options": [
      "совместимость старых/новых клиентов",
      "только JSON pretty",
      "pickle auto",
      "XML ban"
    ],
    "answer": 0,
    "explain": "Protobuf/Avro правила. Правильный ответ: «совместимость старых/новых клиентов».",
    "group": "Данные и распределёнка",
    "id": "s208"
  },
  {
    "topic": "python",
    "q": "Что вернёт почему list.pop(0) O(n)?",
    "options": [
      "сдвиг массива",
      "hash rebuild",
      "GIL N times documented",
      "malloc each"
    ],
    "answer": 0,
    "explain": "Используй deque. Правильный ответ: «сдвиг массива».",
    "group": "CPython и память",
    "id": "s209"
  },
  {
    "topic": "python",
    "q": "Что вернёт dict resize cost?",
    "options": [
      "амортизированный O(1) insert",
      "каждый insert O(n) строго",
      "never resizes",
      "tree rebalance"
    ],
    "answer": 0,
    "explain": "Амортизация. Правильный ответ: «амортизированный O(1) insert».",
    "group": "CPython и память",
    "id": "s210"
  },
  {
    "topic": "python",
    "q": "Что вернёт str immutable ⇒ slice?",
    "options": [
      "часто новая строка (с оговорками interning/пусто)",
      "view всегда",
      "bytes shared always",
      "mmap"
    ],
    "answer": 0,
    "explain": "Копии. Правильный ответ: «часто новая строка (с оговорками interning/пусто)».",
    "group": "CPython и память",
    "id": "s211"
  },
  {
    "topic": "async",
    "q": "Что означает «structured concurrency выигрыш»?",
    "options": [
      "время жизни задач привязано к scope",
      "больше detach fire-and-forget",
      "GIL remove",
      "threads ban"
    ],
    "answer": 0,
    "explain": "TaskGroup/nurseries. Правильный ответ: «время жизни задач привязано к scope».",
    "group": "Asyncio",
    "id": "s212"
  },
  {
    "topic": "async",
    "q": "Что такое cancellation points в контексте Python?",
    "options": [
      "await / yield точек",
      "любая строка Python",
      "только sleep",
      "OS preempt Python bytecode guaranteed cancel"
    ],
    "answer": 0,
    "explain": "Кооперативность. Правильный ответ: «await / yield точек».",
    "group": "Asyncio",
    "id": "s213"
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
    "explain": "Не расти без предела. Правильный ответ: «backpressure».",
    "group": "Данные и распределёнка",
    "id": "s214"
  },
  {
    "topic": "errors",
    "q": "Что такое ExceptionGroup.split в контексте Python?",
    "options": [
      "делить группу по типам",
      "flatten logs",
      "suppress",
      "raise bare"
    ],
    "answer": 0,
    "explain": "PEP 654 helpers. Правильный ответ: «делить группу по типам».",
    "group": "Исключения и контекст",
    "id": "s215"
  },
  {
    "topic": "errors",
    "q": "Что такое raise ExceptionGroup в контексте Python?",
    "options": [
      "несколько ошибок сразу",
      "только asyncio",
      "замена BaseException",
      "warnings"
    ],
    "answer": 0,
    "explain": "Параллельные сбои. Правильный ответ: «несколько ошибок сразу».",
    "group": "Исключения и контекст",
    "id": "s216"
  },
  {
    "topic": "design",
    "q": "Что означает «postel's law осторожно потому»?",
    "options": [
      "толерантный парсер копит хаос",
      "всегда плох",
      "всегда идеален",
      "только HTTP/1"
    ],
    "answer": 0,
    "explain": "Строгость на границах. Правильный ответ: «толерантный парсер копит хаос».",
    "group": "Архитектура и дизайн",
    "id": "s217"
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
    "explain": "DDD. Правильный ответ: «перевод внешней модели».",
    "group": "Архитектура и дизайн",
    "id": "s218"
  },
  {
    "topic": "Zen",
    "q": "Что такое Special cases aren't special enough в контексте Python?",
    "options": [
      "избегать слишком особых веток",
      "писать только special",
      "GIL poem",
      "PEP 8 quote"
    ],
    "answer": 0,
    "explain": "Zen. Правильный ответ: «избегать слишком особых веток».",
    "group": "Архитектура и дизайн",
    "id": "s219"
  },
  {
    "topic": "SOLID",
    "q": "Что вернёт Open/Closed в Python часто через?",
    "options": [
      "протоколы/стратегии/регистры",
      "правку ядра каждый раз",
      "globals",
      "eval"
    ],
    "answer": 0,
    "explain": "Расширение без ломания. Правильный ответ: «протоколы/стратегии/регистры».",
    "group": "Архитектура и дизайн",
    "id": "s220"
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
    "explain": "Владение ссылками. Правильный ответ: «ручной refcount». Относится к внутренностям CPython и написанию C-расширений, не к обычному прикладному коду.",
    "group": "Нативные расширения",
    "id": "s221"
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
    "explain": "Ошибки из C. Правильный ответ: «ставить исключение». Относится к внутренностям CPython и написанию C-расширений, не к обычному прикладному коду.",
    "group": "Нативные расширения",
    "id": "s222"
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
    "explain": "Документация ownership. Правильный ответ: «критично для корректности». Относится к внутренностям CPython и написанию C-расширений, не к обычному прикладному коду.",
    "group": "Нативные расширения",
    "id": "s223"
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
    "explain": "FFI нюансы. Правильный ответ: «разные способы передачи адреса».",
    "group": "Нативные расширения",
    "id": "s224"
  },
  {
    "topic": "ctypes",
    "q": "Что вернёт restype=None значит?",
    "options": [
      "void",
      "int",
      "auto py object",
      "error"
    ],
    "answer": 0,
    "explain": "Сигнатура C. Правильный ответ: «void».",
    "group": "Нативные расширения",
    "id": "s225"
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
    "explain": "Параллелизм native. Правильный ответ: «allow threads в Rust».",
    "group": "Нативные расширения",
    "id": "s226"
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
    "explain": "PEP 554+. Правильный ответ: «ограниченный обмен».",
    "group": "Нативные расширения",
    "id": "s227"
  },
  {
    "topic": "wasm",
    "q": "Что такое WASI для Python в контексте Python?",
    "options": [
      "системный интерфейс для WASM",
      "GIL wasm",
      "NumPy GPU",
      "JDK"
    ],
    "answer": 0,
    "explain": "Портируемость. Правильный ответ: «системный интерфейс для WASM».",
    "group": "Нативные расширения",
    "id": "s228"
  },
  {
    "topic": "runtime",
    "q": "Что вернёт sitecustomize/usercustomize?",
    "options": [
      "автоимпорт при старте",
      "pip config",
      "venv activate hook only",
      "pytest"
    ],
    "answer": 0,
    "explain": "Осторожно с сайд-эффектами. Правильный ответ: «автоимпорт при старте».",
    "group": "Метаклассы и типы",
    "id": "s229"
  },
  {
    "topic": "lazy",
    "q": "Что означает «module __getattr__ кэшируй если»?",
    "options": [
      "дорогой импорт/вычисление",
      "всегда без кэша быстрее",
      "запрещено кэшировать",
      "only typing"
    ],
    "answer": 0,
    "explain": "Повторные обращения. Правильный ответ: «дорогой импорт/вычисление».",
    "group": "Метаклассы и типы",
    "id": "s230"
  },
  {
    "topic": "signals",
    "q": "Что такое SIGINT → KeyboardInterrupt в в контексте Python?",
    "options": [
      "главном потоке",
      "любом потоке одинаково",
      "только asyncio",
      "только workers"
    ],
    "answer": 0,
    "explain": "Ограничение. Правильный ответ: «главном потоке».",
    "group": "Потоки, процессы, GIL",
    "id": "s231"
  },
  {
    "topic": "fork",
    "q": "Что означает «posix_spawn иногда предпочтительнее fork»?",
    "options": [
      "безопасность/скорость в ряде кейсов",
      "всегда хуже",
      "Windows only name",
      "GIL"
    ],
    "answer": 0,
    "explain": "Создание процессов. Правильный ответ: «безопасность/скорость в ряде кейсов».",
    "group": "Потоки, процессы, GIL",
    "id": "s232"
  },
  {
    "topic": "ci",
    "q": "Что такое reproducible builds в контексте Python?",
    "options": [
      "пины, hashes, lockfiles",
      "latest always",
      "без CI",
      "random seeds off only"
    ],
    "answer": 0,
    "explain": "Детерминизм поставки. Правильный ответ: «пины, hashes, lockfiles».",
    "group": "Packaging и CI",
    "id": "s233"
  },
  {
    "topic": "ci",
    "q": "Что такое SBOM в контексте Python?",
    "options": [
      "перечень компонентов поставки",
      "тест-план",
      "flamegraph",
      "OpenAPI"
    ],
    "answer": 0,
    "explain": "Supply chain. Правильный ответ: «перечень компонентов поставки».",
    "group": "Packaging и CI",
    "id": "s234"
  },
  {
    "topic": "packaging",
    "q": "Что такое PEP 621 project table в контексте Python?",
    "options": [
      "метаданные в pyproject",
      "runtime settings app",
      "mypy ini",
      "tox only"
    ],
    "answer": 0,
    "explain": "Стандартизация. Правильный ответ: «метаданные в pyproject». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s235"
  },
  {
    "topic": "observability",
    "q": "Что такое RED method в контексте Python?",
    "options": [
      "Rate Errors Duration",
      "CPU RAM Disk",
      "CRUD",
      "GIL RSS"
    ],
    "answer": 0,
    "explain": "Сервисные метрики. Правильный ответ: «Rate Errors Duration». Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s236"
  },
  {
    "topic": "observability",
    "q": "Что такое USE method в контексте Python?",
    "options": [
      "Utilization Saturation Errors",
      "для запросов only RED",
      "logs",
      "traces only"
    ],
    "answer": 0,
    "explain": "Ресурсы. Правильный ответ: «Utilization Saturation Errors». Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s237"
  },
  {
    "topic": "caching",
    "q": "Что такое request coalescing в контексте Python?",
    "options": [
      "один промах на ключ",
      "TTL=0",
      "LRU off",
      "write-only"
    ],
    "answer": 0,
    "explain": "Анти-стампид. Правильный ответ: «один промах на ключ».",
    "group": "Данные и распределёнка",
    "id": "s238"
  },
  {
    "topic": "consistency",
    "q": "Что такое linearizability в контексте Python?",
    "options": [
      "сильная real-time порядок операций",
      "eventual",
      "read-your-writes weaker always",
      "FIFO messages only"
    ],
    "answer": 0,
    "explain": "Модели. Правильный ответ: «сильная real-time порядок операций».",
    "group": "Данные и распределёнка",
    "id": "s239"
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
    "explain": "Не ретраить вечно. Правильный ответ: «общий лимит времени на ретраи».",
    "group": "Данные и распределёнка",
    "id": "s240"
  },
  {
    "topic": "events",
    "q": "Что такое CDC в контексте Python?",
    "options": [
      "захват изменений БД",
      "CDN",
      "CPU counter",
      "GC dump"
    ],
    "answer": 0,
    "explain": "Debezium и др. Правильный ответ: «захват изменений БД».",
    "group": "Данные и распределёнка",
    "id": "s241"
  },
  {
    "topic": "serialization",
    "q": "Что такое protobuf unknown fields в контексте Python?",
    "options": [
      "сохраняют forward compat",
      "всегда drop",
      "ломают wire",
      "JSON only"
    ],
    "answer": 0,
    "explain": "Эволюция схемы. Правильный ответ: «сохраняют forward compat».",
    "group": "Данные и распределёнка",
    "id": "s242"
  },
  {
    "topic": "api",
    "q": "Что такое rate limit token bucket в контексте Python?",
    "options": [
      "сглаживание нагрузки",
      "только hard max without refill",
      "circuit",
      "bulkhead"
    ],
    "answer": 0,
    "explain": "Алгоритм. Правильный ответ: «сглаживание нагрузки».",
    "group": "Веб и API",
    "id": "s243"
  },
  {
    "topic": "api",
    "q": "Что такое bulkhead в контексте Python?",
    "options": [
      "изоляция пулов ресурсов",
      "retry",
      "cache",
      "auth"
    ],
    "answer": 0,
    "explain": "Отказоустойчивость. Правильный ответ: «изоляция пулов ресурсов».",
    "group": "Веб и API",
    "id": "s244"
  },
  {
    "topic": "testing",
    "q": "Что такое chaos engineering в контексте Python?",
    "options": [
      "намеренные сбои в системе",
      "unit mocks only",
      "pep8",
      "types"
    ],
    "answer": 0,
    "explain": "Устойчивость прод-подобных сред. Правильный ответ: «намеренные сбои в системе». Тестирование: unit, integration, property-based, нагрузочные сценарии.",
    "group": "Тесты и качество",
    "id": "s245"
  },
  {
    "topic": "testing",
    "q": "Что такое differential fuzzing в контексте Python?",
    "options": [
      "сравнение реализаций на случайных входах",
      "coverage gap only",
      "UI",
      "load"
    ],
    "answer": 0,
    "explain": "Поиск расхождений. Правильный ответ: «сравнение реализаций на случайных входах». Тестирование: unit, integration, property-based, нагрузочные сценарии.",
    "group": "Тесты и качество",
    "id": "s246"
  },
  {
    "topic": "python",
    "q": "Что означает «почему hash randomization»?",
    "options": [
      "защита от collision DoS",
      "ускорение",
      "PEP8",
      "GIL"
    ],
    "answer": 0,
    "explain": "PYTHONHASHSEED. Правильный ответ: «защита от collision DoS».",
    "group": "CPython и память",
    "id": "s247"
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
    "explain": "Выбор представления. Правильный ответ: «память/__dict__».",
    "group": "CPython и память",
    "id": "s248"
  },
  {
    "topic": "async",
    "q": "Что такое backpressure в streams в контексте Python?",
    "options": [
      "пауза производителя",
      "безлимитный buffer ideal",
      "только TCP window ignore app",
      "GIL throttle"
    ],
    "answer": 0,
    "explain": "Не копить. Правильный ответ: «пауза производителя».",
    "group": "Asyncio",
    "id": "s249"
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
    "explain": "Aging/квоты. Правильный ответ: «starve низкий приоритет».",
    "group": "Данные и распределёнка",
    "id": "s250"
  },
  {
    "topic": "security",
    "q": "Что такое SSRF в контексте Python?",
    "options": [
      "сервер ходит на внутренние URL по воле клиента",
      "XSS",
      "SQLi",
      "CSRF"
    ],
    "answer": 0,
    "explain": "Фильтруй URL. Правильный ответ: «сервер ходит на внутренние URL по воле клиента». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s251"
  },
  {
    "topic": "security",
    "q": "Что такое path traversal в контексте Python?",
    "options": [
      "../ выход из директории",
      "XSS",
      "CRLF",
      "GIL"
    ],
    "answer": 0,
    "explain": "Нормализуй пути. Правильный ответ: «../ выход из директории». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s252"
  },
  {
    "topic": "architecture",
    "q": "Что такое strangler fig в контексте Python?",
    "options": [
      "постепенная замена легаси",
      "big bang rewrite only",
      "monorepo ban",
      "CQRS"
    ],
    "answer": 0,
    "explain": "Миграция систем. Правильный ответ: «постепенная замена легаси». Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s253"
  },
  {
    "topic": "architecture",
    "q": "Что такое BFF pattern в контексте Python?",
    "options": [
      "backend for frontend",
      "bus for files",
      "binary fast format",
      "bulkhead"
    ],
    "answer": 0,
    "explain": "Адаптация API под клиент. Правильный ответ: «backend for frontend». Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s254"
  },
  {
    "topic": "db",
    "q": "Что такое vacuum в PostgreSQL в контексте Python?",
    "options": [
      "очистка/видимость версий строк",
      "только backup",
      "только index rebuild always synonym",
      "replication slot"
    ],
    "answer": 0,
    "explain": "MVCC hygiene. Правильный ответ: «очистка/видимость версий строк». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s255"
  },
  {
    "topic": "db",
    "q": "Что такое connection leak в контексте Python?",
    "options": [
      "невозврат в пул",
      "slow query only",
      "missing index only",
      "ORM lazy"
    ],
    "answer": 0,
    "explain": "finally/context. Правильный ответ: «невозврат в пул». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s256"
  },
  {
    "topic": "cache",
    "q": "Что такое near cache в контексте Python?",
    "options": [
      "локальный слой + распределённый",
      "только CDN",
      "только DB buffer",
      "GPU"
    ],
    "answer": 0,
    "explain": "Иерархия кэшей. Правильный ответ: «локальный слой + распределённый». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s257"
  },
  {
    "topic": "distributed",
    "q": "Что такое vector clocks в контексте Python?",
    "options": [
      "частичный порядок событий",
      "NTP sync perfect",
      "Lamport = vector always",
      "GIS"
    ],
    "answer": 0,
    "explain": "Конфликты версий. Правильный ответ: «частичный порядок событий». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s258"
  },
  {
    "topic": "distributed",
    "q": "Что такое CRDT в контексте Python?",
    "options": [
      "слияние без координатора",
      "2PC",
      "saga",
      "mutex cluster"
    ],
    "answer": 0,
    "explain": "Conflict-free types. Правильный ответ: «слияние без координатора». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s259"
  },
  {
    "topic": "performance",
    "q": "Что означает «COW после fork»?",
    "options": [
      "страницы копируются при записи",
      "полное копирование сразу always",
      "shared forever writable without cost",
      "GIL pages"
    ],
    "answer": 0,
    "explain": "gc.freeze помогает. Правильный ответ: «страницы копируются при записи». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s260"
  },
  {
    "topic": "performance",
    "q": "Что такое specializing adaptive interpreter в контексте Python?",
    "options": [
      "ускоряет стабильные типы",
      "убирает need for types",
      "удаляет GC",
      "WASM"
    ],
    "answer": 0,
    "explain": "3.11+. Правильный ответ: «ускоряет стабильные типы». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s261"
  },
  {
    "topic": "observability",
    "q": "Что такое trace sampling в контексте Python?",
    "options": [
      "доля трейсов для стоимости",
      "все или ничего always better",
      "только errors без head sampling strategies",
      "logs"
    ],
    "answer": 0,
    "explain": "Head/tail sampling. Правильный ответ: «доля трейсов для стоимости». Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s262"
  },
  {
    "topic": "packaging",
    "q": "Что такое PEP 517 isolated build в контексте Python?",
    "options": [
      "сбор в чистом env",
      "reuse site-packages dirty always",
      "conda exclusive",
      "no build backend"
    ],
    "answer": 0,
    "explain": "Воспроизводимость. Правильный ответ: «сбор в чистом env». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s263"
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
    "explain": "PyCapsule. Правильный ответ: «тип-безопасная передача указателей». Относится к внутренностям CPython и написанию C-расширений, не к обычному прикладному коду.",
    "group": "Нативные расширения",
    "id": "s264"
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
    "explain": "Windows stdcall nuances. Правильный ответ: «calling convention различия».",
    "group": "Нативные расширения",
    "id": "s265"
  },
  {
    "topic": "метаклассы",
    "q": "Что такое types.new_class в контексте Python?",
    "options": [
      "высокоуровневое создание класса",
      "только eval",
      "NamedTuple",
      "Enum functional same exactly"
    ],
    "answer": 0,
    "explain": "С __prepare__ и т.д. Правильный ответ: «высокоуровневое создание класса». Метакласс создаёт класс так же, как класс создаёт экземпляр.",
    "group": "Метаклассы и типы",
    "id": "s266"
  },
  {
    "topic": "typing",
    "q": "Что такое Interop typing_extensions в контексте Python?",
    "options": [
      "бэкпорты фич typing",
      "runtime pydantic",
      "mypy plugin only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Для старых версий. Правильный ответ: «бэкпорты фич typing». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "s267"
  },
  {
    "topic": "concurrency",
    "q": "Что вернёт RCU-подобные идеи в Python редки; вместо?",
    "options": [
      "иммутабельные структуры + замена ссылки",
      "volatile",
      "GIL off assumed",
      "memcpy"
    ],
    "answer": 0,
    "explain": "Паттерны чтения. Правильный ответ: «иммутабельные структуры + замена ссылки».",
    "group": "Потоки, процессы, GIL",
    "id": "s268"
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
    "explain": "asyncio.timeout. Правильный ответ: «отмена по deadline scope». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "s269"
  },
  {
    "topic": "multiprocessing",
    "q": "Что означает «spawn заново импортирует»?",
    "options": [
      "main-like модуль осторожно",
      "только pickle builtins",
      "shared mem objects auto",
      "threads"
    ],
    "answer": 0,
    "explain": "Боковая исполняемость. Правильный ответ: «main-like модуль осторожно».",
    "group": "Потоки, процессы, GIL",
    "id": "s270"
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
    "explain": "protocol 5. Правильный ответ: «нулевое копирование крупных bytes».",
    "group": "Stdlib и производительность",
    "id": "s271"
  },
  {
    "topic": "security",
    "q": "Что такое jinja2 SandboxedEnvironment в контексте Python?",
    "options": [
      "ограничивает опасные конструкции",
      "полный RCE safe guarantee absolute",
      "заменяет CSP",
      "SQL"
    ],
    "answer": 0,
    "explain": "Не панацея. Правильный ответ: «ограничивает опасные конструкции». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s272"
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
    "explain": "XSS mitigation. Правильный ответ: «ограничение ресурсов в браузере». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s273"
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
    "explain": "Связанность сервисов. Правильный ответ: «событие несёт данные, меньше follow-up reads». Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s274"
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
    "explain": "Typed boundaries. Правильный ответ: «парсить в богатые типы на границе».",
    "group": "Архитектура и дизайн",
    "id": "s275"
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
    "explain": "Сглаживание пиков. Правильный ответ: «стратегии AWS-like backoff».",
    "group": "Архитектура и дизайн",
    "id": "s276"
  },
  {
    "topic": "db",
    "q": "Что такое materialized view в контексте Python?",
    "options": [
      "кэш запроса на диске/сервере",
      "обычный VIEW always same cost",
      "index only",
      "temp table session"
    ],
    "answer": 0,
    "explain": "Обновление/refresh. Правильный ответ: «кэш запроса на диске/сервере». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s277"
  },
  {
    "topic": "db",
    "q": "Что вернёт TOCTOU в файлах/БД?",
    "options": [
      "гонка проверка→использование",
      "только CPU",
      "только DNS",
      "GIL"
    ],
    "answer": 0,
    "explain": "Атомарные операции. Правильный ответ: «гонка проверка→использование». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s278"
  },
  {
    "topic": "cache",
    "q": "Что такое negative caching в контексте Python?",
    "options": [
      "кэш промахов/404",
      "только hit",
      "write-only",
      "LRU off"
    ],
    "answer": 0,
    "explain": "Защита от повторов miss. Правильный ответ: «кэш промахов/404». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s279"
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
    "explain": "Consensus. Правильный ответ: «большинство для решения». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s280"
  },
  {
    "topic": "distributed",
    "q": "Что такое fencing token в контексте Python?",
    "options": [
      "старый primary не пишет после failover",
      "JWT refresh",
      "ETag",
      "cookie"
    ],
    "answer": 0,
    "explain": "Split brain. Правильный ответ: «старый primary не пишет после failover». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s281"
  },
  {
    "topic": "performance",
    "q": "Что такое branch misprediction в C hot loops в контексте Python?",
    "options": [
      "важно для native расширений",
      "для Python bytecode тот же asm level всегда",
      "GIL predicts",
      "async"
    ],
    "answer": 0,
    "explain": "Низкий уровень. Правильный ответ: «важно для native расширений». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s282"
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
    "explain": "Совместимость бинарей. Правильный ответ: «идентификатор интерпретатора/ABI». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s283"
  },
  {
    "topic": "observability",
    "q": "Что такое log correlation id в контексте Python?",
    "options": [
      "сквозная связь запросов",
      "random каждый call без передачи",
      "только trace without logs",
      "CPU id"
    ],
    "answer": 0,
    "explain": "contextvars. Правильный ответ: «сквозная связь запросов». Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s284"
  },
  {
    "topic": "api",
    "q": "Что означает «HATEOAS спорность»?",
    "options": [
      "гипермедиа в REST на практике редко полная",
      "обязателен HTTP",
      "GraphQL feature",
      "gRPC"
    ],
    "answer": 0,
    "explain": "Реалистичный REST. Правильный ответ: «гипермедиа в REST на практике редко полная».",
    "group": "Веб и API",
    "id": "s285"
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
    "explain": "Трансляция. Правильный ответ: «свой набор, маппят на HTTP в gateway».",
    "group": "Веб и API",
    "id": "s286"
  },
  {
    "topic": "serialization",
    "q": "Что такое canonical JSON в контексте Python?",
    "options": [
      "стабильный байтовый вид для подписей",
      "pretty print",
      "pickle",
      "messagepack"
    ],
    "answer": 0,
    "explain": "Крипто/хэши документов. Правильный ответ: «стабильный байтовый вид для подписей».",
    "group": "Данные и распределёнка",
    "id": "s287"
  },
  {
    "topic": "python",
    "q": "Что вернёт почему не полагаться на dict order до 3.7 как на язык?",
    "options": [
      "стал guarantee с 3.7; раньше CPython detail",
      "никогда не был",
      "был с 2.7 language",
      "только OrderedDict language"
    ],
    "answer": 0,
    "explain": "История. Правильный ответ: «стал guarantee с 3.7; раньше CPython detail».",
    "group": "CPython и память",
    "id": "s288"
  },
  {
    "topic": "async",
    "q": "Что такое trio nursery cancel scope в контексте Python?",
    "options": [
      "эталон structured cancel",
      "fire and forget ideal",
      "GIL scope",
      "thread group"
    ],
    "answer": 0,
    "explain": "Влияние на asyncio TaskGroup. Правильный ответ: «эталон structured cancel».",
    "group": "Asyncio",
    "id": "s289"
  },
  {
    "topic": "errors",
    "q": "Что вернёт except* может матчить часть группы?",
    "options": [
      "остаток пропагируется",
      "глотает всё always",
      "syntax 3.8",
      "только BaseExceptionGroup drop"
    ],
    "answer": 0,
    "explain": "Частичная обработка. Правильный ответ: «остаток пропагируется».",
    "group": "Исключения и контекст",
    "id": "s290"
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
    "explain": "PEP 590. Правильный ответ: «быстрые вызовы». Относится к внутренностям CPython и написанию C-расширений, не к обычному прикладному коду.",
    "group": "Нативные расширения",
    "id": "s291"
  },
  {
    "topic": "ctypes",
    "q": "Что такое ERRCHECK в контексте Python?",
    "options": [
      "постпроверка C вызова",
      "prealloc",
      "GIL",
      "typing"
    ],
    "answer": 0,
    "explain": "Обёртки ошибок. Правильный ответ: «постпроверка C вызова».",
    "group": "Нативные расширения",
    "id": "s292"
  },
  {
    "topic": "метаклассы",
    "q": "Что означает «namespace в __prepare__ может быть»?",
    "options": [
      "OrderedDict/custom mapping",
      "только dict ban custom",
      "list",
      "set"
    ],
    "answer": 0,
    "explain": "Упорядоченные аннотации исторически. Правильный ответ: «OrderedDict/custom mapping». Метакласс создаёт класс так же, как класс создаёт экземпляр.",
    "group": "Метаклассы и типы",
    "id": "s293"
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
    "explain": "Семантика недостижимости. Правильный ответ: «сближаются; Never bottom». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "s294"
  },
  {
    "topic": "concurrency",
    "q": "Что вернёт lock-free queue в чистом Python?",
    "options": [
      "сложно/редко нужно; std queue+GIL",
      "легко и всегда быстрее",
      "stdlib lockfree",
      "asyncio Queue lockfree OS"
    ],
    "answer": 0,
    "explain": "Практичность. Правильный ответ: «сложно/редко нужно; std queue+GIL».",
    "group": "Потоки, процессы, GIL",
    "id": "s295"
  },
  {
    "topic": "asyncio",
    "q": "Что такое server start_serving в контексте Python?",
    "options": [
      "приём соединений",
      "client open",
      "DNS",
      "TLS ticket only"
    ],
    "answer": 0,
    "explain": "asyncio.Server. Правильный ответ: «приём соединений». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "s296"
  },
  {
    "topic": "multiprocessing",
    "q": "Что означает «Reducer замена для»?",
    "options": [
      "кастом pickle между процессами",
      "json",
      "YAML",
      "HTTP"
    ],
    "answer": 0,
    "explain": "ForkingPickler. Правильный ответ: «кастом pickle между процессами».",
    "group": "Потоки, процессы, GIL",
    "id": "s297"
  },
  {
    "topic": "security",
    "q": "Что такое HTTP header injection CRLF в контексте Python?",
    "options": [
      "внедрение заголовков/ответа",
      "XSS only",
      "SQLi",
      "SSRF only"
    ],
    "answer": 0,
    "explain": "Валидируй заголовки. Правильный ответ: «внедрение заголовков/ответа». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s298"
  },
  {
    "topic": "architecture",
    "q": "Что такое shared kernel в контексте Python?",
    "options": [
      "малое общее ядро между командами",
      "big monolith shared DB god",
      "BFF",
      "ACL"
    ],
    "answer": 0,
    "explain": "DDD boundaries. Правильный ответ: «малое общее ядро между командами». Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s299"
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
    "explain": "Планируй окна/алгоритмы. Правильный ответ: «блокировки/нагрузка при миграциях». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s300"
  },
  {
    "topic": "cache",
    "q": "Что такое thundering herd в контексте Python?",
    "options": [
      "масса клиентов бьёт origin",
      "один client",
      "DNS only",
      "GC"
    ],
    "answer": 0,
    "explain": "locks/singleflight. Правильный ответ: «масса клиентов бьёт origin». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s301"
  },
  {
    "topic": "distributed",
    "q": "Что такое gossip protocol в контексте Python?",
    "options": [
      "эпидемическое распространение состояния",
      "2PC",
      "Raft leader only term",
      "SMTP"
    ],
    "answer": 0,
    "explain": "Членство кластера. Правильный ответ: «эпидемическое распространение состояния». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s302"
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
    "explain": "Сборки CPython. Правильный ответ: «профильная оптимизация бинарника». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s303"
  },
  {
    "topic": "observability",
    "q": "Что такое OpenTelemetry context propagation в контексте Python?",
    "options": [
      "W3C traceparent и др.",
      "только cookies",
      "только IP",
      "GIL id"
    ],
    "answer": 0,
    "explain": "Сквозные трейсы. Правильный ответ: «W3C traceparent и др.». Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s304"
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
    "explain": "Чистота env. Правильный ответ: «утечка системных пакетов в изоляцию». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s305"
  },
  {
    "topic": "api",
    "q": "Что такое optimistic concurrency ETag в контексте Python?",
    "options": [
      "If-Match при обновлении",
      "only cache GET",
      "CORS",
      "JWT"
    ],
    "answer": 0,
    "explain": "Конфликты записей. Правильный ответ: «If-Match при обновлении».",
    "group": "Веб и API",
    "id": "s306"
  },
  {
    "topic": "testing",
    "q": "Что такое flaky quarantine в контексте Python?",
    "options": [
      "изоляция нестабильных тестов",
      "удаление assert",
      "sleep 30",
      "disable CI"
    ],
    "answer": 0,
    "explain": "Пока чинят. Правильный ответ: «изоляция нестабильных тестов». Тестирование: unit, integration, property-based, нагрузочные сценарии.",
    "group": "Тесты и качество",
    "id": "s307"
  },
  {
    "topic": "python",
    "q": "Что означает «почему __eq__ без __hash__ → unhashable»?",
    "options": [
      "None hash в class",
      "random",
      "id hash kept always with custom eq",
      "TypeError on class create"
    ],
    "answer": 0,
    "explain": "Безопасность set/dict. Правильный ответ: «None hash в class».",
    "group": "CPython и память",
    "id": "s308"
  },
  {
    "topic": "async",
    "q": "Что такое anyio from_thread в контексте Python?",
    "options": [
      "мост threads↔async",
      "process",
      "GIL bridge CPU",
      "WSGI"
    ],
    "answer": 0,
    "explain": "Интеграции. Правильный ответ: «мост threads↔async».",
    "group": "Asyncio",
    "id": "s309"
  },
  {
    "topic": "security",
    "q": "Что вернёт pickle is not a data format for untrusted?",
    "options": [
      "да",
      "нет, безопасен как json",
      "безопасен с protocol 0",
      "безопасен в base64"
    ],
    "answer": 0,
    "explain": "Код при load. Правильный ответ: «да». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s310"
  },
  {
    "topic": "design",
    "q": "Что означает «invariant в домене лучше держать»?",
    "options": [
      "в конструкторе/фабрике типа",
      "в UI only",
      "в БД триггерах only silently",
      "в логах"
    ],
    "answer": 0,
    "explain": "Непроницаемые типы. Правильный ответ: «в конструкторе/фабрике типа».",
    "group": "Архитектура и дизайн",
    "id": "s311"
  },
  {
    "topic": "db",
    "q": "Что вернёт LISTEN/NOTIFY?",
    "options": [
      "лёгкие события PostgreSQL",
      "Kafka replacement always",
      "CDC full",
      "RPC"
    ],
    "answer": 0,
    "explain": "Сигналы внутри БД. Правильный ответ: «лёгкие события PostgreSQL». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s312"
  },
  {
    "topic": "cache",
    "q": "Что такое stampede lock per key в контексте Python?",
    "options": [
      "один пересчёт",
      "все считают",
      "TTL=0",
      "no cache"
    ],
    "answer": 0,
    "explain": "Mutex/singleflight. Правильный ответ: «один пересчёт». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s313"
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
    "explain": "Идемпотентность. Правильный ответ: «очень дорого/редко; чаще effectively once». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s314"
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
    "explain": "Новая эпоха. Правильный ответ: «гонка данных без GIL — нужны sync». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s315"
  },
  {
    "topic": "байткод",
    "q": "Что такое RETURN_GENERATOR в контексте Python?",
    "options": [
      "создание генератора из frame",
      "async only",
      "return value ordinary",
      "import"
    ],
    "answer": 0,
    "explain": "Детали компилятора. Правильный ответ: «создание генератора из frame».",
    "group": "CPython и память",
    "id": "s316"
  },
  {
    "topic": "память",
    "q": "Что вернёт mimalloc/other in experiments?",
    "options": [
      "альтернативные аллокаторы сборок",
      "замена gc",
      "замена typing",
      "pip"
    ],
    "answer": 0,
    "explain": "Перф-сборки. Правильный ответ: «альтернативные аллокаторы сборок».",
    "group": "CPython и память",
    "id": "s317"
  },
  {
    "topic": "import",
    "q": "Что такое frozen modules в контексте Python?",
    "options": [
      "встроенные в бинарник",
      "pip freeze",
      "venv freeze",
      "docker layer"
    ],
    "answer": 0,
    "explain": "Startup. Правильный ответ: «встроенные в бинарник».",
    "group": "Stdlib и производительность",
    "id": "s318"
  },
  {
    "topic": "дескрипторы",
    "q": "Что такое __delete__ в контексте Python?",
    "options": [
      "del obj.attr",
      "GC",
      "pop dict only",
      "weakref"
    ],
    "answer": 0,
    "explain": "Data descriptor. Правильный ответ: «del obj.attr». Дескрипторы управляют доступом к атрибутам через __get__ / __set__ / __delete__.",
    "group": "Метаклассы и типы",
    "id": "s319"
  },
  {
    "topic": "метаклассы",
    "q": "Что вернёт type.__call__ путь instance create?",
    "options": [
      "__call__ типа → __new__/__init__ instance",
      "только __init__",
      "только __new__",
      "module exec"
    ],
    "answer": 0,
    "explain": "Механика creation. Правильный ответ: «__call__ типа → __new__/__init__ instance». Метакласс создаёт класс так же, как класс создаёт экземпляр.",
    "group": "Метаклассы и типы",
    "id": "s320"
  },
  {
    "topic": "typing",
    "q": "Что вернёт ReadOnly в TypedDict (новые PEP)?",
    "options": [
      "ключи только для чтения в checker",
      "runtime const",
      "slots",
      "frozen dataclass same"
    ],
    "answer": 0,
    "explain": "Эволюция TypedDict. Правильный ответ: «ключи только для чтения в checker». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "s321"
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
    "explain": "Сложно, редко на собесе джуна. Правильный ответ: «модели атомарности native».",
    "group": "Потоки, процессы, GIL",
    "id": "s322"
  },
  {
    "topic": "asyncio",
    "q": "Что означает «create_shared_memory — не путать с»?",
    "options": [
      "multiprocessing.shared_memory",
      "Queue",
      "Lock",
      "Event"
    ],
    "answer": 0,
    "explain": "Разные модули. Правильный ответ: «multiprocessing.shared_memory». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "s323"
  },
  {
    "topic": "security",
    "q": "Что такое secure cookie flags в контексте Python?",
    "options": [
      "HttpOnly Secure SameSite",
      "только Secure",
      "только path /",
      "Domain=* safe"
    ],
    "answer": 0,
    "explain": "Сессии. Правильный ответ: «HttpOnly Secure SameSite». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s324"
  },
  {
    "topic": "architecture",
    "q": "Что такое modular monolith в контексте Python?",
    "options": [
      "модули+границы без распределёнки сразу",
      "microservices mandatory",
      "big ball",
      "shared DB unrestricted ideal"
    ],
    "answer": 0,
    "explain": "Прагматичный старт. Правильный ответ: «модули+границы без распределёнки сразу». Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s325"
  },
  {
    "topic": "db",
    "q": "Что такое snapshot isolation anomaly в контексте Python?",
    "options": [
      "write skew и др.",
      "не бывает аномалий",
      "только dirty read",
      "GIL"
    ],
    "answer": 0,
    "explain": "Уровни изоляции. Правильный ответ: «write skew и др.». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s326"
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
    "explain": "Hard problem. Правильный ответ: «сложная согласованность». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s327"
  },
  {
    "topic": "distributed",
    "q": "Что такое leader election в контексте Python?",
    "options": [
      "выбор primary",
      "DNS RR",
      "client sticky random",
      "SQL AUTOINCREMENT"
    ],
    "answer": 0,
    "explain": "Raft/etcd. Правильный ответ: «выбор primary». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s328"
  },
  {
    "topic": "performance",
    "q": "Что такое Py_TPFLAGS_HAVE_VECTORCALL в контексте Python?",
    "options": [
      "тип поддерживает vectorcall",
      "async flag",
      "GC flag",
      "heaptype ban"
    ],
    "answer": 0,
    "explain": "C-API perf. Правильный ответ: «тип поддерживает vectorcall». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s329"
  },
  {
    "topic": "observability",
    "q": "Что означает «baggage в телеметрии»?",
    "options": [
      "ключ-значения вдоль трейса",
      "только headers auth",
      "logs only",
      "metrics labels unlimited safe"
    ],
    "answer": 0,
    "explain": "Осторожно с PII. Правильный ответ: «ключ-значения вдоль трейса». Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s330"
  },
  {
    "topic": "packaging",
    "q": "Что вернёт bytecode suppression / SOURCE_DATE_EPOCH?",
    "options": [
      "воспроизводимые артефакты",
      "ускорение import magic only",
      "typing",
      "GIL"
    ],
    "answer": 0,
    "explain": "Reproducible builds. Правильный ответ: «воспроизводимые артефакты». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s331"
  },
  {
    "topic": "api",
    "q": "Что вернёт versioning via media type?",
    "options": [
      "Accept versioning",
      "только URL /v1",
      "только header X-Api always mandatory one way",
      "query ver worst always"
    ],
    "answer": 0,
    "explain": "Варианты эволюции. Правильный ответ: «Accept versioning».",
    "group": "Веб и API",
    "id": "s332"
  },
  {
    "topic": "testing",
    "q": "Что такое characterization tests в контексте Python?",
    "options": [
      "фиксируют текущее поведение легаси",
      "TDD greenfield only",
      "mutation",
      "fuzz"
    ],
    "answer": 0,
    "explain": "Перед рефакторингом. Правильный ответ: «фиксируют текущее поведение легаси». Тестирование: unit, integration, property-based, нагрузочные сценарии.",
    "group": "Тесты и качество",
    "id": "s333"
  },
  {
    "topic": "python",
    "q": "Что вернёт сумма многих float?",
    "options": [
      "ошибки округления; math.fsum",
      "точна всегда decimal",
      "int",
      "fractions auto"
    ],
    "answer": 0,
    "explain": "Численная устойчивость. Правильный ответ: «ошибки округления; math.fsum».",
    "group": "CPython и память",
    "id": "s334"
  },
  {
    "topic": "async",
    "q": "Что такое graceful shutdown в контексте Python?",
    "options": [
      "отмена задач + close ресурсов",
      "os._exit сразу ideal",
      "игнор tasks",
      "SIGINT ignore"
    ],
    "answer": 0,
    "explain": "Прод-практика. Правильный ответ: «отмена задач + close ресурсов».",
    "group": "Asyncio",
    "id": "s335"
  },
  {
    "topic": "errors",
    "q": "Что такое BaseExceptionGroup.subgroup в контексте Python?",
    "options": [
      "фильтр подгруппы",
      "flatten",
      "raise bare",
      "logging"
    ],
    "answer": 0,
    "explain": "API групп. Правильный ответ: «фильтр подгруппы».",
    "group": "Исключения и контекст",
    "id": "s336"
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
    "explain": "Современные расширения. Правильный ответ: «динамика/модульность расширений». Относится к внутренностям CPython и написанию C-расширений, не к обычному прикладному коду.",
    "group": "Нативные расширения",
    "id": "s337"
  },
  {
    "topic": "design",
    "q": "Что такое policy object в контексте Python?",
    "options": [
      "вынесенные правила решения",
      "god service",
      "anemic getters only",
      "SQL view"
    ],
    "answer": 0,
    "explain": "Гибкость поведения. Правильный ответ: «вынесенные правила решения».",
    "group": "Архитектура и дизайн",
    "id": "s338"
  },
  {
    "topic": "db",
    "q": "Что такое advisory locks в контексте Python?",
    "options": [
      "лок приложения в PG",
      "row lock always same",
      "file lock OS only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Координация без row. Правильный ответ: «лок приложения в PG». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s339"
  },
  {
    "topic": "distributed",
    "q": "Что такое hedged requests в контексте Python?",
    "options": [
      "параллельные дубли против хвоста латентности",
      "retry serial only",
      "cache",
      "bulkhead opposite"
    ],
    "answer": 0,
    "explain": "Хвостовая задержка. Правильный ответ: «параллельные дубли против хвоста латентности». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s340"
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
    "explain": "Современная поставка. Правильный ответ: «проверка происхождения артефактов». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s341"
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
    "explain": "Сравнивай workload. Правильный ответ: «разные стратегии ускорения». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s342"
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
    "explain": "SRE практика. Правильный ответ: «целевая надёжность и запас на изменения». Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s343"
  },
  {
    "topic": "architecture",
    "q": "Что означает «data mesh принцип»?",
    "options": [
      "доменные владельцы данных",
      "одно озеро без владельцев",
      "только ETL nightly",
      "CQRS synonym"
    ],
    "answer": 0,
    "explain": "Орг+тех. Правильный ответ: «доменные владельцы данных». Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s344"
  },
  {
    "topic": "api",
    "q": "Что такое webhook security в контексте Python?",
    "options": [
      "подписи/секреты/ретраи",
      "открытый POST ok",
      "только IP allow without sig enough always",
      "GET idempotent body"
    ],
    "answer": 0,
    "explain": "Проверка подлинности. Правильный ответ: «подписи/секреты/ретраи».",
    "group": "Веб и API",
    "id": "s345"
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
    "explain": "Термины перфа. Правильный ответ: «разные цели (норма vs перегруз)». Тестирование: unit, integration, property-based, нагрузочные сценарии.",
    "group": "Тесты и качество",
    "id": "s346"
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
    "explain": "Точность. Правильный ответ: «Decimal/целые копейки».",
    "group": "CPython и память",
    "id": "s347"
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
    "explain": "Сетевой перф. Правильный ответ: «настройки сокета влияют на хвосты».",
    "group": "Asyncio",
    "id": "s348"
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
    "explain": "Расширяемость VM. Правильный ответ: «хуки для JIT/отладчиков». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s349"
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
    "explain": "Интерпретация top/ps. Правильный ответ: «RSS vs VSIZE разные метрики».",
    "group": "CPython и память",
    "id": "s350"
  },
  {
    "topic": "import",
    "q": "Что такое namespace packages без __init__ в контексте Python?",
    "options": [
      "PEP 420",
      "запрещены 3.x",
      "только src layout poetry",
      "zip only"
    ],
    "answer": 0,
    "explain": "Разнесённые пакеты. Правильный ответ: «PEP 420».",
    "group": "Stdlib и производительность",
    "id": "s351"
  },
  {
    "topic": "метаклассы",
    "q": "Что вернёт ABCMeta + metaclass conflict?",
    "options": [
      "нужна кооперация метаклассов",
      "ABC запрещает MI",
      "type ban",
      "Protocol replaces always"
    ],
    "answer": 0,
    "explain": "Сложные иерархии. Правильный ответ: «нужна кооперация метаклассов». Метакласс создаёт класс так же, как класс создаёт экземпляр.",
    "group": "Метаклассы и типы",
    "id": "s352"
  },
  {
    "topic": "security",
    "q": "Что вернёт marshmallow/pydantic на границе?",
    "options": [
      "валидация не доверенного ввода",
      "замена firewall",
      "замена auth",
      "pickle safe"
    ],
    "answer": 0,
    "explain": "Parse don't trust. Правильный ответ: «валидация не доверенного ввода». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s353"
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
    "explain": "Тюнинг PG/InnoDB. Правильный ответ: «физдизайн хранения/индексов». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s354"
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
    "explain": "Паттерн. Правильный ответ: «классика против stampede». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s355"
  },
  {
    "topic": "distributed",
    "q": "Что вернёт idempotent consumer + dedupe store?",
    "options": [
      "effectively-once обработка",
      "exactly broker magic",
      "at-most-once only",
      "batch off"
    ],
    "answer": 0,
    "explain": "Практика очередей. Правильный ответ: «effectively-once обработка». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s356"
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
    "explain": "История CPython perf. Правильный ответ: «ускорение VM dispatch». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s357"
  },
  {
    "topic": "api",
    "q": "Что вернёт GraphQL N+1?",
    "options": [
      "решается DataLoader/батчингом",
      "нет проблемы",
      "только SQL join auto",
      "gRPC"
    ],
    "answer": 0,
    "explain": "Классика GraphQL. Правильный ответ: «решается DataLoader/батчингом».",
    "group": "Веб и API",
    "id": "s358"
  },
  {
    "topic": "testing",
    "q": "Что такое testcontainers в контексте Python?",
    "options": [
      "реальные зависимости в Docker для тестов",
      "только mocks",
      "только in-memory fake always better",
      "chaos"
    ],
    "answer": 0,
    "explain": "Интеграции. Правильный ответ: «реальные зависимости в Docker для тестов». Тестирование: unit, integration, property-based, нагрузочные сценарии.",
    "group": "Тесты и качество",
    "id": "s359"
  },
  {
    "topic": "design",
    "q": "Что такое hexagonal testing: domain pure в контексте Python?",
    "options": [
      "без I/O в unit домена",
      "всегда с DB",
      "только e2e",
      "GIL tests"
    ],
    "answer": 0,
    "explain": "Быстрые тесты ядра. Правильный ответ: «без I/O в unit домена».",
    "group": "Архитектура и дизайн",
    "id": "s360"
  },
  {
    "topic": "observability",
    "q": "Что такое profiling in prod continuous в контексте Python?",
    "options": [
      "сэмплирующие профилировщики",
      "cProfile на каждый request",
      "print",
      "dis"
    ],
    "answer": 0,
    "explain": "py-spy/scalene и др. Правильный ответ: «сэмплирующие профилировщики». Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s361"
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
    "explain": "Нативные расширения. Правильный ответ: «cibuildwheel / матрица платформ». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s362"
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
    "explain": "Стандартизация C подписей. Правильный ответ: «генерация парсинга аргументов CPython». Относится к внутренностям CPython и написанию C-расширений, не к обычному прикладному коду. Argument Clinic — генератор в исходниках CPython: описываешь сигнатуру функции, он создаёт C-код для разбора аргументов (вместо ручного PyArg_ParseTuple и дублирования документации).",
    "group": "Нативные расширения",
    "id": "s363"
  },
  {
    "topic": "concurrency",
    "q": "Что такое subinterpreters per request idea в контексте Python?",
    "options": [
      "изоляция state ценой сложности",
      "замена k8s",
      "GIL remove complete",
      "faster than threads always"
    ],
    "answer": 0,
    "explain": "Исследовательские модели. Правильный ответ: «изоляция state ценой сложности».",
    "group": "Потоки, процессы, GIL",
    "id": "s364"
  },
  {
    "topic": "asyncio",
    "q": "Что такое datagram endpoint в контексте Python?",
    "options": [
      "UDP",
      "только TCP",
      "HTTP/3 synonym",
      "unix signals"
    ],
    "answer": 0,
    "explain": "asyncio UDP. Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "s365"
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
    "explain": "Контекстные энкодеры. Правильный ответ: «разные контексты экранирования». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s366"
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
    "explain": "Интеграции. Правильный ответ: «явный перевод + общий язык». Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s367"
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
    "explain": "Дизайн ключей. Правильный ответ: «перекос нагрузки шарда». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s368"
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
    "explain": "Сглаживание miss. Правильный ответ: «продление до истечения». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s369"
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
    "explain": "Надёжный обмен. Правильный ответ: «отправка vs идемпотентный приём». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s370"
  },
  {
    "topic": "python",
    "q": "Что вернёт сумма range больших — лучше?",
    "options": [
      "арифметика ряда / формула",
      "list materialize always",
      "numpy mandatory",
      "decimal"
    ],
    "answer": 0,
    "explain": "Не строй гигантский list. Правильный ответ: «арифметика ряда / формула».",
    "group": "CPython и память",
    "id": "s371"
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
    "explain": "Читай доки. Правильный ответ: «разные политики ошибок/возврата».",
    "group": "Asyncio",
    "id": "s372"
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
    "explain": "Цепочки и заметки. Правильный ответ: «разные слои отладки исключений».",
    "group": "Исключения и контекст",
    "id": "s373"
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
    "explain": "3.12+ observability VM. Правильный ответ: «дешёвые хуки наблюдения». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s374"
  },
  {
    "topic": "память",
    "q": "Что означает «object travels through generations если»?",
    "options": [
      "выживает сборам",
      "сразу old",
      "never",
      "только slots"
    ],
    "answer": 0,
    "explain": "GC ages. Правильный ответ: «выживает сборам».",
    "group": "CPython и память",
    "id": "s375"
  },
  {
    "topic": "import",
    "q": "Что означает «find_spec None означает»?",
    "options": [
      "модуль не найден",
      "found",
      "cached",
      "namespace always"
    ],
    "answer": 0,
    "explain": "Проверка опциональных deps. Правильный ответ: «модуль не найден».",
    "group": "Stdlib и производительность",
    "id": "s376"
  },
  {
    "topic": "метаклассы",
    "q": "Что вернёт динамический enum/метакласс фабрики?",
    "options": [
      "codegen на старте",
      "запрещено",
      "только AST rewrite disk",
      "eval only"
    ],
    "answer": 0,
    "explain": "Плагинные реестры. Правильный ответ: «codegen на старте». Метакласс создаёт класс так же, как класс создаёт экземпляр.",
    "group": "Метаклассы и типы",
    "id": "s377"
  },
  {
    "topic": "security",
    "q": "Что означает «CSP nonce для скриптов»?",
    "options": [
      "разрешает конкретные inline",
      "отключает JS",
      "заменяет XSS filters server only",
      "CORS"
    ],
    "answer": 0,
    "explain": "Современный XSS defense. Правильный ответ: «разрешает конкретные inline». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s378"
  },
  {
    "topic": "db",
    "q": "Что такое BRIN index в контексте Python?",
    "options": [
      "для естественно упорядоченных больших таблиц",
      "замена BTree всегда",
      "hash only",
      "fulltext"
    ],
    "answer": 0,
    "explain": "PostgreSQL. Правильный ответ: «для естественно упорядоченных больших таблиц». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s379"
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
    "explain": "Не путать термины. Правильный ответ: «разные уровни; в app — обычно отдельный store». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s380"
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
    "explain": "Лидерство/локи. Правильный ответ: «временное владение ресурсом». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s381"
  },
  {
    "topic": "performance",
    "q": "Что означает «polymorphic call sites вредят specialization»?",
    "options": [
      "да, разные типы → deopt",
      "нет, только помогают",
      "GIL",
      "typing ignore"
    ],
    "answer": 0,
    "explain": "Стабильность типов. Правильный ответ: «да, разные типы → deopt». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s382"
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
    "explain": "Выбор транспорта. Правильный ответ: «разные модели push».",
    "group": "Веб и API",
    "id": "s383"
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
    "explain": "Hypothesis database. Правильный ответ: «регрессии на найденных кейсах». Тестирование: unit, integration, property-based, нагрузочные сценарии.",
    "group": "Тесты и качество",
    "id": "s384"
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
    "explain": "Направление импортов. Правильный ответ: «зависимости к центру/домену».",
    "group": "Архитектура и дизайн",
    "id": "s385"
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
    "explain": "Бюджет телеметрии. Правильный ответ: «дороже хранить/искать». Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s386"
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
    "explain": "Совместимость .so. Правильный ответ: «сборка интерпретатора влияет на расширения». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s387"
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
    "explain": "abi3. Правильный ответ: «PY_LIMITED_API». Относится к внутренностям CPython и написанию C-расширений, не к обычному прикладному коду.",
    "group": "Нативные расширения",
    "id": "s388"
  },
  {
    "topic": "concurrency",
    "q": "Что вернёт message passing > shared memory когда?",
    "options": [
      "нужна простота рассуждений",
      "всегда медленнее useless",
      "GIL gone",
      "numpy only"
    ],
    "answer": 0,
    "explain": "Акторы/очереди. Правильный ответ: «нужна простота рассуждений».",
    "group": "Потоки, процессы, GIL",
    "id": "s389"
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
    "explain": "Graceful. Правильный ответ: «корректное завершение слушателя». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "s390"
  },
  {
    "topic": "security",
    "q": "Что такое open redirect в контексте Python?",
    "options": [
      "редирект на злой URL",
      "SSRF",
      "XSS stored only",
      "CSRF token"
    ],
    "answer": 0,
    "explain": "Валидируй next=. Правильный ответ: «редирект на злой URL». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s391"
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
    "explain": "Интеграционные стили. Правильный ответ: «общий язык vs переводчик». Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s392"
  },
  {
    "topic": "db",
    "q": "Что такое synchronous_commit off tradeoff в контексте Python?",
    "options": [
      "скорость vs риск потери при crash",
      "всегда safe faster",
      "только replica",
      "ORM"
    ],
    "answer": 0,
    "explain": "PG настройки. Правильный ответ: «скорость vs риск потери при crash». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s393"
  },
  {
    "topic": "cache",
    "q": "Что такое asymmetric TTLs tiers в контексте Python?",
    "options": [
      "разные времена на слоях",
      "один TTL везде mandatory",
      "no TTL",
      "negative only"
    ],
    "answer": 0,
    "explain": "Иерархия. Правильный ответ: «разные времена на слоях». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s394"
  },
  {
    "topic": "distributed",
    "q": "Что такое sticky sessions downside в контексте Python?",
    "options": [
      "хуже балансировка/failover",
      "всегда лучше JWT",
      "нет минусов",
      "заменяет cache"
    ],
    "answer": 0,
    "explain": "Состояние на узле. Правильный ответ: «хуже балансировка/failover». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s395"
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
    "explain": "Численные алгоритмы. Правильный ответ: «точный накопленный float sum».",
    "group": "CPython и память",
    "id": "s396"
  },
  {
    "topic": "async",
    "q": "Что такое aenter failure и cancel в контексте Python?",
    "options": [
      "изучай семантику CM при ошибках",
      "always simple",
      "как sync identically without nuance",
      "GIL"
    ],
    "answer": 0,
    "explain": "Тонкости. Правильный ответ: «изучай семантику CM при ошибках».",
    "group": "Asyncio",
    "id": "s397"
  },
  {
    "topic": "errors",
    "q": "Что такое chained exceptions __context__ при raise в except в контексте Python?",
    "options": [
      "автосвязь",
      "только from",
      "пропадает",
      "logging"
    ],
    "answer": 0,
    "explain": "Неявная цепочка. Правильный ответ: «автосвязь».",
    "group": "Исключения и контекст",
    "id": "s398"
  },
  {
    "topic": "CPython",
    "q": "Что вернёт PEP 649 deferred annotations (направление)?",
    "options": [
      "ленивые аннотации без from __future__ в перспективе",
      "удаление typing",
      "runtime enforce",
      "GIL"
    ],
    "answer": 0,
    "explain": "Эволюция annotations. Правильный ответ: «ленивые аннотации без from __future__ в перспективе». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s399"
  },
  {
    "topic": "память",
    "q": "Что такое shared pages after fork until write в контексте Python?",
    "options": [
      "COW",
      "full copy immediate always on mac spawn?",
      "depends start method",
      "нет COW на linux fork"
    ],
    "answer": 0,
    "explain": "Уточняй платформу/метод. Правильный ответ: «COW».",
    "group": "CPython и память",
    "id": "s400"
  },
  {
    "topic": "import",
    "q": "Что такое sys.abiflags в контексте Python?",
    "options": [
      "флаги ABI интерпретатора",
      "pip flags",
      "ruff",
      "mypy"
    ],
    "answer": 0,
    "explain": "Интроспекция сборки. Правильный ответ: «флаги ABI интерпретатора».",
    "group": "Stdlib и производительность",
    "id": "s401"
  },
  {
    "topic": "метаклассы",
    "q": "Что вернёт class body executes inside namespace?",
    "options": [
      "да, затем type(...) ",
      "нет, декларативно without exec",
      "только annotations kept",
      "GIL"
    ],
    "answer": 0,
    "explain": "class — executable suite. Правильный ответ: «да, затем type(...)». Метакласс создаёт класс так же, как класс создаёт экземпляр.",
    "group": "Метаклассы и типы",
    "id": "s402"
  },
  {
    "topic": "security",
    "q": "Что такое JWT none alg attack в контексте Python?",
    "options": [
      "подмена алгоритма",
      "XSS",
      "CSRF",
      "SQLi"
    ],
    "answer": 0,
    "explain": "Жёстко задавай alg. Правильный ответ: «подмена алгоритма». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s403"
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
    "explain": "Режим пулера. Правильный ответ: «session state/prepared осторожно». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s404"
  },
  {
    "topic": "cache",
    "q": "Что такое probabilistic early expiration в контексте Python?",
    "options": [
      "ранний refresh с вероятностью",
      "fixed TTL only",
      "lock only",
      "no cache"
    ],
    "answer": 0,
    "explain": "XFetch-подобные идеи. Правильный ответ: «ранний refresh с вероятностью». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s405"
  },
  {
    "topic": "distributed",
    "q": "Что такое phi accrual failure detection в контексте Python?",
    "options": [
      "адаптивный suspicion level",
      "hard timeout only",
      "Raft",
      "DNS"
    ],
    "answer": 0,
    "explain": "Аккруал-детекторы. Правильный ответ: «адаптивный suspicion level». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s406"
  },
  {
    "topic": "performance",
    "q": "Что такое devirtualization в JIT в контексте Python?",
    "options": [
      "упрощает вызовы при мономорфности",
      "GIL",
      "typing cast runtime",
      "async"
    ],
    "answer": 0,
    "explain": "Связь со specialization. Правильный ответ: «упрощает вызовы при мономорфности». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s407"
  },
  {
    "topic": "api",
    "q": "Что вернёт idempotent create with client keys?",
    "options": [
      "UPSERT/по ключу запроса",
      "random UUID server only without store",
      "POST always once network perfect",
      "GET create"
    ],
    "answer": 0,
    "explain": "Клиентские ключи. Правильный ответ: «UPSERT/по ключу запроса».",
    "group": "Веб и API",
    "id": "s408"
  },
  {
    "topic": "testing",
    "q": "Что такое approval tests в контексте Python?",
    "options": [
      "review эталона человеком",
      "property",
      "mutation",
      "chaos"
    ],
    "answer": 0,
    "explain": "Близко к snapshot. Правильный ответ: «review эталона человеком». Тестирование: unit, integration, property-based, нагрузочные сценарии.",
    "group": "Тесты и качество",
    "id": "s409"
  },
  {
    "topic": "design",
    "q": "Что вернёт ACL + facade на легаси?",
    "options": [
      "изолирует старое API",
      "расширяет легаси во все сервисы",
      "shared tables",
      "big bang"
    ],
    "answer": 0,
    "explain": "Миграции. Правильный ответ: «изолирует старое API».",
    "group": "Архитектура и дизайн",
    "id": "s410"
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
    "explain": "Дорогие трейсы умно. Правильный ответ: «решение хранить трейс после факта (ошибки/медленно)». Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s411"
  },
  {
    "topic": "packaging",
    "q": "Что вернёт pylock.toml / lock standards эволюция?",
    "options": [
      "стандартизация локов экосистемы",
      "requirements.txt forever only standard",
      "poetry exclusive lock format eternal",
      "pip freeze ban"
    ],
    "answer": 0,
    "explain": "Следи за PEP. Правильный ответ: «стандартизация локов экосистемы». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s412"
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
    "explain": "Альтернатива историческому C-API. Правильный ответ: «более стабильный/портируемый API расширений». Относится к внутренностям CPython и написанию C-расширений, не к обычному прикладному коду.",
    "group": "Нативные расширения",
    "id": "s413"
  },
  {
    "topic": "concurrency",
    "q": "Что такое software transactional memory в Python в контексте Python?",
    "options": [
      "нет стандартного STM",
      "есть в stdlib",
      "GIL is STM",
      "asyncio STM"
    ],
    "answer": 0,
    "explain": "Используй locks/actors. Правильный ответ: «нет стандартного STM».",
    "group": "Потоки, процессы, GIL",
    "id": "s414"
  },
  {
    "topic": "asyncio",
    "q": "Что такое readexactly в контексте Python?",
    "options": [
      "ровно n байт или IncompleteReadError",
      "до EOF always",
      "line",
      "http"
    ],
    "answer": 0,
    "explain": "Протоколы. Правильный ответ: «ровно n байт или IncompleteReadError». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "s415"
  },
  {
    "topic": "security",
    "q": "Что такое mass assignment в контексте Python?",
    "options": [
      "лишние поля во входной модели",
      "XSS",
      "SSRF",
      "CSRF"
    ],
    "answer": 0,
    "explain": "Явные allowlists полей. Правильный ответ: «лишние поля во входной модели». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s416"
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
    "explain": "Командный масштаб. Правильный ответ: «высокая модульность без сети». Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s417"
  },
  {
    "topic": "db",
    "q": "Что такое write skew example в контексте Python?",
    "options": [
      "аномалия при snapshot isolation",
      "dirty read",
      "phantom only term",
      "lost update only term"
    ],
    "answer": 0,
    "explain": "Классика теории. Правильный ответ: «аномалия при snapshot isolation». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s418"
  },
  {
    "topic": "cache",
    "q": "Что такое versioned keys в контексте Python?",
    "options": [
      "инвалидация сменой версии в имени",
      "TTL=∞",
      "LRU off",
      "random keys"
    ],
    "answer": 0,
    "explain": "Простой приём. Правильный ответ: «инвалидация сменой версии в имени». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s419"
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
    "explain": "Lamport/vector/hybrid. Правильный ответ: «не полагайся на wall clock для порядка». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s420"
  },
  {
    "topic": "python",
    "q": "Что вернёт int произвольной длины цена?",
    "options": [
      "больше цифр → дороже операции",
      "O(1) always like CPU int",
      "float same",
      "decimal cheaper"
    ],
    "answer": 0,
    "explain": "Большие числа. Правильный ответ: «больше цифр → дороже операции».",
    "group": "CPython и память",
    "id": "s421"
  },
  {
    "topic": "async",
    "q": "Что такое flow control pause_writing в контексте Python?",
    "options": [
      "протокол транспорта при backpressure",
      "GIL pause",
      "thread pause",
      "process"
    ],
    "answer": 0,
    "explain": "asyncio transports. Правильный ответ: «протокол транспорта при backpressure».",
    "group": "Asyncio",
    "id": "s422"
  },
  {
    "topic": "errors",
    "q": "Что означает «ExceptionGroup как список ошибок gather»?",
    "options": [
      "TaskGroup/3.11 стиль",
      "только logging",
      "замена tuple return",
      "warnings"
    ],
    "answer": 0,
    "explain": "Структурированные сбои. Правильный ответ: «TaskGroup/3.11 стиль».",
    "group": "Исключения и контекст",
    "id": "s423"
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
    "explain": "Оптимизация. Правильный ответ: «некоторые объекты без смены refcnt». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s424"
  },
  {
    "topic": "память",
    "q": "Что такое allocator hooks PYTHONMALLOC в контексте Python?",
    "options": [
      "отладка аллокаций",
      "faster always",
      "disable GC",
      "typing"
    ],
    "answer": 0,
    "explain": "debug hooks. Правильный ответ: «отладка аллокаций».",
    "group": "CPython и память",
    "id": "s425"
  },
  {
    "topic": "import",
    "q": "Что такое module specs origin в контексте Python?",
    "options": [
      "откуда загружен",
      "version pep",
      "hash only",
      "author"
    ],
    "answer": 0,
    "explain": "Диагностика. Правильный ответ: «откуда загружен».",
    "group": "Stdlib и производительность",
    "id": "s426"
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
    "explain": "Контролируй merge. Правильный ответ: «массовое обновление __dict__/merge без фильтра». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s427"
  },
  {
    "topic": "db",
    "q": "Что означает «serializable critical section через»?",
    "options": [
      "правильные уровни/ретраи сериализации",
      "READ UNCOMMITTED",
      "autocommit",
      "NoSQL only"
    ],
    "answer": 0,
    "explain": "Аномалии. Правильный ответ: «правильные уровни/ретраи сериализации». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s428"
  },
  {
    "topic": "cache",
    "q": "Что такое hot key split в контексте Python?",
    "options": [
      "шардинг популярного ключа",
      "TTL decrease only",
      "one box",
      "CPU pin"
    ],
    "answer": 0,
    "explain": "Перекос ключей. Правильный ответ: «шардинг популярного ключа». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s429"
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
    "explain": "Системное мышление. Правильный ответ: «от клиента до воркеров согласованно». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s430"
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
    "explain": "Prod profiling. Правильный ответ: «низкоуровневая инструментизация». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s431"
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
    "explain": "Экономия трафика. Правильный ответ: «клиент просит поля».",
    "group": "Веб и API",
    "id": "s432"
  },
  {
    "topic": "testing",
    "q": "Что такое synthetic canaries в контексте Python?",
    "options": [
      "прод-проверки синтетикой",
      "unit",
      "mutation",
      "chaos only"
    ],
    "answer": 0,
    "explain": "Ранний сигнал. Правильный ответ: «прод-проверки синтетикой». Тестирование: unit, integration, property-based, нагрузочные сценарии.",
    "group": "Тесты и качество",
    "id": "s433"
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
    "explain": "Границы. Правильный ответ: «внутренние vs внешние контракты».",
    "group": "Архитектура и дизайн",
    "id": "s434"
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
    "explain": "Разные вопросы. Правильный ответ: «стек/CPU vs запросы по сервисам». Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s435"
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
    "explain": "Выбор колеса pip. Правильный ответ: «интерпретатор/ABI/платформа». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s436"
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
    "explain": "Осторожно в расширениях. Правильный ответ: «могут меняться». Относится к внутренностям CPython и написанию C-расширений, не к обычному прикладному коду.",
    "group": "Нативные расширения",
    "id": "s437"
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
    "explain": "Теория параллелизма. Правильный ответ: «прогресса гарантии разные».",
    "group": "Потоки, процессы, GIL",
    "id": "s438"
  },
  {
    "topic": "asyncio",
    "q": "Что такое buffered protocol в контексте Python?",
    "options": [
      "управление буферами протокола",
      "только streams high-level",
      "UDP only",
      "HTTP router"
    ],
    "answer": 0,
    "explain": "Низкий уровень asyncio. Правильный ответ: «управление буферами протокола». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "s439"
  },
  {
    "topic": "security",
    "q": "Что такое unsafe deserialization gadgets в контексте Python?",
    "options": [
      "цепочки для RCE при pickle/yaml",
      "только buffer overflow C",
      "XSS",
      "CSRF"
    ],
    "answer": 0,
    "explain": "Не десериализуй недоверенное. Правильный ответ: «цепочки для RCE при pickle/yaml». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s440"
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
    "explain": "Инфра/сервисы. Правильный ответ: «управление vs трафик данных». Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s441"
  },
  {
    "topic": "db",
    "q": "В чём риск logical replication slots?",
    "options": [
      "удержание WAL → диск",
      "только CPU",
      "без рисков",
      "ORM"
    ],
    "answer": 0,
    "explain": "Мониторинг слотов. Правильный ответ: «удержание WAL → диск». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s442"
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
    "explain": "Сложность инвалидации. Правильный ответ: «локальность + общая консистентность сложнее». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s443"
  },
  {
    "topic": "distributed",
    "q": "Что такое split brain в контексте Python?",
    "options": [
      "два лидера/раздельное мнение о кластере",
      "DNS fail",
      "GC pause only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Кворумы/fencing. Правильный ответ: «два лидера/раздельное мнение о кластере». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s444"
  },
  {
    "topic": "python",
    "q": "Что такое sys.set_int_max_str_digits в контексте Python?",
    "options": [
      "защита от DoS конвертации огромных int↔str",
      "ускорение",
      "typing",
      "json"
    ],
    "answer": 0,
    "explain": "DoS mitigation. Правильный ответ: «защита от DoS конвертации огромных int↔str».",
    "group": "CPython и память",
    "id": "s445"
  },
  {
    "topic": "async",
    "q": "Что вернёт nursery cancel all children on error?",
    "options": [
      "structured concurrency default идея",
      "leave orphans",
      "only parent cancel",
      "threads join none"
    ],
    "answer": 0,
    "explain": "Надёжные иерархии задач. Правильный ответ: «structured concurrency default идея».",
    "group": "Asyncio",
    "id": "s446"
  },
  {
    "topic": "errors",
    "q": "Что вернёт traceback.hide_frame / фильтрация?",
    "options": [
      "чище трейсы библиотек (механики зависят от версии)",
      "удаляет error",
      "logging only",
      "warnings"
    ],
    "answer": 0,
    "explain": "UX ошибок. Правильный ответ: «чище трейсы библиотек (механики зависят от версии)».",
    "group": "Исключения и контекст",
    "id": "s447"
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
    "explain": "Roadmap перфа. Правильный ответ: «дальнейшие уровни оптимизации VM». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s448"
  },
  {
    "topic": "память",
    "q": "Что вернёт debug builds with assertions?",
    "options": [
      "другие перф/поведение",
      "идентичны release",
      "faster",
      "no GC"
    ],
    "answer": 0,
    "explain": "Сравнивай apples-to-apples. Правильный ответ: «другие перф/поведение».",
    "group": "CPython и память",
    "id": "s449"
  },
  {
    "topic": "import",
    "q": "Что такое lazy loaders tradeoffs в контексте Python?",
    "options": [
      "старт быстрее, ошибки позже",
      "всегда лучше",
      "запрещены",
      "typing only"
    ],
    "answer": 0,
    "explain": "Диагностика сложнее. Правильный ответ: «старт быстрее, ошибки позже».",
    "group": "Stdlib и производительность",
    "id": "s450"
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
    "explain": "169.254.169.254 и т.п. Правильный ответ: «облачные метаданные под угрозой». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s451"
  },
  {
    "topic": "db",
    "q": "Что такое idle_in_transaction_session_timeout в контексте Python?",
    "options": [
      "убивает зависшие транзакции",
      "pool size",
      "vacuum",
      "index"
    ],
    "answer": 0,
    "explain": "Гигиена соединений. Правильный ответ: «убивает зависшие транзакции». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s452"
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
    "explain": "Политика. Правильный ответ: «запись в store минуя кэш». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s453"
  },
  {
    "topic": "distributed",
    "q": "Что такое read repair в контексте Python?",
    "options": [
      "починка при чтении реплик",
      "только compaction",
      "2PC",
      "TTL"
    ],
    "answer": 0,
    "explain": "AP системы. Правильный ответ: «починка при чтении реплик». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s454"
  },
  {
    "topic": "performance",
    "q": "Что означает «static typing не ускоряет CPython само по себе»?",
    "options": [
      "да, это для людей/чекеров/codegen",
      "mypy ускоряет runtime",
      "annotations JIT always",
      "GIL off by typing"
    ],
    "answer": 0,
    "explain": "Частый миф. Правильный ответ: «да, это для людей/чекеров/codegen». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s455"
  },
  {
    "topic": "api",
    "q": "Что означает «batch endpoints против chatty»?",
    "options": [
      "меньше RTT",
      "всегда хуже cache",
      "запрещены REST",
      "only GraphQL"
    ],
    "answer": 0,
    "explain": "Эффективность. Правильный ответ: «меньше RTT».",
    "group": "Веб и API",
    "id": "s456"
  },
  {
    "topic": "testing",
    "q": "Что такое ephemeral environment per PR в контексте Python?",
    "options": [
      "изоляция интеграций",
      "shared staging fight",
      "only local",
      "only prod"
    ],
    "answer": 0,
    "explain": "Современный CI/CD. Правильный ответ: «изоляция интеграций». Тестирование: unit, integration, property-based, нагрузочные сценарии.",
    "group": "Тесты и качество",
    "id": "s457"
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
    "explain": "Гибкость. Правильный ответ: «решения отдельно от исполнения».",
    "group": "Архитектура и дизайн",
    "id": "s458"
  },
  {
    "topic": "observability",
    "q": "Что такое continuous profiling privacy в контексте Python?",
    "options": [
      "стек может светить PII/пути",
      "безопасно всегда",
      "only CPU numbers",
      "no risk"
    ],
    "answer": 0,
    "explain": "Редактура/сэмплинг. Правильный ответ: «стек может светить PII/пути». Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s459"
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
    "explain": "Supply chain 2020s. Правильный ответ: «цепочка доверия артефактов». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s460"
  },
  {
    "topic": "python",
    "q": "Что выведет код?",
    "options": [
      "O(n) сдвиг",
      "O(1)",
      "GIL N",
      "hash"
    ],
    "answer": 0,
    "explain": "Массив сдвигает элементы. Правильный ответ: «O(n) сдвиг».",
    "code": "xs = list(range(10000))\nxs.pop(0)",
    "group": "CPython и память",
    "id": "s461"
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
    "explain": "Языковой guarantee. Правильный ответ: «да, с 3.7 как контракт».",
    "code": "print(list({'b': 1, 'a': 2}))",
    "group": "CPython и память",
    "id": "s462"
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
    "explain": "GIL. Правильный ответ: «часто ≈ одно ядро».",
    "code": "# threading + pure python loop",
    "group": "Потоки, процессы, GIL",
    "id": "s463"
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
    "explain": "Фиксированные атрибуты. Правильный ответ: «нет __dict__ у экземпляра».",
    "code": "class A:\n    __slots__ = ('x',)",
    "group": "CPython и память",
    "id": "s464"
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
    "explain": "Функции — non-data. Правильный ответ: «да (non-data descriptor)».",
    "code": "class A:\n    def f(self): return 1\na = A()\na.f = 2\nprint(a.f)",
    "group": "Метаклассы и типы",
    "id": "s465"
  },
  {
    "topic": "asyncio",
    "q": "Что выведет код?",
    "options": [
      "блокирует event loop",
      "убивает процесс",
      "TypeError always",
      "OK"
    ],
    "answer": 0,
    "explain": "await asyncio.sleep. Правильный ответ: «блокирует event loop».",
    "code": "async def bad():\n    import time\n    time.sleep(1)",
    "group": "Asyncio",
    "id": "s466"
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
    "explain": "Может исполнить код. Правильный ответ: «RCE».",
    "code": "# pickle.loads(user_bytes)",
    "group": "Stdlib и производительность",
    "id": "s467"
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
    "explain": "subprocess list args. Правильный ответ: «injection».",
    "code": "import subprocess\n# subprocess.run(user_str, shell=True)",
    "group": "Безопасность",
    "id": "s468"
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
    "explain": "ORM классика. Правильный ответ: «цикл запросов по связям».",
    "code": "for u in users:\n    print(u.orders)  # lazy?",
    "group": "Данные и распределёнка",
    "id": "s469"
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
    "explain": "Singleflight/lock. Правильный ответ: «массовый промах кэша».",
    "code": "# cache miss storm",
    "group": "Данные и распределёнка",
    "id": "s470"
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
    "explain": "DoS mitigation. Правильный ответ: «лимит str↔int digits».",
    "code": "import sys\n# sys.set_int_max_str_digits",
    "group": "CPython и память",
    "id": "s471"
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
    "explain": "Кооперативная отмена. Правильный ответ: «в await-точках / finally».",
    "code": "async def work():\n    try:\n        await asyncio.sleep(10)\n    finally:\n        ...",
    "group": "Asyncio",
    "id": "s472"
  },
  {
    "topic": "байткод",
    "q": "Что выведет код?",
    "options": [
      "dis.dis",
      "ast only",
      "pdb only",
      "pip"
    ],
    "answer": 0,
    "explain": "dis модуль. Правильный ответ: «dis.dis».",
    "code": "import dis\ndef f(x): return x+1\ndis.dis(f)",
    "group": "CPython и память",
    "id": "s473"
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
    "explain": "Локальный import / рефакторинг. Правильный ответ: «частично инициализированный модуль / ImportError».",
    "code": "# a imports b, b imports a",
    "group": "Stdlib и производительность",
    "id": "s474"
  },
  {
    "topic": "architecture",
    "q": "Что выведет код?",
    "options": [
      "изолировать внешнюю модель",
      "ускорить SQL",
      "убрать тесты",
      "GIL"
    ],
    "answer": 0,
    "explain": "Anti-corruption layer. Правильный ответ: «изолировать внешнюю модель».",
    "code": "# external_dto -> domain_model",
    "group": "Архитектура и дизайн",
    "id": "s475"
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
    "explain": "Один поток выполняет Python-байткод; I/O и C-ext могут отпускать GIL. Правильный ответ: «mutex на выполнение байткода в одном процессе».",
    "group": "Потоки, процессы, GIL",
    "id": "s476"
  },
  {
    "topic": "CPython",
    "q": "Верно ли, что Что хранит PyObject заголовок примерно?",
    "options": [
      "refcount + указатель на тип",
      "только значение",
      "только GC next",
      "имя переменной"
    ],
    "answer": 0,
    "explain": "База любого managed-объекта. Правильный ответ: «refcount + указатель на тип». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s477"
  },
  {
    "topic": "CPython",
    "q": "Что вернёт interning маленьких int?",
    "options": [
      "кэш часто используемых int (детали зависят от версии/build)",
      "все int всегда unique",
      "только float",
      "только str ascii"
    ],
    "answer": 0,
    "explain": "Поэтому is у маленьких int может быть True «случайно» — для идентичности не опирайся. Правильный ответ: «кэш часто используемых int (детали зависят от версии/build)».",
    "group": "CPython и память",
    "id": "s478"
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
    "explain": "Дизассемблер байткода. Правильный ответ: «байткод функции». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s479"
  },
  {
    "topic": "память",
    "q": "Что вернёт цикл ссылок a.x=b; b.x=a собирает?",
    "options": [
      "generational GC (цикл), не только refcount",
      "только refcount сразу",
      "никогда",
      "только weakref"
    ],
    "answer": 0,
    "explain": "refcount не рвёт циклы сам — нужен cyclic GC. Правильный ответ: «generational GC (цикл), не только refcount».",
    "group": "CPython и память",
    "id": "s480"
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
    "explain": "Кэши, наблюдатели, canonical maps. Правильный ответ: «ссылаться без удержания объекта от GC».",
    "group": "CPython и память",
    "id": "s481"
  },
  {
    "topic": "asyncio",
    "q": "Выбери верный вариант: что такое backpressure?",
    "options": [
      "торможение производителя, когда потребитель не успевает",
      "увеличение concurrency always",
      "GIL pause",
      "DNS cache"
    ],
    "answer": 0,
    "explain": "Очереди с maxsize, потоки с паузами. Правильный ответ: «торможение производителя, когда потребитель не успевает».",
    "group": "Asyncio",
    "id": "s482"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт shield(awaitable)?",
    "options": [
      "защищает от отмены снаружи",
      "ускоряет",
      "делает multithread",
      "игнорирует exceptions"
    ],
    "answer": 0,
    "explain": "Отмена task снаружи не пробрасывается внутрь shield (с нюансами). Правильный ответ: «защищает от отмены снаружи».",
    "group": "Asyncio",
    "id": "s483"
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
    "explain": "Предпочтительнее «голого» gather в новом коде. Правильный ответ: «structured concurrency: ошибки/отмена детей согласованы».",
    "group": "Asyncio",
    "id": "s484"
  },
  {
    "topic": "concurrency",
    "q": "Почему multiprocessing обходит GIL?",
    "options": [
      "отдельные процессы → свой интерпретатор/память",
      "отключает GIL в родителе",
      "использует greenlet",
      "только Windows fibers"
    ],
    "answer": 0,
    "explain": "Цена: pickle/IPC и память. Правильный ответ: «отдельные процессы → свой интерпретатор/память».",
    "group": "Потоки, процессы, GIL",
    "id": "s485"
  },
  {
    "topic": "concurrency",
    "q": "Что означает «concurrent.futures.ProcessPoolExecutor хорош для»?",
    "options": [
      "CPU-bound кусков",
      "крошечных print",
      "замены asyncio всегда",
      "GUI main thread"
    ],
    "answer": 0,
    "explain": "Пул процессов с future API. Правильный ответ: «CPU-bound кусков».",
    "group": "Потоки, процессы, GIL",
    "id": "s486"
  },
  {
    "topic": "дескрипторы",
    "q": "Что вернёт __get__/__set__/__delete__ — протокол?",
    "options": [
      "дескрипторов (property — частный случай)",
      "только metaclasses",
      "async context",
      "import hooks"
    ],
    "answer": 0,
    "explain": "Управляют доступом к атрибутам. Правильный ответ: «дескрипторов (property — частный случай)». Дескрипторы управляют доступом к атрибутам через __get__ / __set__ / __delete__.",
    "group": "Метаклассы и типы",
    "id": "s487"
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
    "explain": "Data descriptor побеждает instance __dict__. Правильный ответ: «наличие __set__/__delete__ меняет приоритет в lookup».",
    "group": "Метаклассы и типы",
    "id": "s488"
  },
  {
    "topic": "метаклассы",
    "q": "Что вернёт type(name, bases, ns) создаёт?",
    "options": [
      "новый класс",
      "экземпляр object",
      "модуль",
      "coroutine"
    ],
    "answer": 0,
    "explain": "Классы — объекты type. Правильный ответ: «новый класс». Метакласс создаёт класс так же, как класс создаёт экземпляр.",
    "group": "Метаклассы и типы",
    "id": "s489"
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
    "explain": "Метакласс контролирует создание класса. Правильный ответ: «M(...) при создании класса». Метакласс создаёт класс так же, как класс создаёт экземпляр.",
    "group": "Метаклассы и типы",
    "id": "s490"
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
    "explain": "Если есть нужные методы — подходит тип. Правильный ответ: «структурная типизация (duck typing для чекеров)».",
    "group": "Typing и dataclasses",
    "id": "s491"
  },
  {
    "topic": "typing",
    "q": "Что вернёт TypeVar bound=... ограничивает?",
    "options": [
      "верхнюю границу допустимых типов",
      "только runtime cast",
      "скорость",
      "GIL"
    ],
    "answer": 0,
    "explain": "Дженерики с ограничением. Правильный ответ: «верхнюю границу допустимых типов». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "s492"
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
    "explain": "Реализация одна — stubs/overloads для типов. Правильный ответ: «описать разные сигнатуры для чекера».",
    "group": "Typing и dataclasses",
    "id": "s493"
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
    "explain": "Единая точка конфигурации пакета. Правильный ответ: «метаданных/сборки (PEP 621 и др.)». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s494"
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
    "explain": "Предпочитай wheels в проде для скорости/репродьюса. Правильный ответ: «wheel — собранный дистрибутив; sdist — исходники для сборки».",
    "group": "Packaging и CI",
    "id": "s495"
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
    "explain": "Никогда не unpickle недоверенное. Правильный ответ: «RCE через произвольные объекты». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s496"
  },
  {
    "topic": "security",
    "q": "Что означает «secrets модуль лучше random для»?",
    "options": [
      "токенов/криптостойкой случайности",
      "shuffle списков UI",
      "range seed tests",
      "math.sin"
    ],
    "answer": 0,
    "explain": "OS CSPRNG. Правильный ответ: «токенов/криптостойкой случайности». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s497"
  },
  {
    "topic": "db",
    "q": "Что означает «READ COMMITTED не защищает от»?",
    "options": [
      "части anomalies (зависит от СУБД; phantom и т.д.)",
      "всего всегда",
      "только DDL",
      "только disk full"
    ],
    "answer": 0,
    "explain": "Знай модель изоляции своей БД. Правильный ответ: «части anomalies (зависит от СУБД; phantom и т.д.)».",
    "group": "Данные и распределёнка",
    "id": "s498"
  },
  {
    "topic": "cache",
    "q": "Что вернёт cache stampede / thundering herd?",
    "options": [
      "толпа одновременных пересчётов одного ключа",
      "нормальный hit ratio",
      "только CDN",
      "GIL"
    ],
    "answer": 0,
    "explain": "Lock/singleflight/early refresh. Правильный ответ: «толпа одновременных пересчётов одного ключа». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s499"
  },
  {
    "topic": "distributed",
    "q": "Что означает «идемпотентный API важен при»?",
    "options": [
      "ретраях сети: повтор не должен дважды списать деньги",
      "только GET cache",
      "только UDP",
      "GIL"
    ],
    "answer": 0,
    "explain": "Idempotency-Key, natural keys. Правильный ответ: «ретраях сети: повтор не должен дважды списать деньги».",
    "group": "Данные и распределёнка",
    "id": "s500"
  },
  {
    "topic": "distributed",
    "q": "Что вернёт at-least-once доставка значит?",
    "options": [
      "сообщение может прийти >1 раза → нужна идемпотентность",
      "ровно один раз always",
      "never",
      "only batch"
    ],
    "answer": 0,
    "explain": "Типично для очередей. Правильный ответ: «сообщение может прийти >1 раза → нужна идемпотентность». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s501"
  },
  {
    "topic": "architecture",
    "q": "Что означает «CQRS идея»?",
    "options": [
      "разделить модели/пути чтения и записи",
      "запретить SQL",
      "только microservices",
      "убрать БД"
    ],
    "answer": 0,
    "explain": "Сложные домены, разные нагрузки. Правильный ответ: «разделить модели/пути чтения и записи». Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s502"
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
    "explain": "Тестируемость и замена адаптеров. Правильный ответ: «ядро не зависит от деталей UI/БД». Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s503"
  },
  {
    "topic": "observability",
    "q": "Что означает «RED metrics для сервисов»?",
    "options": [
      "Rate, Errors, Duration",
      "RAM, EOF, Disk",
      "RPC, ETL, DDL",
      "only logs"
    ],
    "answer": 0,
    "explain": "Базовый набор SLO. Правильный ответ: «Rate, Errors, Duration». Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s504"
  },
  {
    "topic": "observability",
    "q": "Что вернёт structured logging лучше print тем, что?",
    "options": [
      "поля JSON/ключ-значение → поиск/алерты",
      "всегда быстрее",
      "без timestamp",
      "без уровней"
    ],
    "answer": 0,
    "explain": "Корреляция request_id и т.п. Правильный ответ: «поля JSON/ключ-значение → поиск/алерты». Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s505"
  },
  {
    "topic": "performance",
    "q": "Чем помогает когда __slots__ реально?",
    "options": [
      "много мелких объектов с фиксированными полями",
      "на одном singleton",
      "всегда на любом классе",
      "только dataclasses without fields"
    ],
    "answer": 0,
    "explain": "Меньше памяти на __dict__. Правильный ответ: «много мелких объектов с фиксированными полями». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s506"
  },
  {
    "topic": "performance",
    "q": "Что вернёт интернирование строк / constant folding?",
    "options": [
      "компилятор/рантайм могут переиспользовать объекты",
      "запрещены",
      "только в PyPy",
      "ломают =="
    ],
    "answer": 0,
    "explain": "Не строй логику на is для строк/int. Правильный ответ: «компилятор/рантайм могут переиспользовать объекты».",
    "group": "Stdlib и производительность",
    "id": "s507"
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
    "explain": "Меньше пересборок под каждый minor. Правильный ответ: «бинарная совместимость расширений across versions».",
    "group": "Нативные расширения",
    "id": "s508"
  },
  {
    "topic": "ctypes",
    "q": "Что означает «ctypes удобен для»?",
    "options": [
      "вызова C ABI без написания extension",
      "замены asyncio",
      "JIT",
      "typing"
    ],
    "answer": 0,
    "explain": "Цена: unsafe, ручные типы, нет pythonic errors. Правильный ответ: «вызова C ABI без написания extension».",
    "group": "Нативные расширения",
    "id": "s509"
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
    "explain": "Сильно замедляет; для prod — осторожно. Правильный ответ: «отладка/coverage на уровне событий».",
    "group": "Метаклассы и типы",
    "id": "s510"
  },
  {
    "topic": "errors",
    "q": "Что вернёт ExceptionGroup (3.11) нужен когда?",
    "options": [
      "несколько ошибок параллельно (TaskGroup)",
      "вместо Exception always",
      "только SyntaxError",
      "warnings"
    ],
    "answer": 0,
    "explain": "except* разбирает группу. Правильный ответ: «несколько ошибок параллельно (TaskGroup)».",
    "group": "Исключения и контекст",
    "id": "s511"
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
    "explain": "Пиши cancellation-safe cleanup. Правильный ответ: «CancelledError в await-точке; finally должен убирать ресурсы».",
    "group": "Asyncio",
    "id": "s512"
  },
  {
    "topic": "design",
    "q": "Что означает «law of demeter грубо»?",
    "options": [
      "не цепочй obj.a.b.c — говори с соседями",
      "больше getters always",
      "god object ok",
      "no DTOs"
    ],
    "answer": 0,
    "explain": "Меньше связности. Правильный ответ: «не цепочй obj.a.b.c — говори с соседями».",
    "group": "Архитектура и дизайн",
    "id": "s513"
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
    "explain": "Дополнение к example-based тестам. Правильный ответ: «краевые случаи генерацией входов». Тестирование: unit, integration, property-based, нагрузочные сценарии.",
    "group": "Тесты и качество",
    "id": "s514"
  },
  {
    "topic": "ci",
    "q": "Что означает «matrix builds проверяют»?",
    "options": [
      "несколько версий Python/OS",
      "только latest",
      "только mypy",
      "только black"
    ],
    "answer": 0,
    "explain": "Совместимость пакета. Правильный ответ: «несколько версий Python/OS».",
    "group": "Packaging и CI",
    "id": "s515"
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
    "explain": "Ленты/фиды — чаще cursor. Правильный ответ: «cursor стабильнее при вставках; offset проще но «прыгает»».",
    "group": "Веб и API",
    "id": "s516"
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
    "explain": "Выбор по контракту и экосистеме. Правильный ответ: «компактнее/схема; json человекочитаем».",
    "group": "Данные и распределёнка",
    "id": "s517"
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
    "explain": "Против синхронного stampede. Правильный ответ: «размазать истечения ключей во времени». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s518"
  },
  {
    "topic": "db",
    "q": "Что означает «connection pool exhaustion симптом»?",
    "options": [
      "запросы висят в ожидании свободного коннекта",
      "всегда CPU 100%",
      "только disk",
      "GIL"
    ],
    "answer": 0,
    "explain": "Таймауты, утечки, длинные транзакции. Правильный ответ: «запросы висят в ожидании свободного коннекта».",
    "group": "Данные и распределёнка",
    "id": "s519"
  },
  {
    "topic": "python",
    "q": "Что вернёт tomllib (3.11+) читает?",
    "options": [
      "TOML",
      "YAML",
      "INI only",
      "JSON5"
    ],
    "answer": 0,
    "explain": "Стандартная библиотека для чтения TOML.",
    "group": "CPython и память",
    "id": "s520"
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
    "explain": "Ускорение без смены языка. Правильный ответ: «байткод адаптируется под типы в hot path». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s521"
  },
  {
    "topic": "CPython",
    "q": "Что вернёт Что такое PyObject заголовок (упрощённо)?",
    "options": [
      "refcount + указатель на тип (и ещё поля)",
      "только данные без типа",
      "только GIL token",
      "только hash"
    ],
    "answer": 0,
    "explain": "Любой объект в CPython — PyObject*. Правильный ответ: «refcount + указатель на тип (и ещё поля)». Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s522"
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
    "explain": "Поэтому is для таких int может «случайно» работать. Правильный ответ: «переиспользование объектов, меньше аллокаций».",
    "group": "CPython и память",
    "id": "s523"
  },
  {
    "topic": "память",
    "q": "Что означает «цикл ссылок A→B→A собирает»?",
    "options": [
      "generational GC (detect cycles)",
      "только refcount",
      "never",
      "OS OOM killer only"
    ],
    "answer": 0,
    "explain": "refcount сам цикл не разорвёт. Правильный ответ: «generational GC (detect cycles)».",
    "group": "CPython и память",
    "id": "s524"
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
    "explain": "Локальные — массив быстрого доступа. Правильный ответ: «локальные быстрее глобальных/builtins lookup».",
    "group": "CPython и память",
    "id": "s525"
  },
  {
    "topic": "import",
    "q": "Что означает «sys.modules кэширует»?",
    "options": [
      "уже загруженные модули по имени",
      "только bytecode файлы",
      "pip packages",
      "типы"
    ],
    "answer": 0,
    "explain": "Повторный import берёт из кэша. Правильный ответ: «уже загруженные модули по имени».",
    "group": "Stdlib и производительность",
    "id": "s526"
  },
  {
    "topic": "import",
    "q": "Что вернёт circular import типичный симптом?",
    "options": [
      "AttributeError: partially initialized module",
      "SyntaxError всегда",
      "GIL deadlock only",
      "segfault"
    ],
    "answer": 0,
    "explain": "Лечится локальными import / перестройкой зависимостей. Правильный ответ: «AttributeError: partially initialized module».",
    "group": "Stdlib и производительность",
    "id": "s527"
  },
  {
    "topic": "метаклассы",
    "q": "Что вернёт type(name, bases, namespace) создаёт?",
    "options": [
      "новый класс",
      "экземпляр only",
      "модуль",
      "функцию"
    ],
    "answer": 0,
    "explain": "class statement — синтаксический сахар над этим. Правильный ответ: «новый класс». Метакласс создаёт класс так же, как класс создаёт экземпляр.",
    "group": "Метаклассы и типы",
    "id": "s528"
  },
  {
    "topic": "метаклассы",
    "q": "Что означает «__init_subclass__ вызывается»?",
    "options": [
      "при создании подкласса",
      "при import любого модуля",
      "при del",
      "только metaclass"
    ],
    "answer": 0,
    "explain": "Хуки регистрации без своего metaclass. Правильный ответ: «при создании подкласса». Метакласс создаёт класс так же, как класс создаёт экземпляр.",
    "group": "Метаклассы и типы",
    "id": "s529"
  },
  {
    "topic": "метаклассы",
    "q": "Что означает «__set_name__ у дескриптора»?",
    "options": [
      "узнаёт имя атрибута в классе-владельце",
      "ставит __name__ функции",
      "GIL name",
      "pickle name"
    ],
    "answer": 0,
    "explain": "PEP 487. Правильный ответ: «узнаёт имя атрибута в классе-владельце». Метакласс создаёт класс так же, как класс создаёт экземпляр.",
    "group": "Метаклассы и типы",
    "id": "s530"
  },
  {
    "topic": "дескрипторы",
    "q": "Что вернёт data descriptor (с __set__) побеждает?",
    "options": [
      "instance __dict__",
      "всегда non-data",
      "только slots",
      "ничего"
    ],
    "answer": 0,
    "explain": "Порядок поиска атрибутов важен. Правильный ответ: «instance __dict__». Дескрипторы управляют доступом к атрибутам через __get__ / __set__ / __delete__.",
    "group": "Метаклассы и типы",
    "id": "s531"
  },
  {
    "topic": "typing",
    "q": "Что вернёт ParamSpec / Concatenate нужны для?",
    "options": [
      "типизации декораторов, сохраняющих сигнатуру",
      "только dataclasses",
      "SQL",
      "GIL"
    ],
    "answer": 0,
    "explain": "PEP 612. Правильный ответ: «типизации декораторов, сохраняющих сигнатуру». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "s532"
  },
  {
    "topic": "typing",
    "q": "Что вернёт TypeGuard / TypeIs помогают?",
    "options": [
      "сузить тип после user-defined проверки",
      "ускорить runtime",
      "заменить isinstance ban",
      "GC"
    ],
    "answer": 0,
    "explain": "Для чекеров типов. Правильный ответ: «сузить тип после user-defined проверки». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "s533"
  },
  {
    "topic": "concurrency",
    "q": "Что вернёт free-threaded CPython (3.13+) меняет?",
    "options": [
      "опциональная сборка без GIL",
      "удаляет потоки",
      "запрещает multiprocessing",
      "только asyncio"
    ],
    "answer": 0,
    "explain": "Новая модель памяти/потокобезопасности расширений. Правильный ответ: «опциональная сборка без GIL».",
    "group": "Потоки, процессы, GIL",
    "id": "s534"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт TaskGroup (3.11) при ошибке в задаче?",
    "options": [
      "отменяет siblings и поднимает ExceptionGroup",
      "глотает",
      "убивает процесс",
      "игнорит cancel"
    ],
    "answer": 0,
    "explain": "Структурная конкурентность. Правильный ответ: «отменяет siblings и поднимает ExceptionGroup». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "s535"
  },
  {
    "topic": "asyncio",
    "q": "Выбери верный вариант: почему нельзя вызывать blocking time.sleep в корутине?",
    "options": [
      "блокирует event loop целиком",
      "ломает только эту task",
      "запрещено синтаксисом",
      "нужен GIL off"
    ],
    "answer": 0,
    "explain": "asyncio.sleep / to_thread / executor. Правильный ответ: «блокирует event loop целиком». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "s536"
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
    "explain": "Поэтому default start method часто spawn. Правильный ответ: «небезопасное состояние lock/threads после fork».",
    "group": "Потоки, процессы, GIL",
    "id": "s537"
  },
  {
    "topic": "signals",
    "q": "Что означает «обработчик сигнала в CPython выполняется»?",
    "options": [
      "между байткод-инструкциями основного потока",
      "мгновенно в любом потоке",
      "только в C",
      "в GC"
    ],
    "answer": 0,
    "explain": "Ограничения на то, что безопасно делать в handler. Правильный ответ: «между байткод-инструкциями основного потока».",
    "group": "Потоки, процессы, GIL",
    "id": "s538"
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
    "explain": "pickle выполняет код при десериализации. Правильный ответ: «RCE-риск — нельзя». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s539"
  },
  {
    "topic": "security",
    "q": "Что означает «sql injection лечится»?",
    "options": [
      "параметризованными запросами / ORM bind",
      "экранированием вручную через replace",
      "uppercase SQL",
      "GIL"
    ],
    "answer": 0,
    "explain": "Никогда не склеивай SQL строками с user input. Правильный ответ: «параметризованными запросами / ORM bind».",
    "group": "Безопасность",
    "id": "s540"
  },
  {
    "topic": "security",
    "q": "Выбери верный вариант: timing attack на сравнение секретов — защита?",
    "options": [
      "hmac.compare_digest / secrets.compare_digest",
      "обычный ==",
      "len() check only",
      "hash() =="
    ],
    "answer": 0,
    "explain": "Константное по времени сравнение. Правильный ответ: «hmac.compare_digest / secrets.compare_digest». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s541"
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
    "explain": "Валидируй/проксируй исходящие запросы. Правильный ответ: «сервер ходит по URL от пользователя во внутреннюю сеть».",
    "group": "Безопасность",
    "id": "s542"
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
    "explain": "Клиент присылает уникальный ключ операции. Правильный ответ: «безопасный retry без двойного списания».",
    "group": "Веб и API",
    "id": "s543"
  },
  {
    "topic": "api",
    "q": "Что означает «rate limit 429 — клиенту стоит»?",
    "options": [
      "backoff + Retry-After",
      "долбить без паузы",
      "сменить на POST",
      "игнор"
    ],
    "answer": 0,
    "explain": "Иначе бан/шторм. Правильный ответ: «backoff + Retry-After».",
    "group": "Веб и API",
    "id": "s544"
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
    "explain": "Оптимистичные блокировки. Правильный ответ: «нужны ETag/version / if-match / транзакции».",
    "group": "Веб и API",
    "id": "s545"
  },
  {
    "topic": "architecture",
    "q": "Что означает «outbox pattern решает»?",
    "options": [
      "атомарность записи в БД + публикации события",
      "только кэш",
      "GIL",
      "UI state"
    ],
    "answer": 0,
    "explain": "Событие пишется в outbox-таблицу в той же транзакции. Правильный ответ: «атомарность записи в БД + публикации события».",
    "group": "Архитектура и дизайн",
    "id": "s546"
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
    "explain": "В микросервисах чаще saga. Правильный ответ: «saga — локальные транзакции + компенсации; 2PC — распределённый commit».",
    "group": "Архитектура и дизайн",
    "id": "s547"
  },
  {
    "topic": "architecture",
    "q": "Что означает «backpressure означает»?",
    "options": [
      "потребитель сигналит замедлить производителя",
      "больше RAM always",
      "drop all metrics",
      "только TCP window в Python"
    ],
    "answer": 0,
    "explain": "Очереди, async streams, HTTP/2 windows…. Правильный ответ: «потребитель сигналит замедлить производителя».",
    "group": "Архитектура и дизайн",
    "id": "s548"
  },
  {
    "topic": "distributed",
    "q": "Что вернёт exactly-once в реальности часто?",
    "options": [
      "at-least-once + идемпотентность на приёме",
      "бесплатно в любой очереди",
      "только UDP",
      "GIL guarantee"
    ],
    "answer": 0,
    "explain": "Энд-ту-энд exactly-once дорог/условен. Правильный ответ: «at-least-once + идемпотентность на приёме».",
    "group": "Данные и распределёнка",
    "id": "s549"
  },
  {
    "topic": "distributed",
    "q": "Что означает «clock skew ломает»?",
    "options": [
      "логику по wall-clock без NTP/logical clocks",
      "только SSD",
      "только GIL",
      "hash()"
    ],
    "answer": 0,
    "explain": "Лучше monotonic / version vectors где нужно. Правильный ответ: «логику по wall-clock без NTP/logical clocks».",
    "group": "Данные и распределёнка",
    "id": "s550"
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
    "explain": "Index-only scan. Правильный ответ: «индекс, из которого можно ответить без обращения к таблице». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s551"
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
    "explain": "Lock/singleflight, soft TTL, jitter. Правильный ответ: «масса запросов одновременно пересчитывает один ключ».",
    "group": "Данные и распределёнка",
    "id": "s552"
  },
  {
    "topic": "cache",
    "q": "Что означает «negative caching кэширует»?",
    "options": [
      "факт отсутствия (404/miss) на короткое время",
      "только hits",
      "пароли",
      "байткод"
    ],
    "answer": 0,
    "explain": "Против повторных дорогих miss. Правильный ответ: «факт отсутствия (404/miss) на короткое время». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s553"
  },
  {
    "topic": "serialization",
    "q": "Что вернёт почему protobuf/schema evolution важны?",
    "options": [
      "совместимость клиентов при изменении полей",
      "красивый JSON",
      "GIL",
      "только скорость"
    ],
    "answer": 0,
    "explain": "Правила reserved/optional/default. Правильный ответ: «совместимость клиентов при изменении полей».",
    "group": "Данные и распределёнка",
    "id": "s554"
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
    "explain": "Три столпа observability. Правильный ответ: «trace — путь запроса; log — события; metric — агрегаты».",
    "group": "Observability и качество",
    "id": "s555"
  },
  {
    "topic": "observability",
    "q": "В чём риск cardinality взрыв в метках —?",
    "options": [
      "миллионы time series → дорого/медленно",
      "только prettier graphs",
      "безопасность",
      "GIL"
    ],
    "answer": 0,
    "explain": "Не клади user_id в label Prometheus без нужды. Правильный ответ: «миллионы time series → дорого/медленно».",
    "group": "Observability и качество",
    "id": "s556"
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
    "explain": "Limited API. Правильный ответ: «один wheel на несколько версий CPython». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s557"
  },
  {
    "topic": "C-API",
    "q": "Что вернёт PyErr_SetString + return NULL — паттерн?",
    "options": [
      "сообщить об ошибке в Python из C",
      "успех",
      "отключить GC",
      "release GIL"
    ],
    "answer": 0,
    "explain": "Вызывающая сторона проверяет ошибку. Правильный ответ: «сообщить об ошибке в Python из C». Относится к внутренностям CPython и написанию C-расширений, не к обычному прикладному коду.",
    "group": "Нативные расширения",
    "id": "s558"
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
    "explain": "Нет защиты памяти Python. Правильный ответ: «segfault/UB при неверных типах/lifetime».",
    "group": "Нативные расширения",
    "id": "s559"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: когда профилировать преждевременно — плохо; но первый инструмент?",
    "options": [
      "cProfile / py-spy / scalene — по задаче",
      "сразу переписать на C",
      "отключить GC навсегда",
      "больше print"
    ],
    "answer": 0,
    "explain": "Измеряй, потом оптимизируй. Правильный ответ: «cProfile / py-spy / scalene — по задаче». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s560"
  },
  {
    "topic": "performance",
    "q": "Что вернёт vectorization (numpy) выигрывает за счёт?",
    "options": [
      "C-циклов без GIL-питона на элемент",
      "большего числа потоков Python always",
      "pickle",
      "f-string"
    ],
    "answer": 0,
    "explain": "Меньше интерпретации байткода. Правильный ответ: «C-циклов без GIL-питона на элемент». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s561"
  },
  {
    "topic": "testing",
    "q": "Что означает «mutation testing проверяет»?",
    "options": [
      "ловят ли тесты намеренно испорченный код",
      "только coverage %",
      "perf",
      "типы"
    ],
    "answer": 0,
    "explain": "Дополнение к coverage. Правильный ответ: «ловят ли тесты намеренно испорченный код». Тестирование: unit, integration, property-based, нагрузочные сценарии.",
    "group": "Тесты и качество",
    "id": "s562"
  },
  {
    "topic": "testing",
    "q": "Что вернёт contract / consumer-driven tests полезны когда?",
    "options": [
      "много сервисов и независимые релизы",
      "один монолит без API",
      "только UI",
      "GIL"
    ],
    "answer": 0,
    "explain": "Фиксируют ожидания потребителя API. Правильный ответ: «много сервисов и независимые релизы». Тестирование: unit, integration, property-based, нагрузочные сценарии.",
    "group": "Тесты и качество",
    "id": "s563"
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
    "explain": "DDD: не протекает внешняя модель. Правильный ответ: «адаптер, изолирующий домен от чужой модели/legacy».",
    "group": "Архитектура и дизайн",
    "id": "s564"
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
    "explain": "Нужны TTL флагов и уборка. Правильный ответ: «мертвый код, комбинаторный взрыв состояний».",
    "group": "Архитектура и дизайн",
    "id": "s565"
  },
  {
    "topic": "errors",
    "q": "Что вернёт except* (3.11) работает с?",
    "options": [
      "ExceptionGroup",
      "любым Exception одинаково как except",
      "только BaseExceptionGroup ban",
      "warnings"
    ],
    "answer": 0,
    "explain": "Распаковка групп ошибок. Правильный ответ: «ExceptionGroup».",
    "group": "Исключения и контекст",
    "id": "s566"
  },
  {
    "topic": "python",
    "q": "Что означает «PEP 703 связан с»?",
    "options": [
      "делает GIL опциональным",
      "pattern matching",
      "tomllib",
      "dataclasses"
    ],
    "answer": 0,
    "explain": "Free-threading initiative. Правильный ответ: «делает GIL опциональным».",
    "group": "CPython и память",
    "id": "s567"
  },
  {
    "topic": "runtime",
    "q": "Что означает «faulthandler полезен чтобы»?",
    "options": [
      "дампить трейсбеки при крашах/сигналах",
      "ускорить код",
      "типизировать",
      "убрать GC"
    ],
    "answer": 0,
    "explain": "Отладка зависаний и фатальных ошибок. Правильный ответ: «дампить трейсбеки при крашах/сигналах».",
    "group": "Метаклассы и типы",
    "id": "s568"
  },
  {
    "topic": "performance",
    "q": "Что вернёт Сложность list.append?",
    "options": [
      "O(1) амортизированно",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "Большая O для list.append. Правильный ответ: «O(1) амортизированно». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s569"
  },
  {
    "topic": "performance",
    "q": "Что вернёт Сложность list.insert(0, x)?",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explain": "Большая O для list.insert(0, x). Правильный ответ: «O(n)». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s570"
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
    "explain": "Большая O для dict[key]. Правильный ответ: «O(1) амортизированно». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s571"
  },
  {
    "topic": "performance",
    "q": "Что вернёт Сложность set.add?",
    "options": [
      "O(1) амортизированно",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "Большая O для set.add. Правильный ответ: «O(1) амортизированно». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s572"
  },
  {
    "topic": "performance",
    "q": "Что вернёт Сложность sorted(list)?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(n²) всегда"
    ],
    "answer": 0,
    "explain": "Большая O для sorted(list). Правильный ответ: «O(n log n)». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s573"
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
    "explain": "Большая O для heapq.heappush. Правильный ответ: «O(log n)». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s574"
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
    "explain": "Большая O для bisect.bisect_left. Правильный ответ: «O(log n)». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s575"
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
    "explain": "Большая O для deque.popleft. Правильный ответ: «O(1)». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s576"
  },
  {
    "topic": "performance",
    "q": "Что вернёт Сложность str += в цикле n раз?",
    "options": [
      "O(n²) типично",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 0,
    "explain": "Большая O для str += в цикле n раз. Правильный ответ: «O(n²) типично». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s577"
  },
  {
    "topic": "performance",
    "q": "Что вернёт Сложность ''.join(parts)?",
    "options": [
      "O(n)",
      "O(n²)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explain": "Большая O для ''.join(parts). Правильный ответ: «O(n)». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s578"
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
    "explain": "Добавляй jitter / soft TTL / singleflight. Правильный ответ: «синхронный stampede при массовом истечении».",
    "group": "Данные и распределёнка",
    "id": "s579"
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
    "explain": "Короткий TTL на отсутствие. Правильный ответ: «не долбить origin на повторных miss/404». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s580"
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
    "explain": "Добавляй jitter / soft TTL / singleflight. Правильный ответ: «синхронный stampede при массовом истечении».",
    "group": "Данные и распределёнка",
    "id": "s581"
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
    "explain": "Короткий TTL на отсутствие. Правильный ответ: «не долбить origin на повторных miss/404». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s582"
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
    "explain": "Добавляй jitter / soft TTL / singleflight. Правильный ответ: «синхронный stampede при массовом истечении».",
    "group": "Данные и распределёнка",
    "id": "s583"
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
    "explain": "Короткий TTL на отсутствие. Правильный ответ: «не долбить origin на повторных miss/404». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s584"
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
    "explain": "Добавляй jitter / soft TTL / singleflight. Правильный ответ: «синхронный stampede при массовом истечении».",
    "group": "Данные и распределёнка",
    "id": "s585"
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
    "explain": "Короткий TTL на отсутствие. Правильный ответ: «не долбить origin на повторных miss/404». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s586"
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
    "explain": "Добавляй jitter / soft TTL / singleflight. Правильный ответ: «синхронный stampede при массовом истечении».",
    "group": "Данные и распределёнка",
    "id": "s587"
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
    "explain": "Короткий TTL на отсутствие. Правильный ответ: «не долбить origin на повторных miss/404». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s588"
  },
  {
    "topic": "cache",
    "q": "Что означает «hot key split на 2 шардов идея»?",
    "options": [
      "размазать нагрузку популярного ключа",
      "уменьшить TTL до 0",
      "один box сильнее",
      "запретить cache"
    ],
    "answer": 0,
    "explain": "Перекос ключей. Правильный ответ: «размазать нагрузку популярного ключа». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s589"
  },
  {
    "topic": "cache",
    "q": "Что означает «hot key split на 4 шардов идея»?",
    "options": [
      "размазать нагрузку популярного ключа",
      "уменьшить TTL до 0",
      "один box сильнее",
      "запретить cache"
    ],
    "answer": 0,
    "explain": "Перекос ключей. Правильный ответ: «размазать нагрузку популярного ключа». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s590"
  },
  {
    "topic": "cache",
    "q": "Что означает «hot key split на 8 шардов идея»?",
    "options": [
      "размазать нагрузку популярного ключа",
      "уменьшить TTL до 0",
      "один box сильнее",
      "запретить cache"
    ],
    "answer": 0,
    "explain": "Перекос ключей. Правильный ответ: «размазать нагрузку популярного ключа». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s591"
  },
  {
    "topic": "cache",
    "q": "Что означает «hot key split на 16 шардов идея»?",
    "options": [
      "размазать нагрузку популярного ключа",
      "уменьшить TTL до 0",
      "один box сильнее",
      "запретить cache"
    ],
    "answer": 0,
    "explain": "Перекос ключей. Правильный ответ: «размазать нагрузку популярного ключа». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s592"
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
    "explain": "Не усиливай шторм. Правильный ответ: «exponential backoff + jitter (+ Retry-After)».",
    "group": "Веб и API",
    "id": "s593"
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
    "explain": "Не усиливай шторм. Правильный ответ: «exponential backoff + jitter (+ Retry-After)».",
    "group": "Веб и API",
    "id": "s594"
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
    "explain": "Не усиливай шторм. Правильный ответ: «exponential backoff + jitter (+ Retry-After)».",
    "group": "Веб и API",
    "id": "s595"
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
    "explain": "Не усиливай шторм. Правильный ответ: «exponential backoff + jitter (+ Retry-After)».",
    "group": "Веб и API",
    "id": "s596"
  },
  {
    "topic": "api",
    "q": "Что вернёт offset-пагинация page_size=20 минус?",
    "options": [
      "«прыжки» при вставках; глубокий offset дорог",
      "нельзя реализовать в SQL",
      "всегда лучше cursor",
      "запрещена REST"
    ],
    "answer": 0,
    "explain": "Для лент чаще cursor. Правильный ответ: ««прыжки» при вставках; глубокий offset дорог».",
    "group": "Веб и API",
    "id": "s597"
  },
  {
    "topic": "api",
    "q": "Что вернёт offset-пагинация page_size=50 минус?",
    "options": [
      "«прыжки» при вставках; глубокий offset дорог",
      "нельзя реализовать в SQL",
      "всегда лучше cursor",
      "запрещена REST"
    ],
    "answer": 0,
    "explain": "Для лент чаще cursor. Правильный ответ: ««прыжки» при вставках; глубокий offset дорог».",
    "group": "Веб и API",
    "id": "s598"
  },
  {
    "topic": "api",
    "q": "Что вернёт offset-пагинация page_size=100 минус?",
    "options": [
      "«прыжки» при вставках; глубокий offset дорог",
      "нельзя реализовать в SQL",
      "всегда лучше cursor",
      "запрещена REST"
    ],
    "answer": 0,
    "explain": "Для лент чаще cursor. Правильный ответ: ««прыжки» при вставках; глубокий offset дорог».",
    "group": "Веб и API",
    "id": "s599"
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
    "explain": "Совместимость. Правильный ответ: «эволюция контракта без ломания клиентов».",
    "group": "Веб и API",
    "id": "s600"
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
    "explain": "Совместимость. Правильный ответ: «эволюция контракта без ломания клиентов».",
    "group": "Веб и API",
    "id": "s601"
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
    "explain": "Совместимость. Правильный ответ: «эволюция контракта без ломания клиентов».",
    "group": "Веб и API",
    "id": "s602"
  },
  {
    "topic": "db",
    "q": "Что вернёт 1 запрос списка + 1 связанных — симптом?",
    "options": [
      "лишние round-trip в БД (ORM lazy)",
      "слишком большой JOIN всегда",
      "только отсутствие индекса PK",
      "GIL"
    ],
    "answer": 0,
    "explain": "Лечится eager/join/IN. Правильный ответ: «лишние round-trip в БД (ORM lazy)». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s603"
  },
  {
    "topic": "db",
    "q": "Что вернёт 1 запрос списка + 10 связанных — симптом?",
    "options": [
      "лишние round-trip в БД (ORM lazy)",
      "слишком большой JOIN всегда",
      "только отсутствие индекса PK",
      "GIL"
    ],
    "answer": 0,
    "explain": "Лечится eager/join/IN. Правильный ответ: «лишние round-trip в БД (ORM lazy)». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s604"
  },
  {
    "topic": "db",
    "q": "Что вернёт 1 запрос списка + 100 связанных — симптом?",
    "options": [
      "лишние round-trip в БД (ORM lazy)",
      "слишком большой JOIN всегда",
      "только отсутствие индекса PK",
      "GIL"
    ],
    "answer": 0,
    "explain": "Лечится eager/join/IN. Правильный ответ: «лишние round-trip в БД (ORM lazy)». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s605"
  },
  {
    "topic": "db",
    "q": "Что вернёт 1 запрос списка + 1000 связанных — симптом?",
    "options": [
      "лишние round-trip в БД (ORM lazy)",
      "слишком большой JOIN всегда",
      "только отсутствие индекса PK",
      "GIL"
    ],
    "answer": 0,
    "explain": "Лечится eager/join/IN. Правильный ответ: «лишние round-trip в БД (ORM lazy)». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s606"
  },
  {
    "topic": "db",
    "q": "Что такое При READ COMMITTED write skew в контексте Python?",
    "options": [
      "возможен или нет в зависимости от СУБД/реализации — проверяй документацию",
      "невозможен никогда нигде",
      "только в MyISAM",
      "только NoSQL"
    ],
    "answer": 0,
    "explain": "Теория изоляций ≠ конкретный движок. Правильный ответ: «возможен или нет в зависимости от СУБД/реализации — проверяй документацию».",
    "group": "Данные и распределёнка",
    "id": "s607"
  },
  {
    "topic": "db",
    "q": "Что такое При REPEATABLE READ write skew в контексте Python?",
    "options": [
      "возможен или нет в зависимости от СУБД/реализации — проверяй документацию",
      "невозможен никогда нигде",
      "только в MyISAM",
      "только NoSQL"
    ],
    "answer": 0,
    "explain": "Теория изоляций ≠ конкретный движок. Правильный ответ: «возможен или нет в зависимости от СУБД/реализации — проверяй документацию».",
    "group": "Данные и распределёнка",
    "id": "s608"
  },
  {
    "topic": "db",
    "q": "Что такое При SERIALIZABLE write skew в контексте Python?",
    "options": [
      "возможен или нет в зависимости от СУБД/реализации — проверяй документацию",
      "невозможен никогда нигде",
      "только в MyISAM",
      "только NoSQL"
    ],
    "answer": 0,
    "explain": "Теория изоляций ≠ конкретный движок. Правильный ответ: «возможен или нет в зависимости от СУБД/реализации — проверяй документацию».",
    "group": "Данные и распределёнка",
    "id": "s609"
  },
  {
    "topic": "db",
    "q": "Что вернёт pool_size=5 исчерпан — симптом?",
    "options": [
      "запросы ждут коннект / таймауты",
      "CPU 100% всегда",
      "только disk full",
      "GIL deadlock only"
    ],
    "answer": 0,
    "explain": "Утечки, длинные транзакции, мало пула. Правильный ответ: «запросы ждут коннект / таймауты». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s610"
  },
  {
    "topic": "db",
    "q": "Что вернёт pool_size=10 исчерпан — симптом?",
    "options": [
      "запросы ждут коннект / таймауты",
      "CPU 100% всегда",
      "только disk full",
      "GIL deadlock only"
    ],
    "answer": 0,
    "explain": "Утечки, длинные транзакции, мало пула. Правильный ответ: «запросы ждут коннект / таймауты». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s611"
  },
  {
    "topic": "db",
    "q": "Что вернёт pool_size=20 исчерпан — симптом?",
    "options": [
      "запросы ждут коннект / таймауты",
      "CPU 100% всегда",
      "только disk full",
      "GIL deadlock only"
    ],
    "answer": 0,
    "explain": "Утечки, длинные транзакции, мало пула. Правильный ответ: «запросы ждут коннект / таймауты». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s612"
  },
  {
    "topic": "db",
    "q": "Что вернёт pool_size=50 исчерпан — симптом?",
    "options": [
      "запросы ждут коннект / таймауты",
      "CPU 100% всегда",
      "только disk full",
      "GIL deadlock only"
    ],
    "answer": 0,
    "explain": "Утечки, длинные транзакции, мало пула. Правильный ответ: «запросы ждут коннект / таймауты». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s613"
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
    "explain": "можно потерять; без дублей. Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s614"
  },
  {
    "topic": "distributed",
    "q": "Выбери верный вариант: Семантика доставки at-least-once?",
    "options": [
      "дубли возможны → идемпотентность",
      "всегда бесплатна в любой очереди",
      "только UDP",
      "гарантируется GIL"
    ],
    "answer": 0,
    "explain": "дубли возможны → идемпотентность. Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s615"
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
    "explain": "на практике часто = at-least-once + идемпотентный приём. Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s616"
  },
  {
    "topic": "distributed",
    "q": "Что вернёт Кворум в Raft/Consul-подобном кластере из 3 узлов?",
    "options": [
      "большинство: 2",
      "3",
      "1",
      "2"
    ],
    "answer": 0,
    "explain": "Большинство для выбора лидера/коммита. Правильный ответ: «большинство: 2». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s617"
  },
  {
    "topic": "distributed",
    "q": "Что вернёт Кворум в Raft/Consul-подобном кластере из 5 узлов?",
    "options": [
      "большинство: 3",
      "5",
      "1",
      "4"
    ],
    "answer": 0,
    "explain": "Большинство для выбора лидера/коммита. Правильный ответ: «большинство: 3». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s618"
  },
  {
    "topic": "distributed",
    "q": "Что вернёт Кворум в Raft/Consul-подобном кластере из 7 узлов?",
    "options": [
      "большинство: 4",
      "7",
      "1",
      "6"
    ],
    "answer": 0,
    "explain": "Большинство для выбора лидера/коммита. Правильный ответ: «большинство: 4». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s619"
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
    "explain": "Баланс sensitivity vs stability. Правильный ответ: «ложные failover при GC/сети». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s620"
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
    "explain": "Баланс sensitivity vs stability. Правильный ответ: «ложные failover при GC/сети». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s621"
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
    "explain": "Баланс sensitivity vs stability. Правильный ответ: «ложные failover при GC/сети». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s622"
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
    "explain": "Баланс sensitivity vs stability. Правильный ответ: «ложные failover при GC/сети». Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s623"
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
    "explain": "Не доверяй бинарным/пайтон-десериализаторам. Правильный ответ: «риск RCE / выполнения кода — нельзя».",
    "group": "Безопасность",
    "id": "s624"
  },
  {
    "topic": "security",
    "q": "Что вернёт Десериализация через yaml.load (unsafe) из недоверенного источника?",
    "options": [
      "риск RCE / выполнения кода — нельзя",
      "безопасно как json",
      "только DoS",
      "ok за HTTPS"
    ],
    "answer": 0,
    "explain": "Не доверяй бинарным/пайтон-десериализаторам. Правильный ответ: «риск RCE / выполнения кода — нельзя».",
    "group": "Безопасность",
    "id": "s625"
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
    "explain": "Не доверяй бинарным/пайтон-десериализаторам. Правильный ответ: «риск RCE / выполнения кода — нельзя».",
    "group": "Безопасность",
    "id": "s626"
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
    "explain": "Не доверяй бинарным/пайтон-десериализаторам. Правильный ответ: «риск RCE / выполнения кода — нельзя».",
    "group": "Безопасность",
    "id": "s627"
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
    "explain": "Redaction в логах. Правильный ответ: «осторожно: секреты/PII — редактируй». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s628"
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
    "explain": "Redaction в логах. Правильный ответ: «осторожно: секреты/PII — редактируй». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s629"
  },
  {
    "topic": "security",
    "q": "Что вернёт Логировать сырой заголовок X-API-Key?",
    "options": [
      "осторожно: секреты/PII — редактируй",
      "всегда полностью",
      "никогда никакие заголовки",
      "только в debug print"
    ],
    "answer": 0,
    "explain": "Redaction в логах. Правильный ответ: «осторожно: секреты/PII — редактируй». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s630"
  },
  {
    "topic": "security",
    "q": "Что вернёт Логировать сырой заголовок X-Forwarded-For?",
    "options": [
      "осторожно: секреты/PII — редактируй",
      "всегда полностью",
      "никогда никакие заголовки",
      "только в debug print"
    ],
    "answer": 0,
    "explain": "Redaction в логах. Правильный ответ: «осторожно: секреты/PII — редактируй». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s631"
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
    "explain": "Классика AppSec. Правильный ответ: «инъекции / path traversal / open redirect — валидируй и параметризуй».",
    "group": "Безопасность",
    "id": "s632"
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
    "explain": "Классика AppSec. Правильный ответ: «инъекции / path traversal / open redirect — валидируй и параметризуй».",
    "group": "Безопасность",
    "id": "s633"
  },
  {
    "topic": "security",
    "q": "Что вернёт open(user_path)?",
    "options": [
      "инъекции / path traversal / open redirect — валидируй и параметризуй",
      "ускоряет код",
      "требуется PEP 8",
      "безопасно в FastAPI всегда"
    ],
    "answer": 0,
    "explain": "Классика AppSec. Правильный ответ: «инъекции / path traversal / open redirect — валидируй и параметризуй».",
    "group": "Безопасность",
    "id": "s634"
  },
  {
    "topic": "security",
    "q": "Что вернёт redirect=user_url?",
    "options": [
      "инъекции / path traversal / open redirect — валидируй и параметризуй",
      "ускоряет код",
      "требуется PEP 8",
      "безопасно в FastAPI всегда"
    ],
    "answer": 0,
    "explain": "Классика AppSec. Правильный ответ: «инъекции / path traversal / open redirect — валидируй и параметризуй».",
    "group": "Безопасность",
    "id": "s635"
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
    "explain": "Комбинируй head + tail sampling. Правильный ответ: «можно пропустить редкие ошибки — нужен tail-based/error sampling».",
    "group": "Observability и качество",
    "id": "s636"
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
    "explain": "Комбинируй head + tail sampling. Правильный ответ: «можно пропустить редкие ошибки — нужен tail-based/error sampling».",
    "group": "Observability и качество",
    "id": "s637"
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
    "explain": "Комбинируй head + tail sampling. Правильный ответ: «можно пропустить редкие ошибки — нужен tail-based/error sampling».",
    "group": "Observability и качество",
    "id": "s638"
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
    "explain": "Комбинируй head + tail sampling. Правильный ответ: «можно пропустить редкие ошибки — нужен tail-based/error sampling».",
    "group": "Observability и качество",
    "id": "s639"
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
    "explain": "Cardinality — главный враг метрик. Правильный ответ: «опасно взрывом time series». Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s640"
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
    "explain": "Cardinality — главный враг метрик. Правильный ответ: «обычно ок как low-cardinality/trace id не в metric labels».",
    "group": "Observability и качество",
    "id": "s641"
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
    "explain": "Cardinality — главный враг метрик. Правильный ответ: «опасно взрывом time series». Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s642"
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
    "explain": "Cardinality — главный враг метрик. Правильный ответ: «опасно взрывом time series». Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s643"
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
    "explain": "Совместимость пакета. Правильный ответ: «ловить несовместимости версий». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s644"
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
    "explain": "Совместимость пакета. Правильный ответ: «ловить несовместимости версий». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s645"
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
    "explain": "Совместимость пакета. Правильный ответ: «ловить несовместимости версий». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s646"
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
    "explain": "Совместимость пакета. Правильный ответ: «ловить несовместимости версий». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s647"
  },
  {
    "topic": "байткод",
    "q": "Что означает «Опкод LOAD_FAST связан с»?",
    "options": [
      "локальная переменная — быстрый доступ",
      "сетевым I/O",
      "только GC",
      "импортом pip"
    ],
    "answer": 0,
    "explain": "LOAD_FAST: локальная переменная — быстрый доступ.",
    "group": "CPython и память",
    "id": "s648"
  },
  {
    "topic": "байткод",
    "q": "Что означает «Опкод LOAD_GLOBAL связан с»?",
    "options": [
      "глобальная / должее lookup",
      "сетевым I/O",
      "только GC",
      "импортом pip"
    ],
    "answer": 0,
    "explain": "LOAD_GLOBAL: глобальная / должее lookup.",
    "group": "CPython и память",
    "id": "s649"
  },
  {
    "topic": "байткод",
    "q": "Что означает «Опкод CALL связан с»?",
    "options": [
      "вызов функции",
      "сетевым I/O",
      "только GC",
      "импортом pip"
    ],
    "answer": 0,
    "explain": "CALL: вызов функции.",
    "group": "CPython и память",
    "id": "s650"
  },
  {
    "topic": "байткод",
    "q": "Что означает «Опкод BINARY_OP связан с»?",
    "options": [
      "арифметика/операции",
      "сетевым I/O",
      "только GC",
      "импортом pip"
    ],
    "answer": 0,
    "explain": "BINARY_OP: арифметика/операции.",
    "group": "CPython и память",
    "id": "s651"
  },
  {
    "topic": "CPython",
    "q": "Что вернёт Для int 0: надёжно ли `a is b` при равных значениях?",
    "options": [
      "может быть True из‑за интернирования",
      "всегда True по языку",
      "всегда False по языку",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "часто один и тот же объект (intern маленьких int). Правильный ответ: «может быть True из‑за интернирования».",
    "group": "CPython и память",
    "id": "s652"
  },
  {
    "topic": "CPython",
    "q": "Что вернёт Для int 1: надёжно ли `a is b` при равных значениях?",
    "options": [
      "может быть True из‑за интернирования",
      "всегда True по языку",
      "всегда False по языку",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "часто один и тот же объект (intern маленьких int). Правильный ответ: «может быть True из‑за интернирования».",
    "group": "CPython и память",
    "id": "s653"
  },
  {
    "topic": "CPython",
    "q": "Что вернёт Для int 2: надёжно ли `a is b` при равных значениях?",
    "options": [
      "может быть True из‑за интернирования",
      "всегда True по языку",
      "всегда False по языку",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "часто один и тот же объект (intern маленьких int). Правильный ответ: «может быть True из‑за интернирования».",
    "group": "CPython и память",
    "id": "s654"
  },
  {
    "topic": "CPython",
    "q": "Что вернёт Для int 5: надёжно ли `a is b` при равных значениях?",
    "options": [
      "может быть True из‑за интернирования",
      "всегда True по языку",
      "всегда False по языку",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "часто один и тот же объект (intern маленьких int). Правильный ответ: «может быть True из‑за интернирования».",
    "group": "CPython и память",
    "id": "s655"
  },
  {
    "topic": "CPython",
    "q": "Что вернёт Для int 100: надёжно ли `a is b` при равных значениях?",
    "options": [
      "может быть True из‑за интернирования",
      "всегда True по языку",
      "всегда False по языку",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "часто один и тот же объект (intern маленьких int). Правильный ответ: «может быть True из‑за интернирования».",
    "group": "CPython и память",
    "id": "s656"
  },
  {
    "topic": "CPython",
    "q": "Что вернёт Для int 256: надёжно ли `a is b` при равных значениях?",
    "options": [
      "может быть True из‑за интернирования",
      "всегда True по языку",
      "всегда False по языку",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "часто один и тот же объект (intern маленьких int). Правильный ответ: «может быть True из‑за интернирования».",
    "group": "CPython и память",
    "id": "s657"
  },
  {
    "topic": "CPython",
    "q": "Что вернёт Для int 257: надёжно ли `a is b` при равных значениях?",
    "options": [
      "is может быть False; сравнивай через ==",
      "всегда True по языку",
      "всегда False по языку",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "не полагайся на is — интернирование не контракт для больших int. Правильный ответ: «is может быть False; сравнивай через ==».",
    "group": "CPython и память",
    "id": "s658"
  },
  {
    "topic": "architecture",
    "q": "Что такое strangler fig pattern в контексте Python?",
    "options": [
      "постепенно заменять легаси новым вокруг",
      "big-bang rewrite",
      "только monolith forever",
      "удалить тесты"
    ],
    "answer": 0,
    "explain": "Эволюционная миграция. Правильный ответ: «постепенно заменять легаси новым вокруг». Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s659"
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
    "explain": "HTTP request smuggling рядом. Правильный ответ: «разное толкование запроса proxy vs app». Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s660"
  },
  {
    "topic": "performance",
    "q": "Что вернёт zero-copy / buffer protocol польза?",
    "options": [
      "меньше копий памяти между слоями",
      "убирает GC",
      "запрещает bytes",
      "только asyncio"
    ],
    "answer": 0,
    "explain": "memoryview / PEP 3118. Правильный ответ: «меньше копий памяти между слоями». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s661"
  },
  {
    "topic": "performance",
    "q": "Что вернёт Сложность list.pop()?",
    "options": [
      "O(1) с конца",
      "O(n) с конца",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "Большая O: list.pop(). Правильный ответ: «O(1) с конца». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s662"
  },
  {
    "topic": "performance",
    "q": "Что вернёт Сложность list.pop(0)?",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explain": "Большая O: list.pop(0). Правильный ответ: «O(n)». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s663"
  },
  {
    "topic": "performance",
    "q": "Что вернёт Сложность dict.popitem()?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "Большая O: dict.popitem(). Правильный ответ: «O(1)». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s664"
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
    "explain": "Большая O: heapq.heappop. Правильный ответ: «O(log n)». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s665"
  },
  {
    "topic": "performance",
    "q": "Что вернёт Сложность set.remove?",
    "options": [
      "O(1) амортизированно",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "Большая O: set.remove. Правильный ответ: «O(1) амортизированно». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s666"
  },
  {
    "topic": "performance",
    "q": "Что вернёт Сложность str.join n кусков?",
    "options": [
      "O(суммарная длина)",
      "O(n²) всегда",
      "O(1)",
      "O(n!)"
    ],
    "answer": 0,
    "explain": "Большая O: str.join n кусков. Правильный ответ: «O(суммарная длина)». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s667"
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
    "explain": "Большая O: bytearray extend. Правильный ответ: «O(k) амортизированно». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s668"
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
    "explain": "Большая O: bisect.insort. Правильный ответ: «O(n) из‑за сдвига списка». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s669"
  },
  {
    "topic": "performance",
    "q": "Что вернёт что важнее микрооптимизаций f-string?",
    "options": [
      "алгоритм/I/O/аллокации — профилируй",
      "всегда переписать на C",
      "отключить GC",
      "больше print"
    ],
    "answer": 0,
    "explain": "Сначала измерь bottleneck. Правильный ответ: «алгоритм/I/O/аллокации — профилируй». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s670"
  },
  {
    "topic": "performance",
    "q": "Что вернёт что важнее микрооптимизаций f-string?",
    "options": [
      "алгоритм/I/O/аллокации — профилируй",
      "всегда переписать на C",
      "отключить GC",
      "больше print"
    ],
    "answer": 0,
    "explain": "Сначала измерь bottleneck. Правильный ответ: «алгоритм/I/O/аллокации — профилируй». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s671"
  },
  {
    "topic": "performance",
    "q": "Что вернёт что важнее микрооптимизаций f-string?",
    "options": [
      "алгоритм/I/O/аллокации — профилируй",
      "всегда переписать на C",
      "отключить GC",
      "больше print"
    ],
    "answer": 0,
    "explain": "Сначала измерь bottleneck. Правильный ответ: «алгоритм/I/O/аллокации — профилируй». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s672"
  },
  {
    "topic": "performance",
    "q": "Что вернёт что важнее микрооптимизаций f-string?",
    "options": [
      "алгоритм/I/O/аллокации — профилируй",
      "всегда переписать на C",
      "отключить GC",
      "больше print"
    ],
    "answer": 0,
    "explain": "Сначала измерь bottleneck. Правильный ответ: «алгоритм/I/O/аллокации — профилируй». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "s673"
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
    "explain": "приложение само читает/пишет кэш. Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s674"
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
    "explain": "кэш сам ходит в store при miss. Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s675"
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
    "explain": "запись в кэш и store синхронно. Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s676"
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
    "explain": "запись в кэш, store отложенно. Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s677"
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
    "explain": "запись в store, минуя кэш. Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s678"
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
    "explain": "Против stampede. Правильный ответ: «отдавать stale и обновлять асинхронно». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s679"
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
    "explain": "Против stampede. Правильный ответ: «отдавать stale и обновлять асинхронно». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s680"
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
    "explain": "Против stampede. Правильный ответ: «отдавать stale и обновлять асинхронно». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s681"
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
    "explain": "Против stampede. Правильный ответ: «отдавать stale и обновлять асинхронно». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s682"
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
    "explain": "Против stampede. Правильный ответ: «отдавать stale и обновлять асинхронно». Кэширование: согласованность, инвалидация, hot keys.",
    "group": "Данные и распределёнка",
    "id": "s683"
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
    "explain": "Не путай SQL-standard и реализацию. Правильный ответ: «зависит от СУБД — сверяй документацию/стандарт».",
    "group": "Данные и распределёнка",
    "id": "s684"
  },
  {
    "topic": "db",
    "q": "Что вернёт READ UNCOMMITTED и аномалия «non-repeatable read»?",
    "options": [
      "зависит от СУБД — сверяй документацию/стандарт",
      "всегда разрешена везде",
      "всегда запрещена везде",
      "только в SQLite"
    ],
    "answer": 0,
    "explain": "Не путай SQL-standard и реализацию. Правильный ответ: «зависит от СУБД — сверяй документацию/стандарт».",
    "group": "Данные и распределёнка",
    "id": "s685"
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
    "explain": "Не путай SQL-standard и реализацию. Правильный ответ: «зависит от СУБД — сверяй документацию/стандарт».",
    "group": "Данные и распределёнка",
    "id": "s686"
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
    "explain": "Не путай SQL-standard и реализацию. Правильный ответ: «зависит от СУБД — сверяй документацию/стандарт».",
    "group": "Данные и распределёнка",
    "id": "s687"
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
    "explain": "Не путай SQL-standard и реализацию. Правильный ответ: «зависит от СУБД — сверяй документацию/стандарт».",
    "group": "Данные и распределёнка",
    "id": "s688"
  },
  {
    "topic": "db",
    "q": "Что вернёт READ COMMITTED и аномалия «non-repeatable read»?",
    "options": [
      "зависит от СУБД — сверяй документацию/стандарт",
      "всегда разрешена везде",
      "всегда запрещена везде",
      "только в SQLite"
    ],
    "answer": 0,
    "explain": "Не путай SQL-standard и реализацию. Правильный ответ: «зависит от СУБД — сверяй документацию/стандарт».",
    "group": "Данные и распределёнка",
    "id": "s689"
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
    "explain": "Не путай SQL-standard и реализацию. Правильный ответ: «зависит от СУБД — сверяй документацию/стандарт».",
    "group": "Данные и распределёнка",
    "id": "s690"
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
    "explain": "Не путай SQL-standard и реализацию. Правильный ответ: «зависит от СУБД — сверяй документацию/стандарт».",
    "group": "Данные и распределёнка",
    "id": "s691"
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
    "explain": "Не путай SQL-standard и реализацию. Правильный ответ: «зависит от СУБД — сверяй документацию/стандарт».",
    "group": "Данные и распределёнка",
    "id": "s692"
  },
  {
    "topic": "db",
    "q": "Что вернёт REPEATABLE READ и аномалия «non-repeatable read»?",
    "options": [
      "зависит от СУБД — сверяй документацию/стандарт",
      "всегда разрешена везде",
      "всегда запрещена везде",
      "только в SQLite"
    ],
    "answer": 0,
    "explain": "Не путай SQL-standard и реализацию. Правильный ответ: «зависит от СУБД — сверяй документацию/стандарт».",
    "group": "Данные и распределёнка",
    "id": "s693"
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
    "explain": "Не путай SQL-standard и реализацию. Правильный ответ: «зависит от СУБД — сверяй документацию/стандарт».",
    "group": "Данные и распределёнка",
    "id": "s694"
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
    "explain": "Не путай SQL-standard и реализацию. Правильный ответ: «зависит от СУБД — сверяй документацию/стандарт».",
    "group": "Данные и распределёнка",
    "id": "s695"
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
    "explain": "Не путай SQL-standard и реализацию. Правильный ответ: «зависит от СУБД — сверяй документацию/стандарт».",
    "group": "Данные и распределёнка",
    "id": "s696"
  },
  {
    "topic": "db",
    "q": "Что вернёт SERIALIZABLE и аномалия «non-repeatable read»?",
    "options": [
      "зависит от СУБД — сверяй документацию/стандарт",
      "всегда разрешена везде",
      "всегда запрещена везде",
      "только в SQLite"
    ],
    "answer": 0,
    "explain": "Не путай SQL-standard и реализацию. Правильный ответ: «зависит от СУБД — сверяй документацию/стандарт».",
    "group": "Данные и распределёнка",
    "id": "s697"
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
    "explain": "Не путай SQL-standard и реализацию. Правильный ответ: «зависит от СУБД — сверяй документацию/стандарт».",
    "group": "Данные и распределёнка",
    "id": "s698"
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
    "explain": "Не путай SQL-standard и реализацию. Правильный ответ: «зависит от СУБД — сверяй документацию/стандарт».",
    "group": "Данные и распределёнка",
    "id": "s699"
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
    "explain": "40001 / serialization_failure → retry. Правильный ответ: «да, типичный паттерн retry». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s700"
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
    "explain": "40001 / serialization_failure → retry. Правильный ответ: «да, типичный паттерн retry». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s701"
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
    "explain": "40001 / serialization_failure → retry. Правильный ответ: «да, типичный паттерн retry». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s702"
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
    "explain": "40001 / serialization_failure → retry. Правильный ответ: «да, типичный паттерн retry». Базы данных: транзакции, индексы, изоляция, пулы соединений.",
    "group": "Данные и распределёнка",
    "id": "s703"
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
    "explain": "ретраи без jitter усиливают сбой. Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s704"
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
    "explain": "изоляция пулов/ресурсов по частям системы. Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s705"
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
    "explain": "временно не звать падающий dependency. Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s706"
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
    "explain": "общий дедлайн на цепочку вызовов. Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s707"
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
    "explain": "параллельный дубль запроса к реплике. Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s708"
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
    "explain": "отбрасывать лишнее под перегрузкой. Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s709"
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
    "explain": "урезать функции, но жить. Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s710"
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
    "explain": "сообщение, которое вечно валит воркер. Распределённые системы: очереди, консенсус, идемпотентность, задержки.",
    "group": "Данные и распределёнка",
    "id": "s711"
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
    "explain": "внедрение скрипта в браузер жертвы. Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s712"
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
    "explain": "внедрение скрипта в браузер жертвы. Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s713"
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
    "explain": "запрос от имени пользователя без его намерения. Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s714"
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
    "explain": "запрос от имени пользователя без его намерения. Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s715"
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
    "explain": "сервер ходит на внутренние URL по указке. Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s716"
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
    "explain": "сервер ходит на внутренние URL по указке. Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s717"
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
    "explain": "инъекция в SQL. Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s718"
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
    "explain": "инъекция в SQL. Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s719"
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
    "explain": "доступ к файлам через ../. Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s720"
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
    "explain": "доступ к файлам через ../. Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s721"
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
    "explain": "удалённое исполнение кода. Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s722"
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
    "explain": "удалённое исполнение кода. Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s723"
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
    "explain": "доступ к чужим объектам по угадываемому id. Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s724"
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
    "explain": "доступ к чужим объектам по угадываемому id. Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s725"
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
    "explain": "редирект на вредоносный URL. Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s726"
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
    "explain": "редирект на вредоносный URL. Безопасность: не доверяй вводу, секретам и десериализации из недоверенных источников.",
    "group": "Безопасность",
    "id": "s727"
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
    "explain": "RED → Rate. Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s728"
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
    "explain": "RED → Errors. Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s729"
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
    "explain": "RED → Duration. Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s730"
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
    "explain": "USE → Utilization. Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s731"
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
    "explain": "USE → Saturation. Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s732"
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
    "explain": "USE → Errors. Наблюдаемость: логи, метрики, трейсы, профилирование в проде.",
    "group": "Observability и качество",
    "id": "s733"
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
    "explain": "разделить пути чтения и записи. Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s734"
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
    "explain": "состояние как поток событий. Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s735"
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
    "explain": "событие в одной транзакции с записью. Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s736"
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
    "explain": "распределённый процесс + компенсации. Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s737"
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
    "explain": "backend for frontend — API под клиент. Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s738"
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
    "explain": "anti-corruption layer к легаси. Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s739"
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
    "explain": "постепенная замена легаси. Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s740"
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
    "explain": "вспомогательный процесс рядом с сервисом. Архитектурные паттерны и границы модулей/сервисов.",
    "group": "Архитектура и дизайн",
    "id": "s741"
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
    "explain": "Метаданные дистрибутива. Правильный ответ: «заявить поддержку версии для PyPI/инструментов». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s742"
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
    "explain": "Метаданные дистрибутива. Правильный ответ: «заявить поддержку версии для PyPI/инструментов». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s743"
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
    "explain": "Метаданные дистрибутива. Правильный ответ: «заявить поддержку версии для PyPI/инструментов». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s744"
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
    "explain": "Метаданные дистрибутива. Правильный ответ: «заявить поддержку версии для PyPI/инструментов». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s745"
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
    "explain": "Метаданные дистрибутива. Правильный ответ: «заявить поддержку версии для PyPI/инструментов». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s746"
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
    "explain": "Метаданные дистрибутива. Правильный ответ: «заявить поддержку версии для PyPI/инструментов». Сборка и распространение пакетов: wheel, pyproject.toml, зависимости.",
    "group": "Packaging и CI",
    "id": "s747"
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
    "explain": "счётчик ссылок объекта. Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s748"
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
    "explain": "указатель на тип. Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s749"
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
    "explain": "слот деаллокации типа. Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s750"
  },
  {
    "topic": "CPython",
    "q": "Что вернёт Py_INCREF/DECREF — про что?",
    "options": [
      "ручное управление refcnt в C-API",
      "только pip",
      "HTTP header",
      "pytest fixture"
    ],
    "answer": 0,
    "explain": "ручное управление refcnt в C-API. Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s751"
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
    "explain": "аллокатор мелких объектов. Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s752"
  },
  {
    "topic": "CPython",
    "q": "Что вернёт arenas/pools — про что?",
    "options": [
      "структура pymalloc",
      "только pip",
      "HTTP header",
      "pytest fixture"
    ],
    "answer": 0,
    "explain": "структура pymalloc. Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s753"
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
    "explain": "поколения циклического GC. Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s754"
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
    "explain": "переиспользование некоторых str. Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s755"
  },
  {
    "topic": "CPython",
    "q": "Что вернёт dict insertion order — про что?",
    "options": [
      "сохранение порядка с 3.7+ как язык. контракт",
      "только pip",
      "HTTP header",
      "pytest fixture"
    ],
    "answer": 0,
    "explain": "сохранение порядка с 3.7+ как язык. контракт. Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s756"
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
    "explain": "ускорение hot path с 3.11+. Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s757"
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
    "explain": "Пороги генерационного GC. Правильный ответ: «частоту/пороги сбора поколений GC».",
    "group": "CPython и память",
    "id": "s758"
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
    "explain": "Пороги генерационного GC. Правильный ответ: «частоту/пороги сбора поколений GC».",
    "group": "CPython и память",
    "id": "s759"
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
    "explain": "Пороги генерационного GC. Правильный ответ: «частоту/пороги сбора поколений GC».",
    "group": "CPython и память",
    "id": "s760"
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
    "explain": "Пороги генерационного GC. Правильный ответ: «частоту/пороги сбора поколений GC».",
    "group": "CPython и память",
    "id": "s761"
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
    "explain": "убирает assert, __debug__=False. Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s762"
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
    "explain": "как -O плюс выкидывает docstrings. Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s763"
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
    "explain": "дамп трейсов при фатальных сбоях. Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s764"
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
    "explain": "режим разработки с доп. проверками. Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s765"
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
    "explain": "не импортировать site автоматически. Вопрос про устройство интерпретатора CPython, а не про синтаксис языка.",
    "group": "CPython и память",
    "id": "s766"
  }
];
