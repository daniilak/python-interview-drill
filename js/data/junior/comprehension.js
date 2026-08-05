// @meta topic=comprehension group=Встроенные функции
// junior · 1 cards
(window.QUESTIONS_JUNIOR = window.QUESTIONS_JUNIOR || []).push(
  {
    "q": "Что вернёт `sum(x for x in range(4))`?",
    "options": [
      "6",
      "10",
      "[0, 1, 2, 3]",
      "TypeError"
    ],
    "answer": 0,
    "explain": "Выражение `(x for x in range(4))` — это генератор, который производит числа 0, 1, 2, 3. Функция `sum()` складывает все элементы итератора, в результате чего получается 6.",
    "kind": "single",
    "id": "j530",
    "fixed": true
  }
);
