#!/usr/bin/env python3
"""Ещё больше программных дублей: битовые операции, строки, sorted, map/filter,
heapq/bisect, JSON, match, кэш/API/БД с разными параметрами."""
from __future__ import annotations

import itertools
import json
import math
from typing import Any, Callable, Iterable


from bank.utils import q, _mc, _uniq


# ─── JUNIOR ───────────────────────────────────────────────

def junior_bitops() -> list[dict]:
    out = []
    for a, b in itertools.product([0, 1, 2, 3, 5, 6, 7, 8, 12, 15], [1, 2, 3, 4, 5, 7]):
        if a < b and (a, b) not in {(0, 1), (1, 2), (2, 3), (3, 4)}:
            # still allow many
            pass
        for op, name, exp in [
            ("&", "побитовое И", a & b),
            ("|", "побитовое ИЛИ", a | b),
            ("^", "XOR", a ^ b),
        ]:
            opts, ans = _mc(exp, [a + b, a * b, a - b, a, b, 0])
            out.append(q("операторы", f"Что вернёт {a} {op} {b}?", opts, ans, f"{op} — {name}.",
                         code=f"print({a} {op} {b})"))
    for a, n in itertools.product([1, 2, 3, 5, 7, 8], [1, 2, 3]):
        opts, ans = _mc(a << n, [a >> n, a * n, a + n, 2 ** n])
        out.append(q("операторы", f"Что вернёт {a} << {n}?", opts, ans, "<< — сдвиг влево (= * 2**n).",
                     code=f"print({a} << {n})"))
        opts, ans = _mc(a >> n, [a << n, a // n, a - n, 0])
        out.append(q("операторы", f"Что вернёт {a} >> {n}?", opts, ans, ">> — сдвиг вправо.",
                     code=f"print({a} >> {n})"))
    for a in [0, 1, 2, 5, 7, 8, 15, -1, -2, -8]:
        opts, ans = _mc(~a, [-a, a, a + 1, abs(a)])
        out.append(q("операторы", f"Что вернёт ~{a}?", opts, ans, "~x == -x-1.",
                     code=f"print(~{a})"))
    return out


def junior_divmod_abs_round() -> list[dict]:
    out = []
    for a, b in [(7, 2), (9, 4), (20, 6), (15, 4), (11, 3), (100, 7), (8, 3), (-7, 2)]:
        d, m = divmod(a, b)
        opts = [str((d, m)), str((a // b,)), "ошибка", str([d, m])]
        out.append(q("встроенные", f"divmod({a}, {b})?", opts, 0, "divmod → (//, %).",
                     code=f"print(divmod({a}, {b}))"))
    for x in [-7, -1, 0, 1, 7, -3.5, 2.5]:
        exp = abs(x)
        opts, ans = _mc(exp, [-exp if exp != 0 else 1, x, "ошибка"])
        out.append(q("встроенные", f"abs({x})?", opts, ans, "Модуль числа.",
                     code=f"print(abs({x}))"))
    for x, nd in [(3.14159, 2), (3.14159, 3), (2.5, 0), (1.5, 0), (2.675, 2), (9.95, 1), (0.5, 0)]:
        exp = round(x, nd) if nd else round(x)
        call = f"round({x}, {nd})" if nd else f"round({x})"
        opts, ans = _mc(exp, [math.floor(x), int(x), x, "ошибка"])
        out.append(q("встроенные", f"{call}?", opts, ans, "round; для .5 — banker's rounding к чётному.",
                     code=f"print({call})"))
    return out


def junior_any_all_in() -> list[dict]:
    out = []
    samples = [
        [0, 0, 0],
        [0, 1, 0],
        [1, 2, 3],
        ["", "", ""],
        ["", "x"],
        [None, None],
        [None, 1],
        [[], []],
        [[], [1]],
        [False, False],
        [False, True],
    ]
    for xs in samples:
        opts = [str(any(xs)), str(all(xs)), "ошибка", "None"]
        # ensure two different first options
        if opts[0] == opts[1]:
            opts[1] = str(not any(xs))
        out.append(q("any", f"any({xs!r})?", [str(any(xs)), str(not any(xs)), "ошибка", "None"], 0,
                     "any — есть ли truthy.",
                     code=f"print(any({xs!r}))"))
        out.append(q("all", f"all({xs!r})?", [str(all(xs)), str(not all(xs)), "ошибка", "None"], 0,
                     "all — все truthy (пустой all → True).",
                     code=f"print(all({xs!r}))"))
    # empty
    out.append(q("any", "any([])?", ["False", "True", "ошибка", "None"], 0, "Пустой any → False.",
                 code="print(any([]))"))
    out.append(q("all", "all([])?", ["True", "False", "ошибка", "None"], 0, "Пустой all → True (вакуумная истина).",
                 code="print(all([]))"))
    for container, item, exp in [
        ("python", "th", True),
        ("python", "py", True),
        ("python", "Py", False),
        ([1, 2, 3], 2, True),
        ([1, 2, 3], 9, False),
        ({"a": 1, "b": 2}, "a", True),
        ({"a": 1}, 1, False),
        ({1, 2, 3}, 2, True),
        ({1, 2}, 9, False),
        ((1, 2), 1, True),
    ]:
        opts = [str(exp), str(not exp), "ошибка", "None"]
        out.append(q("in", f"{item!r} in {container!r}?", opts, 0,
                     "in для str — подстрока; для dict — ключи.",
                     code=f"print({item!r} in {container!r})"))
    return out


def junior_map_filter_sorted_key() -> list[dict]:
    out = []
    for xs in [[1, 2, 3], [0, 1, 2], [5, 10], [-1, 2]]:
        exp = list(map(str, xs))
        opts = [str(exp), str(xs), "ошибка", "None"]
        out.append(q("map", f"list(map(str, {xs}))?", opts, 0, "map применяет функцию.",
                     code=f"print(list(map(str, {xs!r})))"))
        exp = list(map(lambda x: x * 2, xs))
        opts = [str(exp), str(xs), "ошибка", "None"]
        out.append(q("map", f"list(map(lambda x: x*2, {xs}))?", opts, 0, "Удвоение через map.",
                     code=f"print(list(map(lambda x: x * 2, {xs!r})))"))
        exp = list(filter(None, xs))
        # filter(None) removes falsy
        opts = [str(exp), str(xs), "ошибка", "None"]
        out.append(q("filter", f"list(filter(None, {xs}))?", opts, 0, "filter(None) оставляет truthy.",
                     code=f"print(list(filter(None, {xs!r})))"))
    for xs in [[3, 1, 2], [5, 5, 1], [0, -1, 2], [9, 8, 7]]:
        out.append(q("встроенные", f"Что вернёт {xs}.sort()?",
                     ["None", str(sorted(xs)), str(xs), "ошибка"], 0,
                     "list.sort сортирует in-place и возвращает None.",
                     code=f"a = {xs!r}\nprint(a.sort())"))
        out.append(q("встроенные", "Что выведет код?",
                     [str(sorted(xs)), "None", str(xs), "ошибка"], 0,
                     "После sort список отсортирован; print(a) показывает его.",
                     code=f"a = {xs!r}\na.sort()\nprint(a)"))
    for words in [["bb", "a", "ccc"], ["pear", "fig", "apple"], ["zz", "b", "aaa"]]:
        exp = sorted(words, key=len)
        opts = [str(exp), str(sorted(words)), str(words), "ошибка"]
        out.append(q("встроенные", f"sorted({words}, key=len)?", opts, 0, "Сортировка по длине.",
                     code=f"print(sorted({words!r}, key=len))"))
    return out


def junior_str_more() -> list[dict]:
    out = []
    for s in ["Hello", "Python", "AbC", "test", "MiXeD"]:
        for method, exp in [("upper", s.upper()), ("lower", s.lower()), ("swapcase", s.swapcase()),
                            ("capitalize", s.capitalize()), ("title", s.title())]:
            opts = [f"'{exp}'", f"'{s}'", "ошибка", "None"]
            out.append(q("строки", f"{s!r}.{method}()?", opts, 0, f"str.{method} возвращает новую строку.",
                         code=f"print({s!r}.{method}())"))
    for s, old, new in [("hello", "l", "L"), ("ababab", "ab", "X"), ("one two", " ", "-"), ("aaa", "a", "b")]:
        exp = s.replace(old, new)
        opts = [f"'{exp}'", f"'{s}'", "ошибка", "None"]
        out.append(q("строки", f"{s!r}.replace({old!r}, {new!r})?", opts, 0, "replace заменяет вхождения.",
                     code=f"print({s!r}.replace({old!r}, {new!r}))"))
    for s, sub in [("hello", "ll"), ("hello", "x"), ("banana", "ana"), ("abc", "a"), ("abc", "c")]:
        exp = s.find(sub)
        opts, ans = _mc(exp, [-1, 0, len(s), 1])
        out.append(q("строки", f"{s!r}.find({sub!r})?", opts, ans, "find → индекс или -1.",
                     code=f"print({s!r}.find({sub!r}))"))
    for s, pref in [("report.pdf", ".pdf"), ("report.pdf", "report"), ("img.png", ".jpg"), ("hello", "he"), ("hello", "lo")]:
        exp = s.startswith(pref) if not pref.startswith(".") or pref != ".pdf" else s.endswith(pref) if False else None
        # split startswith vs endswith
    for s, pref, exp in [
        ("report.pdf", "report", True),
        ("report.pdf", "pdf", False),
        ("hello", "he", True),
        ("hello", "lo", False),
        ("abc", "", True),
    ]:
        opts = [str(exp), str(not exp), "ошибка", "None"]
        out.append(q("строки", f"{s!r}.startswith({pref!r})?", opts, 0, "startswith — префикс.",
                     code=f"print({s!r}.startswith({pref!r}))"))
    for s, suf, exp in [
        ("report.pdf", ".pdf", True),
        ("report.pdf", ".PDF", False),
        ("hello", "lo", True),
        ("hello", "he", False),
        ("abc", "", True),
    ]:
        opts = [str(exp), str(not exp), "ошибка", "None"]
        out.append(q("строки", f"{s!r}.endswith({suf!r})?", opts, 0, "endswith — суффикс.",
                     code=f"print({s!r}.endswith({suf!r}))"))
    for s in ["  hi  ", "\tpy\n", "xx", "  ", ""]:
        exp = s.strip()
        opts = [f"'{exp}'", f"'{s}'", "ошибка", "None"]
        out.append(q("строки", f"{s!r}.strip()?", opts, 0, "strip убирает пробельные с краёв.",
                     code=f"print(repr({s!r}.strip()))"))
    return out


def junior_unpack_swap() -> list[dict]:
    out = []
    for vals in [(1, 2, 3), (10, 20, 30, 40), ("a", "b", "c"), (0, 1)]:
        if len(vals) < 3:
            a, b = vals
            out.append(q("unpack", "Что выведет код?", [f"{b} {a}", f"{a} {b}", "ошибка", "None"], 0,
                         "Классический swap через кортеж.",
                         code=f"a, b = {a!r}, {b!r}\na, b = b, a\nprint(a, b)"))
            continue
        a, *mid, c = vals
        out.append(q("unpack", "Что выведет код?",
                     [f"{a} {c} {list(mid)}", f"{a} {list(mid)} {c}", "ошибка", str(vals)], 0,
                     "* собирает середину в список.",
                     code=f"a, *m, c = {list(vals)!r}\nprint(a, c, m)"))
    for n in [2, 3, 4, 5]:
        if n == 2:
            out.append(q("unpack", "Что выведет код?",
                         ["0 1", "0 1 2", "ошибка", "None"], 0,
                         "range(2) распаковывается в a=0, b=1.",
                         code="a, b = range(2)\nprint(a, b)"))
        else:
            out.append(q("unpack", f"a, b = range({n}) — что будет?",
                         ["ValueError", "TypeError", "None", "тихо обрежет"], 0,
                         "Число значений должно совпасть с числом целей.",
                         code=f"a, b = range({n})"))
    return out


def junior_chr_ord_bytes() -> list[dict]:
    out = []
    for ch in ["A", "a", "0", "Z", "\n", "я"]:
        exp = ord(ch)
        opts, ans = _mc(exp, [exp + 1, exp - 1, len(ch), 0])
        out.append(q("строки", f"ord({ch!r})?", opts, ans, "Код Unicode символа.",
                     code=f"print(ord({ch!r}))"))
    for code in [65, 97, 48, 10, 32, 1072]:
        exp = chr(code)
        # варианты как результат print(repr(...))
        opts = [repr(exp), str(code), "ошибка", "None"]
        out.append(q("строки", f"chr({code})?", opts, 0, "Символ по коду Unicode.",
                     code=f"print(repr(chr({code})))"))
    for s in ["hi", "я", "ABC", "🙂", ""]:
        exp = len(s.encode("utf-8"))
        opts, ans = _mc(exp, [len(s), len(s) * 2, 0, "ошибка"])
        out.append(q("байты", f"len({s!r}.encode('utf-8'))?", opts, ans,
                     "Длина в байтах UTF-8 может ≠ числу символов.",
                     code=f"print(len({s!r}.encode('utf-8')))"))
    for n in [0, 1, 3, 5]:
        exp = b"\x00" * n
        opts = [repr(exp), repr(b"0" * n), "ошибка", "None"]
        out.append(q("байты", f"b'\\x00' * {n}?", opts, 0, "Повтор bytes.",
                     code=f"print(b'\\x00' * {n})"))
    return out


def junior_list_methods_code() -> list[dict]:
    out = []
    for lst, val in [([1, 2], 3), ([0], 1), (["a"], "b"), ([], 9)]:
        out.append(q("списки", "Что выведет код?",
                     [str(lst + [val]), "None", str(lst), "ошибка"], 0,
                     "append мутирует; print(a) после — список с новым элементом.",
                     code=f"a = {lst!r}\na.append({val!r})\nprint(a)"))
        out.append(q("списки", "Что вернёт append?",
                     ["None", str(lst + [val]), "True", "ошибка"], 0,
                     "Методы мутации списка часто возвращают None.",
                     code=f"a = {lst!r}\nprint(a.append({val!r}))"))
    for lst, val in [([1, 2, 3], 2), ([1, 2, 2, 3], 2), (["a", "b", "a"], "a")]:
        copy = lst[:]
        copy.remove(val)
        out.append(q("списки", "Что выведет код?",
                     [str(copy), str(lst), "None", "ошибка"], 0,
                     "remove удаляет первое вхождение значения.",
                     code=f"a = {lst!r}\na.remove({val!r})\nprint(a)"))
    for lst, i in [([1, 2, 3], 0), ([1, 2, 3], -1), ([1, 2, 3], 1), (["x", "y"], 0)]:
        copy = lst[:]
        popped = copy.pop(i)
        show = f"'{popped}'" if isinstance(popped, str) else str(popped)
        out.append(q("списки", "Что выведет код?",
                     [show, str(lst), "None", "ошибка"], 0,
                     "pop возвращает удалённый элемент.",
                     code=f"a = {lst!r}\nprint(a.pop({i}))"))
    for lst, i, val in [([1, 2, 3], 0, 9), ([1, 2, 3], 2, 0), (["a", "c"], 1, "b")]:
        copy = lst[:]
        copy.insert(i, val)
        out.append(q("списки", "Что выведет код?",
                     [str(copy), str(lst), "None", "ошибка"], 0,
                     "insert вставляет по индексу.",
                     code=f"a = {lst!r}\na.insert({i}, {val!r})\nprint(a)"))
    return out


def junior_ternary_bool_ops() -> list[dict]:
    out = []
    for cond_src, a, b, exp in [
        ("1", "yes", "no", "yes"),
        ("0", "yes", "no", "no"),
        ("''", "t", "f", "f"),
        ("'x'", "t", "f", "t"),
        ("[]", "t", "f", "f"),
        ("[0]", "t", "f", "t"),
    ]:
        opts = [f"'{exp}'", f"'{a}'", f"'{b}'", "ошибка"]
        # dedupe
        opts = _uniq(opts)
        out.append(q("условия", f"('{a}' if {cond_src} else '{b}')?", opts[:4], 0 if opts[0] == f"'{exp}'" else opts.index(f"'{exp}'") if f"'{exp}'" in opts else 0,
                     "Тернарный оператор.",
                     code=f"print({a!r} if {cond_src} else {b!r})"))
        # force answer 0
        out[-1]["options"] = [f"'{exp}'"] + [o for o in [f"'{a}'", f"'{b}'", "ошибка", "None"] if o != f"'{exp}'"]
        out[-1]["options"] = out[-1]["options"][:4]
        out[-1]["answer"] = 0
    for expr, exp in [
        ("0 or 2 or 3", 2),
        ("1 and 2 and 3", 3),
        ("1 and 0 and 3", 0),
        ("'' or 'b'", "b"),
        ("'a' or 'b'", "a"),
        ("'a' and 'b'", "b"),
        ("[] or {}", {}),
        ("[1] and [2]", [2]),
    ]:
        show = f"'{exp}'" if isinstance(exp, str) else str(exp)
        opts = [show, "True", "False", "ошибка"]
        out.append(q("условия", f"Что вернёт {expr}?", opts, 0,
                     "and/or возвращают операнд, не обязательно bool.",
                     code=f"print({expr})"))
    return out


# ─── MIDDLE ───────────────────────────────────────────────

def middle_json_variants() -> list[dict]:
    out = []
    objs = [
        {"a": 1},
        {"x": [1, 2]},
        {"ok": True, "n": None},
        [1, 2, 3],
        "hi",
        42,
    ]
    for obj in objs:
        exp = json.dumps(obj)
        opts = [exp, str(obj), "ошибка", "None"]
        # ensure first is correct json string without extra quotes confusion — show as python string repr in option
        opts = [repr(exp) if not isinstance(obj, str) else json.dumps(obj), "ошибка", str(obj), "None"]
        # simpler: option is the JSON text as user sees from print
        opts = [exp, str(obj).replace("'", '"'), "ошибка", "None"]
        opts = _uniq(opts)
        if opts[0] != exp:
            opts = [exp] + [o for o in opts if o != exp]
        out.append(q("json", f"json.dumps({obj!r})?", opts[:4], 0, "dumps → строка JSON.",
                     code=f"import json\nprint(json.dumps({obj!r}))"))
        # loads roundtrip for dict/list
        if isinstance(obj, (dict, list)):
            s = json.dumps(obj)
            out.append(q("json", f"json.loads({s!r}) тип?",
                         [type(obj).__name__, "str", "JSON", "tuple"], 0,
                         "loads парсит в объекты Python.",
                         code=f"import json\nprint(type(json.loads({s!r})).__name__)"))
    for bad in ['{', 'nullish', "[1, 2,"]:
        out.append(q("json", f"json.loads({bad!r})?",
                     ["JSONDecodeError", "None", "{}", "ошибка SyntaxError"], 0,
                     "Невалидный JSON → JSONDecodeError.",
                     code=f"import json\nprint(json.loads({bad!r}))"))
    return out


def middle_heapq_bisect() -> list[dict]:
    import bisect
    import heapq
    out = []
    for xs in [[5, 1, 3], [9, 2, 7, 1], [4, 4, 1], [10, 20, 5, 30]]:
        h = xs[:]
        heapq.heapify(h)
        out.append(q("heapq", "Что выведет код (минимум на [0])?",
                     [str(h[0]), str(min(xs)), str(xs[0]), "ошибка"], 0,
                     "После heapify h[0] — минимум (для min-heap).",
                     code=f"import heapq\nh = {xs!r}\nheapq.heapify(h)\nprint(h[0])"))
        # nsmallest
        exp = heapq.nsmallest(2, xs)
        opts = [str(exp), str(sorted(xs)[:3]), "ошибка", "None"]
        out.append(q("heapq", f"heapq.nsmallest(2, {xs})?", opts, 0, "Два наименьших.",
                     code=f"import heapq\nprint(heapq.nsmallest(2, {xs!r}))"))
    for arr, x in [([1, 3, 5, 7], 4), ([1, 3, 5, 7], 1), ([1, 3, 5, 7], 7), ([1, 3, 5, 7], 0), ([1, 3, 5, 7], 8),
                   ([2, 4, 6], 5), ([2, 4, 6], 4)]:
        exp = bisect.bisect_left(arr, x)
        opts, ans = _mc(exp, [bisect.bisect_right(arr, x), 0, len(arr), x])
        out.append(q("bisect", f"bisect_left({arr}, {x})?", opts, ans,
                     "Индекс вставки слева для сохранения порядка.",
                     code=f"import bisect\nprint(bisect.bisect_left({arr!r}, {x}))"))
    return out


def middle_walrus_match() -> list[dict]:
    out = []
    for n in [0, 1, 2, 5, 10]:
        # walrus in if
        out.append(q("walrus", "Что выведет код?",
                     [str(n) if n else "no", "no" if n else str(n), "ошибка", "None"], 0,
                     ":= присваивает и использует значение в условии.",
                     code=f"if (x := {n}):\n    print(x)\nelse:\n    print('no')"))
    for val, pat_desc, exp in [
        (0, "case 0", "zero"),
        (1, "case 1", "one"),
        (2, "case _", "other"),
        (99, "case _", "other"),
    ]:
        out.append(q("match", "Что выведет код?",
                     [exp, "ошибка", "None", str(val)], 0,
                     "match/case сопоставляет значение.",
                     code=f"x = {val}\nmatch x:\n    case 0:\n        print('zero')\n    case 1:\n        print('one')\n    case _:\n        print('other')"))
    for seq, exp in [
        ([1, 2], "pair"),
        ([1], "single"),
        ([1, 2, 3], "many"),
        ([], "empty"),
    ]:
        out.append(q("match", "Что выведет код?",
                     [exp, "ошибка", "None", str(seq)], 0,
                     "Паттерны последовательностей в match.",
                     code=f"x = {seq!r}\nmatch x:\n    case []:\n        print('empty')\n    case [_]:\n        print('single')\n    case [_, _]:\n        print('pair')\n    case _:\n        print('many')"))
    return out


def middle_itertools_more() -> list[dict]:
    import itertools as it
    out = []
    for n in [2, 3, 4, 5]:
        exp = list(it.accumulate(range(1, n + 1)))
        opts = [str(exp), str(list(range(1, n + 1))), "ошибка", "None"]
        out.append(q("itertools", f"list(accumulate(range(1, {n+1})))?", opts, 0,
                     "Накопительная сумма.",
                     code=f"from itertools import accumulate\nprint(list(accumulate(range(1, {n + 1}))))"))
        exp = list(it.chain([1, 2], [3] * (n - 2) if n > 2 else []))
        if n == 2:
            exp = list(it.chain([1, 2], []))
        # simpler chain variants
        a, b = [1, 2], list(range(n))
        exp = list(it.chain(a, b))
        opts = [str(exp), str(a + b), "ошибка", "None"]
        # a+b same as chain for lists
        opts = [str(exp), str([a, b]), "ошибка", "None"]
        out.append(q("itertools", f"list(chain([1,2], list(range({n}))))?", opts, 0,
                     "chain склеивает итерируемые.",
                     code=f"from itertools import chain\nprint(list(chain([1, 2], list(range({n})))))"))
    for n, r in [(3, 2), (4, 2), (5, 2), (3, 3)]:
        exp = list(it.permutations(range(n), r))
        opts, ans = _mc(len(exp), [math.comb(n, r), n * r, n ** r, math.factorial(n)])
        out.append(q("itertools", f"len(list(permutations(range({n}), {r})))?", opts, ans,
                     f"P({n},{r}) = {len(exp)}.",
                     code=f"from itertools import permutations\nprint(len(list(permutations(range({n}), {r}))))"))
    for xs in [[1, 1, 2, 2, 3], [5, 5, 5], [1, 2, 1], [0, 0, 1, 1, 0]]:
        # groupby without sort — groups consecutive
        groups = [(k, len(list(g))) for k, g in it.groupby(xs)]
        opts = [str(groups), str(sorted(set(xs))), "ошибка", "None"]
        out.append(q("itertools", f"groupby({xs}) consecutive counts?", opts, 0,
                     "groupby группирует только подряд идущие одинаковые.",
                     code=f"from itertools import groupby\nprint([(k, len(list(g))) for k, g in groupby({xs!r})])"))
    return out


def middle_functools_reduce_cache() -> list[dict]:
    from functools import reduce
    out = []
    for xs in [[1, 2, 3, 4], [2, 2, 2], [5, 1, 1], [10, 2]]:
        exp = reduce(lambda a, b: a + b, xs)
        opts, ans = _mc(exp, [sum(xs) + 1, xs[0], len(xs), "ошибка"])
        out.append(q("functools", f"reduce(lambda a,b: a+b, {xs})?", opts, ans, "Свёртка суммы.",
                     code=f"from functools import reduce\nprint(reduce(lambda a, b: a + b, {xs!r}))"))
        exp = reduce(lambda a, b: a * b, xs)
        opts, ans = _mc(exp, [sum(xs), xs[0], 0, "ошибка"])
        out.append(q("functools", f"reduce(lambda a,b: a*b, {xs})?", opts, ans, "Свёртка произведения.",
                     code=f"from functools import reduce\nprint(reduce(lambda a, b: a * b, {xs!r}))"))
    for maxsize in [1, 2, 8, 128, None]:
        label = "None (безлимит)" if maxsize is None else str(maxsize)
        out.append(q("functools", f"lru_cache(maxsize={label}) хранит…",
                     [f"до {label} результатов вызовов" if maxsize else "неограниченно (осторожно с RAM)",
                      "только последний вызов всегда", "на диске", "в Redis"], 0,
                     "Кэш в памяти процесса."))
        # fix options for None case
        if maxsize is None:
            out[-1]["options"] = [
                "неограниченно (осторожно с RAM)",
                "ровно 0 записей",
                "на диске",
                "в Redis",
            ]
    return out


def middle_copy_pickle_path() -> list[dict]:
    out = []
    for nested in [[[1], [2]], [[0, 0], [1]], [{"a": 1}], [[]], [[1, 2, 3]]]:
        out.append(q("copy", "После copy.copy: inner is same object?",
                     ["True (shallow)", "False (deep)", "ошибка", "None"], 0,
                     "shallow копирует верхний уровень.",
                     code=f"import copy\na = {nested!r}\nb = copy.copy(a)\nprint(a[0] is b[0])"))
        out.append(q("copy", "После copy.deepcopy: inner is same object?",
                     ["False", "True", "ошибка", "None"], 0,
                     "deepcopy копирует вложенность.",
                     code=f"import copy\na = {nested!r}\nb = copy.deepcopy(a)\nprint(a[0] is b[0])"))
    for parts in [("etc", "passwd"), ("var", "log", "syslog"), ("tmp", "x"), ("usr", "bin", "python")]:
        from pathlib import PurePosixPath
        exp = str(PurePosixPath(*parts))
        out.append(q("pathlib", f"PurePosixPath({', '.join(map(repr, parts))})?",
                     [exp, "\\".join(parts), "ошибка", "None"], 0, "Склейка частей пути.",
                     code=f"from pathlib import PurePosixPath\nprint(PurePosixPath({', '.join(map(repr, parts))}))"))
    for name in ["a.txt", "B.JSON", "photo.PNG", "archive.tar.gz"]:
        from pathlib import PurePath
        exp = PurePath(name).suffix.lower()
        # last suffix only for tar.gz → .gz
        out.append(q("pathlib", f"Path({name!r}).suffix?",
                     [repr(PurePath(name).suffix), repr(name), "ошибка", "''"], 0,
                     "suffix — последний суффикс (для tar.gz это .gz).",
                     code=f"from pathlib import PurePath\nprint(PurePath({name!r}).suffix)"))
    return out


def middle_exceptions_context() -> list[dict]:
    out = []
    for exc, parent in [
        ("ValueError", "Exception"),
        ("KeyError", "LookupError"),
        ("IndexError", "LookupError"),
        ("FileNotFoundError", "OSError"),
        ("ZeroDivisionError", "ArithmeticError"),
        ("TypeError", "Exception"),
        ("StopIteration", "Exception"),
        ("KeyboardInterrupt", "BaseException"),
    ]:
        out.append(q("exceptions", f"{exc} наследует…",
                     [parent, "только object", "Warning", "OSError всегда"], 0,
                     f"{exc} → … → {parent} → …"))
    for n in [1, 2, 3]:
        out.append(q("context", f"Как удобнее открыть {n} вложенных with без ExitStack?",
                     ["можно вложить / или один with a, b", "нельзя никогда", "только async", "нужен GIL"], 0,
                     "with open() as a, open() as b: или ExitStack для динамики."))
    return out


def middle_web_sql_more() -> list[dict]:
    out = []
    for code, tip in [
        (200, "успех с телом"),
        (201, "ресурс создан"),
        (204, "успех без тела"),
        (304, "не изменилось / кэш"),
        (400, "ошибка клиента"),
        (401, "нужна аутентификация"),
        (403, "запрещено"),
        (404, "не найдено"),
        (409, "конфликт состояния"),
        (429, "лимит запросов"),
        (500, "ошибка сервера"),
        (502, "плохой шлюз"),
        (503, "сервис недоступен"),
        (504, "таймаут шлюза"),
    ]:
        out.append(q("HTTP", f"Статус {code} — кратко:",
                     [tip, "всегда фатальный краш Python", "только WebSocket", "успех всегда"], 0,
                     f"HTTP {code}: {tip}."))
    for clause in ["WHERE", "JOIN", "GROUP BY", "HAVING", "ORDER BY", "LIMIT", "OFFSET", "RETURNING"]:
        out.append(q("SQL", f"Типичная роль `{clause}`?",
                     [{
                         "WHERE": "фильтр строк до группировки",
                         "JOIN": "связь таблиц",
                         "GROUP BY": "агрегация по ключу",
                         "HAVING": "фильтр после GROUP BY",
                         "ORDER BY": "сортировка результата",
                         "LIMIT": "ограничить число строк",
                         "OFFSET": "пропустить N строк",
                         "RETURNING": "вернуть строки после INSERT/UPDATE/DELETE (PG и др.)",
                     }[clause], "создать индекс всегда", "только DDL", "транзакция BEGIN"], 0,
                     f"{clause} в SQL."))
    for n in [1, 5, 50, 500]:
        out.append(q("SQL", f"SELECT … LIMIT {n} без ORDER BY?",
                     ["набор из N строк без стабильного порядка", f"всегда первые {n} по PK", "ошибка синтаксиса", "полный table lock"], 0,
                     "Без ORDER BY порядок не гарантирован."))
    return out


# ─── SENIOR ───────────────────────────────────────────────

def senior_perf_more() -> list[dict]:
    out = []
    tips = [
        ("list.pop()", "O(1) с конца", "O(n) с конца", "O(log n)", "O(n²)"),
        ("list.pop(0)", "O(n)", "O(1)", "O(log n)", "O(n log n)"),
        ("dict.popitem()", "O(1)", "O(n)", "O(log n)", "O(n²)"),
        ("heapq.heappop", "O(log n)", "O(1)", "O(n)", "O(n²)"),
        ("set.remove", "O(1) амортизированно", "O(n)", "O(log n)", "O(n²)"),
        ("str.join n кусков", "O(суммарная длина)", "O(n²) всегда", "O(1)", "O(n!)"),
        ("bytearray extend", "O(k) амортизированно", "O(n²)", "O(log n)", "O(1) всегда точно"),
        ("bisect.insort", "O(n) из‑за сдвига списка", "O(log n) полностью", "O(1)", "O(n log n)"),
    ]
    for name, good, *bad in tips:
        out.append(q("performance", f"Сложность {name}?", [good, *bad], 0, f"Большая O: {name}."))
    for n in [10, 100, 1000, 10000]:
        out.append(q("performance", f"n={n}: что важнее микрооптимизаций f-string?",
                     ["алгоритм/I/O/аллокации — профилируй", "всегда переписать на C", "отключить GC", "больше print"], 0,
                     "Сначала измерь bottleneck."))
    return out


def senior_cache_db_more() -> list[dict]:
    out = []
    for pattern, tip in [
        ("cache-aside", "приложение само читает/пишет кэш"),
        ("read-through", "кэш сам ходит в store при miss"),
        ("write-through", "запись в кэш и store синхронно"),
        ("write-back", "запись в кэш, store отложенно"),
        ("write-around", "запись в store, минуя кэш"),
    ]:
        for _ in range(1):
            out.append(q("cache", f"Паттерн {pattern}:",
                         [tip, "только Redis Cluster", "запрещён", "равен TTL=0"], 0, tip))
    for ttl in [5, 15, 60, 300, 3600]:
        out.append(q("cache", f"soft TTL ≈{ttl}s + background refresh идея…",
                     ["отдавать stale и обновлять асинхронно", "удалить ключ навсегда", "удвоить RAM", "отключить app"], 0,
                     "Против stampede."))
    for iso in ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"]:
        for anomaly in ["dirty read", "non-repeatable read", "phantom read", "write skew"]:
            out.append(q("db", f"{iso} и аномалия «{anomaly}»?",
                         ["зависит от СУБД — сверяй документацию/стандарт", "всегда разрешена везде", "всегда запрещена везде", "только в SQLite"], 0,
                         "Не путай SQL-standard и реализацию."))
    for n in [2, 3, 5, 10]:
        out.append(q("db", f"Повторять транзакцию до {n} раз при serialization failure?",
                     ["да, типичный паттерн retry", "никогда", "только DROP TABLE", "переключить на MyISAM"], 0,
                     "40001 / serialization_failure → retry."))
    return out


def senior_dist_sec_more() -> list[dict]:
    out = []
    for name, tip in [
        ("retry storm", "ретраи без jitter усиливают сбой"),
        ("bulkhead", "изоляция пулов/ресурсов по частям системы"),
        ("circuit breaker", "временно не звать падающий dependency"),
        ("timeout budget", "общий дедлайн на цепочку вызовов"),
        ("hedged requests", "параллельный дубль запроса к реплике"),
        ("load shedding", "отбрасывать лишнее под перегрузкой"),
        ("graceful degradation", "урезать функции, но жить"),
        ("poison message", "сообщение, которое вечно валит воркер"),
    ]:
        out.append(q("distributed", f"«{name}» — это…",
                     [tip, "только про GIL", "только SQL index", "HTTP 200 always"], 0, tip))
    for attack, tip in [
        ("XSS", "внедрение скрипта в браузер жертвы"),
        ("CSRF", "запрос от имени пользователя без его намерения"),
        ("SSRF", "сервер ходит на внутренние URL по указке"),
        ("SQLi", "инъекция в SQL"),
        ("path traversal", "доступ к файлам через ../"),
        ("RCE", "удалённое исполнение кода"),
        ("IDOR", "доступ к чужим объектам по угадываемому id"),
        ("open redirect", "редирект на вредоносный URL"),
    ]:
        for context in ["API", "web"]:
            out.append(q("security", f"{attack} ({context}) кратко:",
                         [tip, "ускорение Python", "тип в typing", "только DevOps"], 0, tip))
    return out


def senior_obs_arch_more() -> list[dict]:
    out = []
    for letter, meaning in [("R", "Rate"), ("E", "Errors"), ("D", "Duration")]:
        out.append(q("observability", f"RED: буква {letter}?",
                     [meaning, "RAM", "EOF", "DNS"], 0, f"RED → {meaning}."))
    for letter, meaning in [("U", "Utilization"), ("S", "Saturation"), ("E", "Errors")]:
        out.append(q("observability", f"USE: буква {letter}?",
                     [meaning, "UUID", "SQL", "ETA"], 0, f"USE → {meaning}."))
    for pattern, tip in [
        ("CQRS", "разделить пути чтения и записи"),
        ("Event Sourcing", "состояние как поток событий"),
        ("Outbox", "событие в одной транзакции с записью"),
        ("Saga", "распределённый процесс + компенсации"),
        ("BFF", "backend for frontend — API под клиент"),
        ("ACL", "anti-corruption layer к легаси"),
        ("Strangler", "постепенная замена легаси"),
        ("Sidecar", "вспомогательный процесс рядом с сервисом"),
    ]:
        out.append(q("architecture", f"Паттерн {pattern}:",
                     [tip, "удалить тесты", "только monolith ban", "GIL pattern"], 0, tip))
    for py in ["3.9", "3.10", "3.11", "3.12", "3.13", "3.14"]:
        out.append(q("packaging", f"Классификатор Programming Language :: Python :: {py} зачем?",
                     ["заявить поддержку версии для PyPI/инструментов", "ускорить интерпретатор", "включить GIL", "заменить mypy"], 0,
                     "Метаданные дистрибутива."))
    return out


def senior_cpython_more() -> list[dict]:
    out = []
    for tip in [
        ("ob_refcnt", "счётчик ссылок объекта"),
        ("ob_type", "указатель на тип"),
        ("tp_dealloc", "слот деаллокации типа"),
        ("Py_INCREF/DECREF", "ручное управление refcnt в C-API"),
        ("pymalloc", "аллокатор мелких объектов"),
        ("arenas/pools", "структура pymalloc"),
        ("GC generations", "поколения циклического GC"),
        ("interned strings", "переиспользование некоторых str"),
        ("dict insertion order", "сохранение порядка с 3.7+ как язык. контракт"),
        ("adaptive specializing interpreter", "ускорение hot path с 3.11+"),
    ]:
        out.append(q("CPython", f"{tip[0]} — про что?",
                     [tip[1], "только pip", "HTTP header", "pytest fixture"], 0, tip[1]))
    for n in [0, 1, 2, 3]:
        out.append(q("память", f"gc.get_threshold()[{n}] влияет на…",
                     ["частоту/пороги сбора поколений GC", "GIL timeout", "TCP window", "pip cache"], 0,
                     "Пороги генерационного GC."))
    for flag in ["-O", "-OO", "-X faulthandler", "-X dev", "-S"]:
        tip = {
            "-O": "убирает assert, __debug__=False",
            "-OO": "как -O плюс выкидывает docstrings",
            "-X faulthandler": "дамп трейсов при фатальных сбоях",
            "-X dev": "режим разработки с доп. проверками",
            "-S": "не импортировать site автоматически",
        }[flag]
        out.append(q("CPython", f"Флаг интерпретатора {flag}:",
                     [tip, "включает JIT всегда", "отключает GC навсегда", "только Windows"], 0, tip))
    return out


def build_junior() -> list[dict]:
    chunks: list[Callable[[], list[dict]]] = [
        junior_bitops,
        junior_divmod_abs_round,
        junior_any_all_in,
        junior_map_filter_sorted_key,
        junior_str_more,
        junior_unpack_swap,
        junior_chr_ord_bytes,
        junior_list_methods_code,
        junior_ternary_bool_ops,
    ]
    out: list[dict] = []
    for fn in chunks:
        out.extend(fn())
    return out


def build_middle() -> list[dict]:
    chunks = [
        middle_json_variants,
        middle_heapq_bisect,
        middle_walrus_match,
        middle_itertools_more,
        middle_functools_reduce_cache,
        middle_copy_pickle_path,
        middle_exceptions_context,
        middle_web_sql_more,
    ]
    out: list[dict] = []
    for fn in chunks:
        out.extend(fn())
    return out


def build_senior() -> list[dict]:
    chunks = [
        senior_perf_more,
        senior_cache_db_more,
        senior_dist_sec_more,
        senior_obs_arch_more,
        senior_cpython_more,
    ]
    out: list[dict] = []
    for fn in chunks:
        out.extend(fn())
    return out


JUNIOR_VARIANTS2 = build_junior()
MIDDLE_VARIANTS2 = build_middle()
SENIOR_VARIANTS2 = build_senior()


if __name__ == "__main__":
    print(
        len(JUNIOR_VARIANTS2),
        len(MIDDLE_VARIANTS2),
        len(SENIOR_VARIANTS2),
        "total",
        len(JUNIOR_VARIANTS2) + len(MIDDLE_VARIANTS2) + len(SENIOR_VARIANTS2),
    )
