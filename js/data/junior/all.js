// @meta topic=all group=Встроенные функции
// junior · 15 cards
(window.QUESTIONS_JUNIOR = window.QUESTIONS_JUNIOR || []).push(
  {
    "q": "Что вернёт `all(['', 'x'])`?",
    "options": [
      "False",
      "True",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Функция `all()` возвращает `False`, если хотя бы один элемент итерируемого объекта является ложным. Пустая строка `''` в Python считается ложным значением, поэтому результат — `False`.",
    "kind": "single",
    "code": "print(all(['', 'x']))",
    "id": "j32",
    "fixed": true
  },
  {
    "q": "Что вернёт `all([])`?",
    "options": [
      "True",
      "False",
      "None",
      "ValueError"
    ],
    "answer": 0,
    "explain": "Функция `all()` возвращает `True` для любого пустого итерируемого объекта. Это логически следует из того, что в пустой последовательности нет ни одного ложного элемента, который мог бы опровергнуть утверждение.",
    "kind": "single",
    "id": "j139",
    "fixed": true
  },
  {
    "q": "Что вернёт all([True, True, False])?",
    "options": [
      "False",
      "True",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Функция `all()` возвращает `True`, только если все элементы итерируемого объекта истинны. Так как в списке есть `False`, `all()` прекращает проверку и сразу возвращает `False`.",
    "kind": "single",
    "id": "j149",
    "fixed": true
  },
  {
    "q": "Что вернёт `all([])`?",
    "options": [
      "True",
      "False",
      "ValueError",
      "None"
    ],
    "answer": 0,
    "explain": "Функция `all()` возвращает `True` для любой пустой последовательности. Ловушка в том, что по аналогии с `any([])`, которая возвращает `False`, можно ожидать обратного поведения.",
    "kind": "single",
    "code": "print(all([]))",
    "id": "j259",
    "fixed": true
  },
  {
    "q": "Что вернёт вызов функции `all([False, True])`?",
    "options": [
      "False",
      "True",
      "TypeError",
      "[False, True]"
    ],
    "answer": 0,
    "explain": "Функция `all()` возвращает `True`, только если все элементы итерируемого объекта истинны. Поскольку в списке есть `False`, результат будет `False`. Ловушка в том, чтобы не спутать `all()` с функцией `any()`, которая для этого же списка вернула бы `True`.",
    "kind": "single",
    "code": "print(all([False, True]))",
    "id": "j288",
    "fixed": true
  },
  {
    "q": "Что вернёт `all([0, 0, 0])`?",
    "options": [
      "False",
      "True",
      "TypeError",
      "0"
    ],
    "answer": 0,
    "explain": "Функция `all()` возвращает `True`, только если все элементы итерируемого объекта истинны. Так как `0` в булевом контексте является ложным значением, `all()` прекращает проверку на первом же элементе и возвращает `False`.",
    "kind": "single",
    "code": "print(all([0, 0, 0]))",
    "id": "j315",
    "fixed": true
  },
  {
    "q": "Что вернёт `all([False, False])`?",
    "options": [
      "False",
      "True",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Функция `all()` возвращает `True`, только если все элементы итерируемого объекта истинны. Как только встречается ложный элемент (`False`), проверка прекращается и возвращается `False`. Не стоит путать `all()` с `any()`, которая вернула бы `True`, если бы в списке был хотя бы один истинный элемент.",
    "kind": "single",
    "code": "print(all([False, False]))",
    "id": "j418",
    "fixed": true
  },
  {
    "q": "Что вернёт `all([])`?",
    "options": [
      "True",
      "False",
      "ValueError",
      "None"
    ],
    "answer": 0,
    "explain": "Функция `all()` возвращает `True` для пустой последовательности. Это логично: в ней нет ни одного элемента, который был бы ложным, поэтому условие «все элементы истинны» не нарушается.",
    "kind": "single",
    "code": "print(all([]))",
    "id": "j466",
    "fixed": true
  },
  {
    "q": "Что вернёт вызов функции `all([None, None])`?",
    "options": [
      "False",
      "True",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Функция `all()` возвращает `False`, если находит хотя бы один «ложный» элемент. `None` приводится к `False` в логическом контексте, поэтому проверка прерывается на первом же элементе.",
    "kind": "single",
    "code": "all([None, None])",
    "id": "j474",
    "fixed": true
  },
  {
    "q": "Что вернёт вызов функции all([None, 1])?",
    "options": [
      "False",
      "True",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Функция all() возвращает False, как только встречает первый «ложный» элемент. В Python объект None является ложным значением (falsy), поэтому итерация прерывается и итоговый результат — False.",
    "kind": "single",
    "code": "print(all([None, 1]))",
    "id": "j563",
    "fixed": true
  },
  {
    "q": "Что вернёт `all([1, 2, 3])`?",
    "options": [
      "True",
      "False",
      "TypeError",
      "[1, 2, 3]"
    ],
    "answer": 0,
    "explain": "Функция `all()` возвращает `True`, если все элементы итерируемого объекта истинны. В Python все ненулевые числа считаются истинными, поэтому результат — `True`.",
    "kind": "single",
    "code": "print(all([1, 2, 3]))",
    "id": "j698",
    "fixed": true
  },
  {
    "q": "Что вернёт `all([[], [1]])`?",
    "options": [
      "False",
      "True",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Функция `all()` возвращает `True`, если все элементы итерируемого объекта истинны. Пустой список `[]` приводится к `False`, поэтому `all()` прекращает проверку и сразу возвращает `False`.",
    "kind": "single",
    "code": "print(all([[], [1]]))",
    "id": "j824",
    "fixed": true
  },
  {
    "q": "Что вернёт вызов функции `all([0, 1, 0])`?",
    "options": [
      "False",
      "True",
      "TypeError",
      "0"
    ],
    "answer": 0,
    "explain": "Функция `all()` возвращает `True`, только если все элементы итерируемого объекта истинны (truthy). В Python число `0` является ложным (falsy) значением, поэтому `all()` прекращает проверку и возвращает `False` при встрече первого нуля.",
    "kind": "single",
    "code": "print(all([0, 1, 0]))",
    "id": "j942",
    "fixed": true
  },
  {
    "q": "Что выведет print(all(['', '', '']))?",
    "options": [
      "False",
      "True",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "print(all(['', '', '']))",
    "id": "j1089",
    "fixed": true
  },
  {
    "q": "Что выведет print(all([[], []]))?",
    "options": [
      "False",
      "True",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "print(all([[], []]))",
    "id": "j1134",
    "fixed": true
  }
);
