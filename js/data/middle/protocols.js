// @meta topic=protocols group=Typing и dataclasses
// middle · 2 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что даёт @runtime_checkable у typing.Protocol?",
    "options": [
      "isinstance/issubclass могут проверить наличие методов структурно",
      "обязательную проверку типов на каждом вызове в CPython",
      "ускорение байткода",
      "сериализацию в JSON"
    ],
    "answer": 0,
    "explain": "По умолчанию Protocol только для чекера. runtime_checkable включает ограниченный isinstance по наличию атрибутов.",
    "kind": "single",
    "id": "m250",
    "fixed": true
  },
  {
    "q": "Чем ограничен @runtime_checkable Protocol?",
    "options": [
      "isinstance проверяет наличие методов, не глубокие сигнатуры",
      "полной проверкой типов аргументов в runtime",
      "только статическим checker без runtime",
      "запретом isinstance"
    ],
    "answer": 0,
    "explain": "runtime_checkable — поверхностно. Для строгости — type checker.",
    "kind": "single",
    "id": "m728",
    "fixed": true
  }
);
