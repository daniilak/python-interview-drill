// @meta topic=comprehensions group=Синтаксис и структуры данных
// junior · 1 cards
(window.QUESTIONS_JUNIOR = window.QUESTIONS_JUNIOR || []).push(
  {
    "q": "Что вернёт выражение `{x for x in ['a', 'a', 'b']}`?",
    "options": [
      "{'a', 'b'}",
      "['a', 'b']",
      "['a', 'a', 'b']",
      "TypeError"
    ],
    "answer": 0,
    "explain": "Выражение `{x for x in ...}` — это синтаксис для создания множества (set comprehension). Множества хранят только уникальные элементы, поэтому дубликат 'a' будет отброшен. Порядок элементов в множестве не гарантируется.",
    "kind": "single",
    "code": "print({x for x in ['a', 'a', 'b']})",
    "id": "j129",
    "fixed": true
  }
);
