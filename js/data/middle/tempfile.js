// @meta topic=tempfile group=Stdlib и производительность
// middle · 5 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что возвращает tempfile.mkstemp?",
    "options": [
      "пару (fd, path) — дескриптор и путь",
      "только pathlib.Path",
      "всегда готовый текстовый file object",
      "только имя без fd"
    ],
    "answer": 0,
    "explain": "mkstemp низкоуровневый: os-level fd + путь. Закрывать fd и удалять файл — твоя ответственность (или бери NamedTemporaryFile).",
    "kind": "single",
    "id": "m141",
    "fixed": true
  },
  {
    "q": "Когда удаляется NamedTemporaryFile?",
    "options": [
      "часто при закрытии (параметр delete; на Windows нюансы)",
      "никогда автоматически",
      "только при reboot ОС",
      "сразу при создании до записи"
    ],
    "answer": 0,
    "explain": "delete=True (default) — unlink при close. На Windows нельзя открыть второй раз, пока файл открыт — классическая ловушка.",
    "kind": "single",
    "id": "m472",
    "fixed": true
  },
  {
    "q": "Что возвращает tempfile.gettempdir()?",
    "options": [
      "путь к каталогу временных файлов",
      "открытый файл",
      "UUID",
      "домашнюю папку"
    ],
    "answer": 0,
    "explain": "Учитывает TMPDIR/TEMP и платформу.",
    "kind": "single",
    "id": "m804",
    "fixed": true
  },
  {
    "q": "Что такое TemporaryDirectory?",
    "options": [
      "контекстный менеджер: временный каталог с автоочисткой",
      "вечный каталог в /",
      "только файл без каталога",
      "RAM-диск ОС"
    ],
    "answer": 0,
    "explain": "with TemporaryDirectory() as d: ... — после выхода каталог удаляется.",
    "kind": "single",
    "id": "m864",
    "fixed": true
  },
  {
    "q": "Что такое SpooledTemporaryFile?",
    "options": [
      "сначала держит данные в RAM, при росте — на диск",
      "только диск сразу",
      "только RAM без спула",
      "сетевой сокет"
    ],
    "answer": 0,
    "explain": "max_size порог переключения. Удобно для загрузок неизвестного размера.",
    "kind": "single",
    "id": "m905",
    "fixed": true
  }
);
