// @meta topic=дескрипторы group=Контекст и магические методы
// middle · 3 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Чем является встроенный property с точки зрения дескрипторов?",
    "options": [
      "data descriptor (__get__/__set__/__delete__)",
      "non-data descriptor только с __get__",
      "обычный dict в экземпляре",
      "метакласс"
    ],
    "answer": 0,
    "explain": "property — data descriptor: перехватывает get/set/delete и поэтому сильнее instance __dict__.",
    "kind": "single",
    "id": "m244",
    "fixed": true
  },
  {
    "q": "Что такое дескриптор?",
    "options": [
      "объект с __get__/__set__/__delete__, управляющий доступом к атрибуту",
      "любой модуль в sys.modules",
      "только property из C",
      "файл .pyc"
    ],
    "answer": 0,
    "explain": "Протокол дескрипторов лежит в основе property, classmethod, functions-as-bound-methods.",
    "kind": "single",
    "id": "m283",
    "fixed": true
  },
  {
    "q": "Что такое __get__/__set__/__delete__?",
    "options": [
      "протокол дескрипторов (property так устроен)",
      "только metaclass",
      "GIL hooks",
      "async only"
    ],
    "answer": 0,
    "explain": "Data vs non-data descriptors. Дескрипторы управляют доступом к атрибутам через __get__, __set__ и __delete__.",
    "kind": "single",
    "id": "m309",
    "fixed": true
  }
);
