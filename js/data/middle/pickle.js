// @meta topic=pickle group=Stdlib и производительность
// middle · 3 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Зачем ограничивать find_class при Unpickler?",
    "options": [
      "чтобы whitelist'ить безопасные классы при загрузке",
      "чтобы ускорить pickle в 10 раз",
      "чтобы отключить GC",
      "это нужно только для json"
    ],
    "answer": 0,
    "explain": "Кастомный find_class — база безопасного unpickle. Иначе pickle с недоверенных данных = RCE.",
    "kind": "single",
    "id": "m207",
    "fixed": true
  },
  {
    "q": "Для чего используется pickle?",
    "options": [
      "сериализация/десериализация объектов Python",
      "безопасный обмен данными с интернетом по умолчанию",
      "замена JSON во всех API",
      "компиляция в байткод .pyc"
    ],
    "answer": 0,
    "explain": "pickle сохраняет граф объектов Python. На недоверенных данных опасен (RCE). Для обмена с внешним миром чаще JSON и схема.",
    "kind": "single",
    "id": "m233",
    "fixed": true
  },
  {
    "q": "Для чего полезен pickle protocol=5?",
    "options": [
      "out-of-band буферы для больших bytes (меньше копий)",
      "только человекочитаемый формат",
      "JSON совместимость",
      "шифрование"
    ],
    "answer": 0,
    "explain": "PEP 574: крупные бинарные куски можно передавать отдельно от pickle-потока.",
    "kind": "single",
    "id": "m856",
    "fixed": true
  }
);
