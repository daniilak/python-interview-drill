// @meta topic=math group=Инструменты и стиль
// junior · 3 cards
(window.QUESTIONS_JUNIOR = window.QUESTIONS_JUNIOR || []).push(
  {
    "q": "Что вернёт `math.floor(3.7)`?",
    "options": [
      "3",
      "4",
      "3.0",
      "TypeError"
    ],
    "answer": 0,
    "explain": "Функция `math.floor()` округляет число вниз до ближайшего целого. Не путайте её с `math.ceil()`, которая округлила бы до 4, или `round()`, которая также вернула бы 4.",
    "kind": "single",
    "id": "j79",
    "fixed": true
  },
  {
    "q": "Что вернёт `math.ceil(3.2)`?",
    "options": [
      "4",
      "3",
      "4.0",
      "3.0"
    ],
    "answer": 0,
    "explain": "Функция `math.ceil()` (от англ. ceiling — «потолок») округляет число до ближайшего большего целого и возвращает `int`. Ловушка в том, чтобы не спутать её с `math.floor()` (округляет вниз до 3) или неверно определить тип возвращаемого значения (float).",
    "kind": "single",
    "id": "j309",
    "fixed": true
  },
  {
    "q": "Что вернёт `math.sqrt(9)`?",
    "options": [
      "3.0",
      "3",
      "TypeError",
      "NameError"
    ],
    "answer": 0,
    "explain": "Функция `math.sqrt()` всегда возвращает число с плавающей точкой (float), даже если корень является целым числом. Поэтому результатом будет `3.0`, а не `3`.",
    "kind": "single",
    "id": "j397",
    "fixed": true
  }
);
