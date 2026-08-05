// @meta topic=memoryview group=Stdlib и производительность
// middle · 2 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Зачем memoryview?",
    "options": [
      "срезы/переинтерпретация буфера без копирования байт",
      "ускорение str",
      "замена bytes полностью",
      "JSON парсер"
    ],
    "answer": 0,
    "explain": "Нулевое копирование кусков большого bytes/bytearray; cast меняет вид элементов.",
    "kind": "single",
    "id": "m795",
    "fixed": true
  },
  {
    "q": "Что делает memoryview.cast('I')?",
    "options": [
      "переинтерпретирует буфер как массив unsigned int",
      "копирует в list[int] всегда",
      "кодирует UTF-8",
      "сжимает"
    ],
    "answer": 0,
    "explain": "cast меняет формат элементов zero-copy (с требованиями выравнивания/размера).",
    "kind": "single",
    "id": "m822",
    "fixed": true
  }
);
