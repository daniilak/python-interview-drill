// @meta topic=bool group=Типы и операторы
// junior · 5 cards
(window.QUESTIONS_JUNIOR = window.QUESTIONS_JUNIOR || []).push(
  {
    "q": "Что вернёт выражение `True + True`?",
    "options": [
      "2",
      "True",
      "1",
      "TypeError"
    ],
    "answer": 0,
    "explain": "В Python тип `bool` является подклассом `int`, где `True` эквивалентно `1`, а `False` — `0`. Поэтому `True + True` вычисляется как `1 + 1`, что даёт `2`. Ловушка — предположить, что арифметические операции над булевыми значениями вызовут ошибку.",
    "kind": "single",
    "code": "print(True + True)",
    "id": "j609",
    "fixed": true
  },
  {
    "q": "Что вернёт выражение `False == 0`?",
    "options": [
      "True",
      "False",
      "TypeError",
      "0"
    ],
    "answer": 0,
    "explain": "Тип `bool` является подклассом `int`, где `False` имеет числовое значение 0, а `True` — 1. Поэтому при сравнении с целыми числами `False == 0` даёт `True`.",
    "kind": "single",
    "id": "j689",
    "fixed": true
  },
  {
    "q": "Что вернёт True == 1?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Результат выражения — True. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "j1045",
    "fixed": true
  },
  {
    "q": "Что верно про bool('False')?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Bool от непустой строки всегда True — даже от 'False' или '0'. Смотрят на пустоту строки, не на текст.",
    "kind": "single",
    "id": "j1078",
    "fixed": true
  },
  {
    "q": "Что верно про bool(0.0)?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "По правилам truthiness ответ False. Пустые коллекции и 0/''/None ложны; остальное обычно истинно.",
    "kind": "single",
    "id": "j1177",
    "fixed": true
  }
);
