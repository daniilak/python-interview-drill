// @meta topic=dictcomp group=Встроенные функции
// junior · 6 cards
(window.QUESTIONS_JUNIOR = window.QUESTIONS_JUNIOR || []).push(
  {
    "q": "Что выведет `print({x: x * x for x in range(5)})`?",
    "options": [
      "{0: 0, 1: 1, 2: 4, 3: 9, 4: 16}",
      "[0, 1, 4, 9, 16]",
      "{0, 1, 4, 9, 16}",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Выражение `{x: x*x ...}` — это словарное включение (dict comprehension), создающее словарь. Синтаксис с двоеточием `ключ:значение` отличает его от множества `{}` или списка `[]`, что является частой ловушкой.",
    "kind": "single",
    "code": "print({x: x * x for x in range(5)})",
    "id": "j76",
    "fixed": true
  },
  {
    "q": "Что выведет `print({x: x * x for x in range(6)})`?",
    "options": [
      "{0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}",
      "[0, 1, 4, 9, 16, 25]",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Словарное включение (dict comprehension) `{key: value for item in iterable}` создаёт словарь. В данном случае для каждого числа `x` от 0 до 5 создаётся пара «ключ: значение» вида `x: x*x`.",
    "kind": "single",
    "code": "print({x: x * x for x in range(6)})",
    "id": "j623",
    "fixed": true
  },
  {
    "q": "Что создаст `dict comprehension` `{x: x * x for x in range(4)}`?",
    "options": [
      "{0: 0, 1: 1, 2: 4, 3: 9}",
      "[0, 1, 4, 9]",
      "{0, 1, 4, 9}",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Синтаксис `{ключ: значение for ...}` создаёт словарь (dict comprehension). Цикл `for x in range(4)` перебирает числа 0, 1, 2, 3, где `x` становится ключом, а `x * x` — значением.",
    "kind": "single",
    "code": "print({x: x * x for x in range(4)})",
    "id": "j738",
    "fixed": true
  },
  {
    "q": "Что выведет `print({x: x * x for x in range(3)})`?",
    "options": [
      "{0: 0, 1: 1, 2: 4}",
      "[0, 1, 4]",
      "SyntaxError",
      "None"
    ],
    "answer": 0,
    "explain": "Фигурные скобки `{}` с парами `ключ:значение` создают словарь. Выражение `dict comprehension` перебирает `range(3)` и для каждого числа `x` формирует пару `x: x*x`, в отличие от `list comprehension`, который создал бы список.",
    "kind": "single",
    "code": "print({x: x * x for x in range(3)})",
    "id": "j908",
    "fixed": true
  },
  {
    "q": "Что выведет print({x: x * x for x in (1, 2)})?",
    "options": [
      "{1: 1, 2: 4}",
      "{1, 4}",
      "[1, 4]",
      "TypeError"
    ],
    "answer": 0,
    "explain": "Dict comprehension по кортежу (1, 2): ключ x, значение x² → {1:1, 2:4}.",
    "kind": "single",
    "code": "print({x: x * x for x in (1, 2)})",
    "id": "j960",
    "fixed": true
  },
  {
    "q": "Что вернёт {k: k*k for k in range(3)}?",
    "options": [
      "{0:0, 1:1, 2:4}",
      "[0,1,4]",
      "ошибка",
      "{0,1,2}"
    ],
    "answer": 0,
    "explain": "Результат выражения — {0:0, 1:1, 2:4}. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "j969",
    "fixed": true
  }
);
