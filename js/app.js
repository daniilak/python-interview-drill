(() => {
  "use strict";

  const ROUND_SIZE = 20;
  const RECENT_LIMIT = 40;

  /** Полные подписи для коротких topic-ключей в бейджах */
  const TOPIC_LABELS = {
    ABC: "Abstract Base Classes",
    abc: "Abstract Base Classes",
    all: "Функция all",
    any: "Функция any",
    api: "Проектирование API",
    "API design": "Проектирование API",
    architecture: "Архитектура",
    args: "Аргументы функций",
    array: "Модуль array",
    ASGI: "ASGI",
    assert: "Инструкция assert",
    async: "Асинхронность",
    asyncio: "Asyncio",
    "attrs/pydantic": "Attrs и Pydantic",
    bisect: "Модуль bisect",
    bool: "Булев тип",
    bytes: "Байты",
    "C-API": "C-API CPython",
    cache: "Кэширование",
    caching: "Кэширование",
    "cffi/pybind": "CFFI и pybind",
    ci: "Continuous Integration",
    classmethod: "classmethod",
    closures: "Замыкания",
    cohesion: "Связность модулей",
    collections: "Модуль collections",
    comprehension: "Comprehensions",
    comprehensions: "Comprehensions",
    concurrency: "Конкурентность",
    consistency: "Согласованность данных",
    context: "Контекстные менеджеры",
    copy: "Копирование объектов",
    coroutines: "Корутины",
    CPython: "CPython",
    csv: "Модуль csv",
    ctypes: "Модуль ctypes",
    dataclasses: "Dataclasses",
    db: "Базы данных",
    design: "Проектирование",
    DI: "Внедрение зависимостей",
    dict: "Словари",
    dictcomp: "Dict comprehension",
    distributed: "Распределённые системы",
    DRY: "Принцип DRY",
    EAFP: "Стиль EAFP",
    enum: "Перечисления",
    enumerate: "Функция enumerate",
    errors: "Ошибки и исключения",
    events: "События и очереди",
    exceptions: "Исключения",
    "f-string": "f-строки",
    FastAPI: "FastAPI",
    filter: "Функция filter",
    fork: "Процессы и fork",
    functools: "Модуль functools",
    GC: "Сборка мусора",
    generators: "Генераторы",
    GIL: "Global Interpreter Lock",
    gil: "Global Interpreter Lock",
    git: "Git",
    hash: "Хэширование",
    hashlib: "Модуль hashlib",
    heapq: "Модуль heapq",
    help: "Функция help",
    http: "HTTP и веб",
    HTTP: "HTTP и веб",
    id: "Функция id",
    "idempotency keys": "Идемпотентность",
    import: "Импорты",
    in: "Оператор in",
    interning: "Интернирование",
    is: "Оператор is",
    itertools: "Модуль itertools",
    json: "JSON",
    JSON: "JSON",
    KISS: "Принцип KISS",
    lambda: "Lambda-функции",
    lazy: "Ленивые вычисления",
    LBYL: "Стиль LBYL",
    list: "Списки",
    listcomp: "List comprehension",
    LoD: "Закон Деметры",
    logging: "Логирование",
    map: "Функция map",
    match: "Structural pattern matching",
    math: "Модуль math",
    memory: "Память",
    memoryview: "memoryview",
    min: "Функция min",
    mock: "Моки в тестах",
    MRO: "Порядок разрешения методов",
    multiprocessing: "Multiprocessing",
    None: "Значение None",
    observability: "Наблюдаемость",
    packaging: "Упаковка пакетов",
    pass: "Инструкция pass",
    path: "Пути к файлам",
    pathlib: "Модуль pathlib",
    patterns: "Паттерны проектирования",
    pep8: "Стиль PEP 8",
    perf: "Производительность",
    performance: "Производительность",
    pickle: "Модуль pickle",
    print: "Функция print",
    property: "property",
    protocols: "Протоколы typing",
    python: "Язык Python",
    queues: "Очереди",
    random: "Модуль random",
    refcount: "Подсчёт ссылок",
    regex: "Регулярные выражения",
    retries: "Повторы запросов",
    rpc: "Удалённые вызовы",
    runtime: "Рантайм",
    secrets: "Модуль secrets",
    security: "Безопасность",
    serialization: "Сериализация",
    set: "Множества",
    signals: "Сигналы ОС",
    slots: "__slots__",
    SoC: "Разделение ответственности",
    SOLID: "Принципы SOLID",
    sort: "Сортировка",
    SQL: "SQL",
    sqlite: "SQLite",
    staticmethod: "staticmethod",
    string: "Строки",
    struct: "Модуль struct",
    subinterpreters: "Подинтерпретаторы",
    subprocess: "Модуль subprocess",
    swap: "Обмен значений",
    tempfile: "Временные файлы",
    testing: "Тестирование",
    threading: "Потоки",
    truthiness: "Истинность значений",
    typing: "Аннотации типов",
    unpack: "Распаковка",
    venv: "Виртуальные окружения",
    walrus: "Моржовый оператор",
    warnings: "Предупреждения",
    wasm: "WebAssembly",
    weakref: "Слабые ссылки",
    with: "Конструкция with",
    WSGI: "WSGI",
    YAGNI: "Принцип YAGNI",
    Zen: "Дзен Python",
    zip: "Функция zip",
    алгоритмы: "Алгоритмы",
    байткод: "Байткод",
    байты: "Байты",
    ввод: "Ввод данных",
    время: "Время и даты",
    встроенные: "Встроенные функции",
    генераторы: "Генераторы",
    декораторы: "Декораторы",
    дескрипторы: "Дескрипторы",
    замыкания: "Замыкания",
    идентичность: "Идентичность объектов",
    исключения: "Исключения",
    итераторы: "Итераторы",
    коллекции: "Коллекции",
    комментарии: "Комментарии",
    копирование: "Копирование",
    кортежи: "Кортежи",
    логирование: "Логирование",
    магические: "Магические методы",
    метаклассы: "Метаклассы",
    множества: "Множества",
    модули: "Модули",
    области: "Области видимости",
    ООП: "Объектно-ориентированное программирование",
    операторы: "Операторы",
    ошибки: "Ошибки",
    пакеты: "Пакеты",
    память: "Память",
    принципы: "Принципы проектирования",
    реверс: "Разворот последовательностей",
    регулярки: "Регулярные выражения",
    словари: "Словари",
    списки: "Списки",
    сравнения: "Сравнения",
    срезы: "Срезы",
    строки: "Строки",
    тесты: "Тесты",
    типы: "Типы данных",
    условия: "Условия",
    файлы: "Файлы",
    функции: "Функции",
    циклы: "Циклы",
  };

  function topicLabel(topic) {
    if (!topic) return "";
    return TOPIC_LABELS[topic] || topic;
  }

  const { loadStore, patchStore, exportProgress, importProgress } = window.Drill.storage;
  const deadline = window.Drill.createDeadlineTimer();

  /** forms: [1, 2-4, 5-0] — «1 карточка», «4 карточки», «5 карточек» */
  function pluralRu(n, forms) {
    const num = Math.abs(Number(n)) || 0;
    const mod10 = num % 10;
    const mod100 = num % 100;
    if (mod100 >= 11 && mod100 <= 14) return forms[2];
    if (mod10 === 1) return forms[0];
    if (mod10 >= 2 && mod10 <= 4) return forms[1];
    return forms[2];
  }

  function pluralCount(n, forms) {
    return `${n} ${pluralRu(n, forms)}`;
  }

  const bankCache = {};

  function getBank(level) {
    if (bankCache[level]) return bankCache[level];
    let bank;
    if (level === "junior") bank = window.QUESTIONS_JUNIOR || [];
    else if (level === "middle") bank = window.QUESTIONS_MIDDLE || [];
    else if (level === "senior") bank = window.QUESTIONS_SENIOR || [];
    else if (level === "junior_middle") {
      bank = [...(window.QUESTIONS_JUNIOR || []), ...(window.QUESTIONS_MIDDLE || [])];
    } else if (level === "middle_senior") {
      bank = [...(window.QUESTIONS_MIDDLE || []), ...(window.QUESTIONS_SENIOR || [])];
    } else if (level === "mistakes") {
      return resolveMistakeBank();
    } else bank = [];
    bankCache[level] = bank;
    return bank;
  }

  function allLiveQuestions() {
    return [
      ...(window.QUESTIONS_JUNIOR || []),
      ...(window.QUESTIONS_MIDDLE || []),
      ...(window.QUESTIONS_SENIOR || []),
    ];
  }

  function resolveMistakeCard(entry) {
    const snap = entry.snapshot || entry;
    const id = snap && snap.id;
    if (id) {
      const live = allLiveQuestions().find((q) => q.id === id);
      if (live) {
        return {
          ...live,
          _mistakeMeta: {
            key: entry.key,
            wrongCount: entry.wrongCount || 1,
            correctStreak: entry.correctStreak || 0,
            lastAt: entry.lastAt,
          },
        };
      }
    }
    return {
      ...snap,
      _mistakeMeta: {
        key: entry.key,
        wrongCount: entry.wrongCount || 1,
        correctStreak: entry.correctStreak || 0,
        lastAt: entry.lastAt,
      },
    };
  }

  function resolveMistakeBank() {
    const entries = Object.values(loadStore().mistakes || {});
    entries.sort((a, b) => (b.wrongCount || 0) - (a.wrongCount || 0) || (b.lastAt || 0) - (a.lastAt || 0));
    return entries.map(resolveMistakeCard);
  }

  const LEVELS = {
    junior: { label: "Junior", bank: () => getBank("junior") },
    middle: { label: "Middle", bank: () => getBank("middle") },
    senior: { label: "Senior", bank: () => getBank("senior") },
    junior_middle: { label: "Junior+Middle", bank: () => getBank("junior_middle") },
    middle_senior: { label: "Middle+Senior", bank: () => getBank("middle_senior") },
    mistakes: {
      label: "Ошибки",
      bank: () => resolveMistakeBank(),
    },
  };

  const el = {
    menu: document.getElementById("screen-menu"),
    groups: document.getElementById("screen-groups"),
    quiz: document.getElementById("screen-quiz"),
    menuStats: document.getElementById("menu-stats"),
    bestStreak: document.getElementById("best-streak"),
    totalAnswered: document.getElementById("total-answered"),
    mistakesCount: document.getElementById("mistakes-count"),
    metaMistakes: document.getElementById("meta-mistakes"),
    settingTimer: document.getElementById("setting-timer"),
    settingInput: document.getElementById("setting-input"),
    btnClearMistakes: document.getElementById("btn-clear-mistakes"),
    groupsLevelLabel: document.getElementById("groups-level-label"),
    groupList: document.getElementById("group-list"),
    btnBackLevels: document.getElementById("btn-back-levels"),
    btnExit: document.getElementById("btn-exit"),
    progressFill: document.getElementById("progress-fill"),
    streakCount: document.getElementById("streak-count"),
    timer: document.getElementById("timer"),
    timerSec: document.getElementById("timer-sec"),
    timerTrack: document.getElementById("timer-track"),
    timerFill: document.getElementById("timer-fill"),
    topicBadge: document.getElementById("topic-badge"),
    groupBadge: document.getElementById("group-badge"),
    levelBadge: document.getElementById("level-badge"),
    sessionScore: document.getElementById("session-score"),
    codeWrap: document.getElementById("code-wrap"),
    questionCode: document.getElementById("question-code"),
    questionText: document.getElementById("question-text"),
    options: document.getElementById("options"),
    inputForm: document.getElementById("input-form"),
    answerInput: document.getElementById("answer-input"),
    feedback: document.getElementById("feedback"),
    feedbackIcon: document.getElementById("feedback-icon"),
    feedbackTitle: document.getElementById("feedback-title"),
    feedbackExplain: document.getElementById("feedback-explain"),
    feedbackBody: document.getElementById("feedback-body"),
    feedbackCompare: document.getElementById("feedback-compare"),
    feedbackYours: document.getElementById("feedback-yours"),
    feedbackCorrect: document.getElementById("feedback-correct"),
    quizHint: document.getElementById("quiz-hint"),
    btnNext: document.getElementById("btn-next"),
    btnDropMistake: document.getElementById("btn-drop-mistake"),
    btnDropEarly: document.getElementById("btn-drop-mistake-early"),
    btnMultiCheck: document.getElementById("btn-multi-check"),
    loading: document.getElementById("loading-overlay"),
    dataError: document.getElementById("data-error"),
    inputModeHelp: document.getElementById("input-mode-help"),
    appVersion: document.getElementById("app-version"),
    btnWeakTopics: document.getElementById("btn-weak-topics"),
    btnExport: document.getElementById("btn-export"),
    btnImport: document.getElementById("btn-import"),
    importFile: document.getElementById("import-file"),
    screenWeak: document.getElementById("screen-weak"),
    weakList: document.getElementById("weak-list"),
    btnBackWeak: document.getElementById("btn-back-weak"),
    screenRound: document.getElementById("screen-round"),
    roundSummary: document.getElementById("round-summary"),
    btnRoundAgain: document.getElementById("btn-round-again"),
    btnRoundTopics: document.getElementById("btn-round-topics"),
    btnPause: document.getElementById("btn-pause"),
    btnSkip: document.getElementById("btn-skip"),
    appDialog: document.getElementById("app-dialog"),
    dialogTitle: document.getElementById("dialog-title"),
    dialogBody: document.getElementById("dialog-body"),
    dialogOk: document.getElementById("dialog-ok"),
    dialogCancel: document.getElementById("dialog-cancel"),
  };

  const state = {
    level: null,
    group: null,
    bank: [],
    deck: [],
    deckIndex: 0,
    recentIds: [],
    current: null,
    currentRaw: null,
    answered: false,
    streak: 0,
    correct: 0,
    total: 0,
    timerSec: 25,
    inputMode: false,
    deadlineTotalMs: 0,
    paused: false,
    roundWrongGroups: {},
    pendingRoundSummary: false,
  };

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function questionKey(q) {
    return q.id || `${q.q}::${q.code || ""}`;
  }

  function topicStatKey(level, group) {
    return `${level}::${group || "Все темы"}`;
  }

  /** Round-robin по group — в режиме «Все темы» покрывает все разделы, а не только крупные. */
  function diversifyDeck(arr) {
    if (arr.length <= 3) return arr;
    const byGroup = new Map();
    for (const q of arr) {
      const g = q.group || q.topic || "Разное";
      if (!byGroup.has(g)) byGroup.set(g, []);
      byGroup.get(g).push(q);
    }
    for (const list of byGroup.values()) {
      const shuffled = shuffle(list);
      list.length = 0;
      list.push(...shuffled);
    }
    const groups = shuffle([...byGroup.keys()]);
    const out = [];
    let progressed = true;
    while (progressed) {
      progressed = false;
      for (const g of groups) {
        const bucket = byGroup.get(g);
        if (bucket && bucket.length) {
          out.push(bucket.pop());
          progressed = true;
        }
      }
    }
    return out;
  }

  function buildShuffledDeck(bank) {
    const recent = new Set(state.recentIds);
    const fresh = [];
    const seen = [];
    for (const q of bank) {
      (recent.has(questionKey(q)) ? seen : fresh).push(q);
    }
    const base =
      fresh.length < Math.min(5, bank.length) ? shuffle(bank) : shuffle(fresh).concat(shuffle(seen));
    // Конкретная тема — достаточно перемешать; «Все темы» — fair round-robin по group
    if (state.group) return shuffle(base);
    return diversifyDeck(base);
  }

  function shuffleOptions(question) {
    const opts = (question.options || []).slice();
    const multi = question.kind === "multi" || Array.isArray(question.answer);
    const correctIdxs = multi
      ? (Array.isArray(question.answer) ? question.answer.slice() : [question.answer])
      : [typeof question.answer === "number" ? question.answer : 0];
    const order = shuffle(opts.map((_, i) => i));
    const shuffled = order.map((i) => opts[i]);
    const indexMap = new Map(order.map((orig, neu) => [orig, neu]));
    const newAnswers = correctIdxs
      .map((i) => indexMap.get(i))
      .filter((i) => i != null)
      .sort((a, b) => a - b);
    const correctTexts = correctIdxs.map((i) => opts[i]).filter((t) => t != null);
    return {
      ...question,
      kind: multi ? "multi" : "single",
      options: shuffled,
      answer: multi ? newAnswers : newAnswers[0] ?? 0,
      _correctTexts: correctTexts,
      _correctText: correctTexts.join("; "),
    };
  }

  function isMultiQuestion(q) {
    return !!q && (q.kind === "multi" || Array.isArray(q.answer));
  }

  function sameIndexSet(a, b) {
    const aa = [...a].map(Number).sort((x, y) => x - y);
    const bb = [...b].map(Number).sort((x, y) => x - y);
    return aa.length === bb.length && aa.every((v, i) => v === bb[i]);
  }

  function showScreen(name) {
    el.menu.classList.toggle("active", name === "menu");
    el.groups.classList.toggle("active", name === "groups");
    el.quiz.classList.toggle("active", name === "quiz");
    if (el.screenWeak) el.screenWeak.classList.toggle("active", name === "weak");
    if (el.screenRound) el.screenRound.classList.toggle("active", name === "round");
  }

  function isInteractiveTarget(node) {
    if (!node || node === document.body) return false;
    const tag = (node.tagName || "").toLowerCase();
    if (tag === "button" || tag === "a" || tag === "input" || tag === "select" || tag === "textarea") {
      return true;
    }
    return !!node.closest?.("button, a, input, select, textarea, [role='checkbox'], [role='option']");
  }

  function showAlert(message, title = "PyСобес") {
    return showDialog({ title, message, cancel: false });
  }

  function showConfirm(message, title = "Подтверждение") {
    return showDialog({ title, message, cancel: true });
  }

  function showDialog({ title, message, cancel }) {
    return new Promise((resolve) => {
      if (!el.appDialog) {
        resolve(cancel ? window.confirm(message) : (window.alert(message), true));
        return;
      }
      el.dialogTitle.textContent = title;
      el.dialogBody.textContent = message;
      el.dialogCancel.hidden = !cancel;
      el.dialogOk.textContent = cancel ? "Да" : "OK";
      el.appDialog.hidden = false;
      const prev = document.activeElement;
      el.dialogOk.focus();

      const cleanup = (result) => {
        el.appDialog.hidden = true;
        el.dialogOk.removeEventListener("click", onOk);
        el.dialogCancel.removeEventListener("click", onCancel);
        document.removeEventListener("keydown", onKey);
        if (prev && prev.focus) prev.focus();
        resolve(result);
      };
      const onOk = () => cleanup(true);
      const onCancel = () => cleanup(false);
      const onKey = (e) => {
        if (e.key === "Escape") {
          e.preventDefault();
          cleanup(!cancel);
        } else if (e.key === "Enter") {
          e.preventDefault();
          cleanup(true);
        }
      };
      el.dialogOk.addEventListener("click", onOk);
      el.dialogCancel.addEventListener("click", onCancel);
      document.addEventListener("keydown", onKey);
    });
  }

  function setLoading(on) {
    if (!el.loading) return;
    el.loading.hidden = !on;
    el.loading.setAttribute("aria-busy", on ? "true" : "false");
  }

  function withLoading(fn) {
    setLoading(true);
    // даём браузеру отрисовать оверлей до тяжёлой работы
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          try {
            resolve(fn());
          } finally {
            setLoading(false);
          }
        }, 40);
      });
    });
  }

  function groupCounts(bank) {
    const map = new Map();
    for (const q of bank) {
      const g = q.group || q.topic || "Разное";
      map.set(g, (map.get(g) || 0) + 1);
    }
    return [...map.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "ru"));
  }

  function topicAccuracy(level, group) {
    const st = loadStore().topicStats[topicStatKey(level, group)];
    if (!st || !st.total) return null;
    return Math.round((100 * st.correct) / st.total);
  }

  function dataBanksReady() {
    return (
      Array.isArray(window.QUESTIONS_JUNIOR) &&
      Array.isArray(window.QUESTIONS_MIDDLE) &&
      Array.isArray(window.QUESTIONS_SENIOR) &&
      window.QUESTIONS_JUNIOR.length > 0
    );
  }

  function showDataError() {
    if (!el.dataError) return;
    el.dataError.hidden = false;
    el.dataError.textContent =
      "Не удалось загрузить банк вопросов (js/data/*.js). Проверь, что файлы на месте, и открой страницу через локальный сервер или напрямую из папки проекта.";
    document.querySelectorAll(".level-card:not([data-level='mistakes'])").forEach((btn) => {
      btn.disabled = true;
    });
  }

  function refreshMenu() {
    if (!dataBanksReady()) {
      showDataError();
    } else if (el.dataError) {
      el.dataError.hidden = true;
    }

    for (const key of ["junior", "middle", "senior", "junior_middle", "middle_senior"]) {
      const n = LEVELS[key].bank().length;
      const node = document.getElementById(`meta-${key}`);
      if (node) {
        const groups = groupCounts(LEVELS[key].bank()).length;
        node.textContent = n
          ? `${pluralCount(n, ["вопрос", "вопроса", "вопросов"])} · ${pluralCount(groups, ["тема", "темы", "тем"])}`
          : "Банк не загружен";
      }
    }
    const store = loadStore();
    const mistakeEntries = Object.values(store.mistakes || {});
    const mc = mistakeEntries.length;
    el.bestStreak.textContent = String(store.bestStreak || 0);
    el.totalAnswered.textContent = String(store.totalAnswered || 0);
    el.mistakesCount.textContent = String(mc);
    if (mc) {
      const top = [...mistakeEntries].sort((a, b) => (b.wrongCount || 0) - (a.wrongCount || 0))[0];
      const wc = top?.wrongCount || 1;
      el.metaMistakes.textContent = `${pluralCount(mc, ["карточка", "карточки", "карточек"])} · чаще всего ×${wc}`;
    } else {
      el.metaMistakes.textContent = "Пока пусто — копи ошибки в сессии";
    }
    el.menuStats.hidden = !(store.totalAnswered > 0 || mc > 0);

    el.settingTimer.value = String(store.settings.timerSec ?? 25);
    el.settingInput.checked = !!store.settings.inputMode;
    state.timerSec = Number(store.settings.timerSec ?? 25);
    state.inputMode = !!store.settings.inputMode;
    if (el.inputModeHelp) el.inputModeHelp.hidden = !state.inputMode;
  }

  function syncSettingsFromUI() {
    if (el.settingTimer) state.timerSec = Number(el.settingTimer.value) || 0;
    if (el.settingInput) state.inputMode = !!el.settingInput.checked;
    if (el.inputModeHelp) el.inputModeHelp.hidden = !state.inputMode;
  }

  function persistSettings() {
    syncSettingsFromUI();
    patchStore((s) => {
      s.settings.timerSec = state.timerSec;
      s.settings.inputMode = state.inputMode;
    });
  }

  async function openGroups(level) {
    if (level === "mistakes") {
      delete bankCache.mistakes;
      const bank = LEVELS.mistakes.bank();
      if (!bank.length) {
        await showAlert("Пока нет сохранённых ошибок. Ответь неправильно — карточка попадёт сюда.");
        return;
      }
      state.level = "mistakes";
      await startSession(null);
      return;
    }

    if (!dataBanksReady()) {
      showDataError();
      return;
    }

    await withLoading(() => {
      const bank = LEVELS[level].bank();
      if (!bank.length) {
        showAlert("Банк вопросов ещё не загружен.");
        return;
      }
      state.level = level;
      el.groupsLevelLabel.textContent = LEVELS[level].label;
      el.groupList.innerHTML = "";

      const allBtn = document.createElement("button");
      allBtn.type = "button";
      allBtn.className = "group-card is-all";
      const allPct = topicAccuracy(level, null);
      const allTitle = document.createElement("span");
      allTitle.className = "group-card-title";
      allTitle.textContent = "Все темы";
      const allCount = document.createElement("span");
      allCount.className = "group-card-count";
      allCount.textContent = String(bank.length);
      const allSub = document.createElement("span");
      allSub.className = "group-card-sub";
      allSub.textContent = `Смешанная серия · автоперемешивание${allPct != null ? ` · ${allPct}% верных` : ""}`;
      allBtn.append(allTitle, allCount, allSub);
      if (allPct != null) {
        const bar = document.createElement("div");
        bar.className = "group-progress";
        const fill = document.createElement("span");
        fill.style.width = `${allPct}%`;
        bar.appendChild(fill);
        allBtn.appendChild(bar);
      }
      allBtn.addEventListener("click", () => startSession(null));
      el.groupList.appendChild(allBtn);

      for (const [name, count] of groupCounts(bank)) {
        const pct = topicAccuracy(level, name);
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "group-card";
        const title = document.createElement("span");
        title.className = "group-card-title";
        title.textContent = name;
        const countEl = document.createElement("span");
        countEl.className = "group-card-count";
        countEl.textContent = String(count);
        if (pct != null) {
          const pctEl = document.createElement("div");
          pctEl.className = "group-card-pct";
          pctEl.textContent = `${pct}%`;
          countEl.appendChild(pctEl);
        }
        btn.append(title, countEl);
        if (pct != null) {
          const bar = document.createElement("div");
          bar.className = "group-progress";
          const fill = document.createElement("span");
          fill.style.width = `${pct}%`;
          bar.appendChild(fill);
          btn.appendChild(bar);
        }
        btn.addEventListener("click", () => startSession(name));
        el.groupList.appendChild(btn);
      }

      showScreen("groups");
    });
  }

  function activeBank() {
    const full = LEVELS[state.level].bank();
    if (!state.group) return full.slice();
    return full.filter((q) => (q.group || q.topic) === state.group);
  }

  function reshuffleDeck() {
    state.bank = activeBank();
    state.deck = buildShuffledDeck(state.bank);
    state.deckIndex = 0;
  }

  async function startSession(group) {
    syncSettingsFromUI();
    persistSettings();
    await withLoading(() => {
      state.group = group;
      state.bank = activeBank();
      if (!state.bank.length) {
        showAlert("В этой теме пока нет вопросов.");
        return;
      }
      state.recentIds = [];
      reshuffleDeck();
      state.streak = 0;
      state.correct = 0;
      state.total = 0;
      state.answered = false;
      state.paused = false;
      state.roundWrongGroups = {};
      state.pendingRoundSummary = false;
      el.levelBadge.textContent = LEVELS[state.level].label;
      el.groupBadge.textContent = group || "Все темы";
      el.streakCount.textContent = "0";
      el.progressFill.style.width = "0%";
      showScreen("quiz");
      nextQuestion();
    });
  }

  function remember(q) {
    const key = questionKey(q);
    state.recentIds.push(key);
    if (state.recentIds.length > RECENT_LIMIT) {
      state.recentIds.splice(0, state.recentIds.length - RECENT_LIMIT);
    }
  }

  function drawFromDeck() {
    if (state.deckIndex >= state.deck.length) reshuffleDeck();
    if (state.total > 0 && state.total % ROUND_SIZE === 0 && state.deckIndex < state.deck.length) {
      const head = state.deck.slice(0, state.deckIndex);
      const rest = shuffle(state.deck.slice(state.deckIndex));
      const tail = state.group ? rest : diversifyDeck(rest);
      state.deck = head.concat(tail);
    }
    const raw = state.deck[state.deckIndex++];
    remember(raw);
    state.currentRaw = raw;
    return shuffleOptions({ ...raw });
  }

  /** Код в отдельном блоке; из текста убираем дубли и markdown-fence */
  function prepareDisplay(q) {
    let text = (q.q || "").trim();
    let code = (q.code || "").trim();

    const fenceRe = /```(?:python|py)?\s*\n?([\s\S]*?)```/gi;
    let m;
    while ((m = fenceRe.exec(q.q || "")) !== null) {
      const block = m[1].trim();
      if (block) code = code ? `${code}\n${block}` : block;
    }
    text = text.replace(/```(?:python|py)?\s*\n?[\s\S]*?```/gi, "").trim();

    if (code) {
      const oneLine = code.includes("\n") ? null : code.trim();
      if (oneLine && text.includes(oneLine)) {
        text = "Что выведет код?";
      } else if (/^что выведет\b/i.test(text) && !/^что выведет код\??$/i.test(text)) {
        text = "Что выведет код?";
      } else if (!text) {
        text = "Что выведет код?";
      }
    }

    return { text, code };
  }

  function stopDeadline() {
    deadline.stop();
  }

  function startDeadline() {
    const sec = state.timerSec;
    if (!sec || sec <= 0) {
      el.timer.hidden = true;
      el.timerTrack.hidden = true;
      deadline.stop();
      return;
    }
    el.timer.hidden = false;
    el.timerTrack.hidden = false;
    el.timerSec.textContent = String(sec);
    el.timer.classList.remove("is-low");
    el.timerFill.classList.remove("is-low");
    el.timerFill.style.width = "100%";

    const handle = deadline.start({
      sec,
      onTick(left, gen) {
        if (!deadline.isCurrent(gen) || state.answered) return;
        const s = Math.ceil(left / 1000);
        el.timerSec.textContent = String(s);
        const pct = (left / (sec * 1000)) * 100;
        el.timerFill.style.width = `${pct}%`;
        const low = left <= 5000;
        el.timer.classList.toggle("is-low", low);
        el.timerFill.classList.toggle("is-low", low);
      },
      onExpire(gen) {
        if (!deadline.isCurrent(gen) || state.answered) return;
        finishAnswer({ timedOut: true });
      },
    });
    state.deadlineTotalMs = handle ? handle.totalMs : 0;
  }

  function nextQuestion() {
    stopDeadline();
    state.current = drawFromDeck();
    state.answered = false;

    el.feedback.hidden = true;
    el.feedback.classList.remove("is-good", "is-bad");
    if (el.feedbackCompare) el.feedbackCompare.hidden = true;
    if (el.feedbackBody) el.feedbackBody.hidden = true;
    if (el.feedbackYours) el.feedbackYours.textContent = "";
    if (el.feedbackCorrect) el.feedbackCorrect.textContent = "";
    el.feedbackExplain.innerHTML = "";
    el.btnNext.textContent = "Дальше";
    if (el.btnDropMistake) {
      el.btnDropMistake.hidden = true;
    }
    if (el.btnDropEarly) {
      el.btnDropEarly.hidden = state.level !== "mistakes";
    }
    if (el.btnMultiCheck) el.btnMultiCheck.hidden = true;
    el.options.innerHTML = "";
    el.answerInput.value = "";
    el.answerInput.disabled = false;
    [...el.inputForm.querySelectorAll("button")].forEach((b) => (b.disabled = false));
    const shell = el.inputForm.querySelector(".input-shell");
    if (shell) shell.classList.remove("is-ok", "is-fail");

    const q = state.current;
    const multi = isMultiQuestion(q);
    const parsed = prepareDisplay(q);
    el.topicBadge.textContent = topicLabel(q.topic);
    el.groupBadge.textContent = state.group || q.group || "Все темы";
    el.questionText.textContent = parsed.text;
    el.sessionScore.textContent = `${state.correct} / ${state.total}`;

    if (parsed.code) {
      el.codeWrap.hidden = false;
      el.questionCode.textContent = parsed.code;
    } else {
      el.codeWrap.hidden = true;
      el.questionCode.textContent = "";
    }

    const panel = el.questionText.closest(".question-panel");
    panel.style.animation = "none";
    el.options.style.animation = "none";
    void panel.offsetWidth;
    panel.style.animation = "";
    el.options.style.animation = "";

    // multi всегда чекбоксы (режим текстового ввода для них отключаем)
    const useInput = state.inputMode && !multi;
    state.paused = false;
    if (el.btnPause) el.btnPause.textContent = "Пауза";
    if (el.btnSkip) el.btnSkip.hidden = false;

    if (multi) {
      el.options.hidden = false;
      el.options.classList.remove("is-input-ref");
      el.options.classList.add("is-multi");
      el.options.setAttribute("role", "group");
      el.inputForm.hidden = true;
      if (el.btnMultiCheck) el.btnMultiCheck.hidden = false;
      if (el.quizHint) {
        el.quizHint.textContent =
          "Выбери все верные варианты · Space на варианте переключает · Enter — «Проверить»";
      }
      q.options.forEach((text, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option option-multi";
        btn.setAttribute("role", "checkbox");
        btn.setAttribute("aria-checked", "false");
        btn.dataset.index = String(idx);
        btn.innerHTML = `<span class="option-check" aria-hidden="true"></span><span class="option-key">${idx + 1}</span><span class="option-text"></span>`;
        btn.querySelector(".option-text").textContent = text;
        btn.addEventListener("click", () => {
          if (state.answered) return;
          const on = btn.getAttribute("aria-checked") === "true";
          btn.setAttribute("aria-checked", on ? "false" : "true");
          btn.classList.toggle("is-selected", !on);
        });
        el.options.appendChild(btn);
      });
    } else if (useInput) {
      el.options.hidden = false;
      el.options.classList.add("is-input-ref");
      el.options.classList.remove("is-multi");
      el.options.setAttribute("role", "listbox");
      el.inputForm.hidden = false;
      if (el.quizHint) {
        el.quizHint.textContent =
          "Введи текст ответа · клик по варианту подставляет текст · Enter проверяет · 1–4 при пустом поле";
      }
      q.options.forEach((text, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option option-ref";
        btn.setAttribute("role", "option");
        btn.innerHTML = `<span class="option-key">${idx + 1}</span><span class="option-text"></span>`;
        btn.querySelector(".option-text").textContent = text;
        btn.addEventListener("click", () => {
          if (state.answered) return;
          el.answerInput.value = text;
          el.answerInput.focus();
        });
        el.options.appendChild(btn);
      });
      setTimeout(() => el.answerInput.focus(), 30);
    } else {
      el.options.hidden = false;
      el.options.classList.remove("is-input-ref", "is-multi");
      el.options.setAttribute("role", "listbox");
      el.inputForm.hidden = true;
      if (el.quizHint) el.quizHint.textContent = "Выбери один верный вариант из списка ниже · клавиши 1–4";
      q.options.forEach((text, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option";
        btn.setAttribute("role", "option");
        btn.innerHTML = `<span class="option-key">${idx + 1}</span><span class="option-text"></span>`;
        btn.querySelector(".option-text").textContent = text;
        btn.addEventListener("click", () => finishAnswer({ choiceIndex: idx }));
        el.options.appendChild(btn);
      });
    }

    el.progressFill.style.width = `${((state.total % ROUND_SIZE) / ROUND_SIZE) * 100}%`;
    startDeadline();
  }

  function normalizeAnswer(s) {
    return String(s || "")
      .trim()
      .replace(/^['"`]+|['"`]+$/g, "")
      .replace(/\s+/g, " ")
      .toLowerCase();
  }

  function answersMatch(user, correct, options) {
    const a = normalizeAnswer(user);
    const b = normalizeAnswer(correct);
    if (a === b) return true;

    // номер варианта: «2», «вариант 2», «#2»
    const numMatch = a.match(/^(?:вариант\s*|#)?([1-4])$/i);
    if (numMatch && Array.isArray(options)) {
      const idx = Number(numMatch[1]) - 1;
      if (normalizeAnswer(options[idx]) === b) return true;
    }

    const aliases = {
      none: ["none", "null"],
      true: ["true", "yes", "да"],
      false: ["false", "no", "нет"],
    };
    for (const list of Object.values(aliases)) {
      if (list.includes(a) && list.includes(b)) return true;
    }
    return false;
  }

  function snapshotQuestion(q) {
    const multi = isMultiQuestion(q);
    return {
      id: q.id,
      topic: q.topic,
      group: q.group,
      q: q.q,
      code: q.code || "",
      options: q.options.slice(),
      answer: multi
        ? (Array.isArray(q.answer) ? q.answer.slice() : [q.answer])
        : typeof q.answer === "number"
          ? q.answer
          : 0,
      explain: q.explain || "",
      kind: multi ? "multi" : "single",
      tags: Array.isArray(q.tags) ? q.tags.slice() : undefined,
    };
  }

  function selectedMultiIndexes() {
    return [...el.options.querySelectorAll(".option-multi[aria-checked='true']")].map((btn) =>
      Number(btn.dataset.index)
    );
  }

  function recordMistake(rawQ) {
    const key = questionKey(rawQ);
    patchStore((s) => {
      const prev = s.mistakes[key];
      s.mistakes[key] = {
        key,
        snapshot: snapshotQuestion(rawQ),
        wrongCount: (prev?.wrongCount || 0) + 1,
        correctStreak: 0,
        lastAt: Date.now(),
      };
    });
    delete bankCache.mistakes;
  }

  function noteMistakeCorrect(rawQ) {
    const key = questionKey(rawQ);
    const need = Number(loadStore().settings?.srsClearAfter) || 2;
    let removed = false;
    patchStore((s) => {
      const prev = s.mistakes[key];
      if (!prev) return;
      const streak = (prev.correctStreak || 0) + 1;
      if (streak >= need) {
        delete s.mistakes[key];
        removed = true;
      } else {
        s.mistakes[key] = { ...prev, correctStreak: streak, lastAt: Date.now() };
      }
    });
    delete bankCache.mistakes;
    return removed;
  }

  function clearMistake(rawQ) {
    const key = questionKey(rawQ);
    patchStore((s) => {
      delete s.mistakes[key];
    });
    delete bankCache.mistakes;
  }

  function dropCurrentMistake() {
    const raw = state.currentRaw || state.current;
    if (!raw) return;
    clearMistake(raw);
    if (state.level === "mistakes") {
      state.deck = state.deck.filter((item) => questionKey(item) !== questionKey(raw));
      if (state.deckIndex > state.deck.length) state.deckIndex = state.deck.length;
    }
    if (state.level === "mistakes" && !activeBank().length) {
      showAlert("Все ошибки разобраны. Отличная работа!");
      showScreen("menu");
      refreshMenu();
      return;
    }
    if (!state.answered) {
      nextQuestion();
    } else {
      onNext();
    }
  }

  function recordTopic(ok) {
    const key = topicStatKey(state.level, state.group);
    const keys = new Set([key]);
    if (!state.group && state.current?.group) {
      keys.add(topicStatKey(state.level, state.current.group));
    }
    patchStore((s) => {
      for (const k of keys) {
        const st = s.topicStats[k] || { correct: 0, total: 0 };
        st.total += 1;
        if (ok) st.correct += 1;
        s.topicStats[k] = st;
      }
    });
  }

  /** Убирает хвост «Правильный ответ: …», если сравнение уже показано отдельно. */
  function stripAnswerEcho(explain, correctText) {
    let text = String(explain || "").trim();
    if (!text) return "";
    text = text.replace(
      /\s*(?:Правильный ответ|Верные пункты|Верный вариант)\s*:\s*«[^»]*»\.?\s*$/i,
      ""
    );
    text = text.replace(
      /\s*(?:Правильный ответ|Верные пункты|Верный вариант)\s*:\s*"[^"]*"\.?\s*$/i,
      ""
    );
    const correct = String(correctText || "").trim();
    if (correct) {
      const esc = correct.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      text = text.replace(
        new RegExp(`\\s*(?:Правильный ответ|Верные пункты)\\s*:\\s*«?${esc}»?\\.?\\s*$`, "i"),
        ""
      );
    }
    return text.trim().replace(/\.\s*\.$/, ".");
  }

  function buildLearningExplain(q, correctText) {
    const explain = stripAnswerEcho((q.explain || "").trim(), correctText);
    return explain;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatExplainHtml(text) {
    const raw = String(text || "").trim();
    if (!raw) return "";

    if (raw.includes("\n")) {
      return raw
        .split(/\n{2,}/)
        .map((block) => block.replace(/\n/g, " ").trim())
        .filter(Boolean)
        .map((line) => escapeHtml(line))
        .join("<br><br>");
    }

    if (raw.includes("; ")) {
      return raw
        .split(/\s*;\s+/)
        .map((line) => escapeHtml(line.trim()))
        .filter(Boolean)
        .join("<br>");
    }

    if (raw.length > 140) {
      return raw
        .split(/(?<=[.!?])\s+(?=[А-ЯA-Z«"(\d])/u)
        .map((line) => escapeHtml(line.trim()))
        .filter(Boolean)
        .join("<br><br>");
    }

    return escapeHtml(raw);
  }

  function setFeedbackExplain(text) {
    const html = formatExplainHtml(text);
    el.feedbackExplain.innerHTML = html;
    if (el.feedbackBody) el.feedbackBody.hidden = !html;
  }

  function setFeedbackCompare({ yours, correct, timedOut }) {
    if (!el.feedbackCompare) return;
    const hasCorrect = correct != null && String(correct).trim() !== "";
    const hasYours = yours != null && String(yours).trim() !== "";
    if (!hasCorrect && !hasYours && !timedOut) {
      el.feedbackCompare.hidden = true;
      return;
    }
    el.feedbackCompare.hidden = false;
    if (el.feedbackCorrect) {
      el.feedbackCorrect.textContent = hasCorrect ? String(correct) : "—";
    }
    if (el.feedbackYours) {
      el.feedbackYours.textContent = timedOut
        ? "не успел"
        : hasYours
          ? String(yours)
          : "—";
    }
    const yoursChip = el.feedbackCompare.querySelector(".is-yours");
    if (yoursChip) yoursChip.classList.toggle("is-empty", timedOut || !hasYours);
  }

  function showFeedback({ ok, timedOut, title, explain, yours, correct }) {
    el.feedback.classList.remove("is-good", "is-bad");
    el.feedback.classList.add(ok ? "is-good" : "is-bad");
    el.feedbackTitle.textContent = title;
    if (el.feedbackIcon) {
      el.feedbackIcon.textContent = ok ? "✓" : timedOut ? "⏱" : "✕";
    }
    if (ok) {
      setFeedbackCompare({ yours: null, correct: null, timedOut: false });
      el.feedbackCompare.hidden = true;
      setFeedbackExplain(stripAnswerEcho(explain, correct));
    } else {
      setFeedbackCompare({ yours, correct, timedOut });
      setFeedbackExplain(stripAnswerEcho(explain, correct));
    }
    el.feedback.hidden = false;
  }

  function finishAnswer({ choiceIndex = null, choiceIndexes = null, typed = null, timedOut = false } = {}) {
    if (state.answered) return;
    state.answered = true;
    stopDeadline();
    state.total += 1;

    const q = state.current;
    const raw = state.currentRaw || q;
    const multi = isMultiQuestion(q);
    const correctText =
      q._correctText ??
      (multi
        ? (Array.isArray(q.answer) ? q.answer : []).map((i) => q.options[i]).join("; ")
        : q.options[q.answer]);
    let ok = false;
    let chosenText = null;
    let selectedIdxs = [];

    if (timedOut) {
      ok = false;
      chosenText = null;
      if (multi) selectedIdxs = selectedMultiIndexes();
    } else if (multi) {
      selectedIdxs = choiceIndexes != null ? choiceIndexes : selectedMultiIndexes();
      const expected = Array.isArray(q.answer) ? q.answer : [q.answer];
      ok = sameIndexSet(selectedIdxs, expected);
      chosenText = selectedIdxs.map((i) => q.options[i]).join("; ") || "(ничего не выбрано)";
    } else if (state.inputMode && choiceIndex == null) {
      chosenText = typed ?? el.answerInput.value;
      ok = answersMatch(chosenText, correctText, q.options);
    } else if (choiceIndex != null) {
      ok = choiceIndex === q.answer;
      chosenText = q.options[choiceIndex];
      selectedIdxs = [choiceIndex];
    }

    const buttons = [...el.options.querySelectorAll(".option")];
    const correctSet = new Set(
      multi ? (Array.isArray(q.answer) ? q.answer : []) : [q.answer]
    );
    const selectedSet = new Set(multi ? selectedIdxs : choiceIndex != null ? [choiceIndex] : []);

    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (correctSet.has(i)) btn.classList.add("correct");
      else if (selectedSet.has(i) && !ok) btn.classList.add("wrong");
      else btn.classList.add("dim");
    });

    if (el.btnMultiCheck) {
      el.btnMultiCheck.hidden = true;
      el.btnMultiCheck.disabled = false;
    }

    if (state.inputMode && !multi) {
      el.answerInput.disabled = true;
      [...el.inputForm.querySelectorAll("button")].forEach((b) => (b.disabled = true));
      const shell = el.inputForm.querySelector(".input-shell");
      if (shell) {
        shell.classList.remove("is-ok", "is-fail");
        shell.classList.add(ok ? "is-ok" : "is-fail");
      }
    }

    recordTopic(ok);

    if (ok) {
      state.correct += 1;
      state.streak += 1;
      showFeedback({
        ok: true,
        timedOut: false,
        title: "Верно!",
        explain: q.explain || "",
        correct: correctText,
      });
      el.btnNext.textContent = "Дальше";
      const removed = noteMistakeCorrect(raw);
      if (removed && state.level === "mistakes") {
        state.deck = state.deck.filter((item) => questionKey(item) !== questionKey(raw));
        if (state.deckIndex > state.deck.length) state.deckIndex = state.deck.length;
      }
      if (el.btnDropMistake) el.btnDropMistake.hidden = true;
      if (el.btnDropEarly) el.btnDropEarly.hidden = true;
    } else {
      state.streak = 0;
      const g = q.group || q.topic || "Разное";
      state.roundWrongGroups[g] = (state.roundWrongGroups[g] || 0) + 1;
      showFeedback({
        ok: false,
        timedOut,
        title: timedOut ? "Время вышло" : "Неверно",
        explain: buildLearningExplain(q, correctText) || q.explain || "",
        yours: chosenText,
        correct: correctText,
      });
      el.btnNext.textContent = "Дальше";
      recordMistake(raw);
      if (el.btnDropEarly) el.btnDropEarly.hidden = true;
      if (el.btnDropMistake) {
        el.btnDropMistake.hidden = false;
        el.btnDropMistake.textContent =
          state.level === "mistakes" ? "Убрать из повторения" : "Не сохранять в ошибках";
      }
    }

    el.streakCount.textContent = String(state.streak);
    el.sessionScore.textContent = `${state.correct} / ${state.total}`;

    const filled = ((state.total % ROUND_SIZE) / ROUND_SIZE) * 100;
    el.progressFill.style.width = `${filled === 0 ? 100 : filled}%`;

    patchStore((s) => {
      s.bestStreak = Math.max(s.bestStreak || 0, state.streak);
      s.totalAnswered = (s.totalAnswered || 0) + 1;
    });

    el.btnNext.focus();
  }

  function showRoundSummary() {
    const accuracy = state.total ? Math.round((100 * state.correct) / state.total) : 0;
    const wrong = state.total - state.correct;
    const weak = Object.entries(state.roundWrongGroups)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    if (el.roundSummary) {
      el.roundSummary.innerHTML = "";
      const p1 = document.createElement("p");
      p1.className = "round-stat";
      p1.textContent = `Точность: ${accuracy}% · верных ${state.correct} из ${state.total}`;
      const p2 = document.createElement("p");
      p2.className = "round-stat";
      p2.textContent = `Ошибок в раунде: ${wrong}`;
      el.roundSummary.append(p1, p2);
      if (weak.length) {
        const h = document.createElement("p");
        h.className = "round-weak-label";
        h.textContent = "Слабые темы раунда:";
        el.roundSummary.appendChild(h);
        const ul = document.createElement("ul");
        ul.className = "round-weak-list";
        for (const [name, n] of weak) {
          const li = document.createElement("li");
          li.textContent = `${name} — ${n}`;
          ul.appendChild(li);
        }
        el.roundSummary.appendChild(ul);
      }
    }
    stopDeadline();
    showScreen("round");
  }

  function onNext() {
    if (!state.answered) return;
    if (state.level === "mistakes" && !activeBank().length) {
      showAlert("Все ошибки разобраны. Отличная работа!");
      showScreen("menu");
      refreshMenu();
      return;
    }
    if (state.total > 0 && state.total % ROUND_SIZE === 0) {
      el.progressFill.style.width = "0%";
      showRoundSummary();
      return;
    }
    nextQuestion();
  }

  async function exitQuiz() {
    if (state.total > 0) {
      const ok = await showConfirm("Завершить сессию и вернуться?");
      if (!ok) return;
    }
    stopDeadline();
    state.paused = false;
    if (state.level === "mistakes") {
      showScreen("menu");
      refreshMenu();
    } else {
      showScreen("groups");
    }
  }

  function togglePause() {
    if (state.answered || !state.timerSec) return;
    if (state.paused) {
      deadline.resume();
      state.paused = false;
      if (el.btnPause) el.btnPause.textContent = "Пауза";
    } else {
      deadline.pause();
      state.paused = true;
      if (el.btnPause) el.btnPause.textContent = "Продолжить";
    }
  }

  function skipQuestion() {
    if (state.answered) return;
    stopDeadline();
    nextQuestion();
  }

  function openWeakTopics() {
    if (!el.weakList) return;
    el.weakList.innerHTML = "";
    const stats = loadStore().topicStats || {};
    const rows = Object.entries(stats)
      .map(([key, st]) => {
        const total = st.total || 0;
        const correct = st.correct || 0;
        const pct = total ? Math.round((100 * correct) / total) : 0;
        return { key, total, correct, pct };
      })
      .filter((r) => r.total >= 1)
      .sort((a, b) => a.pct - b.pct || b.total - a.total);

    if (!rows.length) {
      const p = document.createElement("p");
      p.className = "lede";
      p.textContent = "Пока нет статистики — пройди несколько карточек.";
      el.weakList.appendChild(p);
    } else {
      for (const row of rows.slice(0, 40)) {
        const [level, ...groupParts] = row.key.split("::");
        const group = groupParts.join("::");
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "group-card";
        const title = document.createElement("span");
        title.className = "group-card-title";
        title.textContent = `${LEVELS[level]?.label || level} · ${group}`;
        const meta = document.createElement("span");
        meta.className = "group-card-count";
        meta.textContent = `${row.pct}%`;
        const sub = document.createElement("span");
        sub.className = "group-card-sub";
        sub.textContent = `${row.correct}/${row.total} верных`;
        btn.append(title, meta, sub);
        const bar = document.createElement("div");
        bar.className = "group-progress";
        const fill = document.createElement("span");
        fill.style.width = `${row.pct}%`;
        bar.appendChild(fill);
        btn.appendChild(bar);
        if (LEVELS[level] && level !== "mistakes") {
          btn.addEventListener("click", () => {
            state.level = level;
            startSession(group === "Все темы" ? null : group);
          });
        }
        el.weakList.appendChild(btn);
      }
    }
    showScreen("weak");
  }

  function downloadExport() {
    const data = exportProgress();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pysobes-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function handleImportFile(file) {
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      importProgress(data);
      delete bankCache.mistakes;
      refreshMenu();
      await showAlert("Прогресс импортирован.");
    } catch (err) {
      await showAlert(`Не удалось импортировать: ${err.message || err}`);
    }
  }

  // events
  document.querySelectorAll(".level-card").forEach((btn) => {
    btn.addEventListener("click", () => openGroups(btn.dataset.level));
  });

  el.btnBackLevels.addEventListener("click", () => {
    showScreen("menu");
    refreshMenu();
  });

  el.btnExit.addEventListener("click", () => {
    exitQuiz();
  });

  el.btnNext.addEventListener("click", onNext);

  function bindDrop(btn) {
    if (!btn) return;
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      const msg =
        state.level === "mistakes"
          ? "Убрать эту карточку из «Моих ошибок»?"
          : "Не сохранять эту карточку в «Моих ошибках»?";
      if (!(await showConfirm(msg))) return;
      dropCurrentMistake();
    });
  }
  bindDrop(el.btnDropMistake);
  bindDrop(el.btnDropEarly);

  el.settingTimer.addEventListener("change", persistSettings);
  el.settingInput.addEventListener("change", persistSettings);

  el.btnClearMistakes.addEventListener("click", async () => {
    if (!(await showConfirm("Очистить сохранённые ошибки для повторения?"))) return;
    patchStore((s) => {
      s.mistakes = {};
    });
    delete bankCache.mistakes;
    refreshMenu();
  });

  if (el.btnWeakTopics) el.btnWeakTopics.addEventListener("click", openWeakTopics);
  if (el.btnBackWeak) {
    el.btnBackWeak.addEventListener("click", () => {
      showScreen("menu");
      refreshMenu();
    });
  }
  if (el.btnExport) el.btnExport.addEventListener("click", downloadExport);
  if (el.btnImport && el.importFile) {
    el.btnImport.addEventListener("click", () => el.importFile.click());
    el.importFile.addEventListener("change", () => {
      const file = el.importFile.files && el.importFile.files[0];
      if (file) handleImportFile(file);
      el.importFile.value = "";
    });
  }
  if (el.btnRoundAgain) {
    el.btnRoundAgain.addEventListener("click", () => {
      state.roundWrongGroups = {};
      showScreen("quiz");
      nextQuestion();
    });
  }
  if (el.btnRoundTopics) {
    el.btnRoundTopics.addEventListener("click", () => {
      stopDeadline();
      if (state.level === "mistakes") {
        showScreen("menu");
        refreshMenu();
      } else {
        showScreen("groups");
      }
    });
  }
  if (el.btnPause) el.btnPause.addEventListener("click", togglePause);
  if (el.btnSkip) el.btnSkip.addEventListener("click", skipQuestion);

  el.inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (state.answered || !state.inputMode) return;
    finishAnswer({ typed: el.answerInput.value });
  });

  if (el.btnMultiCheck) {
    el.btnMultiCheck.addEventListener("click", () => {
      if (state.answered || !isMultiQuestion(state.current)) return;
      finishAnswer({ choiceIndexes: selectedMultiIndexes() });
    });
  }

  document.addEventListener("keydown", (e) => {
    if (el.appDialog && !el.appDialog.hidden) return;

    if (e.key === "Escape") {
      if (el.quiz.classList.contains("active")) {
        e.preventDefault();
        exitQuiz();
        return;
      }
      if (el.groups.classList.contains("active") || (el.screenWeak && el.screenWeak.classList.contains("active"))) {
        e.preventDefault();
        showScreen("menu");
        refreshMenu();
        return;
      }
      if (el.screenRound && el.screenRound.classList.contains("active")) {
        e.preventDefault();
        if (state.level === "mistakes") {
          showScreen("menu");
          refreshMenu();
        } else {
          showScreen("groups");
        }
      }
      return;
    }

    if (!el.quiz.classList.contains("active")) return;

    if (state.answered && (e.key === "Enter" || e.key === " ")) {
      const active = document.activeElement;
      if (active === el.answerInput) return;
      if (active && active !== el.btnNext && isInteractiveTarget(active)) return;
      e.preventDefault();
      onNext();
      return;
    }
    if (state.answered) return;

    const multi = isMultiQuestion(state.current);
    const active = document.activeElement;

    if (multi && e.key === " ") {
      if (active && active.classList && active.classList.contains("option-multi")) {
        e.preventDefault();
        active.click();
        return;
      }
      return;
    }

    if (multi && e.key === "Enter") {
      if (document.activeElement === el.answerInput) return;
      e.preventDefault();
      finishAnswer({ choiceIndexes: selectedMultiIndexes() });
      return;
    }

    const n = Number(e.key);
    if (n >= 1 && n <= 4) {
      if (multi) {
        e.preventDefault();
        const btn = el.options.querySelectorAll(".option")[n - 1];
        if (btn && !btn.disabled) btn.click();
        return;
      }
      if (state.inputMode) {
        const focusedInput = document.activeElement === el.answerInput;
        const empty = !String(el.answerInput.value || "").trim();
        const withMod = e.ctrlKey || e.metaKey || e.altKey;
        if (focusedInput && !empty && !withMod) return;
        e.preventDefault();
      }
      const btn = el.options.querySelectorAll(".option")[n - 1];
      if (btn && !btn.disabled) btn.click();
    }
  });

  let touchStartX = 0;
  let touchStartY = 0;
  el.quiz.addEventListener(
    "touchstart",
    (e) => {
      const t = e.changedTouches[0];
      touchStartX = t.clientX;
      touchStartY = t.clientY;
    },
    { passive: true }
  );
  el.quiz.addEventListener(
    "touchend",
    (e) => {
      const t = e.changedTouches[0];
      const dx = t.clientX - touchStartX;
      const dy = t.clientY - touchStartY;
      if (Math.abs(dx) < 64 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
      if (dx < 0 && state.answered) {
        onNext();
      }
    },
    { passive: true }
  );

  if (el.appVersion) {
    const ver = (window.Drill && window.Drill.APP_VERSION) || "1.2.0";
    el.appVersion.textContent = `PyСобес v${ver}`;
  }

  refreshMenu();
})();
