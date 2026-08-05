// @meta topic=closures group=Декораторы и замыкания
// middle · 2 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что такое замыкание (closure) в Python?",
    "options": [
      "функция, которая помнит переменные из enclosing-области, где её создали",
      "синоним декоратора @wraps",
      "обязательный атрибут любого класса",
      "способ отключить LEGB"
    ],
    "answer": 0,
    "explain": "Вложенная функция захватывает свободные переменные внешней области (видно в __closure__). Декоратор часто использует замыкание, но сам по себе им не является.",
    "kind": "single",
    "id": "m17",
    "fixed": true
  },
  {
    "q": "Зачем нужен nonlocal x?",
    "options": [
      "чтобы присваивать переменной из enclosing (не global) области",
      "чтобы читать builtin open",
      "чтобы создать threading.local",
      "чтобы удалить имя x из builtins"
    ],
    "answer": 0,
    "explain": "Без nonlocal присваивание создаёт локальную переменную. nonlocal помечает: пишем во внешнюю функцию, не в global.",
    "kind": "single",
    "id": "m105",
    "fixed": true
  }
);
