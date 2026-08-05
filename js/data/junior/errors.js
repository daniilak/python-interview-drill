// @meta topic=ошибки group=Исключения и файлы
// junior · 18 cards
(window.QUESTIONS_JUNIOR = window.QUESTIONS_JUNIOR || []).push(
  {
    "q": "Какое исключение вызовет 'a' + 1?",
    "options": [
      "TypeError",
      "ValueError",
      "SyntaxError",
      "'a1'"
    ],
    "answer": 0,
    "explain": "Оператор `+` для строк выполняет конкатенацию, но только с другими строками. Попытка сложить строку с числом вызывает TypeError, так как Python не выполняет неявное приведение типов в таких операциях. Для объединения нужно было бы явно преобразовать число в строку: `'a' + str(1)`.",
    "kind": "single",
    "id": "j5",
    "fixed": true
  },
  {
    "q": "Когда возникает исключение `SyntaxError`?",
    "options": [
      "На этапе парсинга кода",
      "Во время выполнения кода (в рантайме)",
      "При обращении к несуществующему ключу словаря",
      "При делении на ноль"
    ],
    "answer": 0,
    "explain": "Исключение `SyntaxError` возникает до начала выполнения программы, когда парсер Python обнаруживает код, нарушающий грамматику языка. Ловушка в том, чтобы не путать его с ошибками времени выполнения, такими как `KeyError` или `ZeroDivisionError`.",
    "kind": "single",
    "id": "j27",
    "fixed": true
  },
  {
    "q": "Что выведет код, который ловит исключение `ZeroDivisionError`?",
    "options": [
      "ok",
      "ZeroDivisionError",
      "ничего",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Инструкция `1 / 0` вызывает исключение `ZeroDivisionError`. Блок `except ZeroDivisionError:` перехватывает это исключение, и управление передаётся коду внутри него, который выводит 'ok'. Программа не падает, так как ошибка обработана.",
    "kind": "single",
    "code": "try:\n    1 / 0\nexcept ZeroDivisionError:\n    print('ok')",
    "id": "j71",
    "fixed": true
  },
  {
    "q": "Что из себя представляет исключение `IndentationError`?",
    "options": [
      "Подвид SyntaxError, связанный с некорректными отступами",
      "Ошибка времени выполнения, которую можно поймать через try...except",
      "Синоним для TabError, возникающей при смешивании табов и пробелов",
      "Предупреждение (Warning), а не полноценная ошибка"
    ],
    "answer": 0,
    "explain": "`IndentationError` — это подкласс `SyntaxError`, который возникает на этапе парсинга кода, до его выполнения. Поэтому его нельзя перехватить блоком `try...except`. `TabError` — это более специфичный подвид `IndentationError`.",
    "kind": "single",
    "id": "j104",
    "fixed": true
  },
  {
    "q": "Какое исключение вызовет обращение к несуществующему ключу словаря: `d={}; d['k']`?",
    "options": [
      "KeyError",
      "IndexError",
      "ValueError",
      "AttributeError"
    ],
    "answer": 0,
    "explain": "Исключение `KeyError` возникает при попытке доступа к несуществующему ключу в словаре. `AttributeError` возник бы при доступе к несуществующему атрибуту (например, `d.k`), а `IndexError` — при обращении по неверному индексу в последовательности.",
    "kind": "single",
    "id": "j115",
    "fixed": true
  },
  {
    "q": "Какое исключение вызовет выражение `1 / 0`?",
    "options": [
      "ZeroDivisionError",
      "TypeError",
      "ValueError",
      "ArithmeticError"
    ],
    "answer": 0,
    "explain": "Деление на ноль в Python вызывает исключение `ZeroDivisionError`. `ArithmeticError` является его родительским классом, но перехватывать принято более конкретные исключения. `TypeError` и `ValueError` возникают в других ситуациях.",
    "kind": "single",
    "id": "j145",
    "fixed": true
  },
  {
    "q": "Каков результат выполнения кода `print(1 / 0)`?",
    "options": [
      "Исключение ZeroDivisionError",
      "Будет напечатано 'inf'",
      "Будет напечатано '0.0'",
      "Исключение TypeError"
    ],
    "answer": 0,
    "explain": "Деление на ноль в Python для стандартных числовых типов (`int`, `float`) всегда вызывает исключение `ZeroDivisionError`. В отличие от некоторых других языков или библиотек (например, NumPy), Python не возвращает специальные значения вроде бесконечности (`inf`) или `NaN`.",
    "kind": "single",
    "code": "print(1 / 0)",
    "id": "j165",
    "fixed": true
  },
  {
    "q": "Какое исключение вызовет код `'abc'.foo`?",
    "options": [
      "AttributeError",
      "TypeError",
      "NameError",
      "KeyError"
    ],
    "answer": 0,
    "explain": "Исключение `AttributeError` возникает при попытке доступа к атрибуту, которого нет у объекта. Его часто путают с `NameError` (обращение к несуществующей переменной) или `KeyError` (обращение к несуществующему ключу словаря).",
    "kind": "single",
    "id": "j215",
    "fixed": true
  },
  {
    "q": "Какое исключение вызовет `int('x')`?",
    "options": [
      "ValueError",
      "TypeError",
      "NameError",
      "0"
    ],
    "answer": 0,
    "explain": "Функция `int()` не может преобразовать строку с нецифровыми символами, что вызывает `ValueError`. Важно отличать это от `TypeError`, который возник бы при передаче аргумента неподходящего типа, например `int([])`.",
    "kind": "single",
    "id": "j255",
    "fixed": true
  },
  {
    "q": "Какой результат выполнения кода `print('a' + 1)`?",
    "options": [
      "TypeError",
      "'a1'",
      "SyntaxError",
      "ValueError"
    ],
    "answer": 0,
    "explain": "Оператор `+` не определён для конкатенации строки (`str`) и числа (`int`). Для объединения их нужно сначала явно преобразовать число в строку, например, с помощью `str(1)`.",
    "kind": "single",
    "code": "print('a' + 1)",
    "id": "j275",
    "fixed": true
  },
  {
    "q": "Что выведет вызов функции `f()`?",
    "options": [
      "1",
      "None",
      "Ничего не выведет",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Блок `finally` выполняется всегда перед выходом из `try...finally`, даже если в `try` был `return`. Поскольку в `finally` нет своего `return` (а только `pass`), функция вернёт значение, определённое в блоке `try`.",
    "kind": "single",
    "code": "def f():\n    try:\n        return 1\n    finally:\n        pass\nprint(f())",
    "id": "j285",
    "fixed": true
  },
  {
    "q": "Что выведет следующий код с `try...finally`?",
    "options": [
      "from finally",
      "from try",
      "from try\nfrom finally",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Блок `finally` выполняется перед выходом из конструкции `try...finally`, даже если в `try` был `return`. Если в `finally` тоже есть `return`, он отменяет и заменяет возврат значения из блока `try`. Поэтому функция вернёт строку `'from finally'`.",
    "kind": "single",
    "code": "def f():\n    try:\n        return 'from try'\n    finally:\n        return 'from finally'\nprint(f())",
    "id": "j303",
    "fixed": true
  },
  {
    "q": "Какое исключение вызовет обращение к неопределённой переменной `undefined_name`?",
    "options": [
      "NameError",
      "AttributeError",
      "KeyError",
      "ValueError"
    ],
    "answer": 0,
    "explain": "Исключение `NameError` возникает при попытке использовать переменную или функцию, которая не была определена в текущей области видимости. Его часто путают с `AttributeError` (несуществующий атрибут у объекта) или `KeyError` (несуществующий ключ в словаре).",
    "kind": "single",
    "id": "j330",
    "fixed": true,
    "code": "print(undefined_name)"
  },
  {
    "q": "Если и в `try`, и в `finally` есть `return`, какое значение вернёт функция?",
    "options": [
      "значение из `finally`",
      "значение из `try`",
      "SyntaxError",
      "значение из `else`"
    ],
    "answer": 0,
    "explain": "Блок `finally` выполняется в любом случае перед выходом из конструкции `try...except...finally`. Если в `finally` есть оператор `return`, он «перебивает» любой `return` из блоков `try` или `except`.",
    "kind": "single",
    "id": "j366",
    "fixed": true
  },
  {
    "q": "Что напечатает код, если `ValueError` ловится через `except Exception`?",
    "options": [
      "caught",
      "ValueError: boom",
      "ничего (исключение не поймано)",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Класс `ValueError` является подклассом `Exception`, поэтому блок `except Exception:` перехватит это исключение. Ловушка в том, чтобы не перепутать иерархию встроенных исключений.",
    "kind": "single",
    "code": "try:\n    raise ValueError('boom')\nexcept Exception:\n    print('caught')",
    "id": "j424",
    "fixed": true
  },
  {
    "q": "В чём разница между исключениями `IndexError` и `KeyError`?",
    "options": [
      "Индекс в последовательности vs. ключ в словаре",
      "Это синонимы одного исключения",
      "IndexError для чисел, KeyError для строк",
      "Оба возникают только при работе с файлами"
    ],
    "answer": 0,
    "explain": "`IndexError` возникает при обращении к элементу последовательности (списка, кортежа) по индексу, выходящему за её пределы. `KeyError` же возбуждается при поиске несуществующего ключа в словаре. Важно различать эти исключения, так как они относятся к разным структурам данных.",
    "kind": "single",
    "id": "j432",
    "fixed": true
  },
  {
    "q": "Какое исключение вызовет обращение к `[1,2][5]`?",
    "options": [
      "IndexError",
      "KeyError",
      "ValueError",
      "TypeError"
    ],
    "answer": 0,
    "explain": "Исключение IndexError возникает при обращении к элементу последовательности по индексу, выходящему за допустимые границы. Для списка длиной 2 допустимы индексы 0 и 1. Ловушка в том, чтобы не спутать это с KeyError, который относится к словарям.",
    "kind": "single",
    "id": "j448",
    "fixed": true
  },
  {
    "q": "Какие исключения перехватывает `except:` без указания типа?",
    "options": [
      "Все исключения, включая системные",
      "Только потомков класса Exception",
      "Только ValueError и TypeError",
      "Это синтаксическая ошибка"
    ],
    "answer": 0,
    "explain": "Конструкция `except:` без указания класса перехватывает все исключения, включая системные (`SystemExit`, `KeyboardInterrupt`). Они наследуются от `BaseException`, поэтому `except Exception:` их не поймает, что является частой ловушкой.",
    "kind": "single",
    "id": "j456",
    "fixed": true
  }
);
