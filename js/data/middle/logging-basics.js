// @meta topic=логирование group=Тесты и качество
// middle · 1 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Чем в библиотеках лучше заменить print для диагностики?",
    "options": [
      "модулем logging с уровнями и обработчиками",
      "только sys.stdout.write без уровней",
      "обязательно warnings.warn на каждое сообщение",
      "print в stderr через f-string — этого достаточно в проде"
    ],
    "answer": 0,
    "explain": "logging даёт уровни, фильтры, хендлеры и отключение шума. print нельзя централизованно настроить в приложении, которое использует твою библиотеку.",
    "kind": "single",
    "id": "m7",
    "fixed": true
  }
);
