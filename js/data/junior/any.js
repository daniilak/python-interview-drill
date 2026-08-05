// @meta topic=any group=Встроенные функции
// junior · 15 cards
(window.QUESTIONS_JUNIOR = window.QUESTIONS_JUNIOR || []).push(
  {
    "q": "Что вернёт вызов функции `any([])`?",
    "options": [
      "False",
      "True",
      "ValueError",
      "None"
    ],
    "answer": 0,
    "explain": "Функция `any()` возвращает `True`, если хотя бы один элемент итерируемого объекта истинен. Для пустого объекта, как `[]`, нет ни одного истинного элемента, поэтому результат — `False`. Ловушка в том, чтобы не перепутать с `all([])`, который возвращает `True`.",
    "kind": "single",
    "code": "print(any([]))",
    "id": "j54",
    "fixed": true
  },
  {
    "q": "Что вернёт вызов функции `any([[], []])`?",
    "options": [
      "False",
      "True",
      "TypeError",
      "[[], []]"
    ],
    "answer": 0,
    "explain": "Функция `any()` возвращает `True`, если хотя бы один элемент итерируемого объекта истинен. Пустые коллекции, включая пустой список `[]`, в логическом контексте расцениваются как `False`, поэтому результат `False`.",
    "kind": "single",
    "code": "print(any([[], []]))",
    "id": "j239",
    "fixed": true
  },
  {
    "q": "Что вернёт `any(['', 'x'])`?",
    "options": [
      "True",
      "False",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Функция `any()` возвращает `True`, если хотя бы один элемент итерируемого объекта истинен. Пустая строка `''` ложна, а непустая строка `'x'` — истинна, поэтому итоговый результат `True`.",
    "kind": "single",
    "code": "print(any(['', 'x']))",
    "id": "j386",
    "fixed": true
  },
  {
    "q": "Что вернёт `any([1, 2, 3])`?",
    "options": [
      "True",
      "False",
      "1",
      "TypeError"
    ],
    "answer": 0,
    "explain": "Функция `any()` возвращает `True`, если хотя бы один элемент итерируемого объекта истинен. В списке `[1, 2, 3]` все числа ненулевые, а значит, истинные. `any()` прекращает проверку после первого же истинного элемента (`1`).",
    "kind": "single",
    "code": "print(any([1, 2, 3]))",
    "id": "j402",
    "fixed": true
  },
  {
    "q": "Что вернёт вызов `any([False, True])`?",
    "options": [
      "True",
      "False",
      "TypeError",
      "1"
    ],
    "answer": 0,
    "explain": "Функция `any()` возвращает `True`, если хотя бы один элемент в итерируемом объекте является истинным. В списке `[False, True]` второй элемент `True` истинен, поэтому результат — `True`.",
    "kind": "single",
    "code": "print(any([False, True]))",
    "id": "j434",
    "fixed": true
  },
  {
    "q": "Что вернёт вызов `any(['', '', ''])`?",
    "options": [
      "False",
      "True",
      "ValueError",
      "''"
    ],
    "answer": 0,
    "explain": "Функция any() возвращает True, если хотя бы один элемент итерируемого объекта истинен. Пустые строки в логическом контексте приводятся к False, поэтому результат — False. Ловушка в том, что сам список не пустой, но все его элементы «пусты».",
    "kind": "single",
    "code": "print(any(['', '', '']))",
    "id": "j450",
    "fixed": true
  },
  {
    "q": "Что вернёт вызов `any([0, '', False])`?",
    "options": [
      "False",
      "True",
      "TypeError",
      "0"
    ],
    "answer": 0,
    "explain": "Функция `any()` возвращает `True`, если хотя бы один элемент итерируемого объекта истинен. В данном списке все элементы (`0`, пустая строка `''` и `False`) являются ложными, поэтому результат — `False`.",
    "kind": "single",
    "code": "print(any([0, '', False]))",
    "id": "j588",
    "fixed": true
  },
  {
    "q": "Что вернёт `any([None, 1])`?",
    "options": [
      "True",
      "False",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Функция `any` возвращает `True`, если хотя бы один элемент итерируемого объекта истинен. В Python `None` считается ложным значением, а целое число `1` — истинным, поэтому проверка останавливается на `1` и возвращает `True`.",
    "kind": "single",
    "code": "print(any([None, 1]))",
    "id": "j658",
    "fixed": true
  },
  {
    "q": "Что вернёт any([False, False, True])?",
    "options": [
      "True",
      "False",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Функция `any()` вернёт `True`, если хотя бы один элемент итерируемого объекта истинен. В списке `[False, False, True]` есть `True`, поэтому результат — `True`. Ловушка — спутать `any()` с функцией `all()`, которая вернула бы `False`.",
    "kind": "single",
    "id": "j718",
    "fixed": true
  },
  {
    "q": "Что вернёт `any([False, False])`?",
    "options": [
      "False",
      "True",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Функция `any()` возвращает `True`, если хотя бы один элемент итерируемого объекта истинен. Поскольку все элементы списка — `False`, результат будет `False`.",
    "kind": "single",
    "code": "print(any([False, False]))",
    "id": "j733",
    "fixed": true
  },
  {
    "q": "Что вернёт any([0, 1, 0])?",
    "options": [
      "True",
      "False",
      "1",
      "TypeError"
    ],
    "answer": 0,
    "explain": "Функция `any()` возвращает `True`, если хотя бы один элемент в итерируемом объекте является истинным (truthy). В списке `[0, 1, 0]` число `1` истинно, поэтому результат — `True`.",
    "kind": "single",
    "code": "print(any([0, 1, 0]))",
    "id": "j743",
    "fixed": true
  },
  {
    "q": "Что вернёт `any([[], [1]])`?",
    "options": [
      "True",
      "False",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Функция `any()` возвращает `True`, если хотя бы один элемент итерируемого объекта истинен. Пустой список `[]` ложен, но непустой список `[1]` истинен, поэтому итоговый результат — `True`.",
    "kind": "single",
    "code": "print(any([[], [1]]))",
    "id": "j776",
    "fixed": true
  },
  {
    "q": "Что вернёт вызов функции `any([None, None])`?",
    "options": [
      "`False`",
      "`True`",
      "`TypeError`",
      "`None`"
    ],
    "answer": 0,
    "explain": "Функция `any()` возвращает `True`, если хотя бы один элемент итерируемого объекта истинен. Поскольку `None` является ложным значением (falsy), а в списке нет истинных элементов, результат — `False`.",
    "kind": "single",
    "code": "print(any([None, None]))",
    "id": "j800",
    "fixed": true
  },
  {
    "q": "Что верно про any([])?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "False. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "id": "j1125",
    "fixed": true
  },
  {
    "q": "Что выведет print(any([0, 0, 0]))?",
    "options": [
      "False",
      "True",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "print(any([0, 0, 0]))",
    "id": "j1143",
    "fixed": true
  }
);
