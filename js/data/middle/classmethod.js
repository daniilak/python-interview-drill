// @meta topic=classmethod group=Контекст и магические методы
// middle · 3 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Как часто делают альтернативный конструктор класса?",
    "options": [
      "через @classmethod вроде from_dict / from_json",
      "только через @staticmethod",
      "только через обязательный метакласс",
      "только через eval строки с кодом"
    ],
    "answer": 0,
    "explain": "classmethod получает cls и может вернуть экземпляр. Классика: `@classmethod def from_json(cls, data): ...`. staticmethod не знает класс.",
    "kind": "single",
    "id": "m53",
    "fixed": true
  },
  {
    "q": "Какой первый аргумент у метода с @classmethod?",
    "options": [
      "cls — сам класс, а не экземпляр",
      "self — экземпляр, как у обычного метода",
      "*args без неявного первого аргумента",
      "методу нельзя иметь аргументы"
    ],
    "answer": 0,
    "explain": "`@classmethod` получает класс (`cls`). Так пишут альтернативные конструкторы (`from_json`). Обычный метод получает `self`, `@staticmethod` — ничего неявного.",
    "kind": "single",
    "id": "m166",
    "fixed": true
  },
  {
    "q": "Какой первый аргумент у @classmethod?",
    "options": [
      "класс cls, не экземпляр",
      "экземпляр self",
      "метакласс всегда",
      "ничего"
    ],
    "answer": 0,
    "explain": "classmethod получает класс — удобно для альтернативных конструкторов.",
    "kind": "single",
    "id": "m348",
    "fixed": true
  }
);
