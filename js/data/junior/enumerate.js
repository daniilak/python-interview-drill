// @meta topic=enumerate group=Встроенные функции
// junior · 7 cards
(window.QUESTIONS_JUNIOR = window.QUESTIONS_JUNIOR || []).push(
  {
    "q": "Что возвращает итератор `enumerate()` для каждого элемента последовательности?",
    "options": [
      "Кортеж (индекс, значение)",
      "Только значение",
      "Только индекс",
      "Кортеж (значение, индекс)"
    ],
    "answer": 0,
    "explain": "Функция `enumerate()` возвращает итератор, который на каждой итерации даёт кортеж из индекса и соответствующего ему значения. По умолчанию нумерация начинается с нуля.",
    "kind": "single",
    "id": "j378",
    "fixed": true
  },
  {
    "q": "Что вернёт `list(enumerate(['a', 'b'], start=0))`?",
    "options": [
      "[(0, 'a'), (1, 'b')]",
      "[(1, 'a'), (2, 'b')]",
      "['a', 'b']",
      "TypeError"
    ],
    "answer": 0,
    "explain": "Функция `enumerate` возвращает итератор, генерирующий кортежи из индекса и элемента. `start=0` устанавливает начальный индекс (это значение по умолчанию), а `list()` преобразует итератор в список.",
    "kind": "single",
    "code": "print(list(enumerate(['a', 'b'], start=0)))",
    "id": "j583",
    "fixed": true
  },
  {
    "q": "Что вернёт `list(enumerate(['a', 'b'], start=1))`?",
    "options": [
      "[(1, 'a'), (2, 'b')]",
      "[(0, 'a'), (1, 'b')]",
      "TypeError",
      "['a', 'b']"
    ],
    "answer": 0,
    "explain": "Функция `enumerate` возвращает пары (индекс, значение). Параметр `start=1` указывает, что нумерация начинается с 1, а не с 0, как это происходит по умолчанию.",
    "kind": "single",
    "code": "print(list(enumerate(['a', 'b'], start=1)))",
    "id": "j788",
    "fixed": true
  },
  {
    "q": "Что вернёт `list(enumerate(['x', 'y', 'z'], start=1))`?",
    "options": [
      "[(1, 'x'), (2, 'y'), (3, 'z')]",
      "[(0, 'x'), (1, 'y'), (2, 'z')]",
      "TypeError",
      "['x', 'y', 'z']"
    ],
    "answer": 0,
    "explain": "Функция `enumerate` создаёт итератор, возвращающий пары (индекс, элемент). Параметр `start=1` указывает, что нумерация должна начаться с 1. Ловушка в том, чтобы не забыть про этот аргумент и не выбрать вариант с нумерацией по умолчанию (с 0).",
    "kind": "single",
    "code": "print(list(enumerate(['x', 'y', 'z'], start=1)))",
    "id": "j924",
    "fixed": true
  },
  {
    "q": "Что выведет print(list(enumerate(['a', 'b'], start=1)))?",
    "options": [
      "[(1, 'a'), (2, 'b')]",
      "[(0, 'a'), (1, 'b')]",
      "TypeError",
      "['a', 'b']"
    ],
    "answer": 0,
    "explain": "enumerate(['a','b'], start=1) → (1,'a'), (2,'b').",
    "kind": "single",
    "code": "print(list(enumerate(['a', 'b'], start=1)))",
    "id": "j1104",
    "fixed": true
  },
  {
    "q": "Что выведет print(list(enumerate([10, 20], start=5)))?",
    "options": [
      "[(5, 10), (6, 20)]",
      "[(0, 10), (1, 20)]",
      "TypeError",
      "[10, 20]"
    ],
    "answer": 0,
    "explain": "enumerate([10, 20], start=5) → (5, 10), (6, 20). start задаёт начальный индекс.",
    "kind": "single",
    "code": "print(list(enumerate([10, 20], start=5)))",
    "id": "j1122",
    "fixed": true
  },
  {
    "q": "Что вернёт list(enumerate('ab', 1))?",
    "options": [
      "[(1,'a'), (2,'b')]",
      "[(0,'a'),(1,'b')]",
      "ошибка",
      "['a','b']"
    ],
    "answer": 0,
    "explain": "Результат выражения — [(1,'a'), (2,'b')]. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "j1158",
    "fixed": true
  }
);
