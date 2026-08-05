// @meta topic=wasm group=Нативные расширения
// senior · 3 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Чем CPython на WASM ограничен?",
    "options": [
      "песочница: нет полного доступа к OS API как у native",
      "всегда быстрее native за счёт JIT WASM",
      "тип int отсутствует",
      "async/await запрещён"
    ],
    "answer": 0,
    "explain": "WASM в браузере/node без произвольных сокетов/файлов. WASI расширяет, но не desktop Linux. Подходит для Pyodide в браузере, не для замены серверного CPython 1:1.",
    "kind": "single",
    "id": "s90",
    "fixed": true
  },
  {
    "q": "Что такое WASI для Python в WASM?",
    "options": [
      "системный интерфейс (файлы, сокеты ограниченно) для WASM-модулей",
      "механизм GIL в WebAssembly",
      "GPU-ускорение NumPy",
      "формат wheel для браузера"
    ],
    "answer": 0,
    "explain": "WebAssembly без WASI — только вычисления. WASI даёт portable syscall API. Pyodide/WASM Python используют подмножество для запуска в sandbox.",
    "kind": "single",
    "id": "s138",
    "fixed": true
  },
  {
    "q": "Чем ограничены сокеты и файлы в браузерном Pyodide?",
    "options": [
      "песочницей браузера — нет произвольного OS I/O как на сервере",
      "в Pyodide нет типа int",
      "в Pyodide нет list",
      "в Pyodide нельзя определять функции"
    ],
    "answer": 0,
    "explain": "Pyodide крутится в браузерной песочнице: сеть/файлы ограничены моделью браузера (и Emscripten), это не полный POSIX. Типы int/list/функции на месте.",
    "kind": "single",
    "id": "s169",
    "fixed": true
  }
);
