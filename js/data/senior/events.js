// @meta topic=events group=Данные и распределёнка
// senior · 2 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Что такое CDC?",
    "options": [
      "Change Data Capture — поток изменений из БД (binlog, WAL, logical decoding)",
      "счётчик тактов CPU для профилирования hot loops",
      "дамп состояния cyclic GC в CPython",
      "протокол кэширования на уровне CDN edge"
    ],
    "answer": 0,
    "explain": "CDC читает insert/update/delete из журнала транзакций и публикует в Kafka/стрим. Основа для синхронизации read-моделей, поиска и аналитики без polling всей таблицы.",
    "kind": "single",
    "id": "s541",
    "fixed": true
  },
  {
    "q": "Зачем Outbox pattern?",
    "options": [
      "надёжно опубликовать событие вместе с записью в БД (без dual-write гонки)",
      "ускорить SELECT",
      "заменить SMTP",
      "очистить inbox Gmail"
    ],
    "answer": 0,
    "explain": "Пишешь бизнес-строку и outbox-событие в одной транзакции; отдельный publisher шлёт в брокер.",
    "kind": "single",
    "id": "s809",
    "fixed": true
  }
);
