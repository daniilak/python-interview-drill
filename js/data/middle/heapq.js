// @meta topic=heapq group=Collections и itertools
// middle · 14 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что выведет код?",
    "options": [
      "[1, 2]",
      "[1, 2, 7]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "После heapify минимум в корне (h[0]). Здесь: [1, 2].",
    "kind": "single",
    "code": "import heapq\nprint(heapq.nsmallest(2, [9, 2, 7, 1]))",
    "id": "m15",
    "fixed": true
  },
  {
    "q": "Что делает heapq.nlargest(k, iterable)?",
    "options": [
      "эффективно находит k наибольших элементов (куча), без полной сортировки всего",
      "всегда полностью сортирует весь iterable и режет хвост",
      "удаляет k наименьших из исходного списка на месте",
      "работает только с числами int"
    ],
    "answer": 0,
    "explain": "nlargest/nsmallest используют кучу размера k — выгоднее полной сортировки, когда k ≪ n. Для k≈n проще sorted(... )[:k].",
    "kind": "single",
    "id": "m30",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "1",
      "9",
      "2",
      "ошибка"
    ],
    "answer": 0,
    "explain": "После heapify минимум в h[0]; heappop/печать по коду даёт 1.",
    "kind": "single",
    "code": "import heapq\nh = [9, 2, 7, 1]\nheapq.heapify(h)\nprint(h[0])",
    "id": "m353",
    "fixed": true
  },
  {
    "q": "Что выведет код (минимум на [0])?",
    "options": [
      "1",
      "9",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "После heapify минимум в корне (h[0]). Здесь: 1.",
    "kind": "single",
    "code": "import heapq\nh = [4, 4, 1]\nheapq.heapify(h)\nprint(h[0])",
    "id": "m495",
    "fixed": true
  },
  {
    "q": "Что делает heapq.merge(*iters)?",
    "options": [
      "сливает уже отсортированные итераторы в один sorted-поток",
      "сортирует произвольный unsorted list in-place",
      "строит max-heap",
      "удаляет дубликаты"
    ],
    "answer": 0,
    "explain": "Как sorted(chain(*iters)), но лениво и эффективно, если входы sorted.",
    "kind": "single",
    "id": "m687",
    "fixed": true
  },
  {
    "q": "Что делает heapq.nsmallest?",
    "options": [
      "возвращает k наименьших элементов",
      "строит max-heap",
      "сортирует только уникальные",
      "удаляет минимум из list in-place всегда"
    ],
    "answer": 0,
    "explain": "Эффективнее полной сортировки при малом k. Есть nlargest.",
    "kind": "single",
    "id": "m715",
    "fixed": true
  },
  {
    "q": "Что выведет код (минимум на [0])?",
    "options": [
      "1",
      "9",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "После heapify минимум в корне (h[0]). Здесь: 1.",
    "kind": "single",
    "code": "import heapq\nh = [5, 1, 3]\nheapq.heapify(h)\nprint(h[0])",
    "id": "m832",
    "fixed": true
  },
  {
    "q": "Что реализует heapq?",
    "options": [
      "бинарную min-кучу на list",
      "balanced BST",
      "hash table",
      "max-кучу по умолчанию без трюков"
    ],
    "answer": 0,
    "explain": "h[0] — минимум. Для max — инверсия ключей/отрицания.",
    "kind": "single",
    "id": "m835",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[1, 3]",
      "[1, 3, 5]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "После heapify минимум в корне (h[0]). Здесь: [1, 3].",
    "kind": "single",
    "code": "import heapq\nprint(heapq.nsmallest(2, [5, 1, 3]))",
    "id": "m839",
    "fixed": true
  },
  {
    "q": "Что выведет код (минимум на [0])?",
    "options": [
      "5",
      "1",
      "9",
      "ошибка"
    ],
    "answer": 0,
    "explain": "После heapify минимум в корне (h[0]). Здесь: 5.",
    "kind": "single",
    "code": "import heapq\nh = [10, 20, 5, 30]\nheapq.heapify(h)\nprint(h[0])",
    "id": "m853",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[1, 4]",
      "[1, 4, 4]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "После heapify минимум в корне (h[0]). Здесь: [1, 4].",
    "kind": "single",
    "code": "import heapq\nprint(heapq.nsmallest(2, [4, 4, 1]))",
    "id": "m857",
    "fixed": true
  },
  {
    "q": "Что дают heappush / heappop?",
    "options": [
      "операции min-кучи",
      "max-кучу по умолчанию",
      "сортировку ключей dict",
      "бинарный поиск"
    ],
    "answer": 0,
    "explain": "push сохраняет инвариант кучи; pop забирает минимум.",
    "kind": "single",
    "id": "m863",
    "fixed": true
  },
  {
    "q": "Что делает heapq.heapify?",
    "options": [
      "in-place линейно строит кучу из list",
      "сортирует полностью O(n log n) всегда как единственный смысл",
      "создаёт новый list обязательно",
      "строит BST"
    ],
    "answer": 0,
    "explain": "heapify O(n) vs n раз heappush O(n log n).",
    "kind": "single",
    "id": "m867",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[5, 10]",
      "[5, 10, 20]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "После heapify минимум в корне (h[0]). Здесь: [5, 10].",
    "kind": "single",
    "code": "import heapq\nprint(heapq.nsmallest(2, [10, 20, 5, 30]))",
    "id": "m885",
    "fixed": true
  }
);
