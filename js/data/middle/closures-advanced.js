// @meta topic=замыкания group=Декораторы и замыкания
// middle · 14 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что выведет код?",
    "options": [
      "[0, 1, 2, 3]",
      "[3, 3, 3, 3]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Default i=i фиксирует значение на каждой итерации → [0,1,2,3].",
    "kind": "single",
    "code": "fs = [lambda i=i: i for i in range(4)]\nprint([f() for f in fs])",
    "id": "m2",
    "fixed": true
  },
  {
    "q": "Как починить late binding у lambda в цикле for i in ...?",
    "options": [
      "зафиксировать значение default-аргументом: lambda i=i: ...",
      "только объявить i как global",
      "обязательно завернуть всё в list() заранее",
      "переименовать lambda в def без других изменений — само починится"
    ],
    "answer": 0,
    "explain": "Замыкание видит переменную i, а не значение на итерации. Default `i=i` вычисляется в момент создания функции и «замораживает» число.",
    "kind": "single",
    "id": "m91",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "10",
      "0",
      "UnboundLocalError",
      "NameError"
    ],
    "answer": 0,
    "explain": "nonlocal n позволяет inc увеличить enclosing n с 0 до 10; make() возвращает это значение.",
    "kind": "single",
    "code": "def make():\n    n = 0\n    def inc():\n        nonlocal n\n        n += 10\n        return n\n    return inc\nprint(make()())",
    "id": "m119",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[2, 2, 2]",
      "[0, 1, 2]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "lambda: i без default ловит i по имени; после цикла все дают последнее i.",
    "kind": "single",
    "code": "fs = [lambda: i for i in range(3)]\nprint([f() for f in fs])",
    "id": "m133",
    "fixed": true
  },
  {
    "q": "Что выведут все вызовы?",
    "options": [
      "2 2 2",
      "0 1 2",
      "ошибка",
      "None None None"
    ],
    "answer": 0,
    "explain": "Классический late binding в цикле: все замыкания видят финальное i=2.",
    "kind": "single",
    "code": "funcs = []\nfor i in range(3):\n    funcs.append(lambda: i)\nprint(funcs[0](), funcs[1](), funcs[2]())",
    "id": "m160",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[3, 3, 3, 3]",
      "[0, 1, 2, 3]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "То же late binding: range(4) → последнее i=3 у всех lambda.",
    "kind": "single",
    "code": "fs = [lambda: i for i in range(4)]\nprint([f() for f in fs])",
    "id": "m225",
    "fixed": true
  },
  {
    "q": "Что хранит cell замыкания?",
    "options": [
      "cell_contents — текущее значение enclosing-переменной",
      "байткод всей внешней функции",
      "только имя переменной без значения",
      "ссылку на GIL"
    ],
    "answer": 0,
    "explain": "В __closure__ лежат cell; у каждой есть cell_contents. Это живая привязка к переменной enclosing scope.",
    "kind": "single",
    "id": "m251",
    "fixed": true
  },
  {
    "q": "Что лежит в function.__closure__?",
    "options": [
      "кортеж cell с захваченными enclosing-переменными или None",
      "всегда пустой list",
      "байткод функции",
      "глобальный dict модуля"
    ],
    "answer": 0,
    "explain": "Если свободных переменных нет — __closure__ is None. Иначе tuple cell'ов с cell_contents.",
    "kind": "single",
    "id": "m290",
    "fixed": true
  },
  {
    "q": "Что вернут все funcs[i]() при late binding в цикле без default?",
    "options": [
      "последнее значение i (часто одинаковое у всех)",
      "разные 0,1,2 без фиксации",
      "всегда TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Замыкания захватывают переменную i, не значение на итерации. После цикла i == последнее; чинится lambda i=i.",
    "kind": "single",
    "code": "funcs = []\nfor i in range(3):\n    funcs.append(lambda: i)\n# funcs[0]()",
    "id": "m303",
    "fixed": true
  },
  {
    "q": "Как зафиксировать значение i в lambda внутри for-цикла?",
    "options": [
      "default-аргументом: lambda i=i: ...",
      "только через global i",
      "никак — язык запрещает",
      "переименовать lambda в list"
    ],
    "answer": 0,
    "explain": "Default вычисляется в момент создания функции и захватывает текущее i.",
    "kind": "single",
    "id": "m316",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[4, 4, 4, 4, 4]",
      "[0, 1, 2, 3, 4]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Late binding: после range(5) все lambda возвращают 4.",
    "kind": "single",
    "code": "fs = [lambda: i for i in range(5)]\nprint([f() for f in fs])",
    "id": "m329",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[0, 1, 2, 3, 4]",
      "[4, 4, 4, 4, 4]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "lambda i=i сохраняет текущее i → независимые значения 0..4.",
    "kind": "single",
    "code": "fs = [lambda i=i: i for i in range(5)]\nprint([f() for f in fs])",
    "id": "m342",
    "fixed": true
  },
  {
    "q": "Что выведут все вызовы?",
    "options": [
      "0 1 2",
      "2 2 2",
      "ошибка",
      "1 1 1"
    ],
    "answer": 0,
    "explain": "lambda i=i (или аналог в коде) фиксирует значение на итерации → 0 1 2.",
    "kind": "single",
    "code": "funcs = []\nfor i in range(3):\n    funcs.append(lambda i=i: i)\nprint(funcs[0](), funcs[1](), funcs[2]())",
    "id": "m368",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[0, 1, 2]",
      "[2, 2, 2]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Default-аргумент фиксирует i → [0,1,2], не late binding.",
    "kind": "single",
    "code": "fs = [lambda i=i: i for i in range(3)]\nprint([f() for f in fs])",
    "id": "m381",
    "fixed": true
  }
);
