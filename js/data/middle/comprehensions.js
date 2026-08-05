// @meta topic=comprehensions group=Генераторы и итераторы
// middle · 4 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Чем простой list comprehension часто удобнее map+lambda?",
    "options": [
      "обычно читаемее для простых преобразований",
      "всегда быстрее чистого C без исключений",
      "не создаёт list (ленивый)",
      "запрещён PEP 8"
    ],
    "answer": 0,
    "explain": "Listcomp явно показывает цикл и условие. map+lambda часто хуже читается; listcomp всё равно строит список (не ленивый genexp).",
    "kind": "single",
    "id": "m148",
    "fixed": true
  },
  {
    "q": "Есть ли у list comprehension своя область видимости?",
    "options": [
      "да, с Python 3 переменные comprehension не утекают наружу",
      "нет, как было в 2.7",
      "только у async for",
      "только у dict comprehension"
    ],
    "answer": 0,
    "explain": "В Py3 `[i for i in ...]`: i не остаётся снаружи. В 2.7 listcomp утекал — частая ловушка миграции.",
    "kind": "single",
    "id": "m174",
    "fixed": true
  },
  {
    "q": "Какова длина [(x, y) for x in range(2) for y in range(2)]?",
    "options": [
      "4",
      "2",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Два по два: (0,0),(0,1),(1,0),(1,1) — четыре пары.",
    "kind": "single",
    "id": "m213",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "нет (Py3)",
      "да как в 2.7",
      "ошибка",
      "только в dictcomp"
    ],
    "answer": 0,
    "explain": "В Python 3 переменная comprehension не протекает во внешнюю область.",
    "kind": "single",
    "code": "[i for i in range(3)]\n# i ?",
    "id": "m511",
    "fixed": true
  }
);
