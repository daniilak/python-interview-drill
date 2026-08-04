#!/usr/bin/env python3
"""Углублённые Senior-карточки: GIL, память, C-API, git — с нюансами «когда нельзя»."""
from __future__ import annotations

from bank.utils import q

SENIOR_DEPTH: list[dict] = [
    q(
        "GIL",
        "Почему CPU-bound чистый Python плохо масштабируется потоками в CPython?",
        [
            "GIL допускает исполнение байткода только одним потоком за раз",
            "потоки запрещены языком",
            "OS не умеет scheduling",
            "list не thread-safe никогда даже под GIL",
        ],
        0,
        "GIL сериализует исполнение Python-байткода. I/O и многие C-вызовы отпускают GIL → потоки полезны для ожидания. "
        "Для CPU: multiprocessing, нативные расширения с Py_BEGIN_ALLOW_THREADS, или free-threaded сборка (PEP 703) — "
        "но тогда нужна собственная потокобезопасность структур данных.",
        tags=["gil", "concurrency"],
        difficulty="senior",
    ),
    q(
        "GIL",
        "Что даёт Py_BEGIN_ALLOW_THREADS / Py_END_ALLOW_THREADS в C-расширении?",
        [
            "временно отпускает GIL на участке без обращения к Python API",
            "включает JIT",
            "удаляет refcount",
            "делает dict atomic навсегда",
        ],
        0,
        "Пока GIL отпущен, нельзя трогать Python-объекты: гонка с другими потоками/GC. "
        "Паттерн: подготовка аргументов под GIL → ALLOW_THREADS → чистый C/Fortran/IO → END → снова Python API. "
        "Ошибка здесь — use-after-free и порча интерпретатора.",
        tags=["gil", "c-api"],
        difficulty="senior",
    ),
    q(
        "CPython",
        "Что хранит заголовок PyObject (упрощённо, до immortal objects)?",
        [
            "refcount и указатель на тип (PyTypeObject*)",
            "только имя класса",
            "только GIL-токен",
            "только указатель на __dict__",
        ],
        0,
        "Любой объект — PyObject*: ob_refcnt + ob_type (+ у var-object ещё размер). "
        "Тип описывает tp_dealloc, tp_methods, slots протокола. Immortal objects (3.12+) меняют модель refcount для констант, "
        "но идея «объект = заголовок + полезные данные» остаётся.",
        tags=["cpython", "c-api"],
        difficulty="senior",
    ),
    q(
        "C-API",
        "Зачем нужен Py_INCREF / Py_DECREF?",
        [
            "управлять владением ссылкой: не дать GC/dealloc уничтожить нужный объект и не утекать",
            "ускорить арифметику int",
            "отключить GC навсегда",
            "заменить GIL",
        ],
        0,
        "Правила владения (stolen / new / borrowed reference) — главный источник багов в C-API. "
        "Borrowed (например из PyList_GetItem) нельзя DECREF «на всякий случай». "
        "Утечка INCREF → рост RSS; лишний DECREF → crash. Argument Clinic и pybind11/cffi снижают ручную боль.",
        tags=["c-api"],
        difficulty="senior",
    ),
    q(
        "память",
        "Почему cyclic GC нужен, если есть refcount?",
        [
            "циклы ссылок (A→B→A) держат refcount > 0 навсегда без сборщика циклов",
            "refcount не работает для int",
            "GC заменяет refcount полностью",
            "только для multiprocessing",
        ],
        0,
        "CPython: refcount для большинства объектов + periodic cyclic GC для контейнеров с циклом. "
        "__del__ на объектах в цикле усложняет сборку (и может откладывать утилизацию). "
        "gc.disable() не «ускоряет прод» магически — измеряй; иногда паузы GC важны latency-sensitive сервисам.",
        tags=["memory", "gc"],
        difficulty="senior",
    ),
    q(
        "память",
        "Что даёт memoryview / buffer protocol на практике?",
        [
            "нулевое/дешёвое представление чужого буфера без лишнего копирования bytes",
            "всегда быстрее list для любых данных",
            "замену multiprocessing",
            "автоматическую сериализацию в JSON",
        ],
        0,
        "bytes/bytearray/array/numpy/socket — через buffer protocol. memoryview позволяет срезать и читать без copy. "
        "Осторожно: underlying buffer не должен уехать (lifetime); для записи смотри readonly. "
        "Типичный win: парсинг бинарных протоколов, zero-copy пути в сетевых стеках.",
        tags=["memory", "buffer"],
        difficulty="senior",
    ),
    q(
        "git",
        "Что делает git rebase и когда он опасен?",
        [
            "переигрывает коммиты поверх другой базы; опасен на shared-истории без договорённости",
            "то же, что merge, всегда",
            "только удаляет remote",
            "создаёт тег автоматически",
        ],
        0,
        "rebase переписывает хеши. interactive (-i): squash/fixup/reword/reorder/edit. "
        "Конфликты решаются на каждом коммите (не как один merge-коммит). "
        "На уже запушенной shared-ветке нужен force-with-lease и согласование с командой; иначе у коллег «разъедется» история. "
        "merge предпочтительнее, когда важен факт слияния и неизменность опубликованных коммитов.",
        tags=["git", "rebase"],
        difficulty="senior",
    ),
    q(
        "git",
        "Чем `git push --force-with-lease` безопаснее `--force`?",
        [
            "откажется пушить, если remote ушёл вперёд с тех пор, как ты его видел",
            "никогда не переписывает историю",
            "делает rebase автоматически",
            "удаляет все remote-ветки",
        ],
        0,
        "Обычный --force затрёт чужие коммиты на remote «вслепую». "
        "--force-with-lease проверяет, что tip remote совпадает с твоим ожиданием — защита от затирания работы коллег после rebase.",
        tags=["git"],
        difficulty="senior",
    ),
    q(
        "asyncio",
        "Почему `time.sleep` внутри корутины — проблема, а `asyncio.sleep` — нет?",
        [
            "time.sleep блокирует поток event loop; asyncio.sleep отдаёт управление loop",
            "asyncio.sleep быстрее на CPU",
            "time.sleep запрещён синтаксисом",
            "разницы нет",
        ],
        0,
        "Один поток loop: любой блокирующий sync (sleep, тяжёлый CPU, sync HTTP) останавливает все задачи. "
        "Вынос: asyncio.to_thread / run_in_executor, нативные async-драйверы. "
        "Structured concurrency (TaskGroup) отменяет детей при ошибке — меньше «осиротевших» задач.",
        tags=["asyncio"],
        difficulty="senior",
    ),
    q(
        "security",
        "Почему pickle/yaml.load/unsafe deserialize опасны на недоверенном вводе?",
        [
            "могут сконструировать объекты и выполнить код при десериализации (RCE gadgets)",
            "только занимают много памяти",
            "запрещены PEP 8",
            "работают только на Windows",
        ],
        0,
        "Не десериализуй недоверенное бинарное/YAML/JSON-pickle. Для данных — json + явная схема (pydantic). "
        "Для YAML — safe_load. Секреты не логируй; сравнивай токены через secrets.compare_digest. "
        "SSRF: не давай пользователю выбирать URL к metadata IP (169.254.169.254) без allowlist.",
        tags=["security"],
        difficulty="senior",
    ),
    q(
        "CPython",
        "Что меняет free-threaded CPython (PEP 703) с точки зрения разработчика?",
        [
            "нет GIL по умолчанию в такой сборке — нужна потокобезопасность своего кода и зависимостей",
            "Python становится однопоточным",
            "удаляется refcount",
            "asyncio больше не нужен",
        ],
        0,
        "Без GIL гонки в чистом Python становятся реальными (list.append, dict update, свои кэши). "
        "Многие C-расширения предполагали GIL — их надо аудировать. "
        "Это не «бесплатный xN к скорости»: синхронизация, false sharing, single-thread regressions. Измеряй на своём workload.",
        tags=["gil", "cpython"],
        difficulty="senior",
    ),
    q(
        "performance",
        "Почему «переписать на async / убрать GIL» — плохой первый шаг оптимизации?",
        [
            "сначала профилируй: узкое место часто I/O, алгоритм O(n²) или лишние копии, а не «мало потоков»",
            "профилирование запрещено в проде",
            "GIL всегда главный bottleneck",
            "async всегда быстрее sync",
        ],
        0,
        "Инструменты: cProfile/py-spy/scalene, tracemalloc, логи latency-гистограмм. "
        "Частые wins: алгоритмы, кэш, batching, меньше сериализации, connection pool, правильные индексы БД. "
        "Async и free-threading — после того, как понятна модель нагрузки.",
        tags=["performance"],
        difficulty="senior",
    ),
]
