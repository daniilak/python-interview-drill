// @meta topic=caching group=Данные и распределёнка
// senior · 2 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "На чём часто строят ручной LRU-кэш?",
    "options": [
      "OrderedDict или functools.lru_cache",
      "list.pop(0) как идеальный O(1) LRU",
      "queue.Queue без учёта частоты",
      "set без порядка"
    ],
    "answer": 0,
    "explain": "OrderedDict: move_to_end при hit, popitem(last=False) вытесняет LRU. lru_cache — готовое C-реализация для чистых функций. list.pop(0) — O(n).",
    "kind": "single",
    "id": "s136",
    "fixed": true
  },
  {
    "q": "Что такое request coalescing?",
    "options": [
      "несколько одновременных miss по одному ключу ждут один origin-fetch",
      "слияние HTTP-запросов разных пользователей в один cookie",
      "отключение кэша при пиковой нагрузке",
      "batch INSERT вместо SELECT в ORM"
    ],
    "answer": 0,
    "explain": "Singleflight / request coalescing: первый промах идёт в БД, остальные await тот же Future. Снижает thundering herd на hot key.",
    "kind": "single",
    "id": "s606",
    "fixed": true
  }
);
