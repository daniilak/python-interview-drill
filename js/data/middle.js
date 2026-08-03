window.QUESTIONS_MIDDLE = [
  {
    "topic": "декораторы",
    "q": "Что такое Декоратор @f над def g?",
    "options": [
      "g = f(g)",
      "f = g(f)",
      "g вызывается сразу",
      "синтаксический сахар import"
    ],
    "answer": 0,
    "explain": "Декоратор оборачивает функцию. Правильный ответ: «g = f(g)».",
    "group": "Декораторы и замыкания",
    "id": "m1"
  },
  {
    "topic": "декораторы",
    "q": "Зачем нужен functools.wraps?",
    "options": [
      "сохранить __name__/__doc__ обёрнутой",
      "ускорить вызов",
      "добавить тип",
      "заменить lambda"
    ],
    "answer": 0,
    "explain": "Копирует метаданные. Правильный ответ: «сохранить __name__/__doc__ обёрнутой».",
    "group": "Декораторы и замыкания",
    "id": "m2"
  },
  {
    "topic": "декораторы",
    "q": "Что такое Декоратор с аргументами?",
    "options": [
      "фабрика, возвращающая декоратор",
      "невозможен",
      "только class decorator",
      "через eval"
    ],
    "answer": 0,
    "explain": "Тройная вложенность функций. Правильный ответ: «фабрика, возвращающая декоратор».",
    "group": "Декораторы и замыкания",
    "id": "m3"
  },
  {
    "topic": "генераторы",
    "q": "Что вернёт yield в функции делает её?",
    "options": [
      "генератором",
      "корутиной всегда",
      "классом",
      "итератором списка"
    ],
    "answer": 0,
    "explain": "generator function. Правильный ответ: «генератором».",
    "group": "Генераторы и итераторы",
    "id": "m4"
  },
  {
    "topic": "генераторы",
    "q": "Что вернёт next(gen) после исчерпания?",
    "options": [
      "StopIteration",
      "None",
      "IndexError",
      "False"
    ],
    "answer": 0,
    "explain": "Протокол итератора. Правильный ответ: «StopIteration».",
    "group": "Генераторы и итераторы",
    "id": "m5"
  },
  {
    "topic": "генераторы",
    "q": "Что означает «Генератор хранит»?",
    "options": [
      "состояние между next",
      "весь результат в RAM",
      "только list",
      "копию args"
    ],
    "answer": 0,
    "explain": "Ленивость и мало памяти. Правильный ответ: «состояние между next».",
    "group": "Генераторы и итераторы",
    "id": "m6"
  },
  {
    "topic": "генераторы",
    "q": "Что такое (x for x in range(3))?",
    "options": [
      "generator expression",
      "tuple",
      "list",
      "set"
    ],
    "answer": 0,
    "explain": "Круглые скобки — genexp. Правильный ответ: «generator expression».",
    "group": "Генераторы и итераторы",
    "id": "m7"
  },
  {
    "topic": "итераторы",
    "q": "Что означает «Итератор должен иметь»?",
    "options": [
      "__iter__ и __next__",
      "только len",
      "append",
      "__getitem__ обязательно"
    ],
    "answer": 0,
    "explain": "Протокол Iterator. Правильный ответ: «__iter__ и __next__».",
    "group": "Генераторы и итераторы",
    "id": "m8"
  },
  {
    "topic": "итераторы",
    "q": "Что вызывает iter(x)?",
    "options": [
      "x.__iter__()",
      "x.__next__()",
      "list(x)",
      "x.next() в Py3"
    ],
    "answer": 0,
    "explain": "Получение итератора. Правильный ответ: «x.__iter__()».",
    "group": "Генераторы и итераторы",
    "id": "m9"
  },
  {
    "topic": "context",
    "q": "Что реализует Контекстный менеджер?",
    "options": [
      "__enter__/__exit__",
      "open/close только",
      "__init__/__del__",
      "with/as keywords внутри класса"
    ],
    "answer": 0,
    "explain": "Протокол with. Правильный ответ: «__enter__/__exit__».",
    "group": "Исключения и контекст",
    "id": "m10"
  },
  {
    "topic": "context",
    "q": "Во что превращает contextlib.contextmanager?",
    "options": [
      "генератор в CM",
      "класс в функцию",
      "async в sync",
      "list в with"
    ],
    "answer": 0,
    "explain": "yield разделяет enter/exit. Правильный ответ: «генератор в CM».",
    "group": "Исключения и контекст",
    "id": "m11"
  },
  {
    "topic": "comprehensions",
    "q": "Что вернёт Чем listcomp отличается от map+lambda часто?",
    "options": [
      "читаемее для простых преобразований",
      "всегда быстрее C",
      "не создаёт list",
      "запрещена в pep8"
    ],
    "answer": 0,
    "explain": "Стиль и ясность. Правильный ответ: «читаемее для простых преобразований».",
    "group": "Генераторы и итераторы",
    "id": "m12"
  },
  {
    "topic": "closures",
    "q": "Что такое Замыкание?",
    "options": [
      "функция с enclosing переменными",
      "декоратор",
      "класс",
      "модуль"
    ],
    "answer": 0,
    "explain": "Captures nonlocal state. Правильный ответ: «функция с enclosing переменными».",
    "group": "Декораторы и замыкания",
    "id": "m13"
  },
  {
    "topic": "closures",
    "q": "Зачем нужен nonlocal x?",
    "options": [
      "присваивать enclosing переменной",
      "читать global",
      "создать threadlocal",
      "удалить x"
    ],
    "answer": 0,
    "explain": "Для записи в enclosing scope. Правильный ответ: «присваивать enclosing переменной».",
    "group": "Декораторы и замыкания",
    "id": "m14"
  },
  {
    "topic": "GIL",
    "q": "Что такое GIL в CPython?",
    "options": [
      "глобальная блокировка интерпретатора",
      "сборщик мусора",
      "тип данных",
      "модуль threading"
    ],
    "answer": 0,
    "explain": "Один поток bytecode одновременно. Правильный ответ: «глобальная блокировка интерпретатора». GIL (Global Interpreter Lock) ограничивает параллельное исполнение байткода в CPython.",
    "group": "Потоки, процессы, GIL",
    "id": "m15"
  },
  {
    "topic": "GIL",
    "q": "Что означает «GIL мешает»?",
    "options": [
      "CPU-bound многопоточности",
      "I/O полностью",
      "multiprocessing",
      "asyncio I/O"
    ],
    "answer": 0,
    "explain": "Для CPU — multiprocessing/C-ext. Правильный ответ: «CPU-bound многопоточности». GIL (Global Interpreter Lock) ограничивает параллельное исполнение байткода в CPython.",
    "group": "Потоки, процессы, GIL",
    "id": "m16"
  },
  {
    "topic": "threading",
    "q": "Что означает «threading хорош для»?",
    "options": [
      "I/O-bound задач",
      "чистого CPU всегда",
      "замены asyncio",
      "GPU"
    ],
    "answer": 0,
    "explain": "Пока ждёт I/O, GIL отпускается. Правильный ответ: «I/O-bound задач».",
    "group": "Потоки, процессы, GIL",
    "id": "m17"
  },
  {
    "topic": "multiprocessing",
    "q": "Что означает «multiprocessing обходит GIL через»?",
    "options": [
      "отдельные процессы",
      "больше потоков",
      "снятие GIL флагом",
      "JIT"
    ],
    "answer": 0,
    "explain": "Отдельные интерпретаторы. Правильный ответ: «отдельные процессы».",
    "group": "Потоки, процессы, GIL",
    "id": "m18"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт async def объявляет?",
    "options": [
      "корутину",
      "поток",
      "процесс",
      "генератор синхронный"
    ],
    "answer": 0,
    "explain": "Coroutine function. Правильный ответ: «корутину». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "m19"
  },
  {
    "topic": "asyncio",
    "q": "Что означает «await можно внутри»?",
    "options": [
      "async def",
      "любой функции",
      "класса без async",
      "lambda"
    ],
    "answer": 0,
    "explain": "Только в корутинах. Правильный ответ: «async def». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "m20"
  },
  {
    "topic": "asyncio",
    "q": "Что означает «asyncio.gather запускает»?",
    "options": [
      "корутины конкурентно",
      "строго по очереди всегда",
      "потоки OS",
      "процессы"
    ],
    "answer": 0,
    "explain": "Конкурентное ожидание. Правильный ответ: «корутины конкурентно». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "m21"
  },
  {
    "topic": "typing",
    "q": "Что такое list[int] в 3.9+?",
    "options": [
      "параметризованный тип",
      "runtime list только int enforced",
      "синтаксис ошибки до 3.12",
      "tuple"
    ],
    "answer": 0,
    "explain": "Аннотация; runtime обычно не проверяет. Правильный ответ: «параметризованный тип». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m22"
  },
  {
    "topic": "typing",
    "q": "Что вернёт Optional[X] означает?",
    "options": [
      "X | None",
      "X обязателен",
      "any",
      "Union пустой"
    ],
    "answer": 0,
    "explain": "Синоним X | None. Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m23"
  },
  {
    "topic": "typing",
    "q": "Что означает «Protocol нужен для»?",
    "options": [
      "структурной типизации (duck typing)",
      "наследования классов",
      "GIL",
      "async"
    ],
    "answer": 0,
    "explain": "typing.Protocol / PEP 544. Правильный ответ: «структурной типизации (duck typing)». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m24"
  },
  {
    "topic": "dataclasses",
    "q": "Что вернёт @dataclass генерирует?",
    "options": [
      "__init__, __repr__ и др.",
      "только __slots__",
      "SQL схему",
      "JSON автоматом"
    ],
    "answer": 0,
    "explain": "Шаблон для data-holder. Правильный ответ: «__init__, __repr__ и др.».",
    "group": "Typing и dataclasses",
    "id": "m25"
  },
  {
    "topic": "dataclasses",
    "q": "Зачем нужен field(default_factory=list)?",
    "options": [
      "избежать shared mutable default",
      "ускорить",
      "сделать frozen",
      "валидацию"
    ],
    "answer": 0,
    "explain": "Каждый экземпляр — свой list. Правильный ответ: «избежать shared mutable default».",
    "group": "Typing и dataclasses",
    "id": "m26"
  },
  {
    "topic": "slots",
    "q": "Что означает «__slots__ ограничивает»?",
    "options": [
      "набор атрибутов, экономит память",
      "число методов",
      "наследование",
      "GC"
    ],
    "answer": 0,
    "explain": "Без __dict__ по умолчанию. Правильный ответ: «набор атрибутов, экономит память».",
    "group": "ООП продвинутый",
    "id": "m27"
  },
  {
    "topic": "MRO",
    "q": "Что такое MRO?",
    "options": [
      "порядок поиска методов",
      "модуль",
      "тип ошибки",
      "менеджер памяти"
    ],
    "answer": 0,
    "explain": "Method Resolution Order (C3). Правильный ответ: «порядок поиска методов».",
    "group": "ООП продвинутый",
    "id": "m28"
  },
  {
    "topic": "MRO",
    "q": "Что показывает Class.__mro__?",
    "options": [
      "цепочку базовых классов",
      "только родителей 1 уровня",
      "атрибуты",
      "модули"
    ],
    "answer": 0,
    "explain": "Линеаризация наследования. Правильный ответ: «цепочку базовых классов».",
    "group": "ООП продвинутый",
    "id": "m29"
  },
  {
    "topic": "property",
    "q": "Во что превращает @property?",
    "options": [
      "атрибут-геттер",
      "статический метод",
      "классметод",
      "дескриптор записи только"
    ],
    "answer": 0,
    "explain": "Управляемый атрибут. Правильный ответ: «атрибут-геттер».",
    "group": "Контекст и магические методы",
    "id": "m30"
  },
  {
    "topic": "classmethod",
    "q": "Что вернёт @classmethod первый аргумент?",
    "options": [
      "cls (класс)",
      "self",
      "args",
      "нет аргументов"
    ],
    "answer": 0,
    "explain": "Метод класса. Правильный ответ: «cls (класс)».",
    "group": "Контекст и магические методы",
    "id": "m31"
  },
  {
    "topic": "staticmethod",
    "q": "Что вернёт @staticmethod?",
    "options": [
      "не принимает self/cls автоматически",
      "это глобальная функция модуля",
      "запрещён",
      "только в metaclasses"
    ],
    "answer": 0,
    "explain": "Обычная функция в пространстве класса. Правильный ответ: «не принимает self/cls автоматически».",
    "group": "Контекст и магические методы",
    "id": "m32"
  },
  {
    "topic": "магические",
    "q": "В чём разница: __str__ vs __repr__?",
    "options": [
      "str для пользователя, repr для отладки",
      "нет разницы",
      "str только для print чисел",
      "repr запрещён"
    ],
    "answer": 0,
    "explain": "PEP: repr ideally unambiguous. Правильный ответ: «str для пользователя, repr для отладки».",
    "group": "Контекст и магические методы",
    "id": "m33"
  },
  {
    "topic": "магические",
    "q": "Что определяет __eq__?",
    "options": [
      "==",
      "is",
      "hash только",
      "order <"
    ],
    "answer": 0,
    "explain": "Равенство значений. Правильный ответ: «==».",
    "group": "Контекст и магические методы",
    "id": "m34"
  },
  {
    "topic": "магические",
    "q": "Что означает «Если __eq__ определён, __hash__»?",
    "options": [
      "часто ставят None для mutable",
      "обязателен всегда",
      "удаляется интерпретатором насильно",
      "наследуется от object всегда ок"
    ],
    "answer": 0,
    "explain": "Mutable с eq не должны быть hashable. Правильный ответ: «часто ставят None для mutable».",
    "group": "Контекст и магические методы",
    "id": "m35"
  },
  {
    "topic": "копирование",
    "q": "Что такое copy.copy?",
    "options": [
      "shallow copy",
      "deep copy",
      "ссылка",
      "pickle"
    ],
    "answer": 0,
    "explain": "Поверхностная копия. Правильный ответ: «shallow copy».",
    "group": "Stdlib и производительность",
    "id": "m36"
  },
  {
    "topic": "копирование",
    "q": "Что означает «copy.deepcopy нужен когда»?",
    "options": [
      "есть вложенные изменяемые",
      "всегда вместо =",
      "для int",
      "для None"
    ],
    "answer": 0,
    "explain": "Рекурсивное копирование. Правильный ответ: «есть вложенные изменяемые».",
    "group": "Stdlib и производительность",
    "id": "m37"
  },
  {
    "topic": "pickle",
    "q": "Для чего используется pickle?",
    "options": [
      "сериализации объектов Python",
      "JSON веба",
      "SQL",
      "XML"
    ],
    "answer": 0,
    "explain": "Бинарная сериализация; осторожно с security. Правильный ответ: «сериализации объектов Python».",
    "group": "Stdlib и производительность",
    "id": "m38"
  },
  {
    "topic": "json",
    "q": "Что означает «json не сериализует напрямую»?",
    "options": [
      "set, сложные объекты",
      "dict",
      "list",
      "str"
    ],
    "answer": 0,
    "explain": "Нужен default hook / конвертация. Правильный ответ: «set, сложные объекты».",
    "group": "Stdlib и производительность",
    "id": "m39"
  },
  {
    "topic": "регулярки",
    "q": "Какой стандартный модуль Python отвечает за regex?",
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
    "q": "Что означает «re.compile полезен когда»?",
    "options": [
      "паттерн переиспользуется",
      "один раз",
      "вместо str.find нельзя",
      "для bytes только"
    ],
    "answer": 0,
    "explain": "Компиляция один раз. Правильный ответ: «паттерн переиспользуется».",
    "group": "Stdlib и производительность",
    "id": "m41"
  },
  {
    "topic": "collections",
    "q": "Что вернёт defaultdict(int) при отсутствии ключа?",
    "options": [
      "создаёт 0",
      "KeyError",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "default_factory вызывается. Правильный ответ: «создаёт 0».",
    "group": "Collections и itertools",
    "id": "m42"
  },
  {
    "topic": "collections",
    "q": "Что вернёт Counter('aab')['a']?",
    "options": [
      "2",
      "1",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Подсчёт элементов. Правильный ответ: «2».",
    "group": "Collections и itertools",
    "id": "m43"
  },
  {
    "topic": "collections",
    "q": "Что такое namedtuple?",
    "options": [
      "легковесный immutable с именами полей",
      "dict",
      "dataclass",
      "list"
    ],
    "answer": 0,
    "explain": "tuple + атрибуты. Правильный ответ: «легковесный immutable с именами полей».",
    "group": "Collections и itertools",
    "id": "m44"
  },
  {
    "topic": "collections",
    "q": "Что означает «deque хорош для»?",
    "options": [
      "быстрых append/pop с обоих концов",
      "случайного доступа O(1) лучше list",
      "ключей dict",
      "матриц"
    ],
    "answer": 0,
    "explain": "Двусторонняя очередь. Правильный ответ: «быстрых append/pop с обоих концов».",
    "group": "Collections и itertools",
    "id": "m45"
  },
  {
    "topic": "itertools",
    "q": "Что означает «itertools.chain склеивает»?",
    "options": [
      "итерируемые лениво",
      "только list",
      "dict",
      "строки обязательно"
    ],
    "answer": 0,
    "explain": "Последовательная итерация. Правильный ответ: «итерируемые лениво».",
    "group": "Collections и itertools",
    "id": "m46"
  },
  {
    "topic": "itertools",
    "q": "Что такое islice(it, 10)?",
    "options": [
      "первые 10 элементов лениво",
      "сортировка",
      "shuffle",
      "deep copy"
    ],
    "answer": 0,
    "explain": "Срез итератора. Правильный ответ: «первые 10 элементов лениво».",
    "group": "Collections и itertools",
    "id": "m47"
  },
  {
    "topic": "functools",
    "q": "Что такое lru_cache?",
    "options": [
      "мемоизация с лимитом",
      "LRU список",
      "async lock",
      "GC hint"
    ],
    "answer": 0,
    "explain": "Кэш результатов функции. Правильный ответ: «мемоизация с лимитом».",
    "group": "Collections и itertools",
    "id": "m48"
  },
  {
    "topic": "functools",
    "q": "Что вернёт partial(f, 1) делает?",
    "options": [
      "новую функцию с зафиксированным аргументом",
      "вызов f",
      "копию кода f",
      "декоратор класса"
    ],
    "answer": 0,
    "explain": "Частичное применение. Правильный ответ: «новую функцию с зафиксированным аргументом».",
    "group": "Collections и itertools",
    "id": "m49"
  },
  {
    "topic": "исключения",
    "q": "Что вернёт raise X from Y связывает?",
    "options": [
      "__cause__",
      "только message",
      "traceback удаляет",
      "suppress"
    ],
    "answer": 0,
    "explain": "Exception chaining. Правильный ответ: «__cause__».",
    "group": "Исключения и контекст",
    "id": "m50"
  },
  {
    "topic": "исключения",
    "q": "Что вернёт contextlib.suppress(Error)?",
    "options": [
      "игнорирует указанные исключения",
      "логирует",
      "превращает в warning",
      "fatal"
    ],
    "answer": 0,
    "explain": "Молчаливый пропуск. Правильный ответ: «игнорирует указанные исключения».",
    "group": "Исключения и контекст",
    "id": "m51"
  },
  {
    "topic": "EAFP",
    "q": "Что означает «EAFP означает»?",
    "options": [
      "Easier to Ask Forgiveness than Permission",
      "Always Find Path",
      "Error After Function",
      "Python anti-pattern"
    ],
    "answer": 0,
    "explain": "try/except вместо долгих проверок. Правильный ответ: «Easier to Ask Forgiveness than Permission».",
    "group": "Тесты и качество",
    "id": "m52"
  },
  {
    "topic": "LBYL",
    "q": "Что такое LBYL?",
    "options": [
      "Look Before You Leap",
      "Lazy Binding",
      "List By Yield",
      "Linux Build"
    ],
    "answer": 0,
    "explain": "Проверки до действия. Правильный ответ: «Look Before You Leap».",
    "group": "Тесты и качество",
    "id": "m53"
  },
  {
    "topic": "args",
    "q": "Что такое def f(*, a): — a?",
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
    "q": "Что такое def f(a, /): — a?",
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
    "q": "Что вернёт circular import — проблема когда?",
    "options": [
      "модули импортируют друг друга на top-level",
      "есть venv",
      "много функций",
      "typing"
    ],
    "answer": 0,
    "explain": "Лечится локальным import / рефакторингом. Правильный ответ: «модули импортируют друг друга на top-level».",
    "group": "Stdlib и производительность",
    "id": "m56"
  },
  {
    "topic": "пакеты",
    "q": "Что такое __init__.py historically в контексте Python?",
    "options": [
      "делает каталог пакетом",
      "обязателен всегда в 3.3+",
      "запускает pip",
      "кэш"
    ],
    "answer": 0,
    "explain": "Namespace packages могут без него. Правильный ответ: «делает каталог пакетом».",
    "group": "Stdlib и производительность",
    "id": "m57"
  },
  {
    "topic": "тесты",
    "q": "Что означает «pytest находит тесты по»?",
    "options": [
      "имени test_* / *_test",
      "любому .py",
      "main",
      "doctest only"
    ],
    "answer": 0,
    "explain": "Конвенции discovery. Правильный ответ: «имени test_* / *_test».",
    "group": "Тесты и качество",
    "id": "m58"
  },
  {
    "topic": "тесты",
    "q": "Что такое fixture в pytest?",
    "options": [
      "подготовка данных/ресурсов",
      "assert",
      "мок только",
      "CI job"
    ],
    "answer": 0,
    "explain": "@pytest.fixture. Правильный ответ: «подготовка данных/ресурсов».",
    "group": "Тесты и качество",
    "id": "m59"
  },
  {
    "topic": "mock",
    "q": "Что означает «unittest.mock.patch подменяет»?",
    "options": [
      "объект в пространстве имён",
      "исходник на диске",
      "GIL",
      "байткод навсегда"
    ],
    "answer": 0,
    "explain": "Временная подмена. Правильный ответ: «объект в пространстве имён».",
    "group": "Тесты и качество",
    "id": "m60"
  },
  {
    "topic": "логирование",
    "q": "Что вернёт Предпочтительнее print для libs?",
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
    "q": "Что даёт Path('a') / 'b'?",
    "options": [
      "Path('a/b')",
      "ошибку",
      "str 'a/b'",
      "list"
    ],
    "answer": 0,
    "explain": "Оператор / для Path. Правильный ответ: «Path('a/b')».",
    "group": "Stdlib и производительность",
    "id": "m62"
  },
  {
    "topic": "enum",
    "q": "Что означает «enum.Enum нужен для»?",
    "options": [
      "именованных констант",
      "float",
      "async",
      "GIL flags"
    ],
    "answer": 0,
    "explain": "Перечисления. Правильный ответ: «именованных констант».",
    "group": "Typing и dataclasses",
    "id": "m63"
  },
  {
    "topic": "match",
    "q": "Что вернёт match/case появился в?",
    "options": [
      "3.10",
      "3.8",
      "2.7",
      "3.12"
    ],
    "answer": 0,
    "explain": "Structural pattern matching. Правильный ответ: «3.10».",
    "group": "Typing и dataclasses",
    "id": "m64"
  },
  {
    "topic": "walrus",
    "q": "Что вернёт = len(a)) > 0 использует?",
    "options": [
      "присваивание в выражении",
      "аннотацию",
      "decorator",
      "comprehension only"
    ],
    "answer": 0,
    "explain": "PEP 572. Правильный ответ: «присваивание в выражении».",
    "group": "Typing и dataclasses",
    "id": "m65"
  },
  {
    "topic": "f-string",
    "q": "Что вернёт f'{x=!r}' покажет?",
    "options": [
      "имя и repr значения",
      "только x",
      "ошибку до 3.12",
      "hex"
    ],
    "answer": 0,
    "explain": "Debug self-documenting. Правильный ответ: «имя и repr значения».",
    "group": "Stdlib и производительность",
    "id": "m66"
  },
  {
    "topic": "bytes",
    "q": "Что вернёт encode/decode связывает?",
    "options": [
      "str ↔ bytes",
      "list ↔ tuple",
      "int ↔ float",
      "json ↔ dict"
    ],
    "answer": 0,
    "explain": "Текстовые кодировки. Правильный ответ: «str ↔ bytes».",
    "group": "Stdlib и производительность",
    "id": "m67"
  },
  {
    "topic": "ООП",
    "q": "Для чего используется super()?",
    "options": [
      "вызова метода родителя по MRO",
      "создания потока",
      "импорта",
      "GC"
    ],
    "answer": 0,
    "explain": "Кооперативное наследование. Правильный ответ: «вызова метода родителя по MRO».",
    "group": "ООП продвинутый",
    "id": "m68"
  },
  {
    "topic": "ООП",
    "q": "Что означает «Миксин обычно»?",
    "options": [
      "класс с доп. поведением без самостоятельной роли",
      "абстрактный модуль",
      "декоратор",
      "metaclasses only"
    ],
    "answer": 0,
    "explain": "Multiple inheritance utility. Правильный ответ: «класс с доп. поведением без самостоятельной роли».",
    "group": "ООП продвинутый",
    "id": "m69"
  },
  {
    "topic": "ABC",
    "q": "Что вернёт abc.ABC / @abstractmethod?",
    "options": [
      "запрещает инстанс без реализации",
      "ускоряет",
      "добавляет slots",
      "заменяет Protocol"
    ],
    "answer": 0,
    "explain": "Номинальные абстрактные классы. Правильный ответ: «запрещает инстанс без реализации».",
    "group": "ООП продвинутый",
    "id": "m70"
  },
  {
    "topic": "дескрипторы",
    "q": "Что означает «Дескриптор — объект с»?",
    "options": [
      "__get__/__set__/__delete__",
      "только __call__",
      "yield",
      "async"
    ],
    "answer": 0,
    "explain": "Протокол дескрипторов; property на нём. Правильный ответ: «__get__/__set__/__delete__». Дескрипторы управляют доступом к атрибутам через __get__ / __set__ / __delete__.",
    "group": "Контекст и магические методы",
    "id": "m71"
  },
  {
    "topic": "weakref",
    "q": "Зачем нужен weakref?",
    "options": [
      "ссылаться без удержания GC",
      "ускорить dict",
      "шифровать",
      "сериализовать"
    ],
    "answer": 0,
    "explain": "Слабые ссылки. Правильный ответ: «ссылаться без удержания GC».",
    "group": "Stdlib и производительность",
    "id": "m72"
  },
  {
    "topic": "GC",
    "q": "Что такое Сборщик циклических ссылок?",
    "options": [
      "gc модуль / cyclic GC",
      "только refcount",
      "GIL",
      "swap"
    ],
    "answer": 0,
    "explain": "refcount + periodic cycle detection. Правильный ответ: «gc модуль / cyclic GC».",
    "group": "Stdlib и производительность",
    "id": "m73"
  },
  {
    "topic": "refcount",
    "q": "Что вернёт sys.getrefcount(obj)?",
    "options": [
      "считает ссылки (+временные)",
      "размер байт",
      "hash",
      "id"
    ],
    "answer": 0,
    "explain": "Включая временные при вызове. Правильный ответ: «считает ссылки (+временные)».",
    "group": "Stdlib и производительность",
    "id": "m74"
  },
  {
    "topic": "performance",
    "q": "Что означает «Для многих membership checks лучше»?",
    "options": [
      "set",
      "list",
      "tuple всегда",
      "queue"
    ],
    "answer": 0,
    "explain": "Среднее O(1) у set. Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "m75"
  },
  {
    "topic": "performance",
    "q": "Что вернёт Конкатенация много str в цикле?",
    "options": [
      "лучше join",
      "+= всегда ок",
      "f-string в цикле идеал",
      "bytearray обязателен"
    ],
    "answer": 0,
    "explain": "''.join(parts) эффективнее. Правильный ответ: «лучше join». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "m76"
  },
  {
    "topic": "sort",
    "q": "Что вернёт x[1])?",
    "options": [
      "сортирует по второму элементу",
      "удаляет",
      "группирует",
      "хеширует"
    ],
    "answer": 0,
    "explain": "key function. Правильный ответ: «сортирует по второму элементу».",
    "group": "Stdlib и производительность",
    "id": "m77"
  },
  {
    "topic": "sort",
    "q": "Что означает «Сортировка в Python»?",
    "options": [
      "стабильная (Timsort)",
      "unstable",
      "quicksort гарантирован",
      "только числа"
    ],
    "answer": 0,
    "explain": "Стабильный Timsort. Правильный ответ: «стабильная (Timsort)».",
    "group": "Stdlib и производительность",
    "id": "m78"
  },
  {
    "topic": "исключения",
    "q": "Что означает «except Exception as e: — e доступен»?",
    "options": [
      "в блоке except (и очищается после в 3)",
      "глобально",
      "в finally всегда",
      "никогда"
    ],
    "answer": 0,
    "explain": "Имя исключения. Правильный ответ: «в блоке except (и очищается после в 3)».",
    "group": "Исключения и контекст",
    "id": "m79"
  },
  {
    "topic": "with",
    "q": "Что вернёт with A() as a, B() as b?",
    "options": [
      "да, поддерживается",
      "нет",
      "только async with",
      "только 3.12+"
    ],
    "answer": 0,
    "explain": "Несколько CM в одном with. Правильный ответ: «да, поддерживается».",
    "group": "Исключения и контекст",
    "id": "m80"
  },
  {
    "topic": "generators",
    "q": "Что вернёт yield from subgen?",
    "options": [
      "делегирует итерацию подгенератору",
      "копирует list",
      "создаёт thread",
      "закрывает файл"
    ],
    "answer": 0,
    "explain": "PEP 380. Правильный ответ: «делегирует итерацию подгенератору».",
    "group": "Генераторы и итераторы",
    "id": "m81"
  },
  {
    "topic": "coroutines",
    "q": "Что вернёт gen.send(x) передаёт?",
    "options": [
      "значение в yield",
      "в return",
      "в global",
      "в GIL"
    ],
    "answer": 0,
    "explain": "Двусторонние генераторы. Правильный ответ: «значение в yield».",
    "group": "Генераторы и итераторы",
    "id": "m82"
  },
  {
    "topic": "typing",
    "q": "Что означает «TypedDict описывает»?",
    "options": [
      "словари с известными ключами/типами",
      "list",
      "dataclass",
      "Enum"
    ],
    "answer": 0,
    "explain": "Типизация dict-структур. Правильный ответ: «словари с известными ключами/типами». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m83"
  },
  {
    "topic": "typing",
    "q": "Что вернёт Literal['a','b'] означает?",
    "options": [
      "только эти значения",
      "любой str",
      "Enum автоматом",
      "bytes"
    ],
    "answer": 0,
    "explain": "Буквальные типы. Правильный ответ: «только эти значения». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m84"
  },
  {
    "topic": "dataclasses",
    "q": "Что вернёт frozen=True делает?",
    "options": [
      "приблизительно immutable экземпляр",
      "slots",
      "slots+dict",
      "JSON"
    ],
    "answer": 0,
    "explain": "Запрет присваивания полей. Правильный ответ: «приблизительно immutable экземпляр».",
    "group": "Typing и dataclasses",
    "id": "m85"
  },
  {
    "topic": "attrs/pydantic",
    "q": "Что вернёт Pydantic в отличие от dataclass часто?",
    "options": [
      "валидирует данные на runtime",
      "только генерирует __init__",
      "заменяет GIL",
      "компилирует C"
    ],
    "answer": 0,
    "explain": "Валидация и парсинг. Правильный ответ: «валидирует данные на runtime».",
    "group": "Typing и dataclasses",
    "id": "m86"
  },
  {
    "topic": "HTTP",
    "q": "Какая Популярная sync HTTP библиотека?",
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
    "q": "Что означает «httpx хорош тем что»?",
    "options": [
      "поддерживает sync и async",
      "только Python 2",
      "заменяет Django",
      "встроен в stdlib"
    ],
    "answer": 0,
    "explain": "Современный клиент. Правильный ответ: «поддерживает sync и async».",
    "group": "Веб и API",
    "id": "m88"
  },
  {
    "topic": "WSGI",
    "q": "Что такое WSGI?",
    "options": [
      "интерфейс sync веб-приложений",
      "async сервер",
      "ORM",
      "шаблонизатор"
    ],
    "answer": 0,
    "explain": "PEP 3333. Правильный ответ: «интерфейс sync веб-приложений».",
    "group": "Веб и API",
    "id": "m89"
  },
  {
    "topic": "ASGI",
    "q": "Что такое ASGI?",
    "options": [
      "async интерфейс Python веб-приложений",
      "старый CGI",
      "замена TCP",
      "тип list"
    ],
    "answer": 0,
    "explain": "Django/FastAPI/Starlette. Правильный ответ: «async интерфейс Python веб-приложений».",
    "group": "Веб и API",
    "id": "m90"
  },
  {
    "topic": "FastAPI",
    "q": "Что означает «FastAPI строится вокруг»?",
    "options": [
      "type hints + ASGI",
      "только Flask sync",
      "GIL removal",
      "GUI"
    ],
    "answer": 0,
    "explain": "Аннотации → OpenAPI/валидация. Правильный ответ: «type hints + ASGI».",
    "group": "Веб и API",
    "id": "m91"
  },
  {
    "topic": "SQL",
    "q": "Что такое SQLAlchemy?",
    "options": [
      "ORM/toolkit для БД",
      "NoSQL база",
      "кэш Redis",
      "брокер"
    ],
    "answer": 0,
    "explain": "Популярный ORM. Правильный ответ: «ORM/toolkit для БД».",
    "group": "Веб и API",
    "id": "m92"
  },
  {
    "topic": "DI",
    "q": "Чем помогает Dependency Injection?",
    "options": [
      "тестируемости и слабой связанности",
      "ускорить GIL",
      "уменьшить RAM магией",
      "заменить типы"
    ],
    "answer": 0,
    "explain": "Явные зависимости. Правильный ответ: «тестируемости и слабой связанности».",
    "group": "Веб и API",
    "id": "m93"
  },
  {
    "topic": "замыкания",
    "q": "Что выведет код?",
    "options": [
      "2",
      "0",
      "1",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Без значения по умолчанию все замыкания видят финальный i. Правильный ответ: «2».",
    "code": "funcs = []\nfor i in range(3):\n    funcs.append(lambda: i)\n# funcs[0]()",
    "group": "Декораторы и замыкания",
    "id": "m94"
  },
  {
    "topic": "замыкания",
    "q": "Что вернёт Как зафиксировать i в lambda в цикле?",
    "options": [
      "lambda i=i: i",
      "lambda: i.copy()",
      "global i",
      "nonlocal i в цикле"
    ],
    "answer": 0,
    "explain": "Default arg связывается в момент определения. Правильный ответ: «lambda i=i: i».",
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
    "explain": "Фильтр в comprehension. Правильный ответ: «[0, 2, 4]».",
    "group": "Генераторы и итераторы",
    "id": "m96"
  },
  {
    "topic": "dict",
    "q": "Что вернёт dict.fromkeys(['a','b'], []) — опасность?",
    "options": [
      "один и тот же list на все ключи",
      "KeyError",
      "нет опасности",
      "глубокая копия"
    ],
    "answer": 0,
    "explain": "value не копируется. Правильный ответ: «один и тот же list на все ключи».",
    "group": "Collections и itertools",
    "id": "m97"
  },
  {
    "topic": "is",
    "q": "Что вернёт Малые int кэшируются; обычно (256 is 256)?",
    "options": [
      "True",
      "False",
      "ошибка",
      "зависит от OS только"
    ],
    "answer": 0,
    "explain": "Interning малых целых в CPython. Правильный ответ: «True».",
    "group": "Stdlib и производительность",
    "id": "m98"
  },
  {
    "topic": "is",
    "q": "Что вернёт Обычно (257 is 257) для литералов в одном выражении?",
    "options": [
      "часто True из-за peephole, но не контракт",
      "всегда False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "На identity int полагаться нельзя — используйте ==. Правильный ответ: «часто True из-за peephole, но не контракт».",
    "group": "Stdlib и производительность",
    "id": "m99"
  },
  {
    "topic": "строки",
    "q": "Зачем нужно Интернирование строк: sys.intern?",
    "options": [
      "принудительно дедуплицирует str",
      "шифрует",
      "делает bytes",
      "GC disable"
    ],
    "answer": 0,
    "explain": "Для частых ключей. Правильный ответ: «принудительно дедуплицирует str».",
    "group": "Stdlib и производительность",
    "id": "m100"
  },
  {
    "topic": "memoryview",
    "q": "Что означает «memoryview нужен для»?",
    "options": [
      "работы со срезами bytes без копирования",
      "GUI",
      "JSON",
      "async sleep"
    ],
    "answer": 0,
    "explain": "Буферный протокол. Правильный ответ: «работы со срезами bytes без копирования».",
    "group": "Stdlib и производительность",
    "id": "m101"
  },
  {
    "topic": "struct",
    "q": "Что означает «struct.pack упаковывает»?",
    "options": [
      "значения в bytes по формату",
      "JSON",
      "pickle",
      "XML"
    ],
    "answer": 0,
    "explain": "Бинарные форматы. Правильный ответ: «значения в bytes по формату».",
    "group": "Stdlib и производительность",
    "id": "m102"
  },
  {
    "topic": "array",
    "q": "В чём разница: array.array vs list?",
    "options": [
      "типизированный компактный массив",
      "то же самое",
      "всегда быстрее dict",
      "immutable"
    ],
    "answer": 0,
    "explain": "Однотипные числовые значения. Правильный ответ: «типизированный компактный массив».",
    "group": "Collections и itertools",
    "id": "m103"
  },
  {
    "topic": "декораторы",
    "q": "Что такое Порядок @a @b def f:?",
    "options": [
      "f = a(b(f))",
      "f = b(a(f))",
      "параллельно",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Ближний декоратор применяется первым. Правильный ответ: «f = a(b(f))».",
    "group": "Декораторы и замыкания",
    "id": "m104"
  },
  {
    "topic": "генераторы",
    "q": "Что вернёт list(x for x in range(3))?",
    "options": [
      "[0,1,2]",
      "generator object print",
      "tuple",
      "ошибка"
    ],
    "answer": 0,
    "explain": "list поглощает genexp. Правильный ответ: «[0,1,2]».",
    "group": "Генераторы и итераторы",
    "id": "m105"
  },
  {
    "topic": "генераторы",
    "q": "Что вернёт return value в генераторе (3.3+)?",
    "options": [
      "кладёт value в StopIteration.value",
      "синтаксическая ошибка",
      "как обычный return из caller",
      "игнорируется"
    ],
    "answer": 0,
    "explain": "PEP 380: return x в generator → StopIteration.value = x. Правильный ответ: «кладёт value в StopIteration.value».",
    "group": "Генераторы и итераторы",
    "id": "m106"
  },
  {
    "topic": "async",
    "q": "Что вернёт async for нужен для?",
    "options": [
      "async-итераторов",
      "обычных list",
      "threading",
      "multiprocessing"
    ],
    "answer": 0,
    "explain": "__aiter__/__anext__. Правильный ответ: «async-итераторов».",
    "group": "Asyncio",
    "id": "m107"
  },
  {
    "topic": "async",
    "q": "Что вернёт async with нужен для?",
    "options": [
      "async context managers",
      "обычного open только",
      "threads",
      "files sync"
    ],
    "answer": 0,
    "explain": "__aenter__/__aexit__. Правильный ответ: «async context managers».",
    "group": "Asyncio",
    "id": "m108"
  },
  {
    "topic": "typing",
    "q": "Что вернёт Union[int, str] эквивалент 3.10+?",
    "options": [
      "int | str",
      "int & str",
      "Optional",
      "Any"
    ],
    "answer": 0,
    "explain": "PEP 604. Правильный ответ: «int | str». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m109"
  },
  {
    "topic": "typing",
    "q": "Что вернёт Final[x] означает?",
    "options": [
      "не должен переназначаться",
      "константа CPU",
      "frozen dataclass",
      "slots"
    ],
    "answer": 0,
    "explain": "Для чекеров. Правильный ответ: «не должен переназначаться». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m110"
  },
  {
    "topic": "typing",
    "q": "Что вернёт Annotated[int, ...] несёт?",
    "options": [
      "метаданные для инструментов",
      "runtime check обязательно",
      "GIL hint",
      "скорость"
    ],
    "answer": 0,
    "explain": "PEP 593. Правильный ответ: «метаданные для инструментов». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m111"
  },
  {
    "topic": "dataclasses",
    "q": "Что вернёт asdict(obj) делает?",
    "options": [
      "рекурсивно в dict",
      "json string",
      "pickle",
      "slots"
    ],
    "answer": 0,
    "explain": "dataclasses.asdict. Правильный ответ: «рекурсивно в dict».",
    "group": "Typing и dataclasses",
    "id": "m112"
  },
  {
    "topic": "collections",
    "q": "Что означает «ChainMap полезен для»?",
    "options": [
      "слоя переопределений mapping",
      "SQL join",
      "async gather",
      "heap"
    ],
    "answer": 0,
    "explain": "Просмотр нескольких dict. Правильный ответ: «слоя переопределений mapping».",
    "group": "Collections и itertools",
    "id": "m113"
  },
  {
    "topic": "heapq",
    "q": "Что реализует heapq?",
    "options": [
      "бинарную кучу на list",
      "AVL",
      "B-tree",
      "deque"
    ],
    "answer": 0,
    "explain": "Приоритетная очередь. Правильный ответ: «бинарную кучу на list».",
    "group": "Collections и itertools",
    "id": "m114"
  },
  {
    "topic": "bisect",
    "q": "Что означает «bisect модуль для»?",
    "options": [
      "бинарного поиска/вставки в sorted list",
      "быстрой сортировки",
      "hash",
      "GIL"
    ],
    "answer": 0,
    "explain": "Поддержание порядка. Правильный ответ: «бинарного поиска/вставки в sorted list».",
    "group": "Collections и itertools",
    "id": "m115"
  },
  {
    "topic": "tempfile",
    "q": "Что означает «NamedTemporaryFile удаляется»?",
    "options": [
      "часто при закрытии (зависит от delete)",
      "никогда",
      "только reboot",
      "вручную обязателен всегда"
    ],
    "answer": 0,
    "explain": "Параметр delete. Правильный ответ: «часто при закрытии (зависит от delete)».",
    "group": "Stdlib и производительность",
    "id": "m116"
  },
  {
    "topic": "pathlib",
    "q": "Что вернёт Path.read_text()?",
    "options": [
      "читает файл как str",
      "bytes only",
      "json",
      "lines iterator always"
    ],
    "answer": 0,
    "explain": "Удобный helper. Правильный ответ: «читает файл как str».",
    "group": "Stdlib и производительность",
    "id": "m117"
  },
  {
    "topic": "subprocess",
    "q": "Что вернёт capture_output=True в run?",
    "options": [
      "собирает stdout/stderr",
      "shell=True",
      "async",
      "ignore"
    ],
    "answer": 0,
    "explain": "subprocess.run. Правильный ответ: «собирает stdout/stderr».",
    "group": "Stdlib и производительность",
    "id": "m118"
  },
  {
    "topic": "dataclasses",
    "q": "Что вернёт kw_only=True (3.10)?",
    "options": [
      "поля только keyword",
      "frozen",
      "slots",
      "order"
    ],
    "answer": 0,
    "explain": "Keyword-only fields. Правильный ответ: «поля только keyword».",
    "group": "Typing и dataclasses",
    "id": "m119"
  },
  {
    "topic": "match",
    "q": "Что вернёт case _ : означает?",
    "options": [
      "wildcard / default",
      "ошибку",
      "None only",
      "ellipsis object"
    ],
    "answer": 0,
    "explain": "Шаблон по умолчанию. Правильный ответ: «wildcard / default».",
    "group": "Typing и dataclasses",
    "id": "m120"
  },
  {
    "topic": "match",
    "q": "Что означает паттерн match case [x, *rest] в Python 3.10+?",
    "options": [
      "матчит последовательность",
      "только list тип строго runtime class",
      "dict",
      "set"
    ],
    "answer": 0,
    "explain": "Sequence pattern. Правильный ответ: «матчит последовательность».",
    "group": "Typing и dataclasses",
    "id": "m121"
  },
  {
    "topic": "exceptions",
    "q": "Что вернёт Exception.__notes__ (3.11)?",
    "options": [
      "доп. заметки к исключению",
      "stack only",
      "warnings",
      "logs"
    ],
    "answer": 0,
    "explain": "add_note. Правильный ответ: «доп. заметки к исключению».",
    "group": "Исключения и контекст",
    "id": "m122"
  },
  {
    "topic": "warnings",
    "q": "Что означает «warnings.filterwarnings управляет»?",
    "options": [
      "показом предупреждений",
      "exceptions",
      "logs level only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Модуль warnings. Правильный ответ: «показом предупреждений».",
    "group": "Тесты и качество",
    "id": "m123"
  },
  {
    "topic": "import",
    "q": "Что такое importlib.reload в контексте Python?",
    "options": [
      "перезагружает модуль",
      "удаляет пакет",
      "чистит pip",
      "restart OS"
    ],
    "answer": 0,
    "explain": "Осторожно с состоянием. Правильный ответ: «перезагружает модуль».",
    "group": "Stdlib и производительность",
    "id": "m124"
  },
  {
    "topic": "abc",
    "q": "Что вернёт @abstractmethod на property?",
    "options": [
      "возможно",
      "нельзя",
      "только methods",
      "только classmethod"
    ],
    "answer": 0,
    "explain": "Абстрактные property. Правильный ответ: «возможно».",
    "group": "ООП продвинутый",
    "id": "m125"
  },
  {
    "topic": "protocols",
    "q": "Что такое runtime_checkable Protocol в контексте Python?",
    "options": [
      "isinstance может проверить методы",
      "всегда без runtime",
      "заменяет ABC полностью без оговорок",
      "GIL"
    ],
    "answer": 0,
    "explain": "Ограниченная runtime проверка. Правильный ответ: «isinstance может проверить методы».",
    "group": "Typing и dataclasses",
    "id": "m126"
  },
  {
    "topic": "functools",
    "q": "Что такое singledispatch?",
    "options": [
      "мультиметод по типу 1-го аргумента",
      "async gather",
      "cache",
      "partial only"
    ],
    "answer": 0,
    "explain": "functools.singledispatch. Правильный ответ: «мультиметод по типу 1-го аргумента».",
    "group": "Collections и itertools",
    "id": "m127"
  },
  {
    "topic": "functools",
    "q": "Что такое cached_property в контексте Python?",
    "options": [
      "кэш на экземпляре",
      "lru глобальный",
      "classmethod",
      "slots"
    ],
    "answer": 0,
    "explain": "Пересчёт один раз. Правильный ответ: «кэш на экземпляре».",
    "group": "Collections и itertools",
    "id": "m128"
  },
  {
    "topic": "itertools",
    "q": "Что означает «groupby требует»?",
    "options": [
      "часто предварительной сортировки по ключу",
      "dict",
      "set",
      "async"
    ],
    "answer": 0,
    "explain": "Группирует подряд идущие. Правильный ответ: «часто предварительной сортировки по ключу».",
    "group": "Collections и itertools",
    "id": "m129"
  },
  {
    "topic": "itertools",
    "q": "Что вернёт list(product('ab', repeat=2))?",
    "options": [
      "[('a', 'a'), ('a', 'b'), ('b', 'a'), ('b', 'b')]",
      "['ab']",
      "['a', 'b']",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Декартово произведение. Правильный ответ: «[('a', 'a'), ('a', 'b'), ('b', 'a'), ('b', 'b')]».",
    "group": "Collections и itertools",
    "id": "m130"
  },
  {
    "topic": "itertools",
    "q": "Что вернёт cycle([1,2])?",
    "options": [
      "бесконечно повторяет",
      "один проход",
      "shuffle",
      "sort"
    ],
    "answer": 0,
    "explain": "Бесконечный итератор. Правильный ответ: «бесконечно повторяет».",
    "group": "Collections и itertools",
    "id": "m131"
  },
  {
    "topic": "операторы",
    "q": "Что вернёт = b := 1 синтаксис?",
    "options": [
      "запрещён (SyntaxError)",
      "допустим как a = b = 1",
      "только в if",
      "только 3.12"
    ],
    "answer": 0,
    "explain": "Цепочка walrus так нельзя. Нужно a = b = 1 или (a := (b := 1)). Правильный ответ: «запрещён (SyntaxError)».",
    "group": "Typing и dataclasses",
    "id": "m132"
  },
  {
    "topic": "comprehensions",
    "q": "Выбери верный вариант: Есть ли у listcomp своей scope?",
    "options": [
      "да (с 3), локальные переменные не утекают",
      "нет как в 2.7",
      "только для async",
      "только dictcomp"
    ],
    "answer": 0,
    "explain": "Leak фиксанули. Правильный ответ: «да (с 3), локальные переменные не утекают».",
    "group": "Генераторы и итераторы",
    "id": "m133"
  },
  {
    "topic": "gil",
    "q": "Что вернёт numpy отпускает GIL в тяжёлых C-циклах часто?",
    "options": [
      "да, многие операции",
      "никогда",
      "только print",
      "только на Windows"
    ],
    "answer": 0,
    "explain": "C-extensions pattern. Правильный ответ: «да, многие операции».",
    "group": "Потоки, процессы, GIL",
    "id": "m134"
  },
  {
    "topic": "memory",
    "q": "Что вернёт sys.getsizeof([1,2]) учитывает?",
    "options": [
      "overhead контейнера, не глубоко элементы всегда",
      "всю глубокую структуру",
      "только int",
      "disk"
    ],
    "answer": 0,
    "explain": "Не deep size. Правильный ответ: «overhead контейнера, не глубоко элементы всегда».",
    "group": "Stdlib и производительность",
    "id": "m135"
  },
  {
    "topic": "json",
    "q": "В чём разница: json.loads vs load?",
    "options": [
      "строка vs file object",
      "нет разницы",
      "bytes vs path",
      "pickle"
    ],
    "answer": 0,
    "explain": "s = string. Правильный ответ: «строка vs file object».",
    "group": "Stdlib и производительность",
    "id": "m136"
  },
  {
    "topic": "csv",
    "q": "Что означает «csv.DictReader читает»?",
    "options": [
      "строки как dict по заголовку",
      "JSON",
      "pickle",
      "YAML"
    ],
    "answer": 0,
    "explain": "Модуль csv. Правильный ответ: «строки как dict по заголовку».",
    "group": "Stdlib и производительность",
    "id": "m137"
  },
  {
    "topic": "sqlite",
    "q": "Что такое sqlite3 в stdlib в контексте Python?",
    "options": [
      "встроенная БД в файле/памяти",
      "клиент Postgres",
      "Redis",
      "Mongo"
    ],
    "answer": 0,
    "explain": "Удобно для локального. Правильный ответ: «встроенная БД в файле/памяти».",
    "group": "Stdlib и производительность",
    "id": "m138"
  },
  {
    "topic": "hashlib",
    "q": "Что означает «hashlib.sha256 нужен для»?",
    "options": [
      "криптографического хеша",
      "hash() dict",
      "id()",
      "random"
    ],
    "answer": 0,
    "explain": "Не путать с hash(). Правильный ответ: «криптографического хеша».",
    "group": "Stdlib и производительность",
    "id": "m139"
  },
  {
    "topic": "secrets",
    "q": "Что означает «secrets модуль лучше random для»?",
    "options": [
      "токенов/криптографии",
      "shuffle колоды в игре ok всегда",
      "math sim",
      "sort"
    ],
    "answer": 0,
    "explain": "Криптостойкость. Правильный ответ: «токенов/криптографии».",
    "group": "Stdlib и производительность",
    "id": "m140"
  },
  {
    "topic": "dataclasses",
    "q": "Что вернёт slots=True (3.10+) у dataclass?",
    "options": [
      "генерирует __slots__",
      "frozen",
      "kw_only",
      "JSON"
    ],
    "answer": 0,
    "explain": "Экономия памяти. Правильный ответ: «генерирует __slots__».",
    "group": "Typing и dataclasses",
    "id": "m141"
  },
  {
    "topic": "typing",
    "q": "Что вернёт TypedDict total=False?",
    "options": [
      "ключи опциональны",
      "запрещены",
      "только str values",
      "frozen"
    ],
    "answer": 0,
    "explain": "Частичные словари. Правильный ответ: «ключи опциональны». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m142"
  },
  {
    "topic": "http",
    "q": "Что означает «idempotent методы HTTP обычно»?",
    "options": [
      "GET PUT DELETE",
      "POST только",
      "PATCH always",
      "CONNECT"
    ],
    "answer": 0,
    "explain": "Семантика HTTP. Правильный ответ: «GET PUT DELETE».",
    "group": "Веб и API",
    "id": "m143"
  },
  {
    "topic": "декораторы",
    "q": "В чём разница: @decorator без скобок vs @decorator()?",
    "options": [
      "объект vs вызов фабрики",
      "нет разницы",
      "скобки запрещены",
      "только для class"
    ],
    "answer": 0,
    "explain": "() нужны, если декоратор-фабрика. Правильный ответ: «объект vs вызов фабрики».",
    "group": "Декораторы и замыкания",
    "id": "m144"
  },
  {
    "topic": "замыкания",
    "q": "Что означает «cell в замыкании хранит»?",
    "options": [
      "cell_contents enclosing переменной",
      "bytecode",
      "GIL lock",
      "только int"
    ],
    "answer": 0,
    "explain": "__closure__. Правильный ответ: «cell_contents enclosing переменной».",
    "group": "Декораторы и замыкания",
    "id": "m145"
  },
  {
    "topic": "генераторы",
    "q": "Что вызывает gen.close()?",
    "options": [
      "GeneratorExit",
      "StopIteration только",
      "KeyboardInterrupt",
      "ничего"
    ],
    "answer": 0,
    "explain": "Завершение генератора. Правильный ответ: «GeneratorExit».",
    "group": "Генераторы и итераторы",
    "id": "m146"
  },
  {
    "topic": "генераторы",
    "q": "Выбери верный вариант: Генератор — одноразовый?",
    "options": [
      "да, после исчерпания пуст",
      "нет, рестарт сам",
      "как list",
      "кэшируется"
    ],
    "answer": 0,
    "explain": "Нужен новый вызов функции. Правильный ответ: «да, после исчерпания пуст».",
    "group": "Генераторы и итераторы",
    "id": "m147"
  },
  {
    "topic": "итераторы",
    "q": "Что вернёт У list итератор отдельный объект?",
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
    "q": "Что означает «Если __exit__ вернул True»?",
    "options": [
      "подавляет исключение",
      "ре-рейзит всегда",
      "закрывает GIL",
      "игнор return"
    ],
    "answer": 0,
    "explain": "Swallow exception. Правильный ответ: «подавляет исключение».",
    "group": "Исключения и контекст",
    "id": "m149"
  },
  {
    "topic": "GIL",
    "q": "Что означает «Время переключения GIL roughly связано с»?",
    "options": [
      "check interval / eval breaker",
      "только OS quantum",
      "GC only",
      "pip"
    ],
    "answer": 0,
    "explain": "sys.setswitchinterval. Правильный ответ: «check interval / eval breaker». GIL (Global Interpreter Lock) ограничивает параллельное исполнение байткода в CPython.",
    "group": "Потоки, процессы, GIL",
    "id": "m150"
  },
  {
    "topic": "threading",
    "q": "Что означает «Lock.acquire в том же потоке повторно без RLock»?",
    "options": [
      "дедлок",
      "ok",
      "ошибка импорта",
      "auto-release"
    ],
    "answer": 0,
    "explain": "Обычный Lock не реентерабелен. Правильный ответ: «дедлок».",
    "group": "Потоки, процессы, GIL",
    "id": "m151"
  },
  {
    "topic": "threading",
    "q": "Что означает «RLock отличается тем что»?",
    "options": [
      "реентерабельный",
      "быстрее всегда",
      "для процессов",
      "async only"
    ],
    "answer": 0,
    "explain": "Можно acquire несколько раз одним потоком. Правильный ответ: «реентерабельный».",
    "group": "Потоки, процессы, GIL",
    "id": "m152"
  },
  {
    "topic": "multiprocessing",
    "q": "Что означает «Queue между процессами»?",
    "options": [
      "сериализует объекты",
      "делит память напрямую always",
      "только str",
      "GIL share"
    ],
    "answer": 0,
    "explain": "Через pickle/IPC. Правильный ответ: «сериализует объекты».",
    "group": "Потоки, процессы, GIL",
    "id": "m153"
  },
  {
    "topic": "asyncio",
    "q": "Что означает «create_task планирует»?",
    "options": [
      "выполнение корутины на loop",
      "OS thread",
      "process",
      "sync call"
    ],
    "answer": 0,
    "explain": "Task на event loop. Правильный ответ: «выполнение корутины на loop». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "m154"
  },
  {
    "topic": "asyncio",
    "q": "Что означает «run_in_executor нужен для»?",
    "options": [
      "блокирующего кода в thread/process pool",
      "быстрее await sleep",
      "замены gather",
      "GUI only"
    ],
    "answer": 0,
    "explain": "Не блокировать loop. Правильный ответ: «блокирующего кода в thread/process pool». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "m155"
  },
  {
    "topic": "typing",
    "q": "Что означает «NoReturn означает»?",
    "options": [
      "функция не возвращает нормально",
      "return None",
      "Any",
      "Never only 2.7"
    ],
    "answer": 0,
    "explain": "Всегда бросает/exit. Правильный ответ: «функция не возвращает нормально». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m156"
  },
  {
    "topic": "typing",
    "q": "В чём разница: TypedDict vs dataclass?",
    "options": [
      "TypedDict для dict-форм, dataclass — объекты",
      "одно и то же",
      "TypedDict runtime class always",
      "dataclass только JSON"
    ],
    "answer": 0,
    "explain": "Разные модели данных. Правильный ответ: «TypedDict для dict-форм, dataclass — объекты». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m157"
  },
  {
    "topic": "typing",
    "q": "Что вернёт Unpack/TypeVarTuple связаны с?",
    "options": [
      "вариативными generics",
      "GIL",
      "async",
      "pathlib"
    ],
    "answer": 0,
    "explain": "PEP 646. Правильный ответ: «вариативными generics». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m158"
  },
  {
    "topic": "dataclasses",
    "q": "Что вернёт order=True добавляет?",
    "options": [
      "сравнения < <= и т.д.",
      "hash всегда",
      "slots",
      "JSON"
    ],
    "answer": 0,
    "explain": "По полям по порядку. Правильный ответ: «сравнения < <= и т.д.».",
    "group": "Typing и dataclasses",
    "id": "m159"
  },
  {
    "topic": "dataclasses",
    "q": "Что такое InitVar?",
    "options": [
      "поле только для __init__, не хранится",
      "classmethod",
      "property",
      "slots field"
    ],
    "answer": 0,
    "explain": "Init-only. Правильный ответ: «поле только для __init__, не хранится».",
    "group": "Typing и dataclasses",
    "id": "m160"
  },
  {
    "topic": "collections",
    "q": "Зачем нужен UserDict?",
    "options": [
      "удобное наследование под dict-like",
      "быстрее dict",
      "замена OrderedDict",
      "async map"
    ],
    "answer": 0,
    "explain": "Обёртка для кастомизации. Правильный ответ: «удобное наследование под dict-like».",
    "group": "Collections и itertools",
    "id": "m161"
  },
  {
    "topic": "collections",
    "q": "Выбери верный вариант: OrderedDict всё ещё нужен после 3.7?",
    "options": [
      "для move_to_end / equality по порядку и явного API",
      "нет никогда",
      "только PyPy",
      "для set"
    ],
    "answer": 0,
    "explain": "Специфичные методы. Правильный ответ: «для move_to_end / equality по порядку и явного API».",
    "group": "Collections и itertools",
    "id": "m162"
  },
  {
    "topic": "itertools",
    "q": "Что вернёт tee(it, n)?",
    "options": [
      "разветвляет итератор (с буфером)",
      "копирует list",
      "shuffle",
      "sort"
    ],
    "answer": 0,
    "explain": "Память растёт, если ветки расходятся. Правильный ответ: «разветвляет итератор (с буфером)».",
    "group": "Collections и itertools",
    "id": "m163"
  },
  {
    "topic": "itertools",
    "q": "Что вернёт list(accumulate([1,2,3]))?",
    "options": [
      "[1, 3, 6]",
      "[6]",
      "[1, 2, 3]",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Накопительная сумма. Правильный ответ: «[1, 3, 6]».",
    "group": "Collections и itertools",
    "id": "m164"
  },
  {
    "topic": "functools",
    "q": "Что вернёт a+b, [1,2,3])?",
    "options": [
      "6",
      "[1,2,3]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Свёртка. Правильный ответ: «6».",
    "group": "Collections и itertools",
    "id": "m165"
  },
  {
    "topic": "functools",
    "q": "Чем помогает total_ordering?",
    "options": [
      "достроить сравнения из немногих методов",
      "сортировать быстрее C",
      "GIL",
      "hash"
    ],
    "answer": 0,
    "explain": "Класс-декоратор. Правильный ответ: «достроить сравнения из немногих методов».",
    "group": "Collections и itertools",
    "id": "m166"
  },
  {
    "topic": "исключения",
    "q": "Что вернёт except* (3.11) ловит?",
    "options": [
      "подисключения ExceptionGroup",
      "только async",
      "BaseExceptionGroup нельзя",
      "синтаксис 3.8"
    ],
    "answer": 0,
    "explain": "PEP 654. Правильный ответ: «подисключения ExceptionGroup».",
    "group": "Исключения и контекст",
    "id": "m167"
  },
  {
    "topic": "тесты",
    "q": "Что такое monkeypatch в pytest в контексте Python?",
    "options": [
      "временно патчит атрибуты/env",
      "меняет CPython",
      "удаляет тесты",
      "CI matrix"
    ],
    "answer": 0,
    "explain": "Изоляция сайд-эффектов. Правильный ответ: «временно патчит атрибуты/env».",
    "group": "Тесты и качество",
    "id": "m168"
  },
  {
    "topic": "тесты",
    "q": "Что означает «parametrize нужен для»?",
    "options": [
      "набора вход→ожидание",
      "фикстур только",
      "моков",
      "coverage"
    ],
    "answer": 0,
    "explain": "@pytest.mark.parametrize. Правильный ответ: «набора вход→ожидание».",
    "group": "Тесты и качество",
    "id": "m169"
  },
  {
    "topic": "pathlib",
    "q": "Что вернёт Path.resolve()?",
    "options": [
      "абсолютный путь + symlink resolve",
      "только str",
      "удаляет файл",
      "chmod"
    ],
    "answer": 0,
    "explain": "Канонический путь. Правильный ответ: «абсолютный путь + symlink resolve».",
    "group": "Stdlib и производительность",
    "id": "m170"
  },
  {
    "topic": "регулярки",
    "q": "Что позволяет re.VERBOSE?",
    "options": [
      "комментарии и пробелы в паттерне",
      "быстрее match",
      "только bytes",
      "JIT"
    ],
    "answer": 0,
    "explain": "Читаемые regex. Правильный ответ: «комментарии и пробелы в паттерне».",
    "group": "Stdlib и производительность",
    "id": "m171"
  },
  {
    "topic": "json",
    "q": "Что вернёт default= в dumps?",
    "options": [
      "сериализатор неизвестных типов",
      "indent",
      "encoding",
      "sort_keys"
    ],
    "answer": 0,
    "explain": "Хук для set/datetime и т.п. Правильный ответ: «сериализатор неизвестных типов».",
    "group": "Stdlib и производительность",
    "id": "m172"
  },
  {
    "topic": "performance",
    "q": "В чём разница: Генератор vs list для большого потока?",
    "options": [
      "генератор экономит память",
      "list всегда быстрее и лучше",
      "без разницы",
      "GIL снимает"
    ],
    "answer": 0,
    "explain": "Ленивость. Правильный ответ: «генератор экономит память». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "m173"
  },
  {
    "topic": "sort",
    "q": "Что вернёт key= должен быть?",
    "options": [
      "вызываемым, вызывается раз на элемент (декоратор)",
      "cmp как в Py2 обязателен",
      "async",
      "hash"
    ],
    "answer": 0,
    "explain": "Schwartzian transform внутри. Правильный ответ: «вызываемым, вызывается раз на элемент (декоратор)».",
    "group": "Stdlib и производительность",
    "id": "m174"
  },
  {
    "topic": "магические",
    "q": "Что означает «__len__ должен возвращать»?",
    "options": [
      "int >= 0",
      "любой float",
      "str",
      "None"
    ],
    "answer": 0,
    "explain": "Иначе TypeError/ValueError. Правильный ответ: «int >= 0».",
    "group": "Контекст и магические методы",
    "id": "m175"
  },
  {
    "topic": "магические",
    "q": "Что означает «__bool__ если нет, берётся»?",
    "options": [
      "__len__ != 0",
      "всегда True",
      "hash",
      "id"
    ],
    "answer": 0,
    "explain": "Правдивость объектов. Правильный ответ: «__len__ != 0».",
    "group": "Контекст и магические методы",
    "id": "m176"
  },
  {
    "topic": "property",
    "q": "Что вернёт obj.x = 1 при property без setter?",
    "options": [
      "AttributeError",
      "создаст в __dict__ всегда",
      "ok",
      "TypeError only"
    ],
    "answer": 0,
    "explain": "Read-only property. Правильный ответ: «AttributeError».",
    "group": "Контекст и магические методы",
    "id": "m177"
  },
  {
    "topic": "MRO",
    "q": "Что означает «diamond inheritance решает»?",
    "options": [
      "C3 linearization",
      "случайный порядок",
      "только первый parent",
      "запрет syntax"
    ],
    "answer": 0,
    "explain": "Предсказуемый MRO. Правильный ответ: «C3 linearization».",
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
    "explain": "Абстрактность из-за abstract methods. Правильный ответ: «да».",
    "group": "ООП продвинутый",
    "id": "m179"
  },
  {
    "topic": "weakref",
    "q": "Что означает «WeakValueDictionary хранит»?",
    "options": [
      "слабые ссылки на значения",
      "сильные на ключи и значения",
      "только int",
      "файлы"
    ],
    "answer": 0,
    "explain": "GC может удалить value. Правильный ответ: «слабые ссылки на значения».",
    "group": "Stdlib и производительность",
    "id": "m180"
  },
  {
    "topic": "copy",
    "q": "Что означает «Для объекта с циклическими ссылками deepcopy»?",
    "options": [
      "справляется через memo",
      "всегда падает",
      "игнорирует циклы молча теряя",
      "запрещён"
    ],
    "answer": 0,
    "explain": "memo dict. Правильный ответ: «справляется через memo».",
    "group": "Stdlib и производительность",
    "id": "m181"
  },
  {
    "topic": "HTTP",
    "q": "Что такое requests.get timeout в контексте Python?",
    "options": [
      "ограничивает ожидание",
      "обязателен всегда синтаксисом",
      "только connect",
      "async only"
    ],
    "answer": 0,
    "explain": "Защита от зависаний. Правильный ответ: «ограничивает ожидание».",
    "group": "Веб и API",
    "id": "m182"
  },
  {
    "topic": "ASGI",
    "q": "Что такое Starlette/FastAPI?",
    "options": [
      "ASGI-фреймворки",
      "только WSGI",
      "GUI",
      "ORM"
    ],
    "answer": 0,
    "explain": "Асинхронный стек. Правильный ответ: «ASGI-фреймворки».",
    "group": "Веб и API",
    "id": "m183"
  },
  {
    "topic": "SQL",
    "q": "Что такое session.rollback в SQLAlchemy в контексте Python?",
    "options": [
      "отменяет транзакцию",
      "drop table",
      "vacuum",
      "commit"
    ],
    "answer": 0,
    "explain": "Откат. Правильный ответ: «отменяет транзакцию».",
    "group": "Веб и API",
    "id": "m184"
  },
  {
    "topic": "match",
    "q": "Что вернёт v} матчит?",
    "options": [
      "mapping с ключом x",
      "только dict subclass строго без Protocol",
      "list",
      "set"
    ],
    "answer": 0,
    "explain": "Mapping pattern. Правильный ответ: «mapping с ключом x».",
    "group": "Typing и dataclasses",
    "id": "m185"
  },
  {
    "topic": "args",
    "q": "Что вернёт def f(*args, **kwargs) порядок в сигнатуре?",
    "options": [
      "*args затем **kwargs",
      "**kwargs затем *args",
      "любой",
      "только kwargs"
    ],
    "answer": 0,
    "explain": "Синтаксическое правило. Правильный ответ: «*args затем **kwargs».",
    "group": "Typing и dataclasses",
    "id": "m186"
  },
  {
    "topic": "import",
    "q": "Что вернёт from __future__ import annotations делает?",
    "options": [
      "откладывает оценку аннотаций (строки)",
      "включает GIL free",
      "Py2 mode",
      "оптимизирует abs"
    ],
    "answer": 0,
    "explain": "PEP 563/649 эпоха. Правильный ответ: «откладывает оценку аннотаций (строки)».",
    "group": "Stdlib и производительность",
    "id": "m187"
  },
  {
    "topic": "enum",
    "q": "Что вернёт auto() в Enum?",
    "options": [
      "автозначения",
      "random",
      "hash",
      "None"
    ],
    "answer": 0,
    "explain": "enum.auto. Правильный ответ: «автозначения».",
    "group": "Typing и dataclasses",
    "id": "m188"
  },
  {
    "topic": "logging",
    "q": "Что означает «logger.exception внутри except»?",
    "options": [
      "лог + traceback",
      "только message",
      "raise снова",
      "silence"
    ],
    "answer": 0,
    "explain": "Удобный helper. Правильный ответ: «лог + traceback».",
    "group": "Тесты и качество",
    "id": "m189"
  },
  {
    "topic": "subprocess",
    "q": "Что вернёт check=True в run?",
    "options": [
      "бросит CalledProcessError при ненулевом коде",
      "игнор код",
      "shell",
      "timeout"
    ],
    "answer": 0,
    "explain": "Строгая проверка статуса. Правильный ответ: «бросит CalledProcessError при ненулевом коде».",
    "group": "Stdlib и производительность",
    "id": "m190"
  },
  {
    "topic": "декораторы",
    "q": "Что означает «Декоратор класса получает»?",
    "options": [
      "класс как аргумент",
      "только экземпляр",
      "модуль",
      "MRO list"
    ],
    "answer": 0,
    "explain": "@decorator над class. Правильный ответ: «класс как аргумент».",
    "group": "Декораторы и замыкания",
    "id": "m191"
  },
  {
    "topic": "декораторы",
    "q": "Что означает «stacked decorators применяются»?",
    "options": [
      "снизу вверх",
      "сверху вниз",
      "параллельно",
      "случайно"
    ],
    "answer": 0,
    "explain": "Ближний к def первый. Правильный ответ: «снизу вверх».",
    "group": "Декораторы и замыкания",
    "id": "m192"
  },
  {
    "topic": "замыкания",
    "q": "Что означает «__closure__ у функции»?",
    "options": [
      "кортеж cell или None",
      "dict locals",
      "список args",
      "GIL"
    ],
    "answer": 0,
    "explain": "Для вложенных с free vars. Правильный ответ: «кортеж cell или None».",
    "group": "Декораторы и замыкания",
    "id": "m193"
  },
  {
    "topic": "генераторы",
    "q": "Что вернёт yield выражение может принимать значение через?",
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
    "q": "Что вернёт throw(exc) в генератор?",
    "options": [
      "возбуждает exc в точке yield",
      "игнорирует",
      "только закрывает",
      "в caller сразу без gen"
    ],
    "answer": 0,
    "explain": "Протокол генератора. Правильный ответ: «возбуждает exc в точке yield».",
    "group": "Генераторы и итераторы",
    "id": "m195"
  },
  {
    "topic": "итераторы",
    "q": "Для чего используется StopIteration.value?",
    "options": [
      "для return из генератора",
      "для list index",
      "для dict",
      "для async only"
    ],
    "answer": 0,
    "explain": "PEP 380. Правильный ответ: «для return из генератора».",
    "group": "Генераторы и итераторы",
    "id": "m196"
  },
  {
    "topic": "итераторы",
    "q": "Что означает «collections.abc.Iterable требует»?",
    "options": [
      "__iter__",
      "__next__ обязательно",
      "len",
      "getitem"
    ],
    "answer": 0,
    "explain": "Итерируемое ≠ итератор. Правильный ответ: «__iter__».",
    "group": "Генераторы и итераторы",
    "id": "m197"
  },
  {
    "topic": "context",
    "q": "Что означает «ExitStack нужен для»?",
    "options": [
      "динамического набора контекстов",
      "одного with",
      "async only",
      "GIL"
    ],
    "answer": 0,
    "explain": "contextlib.ExitStack. Правильный ответ: «динамического набора контекстов».",
    "group": "Исключения и контекст",
    "id": "m198"
  },
  {
    "topic": "context",
    "q": "Что вызывает closing(obj)?",
    "options": [
      "obj.close() на выходе",
      "del obj",
      "obj.end()",
      "gc"
    ],
    "answer": 0,
    "explain": "Для объектов с close. Правильный ответ: «obj.close() на выходе».",
    "group": "Исключения и контекст",
    "id": "m199"
  },
  {
    "topic": "GIL",
    "q": "Что означает «sys.setswitchinterval меняет»?",
    "options": [
      "частоту попыток переключения потоков",
      "GC threshold only",
      "async tick",
      "import time"
    ],
    "answer": 0,
    "explain": "Бывший check interval. Правильный ответ: «частоту попыток переключения потоков». GIL (Global Interpreter Lock) ограничивает параллельное исполнение байткода в CPython.",
    "group": "Потоки, процессы, GIL",
    "id": "m200"
  },
  {
    "topic": "threading",
    "q": "Для чего используется Event?",
    "options": [
      "сигнализации между потоками",
      "CPU parallel magic",
      "process share objects",
      "async await"
    ],
    "answer": 0,
    "explain": "threading.Event. Правильный ответ: «сигнализации между потоками».",
    "group": "Потоки, процессы, GIL",
    "id": "m201"
  },
  {
    "topic": "threading",
    "q": "Что вернёт Condition = lock + wait/notify?",
    "options": [
      "да",
      "нет, только Event",
      "только asyncio",
      "только multiproc"
    ],
    "answer": 0,
    "explain": "Классический монитор. Правильный ответ: «да».",
    "group": "Потоки, процессы, GIL",
    "id": "m202"
  },
  {
    "topic": "threading",
    "q": "Что означает «Timer запускает»?",
    "options": [
      "функцию через delay в потоке",
      "async sleep",
      "cron OS",
      "GC"
    ],
    "answer": 0,
    "explain": "threading.Timer. Правильный ответ: «функцию через delay в потоке».",
    "group": "Потоки, процессы, GIL",
    "id": "m203"
  },
  {
    "topic": "multiprocessing",
    "q": "В чём разница: Pipe vs Queue?",
    "options": [
      "Pipe двусторонняя пара, Queue многоучастников",
      "одно и то же",
      "Pipe только async",
      "Queue без pickle"
    ],
    "answer": 0,
    "explain": "IPC примитивы. Правильный ответ: «Pipe двусторонняя пара, Queue многоучастников».",
    "group": "Потоки, процессы, GIL",
    "id": "m204"
  },
  {
    "topic": "multiprocessing",
    "q": "Что даёт Manager().dict()?",
    "options": [
      "прокси-словарь между процессами",
      "обычный dict shared memory transparently for any object graph без цены",
      "list",
      "GIL off"
    ],
    "answer": 0,
    "explain": "Синхронизируемый прокси. Правильный ответ: «прокси-словарь между процессами».",
    "group": "Потоки, процессы, GIL",
    "id": "m205"
  },
  {
    "topic": "asyncio",
    "q": "Что такое Future?",
    "options": [
      "ожидаемый результат асинхронной операции",
      "thread",
      "process",
      "list"
    ],
    "answer": 0,
    "explain": "Низкоуровневее Task. Правильный ответ: «ожидаемый результат асинхронной операции». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "m206"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт ensure_future / create_task?",
    "options": [
      "планируют корутину",
      "блокируют",
      "создают process",
      "компилируют C"
    ],
    "answer": 0,
    "explain": "На loop. Правильный ответ: «планируют корутину». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "m207"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт wait_for(aw, timeout) при таймауте?",
    "options": [
      "cancels и TimeoutError",
      "игнор",
      "убивает process",
      "возвращает None"
    ],
    "answer": 0,
    "explain": "asyncio.wait_for. Правильный ответ: «cancels и TimeoutError». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "m208"
  },
  {
    "topic": "asyncio",
    "q": "Что означает «as_completed итерирует»?",
    "options": [
      "по мере готовности",
      "в порядке запуска строго",
      "только errors",
      "sync"
    ],
    "answer": 0,
    "explain": "Удобный fan-in. Правильный ответ: «по мере готовности». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "m209"
  },
  {
    "topic": "asyncio",
    "q": "Что означает «Queue в asyncio безопасна для»?",
    "options": [
      "корутин одного loop",
      "произвольных OS threads без грязи",
      "процессов",
      "GIL bypass"
    ],
    "answer": 0,
    "explain": "Не путать с queue.Queue. Правильный ответ: «корутин одного loop». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "m210"
  },
  {
    "topic": "typing",
    "q": "Что означает «NewType создаёт»?",
    "options": [
      "отдельный тип для чекера (runtime тонкий)",
      "новый class always heavy",
      "Enum",
      "TypedDict"
    ],
    "answer": 0,
    "explain": "typing.NewType. Правильный ответ: «отдельный тип для чекера (runtime тонкий)». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m211"
  },
  {
    "topic": "typing",
    "q": "Что вернёт Callable[[int], str] описывает?",
    "options": [
      "функцию int→str",
      "list",
      "coroutine only",
      "type var"
    ],
    "answer": 0,
    "explain": "Сигнатура callable. Правильный ответ: «функцию int→str». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m212"
  },
  {
    "topic": "typing",
    "q": "Что вернёт Generic[T] нужен для?",
    "options": [
      "параметризуемых классов",
      "GIL",
      "async",
      "json"
    ],
    "answer": 0,
    "explain": "Generics. Правильный ответ: «параметризуемых классов». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m213"
  },
  {
    "topic": "typing",
    "q": "Что вернёт TypeAlias (3.10+/3.12 type)?",
    "options": [
      "явный алиас типа",
      "runtime cast",
      "decorator",
      "metaclass"
    ],
    "answer": 0,
    "explain": "Читаемые алиасы. Правильный ответ: «явный алиас типа». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m214"
  },
  {
    "topic": "typing",
    "q": "Что вернёт Required/NotRequired в TypedDict?",
    "options": [
      "тонкая настройка обязательности ключей",
      "валидация pydantic",
      "SQL",
      "GIL"
    ],
    "answer": 0,
    "explain": "PEP 655. Правильный ответ: «тонкая настройка обязательности ключей». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m215"
  },
  {
    "topic": "dataclasses",
    "q": "Что вернёт replace(obj, **changes)?",
    "options": [
      "новый объект с заменами",
      "мутирует obj",
      "json",
      "slots destroy"
    ],
    "answer": 0,
    "explain": "dataclasses.replace. Правильный ответ: «новый объект с заменами».",
    "group": "Typing и dataclasses",
    "id": "m216"
  },
  {
    "topic": "dataclasses",
    "q": "Что вернёт field(repr=False) скрывает?",
    "options": [
      "поле из __repr__",
      "из __init__",
      "из eq",
      "из hash always"
    ],
    "answer": 0,
    "explain": "Настройка field. Правильный ответ: «поле из __repr__».",
    "group": "Typing и dataclasses",
    "id": "m217"
  },
  {
    "topic": "dataclasses",
    "q": "Что вернёт compare=False исключает поле из?",
    "options": [
      "сравнений",
      "init",
      "repr always",
      "slots"
    ],
    "answer": 0,
    "explain": "order/eq. Правильный ответ: «сравнений».",
    "group": "Typing и dataclasses",
    "id": "m218"
  },
  {
    "topic": "collections",
    "q": "Что вернёт deque(maxlen=n) при переполнении?",
    "options": [
      "выбрасывает с противоположного конца",
      "ошибка",
      "растёт бесконечно",
      "блокирует"
    ],
    "answer": 0,
    "explain": "Кольцевой буфер. Правильный ответ: «выбрасывает с противоположного конца».",
    "group": "Collections и itertools",
    "id": "m219"
  },
  {
    "topic": "collections",
    "q": "Что вернёт Counter.most_common(2)?",
    "options": [
      "топ-2 частых",
      "сортирует keys",
      "unique",
      "shuffle"
    ],
    "answer": 0,
    "explain": "Удобная статистика. Правильный ответ: «топ-2 частых».",
    "group": "Collections и itertools",
    "id": "m220"
  },
  {
    "topic": "collections",
    "q": "Что вернёт defaultdict(list)['k'].append(1)?",
    "options": [
      "создаёт list автоматически",
      "KeyError",
      "None append error",
      "dict"
    ],
    "answer": 0,
    "explain": "factory. Правильный ответ: «создаёт list автоматически».",
    "group": "Collections и itertools",
    "id": "m221"
  },
  {
    "topic": "collections",
    "q": "Что означает «ChainMap пишет по умолчанию в»?",
    "options": [
      "первый mapping",
      "последний",
      "все",
      "новый"
    ],
    "answer": 0,
    "explain": "locals поверх. Правильный ответ: «первый mapping».",
    "group": "Collections и itertools",
    "id": "m222"
  },
  {
    "topic": "itertools",
    "q": "Что вернёт count(10, 2) начнёт?",
    "options": [
      "10,12,14…",
      "0,2,10",
      "10,11",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Бесконечный счётчик. Правильный ответ: «10,12,14…».",
    "group": "Collections и itertools",
    "id": "m223"
  },
  {
    "topic": "itertools",
    "q": "Что вернёт repeat(x, 3)?",
    "options": [
      "x x x",
      "бесконечно всегда",
      "ошибка",
      "shuffle x"
    ],
    "answer": 0,
    "explain": "Повтор. Правильный ответ: «x x x».",
    "group": "Collections и itertools",
    "id": "m224"
  },
  {
    "topic": "itertools",
    "q": "Что означает «zip_longest заполняет»?",
    "options": [
      "fillvalue для коротких",
      "ошибкой",
      "обрезает как zip",
      "None запрещён"
    ],
    "answer": 0,
    "explain": "itertools.zip_longest. Правильный ответ: «fillvalue для коротких».",
    "group": "Collections и itertools",
    "id": "m225"
  },
  {
    "topic": "itertools",
    "q": "Что вернёт list(permutations('ab', 2))?",
    "options": [
      "[('a', 'b'), ('b', 'a')]",
      "[('a', 'a'), ('a', 'b'), ('b', 'a'), ('b', 'b')]",
      "['ab']",
      "['ba']"
    ],
    "answer": 0,
    "explain": "Перестановки. Правильный ответ: «[('a', 'b'), ('b', 'a')]».",
    "group": "Collections и itertools",
    "id": "m226"
  },
  {
    "topic": "itertools",
    "q": "Что вернёт list(combinations('abc', 2))?",
    "options": [
      "[('a', 'b'), ('a', 'c'), ('b', 'c')]",
      "все перестановки",
      "[('a', 'a'), …]",
      "['abc']"
    ],
    "answer": 0,
    "explain": "Сочетания без повтора. Правильный ответ: «[('a', 'b'), ('a', 'c'), ('b', 'c')]».",
    "group": "Collections и itertools",
    "id": "m227"
  },
  {
    "topic": "functools",
    "q": "Что вернёт lru_cache(typed=True)?",
    "options": [
      "различает типы аргументов",
      "отключает кэш",
      "async only",
      "disk cache"
    ],
    "answer": 0,
    "explain": "1 vs 1.0 раздельно. Правильный ответ: «различает типы аргументов».",
    "group": "Collections и itertools",
    "id": "m228"
  },
  {
    "topic": "functools",
    "q": "Что вернёт cache (3.9) = lru_cache без?",
    "options": [
      "maxsize limit (безлимит)",
      "typed",
      "ключ",
      "hash"
    ],
    "answer": 0,
    "explain": "functools.cache. Правильный ответ: «maxsize limit (безлимит)».",
    "group": "Collections и itertools",
    "id": "m229"
  },
  {
    "topic": "functools",
    "q": "Что означает «wraps копирует»?",
    "options": [
      "__module__, __name__, __doc__, …",
      "bytecode",
      "defaults only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Метаданные. Правильный ответ: «__module__, __name__, __doc__, …».",
    "group": "Collections и itertools",
    "id": "m230"
  },
  {
    "topic": "functools",
    "q": "Что такое singledispatchmethod в контексте Python?",
    "options": [
      "диспетчеризация методов по типу",
      "только функции модуля",
      "async",
      "classmethod ban"
    ],
    "answer": 0,
    "explain": "PEP 3124-ish API. Правильный ответ: «диспетчеризация методов по типу».",
    "group": "Collections и itertools",
    "id": "m231"
  },
  {
    "topic": "regex",
    "q": "В чём разница: re.FULLMATCH vs match?",
    "options": [
      "вся строка vs с начала",
      "одно и то же",
      "только bytes",
      "ignorecase"
    ],
    "answer": 0,
    "explain": "Полное совпадение. Правильный ответ: «вся строка vs с начала».",
    "group": "Stdlib и производительность",
    "id": "m232"
  },
  {
    "topic": "регулярки",
    "q": "Что вернёт группы (?P<name>…)?",
    "options": [
      "именованные группы",
      "lookahead",
      "flags",
      "atomic"
    ],
    "answer": 0,
    "explain": "Читаемый extract. Правильный ответ: «именованные группы».",
    "group": "Stdlib и производительность",
    "id": "m233"
  },
  {
    "topic": "регулярки",
    "q": "Что такое (?=...)?",
    "options": [
      "positive lookahead",
      "lookbehind",
      "capture",
      "non-greedy"
    ],
    "answer": 0,
    "explain": "Просмотр вперёд. Правильный ответ: «positive lookahead».",
    "group": "Stdlib и производительность",
    "id": "m234"
  },
  {
    "topic": "pathlib",
    "q": "Что вернёт Path.glob('**/*.py')?",
    "options": [
      "рекурсивный поиск",
      "только cwd non-recursive always",
      "regex",
      "delete"
    ],
    "answer": 0,
    "explain": "Паттерны путей. Правильный ответ: «рекурсивный поиск».",
    "group": "Stdlib и производительность",
    "id": "m235"
  },
  {
    "topic": "pathlib",
    "q": "Что такое Path.write_text в контексте Python?",
    "options": [
      "записывает str в файл",
      "bytes only",
      "append always",
      "json"
    ],
    "answer": 0,
    "explain": "Удобный helper. Правильный ответ: «записывает str в файл».",
    "group": "Stdlib и производительность",
    "id": "m236"
  },
  {
    "topic": "pathlib",
    "q": "В чём разница: PurePath vs Path?",
    "options": [
      "Pure без I/O",
      "одно и то же",
      "Pure только Windows",
      "Path без строк"
    ],
    "answer": 0,
    "explain": "Логические пути. Правильный ответ: «Pure без I/O».",
    "group": "Stdlib и производительность",
    "id": "m237"
  },
  {
    "topic": "import",
    "q": "Что такое pkgutil.iter_modules в контексте Python?",
    "options": [
      "перечисляет модули пакета",
      "ставит pip",
      "reload",
      "compile"
    ],
    "answer": 0,
    "explain": "Плагины/дискавери. Правильный ответ: «перечисляет модули пакета».",
    "group": "Stdlib и производительность",
    "id": "m238"
  },
  {
    "topic": "import",
    "q": "Что такое importlib.util.find_spec в контексте Python?",
    "options": [
      "ищет спецификацию модуля",
      "exec module",
      "pip show",
      "venv"
    ],
    "answer": 0,
    "explain": "Проверка наличия. Правильный ответ: «ищет спецификацию модуля».",
    "group": "Stdlib и производительность",
    "id": "m239"
  },
  {
    "topic": "тесты",
    "q": "Что означает «pytest.raises ловит»?",
    "options": [
      "ожидаемое исключение",
      "любые silently",
      "warnings only",
      "SystemExit ban"
    ],
    "answer": 0,
    "explain": "Контекст проверки. Правильный ответ: «ожидаемое исключение».",
    "group": "Тесты и качество",
    "id": "m240"
  },
  {
    "topic": "тесты",
    "q": "Что вернёт capfd/capsys фикстуры?",
    "options": [
      "перехватывают stdout/stderr",
      "файлы tmp",
      "сеть",
      "time"
    ],
    "answer": 0,
    "explain": "Тест вывода. Правильный ответ: «перехватывают stdout/stderr».",
    "group": "Тесты и качество",
    "id": "m241"
  },
  {
    "topic": "тесты",
    "q": "Что даёт tmp_path?",
    "options": [
      "временную директорию pathlib",
      "только str /tmp fixed",
      "s3 bucket",
      "memory fs always"
    ],
    "answer": 0,
    "explain": "Изоляция FS. Правильный ответ: «временную директорию pathlib».",
    "group": "Тесты и качество",
    "id": "m242"
  },
  {
    "topic": "тесты",
    "q": "В чём разница: mark.skip vs skipif?",
    "options": [
      "безусловно vs условие",
      "одно и то же",
      "skipif удаляет файл",
      "skip = xfail"
    ],
    "answer": 0,
    "explain": "Маркеры. Правильный ответ: «безусловно vs условие».",
    "group": "Тесты и качество",
    "id": "m243"
  },
  {
    "topic": "тесты",
    "q": "Что означает «xfail означает»?",
    "options": [
      "ожидаемый провал",
      "skip",
      "pass force",
      "error CI"
    ],
    "answer": 0,
    "explain": "Известный баг. Правильный ответ: «ожидаемый провал».",
    "group": "Тесты и качество",
    "id": "m244"
  },
  {
    "topic": "mock",
    "q": "В чём разница: MagicMock vs Mock?",
    "options": [
      "MagicMock имеет магические методы по умолчанию",
      "Mock быстрее C",
      "одно и то же строго",
      "Magic только async"
    ],
    "answer": 0,
    "explain": "Удобство. Правильный ответ: «MagicMock имеет магические методы по умолчанию».",
    "group": "Тесты и качество",
    "id": "m245"
  },
  {
    "topic": "mock",
    "q": "Что означает «side_effect может»?",
    "options": [
      "кидать/итерировать/вызывать",
      "только return_value",
      "патчить диск",
      "GIL"
    ],
    "answer": 0,
    "explain": "Гибкое поведение. Правильный ответ: «кидать/итерировать/вызывать».",
    "group": "Тесты и качество",
    "id": "m246"
  },
  {
    "topic": "mock",
    "q": "Что такое assert_called_once_with в контексте Python?",
    "options": [
      "проверяет единственный вызов с args",
      "всегда True",
      "мокает time",
      "CI"
    ],
    "answer": 0,
    "explain": "Верификация. Правильный ответ: «проверяет единственный вызов с args».",
    "group": "Тесты и качество",
    "id": "m247"
  },
  {
    "topic": "logging",
    "q": "Что вернёт getLogger(__name__)?",
    "options": [
      "иерархия логгеров по модулю",
      "root always",
      "print",
      "warnings"
    ],
    "answer": 0,
    "explain": "Best practice. Правильный ответ: «иерархия логгеров по модулю».",
    "group": "Тесты и качество",
    "id": "m248"
  },
  {
    "topic": "logging",
    "q": "Что означает «handlers определяют»?",
    "options": [
      "куда писать",
      "формат only",
      "уровень only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Stream/File/…. Правильный ответ: «куда писать».",
    "group": "Тесты и качество",
    "id": "m249"
  },
  {
    "topic": "logging",
    "q": "Что такое filters на handler в контексте Python?",
    "options": [
      "отсекают записи",
      "меняют уровень root",
      "удаляют logger",
      "async"
    ],
    "answer": 0,
    "explain": "Тонкая настройка. Правильный ответ: «отсекают записи».",
    "group": "Тесты и качество",
    "id": "m250"
  },
  {
    "topic": "магические",
    "q": "Что означает «__hash__ должен быть согласован с»?",
    "options": [
      "__eq__",
      "__str__",
      "__len__",
      "id always only"
    ],
    "answer": 0,
    "explain": "Равные → равный hash. Правильный ответ: «__eq__».",
    "group": "Контекст и магические методы",
    "id": "m251"
  },
  {
    "topic": "магические",
    "q": "Что означает «__call__ делает объект»?",
    "options": [
      "вызываемым",
      "итерируемым",
      "контекстом",
      "дескриптором"
    ],
    "answer": 0,
    "explain": "obj(). Правильный ответ: «вызываемым».",
    "group": "Контекст и магические методы",
    "id": "m252"
  },
  {
    "topic": "магические",
    "q": "Что возвращает __enter__?",
    "options": [
      "то, что попадёт в as",
      "всегда None",
      "self обязателен языком",
      "exception"
    ],
    "answer": 0,
    "explain": "with X as y. Правильный ответ: «то, что попадёт в as».",
    "group": "Контекст и магические методы",
    "id": "m253"
  },
  {
    "topic": "магические",
    "q": "Что означает «__getitem__ обслуживает»?",
    "options": [
      "obj[key]",
      "obj.key",
      "obj()",
      "with obj"
    ],
    "answer": 0,
    "explain": "Индексация. Правильный ответ: «obj[key]».",
    "group": "Контекст и магические методы",
    "id": "m254"
  },
  {
    "topic": "property",
    "q": "Что вернёт deleter у property?",
    "options": [
      "обрабатывает del obj.x",
      "удаляет class",
      "GC freeze",
      "slots"
    ],
    "answer": 0,
    "explain": "@x.deleter. Правильный ответ: «обрабатывает del obj.x».",
    "group": "Контекст и магические методы",
    "id": "m255"
  },
  {
    "topic": "classmethod",
    "q": "Что означает «альтернатива constructor через»?",
    "options": [
      "@classmethod from_…",
      "staticmethod only",
      "property",
      "metaclasses обязателен"
    ],
    "answer": 0,
    "explain": "Фабрики. Правильный ответ: «@classmethod from_…».",
    "group": "Контекст и магические методы",
    "id": "m256"
  },
  {
    "topic": "ABC",
    "q": "Что вернёт register() у ABC?",
    "options": [
      "виртуальное подклассство без наследования",
      "создаёт файл",
      "pip",
      "GIL"
    ],
    "answer": 0,
    "explain": "isinstance True. Правильный ответ: «виртуальное подклассство без наследования».",
    "group": "ООП продвинутый",
    "id": "m257"
  },
  {
    "topic": "MRO",
    "q": "Что вернёт super() без аргументов в Py3?",
    "options": [
      "берёт класс/self из ячейки",
      "только object",
      "запрещён",
      "первый base hardcode"
    ],
    "answer": 0,
    "explain": "Zero-arg super. Правильный ответ: «берёт класс/self из ячейки».",
    "group": "ООП продвинутый",
    "id": "m258"
  },
  {
    "topic": "slots",
    "q": "Что означает «Наследование slots требует»?",
    "options": [
      "аккуратности с объявлением слотов в цепочке",
      "ничего особенного always",
      "запрета subclass",
      "dict always"
    ],
    "answer": 0,
    "explain": "Иначе снова __dict__. Правильный ответ: «аккуратности с объявлением слотов в цепочке».",
    "group": "ООП продвинутый",
    "id": "m259"
  },
  {
    "topic": "copy",
    "q": "Что означает «__deepcopy__ можно определить для»?",
    "options": [
      "кастомной глубокой копии",
      "только pickle",
      "json",
      "GIL"
    ],
    "answer": 0,
    "explain": "Протокол copy. Правильный ответ: «кастомной глубокой копии».",
    "group": "Stdlib и производительность",
    "id": "m260"
  },
  {
    "topic": "pickle",
    "q": "Что вернёт protocol=5 полезен для?",
    "options": [
      "out-of-band буферов (bytes large)",
      "JSON",
      "YAML",
      "XML"
    ],
    "answer": 0,
    "explain": "PEP 574. Правильный ответ: «out-of-band буферов (bytes large)».",
    "group": "Stdlib и производительность",
    "id": "m261"
  },
  {
    "topic": "json",
    "q": "Что вернёт parse_float=Decimal?",
    "options": [
      "точные десятичные из JSON",
      "быстрее float",
      "int only",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Хук парсера. Правильный ответ: «точные десятичные из JSON».",
    "group": "Stdlib и производительность",
    "id": "m262"
  },
  {
    "topic": "performance",
    "q": "В чём разница: set membership vs list?",
    "options": [
      "set средний O(1)",
      "list O(1)",
      "одинаково",
      "tuple хуже set всегда по константе только"
    ],
    "answer": 0,
    "explain": "Хеш-таблица. Правильный ответ: «set средний O(1)». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "m263"
  },
  {
    "topic": "performance",
    "q": "Что означает «локальная переменная в горячем цикле»?",
    "options": [
      "часто быстрее атрибута/global",
      "медленнее всегда",
      "запрещена",
      "GIL off"
    ],
    "answer": 0,
    "explain": "LOAD_FAST. Правильный ответ: «часто быстрее атрибута/global». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "m264"
  },
  {
    "topic": "sort",
    "q": "Что означает «Timsort хорошо для»?",
    "options": [
      "частично упорядоченных данных",
      "только random",
      "linked list C",
      "GPU"
    ],
    "answer": 0,
    "explain": "Адаптивность. Правильный ответ: «частично упорядоченных данных».",
    "group": "Stdlib и производительность",
    "id": "m265"
  },
  {
    "topic": "args",
    "q": "Что вернёт Keyword-only после *?",
    "options": [
      "обязательно по имени",
      "можно позиционно",
      "запрещены defaults",
      "только kwargs dict"
    ],
    "answer": 0,
    "explain": "def f(*, x). Правильный ответ: «обязательно по имени».",
    "group": "Typing и dataclasses",
    "id": "m266"
  },
  {
    "topic": "args",
    "q": "Что вернёт Positional-only до /?",
    "options": [
      "нельзя передать по имени",
      "можно только по имени",
      "kwargs",
      "varargs"
    ],
    "answer": 0,
    "explain": "def f(x, /). Правильный ответ: «нельзя передать по имени».",
    "group": "Typing и dataclasses",
    "id": "m267"
  },
  {
    "topic": "match",
    "q": "Что вернёт case point.x: без кавычек?",
    "options": [
      "value pattern / dotted",
      "всегда capture name",
      "ошибка",
      "regex"
    ],
    "answer": 0,
    "explain": "Смотри правила capture vs value. Правильный ответ: «value pattern / dotted».",
    "group": "Typing и dataclasses",
    "id": "m268"
  },
  {
    "topic": "match",
    "q": "Что вернёт case [x, y, *rest] на tuple?",
    "options": [
      "работает для последовательности",
      "только list тип exact",
      "dict",
      "set"
    ],
    "answer": 0,
    "explain": "Sequence pattern. Правильный ответ: «работает для последовательности».",
    "group": "Typing и dataclasses",
    "id": "m269"
  },
  {
    "topic": "walrus",
    "q": "Что вернёт = запрещён в?",
    "options": [
      "некоторых позиций (напр. лямбда без скобок нюансы)",
      "везде в if",
      "comprehension полностью",
      "функциях"
    ],
    "answer": 0,
    "explain": "Есть синтаксические ограничения. Правильный ответ: «некоторых позиций (напр. лямбда без скобок нюансы)».",
    "group": "Typing и dataclasses",
    "id": "m270"
  },
  {
    "topic": "enum",
    "q": "Что вернёт Flag / IntFlag для?",
    "options": [
      "битовых флагов",
      "строк",
      "json",
      "async"
    ],
    "answer": 0,
    "explain": "Комбинации флагов. Правильный ответ: «битовых флагов».",
    "group": "Typing и dataclasses",
    "id": "m271"
  },
  {
    "topic": "enum",
    "q": "Что вернёт unique() декоратор?",
    "options": [
      "запрещает дубли значений",
      "сортирует",
      "авто int",
      "pickle"
    ],
    "answer": 0,
    "explain": "enum.unique. Правильный ответ: «запрещает дубли значений».",
    "group": "Typing и dataclasses",
    "id": "m272"
  },
  {
    "topic": "HTTP",
    "q": "Что означает «идемпотентный PUT»?",
    "options": [
      "повтор того же эффекта",
      "всегда создаёт новый ресурс",
      "запрещён",
      "только DELETE"
    ],
    "answer": 0,
    "explain": "Семантика. Правильный ответ: «повтор того же эффекта».",
    "group": "Веб и API",
    "id": "m273"
  },
  {
    "topic": "HTTP",
    "q": "Что означает «POST обычно»?",
    "options": [
      "не идемпотентен",
      "идемпотентен",
      "безопасен как GET",
      "кэшируется всегда"
    ],
    "answer": 0,
    "explain": "Побочные эффекты. Правильный ответ: «не идемпотентен».",
    "group": "Веб и API",
    "id": "m274"
  },
  {
    "topic": "ASGI",
    "q": "Что такое lifespan protocol в контексте Python?",
    "options": [
      "startup/shutdown приложения",
      "только websocket",
      "WSGI sync",
      "CGI"
    ],
    "answer": 0,
    "explain": "ASGI lifespan. Правильный ответ: «startup/shutdown приложения».",
    "group": "Веб и API",
    "id": "m275"
  },
  {
    "topic": "FastAPI",
    "q": "Что вернёт Depends()?",
    "options": [
      "внедрение зависимостей",
      "SQL join",
      "GIL",
      "template"
    ],
    "answer": 0,
    "explain": "DI в эндпоинтах. Правильный ответ: «внедрение зависимостей».",
    "group": "Веб и API",
    "id": "m276"
  },
  {
    "topic": "FastAPI",
    "q": "Что такое response_model в контексте Python?",
    "options": [
      "фильтрует/валидирует ответ",
      "меняет HTTP method",
      "отключает OpenAPI",
      "async off"
    ],
    "answer": 0,
    "explain": "Pydantic model. Правильный ответ: «фильтрует/валидирует ответ».",
    "group": "Веб и API",
    "id": "m277"
  },
  {
    "topic": "SQL",
    "q": "В чём риск lazy load в ORM?",
    "options": [
      "N+1 запросов",
      "всегда быстрее eager",
      "нет риска",
      "только insert"
    ],
    "answer": 0,
    "explain": "Явный join/options. Правильный ответ: «N+1 запросов».",
    "group": "Веб и API",
    "id": "m278"
  },
  {
    "topic": "SQL",
    "q": "Что такое eager load в контексте Python?",
    "options": [
      "заранее подгружает связи",
      "откладывает forever",
      "кэш Redis",
      "drop"
    ],
    "answer": 0,
    "explain": "joinedload/selectin. Правильный ответ: «заранее подгружает связи».",
    "group": "Веб и API",
    "id": "m279"
  },
  {
    "topic": "DI",
    "q": "Что такое constructor injection в контексте Python?",
    "options": [
      "зависимости через __init__",
      "global import only",
      "monkeypatch prod",
      "env только"
    ],
    "answer": 0,
    "explain": "Тестируемость. Правильный ответ: «зависимости через __init__».",
    "group": "Веб и API",
    "id": "m280"
  },
  {
    "topic": "weakref",
    "q": "Что вернёт finalize(obj, callback)?",
    "options": [
      "вызов при GC объекта",
      "сразу",
      "при import",
      "никогда"
    ],
    "answer": 0,
    "explain": "Слабый финализатор. Правильный ответ: «вызов при GC объекта».",
    "group": "Stdlib и производительность",
    "id": "m281"
  },
  {
    "topic": "GC",
    "q": "Что такое gc.get_referrers в контексте Python?",
    "options": [
      "кто ссылается на объект",
      "refcount exact только",
      "disk refs",
      "HTTP"
    ],
    "answer": 0,
    "explain": "Отладка утечек. Правильный ответ: «кто ссылается на объект».",
    "group": "Stdlib и производительность",
    "id": "m282"
  },
  {
    "topic": "GC",
    "q": "Что вернёт gc.disable()?",
    "options": [
      "отключает cyclic GC",
      "отключает refcount",
      "GIL off",
      "async off"
    ],
    "answer": 0,
    "explain": "refcount остаётся. Правильный ответ: «отключает cyclic GC».",
    "group": "Stdlib и производительность",
    "id": "m283"
  },
  {
    "topic": "memoryview",
    "q": "Что вернёт cast('I')?",
    "options": [
      "переинтерпретация буфера",
      "копия list",
      "json",
      "encode"
    ],
    "answer": 0,
    "explain": "Буферный протокол. Правильный ответ: «переинтерпретация буфера».",
    "group": "Stdlib и производительность",
    "id": "m284"
  },
  {
    "topic": "struct",
    "q": "Что такое endianness в format в контексте Python?",
    "options": [
      "< little > big",
      "только native",
      "UTF",
      "JSON"
    ],
    "answer": 0,
    "explain": "struct format chars. Правильный ответ: «< little > big».",
    "group": "Stdlib и производительность",
    "id": "m285"
  },
  {
    "topic": "array",
    "q": "Что вернёт array('i') хранит?",
    "options": [
      "signed int компактно",
      "произвольные объекты",
      "str",
      "dict"
    ],
    "answer": 0,
    "explain": "Типизированный массив. Правильный ответ: «signed int компактно».",
    "group": "Collections и itertools",
    "id": "m286"
  },
  {
    "topic": "heapq",
    "q": "Что вернёт heappush / heappop?",
    "options": [
      "мин-куча",
      "макс-куча по умолчанию",
      "sort stable extra",
      "deque"
    ],
    "answer": 0,
    "explain": "Наименьший первый. Правильный ответ: «мин-куча».",
    "group": "Collections и itertools",
    "id": "m287"
  },
  {
    "topic": "bisect",
    "q": "Что такое bisect_left в контексте Python?",
    "options": [
      "точка вставки слева от равных",
      "удаление",
      "hash",
      "shuffle"
    ],
    "answer": 0,
    "explain": "Нижняя граница. Правильный ответ: «точка вставки слева от равных».",
    "group": "Collections и itertools",
    "id": "m288"
  },
  {
    "topic": "subprocess",
    "q": "Что вернёт text=True (universal_newlines)?",
    "options": [
      "str вместо bytes",
      "shell",
      "check",
      "timeout"
    ],
    "answer": 0,
    "explain": "Декодирование. Правильный ответ: «str вместо bytes».",
    "group": "Stdlib и производительность",
    "id": "m289"
  },
  {
    "topic": "subprocess",
    "q": "Что такое timeout в run в контексте Python?",
    "options": [
      "убивает по истечении (TimeoutExpired)",
      "игнор",
      "только warn",
      "async"
    ],
    "answer": 0,
    "explain": "Защита зависаний. Правильный ответ: «убивает по истечении (TimeoutExpired)».",
    "group": "Stdlib и производительность",
    "id": "m290"
  },
  {
    "topic": "tempfile",
    "q": "Что такое TemporaryDirectory в контексте Python?",
    "options": [
      "автоочистка каталога",
      "вечный /tmp",
      "только файл",
      "S3"
    ],
    "answer": 0,
    "explain": "Контекстный менеджер. Правильный ответ: «автоочистка каталога».",
    "group": "Stdlib и производительность",
    "id": "m291"
  },
  {
    "topic": "secrets",
    "q": "Что такое token_urlsafe в контексте Python?",
    "options": [
      "криптостойкий токен для URL",
      "uuid1",
      "random.random",
      "hash lib name"
    ],
    "answer": 0,
    "explain": "secrets module. Правильный ответ: «криптостойкий токен для URL».",
    "group": "Stdlib и производительность",
    "id": "m292"
  },
  {
    "topic": "hashlib",
    "q": "Что вернёт blake2 / sha3?",
    "options": [
      "современные хеш-функции",
      "crc32 crypto-safe",
      "siphash dict only",
      "md5 recommended password"
    ],
    "answer": 0,
    "explain": "Не путать с паролями — там KDF. Правильный ответ: «современные хеш-функции».",
    "group": "Stdlib и производительность",
    "id": "m293"
  },
  {
    "topic": "warnings",
    "q": "Что вернёт simplefilter('error')?",
    "options": [
      "warning → exception",
      "silence all",
      "log only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Строгий режим. Правильный ответ: «warning → exception».",
    "group": "Тесты и качество",
    "id": "m294"
  },
  {
    "topic": "import",
    "q": "Что вернёт circular import часто лечат?",
    "options": [
      "локальным import / разнесением",
      "удалением типов",
      "GIL",
      "eval"
    ],
    "answer": 0,
    "explain": "Архитектура модулей. Правильный ответ: «локальным import / разнесением».",
    "group": "Stdlib и производительность",
    "id": "m295"
  },
  {
    "topic": "protocols",
    "q": "Что вернёт @runtime_checkable ограничен?",
    "options": [
      "наличием методов, не сигнатур глубоко",
      "полной проверкой типов args",
      "скоростью C",
      "ABC ban"
    ],
    "answer": 0,
    "explain": "Не mypy runtime. Правильный ответ: «наличием методов, не сигнатур глубоко».",
    "group": "Typing и dataclasses",
    "id": "m296"
  },
  {
    "topic": "дескрипторы",
    "q": "Что такое property?",
    "options": [
      "data descriptor",
      "non-data only",
      "classmethod",
      "module"
    ],
    "answer": 0,
    "explain": "__set__ есть. Правильный ответ: «data descriptor». Дескрипторы управляют доступом к атрибутам через __get__ / __set__ / __delete__.",
    "group": "Контекст и магические методы",
    "id": "m297"
  },
  {
    "topic": "coroutines",
    "q": "Выбери верный вариант: await gen — нельзя; await coroutine — да. Генератор awaitable?",
    "options": [
      "нет (пока не @types.coroutine нюансы)",
      "да всегда",
      "только list",
      "только async for"
    ],
    "answer": 0,
    "explain": "Разные объекты. Правильный ответ: «нет (пока не @types.coroutine нюансы)».",
    "group": "Генераторы и итераторы",
    "id": "m298"
  },
  {
    "topic": "listcomp",
    "q": "Что вернёт Вложенный for в listcomp порядок?",
    "options": [
      "как вложенные for слева направо",
      "справа налево",
      "параллельно",
      "random"
    ],
    "answer": 0,
    "explain": "[a for x in xs for a in x]. Правильный ответ: «как вложенные for слева направо».",
    "group": "Генераторы и итераторы",
    "id": "m299"
  },
  {
    "topic": "dict",
    "q": "Что вернёт merge |= для dict (3.9)?",
    "options": [
      "in-place update",
      "новый dict only",
      "set only",
      "ошибка"
    ],
    "answer": 0,
    "explain": "d |= other. Правильный ответ: «in-place update».",
    "group": "Collections и itertools",
    "id": "m300"
  },
  {
    "topic": "exceptions",
    "q": "Что вернёт add_note (3.11)?",
    "options": [
      "добавляет текст к исключению",
      "меняет тип",
      "suppress",
      "logging"
    ],
    "answer": 0,
    "explain": "Отладка. Правильный ответ: «добавляет текст к исключению».",
    "group": "Исключения и контекст",
    "id": "m301"
  },
  {
    "topic": "match",
    "q": "Что означает паттерн match case 1 | 2 | 3 в Python 3.10+?",
    "options": [
      "or-паттерн",
      "bitwise",
      "ошибка",
      "range"
    ],
    "answer": 0,
    "explain": "Альтернативы. Правильный ответ: «or-паттерн».",
    "group": "Typing и dataclasses",
    "id": "m302"
  },
  {
    "topic": "typing",
    "q": "Чем помогает LiteralString?",
    "options": [
      "SQL/shell injection на уровне типов",
      "GIL",
      "медленного str",
      "UTF errors"
    ],
    "answer": 0,
    "explain": "Доверенные строки. Правильный ответ: «SQL/shell injection на уровне типов». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m303"
  },
  {
    "topic": "performance",
    "q": "Что означает «интернирование маленьких строк»?",
    "options": [
      "деталь CPython, не контракт логики",
      "языковой гарант всех str",
      "запрещено",
      "только bytes"
    ],
    "answer": 0,
    "explain": "Не строй логику на is для str. Правильный ответ: «деталь CPython, не контракт логики». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "m304"
  },
  {
    "topic": "HTTP",
    "q": "Что вернёт keep-alive?",
    "options": [
      "переиспользование TCP",
      "новый TCP always",
      "UDP",
      "QUIC only"
    ],
    "answer": 0,
    "explain": "Меньше handshake. Правильный ответ: «переиспользование TCP».",
    "group": "Веб и API",
    "id": "m305"
  },
  {
    "topic": "ASGI",
    "q": "Что такое websocket в ASGI?",
    "options": [
      "отдельный тип соединения",
      "HTTP only hack",
      "WSGI feature",
      "CGI"
    ],
    "answer": 0,
    "explain": "Двусторонний канал. Правильный ответ: «отдельный тип соединения».",
    "group": "Веб и API",
    "id": "m306"
  },
  {
    "topic": "SQL",
    "q": "Что означает «миграция Alembic»?",
    "options": [
      "версионирование схемы",
      "ORM query cache",
      "Redis",
      "nginx"
    ],
    "answer": 0,
    "explain": "Эволюция БД. Правильный ответ: «версионирование схемы».",
    "group": "Веб и API",
    "id": "m307"
  },
  {
    "topic": "тесты",
    "q": "Что означает «coverage.py измеряет»?",
    "options": [
      "покрытие строк/веток",
      "скорость",
      "типы",
      "GIL"
    ],
    "answer": 0,
    "explain": "Качество прогона. Правильный ответ: «покрытие строк/веток».",
    "group": "Тесты и качество",
    "id": "m308"
  },
  {
    "topic": "mock",
    "q": "Что вернёт patch.dict(os.environ)?",
    "options": [
      "временно меняет env",
      "вечно",
      "удаляет OS",
      "pip"
    ],
    "answer": 0,
    "explain": "Изоляция конфига. Правильный ответ: «временно меняет env».",
    "group": "Тесты и качество",
    "id": "m309"
  },
  {
    "topic": "pathlib",
    "q": "Что вернёт Path.home()?",
    "options": [
      "домашняя директория",
      "cwd",
      "tmp",
      "root"
    ],
    "answer": 0,
    "explain": "Кроссплатформенно. Правильный ответ: «домашняя директория».",
    "group": "Stdlib и производительность",
    "id": "m310"
  },
  {
    "topic": "functools",
    "q": "Что такое partialmethod в контексте Python?",
    "options": [
      "partial для методов",
      "classmethod",
      "property",
      "cache"
    ],
    "answer": 0,
    "explain": "В классе. Правильный ответ: «partial для методов».",
    "group": "Collections и itertools",
    "id": "m311"
  },
  {
    "topic": "itertools",
    "q": "Что вернёт batched (3.12)?",
    "options": [
      "чанки по n",
      "shuffle",
      "sort",
      "unique"
    ],
    "answer": 0,
    "explain": "Группировка элементов. Правильный ответ: «чанки по n».",
    "group": "Collections и itertools",
    "id": "m312"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт to_thread (3.9)?",
    "options": [
      "await блокирующую функцию в thread",
      "process pool always",
      "sync sleep",
      "GIL remove"
    ],
    "answer": 0,
    "explain": "Простой offload. Правильный ответ: «await блокирующую функцию в thread». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "m313"
  },
  {
    "topic": "typing",
    "q": "Что вернёт Self вместо «Type[Self]» хаков?",
    "options": [
      "удобнее для fluent API",
      "runtime check",
      "быстрее",
      "Enum"
    ],
    "answer": 0,
    "explain": "PEP 673. Правильный ответ: «удобнее для fluent API». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m314"
  },
  {
    "topic": "dataclasses",
    "q": "Что такое KW_ONLY sentinel в контексте Python?",
    "options": [
      "поля после — keyword-only",
      "frozen",
      "slots",
      "json"
    ],
    "answer": 0,
    "explain": "Разделитель полей. Правильный ответ: «поля после — keyword-only».",
    "group": "Typing и dataclasses",
    "id": "m315"
  },
  {
    "topic": "collections",
    "q": "Что вернёт Counter сложение?",
    "options": [
      "складывает счётчики",
      "ошибка",
      "set union only",
      "list concat"
    ],
    "answer": 0,
    "explain": "c1+c2. Правильный ответ: «складывает счётчики».",
    "group": "Collections и itertools",
    "id": "m316"
  },
  {
    "topic": "GIL",
    "q": "Что вернёт I/O в socket обычно?",
    "options": [
      "отпускает GIL на время ожидания",
      "держит GIL forever",
      "создаёт process",
      "отключает async"
    ],
    "answer": 0,
    "explain": "Потоки полезны для I/O. Правильный ответ: «отпускает GIL на время ожидания». GIL (Global Interpreter Lock) ограничивает параллельное исполнение байткода в CPython.",
    "group": "Потоки, процессы, GIL",
    "id": "m317"
  },
  {
    "topic": "threading",
    "q": "Что означает «daemon thread при выходе main»?",
    "options": [
      "может оборваться",
      "всегда join",
      "становится process",
      "freeze"
    ],
    "answer": 0,
    "explain": "Не для критичных задач без join. Правильный ответ: «может оборваться».",
    "group": "Потоки, процессы, GIL",
    "id": "m318"
  },
  {
    "topic": "multiprocessing",
    "q": "Что вернёт if __name__ == '__main__' критичен на?",
    "options": [
      "Windows/macOS spawn",
      "только Linux fork always ok без",
      "Jython only",
      "IDLE only"
    ],
    "answer": 0,
    "explain": "Повторный импорт модуля. Правильный ответ: «Windows/macOS spawn».",
    "group": "Потоки, процессы, GIL",
    "id": "m319"
  },
  {
    "topic": "context",
    "q": "Что вернёт suppress(FileNotFoundError)?",
    "options": [
      "молчаливый пропуск",
      "лог",
      "retry",
      "fatal"
    ],
    "answer": 0,
    "explain": "Узкий except. Правильный ответ: «молчаливый пропуск».",
    "group": "Исключения и контекст",
    "id": "m320"
  },
  {
    "topic": "магические",
    "q": "Что означает «__format__ обслуживает»?",
    "options": [
      "format(obj, spec) / f'{obj:spec}'",
      "str only",
      "repr only",
      "bytes"
    ],
    "answer": 0,
    "explain": "Мини-язык формата. Правильный ответ: «format(obj, spec) / f'{obj:spec}'».",
    "group": "Контекст и магические методы",
    "id": "m321"
  },
  {
    "topic": "property",
    "q": "Что вернёт obj.__dict__ у slots-only?",
    "options": [
      "часто отсутствует",
      "всегда есть",
      "всегда list",
      "json"
    ],
    "answer": 0,
    "explain": "Экономия памяти. Правильный ответ: «часто отсутствует».",
    "group": "Контекст и магические методы",
    "id": "m322"
  },
  {
    "topic": "ABC",
    "q": "Что вернёт abstractmethod + async def?",
    "options": [
      "поддерживается",
      "нельзя",
      "только sync",
      "только property"
    ],
    "answer": 0,
    "explain": "Абстрактные корутины. Правильный ответ: «поддерживается».",
    "group": "ООП продвинутый",
    "id": "m323"
  },
  {
    "topic": "copy",
    "q": "Что означает «shallow copy копирует»?",
    "options": [
      "контейнер, но не вложенные объекты глубоко",
      "весь граф",
      "только int",
      "ничего"
    ],
    "answer": 0,
    "explain": "Ссылки внутри те же. Правильный ответ: «контейнер, но не вложенные объекты глубоко».",
    "group": "Stdlib и производительность",
    "id": "m324"
  },
  {
    "topic": "json",
    "q": "Что вернёт sort_keys=True?",
    "options": [
      "сортирует ключи в dumps",
      "сортирует list",
      "меняет loads",
      "ускоряет"
    ],
    "answer": 0,
    "explain": "Стабильный вывод. Правильный ответ: «сортирует ключи в dumps».",
    "group": "Stdlib и производительность",
    "id": "m325"
  },
  {
    "topic": "performance",
    "q": "В чём разница: join vs + для N строк?",
    "options": [
      "join обычно предпочтительнее",
      "+ всегда O(1)",
      "без разницы в языке контрактом",
      "f-string в цикле идеал без меры"
    ],
    "answer": 0,
    "explain": "Линейная сборка. Правильный ответ: «join обычно предпочтительнее». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "m326"
  },
  {
    "topic": "sort",
    "q": "Что такое operator.itemgetter в контексте Python?",
    "options": [
      "быстрый key для сортировки",
      "hash",
      "copy",
      "mock"
    ],
    "answer": 0,
    "explain": "Вместо lambda часто. Правильный ответ: «быстрый key для сортировки».",
    "group": "Stdlib и производительность",
    "id": "m327"
  },
  {
    "topic": "args",
    "q": "Что вернёт def f(*args, a) — a?",
    "options": [
      "keyword-only",
      "positional",
      "optional auto",
      "variadic"
    ],
    "answer": 0,
    "explain": "После *. Правильный ответ: «keyword-only».",
    "group": "Typing и dataclasses",
    "id": "m328"
  },
  {
    "topic": "enum",
    "q": "Что вернёт StrEnum (3.11)?",
    "options": [
      "Enum + str",
      "только int",
      "Flag",
      "TypedDict"
    ],
    "answer": 0,
    "explain": "Строковые перечисления. Правильный ответ: «Enum + str».",
    "group": "Typing и dataclasses",
    "id": "m329"
  },
  {
    "topic": "HTTP",
    "q": "Что такое status 429 в контексте Python?",
    "options": [
      "too many requests",
      "not found",
      "ok",
      "redirect"
    ],
    "answer": 0,
    "explain": "Rate limit. Правильный ответ: «too many requests».",
    "group": "Веб и API",
    "id": "m330"
  },
  {
    "topic": "FastAPI",
    "q": "Что такое BackgroundTasks в контексте Python?",
    "options": [
      "работа после ответа",
      "celery cluster",
      "cron",
      "GPU"
    ],
    "answer": 0,
    "explain": "Простые фоновые. Правильный ответ: «работа после ответа».",
    "group": "Веб и API",
    "id": "m331"
  },
  {
    "topic": "SQL",
    "q": "Что означает «индекс ускоряет»?",
    "options": [
      "поиск/фильтр ценой записи",
      "всегда inserts",
      "json dumps",
      "GIL"
    ],
    "answer": 0,
    "explain": "Tradeoff. Правильный ответ: «поиск/фильтр ценой записи».",
    "group": "Веб и API",
    "id": "m332"
  },
  {
    "topic": "DI",
    "q": "В чём разница: service locator vs injection?",
    "options": [
      "injection явнее и тестируемее",
      "locator всегда лучше",
      "одно и то же",
      "GIL pattern"
    ],
    "answer": 0,
    "explain": "Явные зависимости. Правильный ответ: «injection явнее и тестируемее».",
    "group": "Веб и API",
    "id": "m333"
  },
  {
    "topic": "weakref",
    "q": "Что означает «proxy не поднимает»?",
    "options": [
      "refcount как сильная ссылка",
      "исключения",
      "GC",
      "typing"
    ],
    "answer": 0,
    "explain": "Слабая прокси. Правильный ответ: «refcount как сильная ссылка».",
    "group": "Stdlib и производительность",
    "id": "m334"
  },
  {
    "topic": "struct",
    "q": "Что вернёт calcsize(fmt)?",
    "options": [
      "байт на формат",
      "compile C",
      "json size",
      "hash"
    ],
    "answer": 0,
    "explain": "Размер упаковки. Правильный ответ: «байт на формат».",
    "group": "Stdlib и производительность",
    "id": "m335"
  },
  {
    "topic": "heapq",
    "q": "Что вернёт nlargest(k, it)?",
    "options": [
      "k наибольших эффективно",
      "полная сортировка always обязательна видимо",
      "shuffle",
      "unique"
    ],
    "answer": 0,
    "explain": "Частичный отбор. Правильный ответ: «k наибольших эффективно».",
    "group": "Collections и itertools",
    "id": "m336"
  },
  {
    "topic": "subprocess",
    "q": "В чём риск shell=True?",
    "options": [
      "инъекции через строку",
      "только slow",
      "безопаснее list",
      "нет"
    ],
    "answer": 0,
    "explain": "Prefer argv list. Правильный ответ: «инъекции через строку».",
    "group": "Stdlib и производительность",
    "id": "m337"
  },
  {
    "topic": "secrets",
    "q": "Что такое compare_digest в контексте Python?",
    "options": [
      "защита от timing attacks",
      "быстрее ==",
      "hash lib",
      "uuid"
    ],
    "answer": 0,
    "explain": "Для токенов/паролей. Правильный ответ: «защита от timing attacks».",
    "group": "Stdlib и производительность",
    "id": "m338"
  },
  {
    "topic": "warnings",
    "q": "Что такое catch_warnings в контексте Python?",
    "options": [
      "временный контроль warnings",
      "except Exception",
      "logging",
      "pytest only"
    ],
    "answer": 0,
    "explain": "Контекст. Правильный ответ: «временный контроль warnings».",
    "group": "Тесты и качество",
    "id": "m339"
  },
  {
    "topic": "typing",
    "q": "Что вернёт Annotated[int, Ge(0)] идея?",
    "options": [
      "метаданные валидации/инструментов",
      "runtime int subclass",
      "GIL",
      "slots"
    ],
    "answer": 0,
    "explain": "PEP 593 экосистема. Правильный ответ: «метаданные валидации/инструментов». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m340"
  },
  {
    "topic": "dataclasses",
    "q": "Что означает «asdict не делает»?",
    "options": [
      "глубокую магию произвольных объектов идеально всегда",
      "рекурсию dataclass/dict/list в простых случаях",
      "копию",
      "dict"
    ],
    "answer": 0,
    "explain": "Ограничения конвертации. Правильный ответ: «глубокую магию произвольных объектов идеально всегда».",
    "group": "Typing и dataclasses",
    "id": "m341"
  },
  {
    "topic": "asyncio",
    "q": "Что означает «Shield отмены не отменяет»?",
    "options": [
      "внутренний awaitable сразу снаружи",
      "KeyboardInterrupt OS",
      "process kill",
      "MemoryError"
    ],
    "answer": 0,
    "explain": "Ограниченная защита. Правильный ответ: «внутренний awaitable сразу снаружи». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "m342"
  },
  {
    "topic": "threading",
    "q": "Что даёт local()?",
    "options": [
      "thread-local storage",
      "process share",
      "async local",
      "global"
    ],
    "answer": 0,
    "explain": "threading.local. Правильный ответ: «thread-local storage».",
    "group": "Потоки, процессы, GIL",
    "id": "m343"
  },
  {
    "topic": "multiprocessing",
    "q": "Что вернёт Pool.map chunksize?",
    "options": [
      " влияет на нарезку задач",
      "отключает pickle",
      "GIL",
      "async"
    ],
    "answer": 0,
    "explain": "Баланс overhead. Правильный ответ: «влияет на нарезку задач».",
    "group": "Потоки, процессы, GIL",
    "id": "m344"
  },
  {
    "topic": "context",
    "q": "Что такое nullcontext в контексте Python?",
    "options": [
      "пустой CM-заглушка",
      "suppress all",
      "file open",
      "lock"
    ],
    "answer": 0,
    "explain": "Условный with. Правильный ответ: «пустой CM-заглушка».",
    "group": "Исключения и контекст",
    "id": "m345"
  },
  {
    "topic": "магические",
    "q": "Что вернёт __iter__ + __next__ на одном классе?",
    "options": [
      "объект и iterable и iterator",
      "запрещено",
      "только gen",
      "только async"
    ],
    "answer": 0,
    "explain": "Частый паттерн, но одноразовый. Правильный ответ: «объект и iterable и iterator».",
    "group": "Контекст и магические методы",
    "id": "m346"
  },
  {
    "topic": "property",
    "q": "Что означает «cached_property сброс»?",
    "options": [
      "del obj.attr / pop из __dict__",
      "авто каждый доступ",
      "нельзя",
      "GC only"
    ],
    "answer": 0,
    "explain": "Инвалидация кэша. Правильный ответ: «del obj.attr / pop из __dict__».",
    "group": "Контекст и магические методы",
    "id": "m347"
  },
  {
    "topic": "MRO",
    "q": "Верно ли, что object всегда в конце MRO?",
    "options": [
      "обычно да для new-style",
      "нет никогда",
      "только old-style Py2",
      "только ABC"
    ],
    "answer": 0,
    "explain": "Корень иерархии. Правильный ответ: «обычно да для new-style».",
    "group": "ООП продвинутый",
    "id": "m348"
  },
  {
    "topic": "pickle",
    "q": "Что означает «find_class можно ограничить для»?",
    "options": [
      "безопасной загрузки whitelist",
      "ускорения",
      "json",
      "YAML"
    ],
    "answer": 0,
    "explain": "Кастомный Unpickler. Правильный ответ: «безопасной загрузки whitelist».",
    "group": "Stdlib и производительность",
    "id": "m349"
  },
  {
    "topic": "json",
    "q": "Что такое object_hook в контексте Python?",
    "options": [
      "постпроцесс dict при loads",
      "dumps only",
      "indent",
      "sort"
    ],
    "answer": 0,
    "explain": "Восстановление типов. Правильный ответ: «постпроцесс dict при loads».",
    "group": "Stdlib и производительность",
    "id": "m350"
  },
  {
    "topic": "performance",
    "q": "Что вернёт __slots__ + weakref нужен?",
    "options": [
      "явный '__weakref__' в slots",
      "автоматически always",
      "запрещён",
      "только PyPy"
    ],
    "answer": 0,
    "explain": "Иначе нельзя weakref. Правильный ответ: «явный '__weakref__' в slots». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "m351"
  },
  {
    "topic": "sort",
    "q": "Что вернёт key=str.lower?",
    "options": [
      "case-insensitive sort",
      "numeric",
      "by len default",
      "random"
    ],
    "answer": 0,
    "explain": "Нормализация ключа. Правильный ответ: «case-insensitive sort».",
    "group": "Stdlib и производительность",
    "id": "m352"
  },
  {
    "topic": "HTTP",
    "q": "Что вернёт ETag / If-None-Match?",
    "options": [
      "кэш-валидация",
      "auth",
      "CORS",
      "TLS"
    ],
    "answer": 0,
    "explain": "Условные запросы. Правильный ответ: «кэш-валидация».",
    "group": "Веб и API",
    "id": "m353"
  },
  {
    "topic": "FastAPI",
    "q": "Что такое APIRouter в контексте Python?",
    "options": [
      "модульные маршруты",
      "ORM",
      "GIL router",
      "WSGI"
    ],
    "answer": 0,
    "explain": "Композиция приложений. Правильный ответ: «модульные маршруты».",
    "group": "Веб и API",
    "id": "m354"
  },
  {
    "topic": "SQL",
    "q": "Что такое транзакция ACID — A?",
    "options": [
      "Atomicity",
      "Async",
      "Array",
      "Auth"
    ],
    "answer": 0,
    "explain": "Всё или ничего. Правильный ответ: «Atomicity».",
    "group": "Веб и API",
    "id": "m355"
  },
  {
    "topic": "тесты",
    "q": "Что такое hypothesis.given в контексте Python?",
    "options": [
      "property-based входы",
      "mock",
      "fixture data fixed only",
      "benchmark"
    ],
    "answer": 0,
    "explain": "Генерация примеров. Правильный ответ: «property-based входы».",
    "group": "Тесты и качество",
    "id": "m356"
  },
  {
    "topic": "logging",
    "q": "Что такое LoggerAdapter в контексте Python?",
    "options": [
      "контекстные поля в логах",
      "handler",
      "filter ban",
      "root replace"
    ],
    "answer": 0,
    "explain": "request_id и т.п. Правильный ответ: «контекстные поля в логах».",
    "group": "Тесты и качество",
    "id": "m357"
  },
  {
    "topic": "pathlib",
    "q": "В чём разница: Path.match vs glob?",
    "options": [
      "match — паттерн на путь, glob — поиск в дереве",
      "одно и то же",
      "match удаляет",
      "glob regex only"
    ],
    "answer": 0,
    "explain": "Разные API. Правильный ответ: «match — паттерн на путь, glob — поиск в дереве».",
    "group": "Stdlib и производительность",
    "id": "m358"
  },
  {
    "topic": "regex",
    "q": "Что такое re.IGNORECASE в контексте Python?",
    "options": [
      "флаг i",
      "multiline",
      "dotall",
      "verbose"
    ],
    "answer": 0,
    "explain": "Регистронезависимо. Правильный ответ: «флаг i».",
    "group": "Stdlib и производительность",
    "id": "m359"
  },
  {
    "topic": "regex",
    "q": "Что такое re.DOTALL в контексте Python?",
    "options": [
      "точка включает \\n",
      "ignorecase",
      "ascii",
      "debug"
    ],
    "answer": 0,
    "explain": "Многострочные матчи. Правильный ответ: «точка включает \\n».",
    "group": "Stdlib и производительность",
    "id": "m360"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт CancelledError с 3.8+?",
    "options": [
      "BaseException subclass (не Exception)",
      "обычный Exception",
      "Warning",
      "OSError"
    ],
    "answer": 0,
    "explain": "Не глотать широким except Exception бездумно ранее — уточняй версию/практику. Правильный ответ: «BaseException subclass (не Exception)».",
    "group": "Asyncio",
    "id": "m361"
  },
  {
    "topic": "typing",
    "q": "Что означает «ParamSpec переносит»?",
    "options": [
      "параметры callable в декораторах",
      "только TypeVar значений",
      "GIL",
      "Path"
    ],
    "answer": 0,
    "explain": "PEP 612. Правильный ответ: «параметры callable в декораторах». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m362"
  },
  {
    "topic": "collections",
    "q": "Что такое UserList в контексте Python?",
    "options": [
      "обёртка для кастомного list API",
      "быстрее list",
      "tuple",
      "array"
    ],
    "answer": 0,
    "explain": "Наследование удобнее. Правильный ответ: «обёртка для кастомного list API».",
    "group": "Collections и itertools",
    "id": "m363"
  },
  {
    "topic": "itertools",
    "q": "Что вернёт pairwise (3.10)?",
    "options": [
      "(a,b),(b,c),…",
      "chunks",
      "product",
      "cycle"
    ],
    "answer": 0,
    "explain": "Соседние пары. Правильный ответ: «(a,b),(b,c),…».",
    "group": "Collections и itertools",
    "id": "m364"
  },
  {
    "topic": "functools",
    "q": "Что вернёт reduce без initial на пустом?",
    "options": [
      "TypeError",
      "None",
      "0",
      "[]"
    ],
    "answer": 0,
    "explain": "Нужен initializer. Правильный ответ: «TypeError».",
    "group": "Collections и itertools",
    "id": "m365"
  },
  {
    "topic": "GIL",
    "q": "Что вернёт Продление CPU в C-extension без отпуска GIL?",
    "options": [
      "блокирует другие Python-потоки",
      "ускоряет их",
      "отключает process",
      "влияет только async"
    ],
    "answer": 0,
    "explain": "Держи ALLOW_THREADS для тяжёлого C. Правильный ответ: «блокирует другие Python-потоки». GIL (Global Interpreter Lock) ограничивает параллельное исполнение байткода в CPython.",
    "group": "Потоки, процессы, GIL",
    "id": "m366"
  },
  {
    "topic": "multiprocessing",
    "q": "Что такое forkserver start method в контексте Python?",
    "options": [
      "промежуточный сервер для форков",
      "только Windows",
      "async",
      "GIL free"
    ],
    "answer": 0,
    "explain": "Альтернатива fork/spawn. Правильный ответ: «промежуточный сервер для форков».",
    "group": "Потоки, процессы, GIL",
    "id": "m367"
  },
  {
    "topic": "dataclasses",
    "q": "Что означает «InitVar не попадает в»?",
    "options": [
      "repr/eq хранимые поля как обычное поле",
      "init",
      "аннотации",
      "класс"
    ],
    "answer": 0,
    "explain": "Только аргумент инициализации. Правильный ответ: «repr/eq хранимые поля как обычное поле».",
    "group": "Typing и dataclasses",
    "id": "m368"
  },
  {
    "topic": "ABC",
    "q": "Что такое __subclasshook__ в контексте Python?",
    "options": [
      "кастом isinstance без register",
      "MRO rewrite",
      "GIL",
      "slots"
    ],
    "answer": 0,
    "explain": "Структурность для ABC. Правильный ответ: «кастом isinstance без register».",
    "group": "ООП продвинутый",
    "id": "m369"
  },
  {
    "topic": "context",
    "q": "Что такое aclosing для async в контексте Python?",
    "options": [
      "async close аналог closing",
      "sync only",
      "thread",
      "process"
    ],
    "answer": 0,
    "explain": "contextlib.aclosing. Правильный ответ: «async close аналог closing».",
    "group": "Исключения и контекст",
    "id": "m370"
  },
  {
    "topic": "магические",
    "q": "Что такое __matmul__?",
    "options": [
      "оператор @",
      "decorator",
      "matrix only NumPy language ban",
      "async"
    ],
    "answer": 0,
    "explain": "PEP 465. Правильный ответ: «оператор @».",
    "group": "Контекст и магические методы",
    "id": "m371"
  },
  {
    "topic": "property",
    "q": "Что вернёт doc у property?",
    "options": [
      "можно задать доку геттера",
      "запрещён",
      "только class docstring",
      "pep8 ban"
    ],
    "answer": 0,
    "explain": "help видит. Правильный ответ: «можно задать доку геттера».",
    "group": "Контекст и магические методы",
    "id": "m372"
  },
  {
    "topic": "slots",
    "q": "Что означает «объявить пустые slots у subclass»?",
    "options": [
      "часто нужно [], чтобы не вернуть __dict__",
      "нельзя",
      "удаляет parent slots",
      "создаёт list attr"
    ],
    "answer": 0,
    "explain": "Тонкость наследования. Правильный ответ: «часто нужно [], чтобы не вернуть __dict__».",
    "group": "ООП продвинутый",
    "id": "m373"
  },
  {
    "topic": "json",
    "q": "Что вернёт ensure_ascii=False?",
    "options": [
      "сохраняет unicode как есть",
      "только ascii escapes always",
      "bytes",
      "pickle"
    ],
    "answer": 0,
    "explain": "Читаемый русский в JSON. Правильный ответ: «сохраняет unicode как есть».",
    "group": "Stdlib и производительность",
    "id": "m374"
  },
  {
    "topic": "performance",
    "q": "Что вернёт getattr без default на горячем пути?",
    "options": [
      "дороже локальной переменной",
      "быстрее LOAD_FAST",
      "равно global",
      "убирает GIL"
    ],
    "answer": 0,
    "explain": "Кэшируй в локальную. Правильный ответ: «дороже локальной переменной». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "m375"
  },
  {
    "topic": "HTTP",
    "q": "Что такое CORS preflight в контексте Python?",
    "options": [
      "OPTIONS перед «сложным» запросом",
      "GET always",
      "TLS handshake",
      "DNS"
    ],
    "answer": 0,
    "explain": "Браузерная безопасность. Правильный ответ: «OPTIONS перед «сложным» запросом».",
    "group": "Веб и API",
    "id": "m376"
  },
  {
    "topic": "SQL",
    "q": "Что показывает EXPLAIN?",
    "options": [
      "план запроса",
      "результат rows only",
      "ORM log",
      "миграции"
    ],
    "answer": 0,
    "explain": "Оптимизация SQL. Правильный ответ: «план запроса».",
    "group": "Веб и API",
    "id": "m377"
  },
  {
    "topic": "тесты",
    "q": "Что вернёт pytest-asyncio mode?",
    "options": [
      "запуск async тестов",
      "threads",
      "process",
      "Twisted only"
    ],
    "answer": 0,
    "explain": "Плагин. Правильный ответ: «запуск async тестов».",
    "group": "Тесты и качество",
    "id": "m378"
  },
  {
    "topic": "mock",
    "q": "Что вернёт spec=True ограничивает?",
    "options": [
      "атрибуты мока интерфейсом",
      "скорость",
      "GC",
      "patch target"
    ],
    "answer": 0,
    "explain": "Ловит опечатки. Правильный ответ: «атрибуты мока интерфейсом».",
    "group": "Тесты и качество",
    "id": "m379"
  },
  {
    "topic": "logging",
    "q": "Что такое QueueHandler в контексте Python?",
    "options": [
      "логи из потоков в очередь",
      "HTTP handler",
      "file rotate only",
      "syslog ban"
    ],
    "answer": 0,
    "explain": "Централизация. Правильный ответ: «логи из потоков в очередь».",
    "group": "Тесты и качество",
    "id": "m380"
  },
  {
    "topic": "pathlib",
    "q": "Что вернёт expanduser()?",
    "options": [
      "раскрывает ~",
      "env $VAR всегда полностью как shell",
      "symlink resolve",
      "cwd"
    ],
    "answer": 0,
    "explain": "Домашний путь. Правильный ответ: «раскрывает ~».",
    "group": "Stdlib и производительность",
    "id": "m381"
  },
  {
    "topic": "secrets",
    "q": "Что такое SystemRandom в контексте Python?",
    "options": [
      "OS RNG интерфейс как random.Random",
      "MT19937",
      "uuid",
      "hash"
    ],
    "answer": 0,
    "explain": "Криптостойкий генератор. Правильный ответ: «OS RNG интерфейс как random.Random».",
    "group": "Stdlib и производительность",
    "id": "m382"
  },
  {
    "topic": "hashlib",
    "q": "Что вернёт pbkdf2_hmac / scrypt?",
    "options": [
      "KDF для паролей",
      "быстрый checksum",
      "crc",
      "siphash"
    ],
    "answer": 0,
    "explain": "Медленные по дизайну. Правильный ответ: «KDF для паролей».",
    "group": "Stdlib и производительность",
    "id": "m383"
  },
  {
    "topic": "warnings",
    "q": "Что вернёт filterwarnings('ignore', category=DeprecationWarning)?",
    "options": [
      "глушит deprecations",
      "превращает в error",
      "удаляет API",
      "CI fail"
    ],
    "answer": 0,
    "explain": "Точечный фильтр. Правильный ответ: «глушит deprecations».",
    "group": "Тесты и качество",
    "id": "m384"
  },
  {
    "topic": "typing",
    "q": "Что означает «cast не проверяет runtime»?",
    "options": [
      "да, no-op",
      "валидирует",
      "конвертирует",
      "бросок"
    ],
    "answer": 0,
    "explain": "Только для checker. Правильный ответ: «да, no-op». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m385"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт get_running_loop()?",
    "options": [
      "loop текущей корутины",
      "создаёт новый",
      "None всегда в thread",
      "process loop"
    ],
    "answer": 0,
    "explain": "Предпочтительнее get_event_loop в async. Правильный ответ: «loop текущей корутины». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "m386"
  },
  {
    "topic": "threading",
    "q": "Что означает «Barrier для N потоков»?",
    "options": [
      "синхронная встреча",
      "lock one",
      "async gather",
      "process barrier OS"
    ],
    "answer": 0,
    "explain": "threading.Barrier. Правильный ответ: «синхронная встреча».",
    "group": "Потоки, процессы, GIL",
    "id": "m387"
  },
  {
    "topic": "collections",
    "q": "Что такое OrderedDict.move_to_end в контексте Python?",
    "options": [
      "LRU-подобные структуры",
      "sort",
      "hash rebuild",
      "json"
    ],
    "answer": 0,
    "explain": "Явный порядок. Правильный ответ: «LRU-подобные структуры».",
    "group": "Collections и itertools",
    "id": "m388"
  },
  {
    "topic": "itertools",
    "q": "Что вернёт islice(it, None, None, 2)?",
    "options": [
      "каждый второй лениво",
      "list copy",
      "reverse",
      "sort"
    ],
    "answer": 0,
    "explain": "Срез итератора. Правильный ответ: «каждый второй лениво».",
    "group": "Collections и itertools",
    "id": "m389"
  },
  {
    "topic": "functools",
    "q": "Что такое lru_cache не для в контексте Python?",
    "options": [
      "нехешируемых аргументов",
      "int",
      "str",
      "frozenset"
    ],
    "answer": 0,
    "explain": "Ключи кэша hashable. Правильный ответ: «нехешируемых аргументов».",
    "group": "Collections и itertools",
    "id": "m390"
  },
  {
    "topic": "GIL",
    "q": "Что означает «PyPy GIL тоже есть, но»?",
    "options": [
      "другой runtime/оптимизации",
      "GIL нет никогда",
      "одинаков бит-в-бит",
      "только Windows"
    ],
    "answer": 0,
    "explain": "Не переноси ожидания 1:1. Правильный ответ: «другой runtime/оптимизации». GIL (Global Interpreter Lock) ограничивает параллельное исполнение байткода в CPython.",
    "group": "Потоки, процессы, GIL",
    "id": "m391"
  },
  {
    "topic": "multiprocessing",
    "q": "Что такое sharedctypes в контексте Python?",
    "options": [
      "общие ctypes-объекты",
      "любые py objects transparently",
      "asyncio Queue",
      "GIL share"
    ],
    "answer": 0,
    "explain": "Ограниченный shared state. Правильный ответ: «общие ctypes-объекты».",
    "group": "Потоки, процессы, GIL",
    "id": "m392"
  },
  {
    "topic": "dataclasses",
    "q": "Что такое make_dataclass в контексте Python?",
    "options": [
      "динамическое создание dataclass",
      "NamedTuple only",
      "TypedDict",
      "Enum"
    ],
    "answer": 0,
    "explain": "runtime factory. Правильный ответ: «динамическое создание dataclass».",
    "group": "Typing и dataclasses",
    "id": "m393"
  },
  {
    "topic": "ABC",
    "q": "Что означает «abstractclassmethod существует»?",
    "options": [
      "исторически да, сейчас комбинации decorator",
      "никогда не было",
      "только Py2",
      "запрещено 3"
    ],
    "answer": 0,
    "explain": "Смотри актуальные рецепты abc+classmethod. Правильный ответ: «исторически да, сейчас комбинации decorator».",
    "group": "ООП продвинутый",
    "id": "m394"
  },
  {
    "topic": "context",
    "q": "Что вернёт chdir контекст (3.11)?",
    "options": [
      "временная смена cwd",
      "chmod",
      "chown",
      "mount"
    ],
    "answer": 0,
    "explain": "contextlib.chdir. Правильный ответ: «временная смена cwd».",
    "group": "Исключения и контекст",
    "id": "m395"
  },
  {
    "topic": "магические",
    "q": "Что означает «__set_name__ у дескриптора»?",
    "options": [
      "узнаёт имя атрибута в owner",
      "вызывается при print",
      "GC",
      "import"
    ],
    "answer": 0,
    "explain": "PEP 487. Правильный ответ: «узнаёт имя атрибута в owner».",
    "group": "Контекст и магические методы",
    "id": "m396"
  },
  {
    "topic": "SQL",
    "q": "Что такое Isolation level Serializable в контексте Python?",
    "options": [
      "самый строгий из классических",
      "read uncommitted",
      "без транзакций",
      "autocommit only"
    ],
    "answer": 0,
    "explain": "Меньше аномалий, больше конфликтов. Правильный ответ: «самый строгий из классических».",
    "group": "Веб и API",
    "id": "m397"
  },
  {
    "topic": "HTTP",
    "q": "Что такое HTTPS termination в контексте Python?",
    "options": [
      "TLS часто на proxy/load balancer",
      "только в app forever",
      "DNSSEC",
      "JWT"
    ],
    "answer": 0,
    "explain": "Инфра-паттерн. Правильный ответ: «TLS часто на proxy/load balancer».",
    "group": "Веб и API",
    "id": "m398"
  },
  {
    "topic": "FastAPI",
    "q": "Что такое UploadFile в контексте Python?",
    "options": [
      "асинхронная работа с upload",
      "только bytes sync read обязателен без api",
      "S3 client",
      "pathlib"
    ],
    "answer": 0,
    "explain": "Starlette files. Правильный ответ: «асинхронная работа с upload».",
    "group": "Веб и API",
    "id": "m399"
  },
  {
    "topic": "тесты",
    "q": "Что вернёт freezegun / time-machine?",
    "options": [
      "заморозка времени в тестах",
      "mock HTTP",
      "DB",
      "GIL"
    ],
    "answer": 0,
    "explain": "Детерминизм time. Правильный ответ: «заморозка времени в тестах».",
    "group": "Тесты и качество",
    "id": "m400"
  },
  {
    "topic": "logging",
    "q": "Что такое RotatingFileHandler в контексте Python?",
    "options": [
      "ротация по размеру",
      "по времени only Timed",
      "stdout",
      "queue"
    ],
    "answer": 0,
    "explain": "Файловые логи. Правильный ответ: «ротация по размеру».",
    "group": "Тесты и качество",
    "id": "m401"
  },
  {
    "topic": "typing",
    "q": "Что вернёт Never (3.11)?",
    "options": [
      "низший тип, недостижимость",
      "Any",
      "object",
      "None"
    ],
    "answer": 0,
    "explain": "Bottom type. Правильный ответ: «низший тип, недостижимость». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m402"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт eager_task_factory (3.12)?",
    "options": [
      "задачи стартуют немедленно",
      "удаляет cancel",
      "process tasks",
      "GIL"
    ],
    "answer": 0,
    "explain": "Семантика планирования. Правильный ответ: «задачи стартуют немедленно». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "m403"
  },
  {
    "topic": "collections",
    "q": "Что вернёт Counter.elements()?",
    "options": [
      "итератор с повторами по счёту",
      "unique keys",
      "sorted list always",
      "dict"
    ],
    "answer": 0,
    "explain": "Разворачивает счётчики. Правильный ответ: «итератор с повторами по счёту».",
    "group": "Collections и itertools",
    "id": "m404"
  },
  {
    "topic": "regex",
    "q": "Что вернёт atomic grouping / possessive?",
    "options": [
      "в stdlib re ограничено; смотри сторонние",
      "полностью как Perl always",
      "нет понятия",
      "только bytes"
    ],
    "answer": 0,
    "explain": "Нюанс движка. Правильный ответ: «в stdlib re ограничено; смотри сторонние».",
    "group": "Stdlib и производительность",
    "id": "m405"
  },
  {
    "topic": "performance",
    "q": "Что означает «bytearray для накопления байт»?",
    "options": [
      "мутабельный буфер",
      "immutable как bytes",
      "str",
      "memoryview ban"
    ],
    "answer": 0,
    "explain": "Эффективная сборка. Правильный ответ: «мутабельный буфер». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "m406"
  },
  {
    "topic": "DI",
    "q": "Что такое composition root в контексте Python?",
    "options": [
      "место сборки графа зависимостей",
      "каждый модуль new сам",
      "global random",
      "import side effect only"
    ],
    "answer": 0,
    "explain": "Чистая архитектура. Правильный ответ: «место сборки графа зависимостей».",
    "group": "Веб и API",
    "id": "m407"
  },
  {
    "topic": "weakref",
    "q": "Что означает «WeakKeyDictionary ключи»?",
    "options": [
      "слабые, должны быть hashable weakrefable",
      "сильные list",
      "int only always immortal",
      "str intern mandatory"
    ],
    "answer": 0,
    "explain": "Осторожно с ключами. Правильный ответ: «слабые, должны быть hashable weakrefable».",
    "group": "Stdlib и производительность",
    "id": "m408"
  },
  {
    "topic": "struct",
    "q": "Что такое iter_unpack в контексте Python?",
    "options": [
      "лениво распаковывает буфер",
      "json",
      "pickle",
      "yaml"
    ],
    "answer": 0,
    "explain": "Повторяющийся формат. Правильный ответ: «лениво распаковывает буфер».",
    "group": "Stdlib и производительность",
    "id": "m409"
  },
  {
    "topic": "heapq",
    "q": "Что вернёт heapify in-place?",
    "options": [
      "линейно строит кучу",
      "O(n log n) sort copy",
      "shuffle",
      "unique"
    ],
    "answer": 0,
    "explain": "Эффективная инициализация. Правильный ответ: «линейно строит кучу».",
    "group": "Collections и itertools",
    "id": "m410"
  },
  {
    "topic": "subprocess",
    "q": "Что такое DEVNULL в контексте Python?",
    "options": [
      "подавить stdout/stderr",
      "pipe",
      "inherit",
      "capture"
    ],
    "answer": 0,
    "explain": "subprocess.DEVNULL. Правильный ответ: «подавить stdout/stderr».",
    "group": "Stdlib и производительность",
    "id": "m411"
  },
  {
    "topic": "tempfile",
    "q": "Что возвращает mkstemp?",
    "options": [
      "fd и path",
      "только Path",
      "file object always",
      "bytes"
    ],
    "answer": 0,
    "explain": "Низкоуровневый API. Правильный ответ: «fd и path».",
    "group": "Stdlib и производительность",
    "id": "m412"
  },
  {
    "topic": "import",
    "q": "Что такое sys.path_hooks в контексте Python?",
    "options": [
      "как находятся импорты по path entry",
      "pip",
      "venv activate",
      "sitecustomize only"
    ],
    "answer": 0,
    "explain": "Import machinery. Правильный ответ: «как находятся импорты по path entry».",
    "group": "Stdlib и производительность",
    "id": "m413"
  },
  {
    "topic": "enum",
    "q": "Что такое Enum functional API в контексте Python?",
    "options": [
      "Enum('Color', 'R G B')",
      "только class syntax",
      "TypedDict",
      "dataclass"
    ],
    "answer": 0,
    "explain": "Динамическое создание. Правильный ответ: «Enum('Color', 'R G B')».",
    "group": "Typing и dataclasses",
    "id": "m414"
  },
  {
    "topic": "match",
    "q": "Что вернёт при наличии __match_args__/dataclass?",
    "options": [
      "positional/keyword patterns",
      "только dict",
      "regex",
      "ошибка всегда"
    ],
    "answer": 0,
    "explain": "Class pattern. Правильный ответ: «positional/keyword patterns».",
    "group": "Typing и dataclasses",
    "id": "m415"
  },
  {
    "topic": "args",
    "q": "Что вернёт def f(a, b=1, /, c=2, *, d=3): — b?",
    "options": [
      "positional-only с default",
      "keyword-only",
      "varargs",
      "kwargs"
    ],
    "answer": 0,
    "explain": "Смешанная сигнатура. Правильный ответ: «positional-only с default».",
    "group": "Typing и dataclasses",
    "id": "m416"
  },
  {
    "topic": "context",
    "q": "Что такое asynccontextmanager в контексте Python?",
    "options": [
      "async CM из генератора",
      "sync only",
      "thread",
      "process"
    ],
    "answer": 0,
    "explain": "contextlib. Правильный ответ: «async CM из генератора».",
    "group": "Исключения и контекст",
    "id": "m417"
  },
  {
    "topic": "магические",
    "q": "Что означает «__index__ нужен для»?",
    "options": [
      "преобразования к int индекса/среза",
      "float",
      "str",
      "bool only"
    ],
    "answer": 0,
    "explain": "Числовые протоколы. Правильный ответ: «преобразования к int индекса/среза».",
    "group": "Контекст и магические методы",
    "id": "m418"
  },
  {
    "topic": "property",
    "q": "Что означает «setter может менять тип хранимого»?",
    "options": [
      "да, на твоей логике",
      "нет языком запрещено",
      "только int",
      "только str"
    ],
    "answer": 0,
    "explain": "Это обычный метод. Правильный ответ: «да, на твоей логике».",
    "group": "Контекст и магические методы",
    "id": "m419"
  },
  {
    "topic": "ABC",
    "q": "Что вернёт update_abstractmethods (3.10)?",
    "options": [
      "пересчёт абстрактности после правок",
      "MRO",
      "GIL",
      "slots"
    ],
    "answer": 0,
    "explain": "Динамические классы. Правильный ответ: «пересчёт абстрактности после правок».",
    "group": "ООП продвинутый",
    "id": "m420"
  },
  {
    "topic": "json",
    "q": "Что такое JSONEncoder subclass в контексте Python?",
    "options": [
      "кастом default",
      "loads only",
      "schema",
      "yaml"
    ],
    "answer": 0,
    "explain": "Расширение dumps. Правильный ответ: «кастом default».",
    "group": "Stdlib и производительность",
    "id": "m421"
  },
  {
    "topic": "performance",
    "q": "Что означает «много мелких объектов — смотри»?",
    "options": [
      "аллокации/GC, slots, interning осторожно",
      "только pep8",
      "только async",
      "только typed"
    ],
    "answer": 0,
    "explain": "Профилируй память. Правильный ответ: «аллокации/GC, slots, interning осторожно». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "m422"
  },
  {
    "topic": "HTTP",
    "q": "Что вернёт gzip Content-Encoding?",
    "options": [
      "сжатие тела",
      "шифр",
      "auth",
      "мультилипарт"
    ],
    "answer": 0,
    "explain": "Транспортное сжатие. Правильный ответ: «сжатие тела».",
    "group": "Веб и API",
    "id": "m423"
  },
  {
    "topic": "SQL",
    "q": "Что такое connection pool exhaustion в контексте Python?",
    "options": [
      "все коннекты заняты — очередь/ошибки",
      "всегда OOM",
      "GIL",
      "DNS"
    ],
    "answer": 0,
    "explain": "Лимиты пула. Правильный ответ: «все коннекты заняты — очередь/ошибки».",
    "group": "Веб и API",
    "id": "m424"
  },
  {
    "topic": "тесты",
    "q": "Что такое snapshot testing в контексте Python?",
    "options": [
      "сравнение с эталонным выводом",
      "property based",
      "load test",
      "mutation"
    ],
    "answer": 0,
    "explain": "UI/API регрессии. Правильный ответ: «сравнение с эталонным выводом».",
    "group": "Тесты и качество",
    "id": "m425"
  },
  {
    "topic": "logging",
    "q": "Что такое Structured logging в контексте Python?",
    "options": [
      "поля/JSON, не только текст",
      "только print",
      "pickle logs",
      "HTML"
    ],
    "answer": 0,
    "explain": "Наблюдаемость. Правильный ответ: «поля/JSON, не только текст».",
    "group": "Тесты и качество",
    "id": "m426"
  },
  {
    "topic": "typing",
    "q": "Что вернёт TypeVarTuple / Unpack?",
    "options": [
      "вариативные типы кортежей",
      "только dict",
      "Enum",
      "Path"
    ],
    "answer": 0,
    "explain": "PEP 646. Правильный ответ: «вариативные типы кортежей». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m427"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт Runner (3.11)?",
    "options": [
      "управление loop run упрощённо",
      "замена threading",
      "process pool",
      "WSGI"
    ],
    "answer": 0,
    "explain": "asyncio.Runner. Правильный ответ: «управление loop run упрощённо». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "m428"
  },
  {
    "topic": "collections",
    "q": "Что такое namedtuple _asdict в контексте Python?",
    "options": [
      "OrderedDict/dict полей",
      "json dumps auto",
      "list",
      "set"
    ],
    "answer": 0,
    "explain": "Удобный экспорт. Правильный ответ: «OrderedDict/dict полей».",
    "group": "Collections и itertools",
    "id": "m429"
  },
  {
    "topic": "itertools",
    "q": "Что такое chain.from_iterable в контексте Python?",
    "options": [
      "сплющивает один уровень",
      "deep flatten any",
      "product",
      "zip"
    ],
    "answer": 0,
    "explain": "Без распаковки *huge. Правильный ответ: «сплющивает один уровень».",
    "group": "Collections и itertools",
    "id": "m430"
  },
  {
    "topic": "functools",
    "q": "Что вернёт cached_property не thread-safe из коробки идеально?",
    "options": [
      "да, нюансы гонок",
      "полностью safe всегда",
      "async only safe",
      "process safe"
    ],
    "answer": 0,
    "explain": "Документируй модель. Правильный ответ: «да, нюансы гонок».",
    "group": "Collections и itertools",
    "id": "m431"
  },
  {
    "topic": "GIL",
    "q": "Что вернёт nogil / free-threading статус?",
    "options": [
      "эксперименты/опции новых версий",
      "уже default везде без оговорок",
      "отменён навсегда",
      "только Jython"
    ],
    "answer": 0,
    "explain": "Следи за релизом CPython. Правильный ответ: «эксперименты/опции новых версий». GIL (Global Interpreter Lock) ограничивает параллельное исполнение байткода в CPython.",
    "group": "Потоки, процессы, GIL",
    "id": "m432"
  },
  {
    "topic": "multiprocessing",
    "q": "Что такое initializer у Pool в контексте Python?",
    "options": [
      "setup в worker process",
      "в parent only",
      "async",
      "import ban"
    ],
    "answer": 0,
    "explain": "Состояние воркера. Правильный ответ: «setup в worker process».",
    "group": "Потоки, процессы, GIL",
    "id": "m433"
  },
  {
    "topic": "dataclasses",
    "q": "Что вернёт field(hash=False)?",
    "options": [
      "исключает из __hash__",
      "из init",
      "из repr always",
      "из annotations"
    ],
    "answer": 0,
    "explain": "Тонкая настройка. Правильный ответ: «исключает из __hash__».",
    "group": "Typing и dataclasses",
    "id": "m434"
  },
  {
    "topic": "context",
    "q": "Что такое redirect_stdout в контексте Python?",
    "options": [
      "временно подменяет sys.stdout",
      "logging",
      "subprocess",
      "files only Path"
    ],
    "answer": 0,
    "explain": "contextlib. Правильный ответ: «временно подменяет sys.stdout».",
    "group": "Исключения и контекст",
    "id": "m435"
  },
  {
    "topic": "магические",
    "q": "Что такое __bytes__ в контексте Python?",
    "options": [
      "bytes(obj)",
      "str",
      "repr",
      "format"
    ],
    "answer": 0,
    "explain": "Байтовое представление. Правильный ответ: «bytes(obj)».",
    "group": "Контекст и магические методы",
    "id": "m436"
  },
  {
    "topic": "SQL",
    "q": "Что вернёт UPSERT (ON CONFLICT)?",
    "options": [
      "вставить или обновить",
      "только delete",
      "truncate",
      "vacuum"
    ],
    "answer": 0,
    "explain": "Идемпотентные записи. Правильный ответ: «вставить или обновить».",
    "group": "Веб и API",
    "id": "m437"
  },
  {
    "topic": "HTTP",
    "q": "Что вернёт HTTP/2 multiplexing?",
    "options": [
      "много стримов на соединении",
      "только один request",
      "UDP",
      "SMTP"
    ],
    "answer": 0,
    "explain": "Меньше head-of-line на уровне HTTP/1. Правильный ответ: «много стримов на соединении».",
    "group": "Веб и API",
    "id": "m438"
  },
  {
    "topic": "FastAPI",
    "q": "Что такое OAuth2PasswordBearer в контексте Python?",
    "options": [
      "схема доставания токена",
      "ORM user",
      "JWT decode auto complete security",
      "CORS"
    ],
    "answer": 0,
    "explain": "Каркас auth. Правильный ответ: «схема доставания токена».",
    "group": "Веб и API",
    "id": "m439"
  },
  {
    "topic": "тесты",
    "q": "Что означает «doctest проверяет»?",
    "options": [
      "примеры в docstring",
      "типы",
      "coverage",
      "perf"
    ],
    "answer": 0,
    "explain": "Живая документация. Правильный ответ: «примеры в docstring».",
    "group": "Тесты и качество",
    "id": "m440"
  },
  {
    "topic": "logging",
    "q": "Что такое Logger.propagate в контексте Python?",
    "options": [
      "передача родителям",
      "stop all",
      "change level",
      "format"
    ],
    "answer": 0,
    "explain": "Иерархия. Правильный ответ: «передача родителям».",
    "group": "Тесты и качество",
    "id": "m441"
  },
  {
    "topic": "typing",
    "q": "Что вернёт Protocol с @property?",
    "options": [
      "структурные атрибуты",
      "запрещено",
      "только methods",
      "runtime always full"
    ],
    "answer": 0,
    "explain": "Модели данных. Правильный ответ: «структурные атрибуты». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m442"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт StreamReader/Writer?",
    "options": [
      "высокоуровневые потоки TCP",
      "файлы pathlib",
      "HTTP router",
      "subprocess only"
    ],
    "answer": 0,
    "explain": "asyncio streams. Правильный ответ: «высокоуровневые потоки TCP». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "m443"
  },
  {
    "topic": "collections",
    "q": "Что такое deque rotate в контексте Python?",
    "options": [
      "циклический сдвиг",
      "sort",
      "reverse copy list",
      "shuffle"
    ],
    "answer": 0,
    "explain": "Эффективно с концов. Правильный ответ: «циклический сдвиг».",
    "group": "Collections и itertools",
    "id": "m444"
  },
  {
    "topic": "regex",
    "q": "Что такое possessive quantifiers в regex module в контексте Python?",
    "options": [
      "сторонний regex иногда богаче re",
      "идентичен re всегда",
      "нет нигде",
      "только bytes re"
    ],
    "answer": 0,
    "explain": "stdlib re ≠ regex. Правильный ответ: «сторонний regex иногда богаче re».",
    "group": "Stdlib и производительность",
    "id": "m445"
  },
  {
    "topic": "performance",
    "q": "Что означает «интернирование вручную sys.intern»?",
    "options": [
      "для повторяющихся str-ключей",
      "для всех объектов",
      "для list",
      "для async"
    ],
    "answer": 0,
    "explain": "Память словарей. Правильный ответ: «для повторяющихся str-ключей». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "m446"
  },
  {
    "topic": "DI",
    "q": "Что означает «ambient context антипаттерн когда»?",
    "options": [
      "скрытые глобальные зависимости",
      "явный init",
      "typed ports",
      "tests fakes"
    ],
    "answer": 0,
    "explain": "Невидимые связи. Правильный ответ: «скрытые глобальные зависимости».",
    "group": "Веб и API",
    "id": "m447"
  },
  {
    "topic": "weakref",
    "q": "Что такое ReferenceType callback в контексте Python?",
    "options": [
      "при смерти объекта",
      "при создании",
      "при hash",
      "при print"
    ],
    "answer": 0,
    "explain": "Слабые колбэки. Правильный ответ: «при смерти объекта».",
    "group": "Stdlib и производительность",
    "id": "m448"
  },
  {
    "topic": "struct",
    "q": "Что вернёт native size alignment @?",
    "options": [
      "зависит от платформы",
      "всегда packed",
      "network always",
      "UTF"
    ],
    "answer": 0,
    "explain": "Формат @ vs =. Правильный ответ: «зависит от платформы».",
    "group": "Stdlib и производительность",
    "id": "m449"
  },
  {
    "topic": "heapq",
    "q": "Что вернёт merge(*iters)?",
    "options": [
      "слияние sorted-итераторов",
      "sort unsorted",
      "unique",
      "shuffle"
    ],
    "answer": 0,
    "explain": "Как multi-pointer merge. Правильный ответ: «слияние sorted-итераторов».",
    "group": "Collections и itertools",
    "id": "m450"
  },
  {
    "topic": "subprocess",
    "q": "Что такое Popen.communicate в контексте Python?",
    "options": [
      "обмен с процессом + wait",
      "nonblocking forever без wait",
      "только kill",
      "shell"
    ],
    "answer": 0,
    "explain": "Избежать deadlock pipe. Правильный ответ: «обмен с процессом + wait».",
    "group": "Stdlib и производительность",
    "id": "m451"
  },
  {
    "topic": "tempfile",
    "q": "Что такое SpooledTemporaryFile в контексте Python?",
    "options": [
      "сначала RAM, потом диск",
      "только диск",
      "только RAM forever",
      "S3"
    ],
    "answer": 0,
    "explain": "Порог max_size. Правильный ответ: «сначала RAM, потом диск».",
    "group": "Stdlib и производительность",
    "id": "m452"
  },
  {
    "topic": "import",
    "q": "Что позволяет zipimport?",
    "options": [
      "импорт из zip",
      "только wheel build",
      "pip download",
      "venv"
    ],
    "answer": 0,
    "explain": "Path entry. Правильный ответ: «импорт из zip».",
    "group": "Stdlib и производительность",
    "id": "m453"
  },
  {
    "topic": "enum",
    "q": "Что вернёт Enum'ы сравнимы с int если?",
    "options": [
      "IntEnum / IntFlag",
      "всегда",
      "никогда",
      "только StrEnum"
    ],
    "answer": 0,
    "explain": "Отдельные типы. Правильный ответ: «IntEnum / IntFlag».",
    "group": "Typing и dataclasses",
    "id": "m454"
  },
  {
    "topic": "match",
    "q": "Что означает паттерн match case _ if guard в Python 3.10+?",
    "options": [
      "guard условие",
      "wildcard запрещён с if",
      "bitwise",
      "async"
    ],
    "answer": 0,
    "explain": "Паттерн + условие. Правильный ответ: «guard условие».",
    "group": "Typing и dataclasses",
    "id": "m455"
  },
  {
    "topic": "args",
    "q": "Что означает «KeywordTypeError при лишнем имени»?",
    "options": [
      "TypeError",
      "KeyError",
      "NameError",
      "SyntaxError runtime"
    ],
    "answer": 0,
    "explain": "Неожиданный kwargs. Правильный ответ: «TypeError».",
    "group": "Typing и dataclasses",
    "id": "m456"
  },
  {
    "topic": "context",
    "q": "Что такое ContextDecorator в контексте Python?",
    "options": [
      "CM + decorator сразу",
      "только async",
      "lock",
      "exitstack"
    ],
    "answer": 0,
    "explain": "Двойной интерфейс. Правильный ответ: «CM + decorator сразу».",
    "group": "Исключения и контекст",
    "id": "m457"
  },
  {
    "topic": "магические",
    "q": "Что такое __reversed__ в контексте Python?",
    "options": [
      "кастом reversed()",
      "sort",
      "iter only",
      "len"
    ],
    "answer": 0,
    "explain": "Протокол. Правильный ответ: «кастом reversed()».",
    "group": "Контекст и магические методы",
    "id": "m458"
  },
  {
    "topic": "SQL",
    "q": "Что такое prepared statements в контексте Python?",
    "options": [
      "переиспользование плана + безопасность",
      "ORM only",
      "JSON",
      "миграция"
    ],
    "answer": 0,
    "explain": "Меньше parse/injection. Правильный ответ: «переиспользование плана + безопасность».",
    "group": "Веб и API",
    "id": "m459"
  },
  {
    "topic": "HTTP",
    "q": "Что такое circuit breaker в контексте Python?",
    "options": [
      "временно стопит вызовы к больному сервису",
      "retry forever",
      "кэш DNS",
      "TLS"
    ],
    "answer": 0,
    "explain": "Устойчивость. Правильный ответ: «временно стопит вызовы к больному сервису».",
    "group": "Веб и API",
    "id": "m460"
  },
  {
    "topic": "тесты",
    "q": "Что такое mutation testing в контексте Python?",
    "options": [
      "ломает код и смотрит, падают ли тесты",
      "fuzz network",
      "load",
      "snapshot"
    ],
    "answer": 0,
    "explain": "Сила suite. Правильный ответ: «ломает код и смотрит, падают ли тесты».",
    "group": "Тесты и качество",
    "id": "m461"
  },
  {
    "topic": "logging",
    "q": "Что возвращает Filter.filter?",
    "options": [
      "True чтобы пропустить запись",
      "строку",
      "level",
      "handler"
    ],
    "answer": 0,
    "explain": "Булев отбор. Правильный ответ: «True чтобы пропустить запись».",
    "group": "Тесты и качество",
    "id": "m462"
  },
  {
    "topic": "typing",
    "q": "Что такое TypedDict inheritance в контексте Python?",
    "options": [
      "можно расширять/переопределять ключи по правилам",
      "запрещено",
      "как dataclass frozen auto",
      "Enum"
    ],
    "answer": 0,
    "explain": "Структуры словарей. Правильный ответ: «можно расширять/переопределять ключи по правилам». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m463"
  },
  {
    "topic": "asyncio",
    "q": "Что такое incomplete Task на shutdown в контексте Python?",
    "options": [
      "нужно cancel/await корректно",
      "игнор безопасен всегда",
      "auto join threads",
      "OS kill only"
    ],
    "answer": 0,
    "explain": "Предупреждения loop.close. Правильный ответ: «нужно cancel/await корректно». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "m464"
  },
  {
    "topic": "collections",
    "q": "Что вернёт Counter.subtract?",
    "options": [
      "может уйти в минус",
      "как - но clip 0",
      "удаляет ключи <1 always",
      "ошибка на минус"
    ],
    "answer": 0,
    "explain": "Отличие от -. Правильный ответ: «может уйти в минус».",
    "group": "Collections и itertools",
    "id": "m465"
  },
  {
    "topic": "itertools",
    "q": "Что вернёт accumulate с func=operator.mul?",
    "options": [
      "накопительное произведение",
      "sum only",
      "max only",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Кастомная свёртка. Правильный ответ: «накопительное произведение».",
    "group": "Collections и itertools",
    "id": "m466"
  },
  {
    "topic": "functools",
    "q": "Что означает «singledispatch регистрирует»?",
    "options": [
      "перегрузки по типу",
      "по имени аргумента любому",
      "по kwargs only",
      "async"
    ],
    "answer": 0,
    "explain": "@f.register(int). Правильный ответ: «перегрузки по типу».",
    "group": "Collections и itertools",
    "id": "m467"
  },
  {
    "topic": "GIL",
    "q": "Что означает «время в чистом Python CPU bound на 2 threads»?",
    "options": [
      "часто ≈1 ядро из-за GIL",
      "линейный x2 всегда",
      "x4",
      "zero"
    ],
    "answer": 0,
    "explain": "Классический вопрос собеса. Правильный ответ: «часто ≈1 ядро из-за GIL». GIL (Global Interpreter Lock) ограничивает параллельное исполнение байткода в CPython.",
    "group": "Потоки, процессы, GIL",
    "id": "m468"
  },
  {
    "topic": "multiprocessing",
    "q": "Что вернёт массив Array('i', n)?",
    "options": [
      "shared typed buffer",
      "list proxy",
      "numpy always",
      "bytes string"
    ],
    "answer": 0,
    "explain": "sharedctypes. Правильный ответ: «shared typed buffer».",
    "group": "Потоки, процессы, GIL",
    "id": "m469"
  },
  {
    "topic": "dataclasses",
    "q": "Что возвращает fields()?",
    "options": [
      "кортеж Field",
      "dict values",
      "json",
      "annotations raw only"
    ],
    "answer": 0,
    "explain": "Интроспекция. Правильный ответ: «кортеж Field».",
    "group": "Typing и dataclasses",
    "id": "m470"
  },
  {
    "topic": "context",
    "q": "Что означает «suppress можно с несколькими типами»?",
    "options": [
      "да",
      "нет",
      "только Exception",
      "только OSError"
    ],
    "answer": 0,
    "explain": "Как except tuple. Правильный ответ: «да».",
    "group": "Исключения и контекст",
    "id": "m471"
  },
  {
    "topic": "магические",
    "q": "Что означает «__contains__ обслуживает»?",
    "options": [
      "in",
      "is",
      "==",
      "for"
    ],
    "answer": 0,
    "explain": "Членство. Правильный ответ: «in».",
    "group": "Контекст и магические методы",
    "id": "m472"
  },
  {
    "topic": "HTTP",
    "q": "Что вернёт idempotency-key header паттерн?",
    "options": [
      "безопасный повтор POST",
      "кэш ETag",
      "CORS",
      "JWT refresh only"
    ],
    "answer": 0,
    "explain": "Платёжные API. Правильный ответ: «безопасный повтор POST».",
    "group": "Веб и API",
    "id": "m473"
  },
  {
    "topic": "SQL",
    "q": "Что такое covering index в контексте Python?",
    "options": [
      "индекс закрывает запрос без heap",
      "полный table scan",
      "foreign key",
      "view"
    ],
    "answer": 0,
    "explain": "Меньше I/O. Правильный ответ: «индекс закрывает запрос без heap».",
    "group": "Веб и API",
    "id": "m474"
  },
  {
    "topic": "тесты",
    "q": "Что такое pytest hook pytest_configure в контексте Python?",
    "options": [
      "плагинная настройка",
      "fixture data",
      "assert rewrite off auto",
      "collect only ban"
    ],
    "answer": 0,
    "explain": "Расширение pytest. Правильный ответ: «плагинная настройка».",
    "group": "Тесты и качество",
    "id": "m475"
  },
  {
    "topic": "logging",
    "q": "Что означает «basicConfig повторный вызов»?",
    "options": [
      "часто no-op если уже handlers",
      "всегда пересоздаёт",
      "удаляет root",
      "error"
    ],
    "answer": 0,
    "explain": "Идиома один раз. Правильный ответ: «часто no-op если уже handlers».",
    "group": "Тесты и качество",
    "id": "m476"
  },
  {
    "topic": "typing",
    "q": "Что такое get_type_hints в контексте Python?",
    "options": [
      "резолвит аннотации",
      "runtime enforce",
      "mypy daemon",
      "compile"
    ],
    "answer": 0,
    "explain": "typing / inspect. Правильный ответ: «резолвит аннотации». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m477"
  },
  {
    "topic": "asyncio",
    "q": "Что такое call_soon_threadsafe в контексте Python?",
    "options": [
      "планирование из другого потока",
      "из корутины предпочтительнее create_task",
      "process",
      "GIL free"
    ],
    "answer": 0,
    "explain": "Интеграция threads↔loop. Правильный ответ: «планирование из другого потока». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "m478"
  },
  {
    "topic": "collections",
    "q": "Что вернёт defaultdict без factory при []?",
    "options": [
      "TypeError/нужен factory",
      "создаёт None",
      "KeyError как dict",
      "0"
    ],
    "answer": 0,
    "explain": "Обязателен default_factory. Правильный ответ: «TypeError/нужен factory».",
    "group": "Collections и itertools",
    "id": "m479"
  },
  {
    "topic": "regex",
    "q": "Что означает «\\b граница слова»?",
    "options": [
      "word boundary",
      "backspace",
      "begin",
      "byte"
    ],
    "answer": 0,
    "explain": "Частый паттерн. Правильный ответ: «word boundary».",
    "group": "Stdlib и производительность",
    "id": "m480"
  },
  {
    "topic": "performance",
    "q": "Что вернёт много append затем join для str частей?",
    "options": [
      "хороший паттерн",
      "хуже += всегда в CPython без оговорок? не опирайся",
      "запрещён",
      "только bytearray"
    ],
    "answer": 0,
    "explain": "Читаемо и предсказуемо. Правильный ответ: «хороший паттерн». Производительность: измеряй профайлером, оптимизируй горячие участки.",
    "group": "Stdlib и производительность",
    "id": "m481"
  },
  {
    "topic": "DI",
    "q": "Что такое interface segregation в typing в контексте Python?",
    "options": [
      "узкие Protocol вместо жирных ABC",
      "один God Protocol",
      "Any everywhere",
      "dict[str,Any] only"
    ],
    "answer": 0,
    "explain": "ISP. Правильный ответ: «узкие Protocol вместо жирных ABC».",
    "group": "Веб и API",
    "id": "m482"
  },
  {
    "topic": "weakref",
    "q": "Что такое getweakrefcount в контексте Python?",
    "options": [
      "число слабых ссылок",
      "refcount сильных",
      "size",
      "hash"
    ],
    "answer": 0,
    "explain": "Интроспекция. Правильный ответ: «число слабых ссылок».",
    "group": "Stdlib и производительность",
    "id": "m483"
  },
  {
    "topic": "struct",
    "q": "Что вернёт bool в format?",
    "options": [
      "'?'",
      "'b' only",
      "'i'",
      "нет"
    ],
    "answer": 0,
    "explain": "Символ ?. Правильный ответ: «'?'».",
    "group": "Stdlib и производительность",
    "id": "m484"
  },
  {
    "topic": "heapq",
    "q": "Что такое nsmallest в контексте Python?",
    "options": [
      "k наименьших",
      "полная сортировка обязательна внешне",
      "max heap",
      "unique"
    ],
    "answer": 0,
    "explain": "Симметрично nlargest. Правильный ответ: «k наименьших».",
    "group": "Collections и itertools",
    "id": "m485"
  },
  {
    "topic": "subprocess",
    "q": "Что вернёт capture_output=True эквивалент?",
    "options": [
      "stdout/err PIPE",
      "DEVNULL",
      "inherit",
      "shell"
    ],
    "answer": 0,
    "explain": "Удобный флаг run. Правильный ответ: «stdout/err PIPE».",
    "group": "Stdlib и производительность",
    "id": "m486"
  },
  {
    "topic": "tempfile",
    "q": "Что вернёт gettempdir()?",
    "options": [
      "каталог временных файлов",
      "home",
      "cwd",
      "root"
    ],
    "answer": 0,
    "explain": "Платформенный tmp. Правильный ответ: «каталог временных файлов».",
    "group": "Stdlib и производительность",
    "id": "m487"
  },
  {
    "topic": "import",
    "q": "Что такое MetaPathFinder в контексте Python?",
    "options": [
      "поиск модулей на meta_path",
      "path entry only",
      "pip",
      "wheel"
    ],
    "answer": 0,
    "explain": "PEP 451. Правильный ответ: «поиск модулей на meta_path».",
    "group": "Stdlib и производительность",
    "id": "m488"
  },
  {
    "topic": "enum",
    "q": "Что вернёт auto() значения?",
    "options": [
      "по правилам Enum/Flag",
      "random uuid",
      "hash id",
      "None"
    ],
    "answer": 0,
    "explain": "Инкремент обычно. Правильный ответ: «по правилам Enum/Flag».",
    "group": "Typing и dataclasses",
    "id": "m489"
  },
  {
    "topic": "match",
    "q": "Что вернёт _, **rest}:?",
    "options": [
      "остальные ключи в rest",
      "ошибка",
      "list",
      "set"
    ],
    "answer": 0,
    "explain": "Mapping rest. Правильный ответ: «остальные ключи в rest».",
    "group": "Typing и dataclasses",
    "id": "m490"
  },
  {
    "topic": "args",
    "q": "Что вернёт Positional-only полезен для?",
    "options": [
      "стабильного API имён параметров",
      "скорости GIL",
      "async",
      "JSON"
    ],
    "answer": 0,
    "explain": "Можно переименовать внутренне. Правильный ответ: «стабильного API имён параметров».",
    "group": "Typing и dataclasses",
    "id": "m491"
  },
  {
    "topic": "context",
    "q": "Что такое ExitStack.callback в контексте Python?",
    "options": [
      "регистрирует произвольный teardown",
      "только CM",
      "async",
      "GC"
    ],
    "answer": 0,
    "explain": "Гибкая уборка. Правильный ответ: «регистрирует произвольный teardown».",
    "group": "Исключения и контекст",
    "id": "m492"
  },
  {
    "topic": "магические",
    "q": "Что такое __length_hint__ в контексте Python?",
    "options": [
      "оценка длины для list(it)",
      "точный len обязателен",
      "hash",
      "bool"
    ],
    "answer": 0,
    "explain": "Оптимизация аллокаций. Правильный ответ: «оценка длины для list(it)».",
    "group": "Контекст и магические методы",
    "id": "m493"
  },
  {
    "topic": "замыкания",
    "q": "Что выведет код?",
    "options": [
      "2 2 2",
      "0 1 2",
      "ошибка",
      "None None None"
    ],
    "answer": 0,
    "explain": "Позднее связывание i. Правильный ответ: «2 2 2».",
    "code": "funcs = []\nfor i in range(3):\n    funcs.append(lambda: i)\nprint(funcs[0](), funcs[1](), funcs[2]())",
    "group": "Декораторы и замыкания",
    "id": "m494"
  },
  {
    "topic": "замыкания",
    "q": "Что выведет код?",
    "options": [
      "0 1 2",
      "2 2 2",
      "ошибка",
      "1 1 1"
    ],
    "answer": 0,
    "explain": "Default фиксирует i. Правильный ответ: «0 1 2».",
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
    "explain": "Генератор по next. Правильный ответ: «0\n1\n2».",
    "code": "def g():\n    yield 0\n    yield 1\n    yield 2\nfor x in g():\n    print(x)",
    "group": "Генераторы и итераторы",
    "id": "m496"
  },
  {
    "topic": "генераторы",
    "q": "Что выведет код?",
    "options": [
      "StopIteration",
      "None",
      "IndexError",
      "False"
    ],
    "answer": 0,
    "explain": "Протокол итератора. Правильный ответ: «StopIteration».",
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
    "explain": "g = deco(g) при определении. Правильный ответ: «wrap\nf».",
    "code": "def deco(fn):\n    print('wrap')\n    return fn\n@deco\ndef f():\n    print('f')\nf()",
    "group": "Декораторы и замыкания",
    "id": "m498"
  },
  {
    "topic": "GIL",
    "q": "Что выведет код?",
    "options": [
      "multiprocessing / native",
      "больше threading",
      "time.sleep",
      "print"
    ],
    "answer": 0,
    "explain": "GIL мешает CPU threads. Правильный ответ: «multiprocessing / native».",
    "code": "# cpu_bound()\n# threading vs multiprocessing?",
    "group": "Потоки, процессы, GIL",
    "id": "m499"
  },
  {
    "topic": "asyncio",
    "q": "Что выведет код?",
    "options": [
      "async def",
      "обычный def",
      "lambda",
      "class"
    ],
    "answer": 0,
    "explain": "Только в корутине. Правильный ответ: «async def».",
    "code": "async def main():\n    await asyncio.sleep(0)",
    "group": "Asyncio",
    "id": "m500"
  },
  {
    "topic": "dict",
    "q": "Что выведет код?",
    "options": [
      "один list на все ключи",
      "KeyError",
      "нет опасности",
      "deepcopy"
    ],
    "answer": 0,
    "explain": "fromkeys шарит value. Правильный ответ: «один list на все ключи».",
    "code": "d = dict.fromkeys(['a', 'b'], [])\nd['a'].append(1)\nprint(d['b'])",
    "group": "Collections и itertools",
    "id": "m501"
  },
  {
    "topic": "comprehensions",
    "q": "Что выведет код?",
    "options": [
      "нет (Py3)",
      "да как в 2.7",
      "ошибка",
      "только в dictcomp"
    ],
    "answer": 0,
    "explain": "Свой scope у comprehension. Правильный ответ: «нет (Py3)».",
    "code": "[i for i in range(3)]\n# i ?",
    "group": "Генераторы и итераторы",
    "id": "m502"
  },
  {
    "topic": "магические",
    "q": "Что выведет код?",
    "options": [
      "hi",
      "Obj()",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "__str__ для print. Правильный ответ: «hi».",
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
    "explain": "Первые 3. Правильный ответ: «[0, 1, 2]».",
    "code": "from itertools import islice, count\nprint(list(islice(count(), 3)))",
    "group": "Collections и itertools",
    "id": "m504"
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "из кэша, без print work",
      "снова work",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "lru_cache. Правильный ответ: «из кэша, без print work».",
    "code": "from functools import lru_cache\n@lru_cache\ndef heavy(x):\n    print('work')\n    return x*x\nheavy(2)\nheavy(2)",
    "group": "Collections и itertools",
    "id": "m505"
  },
  {
    "topic": "context",
    "q": "Что выведет код?",
    "options": [
      "enter\nbody\nexit",
      "body\nenter\nexit",
      "enter\nexit\nbody",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Порядок CM. Правильный ответ: «enter\nbody\nexit».",
    "code": "class CM:\n    def __enter__(self):\n        print('enter')\n        return self\n    def __exit__(self, *a):\n        print('exit')\nwith CM():\n    print('body')",
    "group": "Исключения и контекст",
    "id": "m506"
  },
  {
    "topic": "typing",
    "q": "Что выведет код?",
    "options": [
      "обычно нет",
      "да всегда TypeError",
      "только mypy runtime",
      "GIL check"
    ],
    "answer": 0,
    "explain": "Аннотации не enforced. Правильный ответ: «обычно нет».",
    "code": "def f(xs: list[int]):\n    return xs\nprint(f(['a']))",
    "group": "Typing и dataclasses",
    "id": "m507"
  },
  {
    "topic": "dataclasses",
    "q": "Что выведет код?",
    "options": [
      "[1]",
      "[]",
      "ошибка shared",
      "None"
    ],
    "answer": 0,
    "explain": "default_factory. Правильный ответ: «[1]».",
    "code": "from dataclasses import dataclass, field\n@dataclass\nclass A:\n    xs: list = field(default_factory=list)\na, b = A(), A()\na.xs.append(1)\nprint(b.xs)",
    "group": "Typing и dataclasses",
    "id": "m508"
  },
  {
    "topic": "sort",
    "q": "Что выведет код?",
    "options": [
      "стабильный (сохраняет порядок)",
      "random",
      "по id",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Timsort stable. Правильный ответ: «стабильный (сохраняет порядок)».",
    "code": "xs = [('b', 1), ('a', 1)]\nprint(sorted(xs, key=lambda t: t[1]))",
    "group": "Stdlib и производительность",
    "id": "m509"
  },
  {
    "topic": "exceptions",
    "q": "Что выведет код?",
    "options": [
      "сообщение 'x'",
      "тип only",
      "traceback only",
      "None"
    ],
    "answer": 0,
    "explain": "as e. Правильный ответ: «сообщение 'x'».",
    "code": "try:\n    raise ValueError('x')\nexcept ValueError as e:\n    print(e)",
    "group": "Исключения и контекст",
    "id": "m510"
  },
  {
    "topic": "args",
    "q": "Что выведет код?",
    "options": [
      "f(a=1)",
      "f(1)",
      "оба",
      "никак"
    ],
    "answer": 0,
    "explain": "keyword-only после *. Правильный ответ: «f(a=1)».",
    "code": "def f(*, a):\n    return a",
    "group": "Typing и dataclasses",
    "id": "m511"
  },
  {
    "topic": "args",
    "q": "Что выведет код?",
    "options": [
      "f(1)",
      "f(a=1)",
      "оба",
      "f()"
    ],
    "answer": 0,
    "explain": "positional-only до /. Правильный ответ: «f(1)».",
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
    "explain": "Присвоение в выражении. Правильный ответ: «3 True».",
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
    "explain": "case 1. Правильный ответ: «one».",
    "code": "x = 1\nmatch x:\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "group": "Typing и dataclasses",
    "id": "m514"
  },
  {
    "topic": "is",
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Кэш малых int. Правильный ответ: «True».",
    "code": "print(256 is 256)",
    "group": "Stdlib и производительность",
    "id": "m515"
  },
  {
    "topic": "performance",
    "q": "Что выведет код?",
    "options": [
      "set",
      "list",
      "tuple всегда",
      "str"
    ],
    "answer": 0,
    "explain": "Среднее O(1). Правильный ответ: «set».",
    "code": "s = set(range(10000))\nprint(9999 in s)",
    "group": "Stdlib и производительность",
    "id": "m516"
  },
  {
    "topic": "json",
    "q": "Что выведет код?",
    "options": [
      "TypeError без default",
      "станет list",
      "OK",
      "None"
    ],
    "answer": 0,
    "explain": "set не JSON. Правильный ответ: «TypeError без default».",
    "code": "import json\njson.dumps({1, 2})",
    "group": "Stdlib и производительность",
    "id": "m517"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "Path('a/b') или a\\b",
      "ошибка",
      "ab",
      "list"
    ],
    "answer": 0,
    "explain": "Оператор /. Правильный ответ: «Path('a/b') или a\\b».",
    "code": "from pathlib import Path\nprint(Path('a') / 'b')",
    "group": "Stdlib и производительность",
    "id": "m518"
  },
  {
    "topic": "ООП",
    "q": "Что выведет код?",
    "options": [
      "B",
      "A",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Метод ищется в классе экземпляра: B.hello перекрывает A.hello.",
    "code": "class A:\n    def hello(self):\n        return 'A'\nclass B(A):\n    def hello(self):\n        return 'B'\nprint(B().hello())",
    "group": "ООП продвинутый",
    "id": "m519"
  },
  {
    "topic": "ООП",
    "q": "Что выведет код?",
    "options": [
      "A.x",
      "B.x",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "super().hello() вызывает реализацию родителя. Правильный ответ: «A.x».",
    "code": "class A:\n    def hello(self):\n        return 'A.x'\nclass B(A):\n    def hello(self):\n        return super().hello()\nprint(B().hello())",
    "group": "ООП продвинутый",
    "id": "m520"
  },
  {
    "topic": "ООП",
    "q": "Что вернёт @property обычно?",
    "options": [
      "даёт доступ как к атрибуту, считая через метод",
      "делает метод статическим",
      "удаляет атрибут",
      "только для private"
    ],
    "answer": 0,
    "explain": "obj.x вызывает getter без скобок. Правильный ответ: «даёт доступ как к атрибуту, считая через метод».",
    "group": "ООП продвинутый",
    "id": "m521"
  },
  {
    "topic": "ООП",
    "q": "Что выведет код?",
    "options": [
      "3",
      "ошибка",
      "None",
      "0"
    ],
    "answer": 0,
    "explain": "property x читает _x. Правильный ответ: «3».",
    "code": "class C:\n    def __init__(self):\n        self._x = 3\n    @property\n    def x(self):\n        return self._x\nprint(C().x)",
    "group": "ООП продвинутый",
    "id": "m522"
  },
  {
    "topic": "ООП",
    "q": "В чём разница: __init__ vs __new__?",
    "options": [
      "__new__ создаёт объект, __init__ инициализирует",
      "синонимы",
      "__init__ создаёт, __new__ нет",
      "только __init__ существует"
    ],
    "answer": 0,
    "explain": "__new__ — конструктор (редко нужен), __init__ — инициализатор. Правильный ответ: «__new__ создаёт объект, __init__ инициализирует».",
    "group": "ООП продвинутый",
    "id": "m523"
  },
  {
    "topic": "ООП",
    "q": "Что вернёт C(A,B) порядок?",
    "options": [
      "C → A → B → object (примерно, C3)",
      "C → B → A всегда",
      "случайный",
      "ошибка всегда"
    ],
    "answer": 0,
    "explain": "C3 linearization; смотри Class.__mro__. Правильный ответ: «C → A → B → object (примерно, C3)».",
    "group": "ООП продвинутый",
    "id": "m524"
  },
  {
    "topic": "ООП",
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "issubclass(bool, int) — True.",
    "code": "print(issubclass(bool, int))",
    "group": "ООП продвинутый",
    "id": "m525"
  },
  {
    "topic": "ООП",
    "q": "Зачем нужен __slots__?",
    "options": [
      "фиксирует атрибуты, экономит память (нет __dict__)",
      "ускоряет import",
      "включает GIL",
      "нужен для async"
    ],
    "answer": 0,
    "explain": "Экземпляры без произвольных атрибутов. Правильный ответ: «фиксирует атрибуты, экономит память (нет __dict__)».",
    "group": "ООП продвинутый",
    "id": "m526"
  },
  {
    "topic": "ООП",
    "q": "Что вернёт classmethod получает?",
    "options": [
      "класс (cls), не экземпляр",
      "только self",
      "модуль",
      "метакласс всегда"
    ],
    "answer": 0,
    "explain": "Удобно для альтернативных конструкторов. Правильный ответ: «класс (cls), не экземпляр».",
    "group": "ООП продвинутый",
    "id": "m527"
  },
  {
    "topic": "ООП",
    "q": "Что такое staticmethod?",
    "options": [
      "функция в классе без self/cls",
      "то же что classmethod",
      "абстрактный метод",
      "property"
    ],
    "answer": 0,
    "explain": "Не получает ни экземпляр, ни класс автоматически. Правильный ответ: «функция в классе без self/cls».",
    "group": "ООП продвинутый",
    "id": "m528"
  },
  {
    "topic": "декораторы",
    "q": "Что выведет код?",
    "options": [
      "wrap",
      "f",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Без functools.wraps у обёртки остаётся имя wrap, не f.",
    "code": "def deco(fn):\n    def wrap():\n        return fn()\n    return wrap\n@deco\ndef f():\n    pass\nprint(f.__name__)",
    "group": "Декораторы и замыкания",
    "id": "m529"
  },
  {
    "topic": "декораторы",
    "q": "Чем помогает functools.wraps?",
    "options": [
      "сохранить __name__/__doc__ исходной функции",
      "ускорить вызов",
      "убрать GIL",
      "сделать async"
    ],
    "answer": 0,
    "explain": "Копирует метаданные на обёртку. Правильный ответ: «сохранить __name__/__doc__ исходной функции».",
    "group": "Декораторы и замыкания",
    "id": "m530"
  },
  {
    "topic": "замыкания",
    "q": "Что выведет код?",
    "options": [
      "[2, 2, 2]",
      "[0, 1, 2]",
      "[1, 1, 1]",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Все lambda закрывают одну переменную i; после цикла i==2. Правильный ответ: «[2, 2, 2]».",
    "code": "fs = [lambda: i for i in range(3)]\nprint([f() for f in fs])",
    "group": "Декораторы и замыкания",
    "id": "m531"
  },
  {
    "topic": "замыкания",
    "q": "Выбери верный вариант: Как починить late binding в цикле?",
    "options": [
      "lambda i=i: i  (default аргумент)",
      "только global",
      "нельзя",
      "использовать list обязательно"
    ],
    "answer": 0,
    "explain": "Default фиксирует значение на каждой итерации. Правильный ответ: «lambda i=i: i  (default аргумент)».",
    "group": "Декораторы и замыкания",
    "id": "m532"
  },
  {
    "topic": "замыкания",
    "q": "Что выведет код?",
    "options": [
      "[0, 1, 2]",
      "[2, 2, 2]",
      "ошибка",
      "[1, 2, 3]"
    ],
    "answer": 0,
    "explain": "i=i в default сохраняет текущее i. Правильный ответ: «[0, 1, 2]».",
    "code": "fs = [lambda i=i: i for i in range(3)]\nprint([f() for f in fs])",
    "group": "Декораторы и замыкания",
    "id": "m533"
  },
  {
    "topic": "генераторы",
    "q": "Что вернёт Что делает next(gen) на исчерпанном генераторе?",
    "options": [
      "StopIteration",
      "None",
      "False",
      "перезапуск"
    ],
    "answer": 0,
    "explain": "Итератор закончился. Правильный ответ: «StopIteration».",
    "group": "Генераторы и итераторы",
    "id": "m534"
  },
  {
    "topic": "генераторы",
    "q": "Что вернёт gen = (x for x in range(3)); list(gen); list(gen) второй раз?",
    "options": [
      "[]",
      "[0,1,2]",
      "ошибка",
      "[0,1,2] снова"
    ],
    "answer": 0,
    "explain": "Генератор одноразовый — после exhaust пусто. Правильный ответ: «[]».",
    "group": "Генераторы и итераторы",
    "id": "m535"
  },
  {
    "topic": "генераторы",
    "q": "Что выведет код?",
    "options": [
      "1",
      "0",
      "None",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Первый next() доходит до первого yield и отдаёт 1.",
    "code": "def g():\n    x = yield 1\n    yield x\ngen = g()\nprint(next(gen))",
    "group": "Генераторы и итераторы",
    "id": "m536"
  },
  {
    "topic": "итераторы",
    "q": "Что вернёт iter(obj) ожидает?",
    "options": [
      "__iter__ или __getitem__",
      "только len",
      "только __next__",
      "pickle"
    ],
    "answer": 0,
    "explain": "Протокол итерации. Правильный ответ: «__iter__ или __getitem__».",
    "group": "Генераторы и итераторы",
    "id": "m537"
  },
  {
    "topic": "итераторы",
    "q": "Что выведет код?",
    "options": [
      "1",
      "StopIteration сразу",
      "None",
      "[1,2]"
    ],
    "answer": 0,
    "explain": "iter по списку; next берёт первый элемент. Правильный ответ: «1».",
    "code": "print(next(iter([1, 2])))",
    "group": "Генераторы и итераторы",
    "id": "m538"
  },
  {
    "topic": "itertools",
    "q": "Что выведет list(itertools.chain([1], [2, 3]))?",
    "options": [
      "[1, 2, 3]",
      "[[1],[2,3]]",
      "ошибка",
      "[1]"
    ],
    "answer": 0,
    "explain": "chain склеивает итерируемые подряд. Правильный ответ: «[1, 2, 3]».",
    "group": "Collections и itertools",
    "id": "m539"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[(1, 2), (3, 4)]",
      "[1,2,3,4]",
      "ошибка",
      "[(1,2,3,4)]"
    ],
    "answer": 0,
    "explain": "batched(n) группирует по n (3.12+). Если нет — skip? Better use classic:. Правильный ответ: «[(1, 2), (3, 4)]».",
    "code": "from itertools import islice\nit = iter([1, 2, 3, 4])\nprint([tuple(islice(it, 2)), tuple(islice(it, 2))])",
    "group": "Collections и itertools",
    "id": "m540"
  },
  {
    "topic": "itertools",
    "q": "Что даёт product('ab', repeat=2)?",
    "options": [
      "aa ab ba bb (как кортежи)",
      "только ab",
      "перестановки без повторов",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Декартово произведение. Правильный ответ: «aa ab ba bb (как кортежи)».",
    "group": "Collections и itertools",
    "id": "m541"
  },
  {
    "topic": "collections",
    "q": "Что вернёт d['x'].append(1) — что с d['x']?",
    "options": [
      "[1], ключ создался сам",
      "KeyError",
      "None",
      "ошибка типа"
    ],
    "answer": 0,
    "explain": "Фабрика list() вызывается для отсутствующего ключа. Правильный ответ: «[1], ключ создался сам».",
    "group": "Collections и itertools",
    "id": "m542"
  },
  {
    "topic": "collections",
    "q": "Что означает «namedtuple удобен тем, что»?",
    "options": [
      "immutable + доступ по имени поля",
      "мутабельный dict",
      "замена list",
      "async queue"
    ],
    "answer": 0,
    "explain": "Лёгкие записи без класса вручную. Правильный ответ: «immutable + доступ по имени поля».",
    "group": "Collections и itertools",
    "id": "m543"
  },
  {
    "topic": "collections",
    "q": "Что вернёт deque.popleft() сложность?",
    "options": [
      "O(1)",
      "O(n) как list.pop(0)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "Для очередей deque лучше list. Правильный ответ: «O(1)».",
    "group": "Collections и itertools",
    "id": "m544"
  },
  {
    "topic": "typing",
    "q": "Что вернёт list[int] в аннотации (3.9+) значит?",
    "options": [
      "подсказка типов, на runtime не проверяет сама",
      "runtime проверка всегда",
      "создаёт typed list",
      "запрещает append str"
    ],
    "answer": 0,
    "explain": "Проверяют mypy/pyright, не CPython по умолчанию. Правильный ответ: «подсказка типов, на runtime не проверяет сама».",
    "group": "Typing и dataclasses",
    "id": "m545"
  },
  {
    "topic": "typing",
    "q": "Что вернёт Optional[str] эквивалент?",
    "options": [
      "str | None",
      "str | int",
      "Union[str, int]",
      "Any"
    ],
    "answer": 0,
    "explain": "Значение str либо None. Правильный ответ: «str | None». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m546"
  },
  {
    "topic": "context",
    "q": "Что выведет код?",
    "options": [
      "enter\nexit",
      "enter",
      "exit",
      "ошибка"
    ],
    "answer": 0,
    "explain": "__enter__ затем тело, затем __exit__. Правильный ответ: «enter\nexit».",
    "code": "class CM:\n    def __enter__(self):\n        print('enter')\n        return self\n    def __exit__(self, *a):\n        print('exit')\nwith CM():\n    pass",
    "group": "Исключения и контекст",
    "id": "m547"
  },
  {
    "topic": "исключения",
    "q": "Что означает «except Exception не ловит»?",
    "options": [
      "BaseException вроде KeyboardInterrupt/SystemExit",
      "ValueError",
      "TypeError",
      "RuntimeError"
    ],
    "answer": 0,
    "explain": "Exception ⊂ BaseException; Ctrl+C не глотай без нужды. Правильный ответ: «BaseException вроде KeyboardInterrupt/SystemExit».",
    "group": "Исключения и контекст",
    "id": "m548"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт asyncio.gather(*tasks)?",
    "options": [
      "запускает конкурентно и ждёт все",
      "строго последовательно",
      "только первый",
      "убивает loop"
    ],
    "answer": 0,
    "explain": "Параллельные awaitables. Правильный ответ: «запускает конкурентно и ждёт все». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "m549"
  },
  {
    "topic": "asyncio",
    "q": "В чём разница: create_task vs await coro сразу?",
    "options": [
      "create_task планирует в фоне event loop",
      "синонимы",
      "create_task блокирует поток",
      "запрещено"
    ],
    "answer": 0,
    "explain": "Task начинает выполняться, пока ты делаешь другое. Правильный ответ: «create_task планирует в фоне event loop».",
    "group": "Asyncio",
    "id": "m550"
  },
  {
    "topic": "concurrency",
    "q": "Выбери верный вариант: Когда threading уместен?",
    "options": [
      "много I/O ожидания",
      "чистый CPU без release GIL",
      "вместо процессов всегда",
      "только Windows"
    ],
    "answer": 0,
    "explain": "Пока ждёшь сеть/диск, другой поток может работать. Правильный ответ: «много I/O ожидания».",
    "group": "Потоки, процессы, GIL",
    "id": "m551"
  },
  {
    "topic": "json",
    "q": "Что вернёт json.loads('[1, 2]') вернёт?",
    "options": [
      "[1, 2]",
      "'[1, 2]'",
      "tuple",
      "ошибка"
    ],
    "answer": 0,
    "explain": "loads парсит JSON-строку в Python-объект. Правильный ответ: «[1, 2]».",
    "group": "Stdlib и производительность",
    "id": "m552"
  },
  {
    "topic": "json",
    "q": "Что вернёт 'a'}) ключ станет?",
    "options": [
      "строкой '1'",
      "int 1 в JSON",
      "байтами",
      "ошибка всегда"
    ],
    "answer": 0,
    "explain": "JSON keys — строки. Правильный ответ: «строкой '1'».",
    "group": "Stdlib и производительность",
    "id": "m553"
  },
  {
    "topic": "регулярки",
    "q": "Что вернёт re.findall(r'\\d+', 'a12b3')?",
    "options": [
      "['12', '3']",
      "['1','2','3']",
      "['a12b3']",
      "[]"
    ],
    "answer": 0,
    "explain": "Все группы цифр подряд. Правильный ответ: «['12', '3']».",
    "group": "Stdlib и производительность",
    "id": "m554"
  },
  {
    "topic": "copy",
    "q": "В чём разница: copy.copy vs deepcopy?",
    "options": [
      "shallow копирует верх, nested — ссылки; deep — рекурсивно",
      "синонимы",
      "copy всегда deep",
      "deepcopy только list"
    ],
    "answer": 0,
    "explain": "Для вложенных мутабельных нужен deepcopy. Правильный ответ: «shallow копирует верх, nested — ссылки; deep — рекурсивно».",
    "group": "Stdlib и производительность",
    "id": "m555"
  },
  {
    "topic": "copy",
    "q": "Что выведет код?",
    "options": [
      "[1]",
      "[]",
      "ошибка",
      "[0]"
    ],
    "answer": 0,
    "explain": "shallow: внутренний list общий. Правильный ответ: «[1]».",
    "code": "import copy\na = [[]]\nb = copy.copy(a)\na[0].append(1)\nprint(b[0])",
    "group": "Stdlib и производительность",
    "id": "m556"
  },
  {
    "topic": "args",
    "q": "Что вернёт def f(a, /, b, *, c): — как вызвать верно?",
    "options": [
      "f(1, 2, c=3) или f(1, b=2, c=3)",
      "f(a=1, b=2, c=3)",
      "f(1, 2, 3)",
      "f(c=3, 1, 2)"
    ],
    "answer": 0,
    "explain": "a только позиционно; c только по имени; b — оба способа. Правильный ответ: «f(1, 2, c=3) или f(1, b=2, c=3)».",
    "group": "Typing и dataclasses",
    "id": "m557"
  },
  {
    "topic": "функции",
    "q": "Что выведет код?",
    "options": [
      "(1, 2)",
      "1",
      "ошибка",
      "[1,2]"
    ],
    "answer": 0,
    "explain": "Функция возвращает кортеж. Правильный ответ: «(1, 2)».",
    "code": "def f():\n    return 1, 2\nprint(f())",
    "group": "Функции и область видимости",
    "id": "m558"
  },
  {
    "topic": "comprehensions",
    "q": "Что вернёт [(x, y) for x in range(2) for y in range(2)] длина?",
    "options": [
      "4",
      "2",
      "3",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Декартово 2×2. Правильный ответ: «4».",
    "group": "Генераторы и итераторы",
    "id": "m559"
  },
  {
    "topic": "walrus",
    "q": "Что выведет код?",
    "options": [
      "5",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": ":= присваивает n и использует в выражении. Правильный ответ: «5».",
    "code": "if (n := len('hello')) > 3:\n    print(n)",
    "group": "Typing и dataclasses",
    "id": "m560"
  },
  {
    "topic": "f-string",
    "q": "Что выведет код?",
    "options": [
      "'x=10'",
      "'10'",
      "'x={x}'",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Отладочный = в f-string (3.8+). Правильный ответ: «'x=10'».",
    "code": "x = 10\nprint(f'{x=}')",
    "group": "Stdlib и производительность",
    "id": "m561"
  },
  {
    "topic": "bytes",
    "q": "Что вернёт b'hi'.decode() по умолчанию?",
    "options": [
      "utf-8 → 'hi'",
      "ascii only fail",
      "latin-1 always error",
      "возвращает bytes"
    ],
    "answer": 0,
    "explain": "decode() без encoding → utf-8. Правильный ответ: «utf-8 → 'hi'».",
    "group": "Stdlib и производительность",
    "id": "m562"
  },
  {
    "topic": "строки",
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "casefold сильнее lower для регистронезависимого сравнения (напр. немецкое ß). Правильный ответ: «True».",
    "code": "print('X'.casefold() == 'x')",
    "group": "Stdlib и производительность",
    "id": "m563"
  },
  {
    "topic": "декораторы",
    "q": "Что вернёт Что делает @functools.wraps(f)?",
    "options": [
      "копирует __name__/__doc__ с обёрнутой функции",
      "ускоряет вызов",
      "делает async",
      "убирает GIL"
    ],
    "answer": 0,
    "explain": "Иначе инспекция видит wrapper. Правильный ответ: «копирует __name__/__doc__ с обёрнутой функции».",
    "group": "Декораторы и замыкания",
    "id": "m564"
  },
  {
    "topic": "замыкания",
    "q": "Что выведет код?",
    "options": [
      "10",
      "0",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "nonlocal n позволяет менять enclosing переменную. Правильный ответ: «10».",
    "code": "def make():\n    n = 0\n    def inc():\n        nonlocal n\n        n += 10\n        return n\n    return inc\nprint(make()())",
    "group": "Декораторы и замыкания",
    "id": "m565"
  },
  {
    "topic": "декораторы",
    "q": "Что выведет код (по порядку)?",
    "options": [
      "before, затем 1",
      "только 1",
      "ошибка",
      "только before"
    ],
    "answer": 0,
    "explain": "Обёртка печатает before, затем возвращает 1 — print(f()) печатает 1. Правильный ответ: «before, затем 1».",
    "code": "def deco(f):\n    def wrap():\n        print('before')\n        return f()\n    return wrap\n@deco\ndef f():\n    return 1\nprint(f())",
    "group": "Декораторы и замыкания",
    "id": "m566"
  },
  {
    "topic": "генераторы",
    "q": "Что выведет код?",
    "options": [
      "1 2",
      "1 2 3",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Два next() забирают оба элемента генератора. Правильный ответ: «1 2».",
    "code": "g = (x for x in [1, 2])\nprint(next(g), next(g))",
    "group": "Генераторы и итераторы",
    "id": "m567"
  },
  {
    "topic": "генераторы",
    "q": "Что вернёт yield from делегирует?",
    "options": [
      "итерацию/yield во вложенный итератор/генератор",
      "только return",
      "в другой процесс",
      "в C API"
    ],
    "answer": 0,
    "explain": "Также пробрасывает send/throw. Правильный ответ: «итерацию/yield во вложенный итератор/генератор».",
    "group": "Генераторы и итераторы",
    "id": "m568"
  },
  {
    "topic": "генераторы",
    "q": "Что вернёт gen.send(x) до первого yield?",
    "options": [
      "нужно сначала next()/send(None)",
      "сразу x",
      "None",
      "ошибка всегда"
    ],
    "answer": 0,
    "explain": "Генератор должен дойти до yield. Правильный ответ: «нужно сначала next()/send(None)».",
    "group": "Генераторы и итераторы",
    "id": "m569"
  },
  {
    "topic": "итераторы",
    "q": "Что вызывает iter(callable, sentinel)?",
    "options": [
      "результат != sentinel",
      "пока True",
      "один раз",
      "бесконечно без sentinel"
    ],
    "answer": 0,
    "explain": "Классика: iter(f.readline, ''). Правильный ответ: «результат != sentinel».",
    "group": "Генераторы и итераторы",
    "id": "m570"
  },
  {
    "topic": "generators",
    "q": "Что выведет код?",
    "options": [
      "[1]",
      "[1, 0]",
      "ошибка",
      "[0]"
    ],
    "answer": 0,
    "explain": "return в генераторе становится StopIteration.value; list() его не включает — только yield. Правильный ответ: «[1]».",
    "code": "def g():\n    yield 1\n    return 0\nprint(list(g()))",
    "group": "Генераторы и итераторы",
    "id": "m571"
  },
  {
    "topic": "магические",
    "q": "Что вернёт Что вызовет a + b?",
    "options": [
      "a.__add__(b) или b.__radd__(a)",
      "только __iadd__",
      "len(a)",
      "hash(a)"
    ],
    "answer": 0,
    "explain": "Отражённые методы для правого операнда. Правильный ответ: «a.__add__(b) или b.__radd__(a)».",
    "group": "Контекст и магические методы",
    "id": "m572"
  },
  {
    "topic": "property",
    "q": "Зачем нужен @property.setter?",
    "options": [
      "разрешить присваивание атрибуту-property",
      "сделать classmethod",
      "удалить атрибут",
      "ускорить"
    ],
    "answer": 0,
    "explain": "Иначе AttributeError: can't set attribute. Правильный ответ: «разрешить присваивание атрибуту-property».",
    "group": "Контекст и магические методы",
    "id": "m573"
  },
  {
    "topic": "classmethod",
    "q": "Что вернёт classmethod получает первым аргументом?",
    "options": [
      "класс (cls), не экземпляр",
      "self",
      "модуль",
      "metaclass всегда"
    ],
    "answer": 0,
    "explain": "Удобно для альтернативных конструкторов. Правильный ответ: «класс (cls), не экземпляр».",
    "group": "Контекст и магические методы",
    "id": "m574"
  },
  {
    "topic": "staticmethod",
    "q": "Что вернёт staticmethod отличается тем, что?",
    "options": [
      "нет авто-self/cls — обычная функция в классе",
      "всегда виртуальный",
      "только в ABC",
      "быстрее C"
    ],
    "answer": 0,
    "explain": "Не получает ни экземпляр, ни класс. Правильный ответ: «нет авто-self/cls — обычная функция в классе».",
    "group": "Контекст и магические методы",
    "id": "m575"
  },
  {
    "topic": "typing",
    "q": "Что такое list[int] в runtime (3.9+)?",
    "options": [
      "generic alias; isinstance ограниченно",
      "точный runtime gate всегда",
      "удаляется",
      "только mypy"
    ],
    "answer": 0,
    "explain": "Аннотации не проверяются CPython сам по себе. Правильный ответ: «generic alias; isinstance ограниченно».",
    "group": "Typing и dataclasses",
    "id": "m576"
  },
  {
    "topic": "typing",
    "q": "Что вернёт TypeVar(bound=...) ограничивает?",
    "options": [
      "верхнюю границу допустимых типов",
      "только литералы",
      "длину списка",
      "GIL"
    ],
    "answer": 0,
    "explain": "T должен быть subtype bound. Правильный ответ: «верхнюю границу допустимых типов». Аннотации типов — подсказки для статических анализаторов; в рантайме чаще всего не enforced.",
    "group": "Typing и dataclasses",
    "id": "m577"
  },
  {
    "topic": "typing",
    "q": "В чём разница: Protocol (structural) vs ABC?",
    "options": [
      "Protocol — утиная типизация; ABC — номинальная",
      "одно и то же",
      "Protocol только runtime",
      "ABC только stubs"
    ],
    "answer": 0,
    "explain": "typing.Protocol / runtime_checkable. Правильный ответ: «Protocol — утиная типизация; ABC — номинальная».",
    "group": "Typing и dataclasses",
    "id": "m578"
  },
  {
    "topic": "dataclasses",
    "q": "Что даёт Что?",
    "options": [
      "неизменяемые экземпляры (приблизительно)",
      "быстрее всегда",
      "slots автоматически до 3.9",
      "JSON"
    ],
    "answer": 0,
    "explain": "Присваивание полей → FrozenInstanceError. Правильный ответ: «неизменяемые экземпляры (приблизительно)».",
    "group": "Typing и dataclasses",
    "id": "m579"
  },
  {
    "topic": "enum",
    "q": "Что означает «Enum члены сравниваются»?",
    "options": [
      "по идентичности/значению члена, не как «сырые» int без mixin",
      "всегда как int",
      "только по имени str",
      "нельзя"
    ],
    "answer": 0,
    "explain": "IntEnum — отдельный случай, совместим с int. Правильный ответ: «по идентичности/значению члена, не как «сырые» int без mixin».",
    "group": "Typing и dataclasses",
    "id": "m580"
  },
  {
    "topic": "match",
    "q": "Что вернёт case [x, *rest]: матчит?",
    "options": [
      "последовательность ≥1 с хвостом",
      "только list длины 2",
      "dict",
      "set"
    ],
    "answer": 0,
    "explain": "Sequence pattern. Правильный ответ: «последовательность ≥1 с хвостом».",
    "group": "Typing и dataclasses",
    "id": "m581"
  },
  {
    "topic": "threading",
    "q": "В чём разница: Lock vs RLock?",
    "options": [
      "RLock можно захватывать тем же потоком повторно",
      "Lock быстрее всегда и reentrant",
      "одно и то же",
      "RLock только async"
    ],
    "answer": 0,
    "explain": "Обычный Lock — deadlock при повторном acquire. Правильный ответ: «RLock можно захватывать тем же потоком повторно».",
    "group": "Потоки, процессы, GIL",
    "id": "m582"
  },
  {
    "topic": "asyncio",
    "q": "В чём разница: create_task vs await coro напрямую?",
    "options": [
      "task планирует конкурентно; await — последовательно",
      "одинаково",
      "create_task блокирует",
      "await запрещён"
    ],
    "answer": 0,
    "explain": "Task позволяет параллелить await-точки. Правильный ответ: «task планирует конкурентно; await — последовательно».",
    "group": "Asyncio",
    "id": "m583"
  },
  {
    "topic": "asyncio",
    "q": "Выбери верный вариант: Что будет при необработанном исключении в Task?",
    "options": [
      "логируется при GC task (и в 3.11+ лучше видно)",
      "тихо глотается навсегда",
      "роняет процесс всегда",
      "чинит само"
    ],
    "answer": 0,
    "explain": "Храни ссылку / await / callbacks. Правильный ответ: «логируется при GC task (и в 3.11+ лучше видно)».",
    "group": "Asyncio",
    "id": "m584"
  },
  {
    "topic": "asyncio",
    "q": "В чём разница: async with vs обычный with для lock?",
    "options": [
      "нужен async CM с __aenter__/__aexit__",
      "можно смешивать свободно",
      "with быстрее",
      "запрещено"
    ],
    "answer": 0,
    "explain": "asyncio.Lock — async context manager. Правильный ответ: «нужен async CM с __aenter__/__aexit__». Речь про асинхронный event loop и корутины в asyncio.",
    "group": "Asyncio",
    "id": "m585"
  },
  {
    "topic": "async",
    "q": "Что вернёт gather(..., return_exceptions=True)?",
    "options": [
      "кладёт исключения в результаты вместо raise",
      "игнорит все задачи",
      "отменяет всегда",
      "только sync"
    ],
    "answer": 0,
    "explain": "Удобно собрать частичные успехи. Правильный ответ: «кладёт исключения в результаты вместо raise».",
    "group": "Asyncio",
    "id": "m586"
  },
  {
    "topic": "collections",
    "q": "Что означает «deque.appendleft — амортизированно»?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "Двусторонняя очередь. Правильный ответ: «O(1)».",
    "group": "Collections и itertools",
    "id": "m587"
  },
  {
    "topic": "collections",
    "q": "Что вернёт Counter.most_common(2) вернёт?",
    "options": [
      "список пар (элемент, счёт) топ-2",
      "только ключи",
      "dict",
      "set"
    ],
    "answer": 0,
    "explain": "По убыванию частоты. Правильный ответ: «список пар (элемент, счёт) топ-2».",
    "group": "Collections и itertools",
    "id": "m588"
  },
  {
    "topic": "collections",
    "q": "Что вернёт d['k'].append(1) — если ключа не было?",
    "options": [
      "создаст [] и append",
      "KeyError",
      "NoneType error",
      "игнор"
    ],
    "answer": 0,
    "explain": "default_factory вызывается. Правильный ответ: «создаст [] и append».",
    "group": "Collections и itertools",
    "id": "m589"
  },
  {
    "topic": "itertools",
    "q": "Что вернёт islice(it, 2, 5) берёт?",
    "options": [
      "элементы с 2 по 4 (как range)",
      "первые 5",
      "с 2 до конца",
      "только 2 и 5"
    ],
    "answer": 0,
    "explain": "Ленивый срез итератора. Правильный ответ: «элементы с 2 по 4 (как range)».",
    "group": "Collections и itertools",
    "id": "m590"
  },
  {
    "topic": "functools",
    "q": "Что такое lru_cache(maxsize=None)?",
    "options": [
      "безлимитный кэш (осторожно с памятью)",
      "без кэша",
      "TTL cache",
      "disk cache"
    ],
    "answer": 0,
    "explain": "Эквивалент unbounded memoization. Правильный ответ: «безлимитный кэш (осторожно с памятью)».",
    "group": "Collections и itertools",
    "id": "m591"
  },
  {
    "topic": "functools",
    "q": "Что вернёт partial(f, 1)(2) эквивалентно?",
    "options": [
      "f(1, 2)",
      "f(2, 1)",
      "f(1)",
      "f()"
    ],
    "answer": 0,
    "explain": "Фиксирует позиционные/keyword аргументы. Правильный ответ: «f(1, 2)».",
    "group": "Collections и itertools",
    "id": "m592"
  },
  {
    "topic": "pathlib",
    "q": "Что вернёт Path('a') / 'b' / 'c' даст?",
    "options": [
      "Path с платформенными разделителями",
      "строку 'a/b/c' всегда",
      "ошибку",
      "bytes"
    ],
    "answer": 0,
    "explain": "Оператор / у Path. Правильный ответ: «Path с платформенными разделителями».",
    "group": "Stdlib и производительность",
    "id": "m593"
  },
  {
    "topic": "regex",
    "q": "В чём разница: re.search vs re.match?",
    "options": [
      "search — в любом месте; match — с начала строки",
      "одинаково",
      "match быстрее всегда",
      "search только bytes"
    ],
    "answer": 0,
    "explain": "Ещё есть fullmatch. Правильный ответ: «search — в любом месте; match — с начала строки».",
    "group": "Stdlib и производительность",
    "id": "m594"
  },
  {
    "topic": "logging",
    "q": "Что вернёт Почему logger = logging.getLogger(__name__)?",
    "options": [
      "иерархия логгеров по модулю",
      "обязательный синтаксис",
      "быстрее print",
      "отключает root"
    ],
    "answer": 0,
    "explain": "Удобно фильтровать по имени пакета. Правильный ответ: «иерархия логгеров по модулю».",
    "group": "Тесты и качество",
    "id": "m595"
  },
  {
    "topic": "тесты",
    "q": "Что вернёт pytest fixture с scope='module'?",
    "options": [
      "один раз на модуль тестов",
      "на каждый assert",
      "на весь CI",
      "только class"
    ],
    "answer": 0,
    "explain": "Экономия дорогой подготовки. Правильный ответ: «один раз на модуль тестов».",
    "group": "Тесты и качество",
    "id": "m596"
  },
  {
    "topic": "тесты",
    "q": "Что вернёт monkeypatch / mock патчат?",
    "options": [
      "атрибуты/окружение на время теста",
      "продакшен БД",
      "GIL",
      "байткод"
    ],
    "answer": 0,
    "explain": "Изоляция побочных эффектов. Правильный ответ: «атрибуты/окружение на время теста».",
    "group": "Тесты и качество",
    "id": "m597"
  },
  {
    "topic": "mock",
    "q": "Что вернёт assert_called_once_with(...) проверяет?",
    "options": [
      "ровно один вызов с аргументами",
      "любое число вызовов",
      "только тип",
      "время"
    ],
    "answer": 0,
    "explain": "Из unittest.mock. Правильный ответ: «ровно один вызов с аргументами».",
    "group": "Тесты и качество",
    "id": "m598"
  },
  {
    "topic": "HTTP",
    "q": "Что вернёт идемпотентный HTTP-метод пример?",
    "options": [
      "GET / PUT (в идеале)",
      "POST всегда",
      "только CONNECT",
      "TRACE обязателен"
    ],
    "answer": 0,
    "explain": "Повтор не должен менять состояние (семантика). Правильный ответ: «GET / PUT (в идеале)».",
    "group": "Веб и API",
    "id": "m599"
  },
  {
    "topic": "FastAPI",
    "q": "Что вернёт Depends() нужен для?",
    "options": [
      "внедрения зависимостей (DI) в эндпоинты",
      "SQL only",
      "GIL",
      "замены pydantic"
    ],
    "answer": 0,
    "explain": "Переиспользование auth/db session. Правильный ответ: «внедрения зависимостей (DI) в эндпоинты».",
    "group": "Веб и API",
    "id": "m600"
  },
  {
    "topic": "SQL",
    "q": "Что такое N+1 проблема?",
    "options": [
      "1 запрос списка + N запросов на связанные сущности",
      "один огромный JOIN всегда bad",
      "только NoSQL",
      "индекс"
    ],
    "answer": 0,
    "explain": "Лечится join/eager load/IN. Правильный ответ: «1 запрос списка + N запросов на связанные сущности».",
    "group": "Веб и API",
    "id": "m601"
  },
  {
    "topic": "weakref",
    "q": "Что означает «WeakValueDictionary забывает значение когда»?",
    "options": [
      "не осталось сильных ссылок на объект",
      "всегда через 1с",
      "при hash collision",
      "никогда"
    ],
    "answer": 0,
    "explain": "Кэши без удержания объектов. Правильный ответ: «не осталось сильных ссылок на объект».",
    "group": "Stdlib и производительность",
    "id": "m602"
  },
  {
    "topic": "ABC",
    "q": "Что вернёт @abstractmethod гарантирует?",
    "options": [
      "нельзя инстанцировать подкласс без реализации",
      "runtime скорость",
      "GIL off",
      "pickle"
    ],
    "answer": 0,
    "explain": "Пока есть абстрактные методы — TypeError. Правильный ответ: «нельзя инстанцировать подкласс без реализации».",
    "group": "ООП продвинутый",
    "id": "m603"
  },
  {
    "topic": "дескрипторы",
    "q": "Что такое __get__/__set__/__delete__?",
    "options": [
      "протокол дескрипторов (property так устроен)",
      "только metaclass",
      "GIL hooks",
      "async only"
    ],
    "answer": 0,
    "explain": "Data vs non-data descriptors. Правильный ответ: «протокол дескрипторов (property так устроен)». Дескрипторы управляют доступом к атрибутам через __get__ / __set__ / __delete__.",
    "group": "Контекст и магические методы",
    "id": "m604"
  },
  {
    "topic": "замыкания",
    "q": "Что выведет код?",
    "options": [
      "[3, 3, 3, 3]",
      "[0, 1, 2, 3]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Поздний захват i — все лямбды видят финальное значение. Правильный ответ: «[3, 3, 3, 3]».",
    "code": "fs = [lambda: i for i in range(4)]\nprint([f() for f in fs])",
    "group": "Декораторы и замыкания",
    "id": "m605"
  },
  {
    "topic": "замыкания",
    "q": "Что выведет код?",
    "options": [
      "[0, 1, 2, 3]",
      "[3, 3, 3, 3]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "default i=i фиксирует значение на итерации. Правильный ответ: «[0, 1, 2, 3]».",
    "code": "fs = [lambda i=i: i for i in range(4)]\nprint([f() for f in fs])",
    "group": "Декораторы и замыкания",
    "id": "m606"
  },
  {
    "topic": "замыкания",
    "q": "Что выведет код?",
    "options": [
      "[4, 4, 4, 4, 4]",
      "[0, 1, 2, 3, 4]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Поздний захват i — все лямбды видят финальное значение. Правильный ответ: «[4, 4, 4, 4, 4]».",
    "code": "fs = [lambda: i for i in range(5)]\nprint([f() for f in fs])",
    "group": "Декораторы и замыкания",
    "id": "m607"
  },
  {
    "topic": "замыкания",
    "q": "Что выведет код?",
    "options": [
      "[0, 1, 2, 3, 4]",
      "[4, 4, 4, 4, 4]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "default i=i фиксирует значение на итерации. Правильный ответ: «[0, 1, 2, 3, 4]».",
    "code": "fs = [lambda i=i: i for i in range(5)]\nprint([f() for f in fs])",
    "group": "Декораторы и замыкания",
    "id": "m608"
  },
  {
    "topic": "генераторы",
    "q": "Что выведет код?",
    "options": [
      "10 20",
      "[10, 20, 30]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Два next() забирают первые элементы. Правильный ответ: «10 20».",
    "code": "g = (x for x in [10, 20, 30])\nprint(next(g), next(g))",
    "group": "Генераторы и итераторы",
    "id": "m609"
  },
  {
    "topic": "генераторы",
    "q": "Что выведет код?",
    "options": [
      "a b",
      "['a', 'b']",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Два next() забирают первые элементы. Правильный ответ: «a b».",
    "code": "g = (x for x in ['a', 'b'])\nprint(next(g), next(g))",
    "group": "Генераторы и итераторы",
    "id": "m610"
  },
  {
    "topic": "генераторы",
    "q": "Что выведет код?",
    "options": [
      "0 1",
      "[0, 1]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Два next() забирают первые элементы. Правильный ответ: «0 1».",
    "code": "g = (x for x in [0, 1])\nprint(next(g), next(g))",
    "group": "Генераторы и итераторы",
    "id": "m611"
  },
  {
    "topic": "генераторы",
    "q": "Что выведет код?",
    "options": [
      "[0, 1]",
      "[0, 1]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Generator expression материализуется через list. Правильный ответ: «[0, 1]».",
    "code": "print(list(x * x for x in range(2)))",
    "group": "Генераторы и итераторы",
    "id": "m612"
  },
  {
    "topic": "генераторы",
    "q": "Что выведет код?",
    "options": [
      "[0, 1, 4]",
      "[0, 1, 2]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Generator expression материализуется через list. Правильный ответ: «[0, 1, 4]».",
    "code": "print(list(x * x for x in range(3)))",
    "group": "Генераторы и итераторы",
    "id": "m613"
  },
  {
    "topic": "генераторы",
    "q": "Что выведет код?",
    "options": [
      "[0, 1, 4, 9]",
      "[0, 1, 2, 3]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Generator expression материализуется через list. Правильный ответ: «[0, 1, 4, 9]».",
    "code": "print(list(x * x for x in range(4)))",
    "group": "Генераторы и итераторы",
    "id": "m614"
  },
  {
    "topic": "collections",
    "q": "Что выведет код?",
    "options": [
      "[('a', 2), ('b', 1)]",
      "{'a': 2, 'b': 1}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Топ-2 по частоте. Правильный ответ: «[('a', 2), ('b', 1)]».",
    "code": "from collections import Counter\nprint(Counter('aab').most_common(2))",
    "group": "Collections и itertools",
    "id": "m615"
  },
  {
    "topic": "collections",
    "q": "Что выведет код?",
    "options": [
      "[('a', 3), ('b', 2)]",
      "{'a': 3, 'b': 2}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Топ-2 по частоте. Правильный ответ: «[('a', 3), ('b', 2)]».",
    "code": "from collections import Counter\nprint(Counter('aaabb').most_common(2))",
    "group": "Collections и itertools",
    "id": "m616"
  },
  {
    "topic": "collections",
    "q": "Что выведет код?",
    "options": [
      "[('x', 1), ('y', 1)]",
      "{'x': 1, 'y': 1, 'z': 1}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Топ-2 по частоте. Правильный ответ: «[('x', 1), ('y', 1)]».",
    "code": "from collections import Counter\nprint(Counter('xyz').most_common(2))",
    "group": "Collections и itertools",
    "id": "m617"
  },
  {
    "topic": "collections",
    "q": "Что выведет код?",
    "options": [
      "[('i', 4), ('s', 4)]",
      "{'m': 1, 'i': 4, 's': 4, 'p': 2}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Топ-2 по частоте. Правильный ответ: «[('i', 4), ('s', 4)]».",
    "code": "from collections import Counter\nprint(Counter('mississippi').most_common(2))",
    "group": "Collections и itertools",
    "id": "m618"
  },
  {
    "topic": "collections",
    "q": "Что выведет код?",
    "options": [
      "[('a', 5), ('b', 2)]",
      "{'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Топ-2 по частоте. Правильный ответ: «[('a', 5), ('b', 2)]».",
    "code": "from collections import Counter\nprint(Counter('abracadabra').most_common(2))",
    "group": "Collections и itertools",
    "id": "m619"
  },
  {
    "topic": "collections",
    "q": "Что вернёт Что делает deque.rotate(2) на 5 элементах?",
    "options": [
      "цикл сдвиг на 2 вправо (отриц. — влево)",
      "сортирует",
      "удаляет k",
      "ошибка всегда"
    ],
    "answer": 0,
    "explain": "rotate — циклический сдвиг. Правильный ответ: «цикл сдвиг на 2 вправо (отриц. — влево)».",
    "group": "Collections и itertools",
    "id": "m620"
  },
  {
    "topic": "collections",
    "q": "Что вернёт Что делает deque.rotate(3) на 6 элементах?",
    "options": [
      "цикл сдвиг на 3 вправо (отриц. — влево)",
      "сортирует",
      "удаляет k",
      "ошибка всегда"
    ],
    "answer": 0,
    "explain": "rotate — циклический сдвиг. Правильный ответ: «цикл сдвиг на 3 вправо (отриц. — влево)».",
    "group": "Collections и itertools",
    "id": "m621"
  },
  {
    "topic": "collections",
    "q": "Что вернёт Что делает deque.rotate(1) на 4 элементах?",
    "options": [
      "цикл сдвиг на 1 вправо (отриц. — влево)",
      "сортирует",
      "удаляет k",
      "ошибка всегда"
    ],
    "answer": 0,
    "explain": "rotate — циклический сдвиг. Правильный ответ: «цикл сдвиг на 1 вправо (отриц. — влево)».",
    "group": "Collections и itertools",
    "id": "m622"
  },
  {
    "topic": "collections",
    "q": "Что вернёт Что делает deque.rotate(4) на 7 элементах?",
    "options": [
      "цикл сдвиг на 4 вправо (отриц. — влево)",
      "сортирует",
      "удаляет k",
      "ошибка всегда"
    ],
    "answer": 0,
    "explain": "rotate — циклический сдвиг. Правильный ответ: «цикл сдвиг на 4 вправо (отриц. — влево)».",
    "group": "Collections и itertools",
    "id": "m623"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "3",
      "6",
      "9",
      "6"
    ],
    "answer": 0,
    "explain": "C(3,2) = 3.",
    "code": "from itertools import combinations\nprint(len(list(combinations(range(3), 2))))",
    "group": "Collections и itertools",
    "id": "m624"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "6",
      "8",
      "16",
      "24"
    ],
    "answer": 0,
    "explain": "C(4,2) = 6.",
    "code": "from itertools import combinations\nprint(len(list(combinations(range(4), 2))))",
    "group": "Collections и itertools",
    "id": "m625"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "4",
      "12",
      "64",
      "24"
    ],
    "answer": 0,
    "explain": "C(4,3) = 4.",
    "code": "from itertools import combinations\nprint(len(list(combinations(range(4), 3))))",
    "group": "Collections и itertools",
    "id": "m626"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "10",
      "10",
      "25",
      "120"
    ],
    "answer": 0,
    "explain": "C(5,2) = 10.",
    "code": "from itertools import combinations\nprint(len(list(combinations(range(5), 2))))",
    "group": "Collections и itertools",
    "id": "m627"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "4",
      "2",
      "5",
      "?0"
    ],
    "answer": 0,
    "explain": "2^2 = 4.",
    "code": "from itertools import product\nprint(len(list(product([0, 1], repeat=2))))",
    "group": "Collections и itertools",
    "id": "m628"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "8",
      "6",
      "3",
      "7"
    ],
    "answer": 0,
    "explain": "2^3 = 8.",
    "code": "from itertools import product\nprint(len(list(product([0, 1], repeat=3))))",
    "group": "Collections и itertools",
    "id": "m629"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "16",
      "8",
      "4",
      "9"
    ],
    "answer": 0,
    "explain": "2^4 = 16.",
    "code": "from itertools import product\nprint(len(list(product([0, 1], repeat=4))))",
    "group": "Collections и itertools",
    "id": "m630"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[1, 2, 3]",
      "[1, 2, 3, 4]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "islice — ленивый срез. Правильный ответ: «[1, 2, 3]».",
    "code": "from itertools import islice\nprint(list(islice([1, 2, 3, 4, 5], 3)))",
    "group": "Collections и itertools",
    "id": "m631"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[10, 20]",
      "[10, 20, 30]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "islice — ленивый срез. Правильный ответ: «[10, 20]».",
    "code": "from itertools import islice\nprint(list(islice([10, 20, 30, 40], 2)))",
    "group": "Collections и itertools",
    "id": "m632"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[0, 1, 2, 3]",
      "[0, 1, 2, 3, 4]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "islice — ленивый срез. Правильный ответ: «[0, 1, 2, 3]».",
    "code": "from itertools import islice\nprint(list(islice([0, 1, 2, 3, 4, 5], 4)))",
    "group": "Collections и itertools",
    "id": "m633"
  },
  {
    "topic": "functools",
    "q": "Что вернёт x+y эквивалентно?",
    "options": [
      "3",
      "2",
      "2",
      "ошибка"
    ],
    "answer": 0,
    "explain": "partial фиксирует первый аргумент → f(1, 2). Правильный ответ: «3».",
    "code": "from functools import partial\nf = lambda x, y: x + y\nprint(partial(f, 1)(2))",
    "group": "Collections и itertools",
    "id": "m634"
  },
  {
    "topic": "functools",
    "q": "Что вернёт x+y эквивалентно?",
    "options": [
      "7",
      "12",
      "4",
      "ошибка"
    ],
    "answer": 0,
    "explain": "partial фиксирует первый аргумент → f(3, 4). Правильный ответ: «7».",
    "code": "from functools import partial\nf = lambda x, y: x + y\nprint(partial(f, 3)(4))",
    "group": "Collections и itertools",
    "id": "m635"
  },
  {
    "topic": "functools",
    "q": "Что вернёт x+y эквивалентно?",
    "options": [
      "10",
      "25",
      "5",
      "ошибка"
    ],
    "answer": 0,
    "explain": "partial фиксирует первый аргумент → f(5, 5). Правильный ответ: «10».",
    "code": "from functools import partial\nf = lambda x, y: x + y\nprint(partial(f, 5)(5))",
    "group": "Collections и itertools",
    "id": "m636"
  },
  {
    "topic": "functools",
    "q": "Что вернёт x+y эквивалентно?",
    "options": [
      "11",
      "10",
      "1",
      "ошибка"
    ],
    "answer": 0,
    "explain": "partial фиксирует первый аргумент → f(10, 1). Правильный ответ: «11».",
    "code": "from functools import partial\nf = lambda x, y: x + y\nprint(partial(f, 10)(1))",
    "group": "Collections и itertools",
    "id": "m637"
  },
  {
    "topic": "functools",
    "q": "Что вернёт x+y эквивалентно?",
    "options": [
      "7",
      "0",
      "7",
      "ошибка"
    ],
    "answer": 0,
    "explain": "partial фиксирует первый аргумент → f(0, 7).",
    "code": "from functools import partial\nf = lambda x, y: x + y\nprint(partial(f, 0)(7))",
    "group": "Collections и itertools",
    "id": "m638"
  },
  {
    "topic": "functools",
    "q": "Что вернёт Сколько уникальных ключей кэша у fib(2) с lru_cache при наивной рекурсии fib(n)=fib(n-1)+fib(n-2)?",
    "options": [
      "примерно 3 (0..n)",
      "4",
      "2",
      "0"
    ],
    "answer": 0,
    "explain": "Каждый k от 0..n кэшируется один раз. Правильный ответ: «примерно 3 (0..n)».",
    "group": "Collections и itertools",
    "id": "m639"
  },
  {
    "topic": "functools",
    "q": "Что вернёт Сколько уникальных ключей кэша у fib(3) с lru_cache при наивной рекурсии fib(n)=fib(n-1)+fib(n-2)?",
    "options": [
      "примерно 4 (0..n)",
      "8",
      "3",
      "0"
    ],
    "answer": 0,
    "explain": "Каждый k от 0..n кэшируется один раз. Правильный ответ: «примерно 4 (0..n)».",
    "group": "Collections и itertools",
    "id": "m640"
  },
  {
    "topic": "functools",
    "q": "Что вернёт Сколько уникальных ключей кэша у fib(4) с lru_cache при наивной рекурсии fib(n)=fib(n-1)+fib(n-2)?",
    "options": [
      "примерно 5 (0..n)",
      "16",
      "4",
      "0"
    ],
    "answer": 0,
    "explain": "Каждый k от 0..n кэшируется один раз. Правильный ответ: «примерно 5 (0..n)».",
    "group": "Collections и itertools",
    "id": "m641"
  },
  {
    "topic": "functools",
    "q": "Что вернёт Сколько уникальных ключей кэша у fib(5) с lru_cache при наивной рекурсии fib(n)=fib(n-1)+fib(n-2)?",
    "options": [
      "примерно 6 (0..n)",
      "32",
      "5",
      "0"
    ],
    "answer": 0,
    "explain": "Каждый k от 0..n кэшируется один раз. Правильный ответ: «примерно 6 (0..n)».",
    "group": "Collections и itertools",
    "id": "m642"
  },
  {
    "topic": "typing",
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "isinstance с абстрактными/builtin типами. Правильный ответ: «True».",
    "code": "print(isinstance([1, 2], list))",
    "group": "Typing и dataclasses",
    "id": "m643"
  },
  {
    "topic": "typing",
    "q": "Что вернёт 1}, dict)?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "isinstance с абстрактными/builtin типами. Правильный ответ: «True».",
    "code": "print(isinstance({'a': 1}, dict))",
    "group": "Typing и dataclasses",
    "id": "m644"
  },
  {
    "topic": "typing",
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "isinstance с абстрактными/builtin типами. Правильный ответ: «True».",
    "code": "print(isinstance((1,), tuple))",
    "group": "Typing и dataclasses",
    "id": "m645"
  },
  {
    "topic": "typing",
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "isinstance с абстрактными/builtin типами. Правильный ответ: «True».",
    "code": "print(isinstance({1}, set))",
    "group": "Typing и dataclasses",
    "id": "m646"
  },
  {
    "topic": "typing",
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "isinstance с абстрактными/builtin типами. Правильный ответ: «False».",
    "code": "print(isinstance((1, 2), list))",
    "group": "Typing и dataclasses",
    "id": "m647"
  },
  {
    "topic": "typing",
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "isinstance с абстрактными/builtin типами. Правильный ответ: «False».",
    "code": "print(isinstance([1], dict))",
    "group": "Typing и dataclasses",
    "id": "m648"
  },
  {
    "topic": "typing",
    "q": "Что вернёт isinstance([1], list[int]) в обычном CPython?",
    "options": [
      "TypeError (или False в отдельных случаях) — generic alias не для isinstance так",
      "True всегда",
      "False всегда без ошибки",
      "True только в 3.12+"
    ],
    "answer": 0,
    "explain": "Для generics нужен typing.get_origin / runtime_checkable Protocol осторожно. Правильный ответ: «TypeError (или False в отдельных случаях) — generic alias не для isinstance так».",
    "group": "Typing и dataclasses",
    "id": "m649"
  },
  {
    "topic": "typing",
    "q": "Что вернёт isinstance([1], dict[str, int]) в обычном CPython?",
    "options": [
      "TypeError (или False в отдельных случаях) — generic alias не для isinstance так",
      "True всегда",
      "False всегда без ошибки",
      "True только в 3.12+"
    ],
    "answer": 0,
    "explain": "Для generics нужен typing.get_origin / runtime_checkable Protocol осторожно. Правильный ответ: «TypeError (или False в отдельных случаях) — generic alias не для isinstance так».",
    "group": "Typing и dataclasses",
    "id": "m650"
  },
  {
    "topic": "typing",
    "q": "Что вернёт isinstance([1], tuple[int, ...]) в обычном CPython?",
    "options": [
      "TypeError (или False в отдельных случаях) — generic alias не для isinstance так",
      "True всегда",
      "False всегда без ошибки",
      "True только в 3.12+"
    ],
    "answer": 0,
    "explain": "Для generics нужен typing.get_origin / runtime_checkable Protocol осторожно. Правильный ответ: «TypeError (или False в отдельных случаях) — generic alias не для isinstance так».",
    "group": "Typing и dataclasses",
    "id": "m651"
  },
  {
    "topic": "dataclasses",
    "q": "Что вернёт x: int = 0 — экземпляры делят x?",
    "options": [
      "нет, int immutable default ок",
      "да, как list",
      "ошибка синтаксиса",
      "только frozen"
    ],
    "answer": 0,
    "explain": "Проблема mutable default; int безопасен. Правильный ответ: «нет, int immutable default ок».",
    "group": "Typing и dataclasses",
    "id": "m652"
  },
  {
    "topic": "dataclasses",
    "q": "Что вернёт x: int = -1 — экземпляры делят x?",
    "options": [
      "нет, int immutable default ок",
      "да, как list",
      "ошибка синтаксиса",
      "только frozen"
    ],
    "answer": 0,
    "explain": "Проблема mutable default; int безопасен. Правильный ответ: «нет, int immutable default ок».",
    "group": "Typing и dataclasses",
    "id": "m653"
  },
  {
    "topic": "dataclasses",
    "q": "Что вернёт x: int = 1 — экземпляры делят x?",
    "options": [
      "нет, int immutable default ок",
      "да, как list",
      "ошибка синтаксиса",
      "только frozen"
    ],
    "answer": 0,
    "explain": "Проблема mutable default; int безопасен. Правильный ответ: «нет, int immutable default ок».",
    "group": "Typing и dataclasses",
    "id": "m654"
  },
  {
    "topic": "dataclasses",
    "q": "Зачем нужен field(default_factory=dict)?",
    "options": [
      "новый dict() на каждый экземпляр",
      "общий один dict",
      "запретить поле",
      "только JSON"
    ],
    "answer": 0,
    "explain": "Избегаем общего mutable default. Правильный ответ: «новый dict() на каждый экземпляр».",
    "group": "Typing и dataclasses",
    "id": "m655"
  },
  {
    "topic": "dataclasses",
    "q": "Зачем нужен field(default_factory=set)?",
    "options": [
      "новый set() на каждый экземпляр",
      "общий один set",
      "запретить поле",
      "только JSON"
    ],
    "answer": 0,
    "explain": "Избегаем общего mutable default. Правильный ответ: «новый set() на каждый экземпляр».",
    "group": "Typing и dataclasses",
    "id": "m656"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт gather n=2 корутин без return_exceptions при одной ошибке?",
    "options": [
      "пробросит исключение (остальные могут продолжать до отмены политики)",
      "вернёт частичный list тихо",
      "убивает процесс",
      "игнор"
    ],
    "answer": 0,
    "explain": "По умолчанию первая ошибка поднимается из gather. Правильный ответ: «пробросит исключение (остальные могут продолжать до отмены политики)».",
    "group": "Asyncio",
    "id": "m657"
  },
  {
    "topic": "asyncio",
    "q": "В чём риск create_task ×2 без await/ссылок?",
    "options": [
      "задачи могут быть собраны GC / потеря исключений",
      "выполнятся надёжнее",
      "синхронно",
      "запрещены"
    ],
    "answer": 0,
    "explain": "Держи ссылки или await TaskGroup. Правильный ответ: «задачи могут быть собраны GC / потеря исключений».",
    "group": "Asyncio",
    "id": "m658"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт gather n=3 корутин без return_exceptions при одной ошибке?",
    "options": [
      "пробросит исключение (остальные могут продолжать до отмены политики)",
      "вернёт частичный list тихо",
      "убивает процесс",
      "игнор"
    ],
    "answer": 0,
    "explain": "По умолчанию первая ошибка поднимается из gather. Правильный ответ: «пробросит исключение (остальные могут продолжать до отмены политики)».",
    "group": "Asyncio",
    "id": "m659"
  },
  {
    "topic": "asyncio",
    "q": "В чём риск create_task ×3 без await/ссылок?",
    "options": [
      "задачи могут быть собраны GC / потеря исключений",
      "выполнятся надёжнее",
      "синхронно",
      "запрещены"
    ],
    "answer": 0,
    "explain": "Держи ссылки или await TaskGroup. Правильный ответ: «задачи могут быть собраны GC / потеря исключений».",
    "group": "Asyncio",
    "id": "m660"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт gather n=4 корутин без return_exceptions при одной ошибке?",
    "options": [
      "пробросит исключение (остальные могут продолжать до отмены политики)",
      "вернёт частичный list тихо",
      "убивает процесс",
      "игнор"
    ],
    "answer": 0,
    "explain": "По умолчанию первая ошибка поднимается из gather. Правильный ответ: «пробросит исключение (остальные могут продолжать до отмены политики)».",
    "group": "Asyncio",
    "id": "m661"
  },
  {
    "topic": "asyncio",
    "q": "В чём риск create_task ×4 без await/ссылок?",
    "options": [
      "задачи могут быть собраны GC / потеря исключений",
      "выполнятся надёжнее",
      "синхронно",
      "запрещены"
    ],
    "answer": 0,
    "explain": "Держи ссылки или await TaskGroup. Правильный ответ: «задачи могут быть собраны GC / потеря исключений».",
    "group": "Asyncio",
    "id": "m662"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "a/b",
      "a/b/",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Path склеивает части. Правильный ответ: «a/b».",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('a', 'b'))",
    "group": "Stdlib и производительность",
    "id": "m663"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "var/log/app.log",
      "var/log/app.log/",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Path склеивает части. Правильный ответ: «var/log/app.log».",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('var', 'log', 'app.log'))",
    "group": "Stdlib и производительность",
    "id": "m664"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "home/user/docs",
      "home/user/docs/",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Path склеивает части. Правильный ответ: «home/user/docs».",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('home', 'user', 'docs'))",
    "group": "Stdlib и производительность",
    "id": "m665"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "x/y/z/w",
      "x/y/z/w/",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Path склеивает части. Правильный ответ: «x/y/z/w».",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('x', 'y', 'z', 'w'))",
    "group": "Stdlib и производительность",
    "id": "m666"
  },
  {
    "topic": "regex",
    "q": "Что выведет код?",
    "options": [
      "'12'",
      "'ab12cd'",
      "ошибка",
      "[]"
    ],
    "answer": 0,
    "explain": "search — первое вхождение. Правильный ответ: «'12'».",
    "code": "import re\nm = re.search('\\\\d+', 'ab12cd')\nprint(None if m is None else m.group())",
    "group": "Stdlib и производительность",
    "id": "m667"
  },
  {
    "topic": "regex",
    "q": "Что выведет код?",
    "options": [
      "'a'",
      "'stack'",
      "ошибка",
      "[]"
    ],
    "answer": 0,
    "explain": "search — первое вхождение. Правильный ответ: «'a'».",
    "code": "import re\nm = re.search('[aeiou]', 'stack')\nprint(None if m is None else m.group())",
    "group": "Stdlib и производительность",
    "id": "m668"
  },
  {
    "topic": "regex",
    "q": "Что выведет код?",
    "options": [
      "'42'",
      "'42'",
      "ошибка",
      "[]"
    ],
    "answer": 0,
    "explain": "search — первое вхождение. Правильный ответ: «'42'».",
    "code": "import re\nm = re.search('^\\\\d+$', '42')\nprint(None if m is None else m.group())",
    "group": "Stdlib и производительность",
    "id": "m669"
  },
  {
    "topic": "regex",
    "q": "Что выведет код?",
    "options": [
      "None",
      "'42a'",
      "ошибка",
      "[]"
    ],
    "answer": 0,
    "explain": "search — первое вхождение. Правильный ответ: «None».",
    "code": "import re\nm = re.search('^\\\\d+$', '42a')\nprint(None if m is None else m.group())",
    "group": "Stdlib и производительность",
    "id": "m670"
  },
  {
    "topic": "HTTP",
    "q": "Что означает «Метод GET по семантике HTTP»?",
    "options": [
      "идемпотентный (в идеале)",
      "никогда не идемпотентный",
      "только с телом JSON",
      "запрещён REST"
    ],
    "answer": 0,
    "explain": "GET безопасен к повтору на уровне семантики спеки (кэш/прокси учитывай). Правильный ответ: «идемпотентный (в идеале)».",
    "group": "Веб и API",
    "id": "m671"
  },
  {
    "topic": "HTTP",
    "q": "Что означает «Метод PUT по семантике HTTP»?",
    "options": [
      "идемпотентный (в идеале)",
      "никогда не идемпотентный",
      "только с телом JSON",
      "запрещён REST"
    ],
    "answer": 0,
    "explain": "PUT безопасен к повтору на уровне семантики спеки (кэш/прокси учитывай). Правильный ответ: «идемпотентный (в идеале)».",
    "group": "Веб и API",
    "id": "m672"
  },
  {
    "topic": "HTTP",
    "q": "Что означает «Метод DELETE по семантике HTTP»?",
    "options": [
      "идемпотентный (в идеале)",
      "никогда не идемпотентный",
      "только с телом JSON",
      "запрещён REST"
    ],
    "answer": 0,
    "explain": "DELETE безопасен к повтору на уровне семантики спеки (кэш/прокси учитывай). Правильный ответ: «идемпотентный (в идеале)».",
    "group": "Веб и API",
    "id": "m673"
  },
  {
    "topic": "HTTP",
    "q": "Что означает «Метод HEAD по семантике HTTP»?",
    "options": [
      "идемпотентный (в идеале)",
      "никогда не идемпотентный",
      "только с телом JSON",
      "запрещён REST"
    ],
    "answer": 0,
    "explain": "HEAD безопасен к повтору на уровне семантики спеки (кэш/прокси учитывай). Правильный ответ: «идемпотентный (в идеале)».",
    "group": "Веб и API",
    "id": "m674"
  },
  {
    "topic": "HTTP",
    "q": "Что означает «Метод OPTIONS по семантике HTTP»?",
    "options": [
      "идемпотентный (в идеале)",
      "никогда не идемпотентный",
      "только с телом JSON",
      "запрещён REST"
    ],
    "answer": 0,
    "explain": "OPTIONS безопасен к повтору на уровне семантики спеки (кэш/прокси учитывай). Правильный ответ: «идемпотентный (в идеале)».",
    "group": "Веб и API",
    "id": "m675"
  },
  {
    "topic": "HTTP",
    "q": "Что означает «HTTP 200 обычно значит»?",
    "options": [
      "OK",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "200 — OK.",
    "group": "Веб и API",
    "id": "m676"
  },
  {
    "topic": "HTTP",
    "q": "Что означает «HTTP 201 обычно значит»?",
    "options": [
      "Created",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "201 — Created.",
    "group": "Веб и API",
    "id": "m677"
  },
  {
    "topic": "HTTP",
    "q": "Что означает «HTTP 204 обычно значит»?",
    "options": [
      "No Content",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "204 — No Content.",
    "group": "Веб и API",
    "id": "m678"
  },
  {
    "topic": "HTTP",
    "q": "Что означает «HTTP 301 обычно значит»?",
    "options": [
      "Moved Permanently",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "301 — Moved Permanently.",
    "group": "Веб и API",
    "id": "m679"
  },
  {
    "topic": "HTTP",
    "q": "Что означает «HTTP 400 обычно значит»?",
    "options": [
      "Bad Request",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "400 — Bad Request.",
    "group": "Веб и API",
    "id": "m680"
  },
  {
    "topic": "HTTP",
    "q": "Что означает «HTTP 401 обычно значит»?",
    "options": [
      "Unauthorized",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "401 — Unauthorized.",
    "group": "Веб и API",
    "id": "m681"
  },
  {
    "topic": "HTTP",
    "q": "Что означает «HTTP 403 обычно значит»?",
    "options": [
      "Forbidden",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "403 — Forbidden.",
    "group": "Веб и API",
    "id": "m682"
  },
  {
    "topic": "HTTP",
    "q": "Что означает «HTTP 404 обычно значит»?",
    "options": [
      "Not Found",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "404 — Not Found.",
    "group": "Веб и API",
    "id": "m683"
  },
  {
    "topic": "HTTP",
    "q": "Что означает «HTTP 409 обычно значит»?",
    "options": [
      "Conflict",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "409 — Conflict.",
    "group": "Веб и API",
    "id": "m684"
  },
  {
    "topic": "HTTP",
    "q": "Что означает «HTTP 422 обычно значит»?",
    "options": [
      "Unprocessable",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "422 — Unprocessable.",
    "group": "Веб и API",
    "id": "m685"
  },
  {
    "topic": "HTTP",
    "q": "Что означает «HTTP 429 обычно значит»?",
    "options": [
      "Too Many Requests",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "429 — Too Many Requests.",
    "group": "Веб и API",
    "id": "m686"
  },
  {
    "topic": "HTTP",
    "q": "Что означает «HTTP 500 обычно значит»?",
    "options": [
      "Server Error",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "500 — Server Error.",
    "group": "Веб и API",
    "id": "m687"
  },
  {
    "topic": "HTTP",
    "q": "Что означает «HTTP 502 обычно значит»?",
    "options": [
      "Bad Gateway",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "502 — Bad Gateway.",
    "group": "Веб и API",
    "id": "m688"
  },
  {
    "topic": "HTTP",
    "q": "Что означает «HTTP 503 обычно значит»?",
    "options": [
      "Unavailable",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "503 — Unavailable.",
    "group": "Веб и API",
    "id": "m689"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: Уровень изоляции READ UNCOMMITTED — что верно?",
    "options": [
      "разные аномалии чтения/записи; знай свою СУБД",
      "все уровни идентичны в PostgreSQL",
      "только про DDL",
      "отключает индексы"
    ],
    "answer": 0,
    "explain": "Изоляции отличаются допустимыми аномалиями. Правильный ответ: «разные аномалии чтения/записи; знай свою СУБД».",
    "group": "Веб и API",
    "id": "m690"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: Уровень изоляции READ COMMITTED — что верно?",
    "options": [
      "разные аномалии чтения/записи; знай свою СУБД",
      "все уровни идентичны в PostgreSQL",
      "только про DDL",
      "отключает индексы"
    ],
    "answer": 0,
    "explain": "Изоляции отличаются допустимыми аномалиями. Правильный ответ: «разные аномалии чтения/записи; знай свою СУБД».",
    "group": "Веб и API",
    "id": "m691"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: Уровень изоляции REPEATABLE READ — что верно?",
    "options": [
      "разные аномалии чтения/записи; знай свою СУБД",
      "все уровни идентичны в PostgreSQL",
      "только про DDL",
      "отключает индексы"
    ],
    "answer": 0,
    "explain": "Изоляции отличаются допустимыми аномалиями. Правильный ответ: «разные аномалии чтения/записи; знай свою СУБД».",
    "group": "Веб и API",
    "id": "m692"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: Уровень изоляции SERIALIZABLE — что верно?",
    "options": [
      "разные аномалии чтения/записи; знай свою СУБД",
      "все уровни идентичны в PostgreSQL",
      "только про DDL",
      "отключает индексы"
    ],
    "answer": 0,
    "explain": "Изоляции отличаются допустимыми аномалиями. Правильный ответ: «разные аномалии чтения/записи; знай свою СУБД».",
    "group": "Веб и API",
    "id": "m693"
  },
  {
    "topic": "context",
    "q": "Что означает «ExitStack.enter_context нужен когда»?",
    "options": [
      "динамическое число CM",
      "только один with",
      "вместо try",
      "async only"
    ],
    "answer": 0,
    "explain": "contextlib.ExitStack. Правильный ответ: «динамическое число CM».",
    "group": "Исключения и контекст",
    "id": "m694"
  },
  {
    "topic": "MRO",
    "q": "Что выведет C.__mro__[0].__name__?",
    "options": [
      "C",
      "A",
      "B",
      "object"
    ],
    "answer": 0,
    "explain": "Первый в MRO — сам класс. Правильный ответ: «C».",
    "code": "class A: pass\nclass B(A): pass\nclass C(B): pass\nprint(C.__mro__[0].__name__)",
    "group": "ООП продвинутый",
    "id": "m695"
  },
  {
    "topic": "match",
    "q": "Что такое case _ :?",
    "options": [
      "wildcard / default ветка",
      "ошибка синтаксиса",
      "только для None",
      "break"
    ],
    "answer": 0,
    "explain": "Ловит всё оставшееся. Правильный ответ: «wildcard / default ветка».",
    "group": "Typing и dataclasses",
    "id": "m696"
  },
  {
    "topic": "тесты",
    "q": "Что означает «pytest.mark.parametrize умножает»?",
    "options": [
      "тест на набор входных данных",
      "потоки",
      "процессы",
      "coverage магически"
    ],
    "answer": 0,
    "explain": "Таблица кейсов. Правильный ответ: «тест на набор входных данных».",
    "group": "Тесты и качество",
    "id": "m697"
  },
  {
    "topic": "json",
    "q": "Что вернёт 1})?",
    "options": [
      "{\"a\": 1}",
      "ошибка",
      "None",
      "?0"
    ],
    "answer": 0,
    "explain": "dumps → строка JSON. Правильный ответ: «{\"a\": 1}».",
    "code": "import json\nprint(json.dumps({'a': 1}))",
    "group": "Stdlib и производительность",
    "id": "m698"
  },
  {
    "topic": "json",
    "q": "Что вернёт 1}') тип?",
    "options": [
      "dict",
      "str",
      "JSON",
      "tuple"
    ],
    "answer": 0,
    "explain": "loads парсит в объекты Python. Правильный ответ: «dict».",
    "code": "import json\nprint(type(json.loads('{\"a\": 1}')).__name__)",
    "group": "Stdlib и производительность",
    "id": "m699"
  },
  {
    "topic": "json",
    "q": "Что вернёт [1, 2]})?",
    "options": [
      "{\"x\": [1, 2]}",
      "ошибка",
      "None",
      "?0"
    ],
    "answer": 0,
    "explain": "dumps → строка JSON. Правильный ответ: «{\"x\": [1, 2]}».",
    "code": "import json\nprint(json.dumps({'x': [1, 2]}))",
    "group": "Stdlib и производительность",
    "id": "m700"
  },
  {
    "topic": "json",
    "q": "Что вернёт [1, 2]}') тип?",
    "options": [
      "dict",
      "str",
      "JSON",
      "tuple"
    ],
    "answer": 0,
    "explain": "loads парсит в объекты Python. Правильный ответ: «dict».",
    "code": "import json\nprint(type(json.loads('{\"x\": [1, 2]}')).__name__)",
    "group": "Stdlib и производительность",
    "id": "m701"
  },
  {
    "topic": "json",
    "q": "Что вернёт True, 'n': None})?",
    "options": [
      "{\"ok\": true, \"n\": null}",
      "{\"ok\": True, \"n\": None}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "dumps → строка JSON. Правильный ответ: «{\"ok\": true, \"n\": null}».",
    "code": "import json\nprint(json.dumps({'ok': True, 'n': None}))",
    "group": "Stdlib и производительность",
    "id": "m702"
  },
  {
    "topic": "json",
    "q": "Что вернёт true, \"n\": null}') тип?",
    "options": [
      "dict",
      "str",
      "JSON",
      "tuple"
    ],
    "answer": 0,
    "explain": "loads парсит в объекты Python. Правильный ответ: «dict».",
    "code": "import json\nprint(type(json.loads('{\"ok\": true, \"n\": null}')).__name__)",
    "group": "Stdlib и производительность",
    "id": "m703"
  },
  {
    "topic": "json",
    "q": "Что выведет код?",
    "options": [
      "[1, 2, 3]",
      "ошибка",
      "None",
      "?0"
    ],
    "answer": 0,
    "explain": "dumps → строка JSON. Правильный ответ: «[1, 2, 3]».",
    "code": "import json\nprint(json.dumps([1, 2, 3]))",
    "group": "Stdlib и производительность",
    "id": "m704"
  },
  {
    "topic": "json",
    "q": "Что выведет код?",
    "options": [
      "list",
      "str",
      "JSON",
      "tuple"
    ],
    "answer": 0,
    "explain": "loads парсит в объекты Python. Правильный ответ: «list».",
    "code": "import json\nprint(type(json.loads('[1, 2, 3]')).__name__)",
    "group": "Stdlib и производительность",
    "id": "m705"
  },
  {
    "topic": "json",
    "q": "Что выведет код?",
    "options": [
      "\"hi\"",
      "hi",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "dumps → строка JSON. Правильный ответ: «\"hi\"».",
    "code": "import json\nprint(json.dumps('hi'))",
    "group": "Stdlib и производительность",
    "id": "m706"
  },
  {
    "topic": "json",
    "q": "Что выведет код?",
    "options": [
      "42",
      "ошибка",
      "None",
      "?0"
    ],
    "answer": 0,
    "explain": "dumps → строка JSON. Правильный ответ: «42».",
    "code": "import json\nprint(json.dumps(42))",
    "group": "Stdlib и производительность",
    "id": "m707"
  },
  {
    "topic": "json",
    "q": "Что выведет код?",
    "options": [
      "JSONDecodeError",
      "None",
      "{}",
      "ошибка SyntaxError"
    ],
    "answer": 0,
    "explain": "Невалидный JSON → JSONDecodeError.",
    "code": "import json\nprint(json.loads('{'))",
    "group": "Stdlib и производительность",
    "id": "m708"
  },
  {
    "topic": "json",
    "q": "Что выведет код?",
    "options": [
      "JSONDecodeError",
      "None",
      "{}",
      "ошибка SyntaxError"
    ],
    "answer": 0,
    "explain": "Невалидный JSON → JSONDecodeError.",
    "code": "import json\nprint(json.loads('nullish'))",
    "group": "Stdlib и производительность",
    "id": "m709"
  },
  {
    "topic": "json",
    "q": "Что выведет код?",
    "options": [
      "JSONDecodeError",
      "None",
      "{}",
      "ошибка SyntaxError"
    ],
    "answer": 0,
    "explain": "Невалидный JSON → JSONDecodeError.",
    "code": "import json\nprint(json.loads('[1, 2,'))",
    "group": "Stdlib и производительность",
    "id": "m710"
  },
  {
    "topic": "heapq",
    "q": "Что выведет код (минимум на [0])?",
    "options": [
      "1",
      "1",
      "5",
      "ошибка"
    ],
    "answer": 0,
    "explain": "После heapify h[0] — минимум (для min-heap). Правильный ответ: «1».",
    "code": "import heapq\nh = [5, 1, 3]\nheapq.heapify(h)\nprint(h[0])",
    "group": "Collections и itertools",
    "id": "m711"
  },
  {
    "topic": "heapq",
    "q": "Что выведет код?",
    "options": [
      "[1, 3]",
      "[1, 3, 5]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Два наименьших. Правильный ответ: «[1, 3]».",
    "code": "import heapq\nprint(heapq.nsmallest(2, [5, 1, 3]))",
    "group": "Collections и itertools",
    "id": "m712"
  },
  {
    "topic": "heapq",
    "q": "Что выведет код (минимум на [0])?",
    "options": [
      "1",
      "1",
      "9",
      "ошибка"
    ],
    "answer": 0,
    "explain": "После heapify h[0] — минимум (для min-heap). Правильный ответ: «1».",
    "code": "import heapq\nh = [9, 2, 7, 1]\nheapq.heapify(h)\nprint(h[0])",
    "group": "Collections и itertools",
    "id": "m713"
  },
  {
    "topic": "heapq",
    "q": "Что выведет код?",
    "options": [
      "[1, 2]",
      "[1, 2, 7]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Два наименьших. Правильный ответ: «[1, 2]».",
    "code": "import heapq\nprint(heapq.nsmallest(2, [9, 2, 7, 1]))",
    "group": "Collections и itertools",
    "id": "m714"
  },
  {
    "topic": "heapq",
    "q": "Что выведет код (минимум на [0])?",
    "options": [
      "1",
      "1",
      "4",
      "ошибка"
    ],
    "answer": 0,
    "explain": "После heapify h[0] — минимум (для min-heap). Правильный ответ: «1».",
    "code": "import heapq\nh = [4, 4, 1]\nheapq.heapify(h)\nprint(h[0])",
    "group": "Collections и itertools",
    "id": "m715"
  },
  {
    "topic": "heapq",
    "q": "Что выведет код?",
    "options": [
      "[1, 4]",
      "[1, 4, 4]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Два наименьших. Правильный ответ: «[1, 4]».",
    "code": "import heapq\nprint(heapq.nsmallest(2, [4, 4, 1]))",
    "group": "Collections и itertools",
    "id": "m716"
  },
  {
    "topic": "heapq",
    "q": "Что выведет код (минимум на [0])?",
    "options": [
      "5",
      "5",
      "10",
      "ошибка"
    ],
    "answer": 0,
    "explain": "После heapify h[0] — минимум (для min-heap). Правильный ответ: «5».",
    "code": "import heapq\nh = [10, 20, 5, 30]\nheapq.heapify(h)\nprint(h[0])",
    "group": "Collections и itertools",
    "id": "m717"
  },
  {
    "topic": "heapq",
    "q": "Что выведет код?",
    "options": [
      "[5, 10]",
      "[5, 10, 20]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Два наименьших. Правильный ответ: «[5, 10]».",
    "code": "import heapq\nprint(heapq.nsmallest(2, [10, 20, 5, 30]))",
    "group": "Collections и itertools",
    "id": "m718"
  },
  {
    "topic": "bisect",
    "q": "Что выведет код?",
    "options": [
      "2",
      "0",
      "4",
      "?0"
    ],
    "answer": 0,
    "explain": "Индекс вставки слева для сохранения порядка. Правильный ответ: «2».",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 4))",
    "group": "Collections и itertools",
    "id": "m719"
  },
  {
    "topic": "bisect",
    "q": "Что выведет код?",
    "options": [
      "0",
      "1",
      "4",
      "?0"
    ],
    "answer": 0,
    "explain": "Индекс вставки слева для сохранения порядка. Правильный ответ: «0».",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 1))",
    "group": "Collections и itertools",
    "id": "m720"
  },
  {
    "topic": "bisect",
    "q": "Что выведет код?",
    "options": [
      "3",
      "4",
      "0",
      "7"
    ],
    "answer": 0,
    "explain": "Индекс вставки слева для сохранения порядка. Правильный ответ: «3».",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 7))",
    "group": "Collections и itertools",
    "id": "m721"
  },
  {
    "topic": "bisect",
    "q": "Что выведет код?",
    "options": [
      "0",
      "4",
      "?0",
      "?1"
    ],
    "answer": 0,
    "explain": "Индекс вставки слева для сохранения порядка. Правильный ответ: «0».",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 0))",
    "group": "Collections и itertools",
    "id": "m722"
  },
  {
    "topic": "bisect",
    "q": "Что выведет код?",
    "options": [
      "4",
      "0",
      "8",
      "?0"
    ],
    "answer": 0,
    "explain": "Индекс вставки слева для сохранения порядка. Правильный ответ: «4».",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 8))",
    "group": "Collections и itertools",
    "id": "m723"
  },
  {
    "topic": "bisect",
    "q": "Что выведет код?",
    "options": [
      "2",
      "0",
      "3",
      "5"
    ],
    "answer": 0,
    "explain": "Индекс вставки слева для сохранения порядка. Правильный ответ: «2».",
    "code": "import bisect\nprint(bisect.bisect_left([2, 4, 6], 5))",
    "group": "Collections и itertools",
    "id": "m724"
  },
  {
    "topic": "bisect",
    "q": "Что выведет код?",
    "options": [
      "1",
      "2",
      "0",
      "3"
    ],
    "answer": 0,
    "explain": "Индекс вставки слева для сохранения порядка. Правильный ответ: «1».",
    "code": "import bisect\nprint(bisect.bisect_left([2, 4, 6], 4))",
    "group": "Collections и itertools",
    "id": "m725"
  },
  {
    "topic": "walrus",
    "q": "Что выведет код?",
    "options": [
      "no",
      "0",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": ":= присваивает и использует значение в условии. Правильный ответ: «no».",
    "code": "if (x := 0):\n    print(x)\nelse:\n    print('no')",
    "group": "Typing и dataclasses",
    "id": "m726"
  },
  {
    "topic": "walrus",
    "q": "Что выведет код?",
    "options": [
      "1",
      "no",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": ":= присваивает и использует значение в условии. Правильный ответ: «1».",
    "code": "if (x := 1):\n    print(x)\nelse:\n    print('no')",
    "group": "Typing и dataclasses",
    "id": "m727"
  },
  {
    "topic": "walrus",
    "q": "Что выведет код?",
    "options": [
      "2",
      "no",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": ":= присваивает и использует значение в условии. Правильный ответ: «2».",
    "code": "if (x := 2):\n    print(x)\nelse:\n    print('no')",
    "group": "Typing и dataclasses",
    "id": "m728"
  },
  {
    "topic": "walrus",
    "q": "Что выведет код?",
    "options": [
      "5",
      "no",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": ":= присваивает и использует значение в условии. Правильный ответ: «5».",
    "code": "if (x := 5):\n    print(x)\nelse:\n    print('no')",
    "group": "Typing и dataclasses",
    "id": "m729"
  },
  {
    "topic": "walrus",
    "q": "Что выведет код?",
    "options": [
      "10",
      "no",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": ":= присваивает и использует значение в условии. Правильный ответ: «10».",
    "code": "if (x := 10):\n    print(x)\nelse:\n    print('no')",
    "group": "Typing и dataclasses",
    "id": "m730"
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "zero",
      "ошибка",
      "None",
      "0"
    ],
    "answer": 0,
    "explain": "match/case сопоставляет значение. Правильный ответ: «zero».",
    "code": "x = 0\nmatch x:\n    case 0:\n        print('zero')\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "group": "Typing и dataclasses",
    "id": "m731"
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "one",
      "ошибка",
      "None",
      "1"
    ],
    "answer": 0,
    "explain": "match/case сопоставляет значение. Правильный ответ: «one».",
    "code": "x = 1\nmatch x:\n    case 0:\n        print('zero')\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "group": "Typing и dataclasses",
    "id": "m732"
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "other",
      "ошибка",
      "None",
      "2"
    ],
    "answer": 0,
    "explain": "match/case сопоставляет значение. Правильный ответ: «other».",
    "code": "x = 2\nmatch x:\n    case 0:\n        print('zero')\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "group": "Typing и dataclasses",
    "id": "m733"
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "other",
      "ошибка",
      "None",
      "99"
    ],
    "answer": 0,
    "explain": "match/case сопоставляет значение. Правильный ответ: «other».",
    "code": "x = 99\nmatch x:\n    case 0:\n        print('zero')\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "group": "Typing и dataclasses",
    "id": "m734"
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "pair",
      "ошибка",
      "None",
      "[1, 2]"
    ],
    "answer": 0,
    "explain": "Паттерны последовательностей в match. Правильный ответ: «pair».",
    "code": "x = [1, 2]\nmatch x:\n    case []:\n        print('empty')\n    case [_]:\n        print('single')\n    case [_, _]:\n        print('pair')\n    case _:\n        print('many')",
    "group": "Typing и dataclasses",
    "id": "m735"
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "single",
      "ошибка",
      "None",
      "[1]"
    ],
    "answer": 0,
    "explain": "Паттерны последовательностей в match. Правильный ответ: «single».",
    "code": "x = [1]\nmatch x:\n    case []:\n        print('empty')\n    case [_]:\n        print('single')\n    case [_, _]:\n        print('pair')\n    case _:\n        print('many')",
    "group": "Typing и dataclasses",
    "id": "m736"
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "many",
      "ошибка",
      "None",
      "[1, 2, 3]"
    ],
    "answer": 0,
    "explain": "Паттерны последовательностей в match. Правильный ответ: «many».",
    "code": "x = [1, 2, 3]\nmatch x:\n    case []:\n        print('empty')\n    case [_]:\n        print('single')\n    case [_, _]:\n        print('pair')\n    case _:\n        print('many')",
    "group": "Typing и dataclasses",
    "id": "m737"
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "empty",
      "ошибка",
      "None",
      "[]"
    ],
    "answer": 0,
    "explain": "Паттерны последовательностей в match. Правильный ответ: «empty».",
    "code": "x = []\nmatch x:\n    case []:\n        print('empty')\n    case [_]:\n        print('single')\n    case [_, _]:\n        print('pair')\n    case _:\n        print('many')",
    "group": "Typing и dataclasses",
    "id": "m738"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[1, 3]",
      "[1, 2]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Накопительная сумма. Правильный ответ: «[1, 3]».",
    "code": "from itertools import accumulate\nprint(list(accumulate(range(1, 3))))",
    "group": "Collections и itertools",
    "id": "m739"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[1, 2, 0, 1]",
      "[[1, 2], [0, 1]]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "chain склеивает итерируемые. Правильный ответ: «[1, 2, 0, 1]».",
    "code": "from itertools import chain\nprint(list(chain([1, 2], list(range(2)))))",
    "group": "Collections и itertools",
    "id": "m740"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[1, 3, 6]",
      "[1, 2, 3]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Накопительная сумма. Правильный ответ: «[1, 3, 6]».",
    "code": "from itertools import accumulate\nprint(list(accumulate(range(1, 4))))",
    "group": "Collections и itertools",
    "id": "m741"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[1, 2, 0, 1, 2]",
      "[[1, 2], [0, 1, 2]]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "chain склеивает итерируемые. Правильный ответ: «[1, 2, 0, 1, 2]».",
    "code": "from itertools import chain\nprint(list(chain([1, 2], list(range(3)))))",
    "group": "Collections и itertools",
    "id": "m742"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[1, 3, 6, 10]",
      "[1, 2, 3, 4]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Накопительная сумма. Правильный ответ: «[1, 3, 6, 10]».",
    "code": "from itertools import accumulate\nprint(list(accumulate(range(1, 5))))",
    "group": "Collections и itertools",
    "id": "m743"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[1, 2, 0, 1, 2, 3]",
      "[[1, 2], [0, 1, 2, 3]]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "chain склеивает итерируемые. Правильный ответ: «[1, 2, 0, 1, 2, 3]».",
    "code": "from itertools import chain\nprint(list(chain([1, 2], list(range(4)))))",
    "group": "Collections и itertools",
    "id": "m744"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[1, 3, 6, 10, 15]",
      "[1, 2, 3, 4, 5]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Накопительная сумма. Правильный ответ: «[1, 3, 6, 10, 15]».",
    "code": "from itertools import accumulate\nprint(list(accumulate(range(1, 6))))",
    "group": "Collections и itertools",
    "id": "m745"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[1, 2, 0, 1, 2, 3, 4]",
      "[[1, 2], [0, 1, 2, 3, 4]]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "chain склеивает итерируемые. Правильный ответ: «[1, 2, 0, 1, 2, 3, 4]».",
    "code": "from itertools import chain\nprint(list(chain([1, 2], list(range(5)))))",
    "group": "Collections и itertools",
    "id": "m746"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "6",
      "3",
      "9",
      "?0"
    ],
    "answer": 0,
    "explain": "P(3,2) = 6.",
    "code": "from itertools import permutations\nprint(len(list(permutations(range(3), 2))))",
    "group": "Collections и itertools",
    "id": "m747"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "12",
      "6",
      "8",
      "16"
    ],
    "answer": 0,
    "explain": "P(4,2) = 12.",
    "code": "from itertools import permutations\nprint(len(list(permutations(range(4), 2))))",
    "group": "Collections и itertools",
    "id": "m748"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "20",
      "10",
      "25",
      "120"
    ],
    "answer": 0,
    "explain": "P(5,2) = 20.",
    "code": "from itertools import permutations\nprint(len(list(permutations(range(5), 2))))",
    "group": "Collections и itertools",
    "id": "m749"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "6",
      "1",
      "9",
      "27"
    ],
    "answer": 0,
    "explain": "P(3,3) = 6.",
    "code": "from itertools import permutations\nprint(len(list(permutations(range(3), 3))))",
    "group": "Collections и itertools",
    "id": "m750"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[(1, 2), (2, 2), (3, 1)]",
      "[1, 2, 3]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "groupby группирует только подряд идущие одинаковые. Правильный ответ: «[(1, 2), (2, 2), (3, 1)]».",
    "code": "from itertools import groupby\nprint([(k, len(list(g))) for k, g in groupby([1, 1, 2, 2, 3])])",
    "group": "Collections и itertools",
    "id": "m751"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[(5, 3)]",
      "[5]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "groupby группирует только подряд идущие одинаковые. Правильный ответ: «[(5, 3)]».",
    "code": "from itertools import groupby\nprint([(k, len(list(g))) for k, g in groupby([5, 5, 5])])",
    "group": "Collections и itertools",
    "id": "m752"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[(1, 1), (2, 1), (1, 1)]",
      "[1, 2]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "groupby группирует только подряд идущие одинаковые. Правильный ответ: «[(1, 1), (2, 1), (1, 1)]».",
    "code": "from itertools import groupby\nprint([(k, len(list(g))) for k, g in groupby([1, 2, 1])])",
    "group": "Collections и itertools",
    "id": "m753"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[(0, 2), (1, 2), (0, 1)]",
      "[0, 1]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "groupby группирует только подряд идущие одинаковые. Правильный ответ: «[(0, 2), (1, 2), (0, 1)]».",
    "code": "from itertools import groupby\nprint([(k, len(list(g))) for k, g in groupby([0, 0, 1, 1, 0])])",
    "group": "Collections и itertools",
    "id": "m754"
  },
  {
    "topic": "functools",
    "q": "Что вернёт a+b, [1, 2, 3, 4])?",
    "options": [
      "10",
      "11",
      "1",
      "4"
    ],
    "answer": 0,
    "explain": "Свёртка суммы. Правильный ответ: «10».",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a + b, [1, 2, 3, 4]))",
    "group": "Collections и itertools",
    "id": "m755"
  },
  {
    "topic": "functools",
    "q": "Что вернёт a*b, [1, 2, 3, 4])?",
    "options": [
      "24",
      "10",
      "1",
      "0"
    ],
    "answer": 0,
    "explain": "Свёртка произведения. Правильный ответ: «24».",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a * b, [1, 2, 3, 4]))",
    "group": "Collections и itertools",
    "id": "m756"
  },
  {
    "topic": "functools",
    "q": "Что вернёт a+b, [2, 2, 2])?",
    "options": [
      "6",
      "7",
      "2",
      "3"
    ],
    "answer": 0,
    "explain": "Свёртка суммы. Правильный ответ: «6».",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a + b, [2, 2, 2]))",
    "group": "Collections и itertools",
    "id": "m757"
  },
  {
    "topic": "functools",
    "q": "Что вернёт a*b, [2, 2, 2])?",
    "options": [
      "8",
      "6",
      "2",
      "0"
    ],
    "answer": 0,
    "explain": "Свёртка произведения. Правильный ответ: «8».",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a * b, [2, 2, 2]))",
    "group": "Collections и itertools",
    "id": "m758"
  },
  {
    "topic": "functools",
    "q": "Что вернёт a+b, [5, 1, 1])?",
    "options": [
      "7",
      "8",
      "5",
      "3"
    ],
    "answer": 0,
    "explain": "Свёртка суммы. Правильный ответ: «7».",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a + b, [5, 1, 1]))",
    "group": "Collections и itertools",
    "id": "m759"
  },
  {
    "topic": "functools",
    "q": "Что вернёт a*b, [5, 1, 1])?",
    "options": [
      "5",
      "7",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Свёртка произведения. Правильный ответ: «5».",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a * b, [5, 1, 1]))",
    "group": "Collections и itertools",
    "id": "m760"
  },
  {
    "topic": "functools",
    "q": "Что вернёт a+b, [10, 2])?",
    "options": [
      "12",
      "13",
      "10",
      "2"
    ],
    "answer": 0,
    "explain": "Свёртка суммы. Правильный ответ: «12».",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a + b, [10, 2]))",
    "group": "Collections и itertools",
    "id": "m761"
  },
  {
    "topic": "functools",
    "q": "Что вернёт a*b, [10, 2])?",
    "options": [
      "20",
      "12",
      "10",
      "0"
    ],
    "answer": 0,
    "explain": "Свёртка произведения. Правильный ответ: «20».",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a * b, [10, 2]))",
    "group": "Collections и itertools",
    "id": "m762"
  },
  {
    "topic": "functools",
    "q": "Что вернёт lru_cache(maxsize=1) хранит?",
    "options": [
      "до 1 результатов вызовов",
      "только последний вызов всегда",
      "на диске",
      "в Redis"
    ],
    "answer": 0,
    "explain": "Кэш в памяти процесса. Правильный ответ: «до 1 результатов вызовов».",
    "group": "Collections и itertools",
    "id": "m763"
  },
  {
    "topic": "functools",
    "q": "Что вернёт lru_cache(maxsize=2) хранит?",
    "options": [
      "до 2 результатов вызовов",
      "только последний вызов всегда",
      "на диске",
      "в Redis"
    ],
    "answer": 0,
    "explain": "Кэш в памяти процесса. Правильный ответ: «до 2 результатов вызовов».",
    "group": "Collections и itertools",
    "id": "m764"
  },
  {
    "topic": "functools",
    "q": "Что вернёт lru_cache(maxsize=8) хранит?",
    "options": [
      "до 8 результатов вызовов",
      "только последний вызов всегда",
      "на диске",
      "в Redis"
    ],
    "answer": 0,
    "explain": "Кэш в памяти процесса. Правильный ответ: «до 8 результатов вызовов».",
    "group": "Collections и itertools",
    "id": "m765"
  },
  {
    "topic": "functools",
    "q": "Что вернёт lru_cache(maxsize=128) хранит?",
    "options": [
      "до 128 результатов вызовов",
      "только последний вызов всегда",
      "на диске",
      "в Redis"
    ],
    "answer": 0,
    "explain": "Кэш в памяти процесса. Правильный ответ: «до 128 результатов вызовов».",
    "group": "Collections и itertools",
    "id": "m766"
  },
  {
    "topic": "functools",
    "q": "Что вернёт lru_cache(maxsize=None (безлимит)) хранит?",
    "options": [
      "неограниченно (осторожно с RAM)",
      "ровно 0 записей",
      "на диске",
      "в Redis"
    ],
    "answer": 0,
    "explain": "Кэш в памяти процесса. Правильный ответ: «неограниченно (осторожно с RAM)».",
    "group": "Collections и itertools",
    "id": "m767"
  },
  {
    "topic": "copy",
    "q": "Что выведет код?",
    "options": [
      "True (shallow)",
      "False (deep)",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "shallow копирует верхний уровень. Правильный ответ: «True (shallow)».",
    "code": "import copy\na = [[1], [2]]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m768"
  },
  {
    "topic": "copy",
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "deepcopy копирует вложенность. Правильный ответ: «False».",
    "code": "import copy\na = [[1], [2]]\nb = copy.deepcopy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m769"
  },
  {
    "topic": "copy",
    "q": "Что выведет код?",
    "options": [
      "True (shallow)",
      "False (deep)",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "shallow копирует верхний уровень. Правильный ответ: «True (shallow)».",
    "code": "import copy\na = [[0, 0], [1]]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m770"
  },
  {
    "topic": "copy",
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "deepcopy копирует вложенность. Правильный ответ: «False».",
    "code": "import copy\na = [[0, 0], [1]]\nb = copy.deepcopy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m771"
  },
  {
    "topic": "copy",
    "q": "Что выведет код?",
    "options": [
      "True (shallow)",
      "False (deep)",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "shallow копирует верхний уровень. Правильный ответ: «True (shallow)».",
    "code": "import copy\na = [{'a': 1}]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m772"
  },
  {
    "topic": "copy",
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "deepcopy копирует вложенность. Правильный ответ: «False».",
    "code": "import copy\na = [{'a': 1}]\nb = copy.deepcopy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m773"
  },
  {
    "topic": "copy",
    "q": "Что выведет код?",
    "options": [
      "True (shallow)",
      "False (deep)",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "shallow копирует верхний уровень. Правильный ответ: «True (shallow)».",
    "code": "import copy\na = [[]]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m774"
  },
  {
    "topic": "copy",
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "deepcopy копирует вложенность. Правильный ответ: «False».",
    "code": "import copy\na = [[]]\nb = copy.deepcopy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m775"
  },
  {
    "topic": "copy",
    "q": "Что выведет код?",
    "options": [
      "True (shallow)",
      "False (deep)",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "shallow копирует верхний уровень. Правильный ответ: «True (shallow)».",
    "code": "import copy\na = [[1, 2, 3]]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m776"
  },
  {
    "topic": "copy",
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "deepcopy копирует вложенность. Правильный ответ: «False».",
    "code": "import copy\na = [[1, 2, 3]]\nb = copy.deepcopy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m777"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "etc/passwd",
      "etc\\passwd",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Склейка частей пути. Правильный ответ: «etc/passwd».",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('etc', 'passwd'))",
    "group": "Stdlib и производительность",
    "id": "m778"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "var/log/syslog",
      "var\\log\\syslog",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Склейка частей пути. Правильный ответ: «var/log/syslog».",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('var', 'log', 'syslog'))",
    "group": "Stdlib и производительность",
    "id": "m779"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "tmp/x",
      "tmp\\x",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Склейка частей пути. Правильный ответ: «tmp/x».",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('tmp', 'x'))",
    "group": "Stdlib и производительность",
    "id": "m780"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "usr/bin/python",
      "usr\\bin\\python",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Склейка частей пути. Правильный ответ: «usr/bin/python».",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('usr', 'bin', 'python'))",
    "group": "Stdlib и производительность",
    "id": "m781"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "'.txt'",
      "'a.txt'",
      "ошибка",
      "''"
    ],
    "answer": 0,
    "explain": "suffix — последний суффикс (для tar.gz это .gz). Правильный ответ: «'.txt'».",
    "code": "from pathlib import PurePath\nprint(PurePath('a.txt').suffix)",
    "group": "Stdlib и производительность",
    "id": "m782"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "'.JSON'",
      "'B.JSON'",
      "ошибка",
      "''"
    ],
    "answer": 0,
    "explain": "suffix — последний суффикс (для tar.gz это .gz). Правильный ответ: «'.JSON'».",
    "code": "from pathlib import PurePath\nprint(PurePath('B.JSON').suffix)",
    "group": "Stdlib и производительность",
    "id": "m783"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "'.PNG'",
      "'photo.PNG'",
      "ошибка",
      "''"
    ],
    "answer": 0,
    "explain": "suffix — последний суффикс (для tar.gz это .gz). Правильный ответ: «'.PNG'».",
    "code": "from pathlib import PurePath\nprint(PurePath('photo.PNG').suffix)",
    "group": "Stdlib и производительность",
    "id": "m784"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "'.gz'",
      "'archive.tar.gz'",
      "ошибка",
      "''"
    ],
    "answer": 0,
    "explain": "suffix — последний суффикс (для tar.gz это .gz). Правильный ответ: «'.gz'».",
    "code": "from pathlib import PurePath\nprint(PurePath('archive.tar.gz').suffix)",
    "group": "Stdlib и производительность",
    "id": "m785"
  },
  {
    "topic": "exceptions",
    "q": "Что означает «ValueError наследует»?",
    "options": [
      "Exception",
      "только object",
      "Warning",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "ValueError → … → Exception → ….",
    "group": "Исключения и контекст",
    "id": "m786"
  },
  {
    "topic": "exceptions",
    "q": "Что означает «KeyError наследует»?",
    "options": [
      "LookupError",
      "только object",
      "Warning",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "KeyError → … → LookupError → ….",
    "group": "Исключения и контекст",
    "id": "m787"
  },
  {
    "topic": "exceptions",
    "q": "Что означает «IndexError наследует»?",
    "options": [
      "LookupError",
      "только object",
      "Warning",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "IndexError → … → LookupError → ….",
    "group": "Исключения и контекст",
    "id": "m788"
  },
  {
    "topic": "exceptions",
    "q": "Что означает «FileNotFoundError наследует»?",
    "options": [
      "OSError",
      "только object",
      "Warning",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "FileNotFoundError → … → OSError → ….",
    "group": "Исключения и контекст",
    "id": "m789"
  },
  {
    "topic": "exceptions",
    "q": "Что означает «ZeroDivisionError наследует»?",
    "options": [
      "ArithmeticError",
      "только object",
      "Warning",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "ZeroDivisionError → … → ArithmeticError → ….",
    "group": "Исключения и контекст",
    "id": "m790"
  },
  {
    "topic": "exceptions",
    "q": "Что означает «TypeError наследует»?",
    "options": [
      "Exception",
      "только object",
      "Warning",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "TypeError → … → Exception → ….",
    "group": "Исключения и контекст",
    "id": "m791"
  },
  {
    "topic": "exceptions",
    "q": "Что означает «StopIteration наследует»?",
    "options": [
      "Exception",
      "только object",
      "Warning",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "StopIteration → … → Exception → ….",
    "group": "Исключения и контекст",
    "id": "m792"
  },
  {
    "topic": "exceptions",
    "q": "Что означает «KeyboardInterrupt наследует»?",
    "options": [
      "BaseException",
      "только object",
      "Warning",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "KeyboardInterrupt → … → BaseException → ….",
    "group": "Исключения и контекст",
    "id": "m793"
  },
  {
    "topic": "context",
    "q": "Что вернёт с 1 вложенными with без ExitStack?",
    "options": [
      "можно вложить / или один with a, b",
      "нельзя никогда",
      "только async",
      "нужен GIL"
    ],
    "answer": 0,
    "explain": "with open() as a, open() as b: или ExitStack для динамики. Правильный ответ: «можно вложить / или один with a, b».",
    "group": "Исключения и контекст",
    "id": "m794"
  },
  {
    "topic": "context",
    "q": "Что вернёт с 2 вложенными with без ExitStack?",
    "options": [
      "можно вложить / или один with a, b",
      "нельзя никогда",
      "только async",
      "нужен GIL"
    ],
    "answer": 0,
    "explain": "with open() as a, open() as b: или ExitStack для динамики. Правильный ответ: «можно вложить / или один with a, b».",
    "group": "Исключения и контекст",
    "id": "m795"
  },
  {
    "topic": "context",
    "q": "Что вернёт с 3 вложенными with без ExitStack?",
    "options": [
      "можно вложить / или один with a, b",
      "нельзя никогда",
      "только async",
      "нужен GIL"
    ],
    "answer": 0,
    "explain": "with open() as a, open() as b: или ExitStack для динамики. Правильный ответ: «можно вложить / или один with a, b».",
    "group": "Исключения и контекст",
    "id": "m796"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 200 — кратко?",
    "options": [
      "успех с телом",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 200: успех с телом.",
    "group": "Веб и API",
    "id": "m797"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 201 — кратко?",
    "options": [
      "ресурс создан",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 201: ресурс создан.",
    "group": "Веб и API",
    "id": "m798"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 204 — кратко?",
    "options": [
      "успех без тела",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 204: успех без тела.",
    "group": "Веб и API",
    "id": "m799"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 304 — кратко?",
    "options": [
      "не изменилось / кэш",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 304: не изменилось / кэш.",
    "group": "Веб и API",
    "id": "m800"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 400 — кратко?",
    "options": [
      "ошибка клиента",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 400: ошибка клиента.",
    "group": "Веб и API",
    "id": "m801"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 401 — кратко?",
    "options": [
      "нужна аутентификация",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 401: нужна аутентификация.",
    "group": "Веб и API",
    "id": "m802"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 403 — кратко?",
    "options": [
      "запрещено",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 403: запрещено.",
    "group": "Веб и API",
    "id": "m803"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 404 — кратко?",
    "options": [
      "не найдено",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 404: не найдено.",
    "group": "Веб и API",
    "id": "m804"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 409 — кратко?",
    "options": [
      "конфликт состояния",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 409: конфликт состояния.",
    "group": "Веб и API",
    "id": "m805"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 429 — кратко?",
    "options": [
      "лимит запросов",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 429: лимит запросов.",
    "group": "Веб и API",
    "id": "m806"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 500 — кратко?",
    "options": [
      "ошибка сервера",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 500: ошибка сервера.",
    "group": "Веб и API",
    "id": "m807"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 502 — кратко?",
    "options": [
      "плохой шлюз",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 502: плохой шлюз.",
    "group": "Веб и API",
    "id": "m808"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 503 — кратко?",
    "options": [
      "сервис недоступен",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 503: сервис недоступен.",
    "group": "Веб и API",
    "id": "m809"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 504 — кратко?",
    "options": [
      "таймаут шлюза",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 504: таймаут шлюза.",
    "group": "Веб и API",
    "id": "m810"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: Типичная роль `WHERE`?",
    "options": [
      "фильтр строк до группировки",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "WHERE в SQL. Правильный ответ: «фильтр строк до группировки».",
    "group": "Веб и API",
    "id": "m811"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: Типичная роль `JOIN`?",
    "options": [
      "связь таблиц",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "JOIN в SQL. Правильный ответ: «связь таблиц».",
    "group": "Веб и API",
    "id": "m812"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: Типичная роль `GROUP BY`?",
    "options": [
      "агрегация по ключу",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "GROUP BY в SQL. Правильный ответ: «агрегация по ключу».",
    "group": "Веб и API",
    "id": "m813"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: Типичная роль `HAVING`?",
    "options": [
      "фильтр после GROUP BY",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "HAVING в SQL. Правильный ответ: «фильтр после GROUP BY».",
    "group": "Веб и API",
    "id": "m814"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: Типичная роль `ORDER BY`?",
    "options": [
      "сортировка результата",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "ORDER BY в SQL. Правильный ответ: «сортировка результата».",
    "group": "Веб и API",
    "id": "m815"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: Типичная роль `LIMIT`?",
    "options": [
      "ограничить число строк",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "LIMIT в SQL. Правильный ответ: «ограничить число строк».",
    "group": "Веб и API",
    "id": "m816"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: Типичная роль `OFFSET`?",
    "options": [
      "пропустить N строк",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "OFFSET в SQL. Правильный ответ: «пропустить N строк».",
    "group": "Веб и API",
    "id": "m817"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: Типичная роль `RETURNING`?",
    "options": [
      "вернуть строки после INSERT/UPDATE/DELETE (PG и др.)",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "RETURNING в SQL. Правильный ответ: «вернуть строки после INSERT/UPDATE/DELETE (PG и др.)».",
    "group": "Веб и API",
    "id": "m818"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: SELECT … LIMIT 1 без ORDER BY?",
    "options": [
      "набор из N строк без стабильного порядка",
      "всегда первые 1 по PK",
      "ошибка синтаксиса",
      "полный table lock"
    ],
    "answer": 0,
    "explain": "Без ORDER BY порядок не гарантирован. Правильный ответ: «набор из N строк без стабильного порядка».",
    "group": "Веб и API",
    "id": "m819"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: SELECT … LIMIT 5 без ORDER BY?",
    "options": [
      "набор из N строк без стабильного порядка",
      "всегда первые 5 по PK",
      "ошибка синтаксиса",
      "полный table lock"
    ],
    "answer": 0,
    "explain": "Без ORDER BY порядок не гарантирован. Правильный ответ: «набор из N строк без стабильного порядка».",
    "group": "Веб и API",
    "id": "m820"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: SELECT … LIMIT 50 без ORDER BY?",
    "options": [
      "набор из N строк без стабильного порядка",
      "всегда первые 50 по PK",
      "ошибка синтаксиса",
      "полный table lock"
    ],
    "answer": 0,
    "explain": "Без ORDER BY порядок не гарантирован. Правильный ответ: «набор из N строк без стабильного порядка».",
    "group": "Веб и API",
    "id": "m821"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: SELECT … LIMIT 500 без ORDER BY?",
    "options": [
      "набор из N строк без стабильного порядка",
      "всегда первые 500 по PK",
      "ошибка синтаксиса",
      "полный table lock"
    ],
    "answer": 0,
    "explain": "Без ORDER BY порядок не гарантирован. Правильный ответ: «набор из N строк без стабильного порядка».",
    "group": "Веб и API",
    "id": "m822"
  }
];
