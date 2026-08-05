// @meta topic=generators group=Генераторы и итераторы
// middle · 2 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что выведет код?",
    "options": [
      "[1]",
      "[1, 0]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Return в генераторе становится StopIteration.value; list() его не включает — только yield:.",
    "kind": "single",
    "code": "def g():\n    yield 1\n    return 0\nprint(list(g()))",
    "id": "m134",
    "fixed": true
  },
  {
    "q": "Что делает yield from subgen?",
    "options": [
      "делегирует итерацию (и send/throw) подгенератору",
      "только копирует list(subgen)",
      "создаёт поток",
      "эквивалент return subgen"
    ],
    "answer": 0,
    "explain": "yield from прозрачно прокидывает протокол генератора в subgen и пробрасывает StopIteration.value.",
    "kind": "single",
    "id": "m476",
    "fixed": true
  }
);
