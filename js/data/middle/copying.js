// @meta topic=копирование group=Stdlib и производительность
// middle · 2 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что делает copy.copy?",
    "options": [
      "shallow copy — новая оболочка, общие вложения",
      "глубокую копию всего графа",
      "перемещение объекта",
      "сериализацию в JSON"
    ],
    "answer": 0,
    "explain": "Для полного графа — copy.deepcopy. У list есть и lst.copy().",
    "kind": "single",
    "id": "m500",
    "fixed": true
  },
  {
    "q": "Когда нужен copy.deepcopy?",
    "options": [
      "когда есть вложенные изменяемые структуры и нужна полная независимость",
      "всегда вместо присваивания a=b",
      "только для int",
      "никогда — shallow всегда достаточно"
    ],
    "answer": 0,
    "explain": "shallow копирует верхний контейнер; вложенный list останется общим. deepcopy — весь граф (с memo на циклы).",
    "kind": "single",
    "id": "m579",
    "fixed": true
  }
);
