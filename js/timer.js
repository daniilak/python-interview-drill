(() => {
  "use strict";

  const Drill = (window.Drill = window.Drill || {});

  function createDeadlineTimer() {
    let rafId = null;
    let generation = 0;
    let pausedLeft = null;
    let running = false;
    let deadlineAt = 0;
    let totalMs = 0;
    let onTickCb = null;
    let onExpireCb = null;

    function stop() {
      generation += 1;
      running = false;
      pausedLeft = null;
      if (rafId != null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }

    function tick() {
      const gen = generation;
      if (!running || gen !== generation) return;
      const left = Math.max(0, deadlineAt - Date.now());
      if (onTickCb) onTickCb(left, gen);
      if (left <= 0) {
        running = false;
        rafId = null;
        if (onExpireCb) onExpireCb(gen);
        return;
      }
      rafId = requestAnimationFrame(tick);
    }

    /**
     * @param {object} opts
     * @param {number} opts.sec
     * @param {(leftMs: number, gen: number) => void} opts.onTick
     * @param {(gen: number) => void} opts.onExpire
     */
    function start({ sec, onTick, onExpire }) {
      stop();
      if (!sec || sec <= 0) return null;

      const gen = generation;
      totalMs = sec * 1000;
      deadlineAt = Date.now() + totalMs;
      running = true;
      onTickCb = onTick;
      onExpireCb = onExpire;
      rafId = requestAnimationFrame(tick);

      return { gen, totalMs, deadlineAt };
    }

    function pause() {
      if (!running) return false;
      pausedLeft = Math.max(0, deadlineAt - Date.now());
      running = false;
      if (rafId != null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      return true;
    }

    function resume() {
      if (pausedLeft == null || pausedLeft <= 0) return false;
      deadlineAt = Date.now() + pausedLeft;
      pausedLeft = null;
      running = true;
      rafId = requestAnimationFrame(tick);
      return true;
    }

    function isPaused() {
      return pausedLeft != null;
    }

    function isCurrent(gen) {
      return gen === generation;
    }

    return { stop, start, pause, resume, isPaused, isCurrent };
  }

  Drill.createDeadlineTimer = createDeadlineTimer;
})();
