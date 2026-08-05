// @meta topic=байткод group=CPython и память
// senior · 13 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Что даёт кэширование LOAD_GLOBAL в CPython 3.11+?",
    "options": [
      "специализация: быстрый путь, если global/builtin не менялся",
      "полный scan dict на каждой инструкции без кэша",
      "запрет изменения globals в runtime",
      "автоматический переход на JIT"
    ],
    "answer": 0,
    "explain": "Адаптивный интерпретатор запоминает, что global X указывает на тот же объект. При exec/eval или изменении модуля деоптимизируется. Часть tier-1 оптимизаций.",
    "kind": "single",
    "id": "s102",
    "fixed": true
  },
  {
    "q": "С чем связан байткод-опкод LOAD_FAST?",
    "options": [
      "чтение локальной переменной из fast local slot",
      "сетевой I/O через asyncio",
      "запуск generational GC",
      "установка pip-пакета"
    ],
    "answer": 0,
    "explain": "Локальные и аргументы функции хранятся в фиксированных слотах frame — LOAD_FAST быстрее LOAD_NAME для глобалов.",
    "kind": "single",
    "id": "s196",
    "fixed": true
  },
  {
    "q": "Что показывает dis.dis(func)?",
    "options": [
      "байткод-инструкции скомпилированной функции",
      "AST дерево модуля",
      "граф вызовов runtime",
      "список импортов пакета"
    ],
    "answer": 0,
    "explain": "dis дизассемблирует code object: опкоды, аргументы, смещения. Полезно понимать оптимизации компилятора и стоимость конструкций.",
    "kind": "single",
    "id": "s253",
    "fixed": true
  },
  {
    "q": "Что использует опкод MAKE_FUNCTION?",
    "options": [
      "code object плюс флаги defaults/kwdefaults/annotations/closure",
      "только имя функции без байткода",
      "модуль importlib",
      "сразу вызывает функцию"
    ],
    "answer": 0,
    "explain": "Компилятор эмитит MAKE_FUNCTION с арностью: связанный code object, кортеж default, dict kwonly, __annotations__, closure cells.",
    "kind": "single",
    "id": "s295",
    "fixed": true
  },
  {
    "q": "С чем связан опкод CALL в байткоде CPython?",
    "options": [
      "вызовом функции (callable)",
      "сетевым I/O через сокет",
      "только со сборкой мусора",
      "установкой pip-пакета"
    ],
    "answer": 0,
    "explain": "CALL (и CALL_FUNCTION в старых версиях) кладёт аргументы со стека и вызывает объект. dis.dis() показывает цепочку LOAD → CALL для горячих путей.",
    "kind": "single",
    "id": "s360",
    "fixed": true
  },
  {
    "q": "Что верно про .compile / ast.parse связаны с?",
    "options": [
      "пайплайном: исходник → AST → code object → исполнение",
      "только статическим анализом mypy без runtime",
      "компиляцией в нативный .so без байткода",
      "загрузкой .pyc напрямую минуя парсер"
    ],
    "answer": 0,
    "explain": "ast.parse строит AST; compile() из AST или строки даёт code object; eval/exec/import выполняют его. dis.dis показывает байткод code object.",
    "kind": "single",
    "id": "s595",
    "fixed": true
  },
  {
    "q": "Что вернёт CACHE / specialized opcodes в 3.11+?",
    "options": [
      "ускоряют горячие пути",
      "меняют синтаксис языка",
      "удаляют exceptions",
      "заменяют AST"
    ],
    "answer": 0,
    "explain": "Результат выражения — ускоряют горячие пути. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s605",
    "fixed": true
  },
  {
    "q": "Что такое RETURN_GENERATOR?",
    "options": [
      "опкод: frame превращается в генератор при yield в функции",
      "немедленный return None из async def",
      "сигнал GC собрать gen0",
      "загрузка модуля через importlib"
    ],
    "answer": 0,
    "explain": "При первом yield функция не возвращает значение вызывающему напрямую — RETURN_GENERATOR создаёт generator object и приостанавливает frame.",
    "kind": "single",
    "id": "s610",
    "fixed": true
  },
  {
    "q": "В чём разница: LOAD_FAST vs LOAD_GLOBAL по стоимости?",
    "options": [
      "LOAD_FAST — индекс в fast locals; LOAD_GLOBAL — dict lookup в globals/builtins",
      "LOAD_GLOBAL всегда быстрее из-за кэша в co_names",
      "разницы нет — оба O(1) без lookup",
      "LOAD_FAST работает только в class body"
    ],
    "answer": 0,
    "explain": "Локальные переменные в frame array — быстрый доступ. Глобалы ищутся в dict модуля и builtins. hot loop: вынести global в local alias.",
    "kind": "single",
    "id": "s651",
    "fixed": true
  },
  {
    "q": "Что такое Опкод LOAD_GLOBAL связан с?",
    "options": [
      "загрузка имени из globals/builtins dict стека frame",
      "чтение локальной переменной по индексу fast",
      "импорт подмодуля package",
      "создание closure cell"
    ],
    "answer": 0,
    "explain": "LOAD_GLOBAL(namei) ищет в co_names. Python 3.11+ может использовать INLINE CACHE для ускорения повторных lookup в том же участке.",
    "kind": "single",
    "id": "s662",
    "fixed": true
  },
  {
    "q": "С чем связан опкод BINARY_OP?",
    "options": [
      "с арифметикой и бинарными операциями (3.11 объединил много бинарных опкодов)",
      "только с импортом модулей",
      "только с созданием классов",
      "с файловым I/O"
    ],
    "answer": 0,
    "explain": "Специализация байткода: BINARY_OP покрывает +, -, & и т.д. с adaptive specialization.",
    "kind": "single",
    "id": "s710",
    "fixed": true
  },
  {
    "q": "Зачем в байткоде EXTENDED_ARG?",
    "options": [
      "кодировать аргументы инструкций, не влезающие в один байт",
      "расширять синтаксис Python",
      "включать GIL",
      "сжимать .pyc"
    ],
    "answer": 0,
    "explain": "Префикс EXTENDED_ARG наращивает operand больших jump/const индексов.",
    "kind": "single",
    "id": "s713",
    "fixed": true
  },
  {
    "q": "Чем смотреть байткод функции?",
    "options": [
      "dis.dis",
      "только модуль ast",
      "только pdb",
      "print(bytecode) без модулей"
    ],
    "answer": 0,
    "explain": "stdlib dis: dis.dis(f) печатает дизассемблированный bytecode. Удобно понимать, что реально исполняет VM.",
    "kind": "single",
    "code": "import dis\ndef f(x): return x+1\ndis.dis(f)",
    "id": "s761",
    "fixed": true
  }
);
