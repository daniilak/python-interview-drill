// @meta topic=walrus group=Typing и dataclasses
// middle · 9 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что выведет код?",
    "options": [
      "5",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Морж := присваивает n = len('hello') == 5 и условие > 3 истинно → печатается 5.",
    "kind": "single",
    "code": "if (n := len('hello')) > 3:\n    print(n)",
    "id": "m354",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "3 True",
      "True",
      "3",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "(n := 3) присваивает n и даёт 3; затем n == 3 → True. print печатает оба значения: 3 True.",
    "kind": "single",
    "code": "print((n := 3), n == 3)",
    "id": "m541",
    "fixed": true
  },
  {
    "q": "Зачем в условии пишут (n := len(a)) > 0?",
    "options": [
      "присвоить и сразу использовать значение в выражении (walrus)",
      "это синтаксическая ошибка",
      "только для async",
      "создаёт отдельный поток"
    ],
    "answer": 0,
    "explain": ":= позволяет не звать len дважды. Скобки часто нужны из‑за приоритета.",
    "kind": "single",
    "id": "m553",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "1",
      "0",
      "True",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Морж := присваивает и сразу отдаёт значение в выражении → 1.",
    "kind": "single",
    "code": "if (x := 1):\n    print(x)\nelse:\n    print('no')",
    "id": "m565",
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
    "explain": "Морж := присваивает и сразу отдаёт значение в выражении → 2.",
    "kind": "single",
    "code": "if (x := 2):\n    print(x)\nelse:\n    print('no')",
    "id": "m606",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "10",
      "0",
      "1",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Морж := присваивает и сразу отдаёт значение в выражении → 10.",
    "kind": "single",
    "code": "if (x := 10):\n    print(x)\nelse:\n    print('no')",
    "id": "m716",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "5",
      "0",
      "True",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Морж := присваивает и сразу отдаёт значение в выражении → 5.",
    "kind": "single",
    "code": "if (x := 5):\n    print(x)\nelse:\n    print('no')",
    "id": "m800",
    "fixed": true
  },
  {
    "q": "Где := (walrus) ограничен?",
    "options": [
      "в ряде позиций синтаксиса (например, нюансы с лямбдами/выражениями без скобок)",
      "запрещён полностью в 3.11+",
      "только в async def",
      "только в class body всегда ок без ограничений"
    ],
    "answer": 0,
    "explain": "Не везде, где =. Часто нужны скобки. Цепочки := := запрещены.",
    "kind": "single",
    "id": "m812",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "no",
      "yes",
      "5",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Морж := присваивает и сразу отдаёт значение в выражении → no.",
    "kind": "single",
    "code": "if (x := 0):\n    print(x)\nelse:\n    print('no')",
    "id": "m818",
    "fixed": true
  }
);
