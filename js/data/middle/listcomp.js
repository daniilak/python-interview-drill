// @meta topic=listcomp group=Генераторы и итераторы
// middle · 2 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "В каком порядке идут вложенные for в list comprehension?",
    "options": [
      "слева направо — как у обычных вложенных for",
      "справа налево",
      "параллельно без порядка",
      "сначала все if, потом for"
    ],
    "answer": 0,
    "explain": "`[x for a in A for b in B]` читается как for a in A: for b in B. Порядок как в императивном коде, не «наоборот».",
    "kind": "single",
    "id": "m78",
    "fixed": true
  },
  {
    "q": "Что вернёт [i for i in range(5) if i%2==0]?",
    "options": [
      "[0, 2, 4]",
      "[1, 3]",
      "[0,1,2,3,4]",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — [0, 2, 4]. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m106",
    "fixed": true
  }
);
