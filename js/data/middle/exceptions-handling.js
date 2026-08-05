// @meta topic=исключения group=Исключения и контекст
// middle · 5 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что не ловит `except Exception`?",
    "options": [
      "потомков BaseException вроде KeyboardInterrupt и SystemExit",
      "обычный ValueError",
      "RuntimeError",
      "TypeError"
    ],
    "answer": 0,
    "explain": "Exception — ветка «обычных» ошибок. KeyboardInterrupt/SystemExit наследуют BaseException напрямую и except Exception их не глотает — это сделано нарочно.",
    "kind": "single",
    "id": "m36",
    "fixed": true
  },
  {
    "q": "Что связывает конструкция raise X from Y?",
    "options": [
      "__cause__ — явную цепочку исключений",
      "только текст message",
      "удаляет traceback",
      "заменяет sys.exc_info навсегда"
    ],
    "answer": 0,
    "explain": "`raise New from old` ставит __cause__ (explicit chaining). Traceback не стирается — наоборот, оба видны.",
    "kind": "single",
    "id": "m151",
    "fixed": true
  },
  {
    "q": "Что вернёт except* (3.11) ловит?",
    "options": [
      "подисключения ExceptionGroup",
      "только async",
      "BaseExceptionGroup нельзя",
      "синтаксис 3.8"
    ],
    "answer": 0,
    "explain": "PEP 654 — Исключения лучше ловить точечно: широкий except Exception маскирует настоящие ошибки.",
    "kind": "single",
    "id": "m268",
    "fixed": true
  },
  {
    "q": "Что делает contextlib.suppress(SomeError)?",
    "options": [
      "игнорирует указанные типы исключений внутри with",
      "логирует и пробрасывает всегда",
      "создаёт файл при ошибке",
      "глушит BaseException целиком по умолчанию"
    ],
    "answer": 0,
    "explain": "Узкий try/except pass для перечисленных типов. Остальное не глотается.",
    "kind": "single",
    "id": "m359",
    "fixed": true
  },
  {
    "q": "Что верно про except Exception as e: — e доступен?",
    "options": [
      "в блоке except (и очищается после в 3)",
      "глобально",
      "в finally всегда",
      "никогда"
    ],
    "answer": 0,
    "explain": "Имя исключения — Исключения лучше ловить точечно: широкий except Exception маскирует настоящие ошибки.",
    "kind": "single",
    "id": "m461",
    "fixed": true
  }
);
