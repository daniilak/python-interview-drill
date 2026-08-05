// @meta topic=struct group=Stdlib и производительность
// middle · 6 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Какой format-символ struct для bool (1 байт)?",
    "options": [
      "'?'",
      "'b' всегда для bool",
      "'s'",
      "'p'"
    ],
    "answer": 0,
    "explain": "struct: '?' — _Bool. 'b'/'B' — signed/unsigned char.",
    "kind": "single",
    "id": "m479",
    "fixed": true
  },
  {
    "q": "Что возвращает struct.calcsize(fmt)?",
    "options": [
      "размер в байтах для данного формата упаковки",
      "скомпилированный C-код",
      "размер JSON-строки",
      "хеш строки формата"
    ],
    "answer": 0,
    "explain": "Struct.calcsize(fmt) считает, сколько байт займёт pack(fmt, ...). Нужно для буферов и бинарных протоколов.",
    "kind": "single",
    "id": "m622",
    "fixed": true
  },
  {
    "q": "Что делает struct.pack?",
    "options": [
      "упаковывает значения в bytes по format-строке",
      "парсит JSON",
      "сжимает gzip",
      "кодирует URL"
    ],
    "answer": 0,
    "explain": "Бинарные протоколы/файлы: pack/unpack с endianness и типами C.",
    "kind": "single",
    "id": "m710",
    "fixed": true
  },
  {
    "q": "Что делает struct.iter_unpack?",
    "options": [
      "лениво распаковывает буфер кусками по format",
      "только один unpack всего файла в tuple",
      "пакует в JSON",
      "сжимает"
    ],
    "answer": 0,
    "explain": "Удобно читать бинарный поток записей фиксированного размера.",
    "kind": "single",
    "id": "m734",
    "fixed": true
  },
  {
    "q": "Как задать endianness в struct format?",
    "options": [
      "< little-endian, > big-endian (есть и =, !)",
      "только через sys.byteorder без format",
      "endianness нельзя задать",
      "только UTF-8"
    ],
    "answer": 0,
    "explain": "Первый символ format задаёт порядок байт и выравнивание.",
    "kind": "single",
    "id": "m758",
    "fixed": true
  },
  {
    "q": "Что значит @ в начале struct format?",
    "options": [
      "native size/alignment платформы",
      "всегда network big-endian",
      "UTF-16",
      "JSON"
    ],
    "answer": 0,
    "explain": "@ — native. = native order без alignment padding quirks; < > ! — явный endian.",
    "kind": "single",
    "id": "m801",
    "fixed": true
  }
);
