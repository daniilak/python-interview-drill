// @meta topic=array group=Collections и itertools
// middle · 2 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Чем array.array отличается от list?",
    "options": [
      "типизированный компактный массив однотипных C-значений",
      "хранит любые объекты Python как list",
      "это то же, что ndarray всегда",
      "только строки"
    ],
    "answer": 0,
    "explain": "array('i', ...) экономит память vs list[int], но без векторных операций NumPy.",
    "kind": "single",
    "id": "m502",
    "fixed": true
  },
  {
    "q": "Что хранит array.array('i')?",
    "options": [
      "signed int в компактном C-массиве",
      "произвольные Python-объекты",
      "только float",
      "строки Unicode"
    ],
    "answer": 0,
    "explain": "Типкод 'i' — signed int. Экономнее list[int] по памяти.",
    "kind": "single",
    "id": "m817",
    "fixed": true
  }
);
