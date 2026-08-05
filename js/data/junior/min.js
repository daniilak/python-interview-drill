// @meta topic=min group=Встроенные функции
// junior · 1 cards
(window.QUESTIONS_JUNIOR = window.QUESTIONS_JUNIOR || []).push(
  {
    "q": "Что вернёт `min('ba', 'ab')`?",
    "options": [
      "'ab'",
      "'ba'",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Функция `min()` сравнивает строки лексикографически, то есть посимвольно в алфавитном порядке. Поскольку символ 'a' предшествует 'b', строка 'ab' считается «меньшей», чем 'ba'.",
    "kind": "single",
    "id": "j768",
    "fixed": true
  }
);
