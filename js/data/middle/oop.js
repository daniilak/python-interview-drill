// @meta topic=ООП group=ООП продвинутый
// middle · 12 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print(issubclass(bool, int))",
    "id": "m39",
    "fixed": true
  },
  {
    "q": "Что получает метод с @classmethod первым аргументом?",
    "options": [
      "класс (cls), а не экземпляр",
      "только экземпляр self",
      "метакласс всегда",
      "ничего — аргументов нет"
    ],
    "answer": 0,
    "explain": "classmethod видит класс: удобно для фабрик и доступа к атрибутам класса. Обычный метод получает self.",
    "kind": "single",
    "id": "m54",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "3",
      "AttributeError",
      "None",
      "property"
    ],
    "answer": 0,
    "explain": "Обращение к c.x вызывает getter property и возвращает self._x, то есть 3.",
    "kind": "single",
    "code": "class C:\n    def __init__(self):\n        self._x = 3\n    @property\n    def x(self):\n        return self._x\nprint(C().x)",
    "id": "m112",
    "fixed": true
  },
  {
    "q": "Что такое миксин обычно?",
    "options": [
      "класс с дополнительным поведением без самостоятельной «главной» роли",
      "абстрактный модуль sys",
      "синоним декоратора",
      "обязательный метакласс"
    ],
    "answer": 0,
    "explain": "Mixin подмешивают в наследование ради методов (логирование, сериализация). Сам по себе как доменная сущность не живёт.",
    "kind": "single",
    "id": "m154",
    "fixed": true
  },
  {
    "q": "Каков типичный MRO при diamond: class C(A, B)?",
    "options": [
      "C, затем A, затем B, затем общие базы по C3 (упрощённо)",
      "всегда C, B, A без исключений",
      "случайный порядок каждый запуск",
      "всегда TypeError"
    ],
    "answer": 0,
    "explain": "C3 линеаризация фиксирует порядок: слева направо с учётом монотонности. Точный хвост зависит от баз A/B; смотри Class.__mro__.",
    "kind": "single",
    "id": "m180",
    "fixed": true
  },
  {
    "q": "Что обычно даёт @property?",
    "options": [
      "доступ как к атрибуту, а внутри — вычисление через метод",
      "обязательное хранение значения в __dict__ без геттера",
      "запрет на setter навсегда",
      "ускорение за счёт слотов"
    ],
    "answer": 0,
    "explain": "property маскирует метод под атрибут: obj.x вызывает getter. Setter/deleter опциональны.",
    "kind": "single",
    "id": "m219",
    "fixed": true
  },
  {
    "q": "Что такое staticmethod?",
    "options": [
      "функция в классе без неявных self/cls",
      "метод, который всегда видит экземпляр",
      "абстрактный метод ABC",
      "генератор"
    ],
    "answer": 0,
    "explain": "staticmethod не биндится. Нужен, когда логически функция относится к классу, но не использует состояние.",
    "kind": "single",
    "id": "m245",
    "fixed": true
  },
  {
    "q": "В чём разница __new__ и __init__?",
    "options": [
      "__new__ создаёт экземпляр, __init__ его инициализирует",
      "это полные синонимы",
      "__init__ вызывается до __new__",
      "__new__ нельзя переопределять"
    ],
    "answer": 0,
    "explain": "__new__ — конструктор (возвращает instance), затем __init__ настраивает поля. Для immutable часто важнее __new__.",
    "kind": "single",
    "id": "m284",
    "fixed": true
  },
  {
    "q": "Зачем объявляют __slots__?",
    "options": [
      "зафиксировать набор атрибутов и часто сэкономить память (без __dict__)",
      "ускорить import модуля",
      "запретить методы класса",
      "включить JIT"
    ],
    "answer": 0,
    "explain": "Слоты убирают per-instance __dict__ (если не добавить его явно) — меньше RAM, жёстче схема атрибутов.",
    "kind": "single",
    "id": "m297",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "B",
      "A",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "У экземпляра B свой hello перекрывает A → печатается B.",
    "kind": "single",
    "code": "class A:\n    def hello(self):\n        return 'A'\nclass B(A):\n    def hello(self):\n        return 'B'\nprint(B().hello())",
    "id": "m323",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "A.x",
      "B.x",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Атрибут/метод резолвится в A (см. код) — результат A.x.",
    "kind": "single",
    "code": "class A:\n    def hello(self):\n        return 'A.x'\nclass B(A):\n    def hello(self):\n        return super().hello()\nprint(B().hello())",
    "id": "m349",
    "fixed": true
  },
  {
    "q": "Для чего используют super()?",
    "options": [
      "вызов метода следующего класса в MRO (часто «родителя»)",
      "создание нового процесса",
      "отключение наследования",
      "доступ только к object.__init__ минуя MRO"
    ],
    "answer": 0,
    "explain": "super() следует MRO — критично при diamond inheritance и cooperative multiple inheritance.",
    "kind": "single",
    "id": "m388",
    "fixed": true
  }
);
