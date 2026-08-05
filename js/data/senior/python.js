// @meta topic=python group=CPython и память
// senior · 23 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Зачем в CPython hash randomization (PYTHONHASHSEED)?",
    "options": [
      "защита от hash-collision DoS на dict/set",
      "ускорение хеширования в 10 раз",
      "детерминированный hash для отладки в проде",
      "шифрование ключей словаря"
    ],
    "answer": 0,
    "explain": "Атакующий подбирает ключи с одинаковым hash → деградация dict до O(n). Случайный seed усложняет атаку. Для воспроизводимости в тестах фиксируют PYTHONHASHSEED.",
    "kind": "single",
    "id": "s70",
    "fixed": true
  },
  {
    "q": "На чём по умолчанию основан object.__hash__?",
    "options": [
      "на id объекта (адресе в памяти), пока __eq__ не переопределён",
      "на значении всех полей __dict__",
      "на hash от type.__name__",
      "всегда возвращает 0"
    ],
    "answer": 0,
    "explain": "По умолчанию hash(id). Если переопределить __eq__ без __hash__, объект становится unhashable — нельзя ключом dict/set.",
    "kind": "single",
    "id": "s211",
    "fixed": true
  },
  {
    "q": "Что читает tomllib (Python 3.11+)?",
    "options": [
      "файлы TOML в dict (аналог ini/json для конфигов)",
      "только .env с export",
      "бинарный pickle",
      "только setup.cfg legacy"
    ],
    "answer": 0,
    "explain": "tomllib.load() — парсер TOML в stdlib (read-only). Для записи — tomli-w или third-party. pyproject.toml — главный use case.",
    "kind": "single",
    "id": "s420",
    "fixed": true
  },
  {
    "q": "Чем интернирование идентификаторов отличается от произвольных строк?",
    "options": [
      "имена переменных/атрибутов часто interned → `is` может совпасть",
      "все str interned всегда",
      "interning отключён в Python 3",
      "касается только bytes"
    ],
    "answer": 0,
    "explain": "CPython intern'ит некоторые строки (идентификаторы, мелкие int). На `is` для значений полагаться нельзя — только ==.",
    "kind": "single",
    "id": "s476",
    "fixed": true
  },
  {
    "q": "Почему для денег лучше Decimal, а не float?",
    "options": [
      "Decimal/целые в минимальных единицах без двоичной погрешности",
      "float точен для всех десятичных дробей",
      "fractions запрещены в финансах",
      "int рублей без копеек всегда достаточен"
    ],
    "answer": 0,
    "explain": "0.1 + 0.2 != 0.3 в float. Decimal с контекстом или int копейки — стандарт для billing.",
    "kind": "single",
    "id": "s494",
    "fixed": true
  },
  {
    "q": "Почему str+= в цикле считают плохим стилем?",
    "options": [
      "квадратичный риск, читаемость и портабельность хуже join",
      "+= всегда медленнее join в CPython",
      "+= синтаксически запрещён",
      "join не работает со str"
    ],
    "answer": 0,
    "explain": "Иммутабельные str: += может копировать. CPython иногда оптимизирует, но ''.join(parts) — идиома и O(total).",
    "kind": "single",
    "id": "s508",
    "fixed": true
  },
  {
    "q": "Что такое dict resize cost?",
    "options": [
      "при росте таблицы rehash и копирование — амортизированный O(1) на insert",
      "каждая вставка строго O(n) из-за полного копирования",
      "dict в CPython никогда не меняет размер после создания",
      "resize превращает hash table в красно-чёрное дерево"
    ],
    "answer": 0,
    "explain": "При заполнении compact dict удваивает capacity и перераскладывает элементы. Редкие дорогие resize дают средний O(1). Массовые insert в новый dict могут вызвать серию resize.",
    "kind": "single",
    "id": "s555",
    "fixed": true
  },
  {
    "q": "Что верно про сумму range больших — лучше?",
    "options": [
      "формула n*(n-1)//2 вместо материализации огромного range в list",
      "всегда list(range(n)) и sum() — единственный корректный способ",
      "обязательно numpy.sum для любого n",
      "sum(range) в Python 3 запрещён для n > 10**6"
    ],
    "answer": 0,
    "explain": "range — ленивый; sum(range(10**9)) считает без миллиарда объектов в памяти. Для арифметической прогрессии формула ещё быстрее и очевиднее.",
    "kind": "single",
    "id": "s570",
    "fixed": true
  },
  {
    "q": "Что такое str immutable ⇒ slice?",
    "options": [
      "срез str обычно создаёт новую строку (с оговорками interning/пустая)",
      "срез всегда возвращает view на ту же память как bytes",
      "срез str запрещён синтаксисом Python 3",
      "срез модифицирует исходную строку in-place"
    ],
    "answer": 0,
    "explain": "str неизменяем: s[1:3] — новый объект. CPython может переиспользовать пустую строку или срез single-char из intern table, но полагаться на identity нельзя.",
    "kind": "single",
    "id": "s580",
    "fixed": true
  },
  {
    "q": "Почему dict быстрее list для поиска ключа?",
    "options": [
      "средний O(1) по хешу против O(n) линейного перебора в list",
      "dict всегда отсортирован и использует бинарный поиск",
      "list не поддерживает оператор in в Python 3",
      "dict хранит ключи в CPU L1 cache автоматически"
    ],
    "answer": 0,
    "explain": "Проверка `key in d` — hash + probe. В list — перебор до совпадения. Для частых lookup по ключу dict/set; list — когда важен порядок и мало элементов.",
    "kind": "single",
    "id": "s585",
    "fixed": true
  },
  {
    "q": "В чём разница: dataclasses без slots vs slots?",
    "options": [
      "slots убирают __dict__ — меньше памяти, фиксированный набор атрибутов",
      "slots запрещают методы экземпляра",
      "без slots нельзя использовать typing",
      "slots=True ломает frozen dataclass"
    ],
    "answer": 0,
    "explain": "@dataclass(slots=True) — нет произвольных атрибутов, lower memory footprint. Без slots — гибкость и совместимость с некоторыми ORM mixins.",
    "kind": "single",
    "id": "s625",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "sys.set_int_max_str_digits ограничивает длину str↔int конвертации (защита от DoS)",
      "в Python нет лимита на размер int/str",
      "SyntaxError на import sys",
      "автоматический переход на decimal.Decimal"
    ],
    "answer": 0,
    "explain": "С 3.11+ default лимит ~4300 цифр. Конвертация гигантского int↔str блокируется ValueError. Код в карточке сохранён.",
    "kind": "single",
    "code": "import sys\n# sys.set_int_max_str_digits",
    "id": "s643",
    "fixed": true
  },
  {
    "q": "Что такое сумма многих float?",
    "options": [
      "накопление ошибок округления — math.fsum точнее",
      "всегда точный результат как в decimal без потерь",
      "sum() автоматически переключается на Decimal",
      "float суммирование запрещено в Python 3.12"
    ],
    "answer": 0,
    "explain": "0.1 + 0.2 != 0.3. Для финансов — Decimal; для научных сумм — math.fsum использует удвоенную точность на промежуточных шагах.",
    "kind": "single",
    "id": "s647",
    "fixed": true
  },
  {
    "q": "Что делает sys.set_int_max_str_digits?",
    "options": [
      "лимит длины строки при int↔str для защиты от DoS",
      "максимальное значение int в арифметике",
      "количество знаков после запятой в float",
      "размер буфера sys.stdout"
    ],
    "answer": 0,
    "explain": "Огромный int в str или обратно — O(n²) в худшем случае. Лимит (default 4300) режет pathological input в web/JSON парсерах.",
    "kind": "single",
    "id": "s659",
    "fixed": true
  },
  {
    "q": "Почему list.pop(0) медленный?",
    "options": [
      "O(n) сдвиг элементов в динамическом массиве C",
      "GIL блокирует pop с начала",
      "pop(0) вызывает полную сортировку list",
      "в CPython pop(0) быстрее pop()"
    ],
    "answer": 0,
    "explain": "Как insert(0): все элементы сдвигаются. Для FIFO — collections.deque.",
    "kind": "single",
    "id": "s665",
    "fixed": true
  },
  {
    "q": "Что такое Плюс __dict__ у экземпляра?",
    "options": [
      "гибкость произвольных атрибутов ценой памяти и slower lookup",
      "запрет slots и frozen",
      "автоматическая сериализация в JSON",
      "защита от race conditions"
    ],
    "answer": 0,
    "explain": "Обычный класс хранит атрибуты в per-instance __dict__. slots=True убирает dict — быстрее и компактнее, но фиксированный набор полей.",
    "kind": "single",
    "id": "s680",
    "fixed": true
  },
  {
    "q": "почему list.pop(0) O(n)?",
    "options": [
      "удаление с начала требует сдвига всех оставшихся элементов",
      "GIL сериализует pop в один поток O(n²)",
      "list хранится как linked list в CPython",
      "pop(0) вызывает heapify"
    ],
    "answer": 0,
    "explain": "list — dynamic array (over-allocated contiguous). Удаление index 0 — memmove всех элементов. deque — doubly-linked blocks, popleft O(1).",
    "kind": "single",
    "id": "s698",
    "fixed": true
  },
  {
    "q": "Почему нельзя было полагаться на порядок dict до 3.7 как на язык?",
    "options": [
      "гарантия языка с 3.7; раньше это была деталь реализации CPython (с 3.6 — компактный dict)",
      "dict никогда не был упорядочен даже в 3.12",
      "порядок гарантирован с Python 2.7",
      "только OrderedDict существовал всегда как единственный вариант"
    ],
    "answer": 0,
    "explain": "Пиши код portable: до 3.7 порядок — не контракт. С 3.7 insertion order — language guarantee.",
    "kind": "single",
    "id": "s719",
    "fixed": true
  },
  {
    "q": "С чем связан PEP 703?",
    "options": [
      "с опциональным GIL (free-threaded CPython)",
      "с удалением asyncio",
      "с запретом typing",
      "с заменой UTF-8"
    ],
    "answer": 0,
    "explain": "PEP 703 — Making the Global Interpreter Lock Optional. Отдельные сборки/режимы без GIL.",
    "kind": "single",
    "id": "s725",
    "fixed": true
  },
  {
    "q": "Какова цена int произвольной длины в Python?",
    "options": [
      "больше цифр — дороже арифметика и память",
      "все int всегда 64-bit фиксированно",
      "overflow как в C молча",
      "только float без int"
    ],
    "answer": 0,
    "explain": "Big int удобен, но не бесплатен: длинные числа → больше слов и циклов в longobject.",
    "kind": "single",
    "id": "s728",
    "fixed": true
  },
  {
    "q": "Чем math.fsum отличается от sum для float?",
    "options": [
      "fsum точнее накапливает сумму float (Shewchuk- alike)",
      "sum всегда точнее fsum",
      "разницы нет",
      "fsum только для int"
    ],
    "answer": 0,
    "explain": "Обычный sum копит ошибку округления. fsum использует алгоритм с компенсацией.",
    "kind": "single",
    "id": "s734",
    "fixed": true
  },
  {
    "q": "Почему list.pop(0) медленный на больших списках?",
    "options": [
      "O(n): все элементы сдвигаются влево",
      "из‑за GIL всегда O(1)",
      "pop(0) запрещён",
      "возвращает None и копирует весь list"
    ],
    "answer": 0,
    "explain": "Удаление из начала list сдвигает хвост. Для очереди с обоих концов — collections.deque (popleft O(1)).",
    "kind": "single",
    "code": "xs = list(range(10000))\nxs.pop(0)",
    "id": "s740",
    "fixed": true
  },
  {
    "q": "Почему свой __eq__ без __hash__ делает объект unhashable?",
    "options": [
      "интерпретатор ставит __hash__ = None, чтобы не ломать инвариант ключей dict",
      "eq запрещает любые объекты в list",
      "hash всегда берётся от id несмотря на eq",
      "только для frozen dataclass"
    ],
    "answer": 0,
    "explain": "Если a == b, должно hash(a)==hash(b). Для mutable с eq безопаснее unhashable.",
    "kind": "single",
    "id": "s743",
    "fixed": true
  }
);
