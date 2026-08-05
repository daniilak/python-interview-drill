// @meta topic=typing group=Typing и dataclasses
// senior · 20 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Чем помогает LiteralString (3.11)?",
    "options": [
      "отличать доверенные строки от произвольного user input в типах",
      "шифровать строки на этапе компиляции",
      "включать runtime-проверку типов в CPython",
      "ускорять интерпретацию байткода"
    ],
    "answer": 0,
    "explain": "LiteralString помечает строки, известные статически (литералы). Полезно для API вроде SQL/markup: чекер не даст подставить произвольный str туда, где ожидается безопасный литерал.",
    "kind": "single",
    "id": "s4",
    "fixed": true
  },
  {
    "q": "Что ограничивает TypeVar с bound=SomeClass?",
    "options": [
      "параметр типа может быть только SomeClass или его подклассом",
      "принудительный runtime cast к SomeClass",
      "ускорение байткода при аннотации",
      "запрет generic-функций в mypy"
    ],
    "answer": 0,
    "explain": "bound — верхняя граница для type variable: T bound=Serializable значит T — подтип Serializable. Для «конкретного типа или наследника», в отличие от constraint tuple типов.",
    "kind": "single",
    "id": "s21",
    "fixed": true
  },
  {
    "q": "Что такое Interop typing_extensions?",
    "options": [
      "бэкпорты фич typing",
      "runtime pydantic",
      "mypy plugin only",
      "это ускорение байткода в runtime"
    ],
    "answer": 0,
    "explain": "Бэкпорты фич typing. Это про проверку типов/сигнатуры, не про ускорение runtime.",
    "kind": "single",
    "id": "s38",
    "fixed": true
  },
  {
    "q": "Что верно про TypeForm / новые формы?",
    "options": [
      "эволюция typing API",
      "удаление annotations",
      "JSON schema stdlib",
      "обязательная проверка типов на каждом вызове в CPython"
    ],
    "answer": 0,
    "explain": "Эволюция typing API. Это про проверку типов/сигнатуры, не про ускорение runtime.",
    "kind": "single",
    "id": "s55",
    "fixed": true
  },
  {
    "q": "Чем TypeGuard и TypeIs помогают в typing?",
    "options": [
      "сужают тип в ветке после user-defined проверки для чекера",
      "ускоряют runtime в CPython",
      "заменяют isinstance и запрещают его",
      "включают JIT по аннотациям"
    ],
    "answer": 0,
    "explain": "def is_str(x) -> TypeGuard[str]: return isinstance(x, str) — после if is_str(x) mypy знает, что x — str. TypeIs (PEP 742) точнее про сужение. Runtime — обычная функция.",
    "kind": "single",
    "id": "s71",
    "fixed": true
  },
  {
    "q": "Что такое typing.Protocol (PEP 544)?",
    "options": [
      "структурная типизация: «имеет методы», без наследования ABC",
      "обязательный runtime ABC для каждого класса",
      "замена dataclass",
      "механизм блокировки GIL"
    ],
    "answer": 0,
    "explain": "class SupportsClose(Protocol): def close(self): ... — любой класс с close() подходит, даже без наследования. Duck typing для mypy/pyright.",
    "kind": "single",
    "id": "s87",
    "fixed": true
  },
  {
    "q": "Что даёт ReadOnly в TypedDict (новые PEP)?",
    "options": [
      "ключи только для чтения с точки зрения type checker",
      "runtime-immutable dict как frozendict",
      "автоматическая проверка типов в CPython",
      "то же самое, что frozen dataclass в runtime"
    ],
    "answer": 0,
    "explain": "class D(TypedDict, ReadOnly): ... — mypy не даст d['k']=1. В runtime обычный dict, как и весь typing без @dataclass(frozen).",
    "kind": "single",
    "id": "s103",
    "fixed": true
  },
  {
    "q": "В чём разница typing.NoReturn и Never?",
    "options": [
      "сходятся по смыслу; Never — bottom type в новых версиях typing",
      "NoReturn = Any, Never = object",
      "Never только для async",
      "синоним Optional[str]"
    ],
    "answer": 0,
    "explain": "NoReturn — функция не возвращает управление (raise/sys.exit). Never — тип, которому ничего не присвоить; супертип для exhaustiveness check в match.",
    "kind": "single",
    "id": "s119",
    "fixed": true
  },
  {
    "q": "Чем помогает @dataclass_transform?",
    "options": [
      "библиотекам вроде attrs/Pydantic сообщить mypy правила генерации полей",
      "ускорить создание dataclass в runtime",
      "включить проверку типов в CPython",
      "заменить @dataclass декоратор"
    ],
    "answer": 0,
    "explain": "PEP 681: декоратор на фабрике классов говорит чекеру «эта функция создаёт dataclass-подобный класс». Единообразная проверка без копирования mypy plugin.",
    "kind": "single",
    "id": "s135",
    "fixed": true
  },
  {
    "q": "Для чего TypeGuard и TypeIs в typing?",
    "options": [
      "сужение типов после пользовательской проверки для static checker",
      "принудительный runtime cast как typing.cast всегда",
      "ускорение байткода",
      "замена pydantic"
    ],
    "answer": 0,
    "explain": "Пересечение с s71: после if is_str(x): x — str для mypy. TypeIs точнее описывает narrowing. Runtime — обычная bool-функция.",
    "kind": "single",
    "id": "s151",
    "fixed": true
  },
  {
    "q": "Что вернёт ParamSpec / Concatenate для?",
    "options": [
      "типизации декораторов (*args/**kwargs)",
      "list[int]",
      "обязательная проверка типов на каждом вызове в CPython",
      "async IO"
    ],
    "answer": 0,
    "explain": "Результат выражения — типизации декораторов (*args/**kwargs). Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s167",
    "fixed": true
  },
  {
    "q": "Что верно про Self (3.11) в аннотациях?",
    "options": [
      "тип текущего класса",
      "это ускорение байткода в runtime",
      "обязательная проверка типов на каждом вызове в CPython",
      "cls runtime"
    ],
    "answer": 0,
    "explain": "Тип текущего класса. Это про проверку типов/сигнатуры, не про ускорение runtime.",
    "kind": "single",
    "id": "s182",
    "fixed": true
  },
  {
    "q": "Что вернёт PEP 695 (3.12) type params?",
    "options": [
      "синтаксис class A[T]: / def f[T]",
      "только TypeVar() runtime old",
      "убирает checkers",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — синтаксис class A[T]: / def f[T]. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s197",
    "fixed": true
  },
  {
    "q": "Что ограничивает TypeVar с bound=Serializable?",
    "options": [
      "подставляемый тип должен быть подтипом Serializable для статического чекера",
      "runtime принудительно cast к Serializable",
      "ускоряет байткод в CPython",
      "запрещает generic-функции"
    ],
    "answer": 0,
    "explain": "bound — верхняя граница: T может быть Serializable или его подклассом. В отличие от constraint=tuple типов — один базовый интерфейс.",
    "kind": "single",
    "id": "s212",
    "fixed": true
  },
  {
    "q": "Зачем декоратор @overload в typing?",
    "options": [
      "описать несколько сигнатур одной функции для статического анализатора",
      "выбрать реализацию в runtime по типу аргумента",
      "ускорить диспетчеризацию в CPython",
      "заменить ABC для виртуальных методов"
    ],
    "answer": 0,
    "explain": "@overload тела — ...; реальная реализация одна снизу. mypy/pyright выбирают сигнатуру по аргументам; в runtime overload игнорируются.",
    "kind": "single",
    "id": "s226",
    "fixed": true
  },
  {
    "q": "Для чего ParamSpec и Concatenate?",
    "options": [
      "типизировать декораторы, сохраняющие сигнатуру оборачиваемой функции",
      "ускорить вызов *args/**kwargs в C",
      "заменить Protocol для структурной типизации",
      "описать только async-генераторы"
    ],
    "answer": 0,
    "explain": "ParamSpec захватывает параметры callable; Concatenate добавляет аргументы в начало. Классический кейс — типобезопасный @app.route / middleware.",
    "kind": "single",
    "id": "s240",
    "fixed": true
  },
  {
    "q": "Зачем typing.overload?",
    "options": [
      "несколько статических сигнатур для одной реализации",
      "перегрузка по типам в runtime как в C++",
      "автогенерация docstring",
      "включение strict mode в pytest"
    ],
    "answer": 0,
    "explain": "См. @overload: чекер выводит возвращаемый тип по форме вызова; одна runtime-функция внизу.",
    "kind": "single",
    "id": "s254",
    "fixed": true
  },
  {
    "q": "Для чего typing.reveal_type(x)?",
    "options": [
      "показать выведенный тип в отчёте mypy/pyright при отладке аннотаций",
      "вывести тип в runtime в print",
      "ускорить isinstance в production",
      "заменить assert"
    ],
    "answer": 0,
    "explain": "reveal_type — директива чекеру: в ошибках будет Note: Revealed type is .... В runtime обычно no-op или игнор.",
    "kind": "single",
    "id": "s268",
    "fixed": true
  },
  {
    "q": "Что делает typing.cast(T, x)?",
    "options": [
      "говорит статическому чекеру, что x имеет тип T; в runtime no-op",
      "принудительно конвертирует x в T",
      "выбрасывает TypeError при несовпадении",
      "сериализует x в JSON типа T"
    ],
    "answer": 0,
    "explain": "cast не проверяет runtime — только подсказка чекеру после узкого места (например после if isinstance). Злоупотребление скрывает баги.",
    "kind": "single",
    "id": "s282",
    "fixed": true
  },
  {
    "q": "Зачем PEP 681 dataclass_transform?",
    "options": [
      "чтобы mypy/pyright понимали поля у Pydantic/attrs без stdlib @dataclass",
      "ускорить создание экземпляров в C",
      "заменить __slots__",
      "включить JSON schema автоматически"
    ],
    "answer": 0,
    "explain": "Декоратор/метакласс помечается @dataclass_transform — чекер знает, что .field генерирует __init__ и атрибуты.",
    "kind": "single",
    "id": "s296",
    "fixed": true
  }
);
