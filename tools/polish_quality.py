#!/usr/bin/env python3
"""Эталонная правка карточек (уровень s31/s768): вопрос, варианты, разбор.

Ничего не удаляет. Пишет в js/data + bank/overrides.
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

_ROOT = Path(__file__).resolve().parent.parent
if str(_ROOT) not in sys.path:
    sys.path.insert(0, str(_ROOT))

from bank.preserve import (  # noqa: E402
    DATA_DIR,
    load_js_bank,
    load_overrides,
    save_overrides,
    sync_override_from_item,
    write_js_bank,
)

LEVEL_VAR = {
    "junior": "QUESTIONS_JUNIOR",
    "middle": "QUESTIONS_MIDDLE",
    "senior": "QUESTIONS_SENIOR",
}

# Эталонные карточки по ключу (подстрока в q.lower() или точный id)
CURATED: dict[str, dict] = {
    "poison message": {
        "q": "Что такое poison message в очереди сообщений?",
        "options": [
            "сообщение, которое снова и снова валит воркер при обработке",
            "любое сообщение старше TTL в Redis",
            "шифрованный payload, который нельзя прочитать без ключа",
            "служебный heartbeat между брокером и клиентом",
        ],
        "answer": 0,
        "explain": (
            "Poison message — «ядовитое» сообщение: воркер падает или откатывается на нём, "
            "сообщение возвращается в очередь и цикл повторяется. Очередь деградирует, "
            "остальные сообщения встают. Лечат retry-лимитом, dead-letter queue и изоляцией "
            "обработчика."
        ),
    },
    "load shedding": {
        "q": "Что означает load shedding под перегрузкой?",
        "options": [
            "осознанно отбрасывать часть запросов, чтобы система выжила",
            "всегда увеличивать число реплик без отказа в обслуживании",
            "кэшировать все ответы навечно",
            "отключать логирование, чтобы освободить CPU",
        ],
        "answer": 0,
        "explain": (
            "Load shedding — сброс нагрузки: при перегрузе лучше быстро отказать части "
            "клиентов (503, drop), чем обслуживать всех медленно и уронить всё. Часто "
            "сочетают с приоритетами, rate limit и circuit breaker."
        ),
    },
    "timeout budget": {
        "q": "Что такое timeout budget в цепочке сервисов?",
        "options": [
            "общий дедлайн на весь путь запроса, который делят вызовы по цепочке",
            "отдельный бесконечный таймаут для каждого микросервиса",
            "только таймаут TCP handshake",
            "лимит на размер HTTP-заголовков",
        ],
        "answer": 0,
        "explain": (
            "Timeout budget — общий запас времени на запрос. Каждый downstream-вызов берёт "
            "остаток бюджета, а не свой «вечный» таймаут. Иначе цепочка из N сервисов по 30 с "
            "даст минуты ожидания и каскадные ретраи."
        ),
    },
    "hedged requests": {
        "q": "Зачем используют hedged requests?",
        "options": [
            "шлют параллельный дубль запроса к другой реплике, если первая тормозит",
            "кэшируют ответ на клиенте без повторных запросов",
            "отменяют все ретраи навсегда после первой ошибки",
            "увеличивают размер пула соединений вдвое",
        ],
        "answer": 0,
        "explain": (
            "Hedged requests: если ответ от одной реплики задерживается, параллельно "
            "спрашивают другую и берут первый успешный. Снижает хвост латентности, но "
            "увеличивает нагрузку — нужны лимиты и отмена проигравшего запроса."
        ),
    },
    "graceful degradation": {
        "q": "Что такое graceful degradation?",
        "options": [
            "урезать второстепенные функции, но сохранить основной сценарий",
            "немедленно выключить весь сервис при любой ошибке",
            "игнорировать все ошибки и всегда отвечать 200",
            "перезапускать процесс на каждый запрос",
        ],
        "answer": 0,
        "explain": (
            "Graceful degradation — «мягкая деградация»: при сбое зависимости отключают "
            "рекомендации, превью, дорогую аналитику и т.п., но логин/заказ/чтение данных "
            "продолжают работать. Лучше урезанный сервис, чем полный даунтайм."
        ),
    },
    "bulkhead": {
        "q": "Что делает паттерн bulkhead (перегородка) в отказоустойчивости?",
        "options": [
            "изолирует пулы ресурсов по частям системы, чтобы сбой одной не убил всё",
            "объединяет все соединения в один общий пул для экономии",
            "отключает таймауты, чтобы запросы дольше ждали",
            "меняет протокол с HTTP на UDP для скорости",
        ],
        "answer": 0,
        "explain": (
            "Bulkhead делит систему на отсеки: отдельные пулы потоков, соединений, очередей. "
            "Падение одного отсека не исчерпывает ресурсы остальных — как перегородки на корабле."
        ),
    },
    "circuit breaker": {
        "q": "Зачем нужен circuit breaker при вызове внешнего сервиса?",
        "options": [
            "временно перестаёт звать падающую зависимость и даёт ей «остыть»",
            "всегда повторяет запрос без паузы до успеха",
            "шифрует трафик между сервисами",
            "балансирует CPU между потоками Python",
        ],
        "answer": 0,
        "explain": (
            "Circuit breaker после серии ошибок открывается и быстро отказывает без реальных "
            "вызовов. Через паузу пробует снова (half-open). Так не устраивают retry storm и "
            "не тратят бюджет на заведомо мёртвый сервис."
        ),
    },
    "retry storm": {
        "q": "Что такое retry storm в распределённой системе?",
        "options": [
            "клиенты одновременно долбят упавший сервис повторами и усиливают аварию",
            "плановый перезапуск всех реплик по расписанию",
            "миграцию схемы БД без даунтайма",
            "кэш, который никогда не промахивается",
        ],
        "answer": 0,
        "explain": (
            "Retry storm — лавина повторных запросов: после сбоя все клиенты разом начинают "
            "ретраи без разнесения по времени. Без jitter, backoff и лимитов нагрузка на уже "
            "больной сервис только растёт. Лечат случайной задержкой, экспоненциальным "
            "backoff, budget на ретраи и circuit breaker."
        ),
    },
    "anti-corruption layer": {
        "q": "Зачем нужен anti-corruption layer (антикоррупционный слой)?",
        "options": [
            "адаптер, который изолирует ваш домен от чужой модели или legacy API",
            "файрвол на уровне ОС для блокировки портов",
            "обязательный Redis перед каждой таблицей БД",
            "генератор OpenAPI-схемы из docstring",
        ],
        "answer": 0,
        "explain": (
            "В DDD anti-corruption layer — переводчик на границе: внешняя модель "
            "(легаси, чужой сервис) не протекает во внутренний домен. Снаружи — их "
            "термины и DTO, внутри — ваши сущности и инварианты."
        ),
    },
    "leader election": {
        "q": "Зачем в кластере нужен leader election?",
        "options": [
            "выбрать один узел, который координирует действия, чтобы не было двойной работы",
            "равномерно раздать CPU-квоты всем процессам Python",
            "выбрать самый новый Python interpreter на машине",
            "проголосовать за формат логов в команде",
        ],
        "answer": 0,
        "explain": (
            "Leader election выбирает одного лидера среди реплик: только он пишет в шард, "
            "планирует джобы или держит лок. Остальные — фолловеры. Нужен при split-brain "
            "осторожный fencing, иначе два «лидера» портят данные."
        ),
    },
    "cache stampede": {
        "q": "Что такое cache stampede (thundering herd)?",
        "options": [
            "много клиентов одновременно промахиваются по кэшу и бьют в origin",
            "переполнение диска логами кэш-сервера",
            "коллизия хешей в одном бакете dict",
            "утечка памяти из-за циклических ссылок",
        ],
        "answer": 0,
        "explain": (
            "Stampede / thundering herd: ключ истёк, и толпа запросов разом идёт в БД или "
            "тяжёлый сервис. Лечат singleflight/lock на ключ, soft TTL, probabilistic early "
            "expiration и stale-while-revalidate."
        ),
    },
    "thundering herd": {
        "q": "Что такое thundering herd (cache stampede)?",
        "options": [
            "массовый одновременный промах кэша с ударом по origin",
            "один клиент, который долго держит соединение",
            "ошибка только на уровне DNS",
            "остановку GC в CPython",
        ],
        "answer": 0,
        "explain": (
            "Thundering herd — «стадо» клиентов одновременно бьёт в один ресурс после "
            "просрочки кэша или пробуждения. Смягчают блокировкой на ключ, jitter и "
            "фоновым обновлением."
        ),
    },
}

TOPIC_DISTRACTORS: dict[str, list[str]] = {
    "distributed": [
        "это только про локальный однопоточный скрипт без сети",
        "это настройка форматирования логов в logging",
        "это синтаксическая конструкция самого Python",
    ],
    "security": [
        "это способ ускорить цикл интерпретатора CPython",
        "это аннотация из модуля typing без runtime-эффекта",
        "это параметр только для CI-пайплайна",
    ],
    "cache": [
        "это полное отключение любого кэширования",
        "это увеличение RAM без смены политики истечения",
        "это удаление всех ключей при каждом чтении",
    ],
    "db": [
        "это поведение, одинаковое во всех СУБД без исключений",
        "это только про файловый кэш операционной системы",
        "это замена индексов на полный table scan всегда",
    ],
    "architecture": [
        "это встроенная опция GIL в CPython",
        "это обязательная замена SQL на NoSQL",
        "это приём только из вёрстки и CSS",
    ],
    "design": [
        "это правило только для именования переменных",
        "это настройка компилятора C",
        "это формат файла requirements.txt",
    ],
    "git": [
        "команда никогда не меняет историю коммитов",
        "команда сама делает merge без конфликтов",
        "команда удаляет весь remote-репозиторий",
    ],
    "asyncio": [
        "это блокирующий вызов time.sleep в главном потоке ОС",
        "это создание нового процесса через multiprocessing",
        "это отключение event loop навсегда",
    ],
    "testing": [
        "это замена всех тестов одним ручным кликом в UI",
        "это отключение ассертов в продакшене",
        "это обязательный sleep(10) в каждом тесте",
    ],
    "typing": [
        "это ускорение исполнения байткода в runtime",
        "это обязательная проверка типов при каждом вызове в CPython",
        "это замена исключений на коды возврата",
    ],
}

DEFAULT_DISTRACTORS = [
    "это не про данную тему, а про синтаксис списков",
    "это устаревший приём без практического применения сейчас",
    "это поведение, которое всегда включено по умолчанию везде",
]

_TEMPLATE_EXPLAIN = re.compile(
    r"\s*(Верный смысл:|Имеется в виду:|Подходит ответ «[^»]+»\.?|"
    r"Кратко зафиксируй формулировку своими словами — так лучше запоминается\.?|"
    r"Это ожидаемый ответ на собеседовании; соседние варианты обычно про другие темы\.?)",
    re.I,
)

_TOPIC_TAIL = re.compile(
    r"\s*(В распределённых системах приходится жить с очередями.*?|"
    r"Тесты бывают unit, integration.*?|"
    r"В безопасности важно не доверять.*?|"
    r"Аннотации типов — подсказки.*?|"
    r"Конкурентность бывает на потоках.*?|"
    r"Кэш полезен для скорости.*?|"
    r"Архитектура — про границы.*?|"
    r"Речь про асинхронный event loop.*?|"
    r"Вопрос про устройство интерпретатора.*?|"
    r"Память в CPython устроена.*?|"
    r"Сборка и распространение пакетов.*?|"
    r"Наблюдаемость строится на логах.*?|"
    r"В ООП Python методы получают self явно.*?)$",
    re.I | re.S,
)


def _cap(s: str) -> str:
    s = s.strip()
    return s[0].upper() + s[1:] if s else s


def _period(s: str) -> str:
    s = s.strip()
    if s and s[-1] not in ".!?…":
        s += "."
    return s


def correct_text(item: dict) -> str:
    opts = item.get("options") or []
    ans = item.get("answer")
    if isinstance(ans, int) and 0 <= ans < len(opts):
        return opts[ans]
    if isinstance(ans, list):
        return "; ".join(opts[i] for i in ans if isinstance(i, int) and 0 <= i < len(opts))
    return ""


def strip_templates(explain: str) -> str:
    explain = _TEMPLATE_EXPLAIN.sub(" ", explain)
    explain = _TOPIC_TAIL.sub("", explain)
    explain = re.sub(r"\s{2,}", " ", explain).strip(" .")
    return explain


def rewrite_weak_question(q: str, correct: str) -> str:
    q = q.strip()

    m3 = re.match(r"^Выбери верный вариант:\s*(.+?)\??\s*$", q, re.I)
    if m3:
        core = m3.group(1).strip().rstrip("?")
        if re.match(
            r"^(Что|Чем|Как|Зачем|Почему|Когда|Где|Какой|Какая|Какое|Какие|В чём|Верно ли)",
            core,
            re.I,
        ):
            return core if core.endswith("?") else core + "?"
        return f"Что верно про {core}?"

    m = re.match(r"^Что (?:означает|такое)\s+[«\"]?(.+?)[»\"]?\??\s*$", q, re.I | re.S)
    if not m:
        return q

    core = m.group(1).strip().strip(" «»\"")
    low = core.lower()

    special = {
        "ctypes удобен для": "Для чего удобен модуль ctypes?",
        "atomic словари": "Безопасны ли составные операции с dict в многопоточности?",
        "проблема chatty api": "В чём проблема chatty API?",
        "инкапсуляция": "Что такое инкапсуляция?",
        "полиморфизм": "Что такое полиморфизм?",
        "pip": "Что такое pip?",
        "legb": "Что такое правило LEGB?",
        "@staticmethod": "Что делает декоратор @staticmethod?",
        "property": "Что такое property в Python?",
        "__subclasshook__": "Зачем нужен __subclasshook__ у ABC?",
        "register() у abc": "Что делает ABC.register()?",
        "паттерн observer": "В чём суть паттерна Observer?",
        "unittest.mock.patch подменяет": "Что подменяет unittest.mock.patch?",
        "side_effect может": "Что умеет side_effect у мока?",
        "simplefilter('error')": "Что делает warnings.simplefilter('error')?",
        "runtime_checkable protocol": "Что даёт @runtime_checkable у Protocol?",
        "__closure__ у функции": "Что хранит __closure__ у функции?",
        "режим 'r'": "Что означает режим 'r' у open()?",
        "режим 'a' у open": "Что означает режим 'a' у open()?",
        "indentationerror": "Что такое IndentationError?",
        "copy() делает": "Что делает list.copy() / dict.copy()?",
        "f.read() читает": "Что возвращает f.read() без аргументов?",
        "множественное наследование": "Что такое множественное наследование?",
        "наследование записывается": "Как в Python записывается наследование класса?",
        "pip freeze": "Что показывает команда pip freeze?",
        "__getattr__ на модуле (pep 562)": "Зачем нужен module-level __getattr__ (PEP 562)?",
        "chain of responsibility в middleware веб-фреймворка": (
            "Как проявляется Chain of Responsibility в middleware веб-фреймворка?"
        ),
    }
    if low in special:
        return special[low]

    if re.search(r"\s+удобен для$", low):
        return f"Для чего удобен {re.sub(r'\s+удобен для$', '', core, flags=re.I)}?"
    if re.search(r"\s+лечится$", low):
        return f"Как обычно защищаются от {re.sub(r'\s+лечится$', '', core, flags=re.I)}?"
    if low.startswith("проблема "):
        return f"В чём проблема {core[9:].strip()}?"
    if re.search(r"\s+подменяет$", low):
        return f"Что подменяет {re.sub(r'\s+подменяет$', '', core, flags=re.I)}?"
    if re.search(r"\s+делает$", low):
        return f"Что делает {re.sub(r'\s+делает$', '', core, flags=re.I)}?"
    if re.search(r"\s+может$", low):
        return f"Что умеет {re.sub(r'\s+может$', '', core, flags=re.I)}?"
    if re.search(r"\s+читает$", low):
        return f"Что читает {re.sub(r'\s+читает$', '', core, flags=re.I)}?"
    if re.search(r"\s+содержит$", low):
        return f"Что содержит {re.sub(r'\s+содержит$', '', core, flags=re.I)}?"

    if len(core) <= 48:
        return f"Что такое {core}?" if len(core.split()) <= 3 else f"Что означает «{core}»?"

    return f"Что верно про {core}?"


def rebuild_explain(explain: str, correct: str, q: str) -> str:
    body = strip_templates(explain)
    if not body and correct:
        return _period(
            _cap(
                f"{correct.rstrip('.')}. На собеседовании ждут это понимание, "
                f"а не соседние похожие формулировки"
            )
        )

    # Если тело — одно короткое существительное/телеграф
    if len(body) < 55 and correct:
        if correct.lower() not in body.lower():
            body = f"{body.rstrip('.')}. {correct.rstrip('.')}"
        else:
            body = (
                f"{body.rstrip('.')}. Запомни формулировку: так отличают этот случай "
                f"от похожих на собеседовании"
            )

    # Убрать эхо «Верный смысл» остатки
    body = re.sub(r"^\s*Верный смысл:\s*", "", body, flags=re.I)
    body = re.sub(r"^\s*Имеется в виду:\s*", "", body, flags=re.I)

    return _period(_cap(body))


def fix_distractors(item: dict) -> list[str]:
    opts = list(item.get("options") or [])
    if len(opts) < 2:
        return opts
    ans = item.get("answer")
    if not isinstance(ans, int):
        return opts
    topic = str(item.get("topic") or "")
    pool = list(TOPIC_DISTRACTORS.get(topic, DEFAULT_DISTRACTORS))
    for d in DEFAULT_DISTRACTORS:
        if d not in pool:
            pool.append(d)

    bad_marks = (
        "это настройка одного",
        "это синоним обычного HTTP",
        "это ошибка только в синтаксисе",
        "это файрвол",
        "это обёртка вокруг GIL",
        "это обязательный Redis",
        "это про настройку одного процесса",
        "неверный вариант про",
        "это не про данный контекст",
        "это устаревший синоним",
        "это настройка, которая всегда включена",
        "только про GIL",
        "HTTP 200 always",
        "только SQL index",
        "firewall OS",
        "GIL wrapper",
        "кэш Redis",
        "ускорение Python",
        "тип в typing",
        "только DevOps",
    )

    used = {opts[ans]}
    pi = 0
    out = []
    for i, o in enumerate(opts):
        if i == ans:
            out.append(o)
            continue
        if any(b in o for b in bad_marks) or o.startswith("это ") and "не " not in o[:8]:
            # для эталонных тем лучше осмысленный дистрактор из pool
            repl = None
            for _ in range(len(pool) * 2):
                cand = pool[pi % len(pool)]
                pi += 1
                if cand not in used:
                    repl = cand
                    break
            out.append(repl or o)
            used.add(out[-1])
        else:
            out.append(o)
            used.add(o)
    return out


def apply_curated(item: dict) -> dict | None:
    qlow = (item.get("q") or "").lower()
    # не трогать уже эталонные id с отличным текстом? — curated обновляет
    for key, patch in CURATED.items():
        if key in qlow:
            out = dict(item)
            out.update(patch)
            out["fixed"] = True
            return out
    return None


def needs_work(item: dict) -> bool:
    q = item.get("q") or ""
    expl = item.get("explain") or ""
    opts = item.get("options") or []
    if "Верный смысл:" in expl or "Имеется в виду:" in expl:
        return True
    if "Кратко зафиксируй" in expl:
        return True
    if q.startswith("Что означает «") or q.startswith("Выбери верный вариант:"):
        return True
    if any(
        b in o
        for o in opts
        for b in (
            "это настройка одного",
            "это синоним обычного HTTP",
            "это ошибка только в синтаксисе",
            "неверный вариант про",
            "только про GIL",
            "HTTP 200",
        )
    ):
        return True
    if len(expl) < 80 and "code" not in item:
        return True
    # слабые обрубки вопроса
    if re.search(r"Что означает «[^»]+ (для|чтобы|лечится|содержит|имеет|учитывает)", q):
        return True
    return False


def polish_item(item: dict) -> tuple[dict, bool]:
    curated = apply_curated(item)
    if curated is not None:
        return curated, curated != item

    if not needs_work(item):
        return item, False

    out = dict(item)
    correct = correct_text(out)
    new_q = rewrite_weak_question(out.get("q") or "", correct)
    out["q"] = new_q

    # multi не ломаем варианты жёстко
    if out.get("kind") != "multi":
        out["options"] = fix_distractors(out)

    out["explain"] = rebuild_explain(out.get("explain") or "", correct_text(out), out["q"])
    out["fixed"] = True

    changed = (
        out.get("q") != item.get("q")
        or out.get("options") != item.get("options")
        or out.get("explain") != item.get("explain")
    )
    return out, changed


def process(level: str, *, limit: int | None, only_ids: set[str] | None) -> int:
    path = DATA_DIR / f"{level}.js"
    items = load_js_bank(path)
    overrides = load_overrides(level)
    n = 0
    for i, item in enumerate(items):
        qid = str(item.get("id") or "")
        if only_ids is not None and qid not in only_ids:
            continue
        new_item, changed = polish_item(item)
        if changed:
            items[i] = new_item
            sync_override_from_item(overrides, new_item)
            n += 1
            if limit is not None and n >= limit:
                break
    save_overrides(level, overrides)
    write_js_bank(path, LEVEL_VAR[level], items)
    print(f"{level}: polished {n}, total={len(items)}")
    return n


def main(argv: list[str] | None = None) -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--level", default="all", choices=["junior", "middle", "senior", "all"])
    p.add_argument("--limit", type=int, default=None)
    p.add_argument("--ids", default="")
    args = p.parse_args(argv)
    ids = {x.strip() for x in args.ids.split(",") if x.strip()} or None
    levels = ["senior", "middle", "junior"] if args.level == "all" else [args.level]
    total = 0
    for level in levels:
        total += process(level, limit=args.limit, only_ids=ids)
    print(f"DONE: {total}")


if __name__ == "__main__":
    main()
