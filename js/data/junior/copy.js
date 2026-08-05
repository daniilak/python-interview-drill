// @meta topic=copy group=Списки и кортежи
// junior · 2 cards
(window.QUESTIONS_JUNIOR = window.QUESTIONS_JUNIOR || []).push(
  {
    "q": "Чему будет равно `b` после выполнения кода `a = b = []; a.append(1)`?",
    "options": [
      "[1]",
      "[]",
      "None",
      "TypeError"
    ],
    "answer": 0,
    "explain": "Переменные `a` и `b` ссылаются на один и тот же список. Метод `append` изменяет сам список, поэтому изменения, сделанные через `a`, видны и через `b`.",
    "kind": "single",
    "id": "j274",
    "fixed": true
  },
  {
    "q": "Чему будет равна переменная `b` после выполнения кода?",
    "options": [
      "[]",
      "[1]",
      "None",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Срез `a[:]` создаёт поверхностную копию списка. Последующее добавление элемента в исходный список `a` не влияет на его копию `b`, поэтому `b` остаётся пустым списком.",
    "kind": "single",
    "id": "j701",
    "fixed": true,
    "code": "a = []\nb = a[:]\na.append(1)"
  }
);
