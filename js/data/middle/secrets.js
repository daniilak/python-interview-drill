// @meta topic=secrets group=Stdlib и производительность
// middle · 4 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Зачем secrets.compare_digest?",
    "options": [
      "сравнивать секреты за примерно постоянное время (анти timing attack)",
      "быстрее обычного == на длинных строках всегда",
      "хешировать пароли",
      "генерировать JWT"
    ],
    "answer": 0,
    "explain": "Обычное == может коротко замкнуться на первом отличии. compare_digest снижает утечку по времени.",
    "kind": "single",
    "id": "m259",
    "fixed": true
  },
  {
    "q": "Что такое random.SystemRandom?",
    "options": [
      "интерфейс как у Random, но энтропия из OS RNG",
      "быстрее random.random всегда без оговорок",
      "ГПСЧ только для тестов с фиксированным seed",
      "замена secrets.compare_digest"
    ],
    "answer": 0,
    "explain": "SystemRandom.cryptographically опирается на os.urandom. Для токенов чаще модуль secrets.",
    "kind": "single",
    "id": "m401",
    "fixed": true
  },
  {
    "q": "Что делает secrets.token_urlsafe?",
    "options": [
      "криптостойкий токен, безопасный для URL (Base64url)",
      "только UUID1 из MAC",
      "предсказуемый счётчик",
      "MD5 от пароля"
    ],
    "answer": 0,
    "explain": "Для session id/CSRF используй secrets, не random. token_urlsafe удобен в query/path.",
    "kind": "single",
    "id": "m455",
    "fixed": true
  },
  {
    "q": "Когда secrets лучше random?",
    "options": [
      "для токенов, паролей, криптографии",
      "для симуляций Монте-Карло всегда",
      "для shuffle колоды в тестах с seed",
      "random запрещён совсем"
    ],
    "answer": 0,
    "explain": "random — PRNG для игр/симуляций. secrets — OS entropy для безопасности.",
    "kind": "single",
    "id": "m819",
    "fixed": true
  }
);
