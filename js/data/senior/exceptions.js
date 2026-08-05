// @meta topic=exceptions group=Исключения и контекст
// senior · 1 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Чем BaseException отличается от Exception?",
    "options": [
      "SystemExit и KeyboardInterrupt наследуют BaseException, не Exception",
      "Exception — корень всех типов в Python",
      "BaseException ловится обычным except Exception",
      "разницы нет, это алиасы"
    ],
    "answer": 0,
    "explain": "except Exception не ловит SystemExit/KeyboardInterrupt — они для выхода и прерывания. GeneratorExit тоже вне Exception.",
    "kind": "single",
    "id": "s201",
    "fixed": true
  }
);
