// @meta topic=listcomp group=Встроенные функции
// junior · 20 cards
(window.QUESTIONS_JUNIOR = window.QUESTIONS_JUNIOR || []).push(
  {
    "q": "Что выведет `print([x * x for x in range(3)])`?",
    "options": [
      "[0, 1, 4]",
      "[0, 1, 2]",
      "[1, 4, 9]",
      "[0, 1, 4, 9]"
    ],
    "answer": 0,
    "explain": "List comprehension создаёт список, применяя выражение `x * x` к каждому элементу из `range(3)`. Итератор `range(3)` даёт числа 0, 1 и 2, поэтому в консоль будет выведен список их квадратов.",
    "kind": "single",
    "code": "print([x * x for x in range(3)])",
    "id": "j43",
    "fixed": true
  },
  {
    "q": "Что вернёт выражение `{x for x in [1, 1, 2]}`?",
    "options": [
      "{1, 2}",
      "[1, 1, 2]",
      "[1, 2]",
      "{1: None, 2: None}"
    ],
    "answer": 0,
    "explain": "Выражение `{x for x in ...}` — это синтаксис для создания множества (set comprehension). Множества хранят только уникальные элементы, поэтому дубликат `1` из исходного списка отбрасывается.",
    "kind": "single",
    "id": "j481",
    "fixed": true
  },
  {
    "q": "Какой список создаст выражение `[x for x in range(4) if x % 2 == 0]`?",
    "options": [
      "[0, 2]",
      "[0, 1, 2, 3]",
      "[1, 3]",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "List comprehension создаёт список, перебирая `range(4)` (числа 0, 1, 2, 3). Условие `if x % 2 == 0` отбирает только чётные числа. Ловушка — проигнорировать фильтр `if` или перепутать условие отбора на нечётные числа.",
    "kind": "single",
    "code": "print([x for x in range(4) if x % 2 == 0])",
    "id": "j495",
    "fixed": true
  },
  {
    "q": "Какова длина списка, созданного `[(x, y) for x in range(2) for y in range(2)]`?",
    "options": [
      "4",
      "2",
      "3",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Вложенные циклы в list comprehension выполняются в том же порядке, что и обычные: внешний цикл `range(2)` выполнится 2 раза, и для каждого из них внутренний `range(2)` также выполнится 2 раза, что в итоге даст 2 * 2 = 4 элемента.",
    "kind": "single",
    "id": "j633",
    "fixed": true
  },
  {
    "q": "Что вернёт генератор множества `{x for x in [1, 1, 2]}`?",
    "options": [
      "{1, 2}",
      "[1, 1, 2]",
      "[1, 2]",
      "TypeError"
    ],
    "answer": 0,
    "explain": "Синтаксис `{...}` с циклом `for` создаёт множество (set), а не словарь. Множества по определению содержат только уникальные элементы, поэтому дубликаты из исходной последовательности `[1, 1, 2]` игнорируются.",
    "kind": "single",
    "code": "print({x for x in [1, 1, 2]})",
    "id": "j723",
    "fixed": true
  },
  {
    "q": "Что выведет `print([i for i in range(5) if i % 2 == 0])`?",
    "options": [
      "[0, 2, 4]",
      "[1, 3]",
      "[0, 1, 2, 3, 4]",
      "TypeError"
    ],
    "answer": 0,
    "explain": "List comprehension создаёт список, итерируясь по `range(5)` (числа от 0 до 4). Условие `if i % 2 == 0` отбирает только чётные числа (0, 2, 4), которые и выводятся на печать.",
    "kind": "single",
    "code": "print([i for i in range(5) if i % 2 == 0])",
    "id": "j748",
    "fixed": true
  },
  {
    "q": "Какой список создаст выражение `[x * x for x in range(6)]`?",
    "options": [
      "[0, 1, 4, 9, 16, 25]",
      "[0, 1, 2, 3, 4, 5]",
      "[0, 1, 4, 9, 16]",
      "[1, 4, 9, 16, 25]"
    ],
    "answer": 0,
    "explain": "List comprehension создаёт новый список, применяя выражение `x * x` к каждому элементу из `range(6)`. Функция `range(6)` генерирует числа от 0 до 5 включительно, поэтому в итоговый список попадут их квадраты.",
    "kind": "single",
    "code": "print([x * x for x in range(6)])",
    "id": "j758",
    "fixed": true
  },
  {
    "q": "Какой список создаст выражение `[x for x in range(3) if x % 2 == 0]`?",
    "options": [
      "[0, 2]",
      "[0, 1, 2]",
      "[1]",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "List comprehension создаёт новый список, отбирая элементы из `range(3)`. Условие `x % 2 == 0` истинно для 0 и 2, поэтому в итоговый список попадут только они.",
    "kind": "single",
    "code": "print([x for x in range(3) if x % 2 == 0])",
    "id": "j832",
    "fixed": true
  },
  {
    "q": "Какой список создаст list comprehension `[x for x in range(4) if x % 2]`?",
    "options": [
      "[1, 3]",
      "[0, 1, 2, 3]",
      "[0, 2]",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "List comprehension отфильтрует числа из `range(4)`. Условие `if x % 2` истинно для нечётных чисел, так как остаток от деления `1 % 2` и `3 % 2` равен `1` (truthy), а для чётных — `0` (falsy).",
    "kind": "single",
    "code": "print([x for x in range(4) if x % 2])",
    "id": "j848",
    "fixed": true
  },
  {
    "q": "Что является результатом выполнения list comprehension?",
    "options": [
      "новый список",
      "генератор",
      "кортеж",
      "None"
    ],
    "answer": 0,
    "explain": "List comprehension, вида `[x for x in iterable]`, всегда создаёт и возвращает новый объект списка. Его легко спутать с генераторным выражением `(x for x in iterable)`, которое создаёт объект-генератор.",
    "kind": "single",
    "id": "j876",
    "fixed": true
  },
  {
    "q": "Что напечатает код `print([x * x for x in range(4)])`?",
    "options": [
      "[0, 1, 4, 9]",
      "[0, 1, 2, 3]",
      "[1, 4, 9, 16]",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "List comprehension создаёт новый список, применяя выражение к каждому элементу последовательности. Здесь `range(4)` даёт числа 0, 1, 2, 3, а `x * x` возводит их в квадрат, формируя список `[0, 1, 4, 9]`, который и выводится на печать.",
    "kind": "single",
    "code": "print([x * x for x in range(4)])",
    "id": "j892",
    "fixed": true
  },
  {
    "q": "Чем является выражение `(i for i in range(3))` в отличие от спискового включения `[i for i in range(3)]`?",
    "options": [
      "Генераторным выражением",
      "Кортежем (tuple comprehension)",
      "Списком, как и list comprehension",
      "Вызовет SyntaxError"
    ],
    "answer": 0,
    "explain": "Квадратные скобки `[]` создают список сразу, а круглые `()` — генераторное выражение. Это итератор, который вычисляет элементы по мере необходимости, экономя память. Прямого синтаксиса для «tuple comprehension» не существует; для создания кортежа нужно явно вызвать `tuple()`.",
    "kind": "single",
    "id": "j916",
    "fixed": true
  },
  {
    "q": "Какой список создаст list comprehension `[x for x in range(1, 5) if x % 2 == 0]`?",
    "options": [
      "[2, 4]",
      "[1, 2, 3, 4]",
      "[1, 3]",
      "TypeError"
    ],
    "answer": 0,
    "explain": "List comprehension создаёт список, итерируясь по `range(1, 5)`, что даёт числа 1, 2, 3, 4. Условие `if x % 2 == 0` отфильтровывает только чётные числа (2 и 4). Распространённая ошибка — забыть, что правая граница `range` не включается в диапазон.",
    "kind": "single",
    "code": "print([x for x in range(1, 5) if x % 2 == 0])",
    "id": "j954",
    "fixed": true
  },
  {
    "q": "Что выведет print({x for x in [3, 3, 3]})?",
    "options": [
      "{3}",
      "[3, 3, 3]",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Set comprehension убирает дубликаты: три тройки → {3}.",
    "kind": "single",
    "code": "print({x for x in [3, 3, 3]})",
    "id": "j990",
    "fixed": true
  },
  {
    "q": "Что выведет print([x for x in range(6) if x % 2 == 0])?",
    "options": [
      "[0, 2, 4]",
      "[0, 1, 2, 3, 4, 5]",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "range(6) → 0…5. Чётные: 0, 2, 4 → [0, 2, 4].",
    "kind": "single",
    "code": "print([x for x in range(6) if x % 2 == 0])",
    "id": "j1002",
    "fixed": true
  },
  {
    "q": "Что вернёт [x*2 for x in range(3)]?",
    "options": [
      "[0, 2, 4]",
      "[0, 1, 2]",
      "[2, 4, 6]",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — [0, 2, 4]. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "j1029",
    "fixed": true
  },
  {
    "q": "Что выведет print([x for x in range(5) if x % 2 == 0])?",
    "options": [
      "[0, 2, 4]",
      "[0, 1, 2, 3, 4]",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "range(5) → 0…4. Чётные (x % 2 == 0): 0, 2, 4 → [0, 2, 4].",
    "kind": "single",
    "code": "print([x for x in range(5) if x % 2 == 0])",
    "id": "j1032",
    "fixed": true
  },
  {
    "q": "Что выведет print([x * x for x in range(5)])?",
    "options": [
      "[0, 1, 4, 9, 16]",
      "[0, 1, 2, 3, 4]",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "range(5) → 0…4. [x*x for x in …] → [0, 1, 4, 9, 16].",
    "kind": "single",
    "code": "print([x * x for x in range(5)])",
    "id": "j1071",
    "fixed": true
  },
  {
    "q": "Что выведет print([x * x for x in range(1, 4)])?",
    "options": [
      "[1, 4, 9]",
      "[1, 2, 3]",
      "[0, 1, 4]",
      "TypeError"
    ],
    "answer": 0,
    "explain": "range(1, 4) → 1, 2, 3 (4 не входит). [x*x for x in …] → [1, 4, 9].",
    "kind": "single",
    "code": "print([x * x for x in range(1, 4)])",
    "id": "j1116",
    "fixed": true
  },
  {
    "q": "Что выведет print({x for x in [1, 2, 2, 3]})?",
    "options": [
      "{1, 2, 3}",
      "[1, 2, 2, 3]",
      "TypeError",
      "[1, 2, 3]"
    ],
    "answer": 0,
    "explain": "Set comprehension убирает дубликаты: [1, 2, 2, 3] → {1, 2, 3}.",
    "kind": "single",
    "code": "print({x for x in [1, 2, 2, 3]})",
    "id": "j1131",
    "fixed": true
  }
);
