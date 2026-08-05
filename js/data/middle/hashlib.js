// @meta topic=hashlib group=Stdlib и производительность
// middle · 3 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Для чего pbkdf2_hmac / scrypt?",
    "options": [
      "KDF для паролей (замедление перебора + соль)",
      "быстрый checksum файла",
      "шифрование AES само по себе",
      "подпись JWT без ключа"
    ],
    "answer": 0,
    "explain": "Не храни пароль как sha256(password). Используй KDF/argon2/bcrypt с солью и параметрами стоимости.",
    "kind": "single",
    "id": "m594",
    "fixed": true
  },
  {
    "q": "Зачем hashlib.sha256?",
    "options": [
      "криптографический хеш (отпечаток данных)",
      "шифрование с ключом как AES",
      "сжатие gzip",
      "кодирование URL"
    ],
    "answer": 0,
    "explain": "Хеш ≠ encryption. Для паролей — KDF, не голый sha256(password).",
    "kind": "single",
    "id": "m670",
    "fixed": true
  },
  {
    "q": "Что вернёт blake2 / sha3?",
    "options": [
      "современные хеш-функции",
      "crc32 crypto-safe",
      "siphash dict only",
      "md5 recommended password"
    ],
    "answer": 0,
    "explain": "Результат выражения — современные хеш-функции. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m890",
    "fixed": true
  }
);
