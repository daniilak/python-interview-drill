// @meta topic=итераторы group=Генераторы и итераторы
// middle · 8 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что выведет код?",
    "options": [
      "1",
      "StopIteration сразу",
      "[1, 2]",
      "TypeError"
    ],
    "answer": 0,
    "explain": "iter([1, 2]) даёт итератор; next(...) забирает первый элемент — 1. StopIteration будет только когда элементы кончатся.",
    "kind": "single",
    "code": "print(next(iter([1, 2])))",
    "id": "m3",
    "fixed": true
  },
  {
    "q": "Как работает iter(callable, sentinel)?",
    "options": [
      "вызывает callable, пока результат не станет равен sentinel",
      "всегда делает ровно один вызов",
      "игнорирует sentinel и крутится бесконечно",
      "работает только с list"
    ],
    "answer": 0,
    "explain": "Двухаргументный iter — классика для `iter(file.readline, '')`: читаем, пока не пустая строка-sentinel.",
    "kind": "single",
    "id": "m92",
    "fixed": true
  },
  {
    "q": "Что вызывает iter(x) у обычного объекта?",
    "options": [
      "x.__iter__()",
      "сразу x.__next__()",
      "обязательно list(x)",
      "x.next() как в Python 2"
    ],
    "answer": 0,
    "explain": "iter запрашивает итератор через __iter__ (или sequence protocol). __next__ зовёт уже у итератора.",
    "kind": "single",
    "id": "m161",
    "fixed": true
  },
  {
    "q": "Что требует collections.abc.Iterable?",
    "options": [
      "метод __iter__ (или sequence protocol)",
      "обязательно __len__",
      "обязательно __call__",
      "наследование от list"
    ],
    "answer": 0,
    "explain": "Iterable — тот, у кого есть __iter__. Iterator дополнительно даёт __next__.",
    "kind": "single",
    "id": "m239",
    "fixed": true
  },
  {
    "q": "Что ожидает iter(obj) у объекта?",
    "options": [
      "__iter__ или протокол последовательности через __getitem__",
      "обязательно только __next__",
      "обязательно __len__",
      "метод close()"
    ],
    "answer": 0,
    "explain": "iter сначала ищет __iter__. Если его нет — пробует sequence protocol (__getitem__ с 0,1,2,…). __next__ — у уже полученного итератора.",
    "kind": "single",
    "id": "m291",
    "fixed": true
  },
  {
    "q": "Верно ли, что у list итератор — отдельный объект?",
    "options": [
      "да — iter(list) создаёт отдельный list_iterator",
      "нет — list сам себе итератор без объекта",
      "только для tuple",
      "только после reverse()"
    ],
    "answer": 0,
    "explain": "У списка нет __next__; iter(lst) возвращает новый list_iterator. Можно иметь несколько независимых итераторов.",
    "kind": "single",
    "id": "m406",
    "fixed": true
  },
  {
    "q": "Что должен иметь итератор?",
    "options": [
      "__iter__ (обычно return self) и __next__",
      "только __len__",
      "только __getitem__",
      "только close()"
    ],
    "answer": 0,
    "explain": "Протокол итератора: __next__ отдаёт следующий или StopIteration; __iter__ возвращает себя.",
    "kind": "single",
    "id": "m449",
    "fixed": true
  },
  {
    "q": "Для чего StopIteration.value?",
    "options": [
      "значение return из генератора/корутины",
      "код ошибки ОС",
      "номер строки",
      "уровень логирования"
    ],
    "answer": 0,
    "explain": "return x в генераторе → StopIteration(value=x). yield from пробрасывает это значение.",
    "kind": "single",
    "id": "m504",
    "fixed": true
  }
);
