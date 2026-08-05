// @meta topic=subprocess group=Stdlib и производительность
// middle · 8 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что делает timeout у subprocess.run?",
    "options": [
      "по истечении убивает процесс и бросает TimeoutExpired",
      "только пишет warning в stderr",
      "игнорирует лимит на Windows",
      "меняет приоритет nice"
    ],
    "answer": 0,
    "explain": "run(..., timeout=N) ждёт не дольше N секунд, затем terminate/kill (с нюансами) и TimeoutExpired.",
    "kind": "single",
    "id": "m127",
    "fixed": true
  },
  {
    "q": "Чему эквивалентен capture_output=True в subprocess.run?",
    "options": [
      "stdout=PIPE и stderr=PIPE",
      "stdout=DEVNULL",
      "shell=True",
      "check=True"
    ],
    "answer": 0,
    "explain": "Удобный флаг 3.7+: результат в CompletedProcess.stdout/stderr.",
    "kind": "single",
    "id": "m698",
    "fixed": true
  },
  {
    "q": "Для чего subprocess.DEVNULL?",
    "options": [
      "подавить stdout/stderr (как /dev/null)",
      "обязательный pipe",
      "интерактивный TTY",
      "файл логов с ротацией"
    ],
    "answer": 0,
    "explain": "stdout=DEVNULL — не копим вывод, не видим его.",
    "kind": "single",
    "id": "m714",
    "fixed": true
  },
  {
    "q": "Что делает capture_output=True в run?",
    "options": [
      "собирает stdout и stderr в результат",
      "печатает на консоль принудительно",
      "включает shell",
      "игнорирует код возврата"
    ],
    "answer": 0,
    "explain": "См. CompletedProcess.stdout/stderr. Часто вместе с text=True.",
    "kind": "single",
    "id": "m765",
    "fixed": true
  },
  {
    "q": "Что делает check=True в subprocess.run?",
    "options": [
      "бросит CalledProcessError при ненулевом коде возврата",
      "игнорирует код возврата",
      "включает shell",
      "таймаут"
    ],
    "answer": 0,
    "explain": "Без check=True нужно самому смотреть returncode.",
    "kind": "single",
    "id": "m816",
    "fixed": true
  },
  {
    "q": "В чём риск shell=True в subprocess?",
    "options": [
      "инъекции команд через пользовательскую строку",
      "обязательное ускорение",
      "запрет PIPE",
      "только на Windows безопаснее"
    ],
    "answer": 0,
    "explain": "Передавай список аргументов без shell. shell=True — только для доверенных строк.",
    "kind": "single",
    "id": "m828",
    "fixed": true
  },
  {
    "q": "Что делает Popen.communicate?",
    "options": [
      "отправляет input, читает stdout/stderr и ждёт завершения",
      "только kill",
      "меняет cwd",
      "включает shell"
    ],
    "answer": 0,
    "explain": "Избегает дедлоков PIPE. Возвращает (stdout, stderr).",
    "kind": "single",
    "id": "m866",
    "fixed": true
  },
  {
    "q": "Что даёт text=True в subprocess?",
    "options": [
      "stdout/stderr как str (декодирование), не bytes",
      "обязательный TTY",
      "shell=True",
      "UTF-32"
    ],
    "answer": 0,
    "explain": "Раньше universal_newlines=True. encoding= можно задать явно.",
    "kind": "single",
    "id": "m886",
    "fixed": true
  }
);
