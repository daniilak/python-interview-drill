// @meta topic=filter group=Встроенные функции
// junior · 6 cards
(window.QUESTIONS_JUNIOR = window.QUESTIONS_JUNIOR || []).push(
  {
    "q": "Что вернёт `list(filter(None, [1, 2, 3]))`?",
    "options": [
      "[1, 2, 3]",
      "[]",
      "[None, None, None]",
      "TypeError"
    ],
    "answer": 0,
    "explain": "Если в `filter` первым аргументом передан `None`, он отфильтрует все «ложные» значения. Все числа в списке `[1, 2, 3]` являются «истинными» в булевом контексте, поэтому `filter` оставит их все.",
    "kind": "single",
    "code": "print(list(filter(None, [1, 2, 3])))",
    "id": "j297",
    "fixed": true
  },
  {
    "q": "Какие элементы итерируемого объекта отбирает `filter(func, iterable)`?",
    "options": [
      "Те, для которых func(item) истинно",
      "Те, для которых func(item) ложно",
      "Результаты применения func к каждому элементу",
      "Только уникальные элементы"
    ],
    "answer": 0,
    "explain": "Встроенная функция `filter` конструирует итератор из тех элементов `iterable`, для которых `func` возвращает истину. Её часто путают с `map`, которая применяет функцию к каждому элементу, а не фильтрует их.",
    "kind": "single",
    "id": "j351",
    "fixed": true
  },
  {
    "q": "Что вернёт `list(filter(None, [0, 1, 2]))`?",
    "options": [
      "[1, 2]",
      "[0, 1, 2]",
      "TypeError",
      "[]"
    ],
    "answer": 0,
    "explain": "Если в `filter` первым аргументом передать `None`, он будет работать как функция `bool`, отсеивая все «ложные» (falsy) значения. В Python число 0 является ложным, а ненулевые целые числа — истинными, поэтому 0 будет отфильтрован.",
    "kind": "single",
    "code": "print(list(filter(None, [0, 1, 2])))",
    "id": "j360",
    "fixed": true
  },
  {
    "q": "Что вернёт `list(filter(None, [0, 1, '', 2]))`?",
    "options": [
      "[1, 2]",
      "[0, 1, '', 2]",
      "[0, '']",
      "[1, '', 2]"
    ],
    "answer": 0,
    "explain": "Функция `filter` с первым аргументом `None` отсеивает все «ложные» значения. В Python число 0 и пустая строка '' считаются ложными, поэтому в итоговый список попадают только 1 и 2.",
    "kind": "single",
    "id": "j628",
    "fixed": true
  },
  {
    "q": "Что вернёт list(filter(None, [-1, 2]))?",
    "options": [
      "[-1, 2]",
      "[2]",
      "[-1]",
      "[]"
    ],
    "answer": 0,
    "explain": "Если в `filter` первым аргументом передан `None`, он отсеивает все «ложные» (falsy) значения. В Python любые целые числа, кроме 0, считаются «истинными» (truthy), поэтому ни -1, ни 2 не будут отфильтрованы.",
    "kind": "single",
    "code": "print(list(filter(None, [-1, 2])))",
    "id": "j981",
    "fixed": true
  },
  {
    "q": "Что выведет print(list(filter(None, [5, 10])))?",
    "options": [
      "[5, 10]",
      "[5]",
      "[10]",
      "[]"
    ],
    "answer": 0,
    "explain": "Оба числа truthy — filter(None, [5, 10]) ничего не отбрасывает → [5, 10].",
    "kind": "single",
    "code": "print(list(filter(None, [5, 10])))",
    "id": "j1080",
    "fixed": true
  }
);
