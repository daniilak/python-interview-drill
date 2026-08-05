// @meta topic=match group=Typing и dataclasses
// middle · 21 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что вернёт case {'x': v} матчит?",
    "options": [
      "mapping с ключом x",
      "только dict subclass строго без Protocol",
      "list",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — mapping с ключом x. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m16",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "zero",
      "one",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "match/case сопоставляет x=0 с case 0 и печатает zero.",
    "kind": "single",
    "code": "x = 0\nmatch x:\n    case 0:\n        print('zero')\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "id": "m118",
    "fixed": true
  },
  {
    "q": "В какой версии Python появился match/case?",
    "options": [
      "3.10",
      "3.8",
      "3.12",
      "2.7"
    ],
    "answer": 0,
    "explain": "Structural pattern matching (PEP 634) — с Python 3.10.",
    "kind": "single",
    "id": "m132",
    "fixed": true
  },
  {
    "q": "Что означает ветка `case _:` в match?",
    "options": [
      "wildcard — срабатывает, если ничего выше не подошло",
      "синтаксическая ошибка",
      "матчит только None",
      "обязательна в каждом match"
    ],
    "answer": 0,
    "explain": "_ — общий случай (default). Не обязан быть, но удобен как «иначе».",
    "kind": "single",
    "id": "m172",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "pair",
      "empty",
      "single",
      "[1, 2]"
    ],
    "answer": 0,
    "explain": "Список из двух элементов матчит case [_, _] (в обрезанном коде — ветка pair).",
    "kind": "single",
    "code": "x = [1, 2]\nmatch x:\n    case []:\n        print('empty')\n    case [_]:\n        print('single')\n    case [_, _]:\n        print('pair')\n    case _:\n        print('many')",
    "id": "m198",
    "fixed": true
  },
  {
    "q": "Что такое guard в `case … if условие:`?",
    "options": [
      "доп. условие: ветка срабатывает только если guard истинен",
      "синтаксическая ошибка до 3.12",
      "замена match",
      "только для чисел"
    ],
    "answer": 0,
    "explain": "Pattern matching + if-guard (PEP 634). Паттерн совпал, но guard False — идём к следующей ветке.",
    "kind": "single",
    "id": "m328",
    "fixed": true
  },
  {
    "q": "Что значит `case point.x:` в match (без кавычек)?",
    "options": [
      "value pattern — сравнение с уже существующим значением point.x",
      "захват имени в новую переменную point",
      "синтаксическая ошибка",
      "только type pattern"
    ],
    "answer": 0,
    "explain": "Имя с точкой — value pattern. Голое имя — capture. Для констант часто пишут case MyEnum.X:.",
    "kind": "single",
    "id": "m510",
    "fixed": true
  },
  {
    "q": "Что вернёт case {'x': _, **rest}:?",
    "options": [
      "остальные ключи в rest",
      "ошибка",
      "list",
      "None"
    ],
    "answer": 0,
    "explain": "Результат выражения — остальные ключи в rest. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m523",
    "fixed": true
  },
  {
    "q": "Что вернёт case [x, *rest]: матчит?",
    "options": [
      "последовательность ≥1 с хвостом",
      "только list длины 2",
      "dict",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — последовательность ≥1 с хвостом. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m559",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "one",
      "1",
      "default",
      "ошибка"
    ],
    "answer": 0,
    "explain": "match/case выбирает первую подходящую ветку. Здесь срабатывает случай → one.",
    "kind": "single",
    "code": "x = 1\nmatch x:\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "id": "m611",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "empty",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "match/case выбирает первую подходящую ветку. Здесь срабатывает случай → empty.",
    "kind": "single",
    "code": "x = []\nmatch x:\n    case []:\n        print('empty')\n    case [_]:\n        print('single')\n    case [_, _]:\n        print('pair')\n    case _:\n        print('many')",
    "id": "m624",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "single",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "match/case выбирает первую подходящую ветку. Здесь срабатывает случай → single.",
    "kind": "single",
    "code": "x = [1]\nmatch x:\n    case []:\n        print('empty')\n    case [_]:\n        print('single')\n    case [_, _]:\n        print('pair')\n    case _:\n        print('many')",
    "id": "m680",
    "fixed": true
  },
  {
    "q": "Что вернёт case [x, y, *rest] на tuple?",
    "options": [
      "работает для последовательности",
      "только list тип exact",
      "dict",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — работает для последовательности. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m688",
    "fixed": true
  },
  {
    "q": "Что такое case 1 | 2 | 3 в match?",
    "options": [
      "or-паттерн — совпадение с любым из вариантов",
      "побитовое OR значений",
      "синтаксическая ошибка",
      "только для строк"
    ],
    "answer": 0,
    "explain": "PEP 634: альтернативы через |. Можно case 1 | 2 as x.",
    "kind": "single",
    "id": "m692",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "other",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "match/case выбирает первую подходящую ветку. Здесь срабатывает случай → other.",
    "kind": "single",
    "code": "x = 2\nmatch x:\n    case 0:\n        print('zero')\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "id": "m704",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "many",
      "one",
      "none",
      "ошибка"
    ],
    "answer": 0,
    "explain": "match/case попадает в ветку many.",
    "kind": "single",
    "code": "x = [1, 2, 3]\nmatch x:\n    case []:\n        print('empty')\n    case [_]:\n        print('single')\n    case [_, _]:\n        print('pair')\n    case _:\n        print('many')",
    "id": "m744",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "one",
      "two",
      "many",
      "ошибка"
    ],
    "answer": 0,
    "explain": "match выбирает ветку one.",
    "kind": "single",
    "code": "x = 1\nmatch x:\n    case 0:\n        print('zero')\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "id": "m748",
    "fixed": true
  },
  {
    "q": "Что делает case [x, *rest] в match?",
    "options": [
      "матчит последовательность: первый элемент и хвост",
      "только словари",
      "синтаксическая ошибка",
      "только строки посимвольно без *"
    ],
    "answer": 0,
    "explain": "Sequence pattern с starred захватом остатка.",
    "kind": "single",
    "id": "m782",
    "fixed": true
  },
  {
    "q": "Что значит case Point(x=0, y=0) при __match_args__?",
    "options": [
      "positional/keyword patterns по полям класса",
      "вызов конструктора Point",
      "только сравнение id",
      "ошибка без dataclass"
    ],
    "answer": 0,
    "explain": "Class pattern матчит тип и поля. __match_args__ задаёт позиционный порядок.",
    "kind": "single",
    "id": "m791",
    "fixed": true
  },
  {
    "q": "Что такое case _:?",
    "options": [
      "wildcard / default ветка match",
      "захват имени _",
      "ошибка синтаксиса",
      "только для чисел"
    ],
    "answer": 0,
    "explain": "_ не связывает имя. Ставь последней веткой.",
    "kind": "single",
    "id": "m797",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "other",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "match/case выбирает первую подходящую ветку. Здесь срабатывает случай → other.",
    "kind": "single",
    "code": "x = 99\nmatch x:\n    case 0:\n        print('zero')\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "id": "m821",
    "fixed": true
  }
);
