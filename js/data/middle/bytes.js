// @meta topic=bytes group=Stdlib и производительность
// middle · 2 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что вернёт b'hi'.decode() по умолчанию?",
    "options": [
      "строку 'hi' в UTF-8",
      "байт за байтом как Latin-1 всегда без UTF-8",
      "ошибку без encoding=",
      "bytearray"
    ],
    "answer": 0,
    "explain": "decode() по умолчанию использует UTF-8 (с 3.x). 'hi' из двух ASCII-байт декодируется в 'hi'.",
    "kind": "single",
    "id": "m298",
    "fixed": true
  },
  {
    "q": "Что связывают encode/decode?",
    "options": [
      "str ↔ bytes через кодировку",
      "int ↔ float",
      "list ↔ tuple",
      "JSON ↔ pickle"
    ],
    "answer": 0,
    "explain": "s.encode('utf-8') → bytes; b.decode('utf-8') → str.",
    "kind": "single",
    "id": "m892",
    "fixed": true
  }
);
