// @meta topic=hash group=Встроенные функции
// junior · 2 cards
(window.QUESTIONS_JUNIOR = window.QUESTIONS_JUNIOR || []).push(
  {
    "q": "Какое исключение вызовет `hash([])`?",
    "options": [
      "TypeError",
      "ValueError",
      "0",
      "None"
    ],
    "answer": 0,
    "explain": "Функция `hash()` работает только с неизменяемыми объектами. Списки являются изменяемыми, поэтому попытка их хешировать вызывает `TypeError`. В отличие от списков, кортежи можно хешировать, так как они неизменяемы.",
    "kind": "single",
    "id": "j683",
    "fixed": true
  },
  {
    "q": "Что вернёт hash('a') == hash('a')?",
    "options": [
      "True в одной сессии",
      "всегда False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Результат выражения — True в одной сессии. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "j840",
    "fixed": true
  }
);
