// @meta topic=генераторы group=Генераторы и итераторы
// middle · 25 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что такое throw(exc) в генератор?",
    "options": [
      "возбуждает exc в точке yield",
      "игнорирует",
      "только закрывает",
      "в caller сразу без gen"
    ],
    "answer": 0,
    "explain": "Протокол генератора — Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "id": "m18",
    "fixed": true
  },
  {
    "q": "Что верно про yield в функции делает её?",
    "options": [
      "генератором",
      "корутиной всегда",
      "классом",
      "итератором списка"
    ],
    "answer": 0,
    "explain": "Generator function — Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "id": "m33",
    "fixed": true
  },
  {
    "q": "Что вернёт list(x for x in range(3))?",
    "options": [
      "[0,1,2]",
      "generator object print",
      "tuple",
      "ошибка"
    ],
    "answer": 0,
    "explain": "List поглощает genexp — Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "id": "m48",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "10 20",
      "[10, 20, 30]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Два next() забирают первые элементы. Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "code": "g = (x for x in [10, 20, 30])\nprint(next(g), next(g))",
    "id": "m63",
    "fixed": true
  },
  {
    "q": "Что происходит при gen.close()?",
    "options": [
      "внутрь генератора бросается GeneratorExit и он завершается",
      "только обычный StopIteration без GeneratorExit",
      "всегда KeyboardInterrupt",
      "генератор перезапускается с первого yield"
    ],
    "answer": 0,
    "explain": "close() шлёт GeneratorExit. Генератор должен завершиться; глотать GeneratorExit и продолжать yield — ошибка.",
    "kind": "single",
    "id": "m120",
    "fixed": true
  },
  {
    "q": "Что создаёт выражение (x for x in range(3))?",
    "options": [
      "generator expression — ленивый итератор",
      "сразу список [0, 1, 2]",
      "кортеж (0, 1, 2)",
      "set {0, 1, 2}"
    ],
    "answer": 0,
    "explain": "Круглые скобки с for — generator expression, не tuple. Значения считаются по мере next(). Для кортежа нужен tuple(...), для списка — [...].",
    "kind": "single",
    "id": "m187",
    "fixed": true
  },
  {
    "q": "Куда попадает значение `return x` внутри генератора (3.3+)?",
    "options": [
      "в StopIteration.value (его забирает yield from)",
      "это SyntaxError",
      "сразу return в вызывающий кадр как у обычной функции",
      "значение всегда игнорируется"
    ],
    "answer": 0,
    "explain": "return в генераторе завершает его с StopIteration.value. yield from пробрасывает это значение наружу.",
    "kind": "single",
    "id": "m200",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "a b",
      "['a', 'b']",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Два next() забирают первые элементы. Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "code": "g = (x for x in ['a', 'b'])\nprint(next(g), next(g))",
    "id": "m226",
    "fixed": true
  },
  {
    "q": "Что будет при next(gen) после исчерпания генератора?",
    "options": [
      "исключение StopIteration",
      "None без исключения",
      "перезапуск генератора с начала",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Исчерпанный генератор при next() бросает StopIteration. for это глотает сам; вручную next() — лови или используй default: next(gen, sentinel).",
    "kind": "single",
    "id": "m265",
    "fixed": true
  },
  {
    "q": "Что такое Генератор — одноразовый?",
    "options": [
      "да, после исчерпания пуст",
      "нет, рестарт сам",
      "как list",
      "кэшируется"
    ],
    "answer": 0,
    "explain": "Нужен новый вызов функции — Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "id": "m278",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "0 1",
      "[0, 1]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Два next() забирают первые элементы. Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "code": "g = (x for x in [0, 1])\nprint(next(g), next(g))",
    "id": "m304",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[0, 1]",
      "[0, 1, 4]",
      "0 1",
      "TypeError"
    ],
    "answer": 0,
    "explain": "Generator expression x*x for x in range(2) → 0, 1. list(...) материализует в [0, 1].",
    "kind": "single",
    "code": "print(list(x * x for x in range(2)))",
    "id": "m317",
    "fixed": true
  },
  {
    "q": "Что такое Генератор хранит?",
    "options": [
      "состояние между next",
      "весь результат в RAM",
      "только list",
      "копию args"
    ],
    "answer": 0,
    "explain": "Ленивость и мало памяти — Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "id": "m330",
    "fixed": true
  },
  {
    "q": "Что делает next(gen) на исчерпанном генераторе?",
    "options": [
      "бросает StopIteration",
      "возвращает None без исключения",
      "перезапускает генератор",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Исчерпанный gen при next → StopIteration. for глотает его сам; next(gen, default) безопаснее.",
    "kind": "single",
    "id": "m343",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "1",
      "None",
      "ошибка",
      "x"
    ],
    "answer": 0,
    "explain": "Первый next(gen) выполняет до yield 1 и отдаёт 1. (Дальше send передаст значение в x.)",
    "kind": "single",
    "code": "def g():\n    x = yield 1\n    yield x\ngen = g()\nprint(next(gen))",
    "id": "m356",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "1 2",
      "[1, 2]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Два next() забирают первые элементы. Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "code": "g = (x for x in [1, 2])\nprint(next(g), next(g))",
    "id": "m369",
    "fixed": true
  },
  {
    "q": "Как передать значение внутрь генератора через yield-выражение?",
    "options": [
      "методом gen.send(value)",
      "только через next(gen)",
      "только через gen.throw",
      "только через gen.close"
    ],
    "answer": 0,
    "explain": "`x = yield` получает то, что передали `gen.send(x)`. `next` шлёт None, `throw` кидает исключение внутрь, `close` завершает генератор.",
    "kind": "single",
    "id": "m382",
    "fixed": true
  },
  {
    "q": "Что будет после исчерпания генератора при next()?",
    "options": [
      "StopIteration",
      "None без исключения",
      "перезапуск с начала",
      "MemoryError"
    ],
    "answer": 0,
    "explain": "Исчерпанный генератор поднимает StopIteration. for ловит его сам.",
    "kind": "single",
    "code": "g = (x for x in range(1))\nnext(g)\nnext(g)",
    "id": "m417",
    "fixed": true
  },
  {
    "q": "Что вернёт gen.send(x) до первого yield?",
    "options": [
      "нужно сначала next()/send(None)",
      "сразу x",
      "ошибка",
      "ошибка всегда"
    ],
    "answer": 0,
    "explain": "Генератор должен дойти до yield. Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "id": "m428",
    "fixed": true
  },
  {
    "q": "Что означает: gen = (x for x in range(3)); list(gen); list(gen) второй раз?",
    "options": [
      "[]",
      "[0,1,2]",
      "ошибка",
      "[0,1,2] снова"
    ],
    "answer": 0,
    "explain": "Генератор одноразовый — после exhaust пусто. Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "id": "m439",
    "fixed": true
  },
  {
    "q": "Выбери все верные про генераторы?",
    "options": [
      "yield приостанавливает функцию и возвращает значение",
      "генератор одноразовый: исчерпан, а затем StopIteration",
      "return в генераторе задаёт value StopIteration",
      "list(gen) всегда безопасен для бесконечного генератора"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explain": "Бесконечный gen + list(), а затем зависание/OOM. Используй islice/явный break. Верными здесь будут пункты: «yield приостанавливает функцию и возвращает значение»; «генератор одноразовый: исчерпан, а затем StopIteration»; «return в генераторе задаёт value StopIteration».",
    "kind": "multi",
    "tags": [
      "generators"
    ],
    "difficulty": "middle",
    "id": "m459",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[0, 1, 4, 9]",
      "[0, 1, 2, 3]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Generator expression материализуется через list. Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "code": "print(list(x * x for x in range(4)))",
    "id": "m468",
    "fixed": true
  },
  {
    "q": "Что такое yield from делегирует?",
    "options": [
      "итерацию/yield во вложенный итератор/генератор",
      "только return",
      "в другой процесс",
      "в C API"
    ],
    "answer": 0,
    "explain": "Также пробрасывает send/throw. Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "id": "m483",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "0\n1\n2",
      "[0, 1, 2]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Генератор по next — Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "code": "def g():\n    yield 0\n    yield 1\n    yield 2\nfor x in g():\n    print(x)",
    "id": "m490",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[0, 1, 4]",
      "[0, 1, 2]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Generator expression материализуется через list. Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "code": "print(list(x * x for x in range(3)))",
    "id": "m497",
    "fixed": true
  }
);
