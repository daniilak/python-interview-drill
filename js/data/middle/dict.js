// @meta topic=dict group=Collections и itertools
// middle · 3 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "В чём опасность dict.fromkeys(['a','b'], [])?",
    "options": [
      "один и тот же list шарится всеми ключами",
      "ключи удаляются",
      "всегда TypeError",
      "создаётся deepcopy автоматически"
    ],
    "answer": 0,
    "explain": "Мутабельный default один объект. d['a'].append(1) видно в d['b']. Нужна фабрика на ключ.",
    "kind": "single",
    "code": "d = dict.fromkeys(['a', 'b'], [])\nd['a'].append(1)\nprint(d['b'])",
    "id": "m558",
    "fixed": true
  },
  {
    "q": "Что вернёт merge |= для dict (3.9)?",
    "options": [
      "in-place update",
      "новый dict only",
      "set only",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — in-place update. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m667",
    "fixed": true
  },
  {
    "q": "Опасность dict.fromkeys(['a','b'], [])?",
    "options": [
      "один и тот же list на все ключи",
      "ключи не создаются",
      "всегда deepcopy",
      "TypeError"
    ],
    "answer": 0,
    "explain": "Мутабельный value шарится. Нужны отдельные list на ключ.",
    "kind": "single",
    "id": "m766",
    "fixed": true
  }
);
