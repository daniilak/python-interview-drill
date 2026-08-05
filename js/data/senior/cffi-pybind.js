// @meta topic=cffi/pybind group=Нативные расширения
// senior · 2 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Что даёт освобождение GIL в PyO3 при вызове Rust/C кода?",
    "options": [
      "другие Python-потоки могут работать, пока идёт тяжёлый native-код",
      "полностью удаляет GIL из интерпретатора навсегда",
      "ускоряет только import модуля",
      "заменяет asyncio на потоки ОС"
    ],
    "answer": 0,
    "explain": "В PyO3 можно отпустить GIL на время безопасного native-кода без доступа к Python-объектам. Тогда другие потоки выполняют Python. После возврата GIL снова захватывают — иначе гонки с runtime.",
    "kind": "single",
    "id": "s58",
    "fixed": true
  },
  {
    "q": "Для чего нужны pybind11 и PyO3?",
    "options": [
      "писать обёртки C++/Rust как расширения Python",
      "заменить Django/Flask на чистый C++",
      "линтить Python без flake8",
      "форматировать код вместо black"
    ],
    "answer": 0,
    "explain": "Pybind11 (C++) и PyO3 (Rust) помогают делать native-расширения с нормальным API для Python. Это не веб-фреймворки и не линтеры.",
    "kind": "single",
    "id": "s434",
    "fixed": true
  }
);
