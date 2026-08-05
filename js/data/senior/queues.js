// @meta topic=queues group=Данные и распределёнка
// senior · 3 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "В чём риск fairness у priority queue?",
    "options": [
      "задачи с низким приоритетом могут голодать (starvation)",
      "высокий приоритет всегда медленнее",
      "очередь не может хранить больше одного элемента",
      "приоритеты запрещены в Python"
    ],
    "answer": 0,
    "explain": "Пока сыплются high-priority, low может не обслуживаться. Лечи aging/квотами/отдельными очередями.",
    "kind": "single",
    "id": "s708",
    "fixed": true
  },
  {
    "q": "Зачем maxsize у Queue?",
    "options": [
      "backpressure: put блокируется/ждёт, когда очередь полна",
      "ускорить get без лимита",
      "отключить потоки",
      "сделать unbounded обязательно"
    ],
    "answer": 0,
    "explain": "Ограниченная очередь защищает память и давит на производителя при перегрузе.",
    "kind": "single",
    "id": "s774",
    "fixed": true
  },
  {
    "q": "Чем asyncio.Queue отличается от queue.Queue?",
    "options": [
      "asyncio.Queue — для корутин/event loop; queue.Queue — для OS-потоков",
      "разницы нет",
      "asyncio.Queue блокирует OS thread на put",
      "queue.Queue только async"
    ],
    "answer": 0,
    "explain": "Не мешай: thread-queue в async коде блокирует loop; asyncio.Queue — await put/get.",
    "kind": "single",
    "id": "s835",
    "fixed": true
  }
);
