// @meta topic=exceptions group=Исключения и контекст
// middle · 11 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что в e?",
    "options": [
      "сообщение 'x'",
      "тип only",
      "traceback only",
      "ошибка"
    ],
    "answer": 0,
    "explain": "except ловит указанное исключение и продолжает выполнение → сообщение 'x'.",
    "kind": "single",
    "code": "try:\n    raise ValueError('x')\nexcept ValueError as e:\n    print(e)",
    "id": "m51",
    "fixed": true
  },
  {
    "q": "От какого класса наследует TypeError?",
    "options": [
      "Exception",
      "только object, минуя Exception",
      "всегда OSError",
      "BaseException напрямую, минуя Exception"
    ],
    "answer": 0,
    "explain": "TypeError — обычная ошибка: Exception → TypeError. except Exception его поймает.",
    "kind": "single",
    "id": "m109",
    "fixed": true
  },
  {
    "q": "От чего наследует FileNotFoundError?",
    "options": [
      "OSError (иерархия ошибок ОС/I/O)",
      "только object",
      "напрямую Exception, минуя OSError",
      "Warning"
    ],
    "answer": 0,
    "explain": "С PEP 3151 детализировали OSError: FileNotFoundError — его подкласс. except OSError поймает и его.",
    "kind": "single",
    "id": "m177",
    "fixed": true
  },
  {
    "q": "От чего наследует KeyboardInterrupt?",
    "options": [
      "BaseException (не Exception)",
      "только object",
      "Exception напрямую",
      "OSError"
    ],
    "answer": 0,
    "explain": "Ctrl+C → KeyboardInterrupt ⊂ BaseException. except Exception его не глотает — выход остаётся возможным.",
    "kind": "single",
    "id": "m203",
    "fixed": true
  },
  {
    "q": "От чего наследует ZeroDivisionError?",
    "options": [
      "ArithmeticError",
      "только OSError",
      "Warning",
      "StopIteration"
    ],
    "answer": 0,
    "explain": "ZeroDivisionError ⊂ ArithmeticError ⊂ Exception. except ArithmeticError поймает и его.",
    "kind": "single",
    "id": "m281",
    "fixed": true
  },
  {
    "q": "От чего наследует KeyError?",
    "options": [
      "LookupError",
      "OSError",
      "Warning",
      "StopIteration"
    ],
    "answer": 0,
    "explain": "KeyError ⊂ LookupError ⊂ Exception. IndexError тоже из LookupError.",
    "kind": "single",
    "id": "m333",
    "fixed": true
  },
  {
    "q": "Что делает BaseException.add_note в 3.11+?",
    "options": [
      "добавляет текстовую заметку к исключению",
      "меняет тип исключения",
      "удаляет traceback",
      "глушит логирование"
    ],
    "answer": 0,
    "explain": "add_note дополняет сообщение для отладки; заметки видны при печати исключения (__notes__).",
    "kind": "single",
    "id": "m372",
    "fixed": true
  },
  {
    "q": "От чего наследует ValueError?",
    "options": [
      "Exception",
      "OSError",
      "Warning",
      "BaseException напрямую минуя Exception"
    ],
    "answer": 0,
    "explain": "ValueError — обычная прикладная ошибка значения ⊂ Exception.",
    "kind": "single",
    "id": "m385",
    "fixed": true
  },
  {
    "q": "Что такое Exception.__notes__ (3.11+)?",
    "options": [
      "список дополнительных текстовых заметок к исключению",
      "стек вызовов",
      "код возврата процесса",
      "уровень логирования"
    ],
    "answer": 0,
    "explain": "add_note наполняет __notes__; они печатаются вместе с исключением.",
    "kind": "single",
    "id": "m397",
    "fixed": true
  },
  {
    "q": "От чего наследует IndexError?",
    "options": [
      "LookupError",
      "OSError",
      "Warning",
      "StopIteration"
    ],
    "answer": 0,
    "explain": "IndexError ⊂ LookupError, рядом с KeyError.",
    "kind": "single",
    "id": "m409",
    "fixed": true
  },
  {
    "q": "От чего наследует StopIteration?",
    "options": [
      "Exception",
      "BaseException напрямую минуя Exception",
      "OSError",
      "Warning"
    ],
    "answer": 0,
    "explain": "StopIteration ⊂ Exception. GeneratorExit — уже из BaseException (не глотать в except Exception вслепую в генераторах — отдельная тема).",
    "kind": "single",
    "id": "m452",
    "fixed": true
  }
);
