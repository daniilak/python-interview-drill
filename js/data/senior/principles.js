// @meta topic=принципы group=Архитектура и дизайн
// senior · 7 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Defensive programming vs fail fast — что уместнее?",
    "options": [
      "fail fast на границе; внутри — инварианты и assert",
      "глотать все исключения try/except pass",
      "никаких проверок для скорости",
      "только logging вместо ошибок"
    ],
    "answer": 0,
    "explain": "На API-границе валидируй и падай явно. Внутри домена — assert на инварианты (под -O отключаются). Не маскируй баги.",
    "kind": "single",
    "id": "s470",
    "fixed": true
  },
  {
    "q": "Чем помогает Unit-тесты мокают Repository через Protocol —?",
    "options": [
      "DIP: домен зависит от абстракции, тест подставляет fake без БД",
      "нарушение ISP — клиент видит лишние методы",
      "замена статической типизации на duck typing",
      "обязательное использование SQLAlchemy в проде"
    ],
    "answer": 0,
    "explain": "Protocol описывает контракт хранилища; в тесте InMemoryRepo. Dependency Inversion — высокоуровневый код не тянет psycopg. Тесты быстрые и изолированные.",
    "kind": "single",
    "id": "s608",
    "fixed": true
  },
  {
    "q": "Микросервис на 50 строк дублирует валидацию из монолита без общей библиотеки — что нарушено?",
    "options": [
      "DRY на уровне организации — знание размазано и расходится",
      "SRP — слишком много ответственности в одном файле",
      "LSP — подтип не подставляется",
      "Open/Closed — нельзя расширять без модификации"
    ],
    "answer": 0,
    "explain": "Дублирование правил валидации в N сервисах: исправил в одном — забыли в другом. Shared library, OpenAPI schema, или validation-as-a-service.",
    "kind": "single",
    "id": "s623",
    "fixed": true
  },
  {
    "q": "Абстрактная фабрика для единственного if в учебном скрипте — что нарушено?",
    "options": [
      "KISS / YAGNI — лишняя абстракция без выгоды",
      "SRP — слишком много классов",
      "LSP — фабрика не подтип",
      "ISP — мало методов в интерфейсе"
    ],
    "answer": 0,
    "explain": "Паттерн оправдан при семействах продуктов и смене платформ. Один if platform — проще функции. Не строить enterprise на hello world.",
    "kind": "single",
    "id": "s650",
    "fixed": true
  },
  {
    "q": "Что такое Tell, don't ask?",
    "options": [
      "просить объект выполнить действие, а не вытаскивать данные и решать снаружи",
      "запрет на публичные методы",
      "только getter без setter",
      "обязательный CQRS"
    ],
    "answer": 0,
    "explain": "Плохо: if user.balance >= price: user.balance -= price. Лучше: user.purchase(price) — инварианты внутри. Меньше feature envy.",
    "kind": "single",
    "id": "s688",
    "fixed": true
  },
  {
    "q": "Что такое Fail fast в API?",
    "options": [
      "ранняя валидация входа и явная ошибка до тяжёлой работы",
      "игнорировать невалидный input и возвращать 200",
      "retry до успеха при любой ошибке клиента",
      "отложить все проверки до commit в БД"
    ],
    "answer": 0,
    "explain": "422 на bad JSON сразу, не держать connection до timeout SQL. Экономит ресурсы и даёт клиенту быстрый feedback. Pydantic на границе — fail fast.",
    "kind": "single",
    "id": "s706",
    "fixed": true
  },
  {
    "q": "if user.get_role()=='admin': user.delete() вместо user.delete_if_admin() — какой запах?",
    "options": [
      "нарушение Tell, Don't Ask",
      "идеальный DIP",
      "только ISP",
      "правильное сокрытие"
    ],
    "answer": 0,
    "explain": "Спрашиваешь внутренности и решаешь снаружи. Лучше сказать объекту «сделай» — логика рядом с данными.",
    "kind": "single",
    "id": "s766",
    "fixed": true
  }
);
