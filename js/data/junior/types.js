// @meta topic=типы group=Типы и операторы
// junior · 20 cards
(window.QUESTIONS_JUNIOR = window.QUESTIONS_JUNIOR || []).push(
  {
    "q": "Что вернёт выражение `type(int('42')).__name__`?",
    "options": [
      "'int'",
      "'type'",
      "'<class 'int'>'",
      "TypeError"
    ],
    "answer": 0,
    "explain": "Функция `type()` возвращает объект типа, а его атрибут `__name__` содержит имя этого типа в виде строки. Сначала `int('42')` даёт число 42, затем `type(42)` возвращает класс `int`, и `__name__` даёт его строковое представление.",
    "kind": "single",
    "code": "print(type(int('42')).__name__)",
    "id": "j121",
    "fixed": true
  },
  {
    "q": "Что вернёт выражение `type([]) is list`?",
    "options": [
      "True",
      "False",
      "TypeError",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Функция `type([])` возвращает объект класса `list`. Оператор `is` проверяет идентичность объектов, а не их равенство. Так как в Python типы являются синглтонами, `type([])` и `list` ссылаются на один и тот же объект в памяти.",
    "kind": "single",
    "code": "print(type([]) is list)",
    "id": "j380",
    "fixed": true
  },
  {
    "q": "Что вернёт выражение `type(True) is int`?",
    "options": [
      "False",
      "True",
      "TypeError",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Тип `bool` является подклассом `int`, поэтому `isinstance(True, int)` вернёт `True`. Однако `type(True)` возвращает сам тип `bool`, который не является тем же объектом, что и тип `int`, поэтому оператор `is` даёт `False`.",
    "kind": "single",
    "id": "j619",
    "fixed": true
  },
  {
    "q": "Что вернёт `isinstance(3, object)`?",
    "options": [
      "True",
      "False",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "В Python всё является объектом, и все типы данных, включая `int`, неявно наследуются от базового класса `object`. Поэтому проверка `isinstance()` для любого объекта и `object` вернёт `True`.",
    "kind": "single",
    "id": "j734",
    "fixed": true
  },
  {
    "q": "Что вернёт выражение type([]) == list?",
    "options": [
      "True",
      "False",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Функция type() возвращает объект типа, а [] — это литерал списка. Сравнение type([]) == list проверяет, является ли тип пустого списка классом list, что истинно. Для проверки наследования предпочтительнее использовать isinstance([], list).",
    "kind": "single",
    "id": "j943",
    "fixed": true
  },
  {
    "q": "Как создать пустое множество?",
    "options": [
      "set()",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "frozenset()"
    ],
    "answer": 0,
    "explain": "Set(). Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "id": "j982",
    "fixed": true
  },
  {
    "q": "Какой тип данных у значения `True`?",
    "options": [
      "bool",
      "int",
      "Boolean",
      "object"
    ],
    "answer": 0,
    "explain": "В Python тип булевых значений называется `bool`. Хотя `bool` является подклассом `int` (например, `True == 1`), функция `type()` возвращает самый специфичный тип объекта, а не его родительский класс.",
    "kind": "single",
    "code": "type(True)",
    "id": "j1012",
    "fixed": true
  },
  {
    "q": "Какой тип у значения None?",
    "options": [
      "NoneType",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "NoneType. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "id": "j1054",
    "fixed": true
  },
  {
    "q": "Что верно про isinstance(True, int)?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "True. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "id": "j1181",
    "fixed": true
  },
  {
    "q": "Выбери все верные утверждения про типы в Python?",
    "options": [
      "bool — подкласс int",
      "None имеет тип NoneType",
      "{} создаёт пустой set",
      "str неизменяемый"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explain": "{} — пустой dict; пустой set только через set(). Bool наследует int; str immutable. Верными здесь будут пункты: «bool — подкласс int»; «None имеет тип NoneType»; «str неизменяемый».",
    "kind": "multi",
    "tags": [
      "types"
    ],
    "difficulty": "junior",
    "id": "j1250",
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
    "code": "print(isinstance(True, int))",
    "id": "j1268",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "bool",
      "<class 'bool'> как тип bool",
      "ошибка",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Bool. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "print(type(True).__name__)",
    "id": "j1287",
    "fixed": true
  },
  {
    "q": "Что вернёт type(3.0) is float?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Результат выражения — True. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "j1297",
    "fixed": true
  },
  {
    "q": "Что верно про isinstance(3.0, int)?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "False. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "id": "j1335",
    "fixed": true
  },
  {
    "q": "Подклассом какого типа является bool?",
    "options": [
      "int",
      "это не тип, а синтаксическая ошибка",
      "только object, без int",
      "float"
    ],
    "answer": 0,
    "explain": "Bool — подкласс int: True == 1, False == 0. Поэтому True + True == 2. Но лучше не использовать bool как число в бизнес-логике.",
    "kind": "single",
    "id": "j1339",
    "fixed": true
  },
  {
    "q": "Что вернёт type(() )?",
    "options": [
      "tuple",
      "list",
      "dict",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — tuple. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "j1361",
    "fixed": true
  },
  {
    "q": "Что верно про bool — подкласс int?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "True. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "id": "j1380",
    "fixed": true
  },
  {
    "q": "Что такое литерал 3j?",
    "options": [
      "комплексное число",
      "синтаксическая ошибка",
      "утверждение про другой уровень стека",
      "имя переменной"
    ],
    "answer": 0,
    "explain": "Комплексное число. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "id": "j1389",
    "fixed": true
  },
  {
    "q": "Какой литерал создаёт пустой словарь?",
    "options": [
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "оба верны",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 2,
    "explain": "Оба верны. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "id": "j1405",
    "fixed": true
  },
  {
    "q": "Что вернёт float('nan') == float('nan')?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Результат выражения — False. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "j1408",
    "fixed": true
  }
);
