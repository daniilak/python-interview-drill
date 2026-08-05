// @meta topic=context group=Исключения и контекст
// middle · 20 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Когда нужен contextlib.ExitStack.enter_context?",
    "options": [
      "когда число context manager'ов известно только в рантайме",
      "когда достаточно одного обычного with",
      "вместо любого try/except",
      "только для async with"
    ],
    "answer": 0,
    "explain": "ExitStack позволяет в цикле/по условию открывать произвольное число CM и гарантированно закрыть все при выходе. Для одного фиксированного with он не нужен. Для async есть AsyncExitStack.",
    "kind": "single",
    "id": "m6",
    "fixed": true
  },
  {
    "q": "Что делает contextlib.closing(obj) при выходе из with?",
    "options": [
      "вызывает obj.close()",
      "делает del obj",
      "вызывает obj.end()",
      "только подавляет исключения"
    ],
    "answer": 0,
    "explain": "closing оборачивает объект без протокола CM и на выходе зовёт close(). Удобно для urlopen и похожих API.",
    "kind": "single",
    "id": "m21",
    "fixed": true
  },
  {
    "q": "Зачем нужен contextlib.nullcontext?",
    "options": [
      "как пустая заглушка CM, когда with нужен условно",
      "чтобы подавить все исключения как suppress(BaseException)",
      "чтобы открыть файл",
      "чтобы заменить async with"
    ],
    "answer": 0,
    "explain": "nullcontext() — no-op context manager. Удобно писать один with, а CM выбирать: реальный или nullcontext(), если ничего делать не надо.",
    "kind": "single",
    "id": "m66",
    "fixed": true
  },
  {
    "q": "Что делает contextlib.redirect_stdout?",
    "options": [
      "временно подменяет sys.stdout на другой поток",
      "настраивает logging.handlers",
      "запускает subprocess",
      "работает только с pathlib.Path"
    ],
    "answer": 0,
    "explain": "Redirect_stdout(new_target) на время with перенаправляет print/stdout. Удобно тестировать CLI. Это не logging и не subprocess.",
    "kind": "single",
    "id": "m81",
    "fixed": true
  },
  {
    "q": "Как открыть два контекста без ExitStack?",
    "options": [
      "вложить with или написать with a, b",
      "никак — ExitStack обязателен всегда",
      "только через async with",
      "нужно удерживать GIL вручную"
    ],
    "answer": 0,
    "explain": "Фиксированное число CM: `with a, b:` или вложенность. ExitStack нужен, когда набор CM динамический.",
    "kind": "single",
    "id": "m95",
    "fixed": true
  },
  {
    "q": "Что напечатает?",
    "options": [
      "enter\nbody\nexit",
      "body\nenter\nexit",
      "enter\nexit\nbody",
      "ошибка"
    ],
    "answer": 0,
    "explain": "with вызывает __enter__, тело, затем __exit__. Вывод: enter\nbody\nexit.",
    "kind": "single",
    "code": "class CM:\n    def __enter__(self):\n        print('enter')\n        return self\n    def __exit__(self, *a):\n        print('exit')\nwith CM():\n    print('body')",
    "id": "m123",
    "fixed": true
  },
  {
    "q": "Что делает ExitStack.callback(...)",
    "options": [
      "регистрирует произвольный teardown-колбэк на выход из стека",
      "умеет входить только в context manager'ы, не в голые функции",
      "заменяет sys.excepthook",
      "включает GC"
    ],
    "answer": 0,
    "explain": "callback регистрирует функцию, которая вызовется при раскрутке ExitStack — удобно для ручной очистки без CM.",
    "kind": "single",
    "id": "m137",
    "fixed": true
  },
  {
    "q": "Можно ли передать в contextlib.suppress несколько типов исключений?",
    "options": [
      "да — suppress(TypeError, ValueError) и т.п.",
      "нет — только один тип за раз",
      "только BaseException целиком",
      "только строки с именами ошибок"
    ],
    "answer": 0,
    "explain": "Suppress(*exceptions) принимает несколько типов: внутри with эти исключения глотаются. Удобно вместо длинного try/except pass.",
    "kind": "single",
    "id": "m164",
    "fixed": true
  },
  {
    "q": "Что будет, если __exit__ вернул True?",
    "options": [
      "исключение из with-блока подавляется",
      "исключение всегда пробрасывается снова",
      "закрывается GIL",
      "return из функции игнорируется"
    ],
    "answer": 0,
    "explain": "True из __exit__ означает «я обработал исключение». False/None — проброс дальше. Так работает contextlib.suppress.",
    "kind": "single",
    "id": "m216",
    "fixed": true
  },
  {
    "q": "Как открыть три контекста без ExitStack?",
    "options": [
      "вложить with или написать with a, b, c",
      "нельзя — ExitStack обязателен",
      "только async with",
      "только через try/finally вручную без with"
    ],
    "answer": 0,
    "explain": "Фиксированный набор CM: синтаксис with a, b, c. ExitStack — когда набор динамический.",
    "kind": "single",
    "id": "m229",
    "fixed": true
  },
  {
    "q": "Для чего contextlib.aclosing?",
    "options": [
      "async-аналог closing: на выходе await obj.aclose()",
      "только для sync close()",
      "замена async with навсегда",
      "отключение event loop"
    ],
    "answer": 0,
    "explain": "aclosing гарантирует aclose() у async-генераторов/ресурсов при выходе из async with.",
    "kind": "single",
    "id": "m242",
    "fixed": true
  },
  {
    "q": "Что делает contextlib.suppress(FileNotFoundError)?",
    "options": [
      "молча пропускает FileNotFoundError внутри with",
      "создаёт отсутствующий файл",
      "глушит все BaseException",
      "логирует ошибку обязательно"
    ],
    "answer": 0,
    "explain": "suppress(*exceptions) — узкий try/except pass для указанных типов. Остальное пробрасывается.",
    "kind": "single",
    "id": "m255",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "enter\nexit",
      "exit\nenter",
      "только enter",
      "ошибка"
    ],
    "answer": 0,
    "explain": "with вызывает __enter__ (печатает enter), затем тело, затем __exit__ (печатает exit).",
    "kind": "single",
    "code": "class CM:\n    def __enter__(self):\n        print('enter')\n        return self\n    def __exit__(self, *a):\n        print('exit')\nwith CM():\n    pass",
    "id": "m294",
    "fixed": true
  },
  {
    "q": "Нужен ли ExitStack для одного фиксированного with?",
    "options": [
      "нет — достаточно обычного with",
      "да, ExitStack обязателен всегда",
      "только async ExitStack",
      "только с GIL"
    ],
    "answer": 0,
    "explain": "ExitStack нужен при динамическом числе CM. Один-два известных — обычный with.",
    "kind": "single",
    "id": "m307",
    "fixed": true
  },
  {
    "q": "Что такое ContextDecorator?",
    "options": [
      "база, чтобы объект был и context manager, и decorator",
      "только async CM",
      "замена ExitStack",
      "фикстура pytest"
    ],
    "answer": 0,
    "explain": "contextlib.ContextDecorator позволяет писать класс, работающий и как with, и как @decorator.",
    "kind": "single",
    "id": "m320",
    "fixed": true
  },
  {
    "q": "Что должен реализовать контекстный менеджер?",
    "options": [
      "__enter__ и __exit__",
      "только __call__",
      "только __iter__",
      "только close()"
    ],
    "answer": 0,
    "explain": "Протокол with: __enter__ при входе, __exit__ при выходе (и при исключении).",
    "kind": "single",
    "id": "m346",
    "fixed": true
  },
  {
    "q": "Зачем нужен contextlib.ExitStack?",
    "options": [
      "динамически набирать и гарантированно закрывать набор контекстов",
      "заменить любой with одним print",
      "только для async",
      "ускорить open()"
    ],
    "answer": 0,
    "explain": "Когда число CM неизвестно заранее — enter_context в цикле, выход закроет все в обратном порядке.",
    "kind": "single",
    "id": "m420",
    "fixed": true
  },
  {
    "q": "Во что превращает @contextlib.contextmanager генератор?",
    "options": [
      "в контекстный менеджер (__enter__/__exit__)",
      "в async iterator обязательно",
      "в thread lock",
      "в dataclass"
    ],
    "answer": 0,
    "explain": "Код до yield — вход, после — выход/очистка. Исключения пробрасываются в генератор.",
    "kind": "single",
    "id": "m431",
    "fixed": true
  },
  {
    "q": "Что такое contextlib.asynccontextmanager?",
    "options": [
      "превращает async-генератор в async context manager",
      "только синхронный CM",
      "замена create_task",
      "фикстура pytest"
    ],
    "answer": 0,
    "explain": "Аналог @contextmanager, но с async def и await до/после yield.",
    "kind": "single",
    "id": "m442",
    "fixed": true
  },
  {
    "q": "Что делает contextlib.chdir (3.11+)?",
    "options": [
      "временно меняет текущую рабочую директорию внутри with",
      "удаляет каталог",
      "только читает cwd без смены",
      "меняет PYTHONPATH"
    ],
    "answer": 0,
    "explain": "На входе os.chdir(path), на выходе возврат прежнего cwd — даже при исключении.",
    "kind": "single",
    "id": "m470",
    "fixed": true
  }
);
