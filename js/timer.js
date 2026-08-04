(() => {
  "use strict";

  const Drill = (window.Drill = window.Drill || {});

  function createDeadlineTimer() {
    let timeoutId = null;
    let rafId = null;
    let generation = 0;

    function stop() {
      generation += 1;
      if (timeoutId != null) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      if (rafId != null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
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
      const totalMs = sec * 1000;
      const deadlineAt = Date.now() + totalMs;

      const tick = () => {
        if (gen !== generation) return;
        const left = Math.max(0, deadlineAt - Date.now());
        onTick(left, gen);
        if (left <= 0) {
          onExpire(gen);
          return;
        }
        rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);
      timeoutId = setTimeout(() => {
        if (gen !== generation) return;
        onExpire(gen);
      }, totalMs + 30);

      return { gen, totalMs, deadlineAt };
    }

    function isCurrent(gen) {
      return gen === generation;
    }

    return { stop, start, isCurrent };
  }

  Drill.createDeadlineTimer = createDeadlineTimer;
})();
