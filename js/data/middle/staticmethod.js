// @meta topic=staticmethod group=Контекст и магические методы
// middle · 2 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Чем @staticmethod отличается от обычного метода?",
    "options": [
      "не получает ни self, ни cls — просто функция в пространстве класса",
      "всегда виртуальный в смысле C++",
      "можно объявлять только внутри ABC",
      "компилируется в C и поэтому быстрее"
    ],
    "answer": 0,
    "explain": "staticmethod не привязывает экземпляр/класс. Это обычная функция, лежащая в классе для организации API. Не путать с classmethod (получает cls).",
    "kind": "single",
    "id": "m38",
    "fixed": true
  },
  {
    "q": "Что делает декоратор @staticmethod?",
    "options": [
      "метод не получает автоматически self/cls — обычная функция в классе",
      "включает JIT для метода",
      "делает метод абстрактным",
      "разрешён только внутри метакласса"
    ],
    "answer": 0,
    "explain": "staticmethod — namespace класса без привязки экземпляра. Не путать с classmethod.",
    "kind": "single",
    "id": "m192",
    "fixed": true
  }
);
