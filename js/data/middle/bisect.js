// @meta topic=bisect group=Collections и itertools
// middle · 9 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что выведет код?",
    "options": [
      "0",
      "1",
      "-1",
      "ошибка"
    ],
    "answer": 0,
    "explain": "bisect_left([1,3,5,7], 1) — индекс, куда вставить 1, чтобы сохранить порядок: уже стоит на позиции 0.",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 1))",
    "id": "m75",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "3",
      "2",
      "4",
      "-1"
    ],
    "answer": 0,
    "explain": "bisect_left по отсортированному списку возвращает индекс вставки; для значения из кода это 3.",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 7))",
    "id": "m327",
    "fixed": true
  },
  {
    "q": "Что возвращает bisect.bisect_left?",
    "options": [
      "индекс вставки слева от равных элементов",
      "индекс удаления элемента",
      "всегда -1 если нет точного match",
      "новый отсортированный список"
    ],
    "answer": 0,
    "explain": "bisect_left/right — точки вставки в отсортированную последовательность за O(log n).",
    "kind": "single",
    "id": "m392",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "1",
      "0",
      "2",
      "ошибка"
    ],
    "answer": 0,
    "explain": "bisect_left/right — индекс вставки в отсортированную последовательность → 1.",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([2, 4, 6], 4))",
    "id": "m488",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "2",
      "1",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "bisect_left/right — индекс вставки в отсортированную последовательность → 2.",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 4))",
    "id": "m615",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "4",
      "3",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "bisect_left/right — индекс вставки в отсортированную последовательность → 4.",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 8))",
    "id": "m784",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "2",
      "1",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "bisect_left/right — индекс вставки в отсортированную последовательность → 2.",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([2, 4, 6], 5))",
    "id": "m802",
    "fixed": true
  },
  {
    "q": "Для чего модуль bisect?",
    "options": [
      "бинарный поиск и вставка в отсортированный list",
      "построение heap",
      "хеш-таблицы",
      "парсинг CSV"
    ],
    "answer": 0,
    "explain": "O(log n) поиск позиции; сама вставка в list всё ещё O(n).",
    "kind": "single",
    "id": "m841",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "0",
      "1",
      "2",
      "ошибка"
    ],
    "answer": 0,
    "explain": "bisect_left/right — индекс вставки в отсортированную последовательность → 0.",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 0))",
    "id": "m855",
    "fixed": true
  }
);
