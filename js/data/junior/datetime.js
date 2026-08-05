// @meta topic=время group=Инструменты и стиль
// junior · 2 cards
(window.QUESTIONS_JUNIOR = window.QUESTIONS_JUNIOR || []).push(
  {
    "q": "Что возвращает `datetime.datetime.now()`?",
    "options": [
      "Объект `datetime` с текущими локальными датой и временем",
      "Объект `date` только с текущей датой",
      "Число `float` (Unix timestamp)",
      "Объект `datetime` с текущим временем в UTC"
    ],
    "answer": 0,
    "explain": "Метод `datetime.now()` возвращает объект `datetime` с текущими локальными датой и временем. Ловушка в том, что по умолчанию этот объект является «наивным» (naive), то есть не содержит информации о часовом поясе.",
    "kind": "single",
    "id": "j13",
    "fixed": true
  },
  {
    "q": "Какой стандартный модуль Python предназначен для работы с датой и временем?",
    "options": [
      "datetime",
      "time",
      "date",
      "calendar"
    ],
    "answer": 0,
    "explain": "Модуль `datetime` — главный инструмент для работы с датой и временем в стандартной библиотеке. Его не следует путать с `time` (более низкоуровневый) или `calendar` (для форматирования календарей), которые решают смежные задачи.",
    "kind": "single",
    "id": "j429",
    "fixed": true
  }
);
