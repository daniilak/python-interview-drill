// @meta topic=threading group=Потоки, процессы, GIL
// middle · 10 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Чем threading.RLock отличается от Lock?",
    "options": [
      "тот же поток может захватить RLock повторно (реентерабельность)",
      "RLock всегда быстрее Lock",
      "RLock работает между процессами",
      "RLock можно использовать только в asyncio"
    ],
    "answer": 0,
    "explain": "Обычный Lock повторный acquire тем же потоком — deadlock. RLock считает глубину захвата. Для процессов — другие примитивы multiprocessing.",
    "kind": "single",
    "id": "m86",
    "fixed": true
  },
  {
    "q": "В чём практическая разница Lock и RLock?",
    "options": [
      "RLock тот же поток может взять повторно; обычный Lock — нет",
      "Lock всегда быстрее и тоже reentrant",
      "это одно и то же под разными именами",
      "RLock существует только в asyncio"
    ],
    "answer": 0,
    "explain": "Нужен ли reentrancy — главный критерий выбора. Оба — для потоков одного процесса, не для multiprocessing.",
    "kind": "single",
    "id": "m128",
    "fixed": true
  },
  {
    "q": "Что даёт threading.local()?",
    "options": [
      "хранилище, своё для каждого потока",
      "общую память между процессами",
      "contextvars для asyncio",
      "файловый lock ОС"
    ],
    "answer": 0,
    "explain": "thread-local: у каждого Thread свои атрибуты на local(). Для процессов не шарится; для async-задач смотри contextvars.",
    "kind": "single",
    "id": "m156",
    "fixed": true
  },
  {
    "q": "Для чего threading.Barrier на N потоков?",
    "options": [
      "чтобы N потоков встретились в одной точке синхронизации",
      "это обычный Lock на один поток",
      "это asyncio.gather",
      "барьер ядра ОС между процессами"
    ],
    "answer": 0,
    "explain": "Barrier.wait() блокирует, пока не соберётся parties потоков, затем отпускает всех. Не путать с process-барьерами.",
    "kind": "single",
    "id": "m182",
    "fixed": true
  },
  {
    "q": "Что делает threading.Timer?",
    "options": [
      "запускает функцию в отдельном потоке после delay секунд",
      "это asyncio.sleep",
      "ставит системный cron",
      "блокирует главный поток без нового Thread"
    ],
    "answer": 0,
    "explain": "Timer — Thread с отложенным start. Не cron ОС и не корутина.",
    "kind": "single",
    "id": "m195",
    "fixed": true
  },
  {
    "q": "Что такое threading.Condition?",
    "options": [
      "монитор: lock плюс wait/notify для ожидания условия",
      "то же самое, что Event, без lock",
      "примитив только для asyncio",
      "примитив только для multiprocessing"
    ],
    "answer": 0,
    "explain": "Condition = lock + wait/notify_all. Поток ждёт условия под локом и просыпается по notify. Event проще (флаг), Condition — классический монитор.",
    "kind": "single",
    "id": "m208",
    "fixed": true
  },
  {
    "q": "Для каких задач хорошо подходит threading в CPython?",
    "options": [
      "I/O-bound: сеть, диск, ожидание",
      "чистый CPU-bound Python без native",
      "вместо любых процессов всегда",
      "только GUI на macOS"
    ],
    "answer": 0,
    "explain": "Пока поток ждёт I/O, другие могут работать. CPU-байткод упирается в GIL.",
    "kind": "single",
    "id": "m312",
    "fixed": true
  },
  {
    "q": "Для чего threading.Event?",
    "options": [
      "сигнализация между потоками: wait/set/clear",
      "замена multiprocessing.Queue",
      "async sleep",
      "файловый lock"
    ],
    "answer": 0,
    "explain": "Event — флаг: один поток set(), другие wait(). Проще Condition, когда нужно только «случилось».",
    "kind": "single",
    "id": "m325",
    "fixed": true
  },
  {
    "q": "Что будет, если тот же поток второй раз сделает Lock.acquire() без RLock?",
    "options": [
      "дедлок — поток ждёт сам себя",
      "счётчик увеличится как у RLock",
      "ошибка TypeError сразу",
      "lock молча игнорируется"
    ],
    "answer": 0,
    "explain": "Не-реентерабельный Lock повторно из того же потока не отпускается → deadlock. Нужен RLock.",
    "kind": "single",
    "id": "m338",
    "fixed": true
  },
  {
    "q": "Что будет с daemon-потоком при выходе main?",
    "options": [
      "он может оборваться, не дождавшись завершения",
      "всегда join'ится автоматически до конца",
      "превращается в процесс",
      "становится non-daemon"
    ],
    "answer": 0,
    "explain": "daemon=True не удерживает процесс. Критичную работу не оставляй только в daemon без join.",
    "kind": "single",
    "id": "m390",
    "fixed": true
  }
);
