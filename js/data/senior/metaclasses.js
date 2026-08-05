// @meta topic=метаклассы group=Метаклассы и типы
// senior · 19 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Что такое Конфликт метаклассов баз?",
    "options": [
      "нужен согласованный metaclass",
      "берётся random",
      "запрет MI",
      "ABC auto"
    ],
    "answer": 0,
    "explain": "Most derived metaclass — Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "id": "s16",
    "fixed": true
  },
  {
    "q": "Зачем нужен __init_subclass__ (PEP 487)?",
    "options": [
      "хук при создании подкласса без написания метакласса",
      "заменяет __init__ экземпляра",
      "автоматически добавляет __slots__",
      "регистрирует модуль в sys.path"
    ],
    "answer": 0,
    "explain": "Класс-родитель объявляет def __init_subclass__(cls, **kwargs) — вызывается при class Child(Parent). Удобно для регистрации подклассов, валидации аннотаций.",
    "kind": "single",
    "id": "s50",
    "fixed": true
  },
  {
    "q": "Что вызывается при `class A(metaclass=M):`?",
    "options": [
      "M('A', bases, namespace) — метакласс создаёт класс",
      "только A.__new__ без участия M",
      "import hook из sys.meta_path",
      "автоматический __init_subclass__ без M"
    ],
    "answer": 0,
    "explain": "Объявление class — вызов метакласса (по умолчанию type). M получает имя, базы, dict атрибутов и возвращает объект-класс. Как type() в runtime.",
    "kind": "single",
    "id": "s66",
    "fixed": true
  },
  {
    "q": "Что такое метакласс?",
    "options": [
      "«класс классов» — объект type или его подкласс, создающий классы",
      "синтаксический сахар для @decorator",
      "модуль importlib только для C",
      "механизм, отсутствующий в CPython"
    ],
    "answer": 0,
    "explain": "type('Name', (Base,), ns) создаёт класс. class X(metaclass=M) вызывает M вместо type. Редкий инструмент: ORM, валидация объявления класса, регистрация.",
    "kind": "single",
    "id": "s98",
    "fixed": true
  },
  {
    "q": "Что создаёт вызов type(name, bases, namespace)?",
    "options": [
      "новый объект-класс",
      "экземпляр object()",
      "модуль в sys.modules",
      "только метакласс без класса"
    ],
    "answer": 0,
    "explain": "type — метакласс по умолчанию. type('Dog', (Animal,), {'tail': True}) эквивалентно class Dog(Animal): tail = True на этапе создания класса.",
    "kind": "single",
    "id": "s114",
    "fixed": true
  },
  {
    "q": "Чему эквивалентен вызов `type(name, bases, dict)`?",
    "options": [
      "динамическому созданию класса с тем же механизмом, что `class` statement",
      "только созданию экземпляра без метакласса",
      "копированию модуля через importlib",
      "вызову dataclass декоратора"
    ],
    "answer": 0,
    "explain": "class Foo(B): ... компилируется в namespace + type('Foo', (B,), ns). Метакласс — третий аргумент type или метакласс bases.",
    "kind": "single",
    "id": "s221",
    "fixed": true
  },
  {
    "q": "Что вернёт type.__call__ путь instance create?",
    "options": [
      "__call__ типа, а затем __new__/__init__ instance",
      "только __init__",
      "только __new__",
      "module exec"
    ],
    "answer": 0,
    "explain": "Механика creation — Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "id": "s235",
    "fixed": true
  },
  {
    "q": "Когда предпочесть __init_subclass__ метаклассу?",
    "options": [
      "нужны простые хуки при создании подкласса без полного контроля над type()",
      "нужно переопределить создание каждого экземпляра",
      "нужно менять атрибуты модуля при import",
      "только для dataclass"
    ],
    "answer": 0,
    "explain": "__init_subclass__(cls, **kwargs) вызывается при class Child(Parent). Проще метакласса для регистрации подклассов, валидации аннотаций.",
    "kind": "single",
    "id": "s249",
    "fixed": true
  },
  {
    "q": "Что такое __set_name__ у дескриптора?",
    "options": [
      "узнаёт имя атрибута в классе-владельце",
      "ставит __name__ функции",
      "GIL name",
      "pickle name"
    ],
    "answer": 0,
    "explain": "PEP 487 — Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "id": "s291",
    "fixed": true
  },
  {
    "q": "Что такое динамический enum/метакласс фабрики?",
    "options": [
      "codegen на старте",
      "запрещено",
      "только AST rewrite disk",
      "eval only"
    ],
    "answer": 0,
    "explain": "Плагинные реестры — Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "id": "s318",
    "fixed": true
  },
  {
    "q": "Выполняется ли тело class statement в отдельном namespace?",
    "options": [
      "да: namespace собирается, затем type(name, bases, ns) создаёт класс",
      "нет: атрибуты сразу пишутся в экземпляр",
      "только при @dataclass",
      "только в Python 2"
    ],
    "answer": 0,
    "explain": "class Foo: x=1 выполняет тело в dict-like namespace, потом type('Foo', (), ns). Отсюда метакласс и дескрипторы на этапе создания класса.",
    "kind": "single",
    "id": "s344",
    "fixed": true
  },
  {
    "q": "Что создаёт вызов type(name, bases, namespace)?",
    "options": [
      "новый класс (объект типа type)",
      "экземпляр класса, но не сам класс",
      "функцию с замыканием",
      "модуль в sys.modules"
    ],
    "answer": 0,
    "explain": "class Foo: ... — синтаксический сахар над type('Foo', (object,), {...}). Метакласс подменяет именно этот вызов при создании класса.",
    "kind": "single",
    "id": "s357",
    "fixed": true
  },
  {
    "q": "Каким может быть namespace в __prepare__ метакласса?",
    "options": [
      "OrderedDict или другой mapping по выбору метакласса",
      "только встроенный dict без альтернатив",
      "только list пар (имя, значение)",
      "обязательно frozenset"
    ],
    "answer": 0,
    "explain": "__prepare__(name, bases) возвращает dict-like для тела класса. OrderedDict давал порядок аннотаций до 3.6; кастомный mapping — для валидации при объявлении.",
    "kind": "single",
    "id": "s369",
    "fixed": true
  },
  {
    "q": "Что верно про __init_subclass__ вызывается?",
    "options": [
      "при создании подкласса",
      "при import любого модуля",
      "при del",
      "только metaclass"
    ],
    "answer": 0,
    "explain": "Хуки регистрации без своего metaclass. Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "id": "s381",
    "fixed": true
  },
  {
    "q": "Что происходит при `class A(metaclass=M)`?",
    "options": [
      "вызывается M('A', bases, namespace) для создания класса",
      "M вызывается при каждом A() — создании экземпляра",
      "срабатывает только import hook",
      "метакласс игнорируется в Python 3.11+"
    ],
    "answer": 0,
    "explain": "Объявление класса — вызов метакласса (по умолчанию type). M контролирует создание класса; __call__ метакласса — создание экземпляров.",
    "kind": "single",
    "id": "s393",
    "fixed": true
  },
  {
    "q": "Что возвращает __prepare__ метакласса?",
    "options": [
      "namespace mapping для записи атрибутов тела класса",
      "готовый объект класса type",
      "список базовых классов",
      "декоратор для методов"
    ],
    "answer": 0,
    "explain": "Метакласс может вернуть OrderedDict или кастомный dict-like; после выполнения тела класса вызывается __new__ метакласса с этим namespace.",
    "kind": "single",
    "id": "s405",
    "fixed": true
  },
  {
    "q": "Что делает types.new_class?",
    "options": [
      "высокоуровневое создание класса с метаклассом и __prepare__",
      "только eval строки как 2.x",
      "создание Enum без значений",
      "замена importlib"
    ],
    "answer": 0,
    "explain": "new_class(name, bases, kwds, exec_body) — правильный API для динамических классов с кастомным metaclass и namespace.",
    "kind": "single",
    "id": "s463",
    "fixed": true
  },
  {
    "q": "Что создаёт __new__ метакласса?",
    "options": [
      "объект класса (instance метакласса type)",
      "экземпляр пользовательского класса напрямую",
      "модуль в importlib",
      "только namespace dict"
    ],
    "answer": 0,
    "explain": "M.__new__(M, name, bases, ns) возвращает class object. Затем вызывается M.__init__ для инициализации класса.",
    "kind": "single",
    "id": "s474",
    "fixed": true
  },
  {
    "q": "Что такое ABCMeta + metaclass conflict?",
    "options": [
      "нужна кооперация метаклассов",
      "ABC запрещает MI",
      "type ban",
      "Protocol replaces always"
    ],
    "answer": 0,
    "explain": "Сложные иерархии — Метакласс создаёт класс так же, как обычный класс создаёт экземпляр.",
    "kind": "single",
    "id": "s492",
    "fixed": true
  }
);
