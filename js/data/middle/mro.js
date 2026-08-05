// @meta topic=MRO group=ООП продвинутый
// middle · 6 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Верно ли, что object всегда в конце MRO?",
    "options": [
      "обычно да для new-style",
      "нет никогда",
      "только old-style Py2",
      "только ABC"
    ],
    "answer": 0,
    "explain": "Корень иерархии — MRO (Method Resolution Order) задаёт порядок поиска методов при множественном наследовании по алгоритму C3.",
    "kind": "single",
    "id": "m98",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "C",
      "B",
      "A",
      "object"
    ],
    "answer": 0,
    "explain": "C.__mro__[0] — сам класс C, поэтому имя 'C'.",
    "kind": "single",
    "code": "class A: pass\nclass B(A): pass\nclass C(B): pass\nprint(C.__mro__[0].__name__)",
    "id": "m193",
    "fixed": true
  },
  {
    "q": "Что такое MRO?",
    "options": [
      "Method Resolution Order — порядок поиска атрибутов/методов у класса",
      "тип исключения импорта",
      "менеджер памяти pymalloc",
      "формат wheel-файла"
    ],
    "answer": 0,
    "explain": "MRO (C3) видно в Class.__mro__. От него зависит, чей метод вызовется при множественном наследовании.",
    "kind": "single",
    "id": "m206",
    "fixed": true
  },
  {
    "q": "Какую задачу решает diamond inheritance?",
    "options": [
      "C3 linearization",
      "случайный порядок",
      "только первый parent",
      "запрет syntax"
    ],
    "answer": 0,
    "explain": "Предсказуемый MRO — MRO (Method Resolution Order) задаёт порядок поиска методов при множественном наследовании по алгоритму C3.",
    "kind": "single",
    "id": "m310",
    "fixed": true
  },
  {
    "q": "Что показывает Class.__mro__?",
    "options": [
      "кортеж цепочки базовых классов в порядке поиска методов",
      "только прямых родителей",
      "список всех атрибутов экземпляра",
      "размер объекта в байтах"
    ],
    "answer": 0,
    "explain": "MRO — линейный порядок для attribute lookup при множественном наследовании (C3).",
    "kind": "single",
    "id": "m375",
    "fixed": true
  },
  {
    "q": "Как super() без аргументов находит класс и self в Python 3?",
    "options": [
      "из неявной ячейки __class__ / кадра метода",
      "только через глобальный MRO lookup без привязки",
      "по имени файла",
      "случайным выбором базы"
    ],
    "answer": 0,
    "explain": "В методе супер без аргументов опирается на __class__ cell. В обычной функции так вызвать нельзя.",
    "kind": "single",
    "id": "m400",
    "fixed": true
  }
);
