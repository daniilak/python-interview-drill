// @meta topic=typing group=Typing и dataclasses
// middle · 43 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что вернёт list[int] в аннотации (3.9+) значит?",
    "options": [
      "подсказка типов, на runtime не проверяет сама",
      "runtime проверка всегда",
      "создаёт typed list",
      "запрещает append str"
    ],
    "answer": 0,
    "explain": "Подсказка типов, на runtime не проверяет сама. Это про проверку типов/сигнатуры, не про ускорение runtime.",
    "kind": "single",
    "id": "m31",
    "fixed": true
  },
  {
    "q": "Что описывает typing.TypedDict?",
    "options": [
      "словарь с известным набором ключей и типами значений для чекера",
      "обязательную runtime-проверку типов на каждом обращении",
      "ускорение байткода за счёт аннотаций",
      "замену исключений кодами возврата"
    ],
    "answer": 0,
    "explain": "TypedDict — контракт для type checker (mypy/pyright). В рантайме это обычный dict, аннотации сами по себе не проверяются и не ускоряют VM.",
    "kind": "single",
    "id": "m61",
    "fixed": true
  },
  {
    "q": "Что задаёт TypeVar(..., bound=...)?",
    "options": [
      "верхнюю границу допустимых подстановок типа",
      "что параметр обязан быть литералом",
      "максимальную длину list",
      "ускорение байткода в runtime"
    ],
    "answer": 0,
    "explain": "bound=Base значит: вместо TypeVar можно подставить только Base и его подтипы. Это подсказка для чекера, не runtime-ускорение.",
    "kind": "single",
    "id": "m76",
    "fixed": true
  },
  {
    "q": "Что вернёт Annotated[int, ...] несёт?",
    "options": [
      "метаданные для инструментов",
      "runtime check обязательно",
      "GIL hint",
      "скорость"
    ],
    "answer": 0,
    "explain": "Результат выражения — метаданные для инструментов. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m185",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print(isinstance([1, 2], list))",
    "id": "m211",
    "fixed": true
  },
  {
    "q": "Что создаёт typing.NewType?",
    "options": [
      "отдельный тип для type checker; в runtime — тонкая обёртка/функция",
      "новый класс с другим MRO обязательно",
      "ускорение словаря",
      "таблицу в БД"
    ],
    "answer": 0,
    "explain": "UserId = NewType('UserId', int): для mypy UserId ≠ int, в runtime это всё ещё int-подобные значения.",
    "kind": "single",
    "id": "m263",
    "fixed": true
  },
  {
    "q": "Что означает Protocol с @property в typing?",
    "options": [
      "структурное требование: у объекта должен быть такой атрибут/свойство",
      "обязательный runtime property decorator",
      "генерацию __slots__",
      "запрет dataclass"
    ],
    "answer": 0,
    "explain": "В Protocol свойство описывает наличие атрибута для чекера (и runtime_checkable — ограниченно). Это не создаёт property само.",
    "kind": "single",
    "id": "m276",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "обычно нет",
      "да всегда TypeError",
      "только mypy runtime",
      "GIL check"
    ],
    "answer": 0,
    "explain": "Аннотации list[int] в runtime обычно не проверяют элементы сами по себе.",
    "kind": "single",
    "code": "def f(xs: list[int]):\n    return xs\nprint(f(['a']))",
    "id": "m289",
    "fixed": true
  },
  {
    "q": "С чем связаны Unpack и TypeVarTuple?",
    "options": [
      "с вариативными generics (произвольное число type-параметров)",
      "с ускорением runtime",
      "только с Enum",
      "с файловым I/O"
    ],
    "answer": 0,
    "explain": "TypeVarTuple/Unpack (PEP 646) описывают *Ts в типах — для чекера, не для скорости VM.",
    "kind": "single",
    "id": "m315",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "print(isinstance((1, 2), list))",
    "id": "m367",
    "fixed": true
  },
  {
    "q": "Что означает аннотация typing.NoReturn?",
    "options": [
      "функция не завершается нормальным return (exit/throw/бесконечный цикл)",
      "то же самое, что return None",
      "ускоряет байткод в runtime",
      "доступна только в Python 2.7"
    ],
    "answer": 0,
    "explain": "NoReturn — для функций вроде sys.exit или вечного loop: нормального возврата нет. Это не `-> None`. В новых версиях близок typing.Never.",
    "kind": "single",
    "id": "m380",
    "fixed": true
  },
  {
    "q": "Что вернёт isinstance([1], dict[str, int]) в обычном CPython?",
    "options": [
      "TypeError (или False в отдельных случаях) — generic alias не для isinstance так",
      "True всегда",
      "False всегда без ошибки",
      "True только в 3.12+"
    ],
    "answer": 0,
    "explain": "Для generics нужен typing.get_origin / runtime_checkable Protocol осторожно.",
    "kind": "single",
    "id": "m393",
    "fixed": true
  },
  {
    "q": "Что вернёт Self вместо «Type[Self]» хаков?",
    "options": [
      "удобнее для fluent API",
      "runtime check",
      "быстрее",
      "обязательная проверка типов на каждом вызове в CPython"
    ],
    "answer": 0,
    "explain": "Результат выражения — удобнее для fluent API. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m416",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print(isinstance({'a': 1}, dict))",
    "id": "m427",
    "fixed": true
  },
  {
    "q": "Выбери все верные про аннотации типов?",
    "options": [
      "в рантайме CPython обычно не проверяет list[int]",
      "mypy/pyright — статические анализаторы",
      "from __future__ import annotations откладывает вычисление аннотаций",
      "typing всегда ускоряет исполнение байткода"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explain": "Аннотации — для людей и чекеров; сами по себе не ускоряют CPython. Верными здесь будут пункты: «в рантайме CPython обычно не проверяет list[int]»; «mypy/pyright — статические анализаторы»; «from __future__ import annotations откладывает вычисление аннотаций».",
    "kind": "multi",
    "tags": [
      "typing"
    ],
    "difficulty": "middle",
    "id": "m438",
    "fixed": true
  },
  {
    "q": "Что переносит ParamSpec (PEP 612)?",
    "options": [
      "параметры callable — чтобы декораторы сохраняли сигнатуру",
      "только значения TypeVar без параметров функции",
      "ускорение байткода в runtime",
      "пути файловой системы pathlib"
    ],
    "answer": 0,
    "explain": "ParamSpec нужен в декораторах/обёртках: сохранить *args/**kwargs типы исходной функции. Это typing для checker'а, не runtime-ускорение.",
    "kind": "single",
    "id": "m475",
    "fixed": true
  },
  {
    "q": "Что означает typing.Final?",
    "options": [
      "имя не должно переназначаться (для type checker)",
      "значение вычисляется в runtime как const в C",
      "запрет чтения",
      "только для классов"
    ],
    "answer": 0,
    "explain": "Final — контракт для mypy/pyright. В runtime обычное присваивание всё ещё возможно.",
    "kind": "single",
    "id": "m482",
    "fixed": true
  },
  {
    "q": "Зачем typing.Protocol?",
    "options": [
      "структурная типизация: «есть нужные методы» без наследования",
      "ускорение CPython",
      "создание процессов",
      "только Enum"
    ],
    "answer": 0,
    "explain": "Protocol (PEP 544) — duck typing для чекера. runtime_checkable — опционально.",
    "kind": "single",
    "id": "m517",
    "fixed": true
  },
  {
    "q": "Что вернёт Optional[str] эквивалент?",
    "options": [
      "str | None",
      "str | int",
      "Union[str, int]",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — str | None. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m529",
    "fixed": true
  },
  {
    "q": "Что такое list[int] в Python 3.9+?",
    "options": [
      "параметризованный тип для аннотаций (встроенный generic)",
      "создаёт list только из int в runtime всегда",
      "синтаксическая ошибка до 3.12",
      "замена array.array"
    ],
    "answer": 0,
    "explain": "PEP 585: list[int] вместо List[int] из typing. В runtime list[int] — generic alias, не валидатор.",
    "kind": "single",
    "id": "m547",
    "fixed": true
  },
  {
    "q": "Чем Protocol отличается от ABC?",
    "options": [
      "Protocol — структурная (утиная) типизация; ABC — номинальная (явное наследование/регистрация)",
      "разницы нет",
      "Protocol только runtime, ABC только checker",
      "ABC запрещён в 3.11+"
    ],
    "answer": 0,
    "explain": "Protocol: «есть методы» без subclass. ABC: isinstance через иерархию/@abstractmethod.",
    "kind": "single",
    "id": "m586",
    "fixed": true
  },
  {
    "q": "Что вернёт TypeVarTuple / Unpack?",
    "options": [
      "вариативные типы кортежей",
      "только dict",
      "обязательная проверка типов на каждом вызове в CPython",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — вариативные типы кортежей. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m591",
    "fixed": true
  },
  {
    "q": "Зачем Generic[T]?",
    "options": [
      "описать параметризуемый класс для type checker",
      "ускорить runtime",
      "создать процесс",
      "заменить dataclass"
    ],
    "answer": 0,
    "explain": "class Box(Generic[T]): ... — Box[int] проверяется статически, в runtime T стирается.",
    "kind": "single",
    "id": "m601",
    "fixed": true
  },
  {
    "q": "Что вернёт Callable[[int], str] описывает?",
    "options": [
      "функцию из int в str",
      "list",
      "coroutine only",
      "type var"
    ],
    "answer": 0,
    "explain": "Результат выражения — функцию из int в str. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m620",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print(isinstance((1,), tuple))",
    "id": "m632",
    "fixed": true
  },
  {
    "q": "Что вернёт TypeAlias (3.10+/3.12 type)?",
    "options": [
      "явный алиас типа",
      "runtime cast",
      "ошибка",
      "обязательная проверка типов на каждом вызове в CPython"
    ],
    "answer": 0,
    "explain": "Результат выражения — явный алиас типа. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m636",
    "fixed": true
  },
  {
    "q": "Что вернёт Annotated[int, Ge(0)] идея?",
    "options": [
      "метаданные валидации/инструментов",
      "runtime int subclass",
      "ошибка",
      "обязательная проверка типов на каждом вызове в CPython"
    ],
    "answer": 0,
    "explain": "Результат выражения — метаданные валидации/инструментов. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m640",
    "fixed": true
  },
  {
    "q": "Чем помогает typing.LiteralString?",
    "options": [
      "ловить смешивание «чистых» литералов и пользовательского ввода (SQL/shell) на уровне типов",
      "ускорять строки в runtime",
      "шифровать строки",
      "заменять f-strings"
    ],
    "answer": 0,
    "explain": "PEP 675: API, ждущий LiteralString, не примет произвольный str из запроса — защита от injection на checker.",
    "kind": "single",
    "id": "m652",
    "fixed": true
  },
  {
    "q": "Чем TypedDict отличается от dataclass?",
    "options": [
      "TypedDict описывает форму dict; dataclass — класс с атрибутами",
      "разницы нет",
      "TypedDict создаёт объекты с методами",
      "dataclass только для JSON"
    ],
    "answer": 0,
    "explain": "TypedDict — для JSON-подобных словарей и checker. В runtime обычный dict.",
    "kind": "single",
    "id": "m660",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print(isinstance({1}, set))",
    "id": "m672",
    "fixed": true
  },
  {
    "q": "Что вернёт isinstance([1], tuple[int, ...]) в обычном CPython?",
    "options": [
      "TypeError (или False в отдельных случаях) — generic alias не для isinstance так",
      "True всегда",
      "False всегда без ошибки",
      "True только в 3.12+"
    ],
    "answer": 0,
    "explain": "Для generics нужен typing.get_origin / runtime_checkable Protocol осторожно.",
    "kind": "single",
    "id": "m708",
    "fixed": true
  },
  {
    "q": "Что вернёт Union[int, str] эквивалент 3.10+?",
    "options": [
      "int | str",
      "int & str",
      "обязательная проверка типов на каждом вызове в CPython",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — int | str. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m740",
    "fixed": true
  },
  {
    "q": "Можно ли наследовать TypedDict?",
    "options": [
      "да — расширять/сужать ключи по правилам total/Required",
      "нет никогда",
      "только от dataclass",
      "только в runtime isinstance"
    ],
    "answer": 0,
    "explain": "Наследование TypedDict поддерживается; следи за total=False и переопределениями.",
    "kind": "single",
    "id": "m764",
    "fixed": true
  },
  {
    "q": "Что такое TypedDict total=False?",
    "options": [
      "ключи опциональны",
      "запрещены",
      "только str values",
      "обязательная проверка типов на каждом вызове в CPython"
    ],
    "answer": 0,
    "explain": "Ключи опциональны. Это про проверку типов/сигнатуры, не про ускорение runtime.",
    "kind": "single",
    "id": "m770",
    "fixed": true
  },
  {
    "q": "Что вернёт isinstance([1], list[int]) в обычном CPython?",
    "options": [
      "TypeError (или False в отдельных случаях) — generic alias не для isinstance так",
      "True всегда",
      "False всегда без ошибки",
      "True только в 3.12+"
    ],
    "answer": 0,
    "explain": "Для generics нужен typing.get_origin / runtime_checkable Protocol осторожно.",
    "kind": "single",
    "id": "m773",
    "fixed": true
  },
  {
    "q": "Что делают Required/NotRequired в TypedDict?",
    "options": [
      "тонко задают обязательность отдельных ключей",
      "удаляют ключи в runtime",
      "валидируют JSON автоматически",
      "заменяют total="
    ],
    "answer": 0,
    "explain": "PEP 655: при total=False/True можно точечно пометить ключи.",
    "kind": "single",
    "id": "m776",
    "fixed": true
  },
  {
    "q": "Что такое Optional[X]?",
    "options": [
      "X | None",
      "X обязателен",
      "это ускорение байткода в runtime",
      "Union пустой"
    ],
    "answer": 0,
    "explain": "X | None. Это про проверку типов/сигнатуры, не про ускорение runtime.",
    "kind": "single",
    "id": "m779",
    "fixed": true
  },
  {
    "q": "Что такое get_type_hints?",
    "options": [
      "резолвит аннотации",
      "runtime enforce",
      "mypy daemon",
      "обязательная проверка типов на каждом вызове в CPython"
    ],
    "answer": 0,
    "explain": "Резолвит аннотации. Это про проверку типов/сигнатуры, не про ускорение runtime.",
    "kind": "single",
    "id": "m785",
    "fixed": true
  },
  {
    "q": "Что вернёт Never (3.11)?",
    "options": [
      "низший тип, недостижимость",
      "ошибка",
      "обязательная проверка типов на каждом вызове в CPython",
      "None"
    ],
    "answer": 0,
    "explain": "Результат выражения — низший тип, недостижимость. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m794",
    "fixed": true
  },
  {
    "q": "Что проверяет cast не?",
    "options": [
      "да, no-op",
      "валидирует",
      "конвертирует",
      "обязательная проверка типов на каждом вызове в CPython"
    ],
    "answer": 0,
    "explain": "Да, no-op. Это про проверку типов/сигнатуры, не про ускорение runtime.",
    "kind": "single",
    "id": "m803",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "print(isinstance([1], dict))",
    "id": "m809",
    "fixed": true
  },
  {
    "q": "Что такое list[int] в runtime (3.9+)?",
    "options": [
      "generic alias; isinstance(x, list[int]) ограничен/не то, что кажется",
      "runtime-валидатор элементов",
      "создаёт только int-списки",
      "синтаксическая ошибка"
    ],
    "answer": 0,
    "explain": "Аннотации для checker. В 3.9+ aliases есть как объекты, но не полноценная runtime-проверка элементов.",
    "kind": "single",
    "id": "m815",
    "fixed": true
  },
  {
    "q": "Что такое Literal['a','b']?",
    "options": [
      "только эти значения",
      "любой str",
      "Enum автоматом",
      "обязательная проверка типов на каждом вызове в CPython"
    ],
    "answer": 0,
    "explain": "Только эти значения. Это про проверку типов/сигнатуры, не про ускорение runtime.",
    "kind": "single",
    "id": "m833",
    "fixed": true
  }
);
