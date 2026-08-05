// @meta topic=copy group=Stdlib и производительность
// middle · 15 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "import copy\na = [[1], [2]]\nb = copy.deepcopy(a)\nprint(a[0] is b[0])",
    "id": "m194",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "import copy\na = [[0, 0], [1]]\nb = copy.deepcopy(a)\nprint(a[0] is b[0])",
    "id": "m246",
    "fixed": true
  },
  {
    "q": "Как deepcopy справляется с циклами ссылок?",
    "options": [
      "через memo — словарь уже скопированных id",
      "падает RecursionError всегда",
      "игнорирует циклы и портит данные молча без memo",
      "deepcopy запрещён для циклов"
    ],
    "answer": 0,
    "explain": "copy.deepcopy ведёт memo, чтобы не зациклиться и сохранить структуру графа.",
    "kind": "single",
    "id": "m350",
    "fixed": true
  },
  {
    "q": "Что копирует shallow copy?",
    "options": [
      "контейнер верхнего уровня; вложенные объекты остаются общими",
      "полный глубокий граф всегда",
      "только id() без данных",
      "ничего — это no-op"
    ],
    "answer": 0,
    "explain": "list.copy()/copy.copy — новая оболочка, те же вложения. Для полного графа — deepcopy.",
    "kind": "single",
    "id": "m363",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "import copy\na = [[]]\nb = copy.deepcopy(a)\nprint(a[0] is b[0])",
    "id": "m423",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True (shallow)",
      "False (deep)",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "copy.copy — shallow: вложенный list общий, изменение видно в обоих → True.",
    "kind": "single",
    "code": "import copy\na = [[0, 0], [1]]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "id": "m604",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True (shallow)",
      "False (deep)",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Shallow copy: вложенный dict тот же объект → изменение видно с обеих сторон.",
    "kind": "single",
    "code": "import copy\na = [{'a': 1}]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "id": "m646",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "import copy\na = [[1, 2, 3]]\nb = copy.deepcopy(a)\nprint(a[0] is b[0])",
    "id": "m662",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True (shallow)",
      "False (deep)",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Shallow: внутренний list общий между a и b.",
    "kind": "single",
    "code": "import copy\na = [[1, 2, 3]]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "id": "m738",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True (shallow)",
      "False (deep)",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "copy.copy — поверхностная копия: контейнер новый, вложения общие. Здесь: True (shallow).",
    "kind": "single",
    "code": "import copy\na = [[]]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "id": "m777",
    "fixed": true
  },
  {
    "q": "Чем copy.copy отличается от deepcopy?",
    "options": [
      "shallow: новый верх, вложения общие; deep: полный граф",
      "разницы нет",
      "copy всегда глубже",
      "deepcopy только для int"
    ],
    "answer": 0,
    "explain": "Выбирай deep, когда вложенные mutable должны стать независимыми.",
    "kind": "single",
    "id": "m798",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "import copy\na = [{'a': 1}]\nb = copy.deepcopy(a)\nprint(a[0] is b[0])",
    "id": "m850",
    "fixed": true
  },
  {
    "q": "Для чего определяют __deepcopy__?",
    "options": [
      "кастомная логика глубокого копирования объекта",
      "запрет copy",
      "только shallow",
      "сериализация JSON"
    ],
    "answer": 0,
    "explain": "deepcopy вызывает __deepcopy__(memo), если он есть.",
    "kind": "single",
    "id": "m858",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[1]",
      "[]",
      "[1, 2]",
      "ошибка"
    ],
    "answer": 0,
    "explain": "append добавляет элемент в конец (in-place, возвращает None). Список становится [1].",
    "kind": "single",
    "code": "import copy\na = [[]]\nb = copy.copy(a)\na[0].append(1)\nprint(b[0])",
    "id": "m872",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True (shallow)",
      "False (deep)",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "copy.copy — поверхностная копия: контейнер новый, вложения общие. Здесь: True (shallow).",
    "kind": "single",
    "code": "import copy\na = [[1], [2]]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "id": "m882",
    "fixed": true
  }
);
