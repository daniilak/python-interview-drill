window.QUESTIONS_MIDDLE = [
  {
    "topic": "декораторы",
    "q": "Декоратор @f над def g — это…",
    "options": [
      "g = f(g)",
      "f = g(f)",
      "g вызывается сразу",
      "синтаксический сахар import"
    ],
    "answer": 0,
    "explain": "Декоратор оборачивает функцию.",
    "group": "Декораторы и замыкания",
    "id": "m1"
  },
  {
    "topic": "декораторы",
    "q": "functools.wraps нужен чтобы…",
    "options": [
      "сохранить __name__/__doc__ обёрнутой",
      "ускорить вызов",
      "добавить тип",
      "заменить lambda"
    ],
    "answer": 0,
    "explain": "Копирует метаданные.",
    "group": "Декораторы и замыкания",
    "id": "m2"
  },
  {
    "topic": "декораторы",
    "q": "Декоратор с аргументами — это…",
    "options": [
      "фабрика, возвращающая декоратор",
      "невозможен",
      "только class decorator",
      "через eval"
    ],
    "answer": 0,
    "explain": "Тройная вложенность функций.",
    "group": "Декораторы и замыкания",
    "id": "m3"
  },
  {
    "topic": "генераторы",
    "q": "yield в функции делает её…",
    "options": [
      "генератором",
      "корутиной всегда",
      "классом",
      "итератором списка"
    ],
    "answer": 0,
    "explain": "generator function.",
    "group": "Генераторы и итераторы",
    "id": "m4"
  },
  {
    "topic": "генераторы",
    "q": "next(gen) после исчерпания…",
    "options": [
      "StopIteration",
      "None",
      "IndexError",
      "False"
    ],
    "answer": 0,
    "explain": "Протокол итератора.",
    "group": "Генераторы и итераторы",
    "id": "m5"
  },
  {
    "topic": "генераторы",
    "q": "Генератор хранит…",
    "options": [
      "состояние между next",
      "весь результат в RAM",
      "только list",
      "копию args"
    ],
    "answer": 0,
    "explain": "Ленивость и мало памяти.",
    "group": "Генераторы и итераторы",
    "id": "m6"
  },
  {
    "topic": "генераторы",
    "q": "(x for x in range(3)) — это…",
    "options": [
      "generator expression",
      "tuple",
      "list",
      "set"
    ],
    "answer": 0,
    "explain": "Круглые скобки — genexp.",
    "group": "Генераторы и итераторы",
    "id": "m7"
  },
  {
    "topic": "итераторы",
    "q": "Итератор должен иметь…",
    "options": [
      "__iter__ и __next__",
      "только len",
      "append",
      "__getitem__ обязательно"
    ],
    "answer": 0,
    "explain": "Протокол Iterator.",
    "group": "Генераторы и итераторы",
    "id": "m8"
  },
  {
    "topic": "итераторы",
    "q": "iter(x) вызывает…",
    "options": [
      "x.__iter__()",
      "x.__next__()",
      "list(x)",
      "x.next() в Py3"
    ],
    "answer": 0,
    "explain": "Получение итератора.",
    "group": "Генераторы и итераторы",
    "id": "m9"
  },
  {
    "topic": "context",
    "q": "Контекстный менеджер реализует…",
    "options": [
      "__enter__/__exit__",
      "open/close только",
      "__init__/__del__",
      "with/as keywords внутри класса"
    ],
    "answer": 0,
    "explain": "Протокол with.",
    "group": "Исключения и контекст",
    "id": "m10"
  },
  {
    "topic": "context",
    "q": "contextlib.contextmanager превращает…",
    "options": [
      "генератор в CM",
      "класс в функцию",
      "async в sync",
      "list в with"
    ],
    "answer": 0,
    "explain": "yield разделяет enter/exit.",
    "group": "Исключения и контекст",
    "id": "m11"
  },
  {
    "topic": "comprehensions",
    "q": "Чем listcomp отличается от map+lambda часто?",
    "options": [
      "читаемее для простых преобразований",
      "всегда быстрее C",
      "не создаёт list",
      "запрещена в pep8"
    ],
    "answer": 0,
    "explain": "Стиль и ясность.",
    "group": "Генераторы и итераторы",
    "id": "m12"
  },
  {
    "topic": "closures",
    "q": "Замыкание — это…",
    "options": [
      "функция с enclosing переменными",
      "декоратор",
      "класс",
      "модуль"
    ],
    "answer": 0,
    "explain": "Captures nonlocal state.",
    "group": "Декораторы и замыкания",
    "id": "m13"
  },
  {
    "topic": "closures",
    "q": "nonlocal x нужен чтобы…",
    "options": [
      "присваивать enclosing переменной",
      "читать global",
      "создать threadlocal",
      "удалить x"
    ],
    "answer": 0,
    "explain": "Для записи в enclosing scope.",
    "group": "Декораторы и замыкания",
    "id": "m14"
  },
  {
    "topic": "GIL",
    "q": "GIL в CPython — это…",
    "options": [
      "глобальная блокировка интерпретатора",
      "сборщик мусора",
      "тип данных",
      "модуль threading"
    ],
    "answer": 0,
    "explain": "Один поток bytecode одновременно.",
    "group": "Потоки, процессы, GIL",
    "id": "m15"
  },
  {
    "topic": "GIL",
    "q": "GIL мешает…",
    "options": [
      "CPU-bound многопоточности",
      "I/O полностью",
      "multiprocessing",
      "asyncio I/O"
    ],
    "answer": 0,
    "explain": "Для CPU — multiprocessing/C-ext.",
    "group": "Потоки, процессы, GIL",
    "id": "m16"
  },
  {
    "topic": "threading",
    "q": "threading хорош для…",
    "options": [
      "I/O-bound задач",
      "чистого CPU всегда",
      "замены asyncio",
      "GPU"
    ],
    "answer": 0,
    "explain": "Пока ждёт I/O, GIL отпускается.",
    "group": "Потоки, процессы, GIL",
    "id": "m17"
  },
  {
    "topic": "multiprocessing",
    "q": "multiprocessing обходит GIL через…",
    "options": [
      "отдельные процессы",
      "больше потоков",
      "снятие GIL флагом",
      "JIT"
    ],
    "answer": 0,
    "explain": "Отдельные интерпретаторы.",
    "group": "Потоки, процессы, GIL",
    "id": "m18"
  },
  {
    "topic": "asyncio",
    "q": "async def объявляет…",
    "options": [
      "корутину",
      "поток",
      "процесс",
      "генератор синхронный"
    ],
    "answer": 0,
    "explain": "Coroutine function.",
    "group": "Asyncio",
    "id": "m19"
  },
  {
    "topic": "asyncio",
    "q": "await можно внутри…",
    "options": [
      "async def",
      "любой функции",
      "класса без async",
      "lambda"
    ],
    "answer": 0,
    "explain": "Только в корутинах.",
    "group": "Asyncio",
    "id": "m20"
  },
  {
    "topic": "asyncio",
    "q": "asyncio.gather запускает…",
    "options": [
      "корутины конкурентно",
      "строго по очереди всегда",
      "потоки OS",
      "процессы"
    ],
    "answer": 0,
    "explain": "Конкурентное ожидание.",
    "group": "Asyncio",
    "id": "m21"
  },
  {
    "topic": "typing",
    "q": "list[int] в 3.9+ — это…",
    "options": [
      "параметризованный тип",
      "runtime list только int enforced",
      "синтаксис ошибки до 3.12",
      "tuple"
    ],
    "answer": 0,
    "explain": "Аннотация; runtime обычно не проверяет.",
    "group": "Typing и dataclasses",
    "id": "m22"
  },
  {
    "topic": "typing",
    "q": "Optional[X] означает…",
    "options": [
      "X | None",
      "X обязателен",
      "any",
      "Union пустой"
    ],
    "answer": 0,
    "explain": "Синоним X | None.",
    "group": "Typing и dataclasses",
    "id": "m23"
  },
  {
    "topic": "typing",
    "q": "Protocol нужен для…",
    "options": [
      "структурной типизации (duck typing)",
      "наследования классов",
      "GIL",
      "async"
    ],
    "answer": 0,
    "explain": "typing.Protocol / PEP 544.",
    "group": "Typing и dataclasses",
    "id": "m24"
  },
  {
    "topic": "dataclasses",
    "q": "@dataclass генерирует…",
    "options": [
      "__init__, __repr__ и др.",
      "только __slots__",
      "SQL схему",
      "JSON автоматом"
    ],
    "answer": 0,
    "explain": "Шаблон для data-holder.",
    "group": "Typing и dataclasses",
    "id": "m25"
  },
  {
    "topic": "dataclasses",
    "q": "field(default_factory=list) зачем?",
    "options": [
      "избежать shared mutable default",
      "ускорить",
      "сделать frozen",
      "валидацию"
    ],
    "answer": 0,
    "explain": "Каждый экземпляр — свой list.",
    "group": "Typing и dataclasses",
    "id": "m26"
  },
  {
    "topic": "slots",
    "q": "__slots__ ограничивает…",
    "options": [
      "набор атрибутов, экономит память",
      "число методов",
      "наследование",
      "GC"
    ],
    "answer": 0,
    "explain": "Без __dict__ по умолчанию.",
    "group": "ООП продвинутый",
    "id": "m27"
  },
  {
    "topic": "MRO",
    "q": "MRO — это…",
    "options": [
      "порядок поиска методов",
      "модуль",
      "тип ошибки",
      "менеджер памяти"
    ],
    "answer": 0,
    "explain": "Method Resolution Order (C3).",
    "group": "ООП продвинутый",
    "id": "m28"
  },
  {
    "topic": "MRO",
    "q": "Class.__mro__ показывает…",
    "options": [
      "цепочку базовых классов",
      "только родителей 1 уровня",
      "атрибуты",
      "модули"
    ],
    "answer": 0,
    "explain": "Линеаризация наследования.",
    "group": "ООП продвинутый",
    "id": "m29"
  },
  {
    "topic": "property",
    "q": "@property превращает метод в…",
    "options": [
      "атрибут-геттер",
      "статический метод",
      "классметод",
      "дескриптор записи только"
    ],
    "answer": 0,
    "explain": "Управляемый атрибут.",
    "group": "Контекст и магические методы",
    "id": "m30"
  },
  {
    "topic": "classmethod",
    "q": "@classmethod первый аргумент…",
    "options": [
      "cls (класс)",
      "self",
      "args",
      "нет аргументов"
    ],
    "answer": 0,
    "explain": "Метод класса.",
    "group": "Контекст и магические методы",
    "id": "m31"
  },
  {
    "topic": "staticmethod",
    "q": "@staticmethod…",
    "options": [
      "не принимает self/cls автоматически",
      "это глобальная функция модуля",
      "запрещён",
      "только в metaclasses"
    ],
    "answer": 0,
    "explain": "Обычная функция в пространстве класса.",
    "group": "Контекст и магические методы",
    "id": "m32"
  },
  {
    "topic": "магические",
    "q": "__str__ vs __repr__?",
    "options": [
      "str для пользователя, repr для отладки",
      "нет разницы",
      "str только для print чисел",
      "repr запрещён"
    ],
    "answer": 0,
    "explain": "PEP: repr ideally unambiguous.",
    "group": "Контекст и магические методы",
    "id": "m33"
  },
  {
    "topic": "магические",
    "q": "__eq__ определяет…",
    "options": [
      "==",
      "is",
      "hash только",
      "order <"
    ],
    "answer": 0,
    "explain": "Равенство значений.",
    "group": "Контекст и магические методы",
    "id": "m34"
  },
  {
    "topic": "магические",
    "q": "Если __eq__ определён, __hash__…",
    "options": [
      "часто ставят None для mutable",
      "обязателен всегда",
      "удаляется интерпретатором насильно",
      "наследуется от object всегда ок"
    ],
    "answer": 0,
    "explain": "Mutable с eq не должны быть hashable.",
    "group": "Контекст и магические методы",
    "id": "m35"
  },
  {
    "topic": "копирование",
    "q": "copy.copy — это…",
    "options": [
      "shallow copy",
      "deep copy",
      "ссылка",
      "pickle"
    ],
    "answer": 0,
    "explain": "Поверхностная копия.",
    "group": "Stdlib и производительность",
    "id": "m36"
  },
  {
    "topic": "копирование",
    "q": "copy.deepcopy нужен когда…",
    "options": [
      "есть вложенные изменяемые",
      "всегда вместо =",
      "для int",
      "для None"
    ],
    "answer": 0,
    "explain": "Рекурсивное копирование.",
    "group": "Stdlib и производительность",
    "id": "m37"
  },
  {
    "topic": "pickle",
    "q": "pickle используется для…",
    "options": [
      "сериализации объектов Python",
      "JSON веба",
      "SQL",
      "XML"
    ],
    "answer": 0,
    "explain": "Бинарная сериализация; осторожно с security.",
    "group": "Stdlib и производительность",
    "id": "m38"
  },
  {
    "topic": "json",
    "q": "json не сериализует напрямую…",
    "options": [
      "set, сложные объекты",
      "dict",
      "list",
      "str"
    ],
    "answer": 0,
    "explain": "Нужен default hook / конвертация.",
    "group": "Stdlib и производительность",
    "id": "m39"
  },
  {
    "topic": "регулярки",
    "q": "Модуль regex?",
    "options": [
      "re",
      "regex встроен всегда",
      "grep",
      "pattern"
    ],
    "answer": 0,
    "explain": "Стандартный re.",
    "group": "Stdlib и производительность",
    "id": "m40"
  },
  {
    "topic": "регулярки",
    "q": "re.compile полезен когда…",
    "options": [
      "паттерн переиспользуется",
      "один раз",
      "вместо str.find нельзя",
      "для bytes только"
    ],
    "answer": 0,
    "explain": "Компиляция один раз.",
    "group": "Stdlib и производительность",
    "id": "m41"
  },
  {
    "topic": "collections",
    "q": "defaultdict(int) при отсутствии ключа…",
    "options": [
      "создаёт 0",
      "KeyError",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "default_factory вызывается.",
    "group": "Collections и itertools",
    "id": "m42"
  },
  {
    "topic": "collections",
    "q": "Counter('aab')['a']?",
    "options": [
      "2",
      "1",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Подсчёт элементов.",
    "group": "Collections и itertools",
    "id": "m43"
  },
  {
    "topic": "collections",
    "q": "namedtuple — это…",
    "options": [
      "легковесный immutable с именами полей",
      "dict",
      "dataclass",
      "list"
    ],
    "answer": 0,
    "explain": "tuple + атрибуты.",
    "group": "Collections и itertools",
    "id": "m44"
  },
  {
    "topic": "collections",
    "q": "deque хорош для…",
    "options": [
      "быстрых append/pop с обоих концов",
      "случайного доступа O(1) лучше list",
      "ключей dict",
      "матриц"
    ],
    "answer": 0,
    "explain": "Двусторонняя очередь.",
    "group": "Collections и itertools",
    "id": "m45"
  },
  {
    "topic": "itertools",
    "q": "itertools.chain склеивает…",
    "options": [
      "итерируемые лениво",
      "только list",
      "dict",
      "строки обязательно"
    ],
    "answer": 0,
    "explain": "Последовательная итерация.",
    "group": "Collections и itertools",
    "id": "m46"
  },
  {
    "topic": "itertools",
    "q": "islice(it, 10) — это…",
    "options": [
      "первые 10 элементов лениво",
      "сортировка",
      "shuffle",
      "deep copy"
    ],
    "answer": 0,
    "explain": "Срез итератора.",
    "group": "Collections и itertools",
    "id": "m47"
  },
  {
    "topic": "functools",
    "q": "lru_cache — это…",
    "options": [
      "мемоизация с лимитом",
      "LRU список",
      "async lock",
      "GC hint"
    ],
    "answer": 0,
    "explain": "Кэш результатов функции.",
    "group": "Collections и itertools",
    "id": "m48"
  },
  {
    "topic": "functools",
    "q": "partial(f, 1) делает…",
    "options": [
      "новую функцию с зафиксированным аргументом",
      "вызов f",
      "копию кода f",
      "декоратор класса"
    ],
    "answer": 0,
    "explain": "Частичное применение.",
    "group": "Collections и itertools",
    "id": "m49"
  },
  {
    "topic": "исключения",
    "q": "raise X from Y связывает…",
    "options": [
      "__cause__",
      "только message",
      "traceback удаляет",
      "suppress"
    ],
    "answer": 0,
    "explain": "Exception chaining.",
    "group": "Исключения и контекст",
    "id": "m50"
  },
  {
    "topic": "исключения",
    "q": "contextlib.suppress(Error)…",
    "options": [
      "игнорирует указанные исключения",
      "логирует",
      "превращает в warning",
      "fatal"
    ],
    "answer": 0,
    "explain": "Молчаливый пропуск.",
    "group": "Исключения и контекст",
    "id": "m51"
  },
  {
    "topic": "EAFP",
    "q": "EAFP означает…",
    "options": [
      "Easier to Ask Forgiveness than Permission",
      "Always Find Path",
      "Error After Function",
      "Python anti-pattern"
    ],
    "answer": 0,
    "explain": "try/except вместо долгих проверок.",
    "group": "Тесты и качество",
    "id": "m52"
  },
  {
    "topic": "LBYL",
    "q": "LBYL — это…",
    "options": [
      "Look Before You Leap",
      "Lazy Binding",
      "List By Yield",
      "Linux Build"
    ],
    "answer": 0,
    "explain": "Проверки до действия.",
    "group": "Тесты и качество",
    "id": "m53"
  },
  {
    "topic": "args",
    "q": "def f(*, a): — a это…",
    "options": [
      "keyword-only",
      "positional-only",
      "optional",
      "variadic"
    ],
    "answer": 0,
    "explain": "* отделяет keyword-only.",
    "group": "Typing и dataclasses",
    "id": "m54"
  },
  {
    "topic": "args",
    "q": "def f(a, /): — a это…",
    "options": [
      "positional-only",
      "keyword-only",
      "kwargs",
      "default"
    ],
    "answer": 0,
    "explain": "/ — positional-only (PEP 570).",
    "group": "Typing и dataclasses",
    "id": "m55"
  },
  {
    "topic": "import",
    "q": "circular import — проблема когда…",
    "options": [
      "модули импортируют друг друга на top-level",
      "есть venv",
      "много функций",
      "typing"
    ],
    "answer": 0,
    "explain": "Лечится локальным import / рефакторингом.",
    "group": "Stdlib и производительность",
    "id": "m56"
  },
  {
    "topic": "пакеты",
    "q": "__init__.py historically…",
    "options": [
      "делает каталог пакетом",
      "обязателен всегда в 3.3+",
      "запускает pip",
      "кэш"
    ],
    "answer": 0,
    "explain": "Namespace packages могут без него.",
    "group": "Stdlib и производительность",
    "id": "m57"
  },
  {
    "topic": "тесты",
    "q": "pytest находит тесты по…",
    "options": [
      "имени test_* / *_test",
      "любому .py",
      "main",
      "doctest only"
    ],
    "answer": 0,
    "explain": "Конвенции discovery.",
    "group": "Тесты и качество",
    "id": "m58"
  },
  {
    "topic": "тесты",
    "q": "fixture в pytest — это…",
    "options": [
      "подготовка данных/ресурсов",
      "assert",
      "мок только",
      "CI job"
    ],
    "answer": 0,
    "explain": "@pytest.fixture.",
    "group": "Тесты и качество",
    "id": "m59"
  },
  {
    "topic": "mock",
    "q": "unittest.mock.patch подменяет…",
    "options": [
      "объект в пространстве имён",
      "исходник на диске",
      "GIL",
      "байткод навсегда"
    ],
    "answer": 0,
    "explain": "Временная подмена.",
    "group": "Тесты и качество",
    "id": "m60"
  },
  {
    "topic": "логирование",
    "q": "Предпочтительнее print для libs…",
    "options": [
      "logging",
      "sys.stdout.write только",
      "input",
      "warnings всегда"
    ],
    "answer": 0,
    "explain": "Модуль logging.",
    "group": "Тесты и качество",
    "id": "m61"
  },
  {
    "topic": "pathlib",
    "q": "Path('a') / 'b' даёт…",
    "options": [
      "Path('a/b')",
      "ошибку",
      "str 'a/b'",
      "list"
    ],
    "answer": 0,
    "explain": "Оператор / для Path.",
    "group": "Stdlib и производительность",
    "id": "m62"
  },
  {
    "topic": "enum",
    "q": "enum.Enum нужен для…",
    "options": [
      "именованных констант",
      "float",
      "async",
      "GIL flags"
    ],
    "answer": 0,
    "explain": "Перечисления.",
    "group": "Typing и dataclasses",
    "id": "m63"
  },
  {
    "topic": "match",
    "q": "match/case появился в…",
    "options": [
      "3.10",
      "3.8",
      "2.7",
      "3.12"
    ],
    "answer": 0,
    "explain": "Structural pattern matching.",
    "group": "Typing и dataclasses",
    "id": "m64"
  },
  {
    "topic": "walrus",
    "q": "(n := len(a)) > 0 использует…",
    "options": [
      "присваивание в выражении",
      "аннотацию",
      "decorator",
      "comprehension only"
    ],
    "answer": 0,
    "explain": "PEP 572.",
    "group": "Typing и dataclasses",
    "id": "m65"
  },
  {
    "topic": "f-string",
    "q": "f'{x=!r}' покажет…",
    "options": [
      "имя и repr значения",
      "только x",
      "ошибку до 3.12",
      "hex"
    ],
    "answer": 0,
    "explain": "Debug self-documenting.",
    "group": "Stdlib и производительность",
    "id": "m66"
  },
  {
    "topic": "bytes",
    "q": "encode/decode связывает…",
    "options": [
      "str ↔ bytes",
      "list ↔ tuple",
      "int ↔ float",
      "json ↔ dict"
    ],
    "answer": 0,
    "explain": "Текстовые кодировки.",
    "group": "Stdlib и производительность",
    "id": "m67"
  },
  {
    "topic": "ООП",
    "q": "super() используется для…",
    "options": [
      "вызова метода родителя по MRO",
      "создания потока",
      "импорта",
      "GC"
    ],
    "answer": 0,
    "explain": "Кооперативное наследование.",
    "group": "ООП продвинутый",
    "id": "m68"
  },
  {
    "topic": "ООП",
    "q": "Миксин обычно…",
    "options": [
      "класс с доп. поведением без самостоятельной роли",
      "абстрактный модуль",
      "декоратор",
      "metaclasses only"
    ],
    "answer": 0,
    "explain": "Multiple inheritance utility.",
    "group": "ООП продвинутый",
    "id": "m69"
  },
  {
    "topic": "ABC",
    "q": "abc.ABC / @abstractmethod…",
    "options": [
      "запрещает инстанс без реализации",
      "ускоряет",
      "добавляет slots",
      "заменяет Protocol"
    ],
    "answer": 0,
    "explain": "Номинальные абстрактные классы.",
    "group": "ООП продвинутый",
    "id": "m70"
  },
  {
    "topic": "дескрипторы",
    "q": "Дескриптор — объект с…",
    "options": [
      "__get__/__set__/__delete__",
      "только __call__",
      "yield",
      "async"
    ],
    "answer": 0,
    "explain": "Протокол дескрипторов; property на нём.",
    "group": "Контекст и магические методы",
    "id": "m71"
  },
  {
    "topic": "weakref",
    "q": "weakref нужен чтобы…",
    "options": [
      "ссылаться без удержания GC",
      "ускорить dict",
      "шифровать",
      "сериализовать"
    ],
    "answer": 0,
    "explain": "Слабые ссылки.",
    "group": "Stdlib и производительность",
    "id": "m72"
  },
  {
    "topic": "GC",
    "q": "Сборщик циклических ссылок — это…",
    "options": [
      "gc модуль / cyclic GC",
      "только refcount",
      "GIL",
      "swap"
    ],
    "answer": 0,
    "explain": "refcount + periodic cycle detection.",
    "group": "Stdlib и производительность",
    "id": "m73"
  },
  {
    "topic": "refcount",
    "q": "sys.getrefcount(obj)…",
    "options": [
      "считает ссылки (+временные)",
      "размер байт",
      "hash",
      "id"
    ],
    "answer": 0,
    "explain": "Включая временные при вызове.",
    "group": "Stdlib и производительность",
    "id": "m74"
  },
  {
    "topic": "performance",
    "q": "Для многих membership checks лучше…",
    "options": [
      "set",
      "list",
      "tuple всегда",
      "queue"
    ],
    "answer": 0,
    "explain": "Среднее O(1) у set.",
    "group": "Stdlib и производительность",
    "id": "m75"
  },
  {
    "topic": "performance",
    "q": "Конкатенация много str в цикле…",
    "options": [
      "лучше join",
      "+= всегда ок",
      "f-string в цикле идеал",
      "bytearray обязателен"
    ],
    "answer": 0,
    "explain": "''.join(parts) эффективнее.",
    "group": "Stdlib и производительность",
    "id": "m76"
  },
  {
    "topic": "sort",
    "q": "sorted(xs, key=lambda x: x[1])…",
    "options": [
      "сортирует по второму элементу",
      "удаляет",
      "группирует",
      "хеширует"
    ],
    "answer": 0,
    "explain": "key function.",
    "group": "Stdlib и производительность",
    "id": "m77"
  },
  {
    "topic": "sort",
    "q": "Сортировка в Python…",
    "options": [
      "стабильная (Timsort)",
      "unstable",
      "quicksort гарантирован",
      "только числа"
    ],
    "answer": 0,
    "explain": "Стабильный Timsort.",
    "group": "Stdlib и производительность",
    "id": "m78"
  },
  {
    "topic": "исключения",
    "q": "except Exception as e: — e доступен…",
    "options": [
      "в блоке except (и очищается после в 3)",
      "глобально",
      "в finally всегда",
      "никогда"
    ],
    "answer": 0,
    "explain": "Имя исключения.",
    "group": "Исключения и контекст",
    "id": "m79"
  },
  {
    "topic": "with",
    "q": "Несколько контекстов: with A() as a, B() as b",
    "options": [
      "да, поддерживается",
      "нет",
      "только async with",
      "только 3.12+"
    ],
    "answer": 0,
    "explain": "Несколько CM в одном with.",
    "group": "Исключения и контекст",
    "id": "m80"
  },
  {
    "topic": "generators",
    "q": "yield from subgen…",
    "options": [
      "делегирует итерацию подгенератору",
      "копирует list",
      "создаёт thread",
      "закрывает файл"
    ],
    "answer": 0,
    "explain": "PEP 380.",
    "group": "Генераторы и итераторы",
    "id": "m81"
  },
  {
    "topic": "coroutines",
    "q": "gen.send(x) передаёт…",
    "options": [
      "значение в yield",
      "в return",
      "в global",
      "в GIL"
    ],
    "answer": 0,
    "explain": "Двусторонние генераторы.",
    "group": "Генераторы и итераторы",
    "id": "m82"
  },
  {
    "topic": "typing",
    "q": "TypedDict описывает…",
    "options": [
      "словари с известными ключами/типами",
      "list",
      "dataclass",
      "Enum"
    ],
    "answer": 0,
    "explain": "Типизация dict-структур.",
    "group": "Typing и dataclasses",
    "id": "m83"
  },
  {
    "topic": "typing",
    "q": "Literal['a','b'] означает…",
    "options": [
      "только эти значения",
      "любой str",
      "Enum автоматом",
      "bytes"
    ],
    "answer": 0,
    "explain": "Буквальные типы.",
    "group": "Typing и dataclasses",
    "id": "m84"
  },
  {
    "topic": "dataclasses",
    "q": "frozen=True делает…",
    "options": [
      "приблизительно immutable экземпляр",
      "slots",
      "slots+dict",
      "JSON"
    ],
    "answer": 0,
    "explain": "Запрет присваивания полей.",
    "group": "Typing и dataclasses",
    "id": "m85"
  },
  {
    "topic": "attrs/pydantic",
    "q": "Pydantic в отличие от dataclass часто…",
    "options": [
      "валидирует данные на runtime",
      "только генерирует __init__",
      "заменяет GIL",
      "компилирует C"
    ],
    "answer": 0,
    "explain": "Валидация и парсинг.",
    "group": "Typing и dataclasses",
    "id": "m86"
  },
  {
    "topic": "HTTP",
    "q": "Популярная sync HTTP библиотека?",
    "options": [
      "requests",
      "http.client только принято",
      "urllib обязателен везде",
      "socket сырой"
    ],
    "answer": 0,
    "explain": "requests — de facto.",
    "group": "Веб и API",
    "id": "m87"
  },
  {
    "topic": "HTTP",
    "q": "httpx хорош тем что…",
    "options": [
      "поддерживает sync и async",
      "только Python 2",
      "заменяет Django",
      "встроен в stdlib"
    ],
    "answer": 0,
    "explain": "Современный клиент.",
    "group": "Веб и API",
    "id": "m88"
  },
  {
    "topic": "WSGI",
    "q": "WSGI — это…",
    "options": [
      "интерфейс sync веб-приложений",
      "async сервер",
      "ORM",
      "шаблонизатор"
    ],
    "answer": 0,
    "explain": "PEP 3333.",
    "group": "Веб и API",
    "id": "m89"
  },
  {
    "topic": "ASGI",
    "q": "ASGI — это…",
    "options": [
      "async интерфейс Python веб-приложений",
      "старый CGI",
      "замена TCP",
      "тип list"
    ],
    "answer": 0,
    "explain": "Django/FastAPI/Starlette.",
    "group": "Веб и API",
    "id": "m90"
  },
  {
    "topic": "FastAPI",
    "q": "FastAPI строится вокруг…",
    "options": [
      "type hints + ASGI",
      "только Flask sync",
      "GIL removal",
      "GUI"
    ],
    "answer": 0,
    "explain": "Аннотации → OpenAPI/валидация.",
    "group": "Веб и API",
    "id": "m91"
  },
  {
    "topic": "SQL",
    "q": "SQLAlchemy — это…",
    "options": [
      "ORM/toolkit для БД",
      "NoSQL база",
      "кэш Redis",
      "брокер"
    ],
    "answer": 0,
    "explain": "Популярный ORM.",
    "group": "Веб и API",
    "id": "m92"
  },
  {
    "topic": "DI",
    "q": "Dependency Injection помогает…",
    "options": [
      "тестируемости и слабой связанности",
      "ускорить GIL",
      "уменьшить RAM магией",
      "заменить типы"
    ],
    "answer": 0,
    "explain": "Явные зависимости.",
    "group": "Веб и API",
    "id": "m93"
  },
  {
    "topic": "замыкания",
    "q": "Что напечатают funcs[0]() при классической ошибке позднего связывания?",
    "options": [
      "2",
      "0",
      "1",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Без значения по умолчанию все замыкания видят финальный i.",
    "code": "funcs = []\nfor i in range(3):\n    funcs.append(lambda: i)\n# funcs[0]()",
    "group": "Декораторы и замыкания",
    "id": "m94"
  },
  {
    "topic": "замыкания",
    "q": "Как зафиксировать i в lambda в цикле?",
    "options": [
      "lambda i=i: i",
      "lambda: i.copy()",
      "global i",
      "nonlocal i в цикле"
    ],
    "answer": 0,
    "explain": "Default arg связывается в момент определения.",
    "group": "Декораторы и замыкания",
    "id": "m95"
  },
  {
    "topic": "listcomp",
    "q": "Что вернёт [i for i in range(5) if i%2==0]?",
    "options": [
      "[0, 2, 4]",
      "[1, 3]",
      "[0,1,2,3,4]",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Фильтр в comprehension.",
    "group": "Генераторы и итераторы",
    "id": "m96"
  },
  {
    "topic": "dict",
    "q": "dict.fromkeys(['a','b'], []) — опасность?",
    "options": [
      "один и тот же list на все ключи",
      "KeyError",
      "нет опасности",
      "глубокая копия"
    ],
    "answer": 0,
    "explain": "value не копируется.",
    "group": "Collections и itertools",
    "id": "m97"
  },
  {
    "topic": "is",
    "q": "Малые int кэшируются; обычно (256 is 256)…",
    "options": [
      "True",
      "False",
      "ошибка",
      "зависит от OS только"
    ],
    "answer": 0,
    "explain": "Interning малых целых в CPython.",
    "group": "Stdlib и производительность",
    "id": "m98"
  },
  {
    "topic": "is",
    "q": "Обычно (257 is 257) для литералов в одном выражении…",
    "options": [
      "часто True из-за peephole, но не контракт",
      "всегда False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "На identity int полагаться нельзя — используйте ==.",
    "group": "Stdlib и производительность",
    "id": "m99"
  },
  {
    "topic": "строки",
    "q": "Интернирование строк: sys.intern",
    "options": [
      "принудительно дедуплицирует str",
      "шифрует",
      "делает bytes",
      "GC disable"
    ],
    "answer": 0,
    "explain": "Для частых ключей.",
    "group": "Stdlib и производительность",
    "id": "m100"
  },
  {
    "topic": "memoryview",
    "q": "memoryview нужен для…",
    "options": [
      "работы со срезами bytes без копирования",
      "GUI",
      "JSON",
      "async sleep"
    ],
    "answer": 0,
    "explain": "Буферный протокол.",
    "group": "Stdlib и производительность",
    "id": "m101"
  },
  {
    "topic": "struct",
    "q": "struct.pack упаковывает…",
    "options": [
      "значения в bytes по формату",
      "JSON",
      "pickle",
      "XML"
    ],
    "answer": 0,
    "explain": "Бинарные форматы.",
    "group": "Stdlib и производительность",
    "id": "m102"
  },
  {
    "topic": "array",
    "q": "array.array vs list?",
    "options": [
      "типизированный компактный массив",
      "то же самое",
      "всегда быстрее dict",
      "immutable"
    ],
    "answer": 0,
    "explain": "Однотипные числовые значения.",
    "group": "Collections и itertools",
    "id": "m103"
  },
  {
    "topic": "декораторы",
    "q": "Порядок @a @b def f: это…",
    "options": [
      "f = a(b(f))",
      "f = b(a(f))",
      "параллельно",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Ближний декоратор применяется первым.",
    "group": "Декораторы и замыкания",
    "id": "m104"
  },
  {
    "topic": "генераторы",
    "q": "list(x for x in range(3))?",
    "options": [
      "[0,1,2]",
      "generator object print",
      "tuple",
      "ошибка"
    ],
    "answer": 0,
    "explain": "list поглощает genexp.",
    "group": "Генераторы и итераторы",
    "id": "m105"
  },
  {
    "topic": "генераторы",
    "q": "return value в генераторе (3.3+)…",
    "options": [
      "кладёт value в StopIteration.value",
      "синтаксическая ошибка",
      "как обычный return из caller",
      "игнорируется"
    ],
    "answer": 0,
    "explain": "PEP 380: return x в generator → StopIteration.value = x.",
    "group": "Генераторы и итераторы",
    "id": "m106"
  },
  {
    "topic": "async",
    "q": "async for нужен для…",
    "options": [
      "async-итераторов",
      "обычных list",
      "threading",
      "multiprocessing"
    ],
    "answer": 0,
    "explain": "__aiter__/__anext__.",
    "group": "Asyncio",
    "id": "m107"
  },
  {
    "topic": "async",
    "q": "async with нужен для…",
    "options": [
      "async context managers",
      "обычного open только",
      "threads",
      "files sync"
    ],
    "answer": 0,
    "explain": "__aenter__/__aexit__.",
    "group": "Asyncio",
    "id": "m108"
  },
  {
    "topic": "typing",
    "q": "Union[int, str] эквивалент 3.10+…",
    "options": [
      "int | str",
      "int & str",
      "Optional",
      "Any"
    ],
    "answer": 0,
    "explain": "PEP 604.",
    "group": "Typing и dataclasses",
    "id": "m109"
  },
  {
    "topic": "typing",
    "q": "Final[x] означает…",
    "options": [
      "не должен переназначаться",
      "константа CPU",
      "frozen dataclass",
      "slots"
    ],
    "answer": 0,
    "explain": "Для чекеров.",
    "group": "Typing и dataclasses",
    "id": "m110"
  },
  {
    "topic": "typing",
    "q": "Annotated[int, ...] несёт…",
    "options": [
      "метаданные для инструментов",
      "runtime check обязательно",
      "GIL hint",
      "скорость"
    ],
    "answer": 0,
    "explain": "PEP 593.",
    "group": "Typing и dataclasses",
    "id": "m111"
  },
  {
    "topic": "dataclasses",
    "q": "asdict(obj) делает…",
    "options": [
      "рекурсивно в dict",
      "json string",
      "pickle",
      "slots"
    ],
    "answer": 0,
    "explain": "dataclasses.asdict.",
    "group": "Typing и dataclasses",
    "id": "m112"
  },
  {
    "topic": "collections",
    "q": "ChainMap полезен для…",
    "options": [
      "слоя переопределений mapping",
      "SQL join",
      "async gather",
      "heap"
    ],
    "answer": 0,
    "explain": "Просмотр нескольких dict.",
    "group": "Collections и itertools",
    "id": "m113"
  },
  {
    "topic": "heapq",
    "q": "heapq реализует…",
    "options": [
      "бинарную кучу на list",
      "AVL",
      "B-tree",
      "deque"
    ],
    "answer": 0,
    "explain": "Приоритетная очередь.",
    "group": "Collections и itertools",
    "id": "m114"
  },
  {
    "topic": "bisect",
    "q": "bisect модуль для…",
    "options": [
      "бинарного поиска/вставки в sorted list",
      "быстрой сортировки",
      "hash",
      "GIL"
    ],
    "answer": 0,
    "explain": "Поддержание порядка.",
    "group": "Collections и itertools",
    "id": "m115"
  },
  {
    "topic": "tempfile",
    "q": "NamedTemporaryFile удаляется…",
    "options": [
      "часто при закрытии (зависит от delete)",
      "никогда",
      "только reboot",
      "вручную обязателен всегда"
    ],
    "answer": 0,
    "explain": "Параметр delete.",
    "group": "Stdlib и производительность",
    "id": "m116"
  },
  {
    "topic": "pathlib",
    "q": "Path.read_text()…",
    "options": [
      "читает файл как str",
      "bytes only",
      "json",
      "lines iterator always"
    ],
    "answer": 0,
    "explain": "Удобный helper.",
    "group": "Stdlib и производительность",
    "id": "m117"
  },
  {
    "topic": "subprocess",
    "q": "capture_output=True в run…",
    "options": [
      "собирает stdout/stderr",
      "shell=True",
      "async",
      "ignore"
    ],
    "answer": 0,
    "explain": "subprocess.run.",
    "group": "Stdlib и производительность",
    "id": "m118"
  },
  {
    "topic": "dataclasses",
    "q": "kw_only=True (3.10)…",
    "options": [
      "поля только keyword",
      "frozen",
      "slots",
      "order"
    ],
    "answer": 0,
    "explain": "Keyword-only fields.",
    "group": "Typing и dataclasses",
    "id": "m119"
  },
  {
    "topic": "match",
    "q": "case _ : означает…",
    "options": [
      "wildcard / default",
      "ошибку",
      "None only",
      "ellipsis object"
    ],
    "answer": 0,
    "explain": "Шаблон по умолчанию.",
    "group": "Typing и dataclasses",
    "id": "m120"
  },
  {
    "topic": "match",
    "q": "case [x, *rest]:",
    "options": [
      "матчит последовательность",
      "только list тип строго runtime class",
      "dict",
      "set"
    ],
    "answer": 0,
    "explain": "Sequence pattern.",
    "group": "Typing и dataclasses",
    "id": "m121"
  },
  {
    "topic": "exceptions",
    "q": "Exception.__notes__ (3.11)…",
    "options": [
      "доп. заметки к исключению",
      "stack only",
      "warnings",
      "logs"
    ],
    "answer": 0,
    "explain": "add_note.",
    "group": "Исключения и контекст",
    "id": "m122"
  },
  {
    "topic": "warnings",
    "q": "warnings.filterwarnings управляет…",
    "options": [
      "показом предупреждений",
      "exceptions",
      "logs level only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Модуль warnings.",
    "group": "Тесты и качество",
    "id": "m123"
  },
  {
    "topic": "import",
    "q": "importlib.reload…",
    "options": [
      "перезагружает модуль",
      "удаляет пакет",
      "чистит pip",
      "restart OS"
    ],
    "answer": 0,
    "explain": "Осторожно с состоянием.",
    "group": "Stdlib и производительность",
    "id": "m124"
  },
  {
    "topic": "abc",
    "q": "@abstractmethod на property…",
    "options": [
      "возможно",
      "нельзя",
      "только methods",
      "только classmethod"
    ],
    "answer": 0,
    "explain": "Абстрактные property.",
    "group": "ООП продвинутый",
    "id": "m125"
  },
  {
    "topic": "protocols",
    "q": "runtime_checkable Protocol…",
    "options": [
      "isinstance может проверить методы",
      "всегда без runtime",
      "заменяет ABC полностью без оговорок",
      "GIL"
    ],
    "answer": 0,
    "explain": "Ограниченная runtime проверка.",
    "group": "Typing и dataclasses",
    "id": "m126"
  },
  {
    "topic": "functools",
    "q": "singledispatch — это…",
    "options": [
      "мультиметод по типу 1-го аргумента",
      "async gather",
      "cache",
      "partial only"
    ],
    "answer": 0,
    "explain": "functools.singledispatch.",
    "group": "Collections и itertools",
    "id": "m127"
  },
  {
    "topic": "functools",
    "q": "cached_property…",
    "options": [
      "кэш на экземпляре",
      "lru глобальный",
      "classmethod",
      "slots"
    ],
    "answer": 0,
    "explain": "Пересчёт один раз.",
    "group": "Collections и itertools",
    "id": "m128"
  },
  {
    "topic": "itertools",
    "q": "groupby требует…",
    "options": [
      "часто предварительной сортировки по ключу",
      "dict",
      "set",
      "async"
    ],
    "answer": 0,
    "explain": "Группирует подряд идущие.",
    "group": "Collections и itertools",
    "id": "m129"
  },
  {
    "topic": "itertools",
    "q": "list(product('ab', repeat=2))?",
    "options": [
      "[('a', 'a'), ('a', 'b'), ('b', 'a'), ('b', 'b')]",
      "['ab']",
      "['a', 'b']",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Декартово произведение.",
    "group": "Collections и itertools",
    "id": "m130"
  },
  {
    "topic": "itertools",
    "q": "cycle([1,2])…",
    "options": [
      "бесконечно повторяет",
      "один проход",
      "shuffle",
      "sort"
    ],
    "answer": 0,
    "explain": "Бесконечный итератор.",
    "group": "Collections и itertools",
    "id": "m131"
  },
  {
    "topic": "операторы",
    "q": "a := b := 1 синтаксис…",
    "options": [
      "запрещён (SyntaxError)",
      "допустим как a = b = 1",
      "только в if",
      "только 3.12"
    ],
    "answer": 0,
    "explain": "Цепочка walrus так нельзя. Нужно a = b = 1 или (a := (b := 1)).",
    "group": "Typing и dataclasses",
    "id": "m132"
  },
  {
    "topic": "comprehensions",
    "q": "Есть ли у listcomp своей scope?",
    "options": [
      "да (с 3), локальные переменные не утекают",
      "нет как в 2.7",
      "только для async",
      "только dictcomp"
    ],
    "answer": 0,
    "explain": "Leak фиксанули.",
    "group": "Генераторы и итераторы",
    "id": "m133"
  },
  {
    "topic": "gil",
    "q": "numpy отпускает GIL в тяжёлых C-циклах часто…",
    "options": [
      "да, многие операции",
      "никогда",
      "только print",
      "только на Windows"
    ],
    "answer": 0,
    "explain": "C-extensions pattern.",
    "group": "Потоки, процессы, GIL",
    "id": "m134"
  },
  {
    "topic": "memory",
    "q": "sys.getsizeof([1,2]) учитывает…",
    "options": [
      "overhead контейнера, не глубоко элементы всегда",
      "всю глубокую структуру",
      "только int",
      "disk"
    ],
    "answer": 0,
    "explain": "Не deep size.",
    "group": "Stdlib и производительность",
    "id": "m135"
  },
  {
    "topic": "json",
    "q": "json.loads vs load?",
    "options": [
      "строка vs file object",
      "нет разницы",
      "bytes vs path",
      "pickle"
    ],
    "answer": 0,
    "explain": "s = string.",
    "group": "Stdlib и производительность",
    "id": "m136"
  },
  {
    "topic": "csv",
    "q": "csv.DictReader читает…",
    "options": [
      "строки как dict по заголовку",
      "JSON",
      "pickle",
      "YAML"
    ],
    "answer": 0,
    "explain": "Модуль csv.",
    "group": "Stdlib и производительность",
    "id": "m137"
  },
  {
    "topic": "sqlite",
    "q": "sqlite3 в stdlib…",
    "options": [
      "встроенная БД в файле/памяти",
      "клиент Postgres",
      "Redis",
      "Mongo"
    ],
    "answer": 0,
    "explain": "Удобно для локального.",
    "group": "Stdlib и производительность",
    "id": "m138"
  },
  {
    "topic": "hashlib",
    "q": "hashlib.sha256 нужен для…",
    "options": [
      "криптографического хеша",
      "hash() dict",
      "id()",
      "random"
    ],
    "answer": 0,
    "explain": "Не путать с hash().",
    "group": "Stdlib и производительность",
    "id": "m139"
  },
  {
    "topic": "secrets",
    "q": "secrets модуль лучше random для…",
    "options": [
      "токенов/криптографии",
      "shuffle колоды в игре ok всегда",
      "math sim",
      "sort"
    ],
    "answer": 0,
    "explain": "Криптостойкость.",
    "group": "Stdlib и производительность",
    "id": "m140"
  },
  {
    "topic": "dataclasses",
    "q": "slots=True (3.10+) у dataclass…",
    "options": [
      "генерирует __slots__",
      "frozen",
      "kw_only",
      "JSON"
    ],
    "answer": 0,
    "explain": "Экономия памяти.",
    "group": "Typing и dataclasses",
    "id": "m141"
  },
  {
    "topic": "typing",
    "q": "TypedDict total=False…",
    "options": [
      "ключи опциональны",
      "запрещены",
      "только str values",
      "frozen"
    ],
    "answer": 0,
    "explain": "Частичные словари.",
    "group": "Typing и dataclasses",
    "id": "m142"
  },
  {
    "topic": "http",
    "q": "idempotent методы HTTP обычно…",
    "options": [
      "GET PUT DELETE",
      "POST только",
      "PATCH always",
      "CONNECT"
    ],
    "answer": 0,
    "explain": "Семантика HTTP.",
    "group": "Веб и API",
    "id": "m143"
  },
  {
    "topic": "декораторы",
    "q": "@decorator без скобок vs @decorator()…",
    "options": [
      "объект vs вызов фабрики",
      "нет разницы",
      "скобки запрещены",
      "только для class"
    ],
    "answer": 0,
    "explain": "() нужны, если декоратор-фабрика.",
    "group": "Декораторы и замыкания",
    "id": "m144"
  },
  {
    "topic": "замыкания",
    "q": "cell в замыкании хранит…",
    "options": [
      "cell_contents enclosing переменной",
      "bytecode",
      "GIL lock",
      "только int"
    ],
    "answer": 0,
    "explain": "__closure__.",
    "group": "Декораторы и замыкания",
    "id": "m145"
  },
  {
    "topic": "генераторы",
    "q": "gen.close() вызывает в генераторе…",
    "options": [
      "GeneratorExit",
      "StopIteration только",
      "KeyboardInterrupt",
      "ничего"
    ],
    "answer": 0,
    "explain": "Завершение генератора.",
    "group": "Генераторы и итераторы",
    "id": "m146"
  },
  {
    "topic": "генераторы",
    "q": "Генератор — одноразовый?",
    "options": [
      "да, после исчерпания пуст",
      "нет, рестарт сам",
      "как list",
      "кэшируется"
    ],
    "answer": 0,
    "explain": "Нужен новый вызов функции.",
    "group": "Генераторы и итераторы",
    "id": "m147"
  },
  {
    "topic": "итераторы",
    "q": "У list итератор отдельный объект?",
    "options": [
      "да",
      "нет, list is iterator",
      "только для tuple",
      "только dict"
    ],
    "answer": 0,
    "explain": "iter(list) создаёт list_iterator.",
    "group": "Генераторы и итераторы",
    "id": "m148"
  },
  {
    "topic": "context",
    "q": "Если __exit__ вернул True…",
    "options": [
      "подавляет исключение",
      "ре-рейзит всегда",
      "закрывает GIL",
      "игнор return"
    ],
    "answer": 0,
    "explain": "Swallow exception.",
    "group": "Исключения и контекст",
    "id": "m149"
  },
  {
    "topic": "GIL",
    "q": "Время переключения GIL roughly связано с…",
    "options": [
      "check interval / eval breaker",
      "только OS quantum",
      "GC only",
      "pip"
    ],
    "answer": 0,
    "explain": "sys.setswitchinterval.",
    "group": "Потоки, процессы, GIL",
    "id": "m150"
  },
  {
    "topic": "threading",
    "q": "Lock.acquire в том же потоке повторно без RLock…",
    "options": [
      "дедлок",
      "ok",
      "ошибка импорта",
      "auto-release"
    ],
    "answer": 0,
    "explain": "Обычный Lock не реентерабелен.",
    "group": "Потоки, процессы, GIL",
    "id": "m151"
  },
  {
    "topic": "threading",
    "q": "RLock отличается тем что…",
    "options": [
      "реентерабельный",
      "быстрее всегда",
      "для процессов",
      "async only"
    ],
    "answer": 0,
    "explain": "Можно acquire несколько раз одним потоком.",
    "group": "Потоки, процессы, GIL",
    "id": "m152"
  },
  {
    "topic": "multiprocessing",
    "q": "Queue между процессами…",
    "options": [
      "сериализует объекты",
      "делит память напрямую always",
      "только str",
      "GIL share"
    ],
    "answer": 0,
    "explain": "Через pickle/IPC.",
    "group": "Потоки, процессы, GIL",
    "id": "m153"
  },
  {
    "topic": "asyncio",
    "q": "create_task планирует…",
    "options": [
      "выполнение корутины на loop",
      "OS thread",
      "process",
      "sync call"
    ],
    "answer": 0,
    "explain": "Task на event loop.",
    "group": "Asyncio",
    "id": "m154"
  },
  {
    "topic": "asyncio",
    "q": "run_in_executor нужен для…",
    "options": [
      "блокирующего кода в thread/process pool",
      "быстрее await sleep",
      "замены gather",
      "GUI only"
    ],
    "answer": 0,
    "explain": "Не блокировать loop.",
    "group": "Asyncio",
    "id": "m155"
  },
  {
    "topic": "typing",
    "q": "NoReturn означает…",
    "options": [
      "функция не возвращает нормально",
      "return None",
      "Any",
      "Never only 2.7"
    ],
    "answer": 0,
    "explain": "Всегда бросает/exit.",
    "group": "Typing и dataclasses",
    "id": "m156"
  },
  {
    "topic": "typing",
    "q": "TypedDict vs dataclass?",
    "options": [
      "TypedDict для dict-форм, dataclass — объекты",
      "одно и то же",
      "TypedDict runtime class always",
      "dataclass только JSON"
    ],
    "answer": 0,
    "explain": "Разные модели данных.",
    "group": "Typing и dataclasses",
    "id": "m157"
  },
  {
    "topic": "typing",
    "q": "Unpack/TypeVarTuple связаны с…",
    "options": [
      "вариативными generics",
      "GIL",
      "async",
      "pathlib"
    ],
    "answer": 0,
    "explain": "PEP 646.",
    "group": "Typing и dataclasses",
    "id": "m158"
  },
  {
    "topic": "dataclasses",
    "q": "order=True добавляет…",
    "options": [
      "сравнения < <= и т.д.",
      "hash всегда",
      "slots",
      "JSON"
    ],
    "answer": 0,
    "explain": "По полям по порядку.",
    "group": "Typing и dataclasses",
    "id": "m159"
  },
  {
    "topic": "dataclasses",
    "q": "InitVar — это…",
    "options": [
      "поле только для __init__, не хранится",
      "classmethod",
      "property",
      "slots field"
    ],
    "answer": 0,
    "explain": "Init-only.",
    "group": "Typing и dataclasses",
    "id": "m160"
  },
  {
    "topic": "collections",
    "q": "UserDict зачем?",
    "options": [
      "удобное наследование под dict-like",
      "быстрее dict",
      "замена OrderedDict",
      "async map"
    ],
    "answer": 0,
    "explain": "Обёртка для кастомизации.",
    "group": "Collections и itertools",
    "id": "m161"
  },
  {
    "topic": "collections",
    "q": "OrderedDict всё ещё нужен после 3.7?",
    "options": [
      "для move_to_end / equality по порядку и явного API",
      "нет никогда",
      "только PyPy",
      "для set"
    ],
    "answer": 0,
    "explain": "Специфичные методы.",
    "group": "Collections и itertools",
    "id": "m162"
  },
  {
    "topic": "itertools",
    "q": "tee(it, n)…",
    "options": [
      "разветвляет итератор (с буфером)",
      "копирует list",
      "shuffle",
      "sort"
    ],
    "answer": 0,
    "explain": "Память растёт, если ветки расходятся.",
    "group": "Collections и itertools",
    "id": "m163"
  },
  {
    "topic": "itertools",
    "q": "list(accumulate([1,2,3]))?",
    "options": [
      "[1, 3, 6]",
      "[6]",
      "[1, 2, 3]",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Накопительная сумма.",
    "group": "Collections и itertools",
    "id": "m164"
  },
  {
    "topic": "functools",
    "q": "reduce(lambda a,b:a+b, [1,2,3])?",
    "options": [
      "6",
      "[1,2,3]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Свёртка.",
    "group": "Collections и itertools",
    "id": "m165"
  },
  {
    "topic": "functools",
    "q": "total_ordering помогает…",
    "options": [
      "достроить сравнения из немногих методов",
      "сортировать быстрее C",
      "GIL",
      "hash"
    ],
    "answer": 0,
    "explain": "Класс-декоратор.",
    "group": "Collections и itertools",
    "id": "m166"
  },
  {
    "topic": "исключения",
    "q": "except* (3.11) ловит…",
    "options": [
      "подисключения ExceptionGroup",
      "только async",
      "BaseExceptionGroup нельзя",
      "синтаксис 3.8"
    ],
    "answer": 0,
    "explain": "PEP 654.",
    "group": "Исключения и контекст",
    "id": "m167"
  },
  {
    "topic": "тесты",
    "q": "monkeypatch в pytest…",
    "options": [
      "временно патчит атрибуты/env",
      "меняет CPython",
      "удаляет тесты",
      "CI matrix"
    ],
    "answer": 0,
    "explain": "Изоляция сайд-эффектов.",
    "group": "Тесты и качество",
    "id": "m168"
  },
  {
    "topic": "тесты",
    "q": "parametrize нужен для…",
    "options": [
      "набора вход→ожидание",
      "фикстур только",
      "моков",
      "coverage"
    ],
    "answer": 0,
    "explain": "@pytest.mark.parametrize.",
    "group": "Тесты и качество",
    "id": "m169"
  },
  {
    "topic": "pathlib",
    "q": "Path.resolve()…",
    "options": [
      "абсолютный путь + symlink resolve",
      "только str",
      "удаляет файл",
      "chmod"
    ],
    "answer": 0,
    "explain": "Канонический путь.",
    "group": "Stdlib и производительность",
    "id": "m170"
  },
  {
    "topic": "регулярки",
    "q": "re.VERBOSE позволяет…",
    "options": [
      "комментарии и пробелы в паттерне",
      "быстрее match",
      "только bytes",
      "JIT"
    ],
    "answer": 0,
    "explain": "Читаемые regex.",
    "group": "Stdlib и производительность",
    "id": "m171"
  },
  {
    "topic": "json",
    "q": "default= в dumps…",
    "options": [
      "сериализатор неизвестных типов",
      "indent",
      "encoding",
      "sort_keys"
    ],
    "answer": 0,
    "explain": "Хук для set/datetime и т.п.",
    "group": "Stdlib и производительность",
    "id": "m172"
  },
  {
    "topic": "performance",
    "q": "Генератор vs list для большого потока…",
    "options": [
      "генератор экономит память",
      "list всегда быстрее и лучше",
      "без разницы",
      "GIL снимает"
    ],
    "answer": 0,
    "explain": "Ленивость.",
    "group": "Stdlib и производительность",
    "id": "m173"
  },
  {
    "topic": "sort",
    "q": "key= должен быть…",
    "options": [
      "вызываемым, вызывается раз на элемент (декоратор)",
      "cmp как в Py2 обязателен",
      "async",
      "hash"
    ],
    "answer": 0,
    "explain": "Schwartzian transform внутри.",
    "group": "Stdlib и производительность",
    "id": "m174"
  },
  {
    "topic": "магические",
    "q": "__len__ должен возвращать…",
    "options": [
      "int >= 0",
      "любой float",
      "str",
      "None"
    ],
    "answer": 0,
    "explain": "Иначе TypeError/ValueError.",
    "group": "Контекст и магические методы",
    "id": "m175"
  },
  {
    "topic": "магические",
    "q": "__bool__ если нет, берётся…",
    "options": [
      "__len__ != 0",
      "всегда True",
      "hash",
      "id"
    ],
    "answer": 0,
    "explain": "Правдивость объектов.",
    "group": "Контекст и магические методы",
    "id": "m176"
  },
  {
    "topic": "property",
    "q": "obj.x = 1 при property без setter…",
    "options": [
      "AttributeError",
      "создаст в __dict__ всегда",
      "ok",
      "TypeError only"
    ],
    "answer": 0,
    "explain": "Read-only property.",
    "group": "Контекст и магические методы",
    "id": "m177"
  },
  {
    "topic": "MRO",
    "q": "diamond inheritance решает…",
    "options": [
      "C3 linearization",
      "случайный порядок",
      "только первый parent",
      "запрет syntax"
    ],
    "answer": 0,
    "explain": "Предсказуемый MRO.",
    "group": "ООП продвинутый",
    "id": "m178"
  },
  {
    "topic": "ABC",
    "q": "Можно ли инстанцировать ABC без abstract методов?",
    "options": [
      "да",
      "нет никогда",
      "только Protocol",
      "только mixin"
    ],
    "answer": 0,
    "explain": "Абстрактность из-за abstract methods.",
    "group": "ООП продвинутый",
    "id": "m179"
  },
  {
    "topic": "weakref",
    "q": "WeakValueDictionary хранит…",
    "options": [
      "слабые ссылки на значения",
      "сильные на ключи и значения",
      "только int",
      "файлы"
    ],
    "answer": 0,
    "explain": "GC может удалить value.",
    "group": "Stdlib и производительность",
    "id": "m180"
  },
  {
    "topic": "copy",
    "q": "Для объекта с циклическими ссылками deepcopy…",
    "options": [
      "справляется через memo",
      "всегда падает",
      "игнорирует циклы молча теряя",
      "запрещён"
    ],
    "answer": 0,
    "explain": "memo dict.",
    "group": "Stdlib и производительность",
    "id": "m181"
  },
  {
    "topic": "HTTP",
    "q": "requests.get timeout…",
    "options": [
      "ограничивает ожидание",
      "обязателен всегда синтаксисом",
      "только connect",
      "async only"
    ],
    "answer": 0,
    "explain": "Защита от зависаний.",
    "group": "Веб и API",
    "id": "m182"
  },
  {
    "topic": "ASGI",
    "q": "Starlette/FastAPI — это…",
    "options": [
      "ASGI-фреймворки",
      "только WSGI",
      "GUI",
      "ORM"
    ],
    "answer": 0,
    "explain": "Асинхронный стек.",
    "group": "Веб и API",
    "id": "m183"
  },
  {
    "topic": "SQL",
    "q": "session.rollback в SQLAlchemy…",
    "options": [
      "отменяет транзакцию",
      "drop table",
      "vacuum",
      "commit"
    ],
    "answer": 0,
    "explain": "Откат.",
    "group": "Веб и API",
    "id": "m184"
  },
  {
    "topic": "match",
    "q": "case {'x': v} матчит…",
    "options": [
      "mapping с ключом x",
      "только dict subclass строго без Protocol",
      "list",
      "set"
    ],
    "answer": 0,
    "explain": "Mapping pattern.",
    "group": "Typing и dataclasses",
    "id": "m185"
  },
  {
    "topic": "args",
    "q": "def f(*args, **kwargs) порядок в сигнатуре…",
    "options": [
      "*args затем **kwargs",
      "**kwargs затем *args",
      "любой",
      "только kwargs"
    ],
    "answer": 0,
    "explain": "Синтаксическое правило.",
    "group": "Typing и dataclasses",
    "id": "m186"
  },
  {
    "topic": "import",
    "q": "from __future__ import annotations делает…",
    "options": [
      "откладывает оценку аннотаций (строки)",
      "включает GIL free",
      "Py2 mode",
      "оптимизирует abs"
    ],
    "answer": 0,
    "explain": "PEP 563/649 эпоха.",
    "group": "Stdlib и производительность",
    "id": "m187"
  },
  {
    "topic": "enum",
    "q": "auto() в Enum…",
    "options": [
      "автозначения",
      "random",
      "hash",
      "None"
    ],
    "answer": 0,
    "explain": "enum.auto.",
    "group": "Typing и dataclasses",
    "id": "m188"
  },
  {
    "topic": "logging",
    "q": "logger.exception внутри except…",
    "options": [
      "лог + traceback",
      "только message",
      "raise снова",
      "silence"
    ],
    "answer": 0,
    "explain": "Удобный helper.",
    "group": "Тесты и качество",
    "id": "m189"
  },
  {
    "topic": "subprocess",
    "q": "check=True в run…",
    "options": [
      "бросит CalledProcessError при ненулевом коде",
      "игнор код",
      "shell",
      "timeout"
    ],
    "answer": 0,
    "explain": "Строгая проверка статуса.",
    "group": "Stdlib и производительность",
    "id": "m190"
  },
  {
    "topic": "декораторы",
    "q": "Декоратор класса получает…",
    "options": [
      "класс как аргумент",
      "только экземпляр",
      "модуль",
      "MRO list"
    ],
    "answer": 0,
    "explain": "@decorator над class.",
    "group": "Декораторы и замыкания",
    "id": "m191"
  },
  {
    "topic": "декораторы",
    "q": "stacked decorators применяются…",
    "options": [
      "снизу вверх",
      "сверху вниз",
      "параллельно",
      "случайно"
    ],
    "answer": 0,
    "explain": "Ближний к def первый.",
    "group": "Декораторы и замыкания",
    "id": "m192"
  },
  {
    "topic": "замыкания",
    "q": "__closure__ у функции…",
    "options": [
      "кортеж cell или None",
      "dict locals",
      "список args",
      "GIL"
    ],
    "answer": 0,
    "explain": "Для вложенных с free vars.",
    "group": "Декораторы и замыкания",
    "id": "m193"
  },
  {
    "topic": "генераторы",
    "q": "yield выражение может принимать значение через…",
    "options": [
      "send",
      "next only",
      "throw only",
      "close only"
    ],
    "answer": 0,
    "explain": "gen.send(x).",
    "group": "Генераторы и итераторы",
    "id": "m194"
  },
  {
    "topic": "генераторы",
    "q": "throw(exc) в генератор…",
    "options": [
      "возбуждает exc в точке yield",
      "игнорирует",
      "только закрывает",
      "в caller сразу без gen"
    ],
    "answer": 0,
    "explain": "Протокол генератора.",
    "group": "Генераторы и итераторы",
    "id": "m195"
  },
  {
    "topic": "итераторы",
    "q": "StopIteration.value используется…",
    "options": [
      "для return из генератора",
      "для list index",
      "для dict",
      "для async only"
    ],
    "answer": 0,
    "explain": "PEP 380.",
    "group": "Генераторы и итераторы",
    "id": "m196"
  },
  {
    "topic": "итераторы",
    "q": "collections.abc.Iterable требует…",
    "options": [
      "__iter__",
      "__next__ обязательно",
      "len",
      "getitem"
    ],
    "answer": 0,
    "explain": "Итерируемое ≠ итератор.",
    "group": "Генераторы и итераторы",
    "id": "m197"
  },
  {
    "topic": "context",
    "q": "ExitStack нужен для…",
    "options": [
      "динамического набора контекстов",
      "одного with",
      "async only",
      "GIL"
    ],
    "answer": 0,
    "explain": "contextlib.ExitStack.",
    "group": "Исключения и контекст",
    "id": "m198"
  },
  {
    "topic": "context",
    "q": "closing(obj) вызывает…",
    "options": [
      "obj.close() на выходе",
      "del obj",
      "obj.end()",
      "gc"
    ],
    "answer": 0,
    "explain": "Для объектов с close.",
    "group": "Исключения и контекст",
    "id": "m199"
  },
  {
    "topic": "GIL",
    "q": "sys.setswitchinterval меняет…",
    "options": [
      "частоту попыток переключения потоков",
      "GC threshold only",
      "async tick",
      "import time"
    ],
    "answer": 0,
    "explain": "Бывший check interval.",
    "group": "Потоки, процессы, GIL",
    "id": "m200"
  },
  {
    "topic": "threading",
    "q": "Event используется для…",
    "options": [
      "сигнализации между потоками",
      "CPU parallel magic",
      "process share objects",
      "async await"
    ],
    "answer": 0,
    "explain": "threading.Event.",
    "group": "Потоки, процессы, GIL",
    "id": "m201"
  },
  {
    "topic": "threading",
    "q": "Condition = lock + wait/notify…",
    "options": [
      "да",
      "нет, только Event",
      "только asyncio",
      "только multiproc"
    ],
    "answer": 0,
    "explain": "Классический монитор.",
    "group": "Потоки, процессы, GIL",
    "id": "m202"
  },
  {
    "topic": "threading",
    "q": "Timer запускает…",
    "options": [
      "функцию через delay в потоке",
      "async sleep",
      "cron OS",
      "GC"
    ],
    "answer": 0,
    "explain": "threading.Timer.",
    "group": "Потоки, процессы, GIL",
    "id": "m203"
  },
  {
    "topic": "multiprocessing",
    "q": "Pipe vs Queue…",
    "options": [
      "Pipe двусторонняя пара, Queue многоучастников",
      "одно и то же",
      "Pipe только async",
      "Queue без pickle"
    ],
    "answer": 0,
    "explain": "IPC примитивы.",
    "group": "Потоки, процессы, GIL",
    "id": "m204"
  },
  {
    "topic": "multiprocessing",
    "q": "Manager().dict() даёт…",
    "options": [
      "прокси-словарь между процессами",
      "обычный dict shared memory transparently for any object graph без цены",
      "list",
      "GIL off"
    ],
    "answer": 0,
    "explain": "Синхронизируемый прокси.",
    "group": "Потоки, процессы, GIL",
    "id": "m205"
  },
  {
    "topic": "asyncio",
    "q": "Future — это…",
    "options": [
      "ожидаемый результат асинхронной операции",
      "thread",
      "process",
      "list"
    ],
    "answer": 0,
    "explain": "Низкоуровневее Task.",
    "group": "Asyncio",
    "id": "m206"
  },
  {
    "topic": "asyncio",
    "q": "ensure_future / create_task…",
    "options": [
      "планируют корутину",
      "блокируют",
      "создают process",
      "компилируют C"
    ],
    "answer": 0,
    "explain": "На loop.",
    "group": "Asyncio",
    "id": "m207"
  },
  {
    "topic": "asyncio",
    "q": "wait_for(aw, timeout) при таймауте…",
    "options": [
      "cancels и TimeoutError",
      "игнор",
      "убивает process",
      "возвращает None"
    ],
    "answer": 0,
    "explain": "asyncio.wait_for.",
    "group": "Asyncio",
    "id": "m208"
  },
  {
    "topic": "asyncio",
    "q": "as_completed итерирует…",
    "options": [
      "по мере готовности",
      "в порядке запуска строго",
      "только errors",
      "sync"
    ],
    "answer": 0,
    "explain": "Удобный fan-in.",
    "group": "Asyncio",
    "id": "m209"
  },
  {
    "topic": "asyncio",
    "q": "Queue в asyncio безопасна для…",
    "options": [
      "корутин одного loop",
      "произвольных OS threads без грязи",
      "процессов",
      "GIL bypass"
    ],
    "answer": 0,
    "explain": "Не путать с queue.Queue.",
    "group": "Asyncio",
    "id": "m210"
  },
  {
    "topic": "typing",
    "q": "NewType создаёт…",
    "options": [
      "отдельный тип для чекера (runtime тонкий)",
      "новый class always heavy",
      "Enum",
      "TypedDict"
    ],
    "answer": 0,
    "explain": "typing.NewType.",
    "group": "Typing и dataclasses",
    "id": "m211"
  },
  {
    "topic": "typing",
    "q": "Callable[[int], str] описывает…",
    "options": [
      "функцию int→str",
      "list",
      "coroutine only",
      "type var"
    ],
    "answer": 0,
    "explain": "Сигнатура callable.",
    "group": "Typing и dataclasses",
    "id": "m212"
  },
  {
    "topic": "typing",
    "q": "Generic[T] нужен для…",
    "options": [
      "параметризуемых классов",
      "GIL",
      "async",
      "json"
    ],
    "answer": 0,
    "explain": "Generics.",
    "group": "Typing и dataclasses",
    "id": "m213"
  },
  {
    "topic": "typing",
    "q": "TypeAlias (3.10+/3.12 type)…",
    "options": [
      "явный алиас типа",
      "runtime cast",
      "decorator",
      "metaclass"
    ],
    "answer": 0,
    "explain": "Читаемые алиасы.",
    "group": "Typing и dataclasses",
    "id": "m214"
  },
  {
    "topic": "typing",
    "q": "Required/NotRequired в TypedDict…",
    "options": [
      "тонкая настройка обязательности ключей",
      "валидация pydantic",
      "SQL",
      "GIL"
    ],
    "answer": 0,
    "explain": "PEP 655.",
    "group": "Typing и dataclasses",
    "id": "m215"
  },
  {
    "topic": "dataclasses",
    "q": "replace(obj, **changes)…",
    "options": [
      "новый объект с заменами",
      "мутирует obj",
      "json",
      "slots destroy"
    ],
    "answer": 0,
    "explain": "dataclasses.replace.",
    "group": "Typing и dataclasses",
    "id": "m216"
  },
  {
    "topic": "dataclasses",
    "q": "field(repr=False) скрывает…",
    "options": [
      "поле из __repr__",
      "из __init__",
      "из eq",
      "из hash always"
    ],
    "answer": 0,
    "explain": "Настройка field.",
    "group": "Typing и dataclasses",
    "id": "m217"
  },
  {
    "topic": "dataclasses",
    "q": "compare=False исключает поле из…",
    "options": [
      "сравнений",
      "init",
      "repr always",
      "slots"
    ],
    "answer": 0,
    "explain": "order/eq.",
    "group": "Typing и dataclasses",
    "id": "m218"
  },
  {
    "topic": "collections",
    "q": "deque(maxlen=n) при переполнении…",
    "options": [
      "выбрасывает с противоположного конца",
      "ошибка",
      "растёт бесконечно",
      "блокирует"
    ],
    "answer": 0,
    "explain": "Кольцевой буфер.",
    "group": "Collections и itertools",
    "id": "m219"
  },
  {
    "topic": "collections",
    "q": "Counter.most_common(2)…",
    "options": [
      "топ-2 частых",
      "сортирует keys",
      "unique",
      "shuffle"
    ],
    "answer": 0,
    "explain": "Удобная статистика.",
    "group": "Collections и itertools",
    "id": "m220"
  },
  {
    "topic": "collections",
    "q": "defaultdict(list)['k'].append(1)…",
    "options": [
      "создаёт list автоматически",
      "KeyError",
      "None append error",
      "dict"
    ],
    "answer": 0,
    "explain": "factory.",
    "group": "Collections и itertools",
    "id": "m221"
  },
  {
    "topic": "collections",
    "q": "ChainMap пишет по умолчанию в…",
    "options": [
      "первый mapping",
      "последний",
      "все",
      "новый"
    ],
    "answer": 0,
    "explain": "locals поверх.",
    "group": "Collections и itertools",
    "id": "m222"
  },
  {
    "topic": "itertools",
    "q": "count(10, 2) начнёт…",
    "options": [
      "10,12,14…",
      "0,2,10",
      "10,11",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Бесконечный счётчик.",
    "group": "Collections и itertools",
    "id": "m223"
  },
  {
    "topic": "itertools",
    "q": "repeat(x, 3)…",
    "options": [
      "x x x",
      "бесконечно всегда",
      "ошибка",
      "shuffle x"
    ],
    "answer": 0,
    "explain": "Повтор.",
    "group": "Collections и itertools",
    "id": "m224"
  },
  {
    "topic": "itertools",
    "q": "zip_longest заполняет…",
    "options": [
      "fillvalue для коротких",
      "ошибкой",
      "обрезает как zip",
      "None запрещён"
    ],
    "answer": 0,
    "explain": "itertools.zip_longest.",
    "group": "Collections и itertools",
    "id": "m225"
  },
  {
    "topic": "itertools",
    "q": "list(permutations('ab', 2))?",
    "options": [
      "[('a', 'b'), ('b', 'a')]",
      "[('a', 'a'), ('a', 'b'), ('b', 'a'), ('b', 'b')]",
      "['ab']",
      "['ba']"
    ],
    "answer": 0,
    "explain": "Перестановки.",
    "group": "Collections и itertools",
    "id": "m226"
  },
  {
    "topic": "itertools",
    "q": "list(combinations('abc', 2))?",
    "options": [
      "[('a', 'b'), ('a', 'c'), ('b', 'c')]",
      "все перестановки",
      "[('a', 'a'), …]",
      "['abc']"
    ],
    "answer": 0,
    "explain": "Сочетания без повтора.",
    "group": "Collections и itertools",
    "id": "m227"
  },
  {
    "topic": "functools",
    "q": "lru_cache(typed=True)…",
    "options": [
      "различает типы аргументов",
      "отключает кэш",
      "async only",
      "disk cache"
    ],
    "answer": 0,
    "explain": "1 vs 1.0 раздельно.",
    "group": "Collections и itertools",
    "id": "m228"
  },
  {
    "topic": "functools",
    "q": "cache (3.9) = lru_cache без…",
    "options": [
      "maxsize limit (безлимит)",
      "typed",
      "ключ",
      "hash"
    ],
    "answer": 0,
    "explain": "functools.cache.",
    "group": "Collections и itertools",
    "id": "m229"
  },
  {
    "topic": "functools",
    "q": "wraps копирует…",
    "options": [
      "__module__, __name__, __doc__, …",
      "bytecode",
      "defaults only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Метаданные.",
    "group": "Collections и itertools",
    "id": "m230"
  },
  {
    "topic": "functools",
    "q": "singledispatchmethod…",
    "options": [
      "диспетчеризация методов по типу",
      "только функции модуля",
      "async",
      "classmethod ban"
    ],
    "answer": 0,
    "explain": "PEP 3124-ish API.",
    "group": "Collections и itertools",
    "id": "m231"
  },
  {
    "topic": "regex",
    "q": "re.FULLMATCH vs match…",
    "options": [
      "вся строка vs с начала",
      "одно и то же",
      "только bytes",
      "ignorecase"
    ],
    "answer": 0,
    "explain": "Полное совпадение.",
    "group": "Stdlib и производительность",
    "id": "m232"
  },
  {
    "topic": "регулярки",
    "q": "группы (?P<name>…)…",
    "options": [
      "именованные группы",
      "lookahead",
      "flags",
      "atomic"
    ],
    "answer": 0,
    "explain": "Читаемый extract.",
    "group": "Stdlib и производительность",
    "id": "m233"
  },
  {
    "topic": "регулярки",
    "q": "(?=...) это…",
    "options": [
      "positive lookahead",
      "lookbehind",
      "capture",
      "non-greedy"
    ],
    "answer": 0,
    "explain": "Просмотр вперёд.",
    "group": "Stdlib и производительность",
    "id": "m234"
  },
  {
    "topic": "pathlib",
    "q": "Path.glob('**/*.py')…",
    "options": [
      "рекурсивный поиск",
      "только cwd non-recursive always",
      "regex",
      "delete"
    ],
    "answer": 0,
    "explain": "Паттерны путей.",
    "group": "Stdlib и производительность",
    "id": "m235"
  },
  {
    "topic": "pathlib",
    "q": "Path.write_text…",
    "options": [
      "записывает str в файл",
      "bytes only",
      "append always",
      "json"
    ],
    "answer": 0,
    "explain": "Удобный helper.",
    "group": "Stdlib и производительность",
    "id": "m236"
  },
  {
    "topic": "pathlib",
    "q": "PurePath vs Path…",
    "options": [
      "Pure без I/O",
      "одно и то же",
      "Pure только Windows",
      "Path без строк"
    ],
    "answer": 0,
    "explain": "Логические пути.",
    "group": "Stdlib и производительность",
    "id": "m237"
  },
  {
    "topic": "import",
    "q": "pkgutil.iter_modules…",
    "options": [
      "перечисляет модули пакета",
      "ставит pip",
      "reload",
      "compile"
    ],
    "answer": 0,
    "explain": "Плагины/дискавери.",
    "group": "Stdlib и производительность",
    "id": "m238"
  },
  {
    "topic": "import",
    "q": "importlib.util.find_spec…",
    "options": [
      "ищет спецификацию модуля",
      "exec module",
      "pip show",
      "venv"
    ],
    "answer": 0,
    "explain": "Проверка наличия.",
    "group": "Stdlib и производительность",
    "id": "m239"
  },
  {
    "topic": "тесты",
    "q": "pytest.raises ловит…",
    "options": [
      "ожидаемое исключение",
      "любые silently",
      "warnings only",
      "SystemExit ban"
    ],
    "answer": 0,
    "explain": "Контекст проверки.",
    "group": "Тесты и качество",
    "id": "m240"
  },
  {
    "topic": "тесты",
    "q": "capfd/capsys фикстуры…",
    "options": [
      "перехватывают stdout/stderr",
      "файлы tmp",
      "сеть",
      "time"
    ],
    "answer": 0,
    "explain": "Тест вывода.",
    "group": "Тесты и качество",
    "id": "m241"
  },
  {
    "topic": "тесты",
    "q": "tmp_path даёт…",
    "options": [
      "временную директорию pathlib",
      "только str /tmp fixed",
      "s3 bucket",
      "memory fs always"
    ],
    "answer": 0,
    "explain": "Изоляция FS.",
    "group": "Тесты и качество",
    "id": "m242"
  },
  {
    "topic": "тесты",
    "q": "mark.skip vs skipif…",
    "options": [
      "безусловно vs условие",
      "одно и то же",
      "skipif удаляет файл",
      "skip = xfail"
    ],
    "answer": 0,
    "explain": "Маркеры.",
    "group": "Тесты и качество",
    "id": "m243"
  },
  {
    "topic": "тесты",
    "q": "xfail означает…",
    "options": [
      "ожидаемый провал",
      "skip",
      "pass force",
      "error CI"
    ],
    "answer": 0,
    "explain": "Известный баг.",
    "group": "Тесты и качество",
    "id": "m244"
  },
  {
    "topic": "mock",
    "q": "MagicMock vs Mock…",
    "options": [
      "MagicMock имеет магические методы по умолчанию",
      "Mock быстрее C",
      "одно и то же строго",
      "Magic только async"
    ],
    "answer": 0,
    "explain": "Удобство.",
    "group": "Тесты и качество",
    "id": "m245"
  },
  {
    "topic": "mock",
    "q": "side_effect может…",
    "options": [
      "кидать/итерировать/вызывать",
      "только return_value",
      "патчить диск",
      "GIL"
    ],
    "answer": 0,
    "explain": "Гибкое поведение.",
    "group": "Тесты и качество",
    "id": "m246"
  },
  {
    "topic": "mock",
    "q": "assert_called_once_with…",
    "options": [
      "проверяет единственный вызов с args",
      "всегда True",
      "мокает time",
      "CI"
    ],
    "answer": 0,
    "explain": "Верификация.",
    "group": "Тесты и качество",
    "id": "m247"
  },
  {
    "topic": "logging",
    "q": "getLogger(__name__)…",
    "options": [
      "иерархия логгеров по модулю",
      "root always",
      "print",
      "warnings"
    ],
    "answer": 0,
    "explain": "Best practice.",
    "group": "Тесты и качество",
    "id": "m248"
  },
  {
    "topic": "logging",
    "q": "handlers определяют…",
    "options": [
      "куда писать",
      "формат only",
      "уровень only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Stream/File/…",
    "group": "Тесты и качество",
    "id": "m249"
  },
  {
    "topic": "logging",
    "q": "filters на handler…",
    "options": [
      "отсекают записи",
      "меняют уровень root",
      "удаляют logger",
      "async"
    ],
    "answer": 0,
    "explain": "Тонкая настройка.",
    "group": "Тесты и качество",
    "id": "m250"
  },
  {
    "topic": "магические",
    "q": "__hash__ должен быть согласован с…",
    "options": [
      "__eq__",
      "__str__",
      "__len__",
      "id always only"
    ],
    "answer": 0,
    "explain": "Равные → равный hash.",
    "group": "Контекст и магические методы",
    "id": "m251"
  },
  {
    "topic": "магические",
    "q": "__call__ делает объект…",
    "options": [
      "вызываемым",
      "итерируемым",
      "контекстом",
      "дескриптором"
    ],
    "answer": 0,
    "explain": "obj().",
    "group": "Контекст и магические методы",
    "id": "m252"
  },
  {
    "topic": "магические",
    "q": "__enter__ возвращает…",
    "options": [
      "то, что попадёт в as",
      "всегда None",
      "self обязателен языком",
      "exception"
    ],
    "answer": 0,
    "explain": "with X as y.",
    "group": "Контекст и магические методы",
    "id": "m253"
  },
  {
    "topic": "магические",
    "q": "__getitem__ обслуживает…",
    "options": [
      "obj[key]",
      "obj.key",
      "obj()",
      "with obj"
    ],
    "answer": 0,
    "explain": "Индексация.",
    "group": "Контекст и магические методы",
    "id": "m254"
  },
  {
    "topic": "property",
    "q": "deleter у property…",
    "options": [
      "обрабатывает del obj.x",
      "удаляет class",
      "GC freeze",
      "slots"
    ],
    "answer": 0,
    "explain": "@x.deleter.",
    "group": "Контекст и магические методы",
    "id": "m255"
  },
  {
    "topic": "classmethod",
    "q": "альтернатива constructor через…",
    "options": [
      "@classmethod from_…",
      "staticmethod only",
      "property",
      "metaclasses обязателен"
    ],
    "answer": 0,
    "explain": "Фабрики.",
    "group": "Контекст и магические методы",
    "id": "m256"
  },
  {
    "topic": "ABC",
    "q": "register() у ABC…",
    "options": [
      "виртуальное подклассство без наследования",
      "создаёт файл",
      "pip",
      "GIL"
    ],
    "answer": 0,
    "explain": "isinstance True.",
    "group": "ООП продвинутый",
    "id": "m257"
  },
  {
    "topic": "MRO",
    "q": "super() без аргументов в Py3…",
    "options": [
      "берёт класс/self из ячейки",
      "только object",
      "запрещён",
      "первый base hardcode"
    ],
    "answer": 0,
    "explain": "Zero-arg super.",
    "group": "ООП продвинутый",
    "id": "m258"
  },
  {
    "topic": "slots",
    "q": "Наследование slots требует…",
    "options": [
      "аккуратности с объявлением слотов в цепочке",
      "ничего особенного always",
      "запрета subclass",
      "dict always"
    ],
    "answer": 0,
    "explain": "Иначе снова __dict__.",
    "group": "ООП продвинутый",
    "id": "m259"
  },
  {
    "topic": "copy",
    "q": "__deepcopy__ можно определить для…",
    "options": [
      "кастомной глубокой копии",
      "только pickle",
      "json",
      "GIL"
    ],
    "answer": 0,
    "explain": "Протокол copy.",
    "group": "Stdlib и производительность",
    "id": "m260"
  },
  {
    "topic": "pickle",
    "q": "protocol=5 полезен для…",
    "options": [
      "out-of-band буферов (bytes large)",
      "JSON",
      "YAML",
      "XML"
    ],
    "answer": 0,
    "explain": "PEP 574.",
    "group": "Stdlib и производительность",
    "id": "m261"
  },
  {
    "topic": "json",
    "q": "parse_float=Decimal…",
    "options": [
      "точные десятичные из JSON",
      "быстрее float",
      "int only",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Хук парсера.",
    "group": "Stdlib и производительность",
    "id": "m262"
  },
  {
    "topic": "performance",
    "q": "set membership vs list…",
    "options": [
      "set средний O(1)",
      "list O(1)",
      "одинаково",
      "tuple хуже set всегда по константе только"
    ],
    "answer": 0,
    "explain": "Хеш-таблица.",
    "group": "Stdlib и производительность",
    "id": "m263"
  },
  {
    "topic": "performance",
    "q": "локальная переменная в горячем цикле…",
    "options": [
      "часто быстрее атрибута/global",
      "медленнее всегда",
      "запрещена",
      "GIL off"
    ],
    "answer": 0,
    "explain": "LOAD_FAST.",
    "group": "Stdlib и производительность",
    "id": "m264"
  },
  {
    "topic": "sort",
    "q": "Timsort хорошо для…",
    "options": [
      "частично упорядоченных данных",
      "только random",
      "linked list C",
      "GPU"
    ],
    "answer": 0,
    "explain": "Адаптивность.",
    "group": "Stdlib и производительность",
    "id": "m265"
  },
  {
    "topic": "args",
    "q": "Keyword-only после *…",
    "options": [
      "обязательно по имени",
      "можно позиционно",
      "запрещены defaults",
      "только kwargs dict"
    ],
    "answer": 0,
    "explain": "def f(*, x).",
    "group": "Typing и dataclasses",
    "id": "m266"
  },
  {
    "topic": "args",
    "q": "Positional-only до / …",
    "options": [
      "нельзя передать по имени",
      "можно только по имени",
      "kwargs",
      "varargs"
    ],
    "answer": 0,
    "explain": "def f(x, /).",
    "group": "Typing и dataclasses",
    "id": "m267"
  },
  {
    "topic": "match",
    "q": "case point.x: без кавычек…",
    "options": [
      "value pattern / dotted",
      "всегда capture name",
      "ошибка",
      "regex"
    ],
    "answer": 0,
    "explain": "Смотри правила capture vs value.",
    "group": "Typing и dataclasses",
    "id": "m268"
  },
  {
    "topic": "match",
    "q": "case [x, y, *rest] на tuple…",
    "options": [
      "работает для последовательности",
      "только list тип exact",
      "dict",
      "set"
    ],
    "answer": 0,
    "explain": "Sequence pattern.",
    "group": "Typing и dataclasses",
    "id": "m269"
  },
  {
    "topic": "walrus",
    "q": ":= запрещён в…",
    "options": [
      "некоторых позиций (напр. лямбда без скобок нюансы)",
      "везде в if",
      "comprehension полностью",
      "функциях"
    ],
    "answer": 0,
    "explain": "Есть синтаксические ограничения.",
    "group": "Typing и dataclasses",
    "id": "m270"
  },
  {
    "topic": "enum",
    "q": "Flag / IntFlag для…",
    "options": [
      "битовых флагов",
      "строк",
      "json",
      "async"
    ],
    "answer": 0,
    "explain": "Комбинации флагов.",
    "group": "Typing и dataclasses",
    "id": "m271"
  },
  {
    "topic": "enum",
    "q": "unique() декоратор…",
    "options": [
      "запрещает дубли значений",
      "сортирует",
      "авто int",
      "pickle"
    ],
    "answer": 0,
    "explain": "enum.unique.",
    "group": "Typing и dataclasses",
    "id": "m272"
  },
  {
    "topic": "HTTP",
    "q": "идемпотентный PUT…",
    "options": [
      "повтор того же эффекта",
      "всегда создаёт новый ресурс",
      "запрещён",
      "только DELETE"
    ],
    "answer": 0,
    "explain": "Семантика.",
    "group": "Веб и API",
    "id": "m273"
  },
  {
    "topic": "HTTP",
    "q": "POST обычно…",
    "options": [
      "не идемпотентен",
      "идемпотентен",
      "безопасен как GET",
      "кэшируется всегда"
    ],
    "answer": 0,
    "explain": "Побочные эффекты.",
    "group": "Веб и API",
    "id": "m274"
  },
  {
    "topic": "ASGI",
    "q": "lifespan protocol…",
    "options": [
      "startup/shutdown приложения",
      "только websocket",
      "WSGI sync",
      "CGI"
    ],
    "answer": 0,
    "explain": "ASGI lifespan.",
    "group": "Веб и API",
    "id": "m275"
  },
  {
    "topic": "FastAPI",
    "q": "Depends()…",
    "options": [
      "внедрение зависимостей",
      "SQL join",
      "GIL",
      "template"
    ],
    "answer": 0,
    "explain": "DI в эндпоинтах.",
    "group": "Веб и API",
    "id": "m276"
  },
  {
    "topic": "FastAPI",
    "q": "response_model…",
    "options": [
      "фильтрует/валидирует ответ",
      "меняет HTTP method",
      "отключает OpenAPI",
      "async off"
    ],
    "answer": 0,
    "explain": "Pydantic model.",
    "group": "Веб и API",
    "id": "m277"
  },
  {
    "topic": "SQL",
    "q": "lazy load в ORM риск…",
    "options": [
      "N+1 запросов",
      "всегда быстрее eager",
      "нет риска",
      "только insert"
    ],
    "answer": 0,
    "explain": "Явный join/options.",
    "group": "Веб и API",
    "id": "m278"
  },
  {
    "topic": "SQL",
    "q": "eager load…",
    "options": [
      "заранее подгружает связи",
      "откладывает forever",
      "кэш Redis",
      "drop"
    ],
    "answer": 0,
    "explain": "joinedload/selectin.",
    "group": "Веб и API",
    "id": "m279"
  },
  {
    "topic": "DI",
    "q": "constructor injection…",
    "options": [
      "зависимости через __init__",
      "global import only",
      "monkeypatch prod",
      "env только"
    ],
    "answer": 0,
    "explain": "Тестируемость.",
    "group": "Веб и API",
    "id": "m280"
  },
  {
    "topic": "weakref",
    "q": "finalize(obj, callback)…",
    "options": [
      "вызов при GC объекта",
      "сразу",
      "при import",
      "никогда"
    ],
    "answer": 0,
    "explain": "Слабый финализатор.",
    "group": "Stdlib и производительность",
    "id": "m281"
  },
  {
    "topic": "GC",
    "q": "gc.get_referrers…",
    "options": [
      "кто ссылается на объект",
      "refcount exact только",
      "disk refs",
      "HTTP"
    ],
    "answer": 0,
    "explain": "Отладка утечек.",
    "group": "Stdlib и производительность",
    "id": "m282"
  },
  {
    "topic": "GC",
    "q": "gc.disable()…",
    "options": [
      "отключает cyclic GC",
      "отключает refcount",
      "GIL off",
      "async off"
    ],
    "answer": 0,
    "explain": "refcount остаётся.",
    "group": "Stdlib и производительность",
    "id": "m283"
  },
  {
    "topic": "memoryview",
    "q": "cast('I')…",
    "options": [
      "переинтерпретация буфера",
      "копия list",
      "json",
      "encode"
    ],
    "answer": 0,
    "explain": "Буферный протокол.",
    "group": "Stdlib и производительность",
    "id": "m284"
  },
  {
    "topic": "struct",
    "q": "endianness в format…",
    "options": [
      "< little > big",
      "только native",
      "UTF",
      "JSON"
    ],
    "answer": 0,
    "explain": "struct format chars.",
    "group": "Stdlib и производительность",
    "id": "m285"
  },
  {
    "topic": "array",
    "q": "array('i') хранит…",
    "options": [
      "signed int компактно",
      "произвольные объекты",
      "str",
      "dict"
    ],
    "answer": 0,
    "explain": "Типизированный массив.",
    "group": "Collections и itertools",
    "id": "m286"
  },
  {
    "topic": "heapq",
    "q": "heappush / heappop…",
    "options": [
      "мин-куча",
      "макс-куча по умолчанию",
      "sort stable extra",
      "deque"
    ],
    "answer": 0,
    "explain": "Наименьший первый.",
    "group": "Collections и itertools",
    "id": "m287"
  },
  {
    "topic": "bisect",
    "q": "bisect_left…",
    "options": [
      "точка вставки слева от равных",
      "удаление",
      "hash",
      "shuffle"
    ],
    "answer": 0,
    "explain": "Нижняя граница.",
    "group": "Collections и itertools",
    "id": "m288"
  },
  {
    "topic": "subprocess",
    "q": "text=True (universal_newlines)…",
    "options": [
      "str вместо bytes",
      "shell",
      "check",
      "timeout"
    ],
    "answer": 0,
    "explain": "Декодирование.",
    "group": "Stdlib и производительность",
    "id": "m289"
  },
  {
    "topic": "subprocess",
    "q": "timeout в run…",
    "options": [
      "убивает по истечении (TimeoutExpired)",
      "игнор",
      "только warn",
      "async"
    ],
    "answer": 0,
    "explain": "Защита зависаний.",
    "group": "Stdlib и производительность",
    "id": "m290"
  },
  {
    "topic": "tempfile",
    "q": "TemporaryDirectory…",
    "options": [
      "автоочистка каталога",
      "вечный /tmp",
      "только файл",
      "S3"
    ],
    "answer": 0,
    "explain": "Контекстный менеджер.",
    "group": "Stdlib и производительность",
    "id": "m291"
  },
  {
    "topic": "secrets",
    "q": "token_urlsafe…",
    "options": [
      "криптостойкий токен для URL",
      "uuid1",
      "random.random",
      "hash lib name"
    ],
    "answer": 0,
    "explain": "secrets module.",
    "group": "Stdlib и производительность",
    "id": "m292"
  },
  {
    "topic": "hashlib",
    "q": "blake2 / sha3…",
    "options": [
      "современные хеш-функции",
      "crc32 crypto-safe",
      "siphash dict only",
      "md5 recommended password"
    ],
    "answer": 0,
    "explain": "Не путать с паролями — там KDF.",
    "group": "Stdlib и производительность",
    "id": "m293"
  },
  {
    "topic": "warnings",
    "q": "simplefilter('error')…",
    "options": [
      "warning → exception",
      "silence all",
      "log only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Строгий режим.",
    "group": "Тесты и качество",
    "id": "m294"
  },
  {
    "topic": "import",
    "q": "circular import часто лечат…",
    "options": [
      "локальным import / разнесением",
      "удалением типов",
      "GIL",
      "eval"
    ],
    "answer": 0,
    "explain": "Архитектура модулей.",
    "group": "Stdlib и производительность",
    "id": "m295"
  },
  {
    "topic": "protocols",
    "q": "@runtime_checkable ограничен…",
    "options": [
      "наличием методов, не сигнатур глубоко",
      "полной проверкой типов args",
      "скоростью C",
      "ABC ban"
    ],
    "answer": 0,
    "explain": "Не mypy runtime.",
    "group": "Typing и dataclasses",
    "id": "m296"
  },
  {
    "topic": "дескрипторы",
    "q": "property — это…",
    "options": [
      "data descriptor",
      "non-data only",
      "classmethod",
      "module"
    ],
    "answer": 0,
    "explain": "__set__ есть.",
    "group": "Контекст и магические методы",
    "id": "m297"
  },
  {
    "topic": "coroutines",
    "q": "await gen — нельзя; await coroutine — да. Генератор awaitable?",
    "options": [
      "нет (пока не @types.coroutine нюансы)",
      "да всегда",
      "только list",
      "только async for"
    ],
    "answer": 0,
    "explain": "Разные объекты.",
    "group": "Генераторы и итераторы",
    "id": "m298"
  },
  {
    "topic": "listcomp",
    "q": "Вложенный for в listcomp порядок…",
    "options": [
      "как вложенные for слева направо",
      "справа налево",
      "параллельно",
      "random"
    ],
    "answer": 0,
    "explain": "[a for x in xs for a in x].",
    "group": "Генераторы и итераторы",
    "id": "m299"
  },
  {
    "topic": "dict",
    "q": "merge |= для dict (3.9)…",
    "options": [
      "in-place update",
      "новый dict only",
      "set only",
      "ошибка"
    ],
    "answer": 0,
    "explain": "d |= other.",
    "group": "Collections и itertools",
    "id": "m300"
  },
  {
    "topic": "exceptions",
    "q": "add_note (3.11)…",
    "options": [
      "добавляет текст к исключению",
      "меняет тип",
      "suppress",
      "logging"
    ],
    "answer": 0,
    "explain": "Отладка.",
    "group": "Исключения и контекст",
    "id": "m301"
  },
  {
    "topic": "match",
    "q": "case 1 | 2 | 3:…",
    "options": [
      "or-паттерн",
      "bitwise",
      "ошибка",
      "range"
    ],
    "answer": 0,
    "explain": "Альтернативы.",
    "group": "Typing и dataclasses",
    "id": "m302"
  },
  {
    "topic": "typing",
    "q": "LiteralString помогает против…",
    "options": [
      "SQL/shell injection на уровне типов",
      "GIL",
      "медленного str",
      "UTF errors"
    ],
    "answer": 0,
    "explain": "Доверенные строки.",
    "group": "Typing и dataclasses",
    "id": "m303"
  },
  {
    "topic": "performance",
    "q": "интернирование маленьких строк…",
    "options": [
      "деталь CPython, не контракт логики",
      "языковой гарант всех str",
      "запрещено",
      "только bytes"
    ],
    "answer": 0,
    "explain": "Не строй логику на is для str.",
    "group": "Stdlib и производительность",
    "id": "m304"
  },
  {
    "topic": "HTTP",
    "q": "Connection: keep-alive…",
    "options": [
      "переиспользование TCP",
      "новый TCP always",
      "UDP",
      "QUIC only"
    ],
    "answer": 0,
    "explain": "Меньше handshake.",
    "group": "Веб и API",
    "id": "m305"
  },
  {
    "topic": "ASGI",
    "q": "websocket в ASGI — это…",
    "options": [
      "отдельный тип соединения",
      "HTTP only hack",
      "WSGI feature",
      "CGI"
    ],
    "answer": 0,
    "explain": "Двусторонний канал.",
    "group": "Веб и API",
    "id": "m306"
  },
  {
    "topic": "SQL",
    "q": "миграция Alembic…",
    "options": [
      "версионирование схемы",
      "ORM query cache",
      "Redis",
      "nginx"
    ],
    "answer": 0,
    "explain": "Эволюция БД.",
    "group": "Веб и API",
    "id": "m307"
  },
  {
    "topic": "тесты",
    "q": "coverage.py измеряет…",
    "options": [
      "покрытие строк/веток",
      "скорость",
      "типы",
      "GIL"
    ],
    "answer": 0,
    "explain": "Качество прогона.",
    "group": "Тесты и качество",
    "id": "m308"
  },
  {
    "topic": "mock",
    "q": "patch.dict(os.environ)…",
    "options": [
      "временно меняет env",
      "вечно",
      "удаляет OS",
      "pip"
    ],
    "answer": 0,
    "explain": "Изоляция конфига.",
    "group": "Тесты и качество",
    "id": "m309"
  },
  {
    "topic": "pathlib",
    "q": "Path.home()…",
    "options": [
      "домашняя директория",
      "cwd",
      "tmp",
      "root"
    ],
    "answer": 0,
    "explain": "Кроссплатформенно.",
    "group": "Stdlib и производительность",
    "id": "m310"
  },
  {
    "topic": "functools",
    "q": "partialmethod…",
    "options": [
      "partial для методов",
      "classmethod",
      "property",
      "cache"
    ],
    "answer": 0,
    "explain": "В классе.",
    "group": "Collections и itertools",
    "id": "m311"
  },
  {
    "topic": "itertools",
    "q": "batched (3.12)…",
    "options": [
      "чанки по n",
      "shuffle",
      "sort",
      "unique"
    ],
    "answer": 0,
    "explain": "Группировка элементов.",
    "group": "Collections и itertools",
    "id": "m312"
  },
  {
    "topic": "asyncio",
    "q": "to_thread (3.9)…",
    "options": [
      "await блокирующую функцию в thread",
      "process pool always",
      "sync sleep",
      "GIL remove"
    ],
    "answer": 0,
    "explain": "Простой offload.",
    "group": "Asyncio",
    "id": "m313"
  },
  {
    "topic": "typing",
    "q": "Self вместо «Type[Self]» хаков…",
    "options": [
      "удобнее для fluent API",
      "runtime check",
      "быстрее",
      "Enum"
    ],
    "answer": 0,
    "explain": "PEP 673.",
    "group": "Typing и dataclasses",
    "id": "m314"
  },
  {
    "topic": "dataclasses",
    "q": "KW_ONLY sentinel…",
    "options": [
      "поля после — keyword-only",
      "frozen",
      "slots",
      "json"
    ],
    "answer": 0,
    "explain": "Разделитель полей.",
    "group": "Typing и dataclasses",
    "id": "m315"
  },
  {
    "topic": "collections",
    "q": "Counter сложение…",
    "options": [
      "складывает счётчики",
      "ошибка",
      "set union only",
      "list concat"
    ],
    "answer": 0,
    "explain": "c1+c2.",
    "group": "Collections и itertools",
    "id": "m316"
  },
  {
    "topic": "GIL",
    "q": "I/O в socket обычно…",
    "options": [
      "отпускает GIL на время ожидания",
      "держит GIL forever",
      "создаёт process",
      "отключает async"
    ],
    "answer": 0,
    "explain": "Потоки полезны для I/O.",
    "group": "Потоки, процессы, GIL",
    "id": "m317"
  },
  {
    "topic": "threading",
    "q": "daemon thread при выходе main…",
    "options": [
      "может оборваться",
      "всегда join",
      "становится process",
      "freeze"
    ],
    "answer": 0,
    "explain": "Не для критичных задач без join.",
    "group": "Потоки, процессы, GIL",
    "id": "m318"
  },
  {
    "topic": "multiprocessing",
    "q": "if __name__ == '__main__' критичен на…",
    "options": [
      "Windows/macOS spawn",
      "только Linux fork always ok без",
      "Jython only",
      "IDLE only"
    ],
    "answer": 0,
    "explain": "Повторный импорт модуля.",
    "group": "Потоки, процессы, GIL",
    "id": "m319"
  },
  {
    "topic": "context",
    "q": "suppress(FileNotFoundError)…",
    "options": [
      "молчаливый пропуск",
      "лог",
      "retry",
      "fatal"
    ],
    "answer": 0,
    "explain": "Узкий except.",
    "group": "Исключения и контекст",
    "id": "m320"
  },
  {
    "topic": "магические",
    "q": "__format__ обслуживает…",
    "options": [
      "format(obj, spec) / f'{obj:spec}'",
      "str only",
      "repr only",
      "bytes"
    ],
    "answer": 0,
    "explain": "Мини-язык формата.",
    "group": "Контекст и магические методы",
    "id": "m321"
  },
  {
    "topic": "property",
    "q": "obj.__dict__ у slots-only…",
    "options": [
      "часто отсутствует",
      "всегда есть",
      "всегда list",
      "json"
    ],
    "answer": 0,
    "explain": "Экономия памяти.",
    "group": "Контекст и магические методы",
    "id": "m322"
  },
  {
    "topic": "ABC",
    "q": "abstractmethod + async def…",
    "options": [
      "поддерживается",
      "нельзя",
      "только sync",
      "только property"
    ],
    "answer": 0,
    "explain": "Абстрактные корутины.",
    "group": "ООП продвинутый",
    "id": "m323"
  },
  {
    "topic": "copy",
    "q": "shallow copy копирует…",
    "options": [
      "контейнер, но не вложенные объекты глубоко",
      "весь граф",
      "только int",
      "ничего"
    ],
    "answer": 0,
    "explain": "Ссылки внутри те же.",
    "group": "Stdlib и производительность",
    "id": "m324"
  },
  {
    "topic": "json",
    "q": "sort_keys=True…",
    "options": [
      "сортирует ключи в dumps",
      "сортирует list",
      "меняет loads",
      "ускоряет"
    ],
    "answer": 0,
    "explain": "Стабильный вывод.",
    "group": "Stdlib и производительность",
    "id": "m325"
  },
  {
    "topic": "performance",
    "q": "join vs + для N строк…",
    "options": [
      "join обычно предпочтительнее",
      "+ всегда O(1)",
      "без разницы в языке контрактом",
      "f-string в цикле идеал без меры"
    ],
    "answer": 0,
    "explain": "Линейная сборка.",
    "group": "Stdlib и производительность",
    "id": "m326"
  },
  {
    "topic": "sort",
    "q": "operator.itemgetter…",
    "options": [
      "быстрый key для сортировки",
      "hash",
      "copy",
      "mock"
    ],
    "answer": 0,
    "explain": "Вместо lambda часто.",
    "group": "Stdlib и производительность",
    "id": "m327"
  },
  {
    "topic": "args",
    "q": "def f(*args, a) — a…",
    "options": [
      "keyword-only",
      "positional",
      "optional auto",
      "variadic"
    ],
    "answer": 0,
    "explain": "После *.",
    "group": "Typing и dataclasses",
    "id": "m328"
  },
  {
    "topic": "enum",
    "q": "StrEnum (3.11)…",
    "options": [
      "Enum + str",
      "только int",
      "Flag",
      "TypedDict"
    ],
    "answer": 0,
    "explain": "Строковые перечисления.",
    "group": "Typing и dataclasses",
    "id": "m329"
  },
  {
    "topic": "HTTP",
    "q": "status 429…",
    "options": [
      "too many requests",
      "not found",
      "ok",
      "redirect"
    ],
    "answer": 0,
    "explain": "Rate limit.",
    "group": "Веб и API",
    "id": "m330"
  },
  {
    "topic": "FastAPI",
    "q": "BackgroundTasks…",
    "options": [
      "работа после ответа",
      "celery cluster",
      "cron",
      "GPU"
    ],
    "answer": 0,
    "explain": "Простые фоновые.",
    "group": "Веб и API",
    "id": "m331"
  },
  {
    "topic": "SQL",
    "q": "индекс ускоряет…",
    "options": [
      "поиск/фильтр ценой записи",
      "всегда inserts",
      "json dumps",
      "GIL"
    ],
    "answer": 0,
    "explain": "Tradeoff.",
    "group": "Веб и API",
    "id": "m332"
  },
  {
    "topic": "DI",
    "q": "service locator vs injection…",
    "options": [
      "injection явнее и тестируемее",
      "locator всегда лучше",
      "одно и то же",
      "GIL pattern"
    ],
    "answer": 0,
    "explain": "Явные зависимости.",
    "group": "Веб и API",
    "id": "m333"
  },
  {
    "topic": "weakref",
    "q": "proxy не поднимает…",
    "options": [
      "refcount как сильная ссылка",
      "исключения",
      "GC",
      "typing"
    ],
    "answer": 0,
    "explain": "Слабая прокси.",
    "group": "Stdlib и производительность",
    "id": "m334"
  },
  {
    "topic": "struct",
    "q": "calcsize(fmt)…",
    "options": [
      "байт на формат",
      "compile C",
      "json size",
      "hash"
    ],
    "answer": 0,
    "explain": "Размер упаковки.",
    "group": "Stdlib и производительность",
    "id": "m335"
  },
  {
    "topic": "heapq",
    "q": "nlargest(k, it)…",
    "options": [
      "k наибольших эффективно",
      "полная сортировка always обязательна видимо",
      "shuffle",
      "unique"
    ],
    "answer": 0,
    "explain": "Частичный отбор.",
    "group": "Collections и itertools",
    "id": "m336"
  },
  {
    "topic": "subprocess",
    "q": "shell=True риск…",
    "options": [
      "инъекции через строку",
      "только slow",
      "безопаснее list",
      "нет"
    ],
    "answer": 0,
    "explain": "Prefer argv list.",
    "group": "Stdlib и производительность",
    "id": "m337"
  },
  {
    "topic": "secrets",
    "q": "compare_digest…",
    "options": [
      "защита от timing attacks",
      "быстрее ==",
      "hash lib",
      "uuid"
    ],
    "answer": 0,
    "explain": "Для токенов/паролей.",
    "group": "Stdlib и производительность",
    "id": "m338"
  },
  {
    "topic": "warnings",
    "q": "catch_warnings…",
    "options": [
      "временный контроль warnings",
      "except Exception",
      "logging",
      "pytest only"
    ],
    "answer": 0,
    "explain": "Контекст.",
    "group": "Тесты и качество",
    "id": "m339"
  },
  {
    "topic": "typing",
    "q": "Annotated[int, Ge(0)] идея…",
    "options": [
      "метаданные валидации/инструментов",
      "runtime int subclass",
      "GIL",
      "slots"
    ],
    "answer": 0,
    "explain": "PEP 593 экосистема.",
    "group": "Typing и dataclasses",
    "id": "m340"
  },
  {
    "topic": "dataclasses",
    "q": "asdict не делает…",
    "options": [
      "глубокую магию произвольных объектов идеально всегда",
      "рекурсию dataclass/dict/list в простых случаях",
      "копию",
      "dict"
    ],
    "answer": 0,
    "explain": "Ограничения конвертации.",
    "group": "Typing и dataclasses",
    "id": "m341"
  },
  {
    "topic": "asyncio",
    "q": "Shield отмены не отменяет…",
    "options": [
      "внутренний awaitable сразу снаружи",
      "KeyboardInterrupt OS",
      "process kill",
      "MemoryError"
    ],
    "answer": 0,
    "explain": "Ограниченная защита.",
    "group": "Asyncio",
    "id": "m342"
  },
  {
    "topic": "threading",
    "q": "local() даёт…",
    "options": [
      "thread-local storage",
      "process share",
      "async local",
      "global"
    ],
    "answer": 0,
    "explain": "threading.local.",
    "group": "Потоки, процессы, GIL",
    "id": "m343"
  },
  {
    "topic": "multiprocessing",
    "q": "Pool.map chunksize…",
    "options": [
      " влияет на нарезку задач",
      "отключает pickle",
      "GIL",
      "async"
    ],
    "answer": 0,
    "explain": "Баланс overhead.",
    "group": "Потоки, процессы, GIL",
    "id": "m344"
  },
  {
    "topic": "context",
    "q": "nullcontext…",
    "options": [
      "пустой CM-заглушка",
      "suppress all",
      "file open",
      "lock"
    ],
    "answer": 0,
    "explain": "Условный with.",
    "group": "Исключения и контекст",
    "id": "m345"
  },
  {
    "topic": "магические",
    "q": "__iter__ + __next__ на одном классе…",
    "options": [
      "объект и iterable и iterator",
      "запрещено",
      "только gen",
      "только async"
    ],
    "answer": 0,
    "explain": "Частый паттерн, но одноразовый.",
    "group": "Контекст и магические методы",
    "id": "m346"
  },
  {
    "topic": "property",
    "q": "cached_property сброс…",
    "options": [
      "del obj.attr / pop из __dict__",
      "авто каждый доступ",
      "нельзя",
      "GC only"
    ],
    "answer": 0,
    "explain": "Инвалидация кэша.",
    "group": "Контекст и магические методы",
    "id": "m347"
  },
  {
    "topic": "MRO",
    "q": "object всегда в конце MRO?",
    "options": [
      "обычно да для new-style",
      "нет никогда",
      "только old-style Py2",
      "только ABC"
    ],
    "answer": 0,
    "explain": "Корень иерархии.",
    "group": "ООП продвинутый",
    "id": "m348"
  },
  {
    "topic": "pickle",
    "q": "find_class можно ограничить для…",
    "options": [
      "безопасной загрузки whitelist",
      "ускорения",
      "json",
      "YAML"
    ],
    "answer": 0,
    "explain": "Кастомный Unpickler.",
    "group": "Stdlib и производительность",
    "id": "m349"
  },
  {
    "topic": "json",
    "q": "object_hook…",
    "options": [
      "постпроцесс dict при loads",
      "dumps only",
      "indent",
      "sort"
    ],
    "answer": 0,
    "explain": "Восстановление типов.",
    "group": "Stdlib и производительность",
    "id": "m350"
  },
  {
    "topic": "performance",
    "q": "__slots__ + weakref нужен…",
    "options": [
      "явный '__weakref__' в slots",
      "автоматически always",
      "запрещён",
      "только PyPy"
    ],
    "answer": 0,
    "explain": "Иначе нельзя weakref.",
    "group": "Stdlib и производительность",
    "id": "m351"
  },
  {
    "topic": "sort",
    "q": "key=str.lower…",
    "options": [
      "case-insensitive sort",
      "numeric",
      "by len default",
      "random"
    ],
    "answer": 0,
    "explain": "Нормализация ключа.",
    "group": "Stdlib и производительность",
    "id": "m352"
  },
  {
    "topic": "HTTP",
    "q": "ETag / If-None-Match…",
    "options": [
      "кэш-валидация",
      "auth",
      "CORS",
      "TLS"
    ],
    "answer": 0,
    "explain": "Условные запросы.",
    "group": "Веб и API",
    "id": "m353"
  },
  {
    "topic": "FastAPI",
    "q": "APIRouter…",
    "options": [
      "модульные маршруты",
      "ORM",
      "GIL router",
      "WSGI"
    ],
    "answer": 0,
    "explain": "Композиция приложений.",
    "group": "Веб и API",
    "id": "m354"
  },
  {
    "topic": "SQL",
    "q": "транзакция ACID — A это…",
    "options": [
      "Atomicity",
      "Async",
      "Array",
      "Auth"
    ],
    "answer": 0,
    "explain": "Всё или ничего.",
    "group": "Веб и API",
    "id": "m355"
  },
  {
    "topic": "тесты",
    "q": "hypothesis.given…",
    "options": [
      "property-based входы",
      "mock",
      "fixture data fixed only",
      "benchmark"
    ],
    "answer": 0,
    "explain": "Генерация примеров.",
    "group": "Тесты и качество",
    "id": "m356"
  },
  {
    "topic": "logging",
    "q": "LoggerAdapter…",
    "options": [
      "контекстные поля в логах",
      "handler",
      "filter ban",
      "root replace"
    ],
    "answer": 0,
    "explain": "request_id и т.п.",
    "group": "Тесты и качество",
    "id": "m357"
  },
  {
    "topic": "pathlib",
    "q": "Path.match vs glob…",
    "options": [
      "match — паттерн на путь, glob — поиск в дереве",
      "одно и то же",
      "match удаляет",
      "glob regex only"
    ],
    "answer": 0,
    "explain": "Разные API.",
    "group": "Stdlib и производительность",
    "id": "m358"
  },
  {
    "topic": "regex",
    "q": "re.IGNORECASE…",
    "options": [
      "флаг i",
      "multiline",
      "dotall",
      "verbose"
    ],
    "answer": 0,
    "explain": "Регистронезависимо.",
    "group": "Stdlib и производительность",
    "id": "m359"
  },
  {
    "topic": "regex",
    "q": "re.DOTALL…",
    "options": [
      "точка включает \\n",
      "ignorecase",
      "ascii",
      "debug"
    ],
    "answer": 0,
    "explain": "Многострочные матчи.",
    "group": "Stdlib и производительность",
    "id": "m360"
  },
  {
    "topic": "asyncio",
    "q": "CancelledError с 3.8+…",
    "options": [
      "BaseException subclass (не Exception)",
      "обычный Exception",
      "Warning",
      "OSError"
    ],
    "answer": 0,
    "explain": "Не глотать широким except Exception бездумно ранее — уточняй версию/практику.",
    "group": "Asyncio",
    "id": "m361"
  },
  {
    "topic": "typing",
    "q": "ParamSpec переносит…",
    "options": [
      "параметры callable в декораторах",
      "только TypeVar значений",
      "GIL",
      "Path"
    ],
    "answer": 0,
    "explain": "PEP 612.",
    "group": "Typing и dataclasses",
    "id": "m362"
  },
  {
    "topic": "collections",
    "q": "UserList…",
    "options": [
      "обёртка для кастомного list API",
      "быстрее list",
      "tuple",
      "array"
    ],
    "answer": 0,
    "explain": "Наследование удобнее.",
    "group": "Collections и itertools",
    "id": "m363"
  },
  {
    "topic": "itertools",
    "q": "pairwise (3.10)…",
    "options": [
      "(a,b),(b,c),…",
      "chunks",
      "product",
      "cycle"
    ],
    "answer": 0,
    "explain": "Соседние пары.",
    "group": "Collections и itertools",
    "id": "m364"
  },
  {
    "topic": "functools",
    "q": "reduce без initial на пустом…",
    "options": [
      "TypeError",
      "None",
      "0",
      "[]"
    ],
    "answer": 0,
    "explain": "Нужен initializer.",
    "group": "Collections и itertools",
    "id": "m365"
  },
  {
    "topic": "GIL",
    "q": "Продление CPU в C-extension без отпуска GIL…",
    "options": [
      "блокирует другие Python-потоки",
      "ускоряет их",
      "отключает process",
      "влияет только async"
    ],
    "answer": 0,
    "explain": "Держи ALLOW_THREADS для тяжёлого C.",
    "group": "Потоки, процессы, GIL",
    "id": "m366"
  },
  {
    "topic": "multiprocessing",
    "q": "forkserver start method…",
    "options": [
      "промежуточный сервер для форков",
      "только Windows",
      "async",
      "GIL free"
    ],
    "answer": 0,
    "explain": "Альтернатива fork/spawn.",
    "group": "Потоки, процессы, GIL",
    "id": "m367"
  },
  {
    "topic": "dataclasses",
    "q": "InitVar не попадает в…",
    "options": [
      "repr/eq хранимые поля как обычное поле",
      "init",
      "аннотации",
      "класс"
    ],
    "answer": 0,
    "explain": "Только аргумент инициализации.",
    "group": "Typing и dataclasses",
    "id": "m368"
  },
  {
    "topic": "ABC",
    "q": "__subclasshook__…",
    "options": [
      "кастом isinstance без register",
      "MRO rewrite",
      "GIL",
      "slots"
    ],
    "answer": 0,
    "explain": "Структурность для ABC.",
    "group": "ООП продвинутый",
    "id": "m369"
  },
  {
    "topic": "context",
    "q": "aclosing для async…",
    "options": [
      "async close аналог closing",
      "sync only",
      "thread",
      "process"
    ],
    "answer": 0,
    "explain": "contextlib.aclosing.",
    "group": "Исключения и контекст",
    "id": "m370"
  },
  {
    "topic": "магические",
    "q": "__matmul__ это…",
    "options": [
      "оператор @",
      "decorator",
      "matrix only NumPy language ban",
      "async"
    ],
    "answer": 0,
    "explain": "PEP 465.",
    "group": "Контекст и магические методы",
    "id": "m371"
  },
  {
    "topic": "property",
    "q": "doc у property…",
    "options": [
      "можно задать доку геттера",
      "запрещён",
      "только class docstring",
      "pep8 ban"
    ],
    "answer": 0,
    "explain": "help видит.",
    "group": "Контекст и магические методы",
    "id": "m372"
  },
  {
    "topic": "slots",
    "q": "объявить пустые slots у subclass…",
    "options": [
      "часто нужно [], чтобы не вернуть __dict__",
      "нельзя",
      "удаляет parent slots",
      "создаёт list attr"
    ],
    "answer": 0,
    "explain": "Тонкость наследования.",
    "group": "ООП продвинутый",
    "id": "m373"
  },
  {
    "topic": "json",
    "q": "ensure_ascii=False…",
    "options": [
      "сохраняет unicode как есть",
      "только ascii escapes always",
      "bytes",
      "pickle"
    ],
    "answer": 0,
    "explain": "Читаемый русский в JSON.",
    "group": "Stdlib и производительность",
    "id": "m374"
  },
  {
    "topic": "performance",
    "q": "getattr без default на горячем пути…",
    "options": [
      "дороже локальной переменной",
      "быстрее LOAD_FAST",
      "равно global",
      "убирает GIL"
    ],
    "answer": 0,
    "explain": "Кэшируй в локальную.",
    "group": "Stdlib и производительность",
    "id": "m375"
  },
  {
    "topic": "HTTP",
    "q": "CORS preflight…",
    "options": [
      "OPTIONS перед «сложным» запросом",
      "GET always",
      "TLS handshake",
      "DNS"
    ],
    "answer": 0,
    "explain": "Браузерная безопасность.",
    "group": "Веб и API",
    "id": "m376"
  },
  {
    "topic": "SQL",
    "q": "EXPLAIN показывает…",
    "options": [
      "план запроса",
      "результат rows only",
      "ORM log",
      "миграции"
    ],
    "answer": 0,
    "explain": "Оптимизация SQL.",
    "group": "Веб и API",
    "id": "m377"
  },
  {
    "topic": "тесты",
    "q": "pytest-asyncio mode…",
    "options": [
      "запуск async тестов",
      "threads",
      "process",
      "Twisted only"
    ],
    "answer": 0,
    "explain": "Плагин.",
    "group": "Тесты и качество",
    "id": "m378"
  },
  {
    "topic": "mock",
    "q": "spec=True ограничивает…",
    "options": [
      "атрибуты мока интерфейсом",
      "скорость",
      "GC",
      "patch target"
    ],
    "answer": 0,
    "explain": "Ловит опечатки.",
    "group": "Тесты и качество",
    "id": "m379"
  },
  {
    "topic": "logging",
    "q": "QueueHandler…",
    "options": [
      "логи из потоков в очередь",
      "HTTP handler",
      "file rotate only",
      "syslog ban"
    ],
    "answer": 0,
    "explain": "Централизация.",
    "group": "Тесты и качество",
    "id": "m380"
  },
  {
    "topic": "pathlib",
    "q": "expanduser()…",
    "options": [
      "раскрывает ~",
      "env $VAR всегда полностью как shell",
      "symlink resolve",
      "cwd"
    ],
    "answer": 0,
    "explain": "Домашний путь.",
    "group": "Stdlib и производительность",
    "id": "m381"
  },
  {
    "topic": "secrets",
    "q": "SystemRandom…",
    "options": [
      "OS RNG интерфейс как random.Random",
      "MT19937",
      "uuid",
      "hash"
    ],
    "answer": 0,
    "explain": "Криптостойкий генератор.",
    "group": "Stdlib и производительность",
    "id": "m382"
  },
  {
    "topic": "hashlib",
    "q": "pbkdf2_hmac / scrypt…",
    "options": [
      "KDF для паролей",
      "быстрый checksum",
      "crc",
      "siphash"
    ],
    "answer": 0,
    "explain": "Медленные по дизайну.",
    "group": "Stdlib и производительность",
    "id": "m383"
  },
  {
    "topic": "warnings",
    "q": "filterwarnings('ignore', category=DeprecationWarning)…",
    "options": [
      "глушит deprecations",
      "превращает в error",
      "удаляет API",
      "CI fail"
    ],
    "answer": 0,
    "explain": "Точечный фильтр.",
    "group": "Тесты и качество",
    "id": "m384"
  },
  {
    "topic": "typing",
    "q": "cast не проверяет runtime…",
    "options": [
      "да, no-op",
      "валидирует",
      "конвертирует",
      "бросок"
    ],
    "answer": 0,
    "explain": "Только для checker.",
    "group": "Typing и dataclasses",
    "id": "m385"
  },
  {
    "topic": "asyncio",
    "q": "get_running_loop()…",
    "options": [
      "loop текущей корутины",
      "создаёт новый",
      "None всегда в thread",
      "process loop"
    ],
    "answer": 0,
    "explain": "Предпочтительнее get_event_loop в async.",
    "group": "Asyncio",
    "id": "m386"
  },
  {
    "topic": "threading",
    "q": "Barrier для N потоков…",
    "options": [
      "синхронная встреча",
      "lock one",
      "async gather",
      "process barrier OS"
    ],
    "answer": 0,
    "explain": "threading.Barrier.",
    "group": "Потоки, процессы, GIL",
    "id": "m387"
  },
  {
    "topic": "collections",
    "q": "OrderedDict.move_to_end…",
    "options": [
      "LRU-подобные структуры",
      "sort",
      "hash rebuild",
      "json"
    ],
    "answer": 0,
    "explain": "Явный порядок.",
    "group": "Collections и itertools",
    "id": "m388"
  },
  {
    "topic": "itertools",
    "q": "islice(it, None, None, 2)…",
    "options": [
      "каждый второй лениво",
      "list copy",
      "reverse",
      "sort"
    ],
    "answer": 0,
    "explain": "Срез итератора.",
    "group": "Collections и itertools",
    "id": "m389"
  },
  {
    "topic": "functools",
    "q": "lru_cache не для…",
    "options": [
      "нехешируемых аргументов",
      "int",
      "str",
      "frozenset"
    ],
    "answer": 0,
    "explain": "Ключи кэша hashable.",
    "group": "Collections и itertools",
    "id": "m390"
  },
  {
    "topic": "GIL",
    "q": "PyPy GIL тоже есть, но…",
    "options": [
      "другой runtime/оптимизации",
      "GIL нет никогда",
      "одинаков бит-в-бит",
      "только Windows"
    ],
    "answer": 0,
    "explain": "Не переноси ожидания 1:1.",
    "group": "Потоки, процессы, GIL",
    "id": "m391"
  },
  {
    "topic": "multiprocessing",
    "q": "sharedctypes…",
    "options": [
      "общие ctypes-объекты",
      "любые py objects transparently",
      "asyncio Queue",
      "GIL share"
    ],
    "answer": 0,
    "explain": "Ограниченный shared state.",
    "group": "Потоки, процессы, GIL",
    "id": "m392"
  },
  {
    "topic": "dataclasses",
    "q": "make_dataclass…",
    "options": [
      "динамическое создание dataclass",
      "NamedTuple only",
      "TypedDict",
      "Enum"
    ],
    "answer": 0,
    "explain": "runtime factory.",
    "group": "Typing и dataclasses",
    "id": "m393"
  },
  {
    "topic": "ABC",
    "q": "abstractclassmethod существует?…",
    "options": [
      "исторически да, сейчас комбинации decorator",
      "никогда не было",
      "только Py2",
      "запрещено 3"
    ],
    "answer": 0,
    "explain": "Смотри актуальные рецепты abc+classmethod.",
    "group": "ООП продвинутый",
    "id": "m394"
  },
  {
    "topic": "context",
    "q": "chdir контекст (3.11)…",
    "options": [
      "временная смена cwd",
      "chmod",
      "chown",
      "mount"
    ],
    "answer": 0,
    "explain": "contextlib.chdir.",
    "group": "Исключения и контекст",
    "id": "m395"
  },
  {
    "topic": "магические",
    "q": "__set_name__ у дескриптора…",
    "options": [
      "узнаёт имя атрибута в owner",
      "вызывается при print",
      "GC",
      "import"
    ],
    "answer": 0,
    "explain": "PEP 487.",
    "group": "Контекст и магические методы",
    "id": "m396"
  },
  {
    "topic": "SQL",
    "q": "Isolation level Serializable…",
    "options": [
      "самый строгий из классических",
      "read uncommitted",
      "без транзакций",
      "autocommit only"
    ],
    "answer": 0,
    "explain": "Меньше аномалий, больше конфликтов.",
    "group": "Веб и API",
    "id": "m397"
  },
  {
    "topic": "HTTP",
    "q": "HTTPS termination…",
    "options": [
      "TLS часто на proxy/load balancer",
      "только в app forever",
      "DNSSEC",
      "JWT"
    ],
    "answer": 0,
    "explain": "Инфра-паттерн.",
    "group": "Веб и API",
    "id": "m398"
  },
  {
    "topic": "FastAPI",
    "q": "UploadFile…",
    "options": [
      "асинхронная работа с upload",
      "только bytes sync read обязателен без api",
      "S3 client",
      "pathlib"
    ],
    "answer": 0,
    "explain": "Starlette files.",
    "group": "Веб и API",
    "id": "m399"
  },
  {
    "topic": "тесты",
    "q": "freezegun / time-machine…",
    "options": [
      "заморозка времени в тестах",
      "mock HTTP",
      "DB",
      "GIL"
    ],
    "answer": 0,
    "explain": "Детерминизм time.",
    "group": "Тесты и качество",
    "id": "m400"
  },
  {
    "topic": "logging",
    "q": "RotatingFileHandler…",
    "options": [
      "ротация по размеру",
      "по времени only Timed",
      "stdout",
      "queue"
    ],
    "answer": 0,
    "explain": "Файловые логи.",
    "group": "Тесты и качество",
    "id": "m401"
  },
  {
    "topic": "typing",
    "q": "Never (3.11)…",
    "options": [
      "низший тип, недостижимость",
      "Any",
      "object",
      "None"
    ],
    "answer": 0,
    "explain": "Bottom type.",
    "group": "Typing и dataclasses",
    "id": "m402"
  },
  {
    "topic": "asyncio",
    "q": "eager_task_factory (3.12)…",
    "options": [
      "задачи стартуют немедленно",
      "удаляет cancel",
      "process tasks",
      "GIL"
    ],
    "answer": 0,
    "explain": "Семантика планирования.",
    "group": "Asyncio",
    "id": "m403"
  },
  {
    "topic": "collections",
    "q": "Counter.elements()…",
    "options": [
      "итератор с повторами по счёту",
      "unique keys",
      "sorted list always",
      "dict"
    ],
    "answer": 0,
    "explain": "Разворачивает счётчики.",
    "group": "Collections и itertools",
    "id": "m404"
  },
  {
    "topic": "regex",
    "q": "atomic grouping / possessive…",
    "options": [
      "в stdlib re ограничено; смотри сторонние",
      "полностью как Perl always",
      "нет понятия",
      "только bytes"
    ],
    "answer": 0,
    "explain": "Нюанс движка.",
    "group": "Stdlib и производительность",
    "id": "m405"
  },
  {
    "topic": "performance",
    "q": "bytearray для накопления байт…",
    "options": [
      "мутабельный буфер",
      "immutable как bytes",
      "str",
      "memoryview ban"
    ],
    "answer": 0,
    "explain": "Эффективная сборка.",
    "group": "Stdlib и производительность",
    "id": "m406"
  },
  {
    "topic": "DI",
    "q": "composition root…",
    "options": [
      "место сборки графа зависимостей",
      "каждый модуль new сам",
      "global random",
      "import side effect only"
    ],
    "answer": 0,
    "explain": "Чистая архитектура.",
    "group": "Веб и API",
    "id": "m407"
  },
  {
    "topic": "weakref",
    "q": "WeakKeyDictionary ключи…",
    "options": [
      "слабые, должны быть hashable weakrefable",
      "сильные list",
      "int only always immortal",
      "str intern mandatory"
    ],
    "answer": 0,
    "explain": "Осторожно с ключами.",
    "group": "Stdlib и производительность",
    "id": "m408"
  },
  {
    "topic": "struct",
    "q": "iter_unpack…",
    "options": [
      "лениво распаковывает буфер",
      "json",
      "pickle",
      "yaml"
    ],
    "answer": 0,
    "explain": "Повторяющийся формат.",
    "group": "Stdlib и производительность",
    "id": "m409"
  },
  {
    "topic": "heapq",
    "q": "heapify in-place…",
    "options": [
      "линейно строит кучу",
      "O(n log n) sort copy",
      "shuffle",
      "unique"
    ],
    "answer": 0,
    "explain": "Эффективная инициализация.",
    "group": "Collections и itertools",
    "id": "m410"
  },
  {
    "topic": "subprocess",
    "q": "DEVNULL…",
    "options": [
      "подавить stdout/stderr",
      "pipe",
      "inherit",
      "capture"
    ],
    "answer": 0,
    "explain": "subprocess.DEVNULL.",
    "group": "Stdlib и производительность",
    "id": "m411"
  },
  {
    "topic": "tempfile",
    "q": "mkstemp возвращает…",
    "options": [
      "fd и path",
      "только Path",
      "file object always",
      "bytes"
    ],
    "answer": 0,
    "explain": "Низкоуровневый API.",
    "group": "Stdlib и производительность",
    "id": "m412"
  },
  {
    "topic": "import",
    "q": "sys.path_hooks…",
    "options": [
      "как находятся импорты по path entry",
      "pip",
      "venv activate",
      "sitecustomize only"
    ],
    "answer": 0,
    "explain": "Import machinery.",
    "group": "Stdlib и производительность",
    "id": "m413"
  },
  {
    "topic": "enum",
    "q": "Enum functional API…",
    "options": [
      "Enum('Color', 'R G B')",
      "только class syntax",
      "TypedDict",
      "dataclass"
    ],
    "answer": 0,
    "explain": "Динамическое создание.",
    "group": "Typing и dataclasses",
    "id": "m414"
  },
  {
    "topic": "match",
    "q": "case Point(x=0, y=0): при наличии __match_args__/dataclass…",
    "options": [
      "positional/keyword patterns",
      "только dict",
      "regex",
      "ошибка всегда"
    ],
    "answer": 0,
    "explain": "Class pattern.",
    "group": "Typing и dataclasses",
    "id": "m415"
  },
  {
    "topic": "args",
    "q": "def f(a, b=1, /, c=2, *, d=3): — b…",
    "options": [
      "positional-only с default",
      "keyword-only",
      "varargs",
      "kwargs"
    ],
    "answer": 0,
    "explain": "Смешанная сигнатура.",
    "group": "Typing и dataclasses",
    "id": "m416"
  },
  {
    "topic": "context",
    "q": "asynccontextmanager…",
    "options": [
      "async CM из генератора",
      "sync only",
      "thread",
      "process"
    ],
    "answer": 0,
    "explain": "contextlib.",
    "group": "Исключения и контекст",
    "id": "m417"
  },
  {
    "topic": "магические",
    "q": "__index__ нужен для…",
    "options": [
      "преобразования к int индекса/среза",
      "float",
      "str",
      "bool only"
    ],
    "answer": 0,
    "explain": "Числовые протоколы.",
    "group": "Контекст и магические методы",
    "id": "m418"
  },
  {
    "topic": "property",
    "q": "setter может менять тип хранимого…",
    "options": [
      "да, на твоей логике",
      "нет языком запрещено",
      "только int",
      "только str"
    ],
    "answer": 0,
    "explain": "Это обычный метод.",
    "group": "Контекст и магические методы",
    "id": "m419"
  },
  {
    "topic": "ABC",
    "q": "update_abstractmethods (3.10)…",
    "options": [
      "пересчёт абстрактности после правок",
      "MRO",
      "GIL",
      "slots"
    ],
    "answer": 0,
    "explain": "Динамические классы.",
    "group": "ООП продвинутый",
    "id": "m420"
  },
  {
    "topic": "json",
    "q": "JSONEncoder subclass…",
    "options": [
      "кастом default",
      "loads only",
      "schema",
      "yaml"
    ],
    "answer": 0,
    "explain": "Расширение dumps.",
    "group": "Stdlib и производительность",
    "id": "m421"
  },
  {
    "topic": "performance",
    "q": "много мелких объектов — смотри…",
    "options": [
      "аллокации/GC, slots, interning осторожно",
      "только pep8",
      "только async",
      "только typed"
    ],
    "answer": 0,
    "explain": "Профилируй память.",
    "group": "Stdlib и производительность",
    "id": "m422"
  },
  {
    "topic": "HTTP",
    "q": "gzip Content-Encoding…",
    "options": [
      "сжатие тела",
      "шифр",
      "auth",
      "мультилипарт"
    ],
    "answer": 0,
    "explain": "Транспортное сжатие.",
    "group": "Веб и API",
    "id": "m423"
  },
  {
    "topic": "SQL",
    "q": "connection pool exhaustion…",
    "options": [
      "все коннекты заняты — очередь/ошибки",
      "всегда OOM",
      "GIL",
      "DNS"
    ],
    "answer": 0,
    "explain": "Лимиты пула.",
    "group": "Веб и API",
    "id": "m424"
  },
  {
    "topic": "тесты",
    "q": "snapshot testing…",
    "options": [
      "сравнение с эталонным выводом",
      "property based",
      "load test",
      "mutation"
    ],
    "answer": 0,
    "explain": "UI/API регрессии.",
    "group": "Тесты и качество",
    "id": "m425"
  },
  {
    "topic": "logging",
    "q": "Structured logging…",
    "options": [
      "поля/JSON, не только текст",
      "только print",
      "pickle logs",
      "HTML"
    ],
    "answer": 0,
    "explain": "Наблюдаемость.",
    "group": "Тесты и качество",
    "id": "m426"
  },
  {
    "topic": "typing",
    "q": "TypeVarTuple / Unpack…",
    "options": [
      "вариативные типы кортежей",
      "только dict",
      "Enum",
      "Path"
    ],
    "answer": 0,
    "explain": "PEP 646.",
    "group": "Typing и dataclasses",
    "id": "m427"
  },
  {
    "topic": "asyncio",
    "q": "Runner (3.11)…",
    "options": [
      "управление loop run упрощённо",
      "замена threading",
      "process pool",
      "WSGI"
    ],
    "answer": 0,
    "explain": "asyncio.Runner.",
    "group": "Asyncio",
    "id": "m428"
  },
  {
    "topic": "collections",
    "q": "namedtuple _asdict…",
    "options": [
      "OrderedDict/dict полей",
      "json dumps auto",
      "list",
      "set"
    ],
    "answer": 0,
    "explain": "Удобный экспорт.",
    "group": "Collections и itertools",
    "id": "m429"
  },
  {
    "topic": "itertools",
    "q": "chain.from_iterable…",
    "options": [
      "сплющивает один уровень",
      "deep flatten any",
      "product",
      "zip"
    ],
    "answer": 0,
    "explain": "Без распаковки *huge.",
    "group": "Collections и itertools",
    "id": "m430"
  },
  {
    "topic": "functools",
    "q": "cached_property не thread-safe из коробки идеально…",
    "options": [
      "да, нюансы гонок",
      "полностью safe всегда",
      "async only safe",
      "process safe"
    ],
    "answer": 0,
    "explain": "Документируй модель.",
    "group": "Collections и itertools",
    "id": "m431"
  },
  {
    "topic": "GIL",
    "q": "nogil / free-threading статус…",
    "options": [
      "эксперименты/опции новых версий",
      "уже default везде без оговорок",
      "отменён навсегда",
      "только Jython"
    ],
    "answer": 0,
    "explain": "Следи за релизом CPython.",
    "group": "Потоки, процессы, GIL",
    "id": "m432"
  },
  {
    "topic": "multiprocessing",
    "q": "initializer у Pool…",
    "options": [
      "setup в worker process",
      "в parent only",
      "async",
      "import ban"
    ],
    "answer": 0,
    "explain": "Состояние воркера.",
    "group": "Потоки, процессы, GIL",
    "id": "m433"
  },
  {
    "topic": "dataclasses",
    "q": "field(hash=False)…",
    "options": [
      "исключает из __hash__",
      "из init",
      "из repr always",
      "из annotations"
    ],
    "answer": 0,
    "explain": "Тонкая настройка.",
    "group": "Typing и dataclasses",
    "id": "m434"
  },
  {
    "topic": "context",
    "q": "redirect_stdout…",
    "options": [
      "временно подменяет sys.stdout",
      "logging",
      "subprocess",
      "files only Path"
    ],
    "answer": 0,
    "explain": "contextlib.",
    "group": "Исключения и контекст",
    "id": "m435"
  },
  {
    "topic": "магические",
    "q": "__bytes__…",
    "options": [
      "bytes(obj)",
      "str",
      "repr",
      "format"
    ],
    "answer": 0,
    "explain": "Байтовое представление.",
    "group": "Контекст и магические методы",
    "id": "m436"
  },
  {
    "topic": "SQL",
    "q": "UPSERT (ON CONFLICT)…",
    "options": [
      "вставить или обновить",
      "только delete",
      "truncate",
      "vacuum"
    ],
    "answer": 0,
    "explain": "Идемпотентные записи.",
    "group": "Веб и API",
    "id": "m437"
  },
  {
    "topic": "HTTP",
    "q": "HTTP/2 multiplexing…",
    "options": [
      "много стримов на соединении",
      "только один request",
      "UDP",
      "SMTP"
    ],
    "answer": 0,
    "explain": "Меньше head-of-line на уровне HTTP/1.",
    "group": "Веб и API",
    "id": "m438"
  },
  {
    "topic": "FastAPI",
    "q": "OAuth2PasswordBearer…",
    "options": [
      "схема доставания токена",
      "ORM user",
      "JWT decode auto complete security",
      "CORS"
    ],
    "answer": 0,
    "explain": "Каркас auth.",
    "group": "Веб и API",
    "id": "m439"
  },
  {
    "topic": "тесты",
    "q": "doctest проверяет…",
    "options": [
      "примеры в docstring",
      "типы",
      "coverage",
      "perf"
    ],
    "answer": 0,
    "explain": "Живая документация.",
    "group": "Тесты и качество",
    "id": "m440"
  },
  {
    "topic": "logging",
    "q": "Logger.propagate…",
    "options": [
      "передача родителям",
      "stop all",
      "change level",
      "format"
    ],
    "answer": 0,
    "explain": "Иерархия.",
    "group": "Тесты и качество",
    "id": "m441"
  },
  {
    "topic": "typing",
    "q": "Protocol с @property…",
    "options": [
      "структурные атрибуты",
      "запрещено",
      "только methods",
      "runtime always full"
    ],
    "answer": 0,
    "explain": "Модели данных.",
    "group": "Typing и dataclasses",
    "id": "m442"
  },
  {
    "topic": "asyncio",
    "q": "StreamReader/Writer…",
    "options": [
      "высокоуровневые потоки TCP",
      "файлы pathlib",
      "HTTP router",
      "subprocess only"
    ],
    "answer": 0,
    "explain": "asyncio streams.",
    "group": "Asyncio",
    "id": "m443"
  },
  {
    "topic": "collections",
    "q": "deque rotate…",
    "options": [
      "циклический сдвиг",
      "sort",
      "reverse copy list",
      "shuffle"
    ],
    "answer": 0,
    "explain": "Эффективно с концов.",
    "group": "Collections и itertools",
    "id": "m444"
  },
  {
    "topic": "regex",
    "q": "possessive quantifiers в regex module…",
    "options": [
      "сторонний regex иногда богаче re",
      "идентичен re всегда",
      "нет нигде",
      "только bytes re"
    ],
    "answer": 0,
    "explain": "stdlib re ≠ regex.",
    "group": "Stdlib и производительность",
    "id": "m445"
  },
  {
    "topic": "performance",
    "q": "интернирование вручную sys.intern…",
    "options": [
      "для повторяющихся str-ключей",
      "для всех объектов",
      "для list",
      "для async"
    ],
    "answer": 0,
    "explain": "Память словарей.",
    "group": "Stdlib и производительность",
    "id": "m446"
  },
  {
    "topic": "DI",
    "q": "ambient context антипаттерн когда…",
    "options": [
      "скрытые глобальные зависимости",
      "явный init",
      "typed ports",
      "tests fakes"
    ],
    "answer": 0,
    "explain": "Невидимые связи.",
    "group": "Веб и API",
    "id": "m447"
  },
  {
    "topic": "weakref",
    "q": "ReferenceType callback…",
    "options": [
      "при смерти объекта",
      "при создании",
      "при hash",
      "при print"
    ],
    "answer": 0,
    "explain": "Слабые колбэки.",
    "group": "Stdlib и производительность",
    "id": "m448"
  },
  {
    "topic": "struct",
    "q": "native size alignment @…",
    "options": [
      "зависит от платформы",
      "всегда packed",
      "network always",
      "UTF"
    ],
    "answer": 0,
    "explain": "Формат @ vs =.",
    "group": "Stdlib и производительность",
    "id": "m449"
  },
  {
    "topic": "heapq",
    "q": "merge(*iters)…",
    "options": [
      "слияние sorted-итераторов",
      "sort unsorted",
      "unique",
      "shuffle"
    ],
    "answer": 0,
    "explain": "Как multi-pointer merge.",
    "group": "Collections и itertools",
    "id": "m450"
  },
  {
    "topic": "subprocess",
    "q": "Popen.communicate…",
    "options": [
      "обмен с процессом + wait",
      "nonblocking forever без wait",
      "только kill",
      "shell"
    ],
    "answer": 0,
    "explain": "Избежать deadlock pipe.",
    "group": "Stdlib и производительность",
    "id": "m451"
  },
  {
    "topic": "tempfile",
    "q": "SpooledTemporaryFile…",
    "options": [
      "сначала RAM, потом диск",
      "только диск",
      "только RAM forever",
      "S3"
    ],
    "answer": 0,
    "explain": "Порог max_size.",
    "group": "Stdlib и производительность",
    "id": "m452"
  },
  {
    "topic": "import",
    "q": "zipimport позволяет…",
    "options": [
      "импорт из zip",
      "только wheel build",
      "pip download",
      "venv"
    ],
    "answer": 0,
    "explain": "Path entry.",
    "group": "Stdlib и производительность",
    "id": "m453"
  },
  {
    "topic": "enum",
    "q": "Enum'ы сравнимы с int если…",
    "options": [
      "IntEnum / IntFlag",
      "всегда",
      "никогда",
      "только StrEnum"
    ],
    "answer": 0,
    "explain": "Отдельные типы.",
    "group": "Typing и dataclasses",
    "id": "m454"
  },
  {
    "topic": "match",
    "q": "case _ if guard:…",
    "options": [
      "guard условие",
      "wildcard запрещён с if",
      "bitwise",
      "async"
    ],
    "answer": 0,
    "explain": "Паттерн + условие.",
    "group": "Typing и dataclasses",
    "id": "m455"
  },
  {
    "topic": "args",
    "q": "KeywordTypeError при лишнем имени…",
    "options": [
      "TypeError",
      "KeyError",
      "NameError",
      "SyntaxError runtime"
    ],
    "answer": 0,
    "explain": "Неожиданный kwargs.",
    "group": "Typing и dataclasses",
    "id": "m456"
  },
  {
    "topic": "context",
    "q": "ContextDecorator…",
    "options": [
      "CM + decorator сразу",
      "только async",
      "lock",
      "exitstack"
    ],
    "answer": 0,
    "explain": "Двойной интерфейс.",
    "group": "Исключения и контекст",
    "id": "m457"
  },
  {
    "topic": "магические",
    "q": "__reversed__…",
    "options": [
      "кастом reversed()",
      "sort",
      "iter only",
      "len"
    ],
    "answer": 0,
    "explain": "Протокол.",
    "group": "Контекст и магические методы",
    "id": "m458"
  },
  {
    "topic": "SQL",
    "q": "prepared statements…",
    "options": [
      "переиспользование плана + безопасность",
      "ORM only",
      "JSON",
      "миграция"
    ],
    "answer": 0,
    "explain": "Меньше parse/injection.",
    "group": "Веб и API",
    "id": "m459"
  },
  {
    "topic": "HTTP",
    "q": "circuit breaker…",
    "options": [
      "временно стопит вызовы к больному сервису",
      "retry forever",
      "кэш DNS",
      "TLS"
    ],
    "answer": 0,
    "explain": "Устойчивость.",
    "group": "Веб и API",
    "id": "m460"
  },
  {
    "topic": "тесты",
    "q": "mutation testing…",
    "options": [
      "ломает код и смотрит, падают ли тесты",
      "fuzz network",
      "load",
      "snapshot"
    ],
    "answer": 0,
    "explain": "Сила suite.",
    "group": "Тесты и качество",
    "id": "m461"
  },
  {
    "topic": "logging",
    "q": "Filter.filter возвращает…",
    "options": [
      "True чтобы пропустить запись",
      "строку",
      "level",
      "handler"
    ],
    "answer": 0,
    "explain": "Булев отбор.",
    "group": "Тесты и качество",
    "id": "m462"
  },
  {
    "topic": "typing",
    "q": "TypedDict inheritance…",
    "options": [
      "можно расширять/переопределять ключи по правилам",
      "запрещено",
      "как dataclass frozen auto",
      "Enum"
    ],
    "answer": 0,
    "explain": "Структуры словарей.",
    "group": "Typing и dataclasses",
    "id": "m463"
  },
  {
    "topic": "asyncio",
    "q": "incomplete Task на shutdown…",
    "options": [
      "нужно cancel/await корректно",
      "игнор безопасен всегда",
      "auto join threads",
      "OS kill only"
    ],
    "answer": 0,
    "explain": "Предупреждения loop.close.",
    "group": "Asyncio",
    "id": "m464"
  },
  {
    "topic": "collections",
    "q": "Counter.subtract…",
    "options": [
      "может уйти в минус",
      "как - но clip 0",
      "удаляет ключи <1 always",
      "ошибка на минус"
    ],
    "answer": 0,
    "explain": "Отличие от -.",
    "group": "Collections и itertools",
    "id": "m465"
  },
  {
    "topic": "itertools",
    "q": "accumulate с func=operator.mul…",
    "options": [
      "накопительное произведение",
      "sum only",
      "max only",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Кастомная свёртка.",
    "group": "Collections и itertools",
    "id": "m466"
  },
  {
    "topic": "functools",
    "q": "singledispatch регистрирует…",
    "options": [
      "перегрузки по типу",
      "по имени аргумента любому",
      "по kwargs only",
      "async"
    ],
    "answer": 0,
    "explain": "@f.register(int).",
    "group": "Collections и itertools",
    "id": "m467"
  },
  {
    "topic": "GIL",
    "q": "время в чистом Python CPU bound на 2 threads…",
    "options": [
      "часто ≈1 ядро из-за GIL",
      "линейный x2 всегда",
      "x4",
      "zero"
    ],
    "answer": 0,
    "explain": "Классический вопрос собеса.",
    "group": "Потоки, процессы, GIL",
    "id": "m468"
  },
  {
    "topic": "multiprocessing",
    "q": "массив Array('i', n)…",
    "options": [
      "shared typed buffer",
      "list proxy",
      "numpy always",
      "bytes string"
    ],
    "answer": 0,
    "explain": "sharedctypes.",
    "group": "Потоки, процессы, GIL",
    "id": "m469"
  },
  {
    "topic": "dataclasses",
    "q": "fields() возвращает…",
    "options": [
      "кортеж Field",
      "dict values",
      "json",
      "annotations raw only"
    ],
    "answer": 0,
    "explain": "Интроспекция.",
    "group": "Typing и dataclasses",
    "id": "m470"
  },
  {
    "topic": "context",
    "q": "suppress можно с несколькими типами…",
    "options": [
      "да",
      "нет",
      "только Exception",
      "только OSError"
    ],
    "answer": 0,
    "explain": "Как except tuple.",
    "group": "Исключения и контекст",
    "id": "m471"
  },
  {
    "topic": "магические",
    "q": "__contains__ обслуживает…",
    "options": [
      "in",
      "is",
      "==",
      "for"
    ],
    "answer": 0,
    "explain": "Членство.",
    "group": "Контекст и магические методы",
    "id": "m472"
  },
  {
    "topic": "HTTP",
    "q": "idempotency-key header паттерн…",
    "options": [
      "безопасный повтор POST",
      "кэш ETag",
      "CORS",
      "JWT refresh only"
    ],
    "answer": 0,
    "explain": "Платёжные API.",
    "group": "Веб и API",
    "id": "m473"
  },
  {
    "topic": "SQL",
    "q": "covering index…",
    "options": [
      "индекс закрывает запрос без heap",
      "полный table scan",
      "foreign key",
      "view"
    ],
    "answer": 0,
    "explain": "Меньше I/O.",
    "group": "Веб и API",
    "id": "m474"
  },
  {
    "topic": "тесты",
    "q": "pytest hook pytest_configure…",
    "options": [
      "плагинная настройка",
      "fixture data",
      "assert rewrite off auto",
      "collect only ban"
    ],
    "answer": 0,
    "explain": "Расширение pytest.",
    "group": "Тесты и качество",
    "id": "m475"
  },
  {
    "topic": "logging",
    "q": "basicConfig повторный вызов…",
    "options": [
      "часто no-op если уже handlers",
      "всегда пересоздаёт",
      "удаляет root",
      "error"
    ],
    "answer": 0,
    "explain": "Идиома один раз.",
    "group": "Тесты и качество",
    "id": "m476"
  },
  {
    "topic": "typing",
    "q": "get_type_hints…",
    "options": [
      "резолвит аннотации",
      "runtime enforce",
      "mypy daemon",
      "compile"
    ],
    "answer": 0,
    "explain": "typing / inspect.",
    "group": "Typing и dataclasses",
    "id": "m477"
  },
  {
    "topic": "asyncio",
    "q": "call_soon_threadsafe…",
    "options": [
      "планирование из другого потока",
      "из корутины предпочтительнее create_task",
      "process",
      "GIL free"
    ],
    "answer": 0,
    "explain": "Интеграция threads↔loop.",
    "group": "Asyncio",
    "id": "m478"
  },
  {
    "topic": "collections",
    "q": "defaultdict без factory при []…",
    "options": [
      "TypeError/нужен factory",
      "создаёт None",
      "KeyError как dict",
      "0"
    ],
    "answer": 0,
    "explain": "Обязателен default_factory.",
    "group": "Collections и itertools",
    "id": "m479"
  },
  {
    "topic": "regex",
    "q": "\\b граница слова…",
    "options": [
      "word boundary",
      "backspace",
      "begin",
      "byte"
    ],
    "answer": 0,
    "explain": "Частый паттерн.",
    "group": "Stdlib и производительность",
    "id": "m480"
  },
  {
    "topic": "performance",
    "q": "много append затем join для str частей…",
    "options": [
      "хороший паттерн",
      "хуже += всегда в CPython без оговорок? не опирайся",
      "запрещён",
      "только bytearray"
    ],
    "answer": 0,
    "explain": "Читаемо и предсказуемо.",
    "group": "Stdlib и производительность",
    "id": "m481"
  },
  {
    "topic": "DI",
    "q": "interface segregation в typing…",
    "options": [
      "узкие Protocol вместо жирных ABC",
      "один God Protocol",
      "Any everywhere",
      "dict[str,Any] only"
    ],
    "answer": 0,
    "explain": "ISP.",
    "group": "Веб и API",
    "id": "m482"
  },
  {
    "topic": "weakref",
    "q": "getweakrefcount…",
    "options": [
      "число слабых ссылок",
      "refcount сильных",
      "size",
      "hash"
    ],
    "answer": 0,
    "explain": "Интроспекция.",
    "group": "Stdlib и производительность",
    "id": "m483"
  },
  {
    "topic": "struct",
    "q": "bool в format?…",
    "options": [
      "'?'",
      "'b' only",
      "'i'",
      "нет"
    ],
    "answer": 0,
    "explain": "Символ ?.",
    "group": "Stdlib и производительность",
    "id": "m484"
  },
  {
    "topic": "heapq",
    "q": "nsmallest…",
    "options": [
      "k наименьших",
      "полная сортировка обязательна внешне",
      "max heap",
      "unique"
    ],
    "answer": 0,
    "explain": "Симметрично nlargest.",
    "group": "Collections и itertools",
    "id": "m485"
  },
  {
    "topic": "subprocess",
    "q": "capture_output=True эквивалент…",
    "options": [
      "stdout/err PIPE",
      "DEVNULL",
      "inherit",
      "shell"
    ],
    "answer": 0,
    "explain": "Удобный флаг run.",
    "group": "Stdlib и производительность",
    "id": "m486"
  },
  {
    "topic": "tempfile",
    "q": "gettempdir()…",
    "options": [
      "каталог временных файлов",
      "home",
      "cwd",
      "root"
    ],
    "answer": 0,
    "explain": "Платформенный tmp.",
    "group": "Stdlib и производительность",
    "id": "m487"
  },
  {
    "topic": "import",
    "q": "MetaPathFinder…",
    "options": [
      "поиск модулей на meta_path",
      "path entry only",
      "pip",
      "wheel"
    ],
    "answer": 0,
    "explain": "PEP 451.",
    "group": "Stdlib и производительность",
    "id": "m488"
  },
  {
    "topic": "enum",
    "q": "auto() значения…",
    "options": [
      "по правилам Enum/Flag",
      "random uuid",
      "hash id",
      "None"
    ],
    "answer": 0,
    "explain": "Инкремент обычно.",
    "group": "Typing и dataclasses",
    "id": "m489"
  },
  {
    "topic": "match",
    "q": "case {'x': _, **rest}:…",
    "options": [
      "остальные ключи в rest",
      "ошибка",
      "list",
      "set"
    ],
    "answer": 0,
    "explain": "Mapping rest.",
    "group": "Typing и dataclasses",
    "id": "m490"
  },
  {
    "topic": "args",
    "q": "Positional-only полезен для…",
    "options": [
      "стабильного API имён параметров",
      "скорости GIL",
      "async",
      "JSON"
    ],
    "answer": 0,
    "explain": "Можно переименовать внутренне.",
    "group": "Typing и dataclasses",
    "id": "m491"
  },
  {
    "topic": "context",
    "q": "ExitStack.callback…",
    "options": [
      "регистрирует произвольный teardown",
      "только CM",
      "async",
      "GC"
    ],
    "answer": 0,
    "explain": "Гибкая уборка.",
    "group": "Исключения и контекст",
    "id": "m492"
  },
  {
    "topic": "магические",
    "q": "__length_hint__…",
    "options": [
      "оценка длины для list(it)",
      "точный len обязателен",
      "hash",
      "bool"
    ],
    "answer": 0,
    "explain": "Оптимизация аллокаций.",
    "group": "Контекст и магические методы",
    "id": "m493"
  },
  {
    "topic": "замыкания",
    "q": "Что выведут все вызовы?",
    "options": [
      "2 2 2",
      "0 1 2",
      "ошибка",
      "None None None"
    ],
    "answer": 0,
    "explain": "Позднее связывание i.",
    "code": "funcs = []\nfor i in range(3):\n    funcs.append(lambda: i)\nprint(funcs[0](), funcs[1](), funcs[2]())",
    "group": "Декораторы и замыкания",
    "id": "m494"
  },
  {
    "topic": "замыкания",
    "q": "Что выведут все вызовы?",
    "options": [
      "0 1 2",
      "2 2 2",
      "ошибка",
      "1 1 1"
    ],
    "answer": 0,
    "explain": "Default фиксирует i.",
    "code": "funcs = []\nfor i in range(3):\n    funcs.append(lambda i=i: i)\nprint(funcs[0](), funcs[1](), funcs[2]())",
    "group": "Декораторы и замыкания",
    "id": "m495"
  },
  {
    "topic": "генераторы",
    "q": "Что выведет код?",
    "options": [
      "0\n1\n2",
      "[0, 1, 2]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Генератор по next.",
    "code": "def g():\n    yield 0\n    yield 1\n    yield 2\nfor x in g():\n    print(x)",
    "group": "Генераторы и итераторы",
    "id": "m496"
  },
  {
    "topic": "генераторы",
    "q": "Что будет после исчерпания?",
    "options": [
      "StopIteration",
      "None",
      "IndexError",
      "False"
    ],
    "answer": 0,
    "explain": "Протокол итератора.",
    "code": "g = (x for x in range(1))\nnext(g)\nnext(g)",
    "group": "Генераторы и итераторы",
    "id": "m497"
  },
  {
    "topic": "декораторы",
    "q": "Что выведет код?",
    "options": [
      "wrap\nf",
      "f\nwrap",
      "wrap",
      "f"
    ],
    "answer": 0,
    "explain": "g = deco(g) при определении.",
    "code": "def deco(fn):\n    print('wrap')\n    return fn\n@deco\ndef f():\n    print('f')\nf()",
    "group": "Декораторы и замыкания",
    "id": "m498"
  },
  {
    "topic": "GIL",
    "q": "Для CPU-bound в CPython лучше…",
    "options": [
      "multiprocessing / native",
      "больше threading",
      "time.sleep",
      "print"
    ],
    "answer": 0,
    "explain": "GIL мешает CPU threads.",
    "code": "# cpu_bound()\n# threading vs multiprocessing?",
    "group": "Потоки, процессы, GIL",
    "id": "m499"
  },
  {
    "topic": "asyncio",
    "q": "Что нужно для await?",
    "options": [
      "async def",
      "обычный def",
      "lambda",
      "class"
    ],
    "answer": 0,
    "explain": "Только в корутине.",
    "code": "async def main():\n    await asyncio.sleep(0)",
    "group": "Asyncio",
    "id": "m500"
  },
  {
    "topic": "dict",
    "q": "В чём опасность?",
    "options": [
      "один list на все ключи",
      "KeyError",
      "нет опасности",
      "deepcopy"
    ],
    "answer": 0,
    "explain": "fromkeys шарит value.",
    "code": "d = dict.fromkeys(['a', 'b'], [])\nd['a'].append(1)\nprint(d['b'])",
    "group": "Collections и itertools",
    "id": "m501"
  },
  {
    "topic": "comprehensions",
    "q": "Утечёт ли i наружу?",
    "options": [
      "нет (Py3)",
      "да как в 2.7",
      "ошибка",
      "только в dictcomp"
    ],
    "answer": 0,
    "explain": "Свой scope у comprehension.",
    "code": "[i for i in range(3)]\n# i ?",
    "group": "Генераторы и итераторы",
    "id": "m502"
  },
  {
    "topic": "магические",
    "q": "Что напечатает print(obj)?",
    "options": [
      "hi",
      "Obj()",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "__str__ для print.",
    "code": "class Obj:\n    def __str__(self):\n        return 'hi'\nprint(Obj())",
    "group": "Контекст и магические методы",
    "id": "m503"
  },
  {
    "topic": "itertools",
    "q": "Что выведет list(islice(...))?",
    "options": [
      "[0, 1, 2]",
      "[0,1,2,3,4]",
      "ошибка",
      "[]"
    ],
    "answer": 0,
    "explain": "Первые 3.",
    "code": "from itertools import islice, count\nprint(list(islice(count(), 3)))",
    "group": "Collections и itertools",
    "id": "m504"
  },
  {
    "topic": "functools",
    "q": "Второй вызов heavy(2)?",
    "options": [
      "из кэша, без print work",
      "снова work",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "lru_cache.",
    "code": "from functools import lru_cache\n@lru_cache\ndef heavy(x):\n    print('work')\n    return x*x\nheavy(2)\nheavy(2)",
    "group": "Collections и itertools",
    "id": "m505"
  },
  {
    "topic": "context",
    "q": "Что напечатает?",
    "options": [
      "enter\nbody\nexit",
      "body\nenter\nexit",
      "enter\nexit\nbody",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Порядок CM.",
    "code": "class CM:\n    def __enter__(self):\n        print('enter')\n        return self\n    def __exit__(self, *a):\n        print('exit')\nwith CM():\n    print('body')",
    "group": "Исключения и контекст",
    "id": "m506"
  },
  {
    "topic": "typing",
    "q": "Runtime проверка list[int]?",
    "options": [
      "обычно нет",
      "да всегда TypeError",
      "только mypy runtime",
      "GIL check"
    ],
    "answer": 0,
    "explain": "Аннотации не enforced.",
    "code": "def f(xs: list[int]):\n    return xs\nprint(f(['a']))",
    "group": "Typing и dataclasses",
    "id": "m507"
  },
  {
    "topic": "dataclasses",
    "q": "Что будет?",
    "options": [
      "[1]",
      "[]",
      "ошибка shared",
      "None"
    ],
    "answer": 0,
    "explain": "default_factory.",
    "code": "from dataclasses import dataclass, field\n@dataclass\nclass A:\n    xs: list = field(default_factory=list)\na, b = A(), A()\na.xs.append(1)\nprint(b.xs)",
    "group": "Typing и dataclasses",
    "id": "m508"
  },
  {
    "topic": "sort",
    "q": "Порядок при равном key?",
    "options": [
      "стабильный (сохраняет порядок)",
      "random",
      "по id",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Timsort stable.",
    "code": "xs = [('b', 1), ('a', 1)]\nprint(sorted(xs, key=lambda t: t[1]))",
    "group": "Stdlib и производительность",
    "id": "m509"
  },
  {
    "topic": "exceptions",
    "q": "Что в e?",
    "options": [
      "сообщение 'x'",
      "тип only",
      "traceback only",
      "None"
    ],
    "answer": 0,
    "explain": "as e.",
    "code": "try:\n    raise ValueError('x')\nexcept ValueError as e:\n    print(e)",
    "group": "Исключения и контекст",
    "id": "m510"
  },
  {
    "topic": "args",
    "q": "Как вызвать f?",
    "options": [
      "f(a=1)",
      "f(1)",
      "оба",
      "никак"
    ],
    "answer": 0,
    "explain": "keyword-only после *.",
    "code": "def f(*, a):\n    return a",
    "group": "Typing и dataclasses",
    "id": "m511"
  },
  {
    "topic": "args",
    "q": "Как вызвать f?",
    "options": [
      "f(1)",
      "f(a=1)",
      "оба",
      "f()"
    ],
    "answer": 0,
    "explain": "positional-only до /.",
    "code": "def f(a, /):\n    return a",
    "group": "Typing и dataclasses",
    "id": "m512"
  },
  {
    "topic": "walrus",
    "q": "Что выведет?",
    "options": [
      "3 True",
      "True",
      "ошибка",
      "3"
    ],
    "answer": 0,
    "explain": "Присвоение в выражении.",
    "code": "print((n := 3), n == 3)",
    "group": "Typing и dataclasses",
    "id": "m513"
  },
  {
    "topic": "match",
    "q": "Что выведет?",
    "options": [
      "one",
      "other",
      "ошибка",
      "1"
    ],
    "answer": 0,
    "explain": "case 1.",
    "code": "x = 1\nmatch x:\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "group": "Typing и dataclasses",
    "id": "m514"
  },
  {
    "topic": "is",
    "q": "Обычно для литерала 256?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Кэш малых int.",
    "code": "print(256 is 256)",
    "group": "Stdlib и производительность",
    "id": "m515"
  },
  {
    "topic": "performance",
    "q": "Лучше для многих 'x in …'?",
    "options": [
      "set",
      "list",
      "tuple всегда",
      "str"
    ],
    "answer": 0,
    "explain": "Среднее O(1).",
    "code": "s = set(range(10000))\nprint(9999 in s)",
    "group": "Stdlib и производительность",
    "id": "m516"
  },
  {
    "topic": "json",
    "q": "Что будет с set?",
    "options": [
      "TypeError без default",
      "станет list",
      "OK",
      "None"
    ],
    "answer": 0,
    "explain": "set не JSON.",
    "code": "import json\njson.dumps({1, 2})",
    "group": "Stdlib и производительность",
    "id": "m517"
  },
  {
    "topic": "pathlib",
    "q": "Что получится?",
    "options": [
      "Path('a/b') или a\\b",
      "ошибка",
      "ab",
      "list"
    ],
    "answer": 0,
    "explain": "Оператор /.",
    "code": "from pathlib import Path\nprint(Path('a') / 'b')",
    "group": "Stdlib и производительность",
    "id": "m518"
  }
];
