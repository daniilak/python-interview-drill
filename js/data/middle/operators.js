// @meta topic=операторы group=Typing и dataclasses
// middle · 1 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Допустим ли синтаксис a := b := 1?",
    "options": [
      "нет — SyntaxError (цепочка walrus так не пишется)",
      "да, как a = b = 1",
      "да только в 3.12+",
      "да внутри class body"
    ],
    "answer": 0,
    "explain": "Обычное a = b = 1 ок. Walrus не поддерживает такую цепочку.",
    "kind": "single",
    "id": "m684",
    "fixed": true
  }
);
