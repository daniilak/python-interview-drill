// @meta topic=CPython group=CPython и память
// senior · 49 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "На что указывает ob_type у объекта CPython?",
    "options": [
      "на тип объекта (PyTypeObject)",
      "на счётчик ссылок",
      "на модуль, где объект создали",
      "на GIL текущего потока"
    ],
    "answer": 0,
    "explain": "В упрощённом заголовке PyObject поле ob_type указывает на тип. Счётчик ссылок — отдельно (ob_refcnt).",
    "kind": "single",
    "id": "s3",
    "fixed": true
  },
  {
    "q": "Зачем в CPython компактная раскладка dict (с 3.6)?",
    "options": [
      "меньше памяти и лучшая локальность кэша за счёт плотного массива",
      "чтобы dict обязательно писали только на C",
      "чтобы dict заменил list для упорядоченных данных",
      "чтобы полностью убрать коллизии хешей"
    ],
    "answer": 0,
    "explain": "Старая хеш-таблица с отдельными указателями ела память. Компактный dict хранит индексы плотнее, плюс сохраняет порядок вставки — выигрыш и по RAM, и по cache locality.",
    "kind": "single",
    "id": "s20",
    "fixed": true
  },
  {
    "q": "Что делает флаг интерпретатора python -O?",
    "options": [
      "убирает assert и ставит __debug__ = False",
      "включает экспериментальный JIT всегда",
      "отключает GC навсегда",
      "доступен только на Windows"
    ],
    "answer": 0,
    "explain": "-O удаляет bytecode assert, __debug__ ложен — код в if __debug__ не выполняется. -OO ещё убирает docstrings. Не путать с оптимизацией «как в C++ -O3».",
    "kind": "single",
    "id": "s54",
    "fixed": true
  },
  {
    "q": "Зачем нужен interning маленьких int (−5…256)?",
    "options": [
      "переиспользование объектов, меньше аллокаций",
      "обязательная математика",
      "безопасность",
      "убрать =="
    ],
    "answer": 0,
    "explain": "Переиспользование объектов, меньше аллокаций. Это про внутренности интерпретатора, не про синтаксис приложения.",
    "kind": "single",
    "id": "s134",
    "fixed": true
  },
  {
    "q": "Почему локальные переменные быстрее глобальных в CPython?",
    "options": [
      "LOAD_FAST по индексу в массиве fast locals vs LOAD_GLOBAL в dict",
      "GIL по-другому считает локальные",
      "имена локальных interned автоматически всегда",
      "локальные в L1 CPU cache по спецификации языка"
    ],
    "answer": 0,
    "explain": "Функция компилируется с фиксированным слотом для local x. Global ищется в globals/builtins dict. Микрооптимизация, не повод злоупотреблять.",
    "kind": "single",
    "id": "s150",
    "fixed": true
  },
  {
    "q": "Что означают поколения (generations) в циклическом GC CPython?",
    "options": [
      "три уровня «возраста» объектов: чаще проверяют молодые, реже — старые",
      "три версии pip-пакетов в venv",
      "поколения потоков в threading",
      "уровни изоляции транзакций в SQLite"
    ],
    "answer": 0,
    "explain": "GC делит объекты на gen0/1/2: свежие чаще сканируют на циклы, долгоживущие реже. Это снижает паузы: большинство циклов рвётся в молодом поколении.",
    "kind": "single",
    "id": "s166",
    "fixed": true
  },
  {
    "q": "Надёжно ли `a is b` для двух переменных с int(2)?",
    "options": [
      "может быть True из-за кэширования малых int, но полагаться нельзя",
      "всегда False для любых равных int",
      "гарантированно True для всех целых",
      "is сравнивает только строки, не числа"
    ],
    "answer": 0,
    "explain": "CPython кэширует small ints [-5, 256]. Для 2 часто один объект, для больших — разные при равенстве. Сравнивай через ==, не is.",
    "kind": "single",
    "id": "s225",
    "fixed": true
  },
  {
    "q": "Что включает флаг интерпретатора `-X dev`?",
    "options": [
      "дополнительные проверки и предупреждения режима разработки",
      "автоматический pip install зависимостей",
      "отключение всех assert",
      "принудительный -O optimize"
    ],
    "answer": 0,
    "explain": "-X dev: более строгие warning, иногда extra runtime checks. Удобно локально; не путать с PYTHONDEVMODE=1 полностью.",
    "kind": "single",
    "id": "s281",
    "fixed": true
  },
  {
    "q": "Надёжно ли `a is b` для int(100)?",
    "options": [
      "может быть True для малых кэшированных int, но для логики используй ==",
      "всегда False",
      "гарантировано для любого int",
      "is сравнивает значения, не идентичность"
    ],
    "answer": 0,
    "explain": "Small int cache [-5,256]: 100 часто один объект. Большие равные int — разные id. is — идентичность, == — значение.",
    "kind": "single",
    "id": "s335",
    "fixed": true
  },
  {
    "q": "Что вернёт frame object (3.11+ changes)?",
    "options": [
      "дешевле/иная модель кадров",
      "исчезли полностью",
      "стали процессами",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — дешевле/иная модель кадров. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s372",
    "fixed": true
  },
  {
    "q": "Что делают Py_INCREF и Py_DECREF?",
    "options": [
      "ручное управление счётчиком ссылок объекта в C-API",
      "установка pip-пакета в embedded Python",
      "HTTP keep-alive для сокетов",
      "регистрация pytest fixture"
    ],
    "answer": 0,
    "explain": "Каждый PyObject* требует баланса INCREF/DECREF. Утечка — забытый INCREF; crash — use-after-free при лишнем DECREF.",
    "kind": "single",
    "id": "s384",
    "fixed": true
  },
  {
    "q": "Что делает флаг интерпретатора -S?",
    "options": [
      "не импортирует site автоматически при старте",
      "включает strict mode для типов",
      "отключает GC навсегда",
      "запускает только frozen modules"
    ],
    "answer": 0,
    "explain": "Без site нет site-packages на sys.path по умолчанию, не выполняется sitecustomize. Полезно для изолированных embedded/minimal окружений.",
    "kind": "single",
    "id": "s396",
    "fixed": true
  },
  {
    "q": "Что вернёт immortal objects (3.12)?",
    "options": [
      "некоторые объекты без смены refcnt",
      "все immortal",
      "no GC needed",
      "GIL immortal"
    ],
    "answer": 0,
    "explain": "Результат выражения — некоторые объекты без смены refcnt. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s408",
    "fixed": true
  },
  {
    "q": "Что делает python -X faulthandler?",
    "options": [
      "включает дамп traceback всех потоков при фатальных сбоях",
      "включает экспериментальный JIT",
      "отключает GC",
      "работает только на Windows"
    ],
    "answer": 0,
    "explain": "При segfault/deadlock faulthandler печатает стеки в stderr. В проде — вместе с core dump и Sentry.",
    "kind": "single",
    "id": "s444",
    "fixed": true
  },
  {
    "q": "Из чего упрощённо состоит заголовок PyObject?",
    "options": [
      "refcount + указатель на PyTypeObject (+ поля типа)",
      "только payload без метаданных",
      "только GIL token",
      "hash значение для dict"
    ],
    "answer": 0,
    "explain": "Базовый объект CPython: ob_refcnt, ob_type. Далее — поля конкретного типа (PyLongObject, PyUnicodeObject…).",
    "kind": "single",
    "id": "s455",
    "fixed": true
  },
  {
    "q": "Какая базовая структура у объекта в CPython?",
    "options": [
      "PyObject (refcount + указатель на тип)",
      "только голый указатель на данные",
      "JVM-style object header",
      "Go interface без refcount"
    ],
    "answer": 0,
    "explain": "Всё наследует от PyObject. ob_type → PyTypeObject с методами (tp_dealloc, tp_repr…).",
    "kind": "single",
    "id": "s466",
    "fixed": true
  },
  {
    "q": "Что делает флаг -OO?",
    "options": [
      "как -O, плюс удаляет docstrings из bytecode",
      "включает JIT",
      "отключает import",
      "только Windows"
    ],
    "answer": 0,
    "explain": "-O убирает assert; -OO ещё docstrings → меньше .pyc, но __doc__ пустой. Редко в dev, иногда в embedded.",
    "kind": "single",
    "id": "s486",
    "fixed": true
  },
  {
    "q": "Надёжно ли `a is b` для int 256 при равных значениях?",
    "options": [
      "может быть True из‑за кэширования малых int, но полагаться нельзя",
      "всегда True по спецификации",
      "всегда False",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "CPython кэширует small ints [-5..256]. Для 257+ обычно разные объекты. Сравнивай ==, не is.",
    "kind": "single",
    "id": "s501",
    "fixed": true
  },
  {
    "q": "Надёжно ли `a is b` для int 1 при равных значениях?",
    "options": [
      "может быть True из‑за small int cache, но полагаться нельзя",
      "всегда True по языку",
      "всегда False",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Малые целые кэшируются. Это implementation detail — для значений используй ==.",
    "kind": "single",
    "id": "s520",
    "fixed": true
  },
  {
    "q": "Что показывает dis.dis(f)?",
    "options": [
      "байткод функции",
      "это настройка только pip",
      "машинный код CPU",
      "GIL state"
    ],
    "answer": 0,
    "explain": "Байткод функции. Это про внутренности интерпретатора, не про синтаксис приложения.",
    "kind": "single",
    "id": "s525",
    "fixed": true
  },
  {
    "q": "Что делает LOAD_FAST в bytecode?",
    "options": [
      "загружает значение локальной переменной из fast locals массива frame",
      "загружает константу из co_consts по индексу",
      "выполняет import модуля по имени",
      "создаёт новый list comprehension frame"
    ],
    "answer": 0,
    "explain": "LOAD_FAST берёт локальную (параметр или присвоение в функции). STORE_FAST кладёт обратно. Глобалы — LOAD_GLOBAL, который дороже из-за dict lookup.",
    "kind": "single",
    "id": "s540",
    "fixed": true
  },
  {
    "q": "Что вернёт PEP 523 / frame evaluation API?",
    "options": [
      "хуки для JIT/отладчиков",
      "удаление frames",
      "GIL API",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — хуки для JIT/отладчиков. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s550",
    "fixed": true
  },
  {
    "q": "Что такое pymalloc arenas в C-API CPython?",
    "options": [
      "пулы мелких аллокаций (≤512 байт) в аренах для снижения фрагментации",
      "области памяти только для GIL mutex",
      "кэш скомпилированного байткода .pyc",
      "буфер stdout при перенаправлении в pipe"
    ],
    "answer": 0,
    "explain": "pymalloc выделяет арены (обычно 256 KiB) и pools внутри. Мелкие объекты Python (int, tuple headers) часто идут через pymalloc, крупные — через system malloc.",
    "kind": "single",
    "id": "s590",
    "fixed": true
  },
  {
    "q": "Для int 0: надёжно ли `a is b` при равных значениях?",
    "options": [
      "может быть True из‑за кэша малых int, но полагаться на is нельзя",
      "всегда True для любых равных int в Python 3",
      "всегда False — is только для identity объектов разного типа",
      "гарантировано True только в PyPy, не в CPython"
    ],
    "answer": 0,
    "explain": "CPython кэширует small ints (-5..256). 0 is 0 часто True, но 10**9 is 10**9 — нет. Для чисел используй ==, не is.",
    "kind": "single",
    "id": "s600",
    "fixed": true
  },
  {
    "q": "Что вернёт PEP 703 free-threading implications?",
    "options": [
      "гонка данных без GIL — нужны sync",
      "весь код thread-safe auto",
      "удаляет asyncio",
      "запрещает C-API"
    ],
    "answer": 0,
    "explain": "Результат выражения — гонка данных без GIL — нужны sync. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s615",
    "fixed": true
  },
  {
    "q": "Что такое interned strings живут в в C-API CPython?",
    "options": [
      "внутренней таблице",
      "каждом frame отдельно без шаринга",
      "только .pyc",
      "это настройка только pip"
    ],
    "answer": 0,
    "explain": "Внутренней таблице. Это про внутренности интерпретатора, не про синтаксис приложения.",
    "kind": "single",
    "id": "s620",
    "fixed": true
  },
  {
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
    "id": "s635",
    "fixed": true
  },
  {
    "q": "Что хранит PyObject заголовок примерно?",
    "options": [
      "refcount и указатель на PyTypeObject (ob_type)",
      "только hash значения для dict key",
      "размер __dict__ экземпляра",
      "номер поколения cyclic GC"
    ],
    "answer": 0,
    "explain": "Каждый объект C API начинается с ob_refcnt и ob_type. Размер полезной нагрузки зависит от типа. Понимание помогает при отладке утечек и C-расширениях.",
    "kind": "single",
    "id": "s639",
    "fixed": true
  },
  {
    "q": "Что означает tp_dealloc?",
    "options": [
      "слот PyTypeObject для финализатора/destructor типа",
      "функция уменьшения refcount на 1",
      "опкод байткода DELETE_FAST",
      "вызов gc.collect() принудительно"
    ],
    "answer": 0,
    "explain": "tp_dealloc вызывается при refcount→0. Тип освобождает буферы (bytes, list) и цепочку base types. Кастомные extension types должны реализовать корректно.",
    "kind": "single",
    "id": "s655",
    "fixed": true
  },
  {
    "q": "Что такое tiered interpreter proposals в C-API CPython?",
    "options": [
      "многоуровневая VM: интерпретатор → специализированный → JIT-подобные tier",
      "трёхуровневый GIL shared/exclusive",
      "три типа dict в pymalloc",
      "уровни логирования DEBUG/INFO/ERROR"
    ],
    "answer": 0,
    "explain": "PEP 659 specializing adaptive interpreter — пример tier 1→2 на hot bytecode. Цель — ускорение без полноценного JIT как в PyPy.",
    "kind": "single",
    "id": "s668",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "['b', 'a']",
      "['a', 'b']",
      "{'a': 2, 'b': 1}",
      "TypeError"
    ],
    "answer": 0,
    "explain": "list(dict) — ключи в порядке вставки. С Python 3.7 это языковой контракт, не только деталь CPython. Здесь сначала 'b', потом 'a'.",
    "kind": "single",
    "code": "print(list({'b': 1, 'a': 2}))",
    "id": "s674",
    "fixed": true
  },
  {
    "q": "Верно ли утверждение: PEP 649 deferred annotations (направление) в C-API CPython?",
    "options": [
      "да — аннотации вычисляются лениво без from __future__ annotations",
      "нет — аннотации всегда eager при def",
      "PEP 649 отменяет typing module",
      "касается только Cython, не Python"
    ],
    "answer": 0,
    "explain": "PEP 649 (3.14 direction): аннотации как deferred eval, меньше forward ref проблем и строковых кавычек. Связано с runtime __annotate__ hooks.",
    "kind": "single",
    "id": "s677",
    "fixed": true
  },
  {
    "q": "Что означает: Для int 257: надёжно ли `a is b` при равных значениях?",
    "options": [
      "is может быть False; сравнивай через ==",
      "всегда True по языку",
      "всегда False по языку",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Is может быть False; сравнивай через ==. Это про внутренности интерпретатора, не про синтаксис приложения.",
    "kind": "single",
    "id": "s683",
    "fixed": true
  },
  {
    "q": "Что такое tp_dict у типа в C-API CPython?",
    "options": [
      "dict атрибутов/методов, хранимых на уровне типа (если используется)",
      "__dict__ каждого экземпляра list",
      "кэш байткода функций класса",
      "таблица MRO в runtime"
    ],
    "answer": 0,
    "explain": "PyTypeObject.tp_dict — хранилище для дескрипторов и method на class object. У instances свой __dict__ или slots. Разные уровни object model.",
    "kind": "single",
    "id": "s686",
    "fixed": true
  },
  {
    "q": "Что означает pymalloc?",
    "options": [
      "внутренний аллокатор CPython для мелких объектов (≤512 байт)",
      "malloc из libc без обёртки",
      "пул потоков concurrent.futures",
      "сжатие памяти process через mmap"
    ],
    "answer": 0,
    "explain": "Снижает фрагментацию и ускоряет alloc/free мелких Python objects. Крупные запросы идут в system allocator.",
    "kind": "single",
    "id": "s689",
    "fixed": true
  },
  {
    "q": "Что верно про PyVarObject дополнительно хранит в C-API CPython?",
    "options": [
      "ob_size",
      "только refcnt",
      "GIL ticket",
      "typeid str"
    ],
    "answer": 0,
    "explain": "Ob_size. Это про внутренности интерпретатора, не про синтаксис приложения.",
    "kind": "single",
    "id": "s692",
    "fixed": true
  },
  {
    "q": "Для int 5: надёжно ли `a is b` при равных значениях?",
    "options": [
      "часто True для small int cache, но для кода нужен ==",
      "гарантированно True для любого int literal",
      "всегда False — is только для None",
      "True только после intern() явного вызова"
    ],
    "answer": 0,
    "explain": "5 is 5 обычно True в CPython из small ints pool. Нельзя строить логику на is для int — только ==.",
    "kind": "single",
    "id": "s704",
    "fixed": true
  },
  {
    "q": "Что даёт PEP 669 (low impact monitoring) в C-API CPython?",
    "options": [
      "дешёвые хуки наблюдения за выполнением с меньшим overhead",
      "отключение GC",
      "замену sys.settrace без альтернатив",
      "обязательный debugger на каждый opcode"
    ],
    "answer": 0,
    "explain": "PEP 669 — мониторинг с низким влиянием на hot path (3.12+). Нужен профилировщикам/отладчикам без старого settrace-налога.",
    "kind": "single",
    "id": "s707",
    "fixed": true
  },
  {
    "q": "Что означает ob_refcnt в CPython?",
    "options": [
      "счётчик ссылок объекта (PyObject)",
      "номер поколения GC",
      "размер объекта в байтах",
      "идентификатор потока"
    ],
    "answer": 0,
    "explain": "При 0 (с оговорками) объект уничтожается. Циклы добивает cyclic GC.",
    "kind": "single",
    "id": "s722",
    "fixed": true
  },
  {
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
    "id": "s737",
    "fixed": true
  },
  {
    "q": "Что такое interning маленьких int в C-API CPython?",
    "options": [
      "кэш часто используемых int (детали зависят от версии/build)",
      "все int всегда unique",
      "только float",
      "только str ascii"
    ],
    "answer": 0,
    "explain": "Поэтому is у маленьких int может быть True «случайно» — для идентичности не опирайся.",
    "kind": "single",
    "id": "s746",
    "fixed": true
  },
  {
    "q": "Что означает dict insertion order?",
    "options": [
      "сохранение порядка с 3.7+ как язык. контракт",
      "только pip",
      "HTTP header",
      "pytest fixture"
    ],
    "answer": 0,
    "explain": "На собеседовании ждут именно это определение, а не соседние похожие термины.",
    "kind": "single",
    "id": "s749",
    "fixed": true
  },
  {
    "q": "Что такое interned strings в CPython?",
    "options": [
      "переиспользование некоторых одинаковых str-объектов",
      "шифрование строк",
      "сжатие gzip строк",
      "удаление строк из памяти сразу"
    ],
    "answer": 0,
    "explain": "Идентификаторы и часть литералов интернируются → тот же объект, быстрее is/сравнение. sys.intern явно.",
    "kind": "single",
    "id": "s752",
    "fixed": true
  },
  {
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
    "id": "s755",
    "fixed": true
  },
  {
    "q": "Что вернёт specializing adaptive interpreter (3.11+)?",
    "options": [
      "байткод адаптируется под типы в hot path",
      "удаляет GC",
      "отключает typing",
      "заменяет LLVM always"
    ],
    "answer": 0,
    "explain": "Результат выражения — байткод адаптируется под типы в hot path. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s758",
    "fixed": true
  },
  {
    "q": "Что означает arenas/pools?",
    "options": [
      "структура pymalloc",
      "только pip",
      "HTTP header",
      "pytest fixture"
    ],
    "answer": 0,
    "explain": "Структура pymalloc. Это про внутренности интерпретатора, не про синтаксис приложения.",
    "kind": "single",
    "id": "s764",
    "fixed": true
  },
  {
    "q": "Как оптимизированы словари CPython (3.6+)?",
    "options": [
      "compact representation + сохранение порядка вставки",
      "только linked list без hash",
      "неупорядоченные всегда по стандарту языка до 3.12",
      "хранят только str-ключи"
    ],
    "answer": 0,
    "explain": "Compact dict экономит память; порядок вставки стал языковой гарантией с 3.7.",
    "kind": "single",
    "id": "s770",
    "fixed": true
  },
  {
    "q": "Чего code object не содержит напрямую?",
    "options": [
      "значений heap-объектов runtime как живых ссылок на всё состояние программы",
      "байткода и имён",
      "констант co_consts",
      "таблицы переменных"
    ],
    "answer": 0,
    "explain": "code — шаблон исполнения (bytecode, names, consts). Живые объекты — в frame/heap при выполнении.",
    "kind": "single",
    "id": "s773",
    "fixed": true
  },
  {
    "q": "Что такое adaptive specializing interpreter?",
    "options": [
      "ускорение hot path специализацией байткода (3.11+)",
      "отключение интерпретатора",
      "только JIT JVM",
      "удаление пир-кода"
    ],
    "answer": 0,
    "explain": "Инструкции адаптируются под типы на hot path (PEP 659). При смене типов — deopt.",
    "kind": "single",
    "id": "s782",
    "fixed": true
  }
);
