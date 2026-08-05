// @meta topic=errors group=Исключения и контекст
// senior · 12 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Чем отличаются Exception.__notes__, __context__ и __cause__?",
    "options": [
      "notes — текстовые подсказки; context — цепочка при перехвате; cause — явное from",
      "все три — синонимы одного поля",
      "только для logging, не попадают в traceback",
      "работают только в Python 2"
    ],
    "answer": 0,
    "explain": "__context__ ставится при except без raise from. __cause__ — при raise New from Old. __notes__ (3.11) — список строк, дополняющих сообщение. Разные слои отладки одной ошибки.",
    "kind": "single",
    "id": "s9",
    "fixed": true
  },
  {
    "q": "Что происходит, если except* поймал только часть ExceptionGroup?",
    "options": [
      "непойманные исключения из группы продолжают всплывать",
      "вся группа всегда глотается целиком",
      "синтаксическая ошибка — except* только в 3.8",
      "остаток автоматически превращается в BaseException"
    ],
    "answer": 0,
    "explain": "except* (PEP 654) матчит подмножество по типам. Обработанные исключения извлекаются, остаток группы — если не пуст — пробрасывается дальше.",
    "kind": "single",
    "id": "s26",
    "fixed": true
  },
  {
    "q": "Чем except* отличается от raise ExceptionGroup вручную?",
    "options": [
      "except* ловит и фильтрует подгруппы; raise создаёт группу исключений",
      "это синонимы одного синтаксиса",
      "except* удаляет traceback навсегда",
      "работает только в синхронном коде без async"
    ],
    "answer": 0,
    "explain": "raise ExceptionGroup('msg', [e1, e2]) объединяет ошибки. except* TypeError ловит только TypeError из группы, остальное пробрасывает. Пара для TaskGroup/async gather.",
    "kind": "single",
    "id": "s43",
    "fixed": true
  },
  {
    "q": "С каким типом работает except* (Python 3.11+)?",
    "options": [
      "ExceptionGroup и BaseExceptionGroup",
      "любым Exception как обычный except",
      "только SyntaxError",
      "только внутри asyncio без sync"
    ],
    "answer": 0,
    "explain": "except* — синтаксис для групп: except* ValueError ловит ValueError из ExceptionGroup. Обычный except ExceptionGroup ловит всю группу целиком.",
    "kind": "single",
    "id": "s60",
    "fixed": true
  },
  {
    "q": "Что делает ExceptionGroup.split(predicate)?",
    "options": [
      "делит группу на подходящие и оставшиеся исключения",
      "пишет группу только в logging",
      "удаляет traceback у всех вложенных",
      "превращает группу в tuple return value"
    ],
    "answer": 0,
    "explain": "split(fn) возвращает (matched_subgroup, rest). Удобно обрабатывать часть ошибок программно до except*. Аналог фильтрации по типу/условию.",
    "kind": "single",
    "id": "s76",
    "fixed": true
  },
  {
    "q": "Когда нужен ExceptionGroup (3.11)?",
    "options": [
      "несколько независимых ошибок параллельно (TaskGroup, gather)",
      "вместо любого одиночного Exception",
      "только для SyntaxError при парсинге",
      "когда нужно скрыть traceback"
    ],
    "answer": 0,
    "explain": "asyncio.TaskGroup при двух упавших задачах поднимает ExceptionGroup с обеими. Один except Exception не разделит — нужен except* или обход .exceptions.",
    "kind": "single",
    "id": "s92",
    "fixed": true
  },
  {
    "q": "Что делает BaseExceptionGroup.subgroup(condition)?",
    "options": [
      "возвращает подгруппу исключений, удовлетворяющих условию",
      "удаляет все исключения из группы",
      "превращает группу в строку лога",
      "вызывает sys.exit"
    ],
    "answer": 0,
    "explain": "subgroup(lambda e: isinstance(e, ValueError)) — новая группа только из ValueError. Остаток — через .split() или повторный subgroup. API PEP 654.",
    "kind": "single",
    "id": "s108",
    "fixed": true
  },
  {
    "q": "Зачем скрывать/фильтровать фреймы в traceback?",
    "options": [
      "убрать шум библиотек, оставить полезный стек приложения",
      "удалить само исключение",
      "писать только в logging, не в stderr",
      "отключить ExceptionGroup"
    ],
    "answer": 0,
    "explain": "traceback.hide() (3.11+) и __tracebackhide__ в pytest сокращают стек внутри фреймворков. Механика зависит от версии — цель одна: читаемость.",
    "kind": "single",
    "id": "s124",
    "fixed": true
  },
  {
    "q": "Как ExceptionGroup связан с asyncio.gather / TaskGroup?",
    "options": [
      "несколько ошибок из параллельных задач собираются в одну группу (3.11+)",
      "только для logging без raise",
      "замена return (result, error) tuple",
      "работает только в sync коде"
    ],
    "answer": 0,
    "explain": "TaskGroup: первая ошибка отменяет siblings, финально ExceptionGroup со всеми. gather(return_exceptions=True) — другой API, но идея «много ошибок сразу» та же.",
    "kind": "single",
    "id": "s140",
    "fixed": true
  },
  {
    "q": "Что делает raise ExceptionGroup('msg', [e1, e2])?",
    "options": [
      "пробрасывает несколько исключений как одну группу",
      "удаляет e1 и e2 из traceback",
      "заменяет BaseException на Exception",
      "работает только в Python 2"
    ],
    "answer": 0,
    "explain": "PEP 654: один raise, несколько причин. except* ловит по типам. Отличие от raise e from e2 — явная группа параллельных ошибок.",
    "kind": "single",
    "id": "s156",
    "fixed": true
  },
  {
    "q": "Что делает __context__ при raise нового исключения внутри except?",
    "options": [
      "автоматически связывает с непойманным исключением из except-блока",
      "то же самое, что явный raise ... from exc",
      "удаляет traceback предыдущего исключения",
      "работает только в Python 2"
    ],
    "answer": 0,
    "explain": "Без from Python ставит __context__ на активное исключение. Явный from задаёт __cause__ и подавляет context. Оба видны в traceback.",
    "kind": "single",
    "id": "s171",
    "fixed": true
  },
  {
    "q": "Зачем ExceptionGroup (3.11) и except*?",
    "options": [
      "обрабатывать несколько независимых исключений из asyncio/TaskGroup и подобного",
      "заменить BaseException для всех ошибок",
      "отключить traceback при групповых ошибках",
      "сериализовать исключения в JSON"
    ],
    "answer": 0,
    "explain": "TaskGroup может поднять ExceptionGroup с несколькими ошибками. except* ловит подтипы внутри группы, не смешивая несвязанные исключения.",
    "kind": "single",
    "id": "s186",
    "fixed": true
  }
);
