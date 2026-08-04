(() => {
  "use strict";

  const Drill = (window.Drill = window.Drill || {});

  const STORAGE_KEY = "python-drill-v3";
  const LEGACY_KEYS = ["python-drill-v2", "python-drill-stats-v1"];
  const SCHEMA_VERSION = 3;

  function defaultStore() {
    return {
      schemaVersion: SCHEMA_VERSION,
      bestStreak: 0,
      totalAnswered: 0,
      mistakes: {},
      topicStats: {},
      settings: { timerSec: 25, inputMode: false },
    };
  }

  function normalizeMistakeEntry(key, entry) {
    if (!entry || typeof entry !== "object") return null;
    const snapshot = entry.snapshot || entry;
    if (!snapshot || typeof snapshot !== "object" || !snapshot.q) return null;
    const multi = snapshot.kind === "multi" || Array.isArray(snapshot.answer);
    let answer;
    if (multi) {
      answer = Array.isArray(snapshot.answer)
        ? snapshot.answer.map(Number).filter((n) => !Number.isNaN(n))
        : [Number(snapshot.answer) || 0];
    } else {
      answer = typeof snapshot.answer === "number" ? snapshot.answer : 0;
    }
    return {
      key: entry.key || key,
      snapshot: {
        id: snapshot.id,
        topic: snapshot.topic,
        group: snapshot.group,
        q: snapshot.q,
        code: snapshot.code || "",
        options: Array.isArray(snapshot.options) ? snapshot.options.slice() : [],
        answer,
        explain: snapshot.explain || "",
        kind: multi ? "multi" : "single",
        tags: Array.isArray(snapshot.tags) ? snapshot.tags.slice() : undefined,
      },
      wrongCount: Number(entry.wrongCount) || 1,
      lastAt: Number(entry.lastAt) || Date.now(),
    };
  }

  function migrateStore(raw, fromKey) {
    const base = defaultStore();
    if (!raw || typeof raw !== "object") return base;

    // v1: только bestStreak / totalAnswered
    if (fromKey === "python-drill-stats-v1" || (!raw.mistakes && !raw.settings && raw.bestStreak != null)) {
      base.bestStreak = Number(raw.bestStreak) || 0;
      base.totalAnswered = Number(raw.totalAnswered) || 0;
      return base;
    }

    const mistakes = {};
    const srcMistakes = raw.mistakes && typeof raw.mistakes === "object" ? raw.mistakes : {};
    for (const [k, v] of Object.entries(srcMistakes)) {
      const norm = normalizeMistakeEntry(k, v);
      if (norm) mistakes[norm.key] = norm;
    }

    return {
      ...base,
      bestStreak: Number(raw.bestStreak) || 0,
      totalAnswered: Number(raw.totalAnswered) || 0,
      mistakes,
      topicStats: raw.topicStats && typeof raw.topicStats === "object" ? raw.topicStats : {},
      settings: {
        ...base.settings,
        ...(raw.settings && typeof raw.settings === "object" ? raw.settings : {}),
      },
      schemaVersion: SCHEMA_VERSION,
    };
  }

  function readRaw(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || "null");
    } catch {
      return null;
    }
  }

  function loadStore() {
    try {
      let raw = readRaw(STORAGE_KEY);
      let fromKey = STORAGE_KEY;
      if (!raw) {
        for (const key of LEGACY_KEYS) {
          raw = readRaw(key);
          if (raw) {
            fromKey = key;
            break;
          }
        }
      }
      if (!raw) return defaultStore();

      const version = Number(raw.schemaVersion) || (fromKey === "python-drill-stats-v1" ? 1 : 2);
      if (version >= SCHEMA_VERSION && fromKey === STORAGE_KEY) {
        return {
          ...defaultStore(),
          ...raw,
          mistakes: raw.mistakes || {},
          topicStats: raw.topicStats || {},
          settings: { ...defaultStore().settings, ...(raw.settings || {}) },
          schemaVersion: SCHEMA_VERSION,
        };
      }

      const migrated = migrateStore(raw, fromKey);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
      return migrated;
    } catch {
      return defaultStore();
    }
  }

  function saveStore(patch) {
    const next = { ...loadStore(), ...patch, schemaVersion: SCHEMA_VERSION };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    return next;
  }

  function patchStore(mutator) {
    const store = loadStore();
    mutator(store);
    store.schemaVersion = SCHEMA_VERSION;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    return store;
  }

  Drill.storage = {
    STORAGE_KEY,
    SCHEMA_VERSION,
    defaultStore,
    loadStore,
    saveStore,
    patchStore,
  };
})();
