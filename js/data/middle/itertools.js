// @meta topic=itertools group=Collections и itertools
// middle · 48 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что выведет код?",
    "options": [
      "4",
      "3",
      "6",
      "0"
    ],
    "answer": 0,
    "explain": "combinations(range(4), 3) — все сочетания из 4 по 3: C(4,3)=4. Это ленивый itertools, list(...) только считает длину.",
    "kind": "single",
    "code": "from itertools import combinations\nprint(len(list(combinations(range(4), 3))))",
    "id": "m60",
    "fixed": true
  },
  {
    "q": "Что даёт product('ab', repeat=2)?",
    "options": [
      "aa ab ba bb (как кортежи)",
      "только ab",
      "перестановки без повторов",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Декартово произведение — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "id": "m89",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[1, 2, 0, 1]",
      "[[1, 2], [0, 1]]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Chain склеивает итерируемые — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import chain\nprint(list(chain([1, 2], list(range(2)))))",
    "id": "m158",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[1, 2, 3]",
      "[1, 2, 3, 4]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Islice — ленивый срез — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import islice\nprint(list(islice([1, 2, 3, 4, 5], 3)))",
    "id": "m171",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "20",
      "10",
      "5",
      "25"
    ],
    "answer": 0,
    "explain": "permutations(range(5), 2) — размещения из 5 по 2: P(5,2)=5×4=20.",
    "kind": "single",
    "code": "from itertools import permutations\nprint(len(list(permutations(range(5), 2))))",
    "id": "m184",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[1, 3, 6, 10]",
      "[1, 2, 3, 4]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Накопительная сумма — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import accumulate\nprint(list(accumulate(range(1, 5))))",
    "id": "m197",
    "fixed": true
  },
  {
    "q": "Что делает itertools.chain.from_iterable?",
    "options": [
      "сплющивает один уровень вложенности итерируемых",
      "рекурсивно раскрывает любую глубину",
      "сортирует элементы",
      "удаляет дубликаты"
    ],
    "answer": 0,
    "explain": "from_iterable([[1,2],[3]]) → 1,2,3. Только один уровень; для глубокого flatten нужен свой код.",
    "kind": "single",
    "id": "m223",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[(1, 2), (2, 2), (3, 1)]",
      "[1, 2, 3]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Groupby группирует только подряд идущие одинаковые. Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import groupby\nprint([(k, len(list(g))) for k, g in groupby([1, 1, 2, 2, 3])])",
    "id": "m249",
    "fixed": true
  },
  {
    "q": "Что вернёт list(accumulate([1, 2, 3]))?",
    "options": [
      "[1, 3, 6]",
      "[1, 2, 3]",
      "[6]",
      "TypeError"
    ],
    "answer": 0,
    "explain": "itertools.accumulate — накопительная свёртка: 1, 1+2=3, 3+3=6.",
    "kind": "single",
    "id": "m275",
    "fixed": true
  },
  {
    "q": "Что такое zip_longest заполняет?",
    "options": [
      "fillvalue для коротких",
      "ошибкой",
      "обрезает как zip",
      "None запрещён"
    ],
    "answer": 0,
    "explain": "Itertools.zip_longest — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "id": "m366",
    "fixed": true
  },
  {
    "q": "Что такое count(10, 2) начнёт?",
    "options": [
      "10,12,14…",
      "0,2,10",
      "10,11",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Бесконечный счётчик — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "id": "m404",
    "fixed": true
  },
  {
    "q": "Что верно про islice(it, 2, 5) берёт?",
    "options": [
      "элементы с 2 по 4 (как range)",
      "первые 5",
      "с 2 до конца",
      "только 2 и 5"
    ],
    "answer": 0,
    "explain": "Ленивый срез итератора — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "id": "m415",
    "fixed": true
  },
  {
    "q": "Что делает itertools.islice(it, 10)?",
    "options": [
      "лениво берёт первые 10 элементов итератора",
      "создаёт list из всего it сразу всегда",
      "сортирует it",
      "удаляет 10 элементов из источника"
    ],
    "answer": 0,
    "explain": "islice — срез без материализации всего потока. Есть варианты start/stop/step.",
    "kind": "single",
    "id": "m457",
    "fixed": true
  },
  {
    "q": "Что вернёт list(permutations('ab', 2))?",
    "options": [
      "[('a', 'b'), ('b', 'a')]",
      "[('a', 'a'), ('a', 'b'), ('b', 'a'), ('b', 'b')]",
      "['ab']",
      "['ba']"
    ],
    "answer": 0,
    "explain": "Перестановки — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "id": "m466",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "10",
      "0",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "range(start, stop[, step]) не включает stop. list(range(...)) → 10.",
    "kind": "single",
    "code": "from itertools import combinations\nprint(len(list(combinations(range(5), 2))))",
    "id": "m481",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "8",
      "0",
      "1",
      "ошибка"
    ],
    "answer": 0,
    "explain": "itertools строит комбинаторный итератор; len(...) здесь 8.",
    "kind": "single",
    "code": "from itertools import product\nprint(len(list(product([0, 1], repeat=3))))",
    "id": "m522",
    "fixed": true
  },
  {
    "q": "Что делает islice(it, None, None, 2)?",
    "options": [
      "берёт каждый второй элемент из итератора",
      "разворачивает итератор в список дважды",
      "всегда возвращает пустой итератор",
      "сортирует элементы по убыванию"
    ],
    "answer": 0,
    "explain": "Itertools.islice(it, start, stop, step): start/stop = None значит «с начала / до конца», step=2 — каждый второй элемент, лениво, без полного списка.",
    "kind": "single",
    "id": "m552",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[1, 2, 0, 1, 2, 3]",
      "[[1, 2], [0, 1, 2, 3]]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Chain склеивает итерируемые — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import chain\nprint(list(chain([1, 2], list(range(4)))))",
    "id": "m570",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "6",
      "0",
      "3",
      "ошибка"
    ],
    "answer": 0,
    "explain": "range(start, stop[, step]) не включает stop. list(range(...)) → 6.",
    "kind": "single",
    "code": "from itertools import permutations\nprint(len(list(permutations(range(3), 2))))",
    "id": "m575",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[10, 20]",
      "[10, 20, 30]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Islice — ленивый срез — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import islice\nprint(list(islice([10, 20, 30, 40], 2)))",
    "id": "m580",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "6",
      "0",
      "1",
      "ошибка"
    ],
    "answer": 0,
    "explain": "range(start, stop[, step]) не включает stop. list(range(...)) → 6.",
    "kind": "single",
    "code": "from itertools import permutations\nprint(len(list(permutations(range(3), 3))))",
    "id": "m605",
    "fixed": true
  },
  {
    "q": "Что вернёт accumulate с func=operator.mul?",
    "options": [
      "накопительное произведение",
      "sum only",
      "max only",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Кастомная свёртка — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "id": "m623",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[(1, 2), (3, 4)]",
      "[1,2,3,4]",
      "ошибка",
      "[(1,2,3,4)]"
    ],
    "answer": 0,
    "explain": "Batched(n) группирует по n (3.12+). Если нет — skip? Better use classic::.",
    "kind": "single",
    "code": "from itertools import islice\nit = iter([1, 2, 3, 4])\nprint([tuple(islice(it, 2)), tuple(islice(it, 2))])",
    "id": "m635",
    "fixed": true
  },
  {
    "q": "Что часто требуют перед itertools.groupby?",
    "options": [
      "предварительную сортировку (или группировку) по тому же ключу",
      "обязательный list() всего мира",
      "удаление дубликатов set()",
      "reverse=True всегда"
    ],
    "answer": 0,
    "explain": "groupby группирует только подряд идущие равные ключи — как uniq в Unix.",
    "kind": "single",
    "id": "m639",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[1, 3, 6]",
      "[1, 2, 3]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Накопительная сумма — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import accumulate\nprint(list(accumulate(range(1, 4))))",
    "id": "m643",
    "fixed": true
  },
  {
    "q": "Что делает itertools.cycle([1,2])?",
    "options": [
      "бесконечно циклически отдаёт 1,2,1,2,…",
      "один проход и StopIteration",
      "сортирует",
      "случайную перестановку"
    ],
    "answer": 0,
    "explain": "cycle — бесконечный итератор; обычно режут islice или break.",
    "kind": "single",
    "id": "m647",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "6",
      "3",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "range(start, stop[, step]) не включает stop. list(range(...)) → 6.",
    "kind": "single",
    "code": "from itertools import combinations\nprint(len(list(combinations(range(4), 2))))",
    "id": "m663",
    "fixed": true
  },
  {
    "q": "Что выведет list(islice(...))?",
    "options": [
      "[0, 1, 2]",
      "[0,1,2,3,4]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Первые 3 — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти:.",
    "kind": "single",
    "code": "from itertools import islice, count\nprint(list(islice(count(), 3)))",
    "id": "m675",
    "fixed": true
  },
  {
    "q": "Что делает itertools.tee(it, n)?",
    "options": [
      "разветвляет один итератор на n (с буферизацией)",
      "удаляет it",
      "сортирует",
      "делает list копию без буфера никогда"
    ],
    "answer": 0,
    "explain": "tee копирует поток; если ветки уходят далеко друг от друга — растёт буфер. Иногда проще list(it).",
    "kind": "single",
    "id": "m691",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[1, 2, 0, 1, 2]",
      "[[1, 2], [0, 1, 2]]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Chain склеивает итерируемые — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import chain\nprint(list(chain([1, 2], list(range(3)))))",
    "id": "m699",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[0, 1, 2, 3]",
      "[0, 1, 2, 3, 4]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Islice — ленивый срез — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import islice\nprint(list(islice([0, 1, 2, 3, 4, 5], 4)))",
    "id": "m707",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[(1, 1), (2, 1), (1, 1)]",
      "[1, 2]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Groupby группирует только подряд идущие одинаковые. Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import groupby\nprint([(k, len(list(g))) for k, g in groupby([1, 2, 1])])",
    "id": "m719",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "16",
      "4",
      "8",
      "ошибка"
    ],
    "answer": 0,
    "explain": "itertools строит комбинаторный итератор; len(...) здесь 16.",
    "kind": "single",
    "code": "from itertools import product\nprint(len(list(product([0, 1], repeat=4))))",
    "id": "m723",
    "fixed": true
  },
  {
    "q": "Что делает itertools.chain?",
    "options": [
      "лениво склеивает несколько итерируемых в один поток",
      "создаёт декартово произведение",
      "сортирует",
      "удаляет дубликаты"
    ],
    "answer": 0,
    "explain": "chain(a,b,c) — как последовательный for. chain.from_iterable для списка списков.",
    "kind": "single",
    "id": "m731",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[(0, 2), (1, 2), (0, 1)]",
      "[0, 1]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Groupby группирует только подряд идущие одинаковые. Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import groupby\nprint([(k, len(list(g))) for k, g in groupby([0, 0, 1, 1, 0])])",
    "id": "m743",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[1, 3, 6, 10, 15]",
      "[1, 2, 3, 4, 5]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Накопительная сумма — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import accumulate\nprint(list(accumulate(range(1, 6))))",
    "id": "m763",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[1, 3]",
      "[1, 2]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Накопительная сумма — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import accumulate\nprint(list(accumulate(range(1, 3))))",
    "id": "m769",
    "fixed": true
  },
  {
    "q": "Что делает itertools.batched (3.12+)?",
    "options": [
      "режет итерируемое на чанки по n",
      "сортирует батчами",
      "параллелит CPU",
      "читает HTTP batch"
    ],
    "answer": 0,
    "explain": "batched('ABCDEF', 2) → AB CD EF. Раньше писали сами через islice.",
    "kind": "single",
    "id": "m796",
    "fixed": true
  },
  {
    "q": "Что такое repeat(x, 3)?",
    "options": [
      "x x x",
      "бесконечно всегда",
      "ошибка",
      "shuffle x"
    ],
    "answer": 0,
    "explain": "Повтор — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "id": "m805",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[1, 2, 0, 1, 2, 3, 4]",
      "[[1, 2], [0, 1, 2, 3, 4]]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Chain склеивает итерируемые — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import chain\nprint(list(chain([1, 2], list(range(5)))))",
    "id": "m811",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "4",
      "2",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "itertools строит комбинаторный итератор; len(...) здесь 4.",
    "kind": "single",
    "code": "from itertools import product\nprint(len(list(product([0, 1], repeat=2))))",
    "id": "m826",
    "fixed": true
  },
  {
    "q": "Что возвращает itertools.pairwise (3.10+)?",
    "options": [
      "пары (a,b), (b,c), … подряд",
      "все комбинации C(n,2)",
      "zip длинного и короткого без overlap",
      "декартово произведение"
    ],
    "answer": 0,
    "explain": "Удобно для последовательных рёбер/разниц.",
    "kind": "single",
    "id": "m837",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "3",
      "0",
      "1",
      "ошибка"
    ],
    "answer": 0,
    "explain": "range(start, stop[, step]) не включает stop. list(range(...)) → 3.",
    "kind": "single",
    "code": "from itertools import combinations\nprint(len(list(combinations(range(3), 2))))",
    "id": "m845",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[(5, 3)]",
      "[(5, 1), (5, 1), (5, 1)]",
      "[]",
      "TypeError"
    ],
    "answer": 0,
    "explain": "groupby склеивает только подряд идущие равные ключи. Три пятёрки подряд → одна группа длины 3.",
    "kind": "single",
    "code": "from itertools import groupby\nprint([(k, len(list(g))) for k, g in groupby([5, 5, 5])])",
    "id": "m865",
    "fixed": true
  },
  {
    "q": "Что вернёт list(product('ab', repeat=2))?",
    "options": [
      "[('a', 'a'), ('a', 'b'), ('b', 'a'), ('b', 'b')]",
      "['ab']",
      "['a', 'b']",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Декартово произведение — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "id": "m873",
    "fixed": true
  },
  {
    "q": "Что выведет list(itertools.chain([1], [2, 3]))?",
    "options": [
      "[1, 2, 3]",
      "[[1],[2,3]]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Chain склеивает итерируемые подряд. Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "id": "m877",
    "fixed": true
  },
  {
    "q": "Что вернёт list(combinations('abc', 2))?",
    "options": [
      "[('a', 'b'), ('a', 'c'), ('b', 'c')]",
      "все перестановки",
      "[('a', 'a'), …]",
      "['abc']"
    ],
    "answer": 0,
    "explain": "Сочетания без повтора — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "id": "m879",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "12",
      "6",
      "3",
      "ошибка"
    ],
    "answer": 0,
    "explain": "range(start, stop[, step]) не включает stop. list(range(...)) → 12.",
    "kind": "single",
    "code": "from itertools import permutations\nprint(len(list(permutations(range(4), 2))))",
    "id": "m883",
    "fixed": true
  }
);
