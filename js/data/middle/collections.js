// @meta topic=collections group=Collections и itertools
// middle · 34 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что вернёт Counter.most_common(2)?",
    "options": [
      "список пар (элемент, счёт) топ-2",
      "только ключи",
      "dict",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — список пар (элемент, счёт) топ-2. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m45",
    "fixed": true
  },
  {
    "q": "Что сделает defaultdict(int), если ключа ещё не было?",
    "options": [
      "создаст значение 0 и вернёт его",
      "бросит KeyError",
      "вернёт None",
      "создаст пустой list"
    ],
    "answer": 0,
    "explain": "factory для defaultdict(int) — вызов int() → 0. Для списков берут defaultdict(list).",
    "kind": "single",
    "id": "m103",
    "fixed": true
  },
  {
    "q": "Что произойдёт при d['k'].append(1), если d = defaultdict(list) и ключа 'k' не было?",
    "options": [
      "создастся [], затем append(1)",
      "KeyError",
      "AttributeError: NoneType",
      "операция тихо проигнорируется"
    ],
    "answer": 0,
    "explain": "Нет ключа → factory list() → пустой список кладётся в d['k'] → append. Удобно для группировки.",
    "kind": "single",
    "id": "m117",
    "fixed": true
  },
  {
    "q": "Что делает deque.rotate(1) для очереди из 4 элементов?",
    "options": [
      "циклический сдвиг на 1 вправо (отрицательный n — влево)",
      "сортирует элементы",
      "удаляет один элемент",
      "всегда бросает ошибку"
    ],
    "answer": 0,
    "explain": "rotate(n) крутит deque на n шагов. Это не sort и не pop.",
    "kind": "single",
    "id": "m131",
    "fixed": true
  },
  {
    "q": "Что возвращает namedtuple._asdict()?",
    "options": [
      "словарь (раньше OrderedDict) с полями экземпляра",
      "автоматически JSON через dumps",
      "кортеж только имён полей",
      "глубокую копию вложенных объектов"
    ],
    "answer": 0,
    "explain": "_asdict() отдаёт mapping поле→значение. JSON сам не пишет — для этого json.dumps.",
    "kind": "single",
    "id": "m145",
    "fixed": true
  },
  {
    "q": "Что делает сложение двух Counter?",
    "options": [
      "складывает счётчики по ключам",
      "конкатенирует как строки",
      "убирает все ключи",
      "возвращает set ключей"
    ],
    "answer": 0,
    "explain": "Counter({'a':1}) + Counter({'a':2}) → {'a':3}. Вычитание обнуляет неположительные.",
    "kind": "single",
    "id": "m262",
    "fixed": true
  },
  {
    "q": "Что делает deque.rotate(3) на 6 элементах?",
    "options": [
      "циклический сдвиг на 3 вправо",
      "удаляет 3 элемента",
      "сортирует по возрастанию",
      "разворачивает всю очередь"
    ],
    "answer": 0,
    "explain": "rotate(n) крутит вправо на n; отрицательный n — влево. Длина сохраняется.",
    "kind": "single",
    "id": "m288",
    "fixed": true
  },
  {
    "q": "Что вернёт Counter.most_common(2)?",
    "options": [
      "топ-2 самых частых элементов как (элемент, счётчик)",
      "все ключи в алфавите",
      "только сумму счётчиков",
      "очищенный Counter"
    ],
    "answer": 0,
    "explain": "most_common(n) — n пар по убыванию частоты; без n — все.",
    "kind": "single",
    "id": "m426",
    "fixed": true
  },
  {
    "q": "Зачем collections.UserDict?",
    "options": [
      "удобная база для своего dict-like класса через наследование",
      "быстрее встроенного dict всегда",
      "замена defaultdict",
      "только для JSON"
    ],
    "answer": 0,
    "explain": "Наследовать встроенный dict исторически неудобно; UserDict.data — нормальный путь кастомизации.",
    "kind": "single",
    "id": "m437",
    "fixed": true
  },
  {
    "q": "Для чего хорошо подходит collections.deque?",
    "options": [
      "быстрых append/pop с обоих концов",
      "только случайного доступа O(1) лучше list",
      "замены dict",
      "SQL-запросов"
    ],
    "answer": 0,
    "explain": "Двусторонняя очередь: O(1) на концах. Индексация в середине дороже, чем у list.",
    "kind": "single",
    "id": "m447",
    "fixed": true
  },
  {
    "q": "Что вернёт Counter.subtract?",
    "options": [
      "может уйти в минус",
      "как - но clip 0",
      "удаляет ключи <1 always",
      "ошибка на минус"
    ],
    "answer": 0,
    "explain": "Результат выражения — может уйти в минус. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m509",
    "fixed": true
  },
  {
    "q": "Какова амортизированная сложность deque.appendleft?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "Collections.deque заточен под O(1) append/appendleft/pop/popleft. У list appendleft был бы O(n) из-за сдвига.",
    "kind": "single",
    "id": "m516",
    "fixed": true
  },
  {
    "q": "defaultdict(list): d['x'].append(1) — что с d['x']?",
    "options": [
      "[1], ключ создался фабрикой list сам",
      "KeyError",
      "None",
      "ошибка append"
    ],
    "answer": 0,
    "explain": "При отсутствии ключа вызывается default_factory → list(), затем append.",
    "kind": "single",
    "id": "m528",
    "fixed": true
  },
  {
    "q": "Что делает deque(maxlen=n) при переполнении?",
    "options": [
      "выбрасывает элемент с противоположного конца",
      "поднимает IndexError",
      "растёт без лимита",
      "очищает всю deque"
    ],
    "answer": 0,
    "explain": "Кольцевой буфер фиксированной длины — удобно для последних N событий.",
    "kind": "single",
    "id": "m534",
    "fixed": true
  },
  {
    "q": "Что вернёт Counter.elements()?",
    "options": [
      "итератор с повторами по счёту",
      "unique keys",
      "sorted list always",
      "dict"
    ],
    "answer": 0,
    "explain": "Результат выражения — итератор с повторами по счёту. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m564",
    "fixed": true
  },
  {
    "q": "Какова сложность deque.popleft()?",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "У deque оба конца O(1). list.pop(0) — O(n).",
    "kind": "single",
    "id": "m590",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[('a', 2), ('b', 1)]",
      "{'a': 2, 'b': 1}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Counter считает частоты; most_common даёт топ пар (элемент, счёт) → [('a', 2), ('b', 1)].",
    "kind": "single",
    "code": "from collections import Counter\nprint(Counter('aab').most_common(2))",
    "id": "m619",
    "fixed": true
  },
  {
    "q": "Что делает deque.rotate(2) на 5 элементах?",
    "options": [
      "циклический сдвиг на 2 вправо (отрицательное — влево)",
      "сортировку",
      "удаление двух элементов",
      "реверс всего deque"
    ],
    "answer": 0,
    "explain": "rotate(n): элементы с правого конца переносятся влево на n (для положительного n).",
    "kind": "single",
    "id": "m631",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[('a', 3), ('b', 2)]",
      "{'a': 3, 'b': 2}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Counter считает частоты; most_common даёт топ пар (элемент, счёт) → [('a', 3), ('b', 2)].",
    "kind": "single",
    "code": "from collections import Counter\nprint(Counter('aaabb').most_common(2))",
    "id": "m655",
    "fixed": true
  },
  {
    "q": "Что такое deque.rotate?",
    "options": [
      "циклический сдвиг элементов",
      "сортировка",
      "случайный shuffle",
      "преобразование в list"
    ],
    "answer": 0,
    "explain": "rotate(n) сдвигает кольцом; полезно для буферов/алгоритмов.",
    "kind": "single",
    "id": "m671",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[('a', 5), ('b', 2)]",
      "{'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Counter считает частоты; most_common даёт топ пар (элемент, счёт) → [('a', 5), ('b', 2)].",
    "kind": "single",
    "code": "from collections import Counter\nprint(Counter('abracadabra').most_common(2))",
    "id": "m683",
    "fixed": true
  },
  {
    "q": "Что такое collections.UserList?",
    "options": [
      "обёртка-база для кастомного list-like API",
      "быстрее list всегда",
      "deque",
      "только для JSON"
    ],
    "answer": 0,
    "explain": "Наследование от list исторически кавернозно; UserList.data — данные.",
    "kind": "single",
    "id": "m735",
    "fixed": true
  },
  {
    "q": "Что делает deque.rotate(4) на 7 элементах?",
    "options": [
      "циклический сдвиг на 4 вправо (отриц. — влево)",
      "удаляет 4 элемента",
      "сортирует",
      "оставляет без изменений"
    ],
    "answer": 0,
    "explain": "rotate переносит элементы кольцом.",
    "kind": "single",
    "id": "m747",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[('i', 4), ('s', 4)]",
      "{'m': 1, 'i': 4, 's': 4, 'p': 2}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Counter считает частоты; most_common даёт топ пар (элемент, счёт) → [('i', 4), ('s', 4)].",
    "kind": "single",
    "code": "from collections import Counter\nprint(Counter('mississippi').most_common(2))",
    "id": "m790",
    "fixed": true
  },
  {
    "q": "Что делает defaultdict(list)['k'].append(1)?",
    "options": [
      "создаёт list для 'k' фабрикой и делает append → [1]",
      "KeyError",
      "ничего",
      "создаёт dict"
    ],
    "answer": 0,
    "explain": "default_factory вызывается при отсутствии ключа.",
    "kind": "single",
    "id": "m793",
    "fixed": true
  },
  {
    "q": "Зачем OrderedDict.move_to_end?",
    "options": [
      "явно двигать ключ в конец/начало (LRU-подобные структуры)",
      "сортировать значения",
      "удалять dict",
      "только для JSON"
    ],
    "answer": 0,
    "explain": "Обычный dict с 3.7 упорядочен, но move_to_end и equality-с-порядком — фичи OrderedDict.",
    "kind": "single",
    "id": "m820",
    "fixed": true
  },
  {
    "q": "Что вернёт Counter('aab')['a']?",
    "options": [
      "2",
      "0",
      "3",
      "KeyError"
    ],
    "answer": 0,
    "explain": "Считает 'a' дважды. Отсутствующий ключ у Counter даёт 0, не KeyError.",
    "kind": "single",
    "id": "m823",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[('x', 1), ('y', 1)]",
      "{'x': 1, 'y': 1, 'z': 1}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Counter считает частоты; most_common даёт топ пар (элемент, счёт) → [('x', 1), ('y', 1)].",
    "kind": "single",
    "code": "from collections import Counter\nprint(Counter('xyz').most_common(2))",
    "id": "m829",
    "fixed": true
  },
  {
    "q": "Нужен ли OrderedDict после 3.7?",
    "options": [
      "иногда да — move_to_end, equality с учётом порядка, явный контракт",
      "нет, полностью мёртв",
      "да, иначе dict неупорядочен",
      "только для JSON"
    ],
    "answer": 0,
    "explain": "dict сохраняет порядок вставки, но API OrderedDict шире.",
    "kind": "single",
    "id": "m849",
    "fixed": true
  },
  {
    "q": "Чем удобен namedtuple?",
    "options": [
      "immutable + доступ по имени поля и индексу",
      "мутабельность как list",
      "наследование как dataclass без ограничений",
      "JSON автоматом"
    ],
    "answer": 0,
    "explain": "Лёгкие записи-кортежи. Для методов/defaults чаще NamedTuple typing или dataclass.",
    "kind": "single",
    "id": "m861",
    "fixed": true
  },
  {
    "q": "Для чего полезен ChainMap?",
    "options": [
      "слои переопределений нескольких mapping (lookup по цепочке)",
      "глубокое слияние dict в один новый всегда",
      "сортировка ключей",
      "JSON Schema"
    ],
    "answer": 0,
    "explain": "Поиск идёт от первого mapping к следующим. Запись по умолчанию — в первый.",
    "kind": "single",
    "id": "m869",
    "fixed": true
  },
  {
    "q": "Что вернёт defaultdict без factory при []?",
    "options": [
      "TypeError/нужен factory",
      "создаёт None",
      "KeyError как dict",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — TypeError/нужен factory. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m871",
    "fixed": true
  },
  {
    "q": "Что такое namedtuple?",
    "options": [
      "легковесный immutable тип с именами полей",
      "мутабельный dict",
      "ORM модель",
      "async queue"
    ],
    "answer": 0,
    "explain": "collections.namedtuple / typing.NamedTuple — кортеж с .field доступом.",
    "kind": "single",
    "id": "m875",
    "fixed": true
  },
  {
    "q": "Куда ChainMap пишет по умолчанию?",
    "options": [
      "в первый mapping",
      "во все сразу",
      "только в последний",
      "создаёт новый dict всегда"
    ],
    "answer": 0,
    "explain": "cm['k']=v обновляет maps[0]. Lookup идёт по всем.",
    "kind": "single",
    "id": "m887",
    "fixed": true
  }
);
