// @meta topic=in group=Встроенные функции
// junior · 12 cards
(window.QUESTIONS_JUNIOR = window.QUESTIONS_JUNIOR || []).push(
  {
    "q": "Что выведет `print('py' in 'python')`?",
    "options": [
      "True",
      "False",
      "TypeError",
      "0"
    ],
    "answer": 0,
    "explain": "Оператор `in` проверяет вхождение подстроки в строку. Так как `'py'` является частью `'python'`, выражение истинно. В Python оператор `in` универсален для проверки принадлежности элемента к последовательности.",
    "kind": "single",
    "code": "print('py' in 'python')",
    "id": "j209",
    "fixed": true
  },
  {
    "q": "Что вернёт выражение `'Py' in 'python'`?",
    "options": [
      "False",
      "True",
      "TypeError",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Оператор `in` проверяет вхождение подстроки и чувствителен к регистру. Так как подстрока 'Py' с заглавной 'P' не содержится в строке 'python', результат будет `False`.",
    "kind": "single",
    "code": "print('Py' in 'python')",
    "id": "j573",
    "fixed": true
  },
  {
    "q": "Что вернёт выражение `'a' in {'a': 1, 'b': 2}`?",
    "options": [
      "True",
      "False",
      "TypeError",
      "ValueError"
    ],
    "answer": 0,
    "explain": "Оператор `in` для словарей по умолчанию проверяет наличие элемента среди ключей. Так как ключ 'a' присутствует в словаре, результат — True. Для проверки наличия в значениях используется `in d.values()`.",
    "kind": "single",
    "code": "print('a' in {'a': 1, 'b': 2})",
    "id": "j653",
    "fixed": true
  },
  {
    "q": "Что вернёт выражение `'th' in 'python'`?",
    "options": [
      "True",
      "False",
      "TypeError",
      "1"
    ],
    "answer": 0,
    "explain": "Оператор `in` проверяет вхождение одного объекта в другой. Для строк он работает как проверка на наличие подстроки. Так как 'th' является подстрокой в 'python', результат — `True`.",
    "kind": "single",
    "code": "print('th' in 'python')",
    "id": "j912",
    "fixed": true
  },
  {
    "q": "Что вернёт 9 in {1, 2}?",
    "options": [
      "False",
      "True",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Оператор `in` проверяет наличие элемента в коллекции. Поскольку число 9 отсутствует в множестве {1, 2}, выражение возвращает False.",
    "kind": "single",
    "code": "print(9 in {1, 2})",
    "id": "j927",
    "fixed": true
  },
  {
    "q": "Что вернёт 'a' in 'cat'?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Результат выражения — True. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "j984",
    "fixed": true
  },
  {
    "q": "Что вернёт проверка на вхождение `1 in {'a': 1}`?",
    "options": [
      "False",
      "True",
      "TypeError",
      "KeyError"
    ],
    "answer": 0,
    "explain": "Оператор `in` для словарей по умолчанию проверяет наличие элемента среди ключей, а не значений. Так как `1` не является ключом в словаре `{'a': 1}`, результат — `False`.",
    "kind": "single",
    "code": "print(1 in {'a': 1})",
    "id": "j1008",
    "fixed": true
  },
  {
    "q": "Что вернёт 1 in {1: 'a'}?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Результат выражения — True. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "j1068",
    "fixed": true
  },
  {
    "q": "Что выведет print(2 in [1, 2, 3])?",
    "options": [
      "True",
      "False",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print(2 in [1, 2, 3])",
    "id": "j1077",
    "fixed": true
  },
  {
    "q": "Что выведет print(2 in {1, 2, 3})?",
    "options": [
      "True",
      "False",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print(2 in {1, 2, 3})",
    "id": "j1101",
    "fixed": true
  },
  {
    "q": "Что выведет print(9 in [1, 2, 3])?",
    "options": [
      "False",
      "True",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "print(9 in [1, 2, 3])",
    "id": "j1146",
    "fixed": true
  },
  {
    "q": "Что выведет print(1 in (1, 2))?",
    "options": [
      "True",
      "False",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print(1 in (1, 2))",
    "id": "j1161",
    "fixed": true
  }
);
