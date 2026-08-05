// @meta topic=Zen group=Архитектура и дизайн
// middle · 4 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "К чему близок принцип «There should be one–and preferably only one–obvious way to do it»?",
    "options": [
      "к ясному стилю и духу KISS: один очевидный путь",
      "к тому, чтобы иметь 10 равноправных способов сделать одно и то же",
      "к отказу от стандартной библиотеки",
      "к обязательному ООП в каждом скрипте"
    ],
    "answer": 0,
    "explain": "Из Zen of Python: предпочитай один очевидный способ, а не зоопарк равноценных API. Это про ясность, не про запрет stdlib.",
    "kind": "single",
    "id": "m88",
    "fixed": true
  },
  {
    "q": "Что означает «Explicit is better than implicit»?",
    "options": [
      "явный код лучше скрытой магии",
      "нужно больше глобальных переменных",
      "нужно меньше аннотаций типов",
      "разрешены только list comprehensions"
    ],
    "answer": 0,
    "explain": "Из Zen: лучше писать явно (аргументы, зависимости, поведение), чем полагаться на неочевидные побочные эффекты и «магию».",
    "kind": "single",
    "id": "m102",
    "fixed": true
  },
  {
    "q": "Как посмотреть Zen of Python в интерпретаторе?",
    "options": [
      "import this",
      "python -m zen",
      "help(zen)",
      "print(__zen__)"
    ],
    "answer": 0,
    "explain": "Пасхалка: `import this` печатает Zen. Отдельного модуля zen в stdlib нет.",
    "kind": "single",
    "id": "m209",
    "fixed": true
  },
  {
    "q": "О чём «Readability counts» в Zen of Python?",
    "options": [
      "код читают чаще, чем пишут — читаемость важна",
      "нужно писать максимально коротко любой ценой",
      "запрет комментариев",
      "только про скорость CPU"
    ],
    "answer": 0,
    "explain": "Один из афоризмов import this: ясность важнее «гольф-кода».",
    "kind": "single",
    "id": "m473",
    "fixed": true
  }
);
