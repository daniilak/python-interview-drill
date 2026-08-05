// @meta topic=lambda group=Функции и область видимости
// junior · 1 cards
(window.QUESTIONS_JUNIOR = window.QUESTIONS_JUNIOR || []).push(
  {
    "q": "Что вернёт выражение `(lambda x: x * x)(3)`?",
    "options": [
      "9",
      "6",
      "SyntaxError",
      "Объект функции lambda"
    ],
    "answer": 0,
    "explain": "Лямбда-функция `lambda x: x * x` создаётся и сразу же вызывается с аргументом `3`. Выражение `x * x` вычисляется как `3 * 3`, возвращая `9`. Скобки вокруг лямбды нужны для немедленного вызова.",
    "kind": "single",
    "code": "print((lambda x: x * x)(3))",
    "id": "j217",
    "fixed": true
  }
);
