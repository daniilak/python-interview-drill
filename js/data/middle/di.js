// @meta topic=DI group=Веб и API
// middle · 6 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что такое composition root?",
    "options": [
      "место, где собирают граф зависимостей приложения",
      "когда каждый модуль сам делает new зависимостей",
      "случайный global singleton",
      "побочный эффект на import модуля"
    ],
    "answer": 0,
    "explain": "Composition root — обычно main/bootstrap: там связывают реализации с портами. Остальной код принимает зависимости явно, а не разбрасывает new/global.",
    "kind": "single",
    "id": "m418",
    "fixed": true
  },
  {
    "q": "Как выглядит Interface Segregation в typing?",
    "options": [
      "узкие Protocol вместо одного жирного интерфейса",
      "один ABC на 50 методов всегда",
      "запрет Protocol",
      "только Any"
    ],
    "answer": 0,
    "explain": "ISP: завись от маленьких контрактов Readable/Writable, а не от MegaService.",
    "kind": "single",
    "id": "m665",
    "fixed": true
  },
  {
    "q": "Чем помогает Dependency Injection?",
    "options": [
      "тестируемости и слабой связанности (зависимости снаружи)",
      "ускорению CPU обязательно",
      "скрытию всех зависимостей в глобалах",
      "замене типов"
    ],
    "answer": 0,
    "explain": "Передаёшь db/client в конструктор — в тесте подменяешь моком. Против жёсткого new Inside.",
    "kind": "single",
    "id": "m709",
    "fixed": true
  },
  {
    "q": "Когда ambient context — антипаттерн?",
    "options": [
      "когда зависимости спрятаны в скрытых глобалах/thread-locals без явного контракта",
      "всегда при любом contextvars",
      "только в C",
      "никогда"
    ],
    "answer": 0,
    "explain": "Неявный «текущий пользователь» усложняет тесты и рассуждения. Contextvars уместны осознанно.",
    "kind": "single",
    "id": "m713",
    "fixed": true
  },
  {
    "q": "Что такое constructor injection?",
    "options": [
      "зависимости передаются через __init__",
      "поиск сервиса в глобальном registry внутри метода",
      "только setter injection",
      "import внутри функции всегда"
    ],
    "answer": 0,
    "explain": "Явные аргументы конструктора — самый прямой и тестируемый вид DI.",
    "kind": "single",
    "id": "m717",
    "fixed": true
  },
  {
    "q": "Чем injection лучше service locator?",
    "options": [
      "зависимости явнее и обычно тестируемее",
      "locator всегда быстрее",
      "разницы нет",
      "injection запрещён в Python"
    ],
    "answer": 0,
    "explain": "Service locator прячет зависимости внутри — сложнее видеть контракт. DI передаёт их снаружи.",
    "kind": "single",
    "id": "m761",
    "fixed": true
  }
);
