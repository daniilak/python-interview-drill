// @meta topic=строки group=Stdlib и производительность
// middle · 2 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
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
    "code": "print('X'.casefold() == 'x')",
    "id": "m434",
    "fixed": true
  },
  {
    "q": "Зачем нужно Интернирование строк: sys.intern?",
    "options": [
      "принудительно дедуплицирует str",
      "шифрует",
      "делает bytes",
      "GC disable"
    ],
    "answer": 0,
    "explain": "Для частых ключей — Строки в Python неизменяемы: любой «изменяющий» метод возвращает новую строку, а срезы работают так же, как у последовательностей.",
    "kind": "single",
    "id": "m538",
    "fixed": true
  }
);
