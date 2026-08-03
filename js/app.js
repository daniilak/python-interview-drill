(() => {
  "use strict";

  const STORAGE_KEY = "python-drill-v2";
  const ROUND_SIZE = 20;
  const RECENT_LIMIT = 40;

  const LEVELS = {
    junior: {
      label: "Junior",
      bank: () => window.QUESTIONS_JUNIOR || [],
    },
    middle: {
      label: "Middle",
      bank: () => window.QUESTIONS_MIDDLE || [],
    },
    senior: {
      label: "Senior",
      bank: () => window.QUESTIONS_SENIOR || [],
    },
    junior_middle: {
      label: "Junior+Middle",
      bank: () => [...(window.QUESTIONS_JUNIOR || []), ...(window.QUESTIONS_MIDDLE || [])],
    },
    middle_senior: {
      label: "Middle+Senior",
      bank: () => [...(window.QUESTIONS_MIDDLE || []), ...(window.QUESTIONS_SENIOR || [])],
    },
    mistakes: {
      label: "Ошибки",
      bank: () => Object.values(loadStore().mistakes || {}).map((m) => m.snapshot),
    },
  };

  let questionDeadlineTimer = null;
  let questionDeadlineRaf = null;

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
    feedbackTitle: document.getElementById("feedback-title"),
    feedbackExplain: document.getElementById("feedback-explain"),
    feedbackWhy: document.getElementById("feedback-why"),
    quizHint: document.getElementById("quiz-hint"),
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
    deadlineAt: 0,
    deadlineTotalMs: 0,
  };

  function defaultStore() {
    return {
      bestStreak: 0,
      totalAnswered: 0,
      mistakes: {},
      topicStats: {},
      settings: { timerSec: 25, inputMode: false },
    };
  }

  function loadStore() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!raw || typeof raw !== "object") {
        // мягкая миграция со старого ключа статистики
        try {
          const legacy = JSON.parse(localStorage.getItem("python-drill-stats-v1") || "null");
          if (legacy) {
            const migrated = defaultStore();
            migrated.bestStreak = legacy.bestStreak || 0;
            migrated.totalAnswered = legacy.totalAnswered || 0;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
            return migrated;
          }
        } catch {
          /* ignore */
        }
        return defaultStore();
      }
      return {
        ...defaultStore(),
        ...raw,
        mistakes: raw.mistakes || {},
        topicStats: raw.topicStats || {},
        settings: { ...defaultStore().settings, ...(raw.settings || {}) },
      };
    } catch {
      return defaultStore();
    }
  }

  function saveStore(patch) {
    const next = { ...loadStore(), ...patch };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    return next;
  }

  function patchStore(mutator) {
    const store = loadStore();
    mutator(store);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    return store;
  }

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

  function buildShuffledDeck(bank) {
    const recent = new Set(state.recentIds);
    const fresh = [];
    const seen = [];
    for (const q of bank) {
      (recent.has(questionKey(q)) ? seen : fresh).push(q);
    }
    if (fresh.length < Math.min(5, bank.length)) return shuffle(bank);
    return shuffle(fresh).concat(shuffle(seen));
  }

  function shuffleOptions(question) {
    const opts = (question.options || []).slice();
    const correctText = opts[question.answer];
    const shuffled = shuffle(opts);
    return {
      ...question,
      options: shuffled,
      answer: Math.max(0, shuffled.indexOf(correctText)),
      _correctText: correctText,
    };
  }

  function showScreen(name) {
    el.menu.classList.toggle("active", name === "menu");
    el.groups.classList.toggle("active", name === "groups");
    el.quiz.classList.toggle("active", name === "quiz");
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

  function refreshMenu() {
    for (const key of ["junior", "middle", "senior", "junior_middle", "middle_senior"]) {
      const n = LEVELS[key].bank().length;
      const node = document.getElementById(`meta-${key}`);
      if (node) {
        const groups = groupCounts(LEVELS[key].bank()).length;
        node.textContent = `${n} вопросов · ${groups} тем`;
      }
    }
    const store = loadStore();
    const mc = Object.keys(store.mistakes || {}).length;
    el.bestStreak.textContent = String(store.bestStreak || 0);
    el.totalAnswered.textContent = String(store.totalAnswered || 0);
    el.mistakesCount.textContent = String(mc);
    el.metaMistakes.textContent = mc ? `${mc} карточек · жми, чтобы повторить` : "Пока пусто — копи ошибки в сессии";
    el.menuStats.hidden = !(store.totalAnswered > 0 || mc > 0);

    el.settingTimer.value = String(store.settings.timerSec ?? 25);
    el.settingInput.checked = !!store.settings.inputMode;
    state.timerSec = Number(store.settings.timerSec ?? 25);
    state.inputMode = !!store.settings.inputMode;
  }

  function syncSettingsFromUI() {
    if (el.settingTimer) state.timerSec = Number(el.settingTimer.value) || 0;
    if (el.settingInput) state.inputMode = !!el.settingInput.checked;
  }

  function persistSettings() {
    syncSettingsFromUI();
    patchStore((s) => {
      s.settings.timerSec = state.timerSec;
      s.settings.inputMode = state.inputMode;
    });
  }

  function openGroups(level) {
    if (level === "mistakes") {
      const bank = LEVELS.mistakes.bank();
      if (!bank.length) {
        alert("Пока нет сохранённых ошибок. Ответь неправильно — карточка попадёт сюда.");
        return;
      }
      state.level = "mistakes";
      startSession(null);
      return;
    }

    const bank = LEVELS[level].bank();
    if (!bank.length) {
      alert("Банк вопросов ещё не загружен.");
      return;
    }
    state.level = level;
    el.groupsLevelLabel.textContent = LEVELS[level].label;
    el.groupList.innerHTML = "";

    const allBtn = document.createElement("button");
    allBtn.type = "button";
    allBtn.className = "group-card is-all";
    const allPct = topicAccuracy(level, null);
    allBtn.innerHTML = `
      <span class="group-card-title">Все темы</span>
      <span class="group-card-count">${bank.length}</span>
      <span class="group-card-sub">Смешанная серия · автоперемешивание${allPct != null ? ` · ${allPct}% верных` : ""}</span>
      ${allPct != null ? `<div class="group-progress"><span style="width:${allPct}%"></span></div>` : ""}
    `;
    allBtn.addEventListener("click", () => startSession(null));
    el.groupList.appendChild(allBtn);

    for (const [name, count] of groupCounts(bank)) {
      const pct = topicAccuracy(level, name);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "group-card";
      btn.innerHTML = `
        <span class="group-card-title">${name}</span>
        <span class="group-card-count">${count}${pct != null ? `<div class="group-card-pct">${pct}%</div>` : ""}</span>
        ${pct != null ? `<div class="group-progress"><span style="width:${pct}%"></span></div>` : ""}
      `;
      btn.addEventListener("click", () => startSession(name));
      el.groupList.appendChild(btn);
    }

    showScreen("groups");
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

  function startSession(group) {
    syncSettingsFromUI();
    persistSettings();
    state.group = group;
    state.bank = activeBank();
    if (!state.bank.length) {
      alert("В этой теме пока нет вопросов.");
      return;
    }
    state.recentIds = [];
    reshuffleDeck();
    state.streak = 0;
    state.correct = 0;
    state.total = 0;
    state.answered = false;
    el.levelBadge.textContent = LEVELS[state.level].label;
    el.groupBadge.textContent = group || "Все темы";
    el.streakCount.textContent = "0";
    el.progressFill.style.width = "0%";
    showScreen("quiz");
    nextQuestion();
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
      const tail = shuffle(state.deck.slice(state.deckIndex));
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
        // «Что выведет print(...)?» при отдельном code-блоке
        text = "Что выведет код?";
      } else if (!text) {
        text = "Что выведет код?";
      }
    }

    return { text, code };
  }

  function stopDeadline() {
    if (questionDeadlineTimer) {
      clearTimeout(questionDeadlineTimer);
      questionDeadlineTimer = null;
    }
    if (questionDeadlineRaf) {
      cancelAnimationFrame(questionDeadlineRaf);
      questionDeadlineRaf = null;
    }
  }

  function startDeadline() {
    stopDeadline();
    const sec = state.timerSec;
    if (!sec || sec <= 0) {
      el.timer.hidden = true;
      el.timerTrack.hidden = true;
      return;
    }
    el.timer.hidden = false;
    el.timerTrack.hidden = false;
    state.deadlineTotalMs = sec * 1000;
    state.deadlineAt = Date.now() + state.deadlineTotalMs;
    el.timerSec.textContent = String(sec);
    el.timer.classList.remove("is-low");
    el.timerFill.classList.remove("is-low");
    el.timerFill.style.width = "100%";

    const tick = () => {
      if (state.answered) return;
      const left = Math.max(0, state.deadlineAt - Date.now());
      const s = Math.ceil(left / 1000);
      el.timerSec.textContent = String(s);
      const pct = (left / state.deadlineTotalMs) * 100;
      el.timerFill.style.width = `${pct}%`;
      const low = left <= 5000;
      el.timer.classList.toggle("is-low", low);
      el.timerFill.classList.toggle("is-low", low);
      if (left <= 0) {
        finishAnswer({ timedOut: true });
        return;
      }
      questionDeadlineRaf = requestAnimationFrame(tick);
    };
    questionDeadlineRaf = requestAnimationFrame(tick);
    questionDeadlineTimer = setTimeout(() => {
      if (!state.answered) finishAnswer({ timedOut: true });
    }, state.deadlineTotalMs + 30);
  }

  function nextQuestion() {
    stopDeadline();
    state.current = drawFromDeck();
    state.answered = false;

    el.feedback.hidden = true;
    el.feedback.classList.remove("is-good", "is-bad");
    el.feedbackWhy.hidden = true;
    el.feedbackWhy.textContent = "";
    el.feedbackExplain.hidden = false;
    el.btnNext.textContent = "Дальше";
    el.options.innerHTML = "";
    el.answerInput.value = "";
    el.answerInput.disabled = false;
    [...el.inputForm.querySelectorAll("button")].forEach((b) => (b.disabled = false));
    const shell = el.inputForm.querySelector(".input-shell");
    if (shell) shell.classList.remove("is-ok", "is-fail");

    const q = state.current;
    const parsed = prepareDisplay(q);
    el.topicBadge.textContent = q.topic;
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

    if (state.inputMode) {
      el.options.hidden = true;
      el.inputForm.hidden = false;
      if (el.quizHint) el.quizHint.textContent = "Введи ответ своими словами (кавычки не обязательны)";
      setTimeout(() => el.answerInput.focus(), 30);
    } else {
      el.options.hidden = false;
      el.inputForm.hidden = true;
      if (el.quizHint) el.quizHint.textContent = "Выбери один верный вариант из списка ниже";
      q.options.forEach((text, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option";
        btn.setAttribute("role", "option");
        btn.textContent = text;
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

  function answersMatch(user, correct) {
    const a = normalizeAnswer(user);
    const b = normalizeAnswer(correct);
    if (a === b) return true;
    // частые варианты записи
    const aliases = {
      "none": ["none", "null"],
      "true": ["true", "1"],
      "false": ["false", "0"],
    };
    for (const list of Object.values(aliases)) {
      if (list.includes(a) && list.includes(b)) return true;
    }
    return false;
  }

  function snapshotQuestion(q) {
    return {
      id: q.id,
      topic: q.topic,
      group: q.group,
      q: q.q,
      code: q.code || "",
      options: q.options.slice(),
      answer: typeof q.answer === "number" ? q.answer : 0,
      explain: q.explain || "",
    };
  }

  function recordMistake(rawQ) {
    const key = questionKey(rawQ);
    patchStore((s) => {
      const prev = s.mistakes[key];
      s.mistakes[key] = {
        key,
        snapshot: snapshotQuestion(rawQ),
        wrongCount: (prev?.wrongCount || 0) + 1,
        lastAt: Date.now(),
      };
    });
  }

  function clearMistake(rawQ) {
    const key = questionKey(rawQ);
    patchStore((s) => {
      delete s.mistakes[key];
    });
  }

  function recordTopic(ok) {
    const group = state.group || state.current?.group || "Все темы";
    const key = topicStatKey(state.level, state.group);
    // also per concrete group of question when "all topics"
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

  function buildLearningExplain(q, correctText) {
    const explain = (q.explain || "").trim();
    const correct = String(correctText || "").trim();
    const parts = [];
    if (explain) parts.push(explain);
    const explainHasCorrect =
      correct &&
      explain.toLowerCase().includes(correct.toLowerCase().slice(0, Math.min(24, correct.length)));
    if (correct && !explainHasCorrect) {
      parts.push(`Правильный ответ: «${correct}».`);
    }
    return parts.join(" ").trim() || (correct ? `Верный вариант: «${correct}».` : "");
  }

  function buildWhyWrong(q, chosenText, timedOut) {
    const correct = q._correctText ?? q.options[q.answer];
    const parts = [];
    if (timedOut) {
      parts.push("Время вышло — ответ не засчитан. Ниже разбор, чтобы запомнить тему.");
    }
    parts.push(`Вариант в списке: <strong>${escapeHtml(correct)}</strong>`);
    if (chosenText != null && String(chosenText).trim() !== "" && chosenText !== correct) {
      parts.push(`Ты ответил: <strong>${escapeHtml(chosenText)}</strong>`);
    }
    return parts.join("<br>");
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function finishAnswer({ choiceIndex = null, typed = null, timedOut = false } = {}) {
    if (state.answered) return;
    state.answered = true;
    stopDeadline();
    state.total += 1;

    const q = state.current;
    const raw = state.currentRaw || q;
    const correctText = q._correctText ?? q.options[q.answer];
    let ok = false;
    let chosenText = null;

    if (timedOut) {
      ok = false;
      chosenText = null;
    } else if (state.inputMode) {
      chosenText = typed ?? el.answerInput.value;
      ok = answersMatch(chosenText, correctText);
    } else {
      ok = choiceIndex === q.answer;
      chosenText = q.options[choiceIndex];
    }

    if (!state.inputMode) {
      const buttons = [...el.options.querySelectorAll(".option")];
      buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.answer) btn.classList.add("correct");
        else if (choiceIndex != null && i === choiceIndex && !ok) btn.classList.add("wrong");
        else btn.classList.add("dim");
      });
    } else {
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
      el.feedbackTitle.textContent = "Верно!";
      el.feedback.classList.add("is-good");
      el.feedbackExplain.textContent = q.explain || "";
      el.feedbackExplain.hidden = !q.explain;
      el.feedbackWhy.hidden = true;
      el.btnNext.textContent = "Дальше";
      clearMistake(raw);
      if (state.level === "mistakes") {
        state.deck = state.deck.filter((item) => questionKey(item) !== questionKey(raw));
        if (state.deckIndex > state.deck.length) state.deckIndex = state.deck.length;
      }
    } else {
      state.streak = 0;
      el.feedbackTitle.textContent = timedOut ? "Время вышло" : "Неверно";
      el.feedback.classList.add("is-bad");
      el.feedbackExplain.hidden = false;
      el.feedbackExplain.textContent = buildLearningExplain(q, correctText);
      el.feedbackWhy.hidden = false;
      el.feedbackWhy.innerHTML = buildWhyWrong(q, chosenText, timedOut);
      el.btnNext.textContent = "Дальше";
      recordMistake(raw);
    }

    el.streakCount.textContent = String(state.streak);
    el.sessionScore.textContent = `${state.correct} / ${state.total}`;
    el.feedback.hidden = false;

    const filled = ((state.total % ROUND_SIZE) / ROUND_SIZE) * 100;
    el.progressFill.style.width = `${filled === 0 ? 100 : filled}%`;

    patchStore((s) => {
      s.bestStreak = Math.max(s.bestStreak || 0, state.streak);
      s.totalAnswered = (s.totalAnswered || 0) + 1;
    });

    el.btnNext.focus();
  }

  function onNext() {
    if (!state.answered) return;
    if (state.level === "mistakes" && !activeBank().length) {
      alert("Все ошибки разобраны. Отличная работа!");
      showScreen("menu");
      refreshMenu();
      return;
    }
    if (state.total % ROUND_SIZE === 0) el.progressFill.style.width = "0%";
    nextQuestion();
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
    stopDeadline();
    if (state.level === "mistakes") {
      showScreen("menu");
      refreshMenu();
    } else {
      showScreen("groups");
    }
  });

  el.btnNext.addEventListener("click", onNext);

  el.settingTimer.addEventListener("change", persistSettings);
  el.settingInput.addEventListener("change", persistSettings);

  el.btnClearMistakes.addEventListener("click", () => {
    if (!confirm("Очистить колоду ошибок?")) return;
    patchStore((s) => {
      s.mistakes = {};
    });
    refreshMenu();
  });

  el.inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (state.answered || !state.inputMode) return;
    finishAnswer({ typed: el.answerInput.value });
  });

  document.addEventListener("keydown", (e) => {
    if (!el.quiz.classList.contains("active")) return;
    if (state.answered && (e.key === "Enter" || e.key === " ") && document.activeElement !== el.answerInput) {
      e.preventDefault();
      onNext();
      return;
    }
    if (state.answered || state.inputMode) return;
    const n = Number(e.key);
    if (n >= 1 && n <= 4) {
      const btn = el.options.querySelectorAll(".option")[n - 1];
      if (btn) btn.click();
    }
  });

  refreshMenu();
})();
