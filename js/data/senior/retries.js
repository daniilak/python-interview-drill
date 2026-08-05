// @meta topic=retries group=Данные и распределёнка
// senior · 2 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Зачем budget/deadline на ретраи?",
    "options": [
      "общий лимит времени/попыток, чтобы ретраи не жили вечно",
      "увеличить retry storm",
      "отключить backoff",
      "игнорировать 429"
    ],
    "answer": 0,
    "explain": "Deadline на всю операцию + per-attempt timeout. Без бюджета клиент долбит уже мёртвый сервис.",
    "kind": "single",
    "id": "s726",
    "fixed": true
  },
  {
    "q": "Что вернёт Exponential backoff + jitter чтобы?",
    "options": [
      "не долбить сервис синхронно",
      "ускорить CPU",
      "убрать ошибки навсегда",
      "кэшировать GIL"
    ],
    "answer": 0,
    "explain": "Результат выражения — не долбить сервис синхронно. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s846",
    "fixed": true
  }
);
