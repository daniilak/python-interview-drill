// @meta topic=consistency group=Данные и распределёнка
// senior · 2 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Что такое linearizability?",
    "options": [
      "сильная consistency: операции выглядят мгновенными в real-time порядке",
      "eventual без порядка",
      "только про UI анимации",
      "кэш TTL"
    ],
    "answer": 0,
    "explain": "Линеаризуемость — как будто одна копия данных. Дороже quorum'ов, но проще рассуждать.",
    "kind": "single",
    "id": "s765",
    "fixed": true
  },
  {
    "q": "Что такое read-your-writes consistency?",
    "options": [
      "клиент после своей записи обязан видеть её в последующих чтениях",
      "чтение чужих грязных данных",
      "запрет чтения",
      "только full linearizability всегда"
    ],
    "answer": 0,
    "explain": "Частая сессионная гарантия: sticky к primary или version token.",
    "kind": "single",
    "id": "s777",
    "fixed": true
  }
);
