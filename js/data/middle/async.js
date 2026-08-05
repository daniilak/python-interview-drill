// @meta topic=async group=Asyncio
// middle · 3 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Зачем нужен async for?",
    "options": [
      "чтобы итерировать async-итераторы (__aiter__/__anext__) без блокировки loop",
      "чтобы быстрее обходить обычный list",
      "вместо multiprocessing.Pool",
      "чтобы запретить for в корутинах"
    ],
    "answer": 0,
    "explain": "async for ждёт __anext__ у асинхронного итератора (потоки данных, курсоры). Обычный list обходят обычным for — async for ему не нужен.",
    "kind": "single",
    "id": "m65",
    "fixed": true
  },
  {
    "q": "Что меняет asyncio.gather(..., return_exceptions=True)?",
    "options": [
      "исключения кладутся в список результатов вместо немедленного raise",
      "все задачи молча отменяются",
      "gather начинает работать только с sync-функциями",
      "event loop останавливается"
    ],
    "answer": 0,
    "explain": "По умолчанию первая ошибка пробрасывается. С return_exceptions=True получишь смесь результатов и exception-объектов.",
    "kind": "single",
    "id": "m136",
    "fixed": true
  },
  {
    "q": "Зачем нужен async with?",
    "options": [
      "для асинхронных контекстных менеджеров (__aenter__/__aexit__)",
      "замена любого with синхронного всегда",
      "только для print",
      "отключение event loop"
    ],
    "answer": 0,
    "explain": "Ресурсы с await на входе/выходе (Lock, сессии aiohttp) требуют async with.",
    "kind": "single",
    "id": "m441",
    "fixed": true
  }
);
