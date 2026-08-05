// @meta topic=логические операции group=Типы и операторы
// junior · 1 cards
(window.QUESTIONS_JUNIOR = window.QUESTIONS_JUNIOR || []).push(
  {
    "q": "Что вернёт выражение `bool([0])`?",
    "code": "print(bool([0]))",
    "options": [
      "True",
      "False",
      "ValueError",
      "None"
    ],
    "answer": 0,
    "explain": "Любой непустой контейнер в Python, включая список `[0]`, при преобразовании в `bool` даёт `True`. Ложным (`False`) становится только пустой список `[]`, а не список с «ложными» элементами.",
    "kind": "single",
    "id": "j317",
    "fixed": true
  }
);
