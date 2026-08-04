#!/usr/bin/env python3
"""Программные дубли вопросов: один шаблон → много вариантов с разными данными.

Каждая функция-шаблон меняет числа/строки/списки, пересчитывает правильный ответ
и собирает 4 осмысленных варианта (правильный + типичные ошибки).
"""
from __future__ import annotations

import itertools
import math
from typing import Any, Callable, Iterable


from bank.utils import FLOOR_DIV_EXPLAIN, q, _mc, _uniq


# ═══════════════════════════════════════════════════════════
# JUNIOR — параметрические дубли
# ═══════════════════════════════════════════════════════════

def junior_div_mod() -> list[dict]:
    out = []
    for a, b in itertools.product([7, 9, 11, 14, 17, 20, 23, 27], [2, 3, 4, 5, 6]):
        if b >= a:
            continue
        div, mod = a // b, a % b
        opts, ans = _mc(div, [a / b, math.ceil(a / b), a - b, mod, a])
        out.append(q("операторы", f"Что вернёт {a} // {b}?", opts, ans, FLOOR_DIV_EXPLAIN,
                     code=f"print({a} // {b})"))
        opts, ans = _mc(mod, [div, a - b, 0, b, a])
        out.append(q("операторы", f"Что вернёт {a} % {b}?", opts, ans, "% — остаток от деления.",
                     code=f"print({a} % {b})"))
    return out


def junior_pow_mul() -> list[dict]:
    out = []
    for base, exp in [(2, 3), (2, 4), (2, 5), (3, 2), (3, 3), (4, 2), (5, 2), (5, 3), (6, 2), (7, 2), (8, 2), (10, 2), (10, 3)]:
        val = base ** exp
        opts, ans = _mc(val, [base * exp, base + exp, base * base, val + 1, base ** (exp - 1)])
        out.append(q("операторы", f"Что вернёт {base} ** {exp}?", opts, ans, "** — возведение в степень.",
                     code=f"print({base} ** {exp})"))
    for s, n in [("ab", 2), ("ab", 3), ("xy", 2), ("ha", 3), ("!", 4), ("go", 2), ("na", 4), ("wo", 3)]:
        exp = s * n
        opts, ans = _mc(repr(exp), [repr(s + str(n)), "ошибка", repr(s), "None"])
        # strip quotes style used elsewhere often with quotes in option
        opts = [f"'{exp}'", f"'{s}{n}'", "ошибка", "None"]
        out.append(q("строки", f"Что вернёт {s!r} * {n}?", opts, 0, "Повтор строки.",
                     code=f"print({s!r} * {n})"))
    return out


def junior_neg_floor() -> list[dict]:
    out = []
    for a, b in [(-7, 2), (-7, 3), (-8, 3), (-9, 2), (-11, 4), (-5, 2), (-10, 3), (-13, 5)]:
        val = a // b
        opts, ans = _mc(val, [int(a / b), -(-a // b), a % b, 0])
        out.append(q("операторы", f"Что вернёт {a} // {b}?", opts, ans,
                     "Округление вниз (к −∞), не к нулю.",
                     code=f"print({a} // {b})"))
    return out


def junior_index_slice_str() -> list[dict]:
    out = []
    words = ["python", "hello", "world", "abcde", "stack", "queue", "index", "slice"]
    for s in words:
        for i in [0, 1, -1, -2, len(s) // 2]:
            ch = s[i]
            opts = [f"'{ch}'", "ошибка", "None", f"'{s}'"]
            out.append(q("строки", f"Что вернёт {s!r}[{i}]?", opts, 0, "Индексация строки.",
                         code=f"print({s!r}[{i}])"))
        for a, b in [(0, 2), (1, 4), (2, None), (1, -1), (0, -1)]:
            sl = s[a:b]
            slice_txt = f"{a}:" if b is None else f"{a}:{b}"
            opts = [f"'{sl}'", f"'{s}'", "ошибка", "[]"]
            out.append(q("строки", f"Что вернёт {s!r}[{slice_txt}]?", opts, 0, "Срез строки.",
                         code=f"print({s!r}[{slice_txt}])"))
        # reverse
        opts = [f"'{s[::-1]}'", f"'{s}'", "ошибка", "None"]
        out.append(q("строки", f"Что вернёт {s!r}[::-1]?", opts, 0, "Разворот срезом.",
                     code=f"print({s!r}[::-1])"))
    return out


def junior_list_ops() -> list[dict]:
    out = []
    lists = [
        [10, 20, 30],
        [1, 2, 3, 4],
        [5, 4, 3],
        [0, 1, 2, 3, 4],
        ["a", "b", "c"],
    ]
    for lst in lists:
        for i in [0, -1, len(lst) // 2]:
            exp = lst[i]
            opts, ans = _mc(repr(exp) if isinstance(exp, str) else exp, ["ошибка", "None", lst])
            if isinstance(exp, str):
                opts = [f"'{exp}'", "ошибка", "None", str(lst)]
                ans = 0
            out.append(q("списки", f"Что вернёт {lst}[{i}]?", opts, ans, "Индекс списка.",
                         code=f"print({lst!r}[{i}])"))
        # slice
        sl = lst[1:]
        opts = [str(sl), str(lst), "ошибка", "None"]
        out.append(q("списки", f"Что вернёт {lst}[1:]?", opts, 0, "Срез с 1 до конца.",
                     code=f"print({lst!r}[1:])"))
        # concat
        extra = [99] if not isinstance(lst[0], str) else ["z"]
        exp = lst + extra
        opts = [str(exp), str(lst), "ошибка", str(lst + [extra])]
        out.append(q("списки", f"Что вернёт {lst} + {extra}?", opts, 0, "Конкатенация списков.",
                     code=f"print({lst!r} + {extra!r})"))
        # * 2
        exp = lst * 2
        opts = [str(exp), str(lst), "ошибка", "None"]
        out.append(q("списки", f"Что вернёт {lst} * 2?", opts, 0, "Повтор списка.",
                     code=f"print({lst!r} * 2)"))
    return out


def junior_builtins_math() -> list[dict]:
    out = []
    samples = [
        [1, 2, 3],
        [10, -2, 5],
        [4],
        [3, 1, 2],
        [9, 9, 1],
        [-5, -1, -3],
        [2, 8, 3, 1],
    ]
    for xs in samples:
        opts, ans = _mc(sum(xs), [xs, "ошибка", "None", len(xs)])
        out.append(q("встроенные", f"sum({xs})?", opts, ans, "Сумма элементов.",
                     code=f"print(sum({xs!r}))"))
        opts, ans = _mc(max(xs), ["ошибка", "None", min(xs), xs])
        out.append(q("встроенные", f"max({xs})?", opts, ans, "Максимум.",
                     code=f"print(max({xs!r}))"))
        opts, ans = _mc(min(xs), ["ошибка", "None", max(xs), xs])
        out.append(q("встроенные", f"min({xs})?", opts, ans, "Минимум.",
                     code=f"print(min({xs!r}))"))
        opts, ans = _mc(sorted(xs), [xs, "None", "ошибка"])
        out.append(q("встроенные", f"sorted({xs})?", opts, ans, "sorted — новый список.",
                     code=f"print(sorted({xs!r}))"))
        opts, ans = _mc(len(xs), ["ошибка", "None", sum(xs), 0])
        out.append(q("встроенные", f"len({xs})?", opts, ans, "Длина последовательности.",
                     code=f"print(len({xs!r}))"))
    for n in [0, 1, 3, 4, 5, 6, 8]:
        exp = list(range(n))
        opts = [str(exp), str(list(range(n + 1))), "ошибка", "None"]
        out.append(q("циклы", f"list(range({n}))?", opts, 0, "range(n) → 0..n-1.",
                     code=f"print(list(range({n})))"))
    for start, stop, step in [(1, 8, 2), (2, 9, 3), (5, 0, -1), (0, 10, 4), (10, 0, -2), (1, 10, 3), (-2, 3, 1)]:
        exp = list(range(start, stop, step))
        opts = [str(exp), str(list(range(start, stop))), "ошибка", "[]"]
        out.append(q("циклы", f"list(range({start}, {stop}, {step}))?", opts, 0, "range(start, stop, step).",
                     code=f"print(list(range({start}, {stop}, {step})))"))
    return out


def junior_truthiness() -> list[dict]:
    out = []
    cases = [
        (0, False), (1, True), (0.0, False), (-1, True),
        ("", False), ("0", True), ("False", True),
        ([], False), ([0], True), ({}, False), ({"a": 1}, True),
        (set(), False), ({0}, True), (None, False), ((), False), ((0,), True),
    ]
    for val, exp in cases:
        opts = [str(exp), str(not exp), "ошибка", "None"]
        out.append(q("сравнения", f"bool({val!r})?", opts, 0, "Правила truthiness.",
                     code=f"print(bool({val!r}))"))
    return out


def junior_dict_get() -> list[dict]:
    out = []
    cases = [
        ({"a": 1}, "a", 0, 1),
        ({"a": 1}, "b", 0, 0),
        ({"x": 5}, "x", 9, 5),
        ({"x": 5}, "y", 9, 9),
        ({}, "k", None, None),
        ({"n": 0}, "n", 1, 0),
        ({"n": 0}, "m", 1, 1),
        ({"hi": "yo"}, "hi", "no", "yo"),
        ({"hi": "yo"}, "bye", "no", "no"),
    ]
    for d, key, default, exp in cases:
        opt0 = "None" if exp is None else (f"'{exp}'" if isinstance(exp, str) else str(exp))
        opts = [opt0, "KeyError", "ошибка", str(d)]
        out.append(q("словари", f"{d}.get({key!r}, {default!r})?", opts, 0, "get с default — без KeyError.",
                     code=f"print({d!r}.get({key!r}, {default!r}))"))
    # direct access KeyError cases
    for d, key in [({"a": 1}, "b"), ({}, "x"), ({1: 2}, 3)]:
        opts = ["KeyError", "None", "False", "0"]
        out.append(q("словари", f"Что будет при {d}[{key!r}]?", opts, 0, "Прямой доступ без ключа → KeyError.",
                     code=f"print({d!r}[{key!r}])"))
    return out


def junior_set_ops() -> list[dict]:
    out = []
    pairs = [
        ({1, 2}, {2, 3}),
        ({1}, {2}),
        ({1, 2, 3}, {3, 4}),
        ({5, 6}, {5}),
        ({10, 20}, {20, 30, 40}),
        (set(), {1}),
        ({1, 2}, set()),
    ]
    for a, b in pairs:
        for op, name, exp in [
            ("|", "объединение", a | b),
            ("&", "пересечение", a & b),
            ("-", "разность", a - b),
            ("^", "симметричная разность", a ^ b),
        ]:
            show = "set()" if exp == set() else str(exp)
            opts = _uniq([show, str(a), str(b), "ошибка", "[]"])
            # ensure correct first
            if opts[0] != show:
                opts = [show] + [o for o in opts if o != show]
            out.append(q("множества", f"{a} {op} {b}?", opts[:4], 0, f"{op} — {name} set.",
                         code=f"print({a!r} {op} {b!r})"))
    return out


def junior_comprehensions() -> list[dict]:
    out = []
    for n in [3, 4, 5, 6]:
        exp = [x * x for x in range(n)]
        opts = [str(exp), str(list(range(n))), "ошибка", "None"]
        out.append(q("listcomp", f"[x*x for x in range({n})]?", opts, 0, "Квадраты.",
                     code=f"print([x * x for x in range({n})])"))
        exp = [x for x in range(n) if x % 2 == 0]
        opts = [str(exp), str(list(range(n))), "ошибка", "[]"]
        out.append(q("listcomp", f"[x for x in range({n}) if x % 2 == 0]?", opts, 0, "Чётные.",
                     code=f"print([x for x in range({n}) if x % 2 == 0])"))
        exp = {x: x * x for x in range(n)}
        opts = [str(exp), str(list(exp.values())), "ошибка", "None"]
        out.append(q("dictcomp", f"{{x: x*x for x in range({n})}}?", opts, 0, "Dict comprehension.",
                     code=f"print({{x: x * x for x in range({n})}})"))
    for xs in [[1, 1, 2], [3, 3, 3], [1, 2, 2, 3], ["a", "a", "b"]]:
        exp = set(xs) if not isinstance(xs[0], str) else set(xs)
        # set print order not guaranteed for display — use sorted for stable option if all comparable
        try:
            show = str(set(xs))
            alt = str(sorted(set(xs)))
        except TypeError:
            show = str(set(xs))
            alt = show
        opts = [show, str(xs), "ошибка", alt if alt != show else "[]"]
        opts = _uniq(opts)
        out.append(q("listcomp", f"{{x for x in {xs}}}?", opts[:4], 0, "Set comprehension убирает дубликаты.",
                     code=f"print({{x for x in {xs!r}}})"))
    return out


def junior_fstring_fmt() -> list[dict]:
    out = []
    for n, width in [(3, 3), (7, 4), (42, 5), (0, 3), (9, 2)]:
        exp = f"{n:0{width}d}"
        opts = [f"'{exp}'", f"'{n}'", "ошибка", f"'{str(n).ljust(width)}'"]
        out.append(q("f-string", f"f'{{n:0{width}d}}' при n={n}?", opts, 0, "Ведущие нули / ширина.",
                     code=f"n = {n}\nprint(f'{{n:0{width}d}}')"))
    for x, fmt, exp in [(3.14159, ".2f", "3.14"), (3.14159, ".3f", "3.142"), (2.5, ".1f", "2.5"), (10.0, ".0f", "10")]:
        opts = [f"'{exp}'", f"'{x}'", "ошибка", "None"]
        out.append(q("f-string", f"f'{{x:{fmt}}}' при x={x}?", opts, 0, f"Формат {fmt}.",
                     code=f"x = {x}\nprint(f'{{x:{fmt}}}')"))
    return out


def junior_zip_enum() -> list[dict]:
    out = []
    pairs = [
        ([1, 2, 3], ["a", "b"]),
        ([1, 2], ["a", "b", "c"]),
        ([10, 20], ["x", "y"]),
        (["p", "q"], [1, 2, 3]),
    ]
    for a, b in pairs:
        exp = list(zip(a, b))
        opts = [str(exp), str(a + b), "ошибка", "None"]
        out.append(q("zip", f"list(zip({a}, {b}))?", opts, 0, "zip обрезает по короткой.",
                     code=f"print(list(zip({a!r}, {b!r})))"))
    for xs, start in [(["a", "b"], 0), (["a", "b"], 1), (["x", "y", "z"], 1), ([10, 20], 5)]:
        exp = list(enumerate(xs, start=start))
        opts = [str(exp), str(list(enumerate(xs))), "ошибка", str(xs)]
        out.append(q("enumerate", f"list(enumerate({xs}, start={start}))?", opts, 0, "enumerate с start.",
                     code=f"print(list(enumerate({xs!r}, start={start})))"))
    return out


def junior_str_methods() -> list[dict]:
    out = []
    for s, sub, exp in [
        ("banana", "an", 2), ("banana", "a", 3), ("hello", "l", 2),
        ("aaaa", "aa", 2), ("abc", "z", 0), ("mississippi", "iss", 2),
    ]:
        opts, ans = _mc(exp, [len(s), 1, 0, s.count(sub[0])])
        out.append(q("строки", f"{s!r}.count({sub!r})?", opts, ans, "count — непересекающиеся вхождения.",
                     code=f"print({s!r}.count({sub!r}))"))
    for s, sep, exp in [
        ("a-b-c", "-", ["a", "b", "c"]),
        ("a-b-c", "-", None),  # placeholder
    ]:
        pass
    for s, sep in [("a-b-c", "-"), ("one two three", " "), ("x|y|z", "|"), ("a,,b", ",")]:
        exp = s.split(sep)
        opts = [str(exp), f"'{s}'", "ошибка", "None"]
        out.append(q("строки", f"{s!r}.split({sep!r})?", opts, 0, "split по разделителю.",
                     code=f"print({s!r}.split({sep!r}))"))
    for parts, sep in [(["a", "b", "c"], "-"), (["1", "2"], "."), (["go", "lang"], ""), (["x"], ",")]:
        exp = sep.join(parts)
        opts = [f"'{exp}'", str(parts), "ошибка", "None"]
        out.append(q("строки", f"{sep!r}.join({parts})?", opts, 0, "join склеивает через разделитель.",
                     code=f"print({sep!r}.join({parts!r}))"))
    return out


def junior_compare() -> list[dict]:
    out = []
    for left, right in [("a", "b"), ("b", "a"), ("abc", "abd"), ("10", "2"), ("Z", "a"), ("aa", "ab")]:
        exp = left < right
        opts = [str(exp), str(not exp), "ошибка", "None"]
        out.append(q("сравнения", f"{left!r} < {right!r}?", opts, 0, "Лексикографическое сравнение.",
                     code=f"print({left!r} < {right!r})"))
    for a, b in [([1, 2], [1, 3]), ([1, 2], [1, 2]), ([2], [1, 9]), ([1, 2, 3], [1, 2])]:
        exp = a < b
        opts = [str(exp), str(not exp), "TypeError", "None"]
        out.append(q("сравнения", f"{a} < {b}?", opts, 0, "Списки сравниваются поэлементно.",
                     code=f"print({a!r} < {b!r})"))
    return out


def junior_is_vs_eq() -> list[dict]:
    out = []
    # Small int identity variants
    for a, b in [(256, 256), (257, 257), (-5, -5), (-6, -6), (100, 100)]:
        # In interactive vs script intern may differ for 257 — use explicit computation
        code = f"a = {a}\nb = {a}\nprint(a is b)"
        # For literals same value assigned separately - actually a=257; b=257; a is b is True in same code block often due to peephole
        # Safer questions:
        pass
    for n in [0, 1, 2, 5, 10]:
        exp = True  # same object from same literal binding in one expression weird
        # Classic: [] is [] → False
        pass
    out.append(q("идентичность", "Что выведет код?", ["False", "True", "ошибка", "None"], 0,
                 "Каждый [] — новый список.",
                 code="print([] is [])"))
    out.append(q("идентичность", "Что выведет код?", ["False", "True", "ошибка", "None"], 0,
                 "Каждый {} — новый dict.",
                 code="print({} is {})"))
    for s in ["hi", "x", "test", "ab"]:
        out.append(q("идентичность", f"Что вернёт {s!r} == {s!r}?", ["True", "False", "ошибка", "None"], 0,
                     "== сравнивает значения.",
                     code=f"print({s!r} == {s!r})"))
    # copy identity
    for lst in [[1], [1, 2], [0, 0, 0]]:
        out.append(q("идентичность", "Что выведет код?", ["False", "True", "ошибка", "None"], 0,
                     "Срез — новый список (shallow copy).",
                     code=f"a = {lst!r}\nprint(a is a[:])"))
        out.append(q("идентичность", "Что выведет код?", ["True", "False", "ошибка", "None"], 0,
                     "Срез равен по значению.",
                     code=f"a = {lst!r}\nprint(a == a[:])"))
    return out


# ═══════════════════════════════════════════════════════════
# MIDDLE — параметрические дубли
# ═══════════════════════════════════════════════════════════

def middle_closures_loop() -> list[dict]:
    out = []
    for n in [3, 4, 5]:
        # broken
        out.append(q("замыкания", "Что выведет код?", [str([n - 1] * n), str(list(range(n))), "ошибка", "None"], 0,
                     "Поздний захват i — все лямбды видят финальное значение.",
                     code=f"fs = [lambda: i for i in range({n})]\nprint([f() for f in fs])"))
        # fixed
        out.append(q("замыкания", "Что выведет код?", [str(list(range(n))), str([n - 1] * n), "ошибка", "None"], 0,
                     "default i=i фиксирует значение на итерации.",
                     code=f"fs = [lambda i=i: i for i in range({n})]\nprint([f() for f in fs])"))
    return out


def middle_gen_next() -> list[dict]:
    out = []
    for seq in [[1, 2], [10, 20, 30], ["a", "b"], [0, 1]]:
        a, b = seq[0], seq[1]
        out.append(q("генераторы", "Что выведет код?", [f"{a} {b}", str(seq), "ошибка", "None"], 0,
                     "Два next() забирают первые элементы.",
                     code=f"g = (x for x in {seq!r})\nprint(next(g), next(g))"))
    for n in [2, 3, 4]:
        out.append(q("генераторы", f"list((x*x for x in range({n})))?",
                     [str([x * x for x in range(n)]), str(list(range(n))), "ошибка", "None"], 0,
                     "Generator expression материализуется через list.",
                     code=f"print(list(x * x for x in range({n})))"))
    return out


def middle_deque_counter() -> list[dict]:
    out = []
    # Counter most_common style mental
    from collections import Counter
    for xs in ["aab", "aaabb", "xyz", "mississippi", "abracadabra"]:
        c = Counter(xs)
        top = c.most_common(2)
        opts = [str(top), str(dict(c)), "ошибка", "None"]
        out.append(q("collections", f"Counter({xs!r}).most_common(2)?", opts, 0,
                     "Топ-2 по частоте.",
                     code=f"from collections import Counter\nprint(Counter({xs!r}).most_common(2))"))
    for n, k in [(5, 2), (6, 3), (4, 1), (7, 4)]:
        # rotate mental: deque rotate
        out.append(q("collections", f"Что делает deque.rotate({k}) на {n} элементах?",
                     [f"цикл сдвиг на {k} вправо (отриц. — влево)", "сортирует", "удаляет k", "ошибка всегда"], 0,
                     "rotate — циклический сдвиг."))
    return out


def middle_itertools_variants() -> list[dict]:
    out = []
    for n, r in [(3, 2), (4, 2), (4, 3), (5, 2)]:
        import itertools as it
        exp = list(it.combinations(range(n), r))
        opts = [str(exp), str(list(it.permutations(range(n), r))), "ошибка", "[]"]
        out.append(q("itertools", f"list(combinations(range({n}), {r})) — сколько элементов?",
                     [str(len(exp)), str(n * r), str(n ** r), str(math.factorial(n))], 0,
                     f"C({n},{r}) = {len(exp)}.",
                     code=f"from itertools import combinations\nprint(len(list(combinations(range({n}), {r}))))"))
    for n in [2, 3, 4]:
        import itertools as it
        exp = list(it.product([0, 1], repeat=n))
        opts, ans = _mc(len(exp), [n * 2, n, 2 * n + 1, n ** 2])
        out.append(q("itertools", f"len(list(product([0,1], repeat={n})))?", opts, ans,
                     f"2^{n} = {len(exp)}.",
                     code=f"from itertools import product\nprint(len(list(product([0, 1], repeat={n}))))"))
    for seq, n in [([1, 2, 3, 4, 5], 3), ([10, 20, 30, 40], 2), (list(range(6)), 4)]:
        import itertools as it
        exp = list(it.islice(seq, n))
        opts = [str(exp), str(seq[: n + 1]), "ошибка", "None"]
        out.append(q("itertools", f"list(islice({seq}, {n}))?", opts, 0, "islice — ленивый срез.",
                     code=f"from itertools import islice\nprint(list(islice({seq!r}, {n})))"))
    return out


def middle_lru_and_partial() -> list[dict]:
    out = []
    for a, b in [(1, 2), (3, 4), (5, 5), (10, 1), (0, 7)]:
        out.append(q("functools", f"partial(f, {a})({b}) при f=lambda x,y: x+y эквивалентно…",
                     [str(a + b), str(a * b), str(b), "ошибка"], 0,
                     f"partial фиксирует первый аргумент → f({a}, {b}).",
                     code=f"from functools import partial\nf = lambda x, y: x + y\nprint(partial(f, {a})({b}))"))
    for n in [2, 3, 4, 5]:
        out.append(q("functools", f"Сколько уникальных ключей кэша у fib({n}) с lru_cache при наивной рекурсии fib(n)=fib(n-1)+fib(n-2)?",
                     [f"примерно {n + 1} (0..n)", str(2 ** n), str(n), "0"], 0,
                     "Каждый k от 0..n кэшируется один раз."))
    return out


def middle_typing_runtime() -> list[dict]:
    out = []
    for t, val, exp in [
        ("list", [1, 2], True),
        ("dict", {"a": 1}, True),
        ("tuple", (1,), True),
        ("set", {1}, True),
        ("list", (1, 2), False),
        ("dict", [1], False),
    ]:
        opts = [str(exp), str(not exp), "ошибка", "None"]
        out.append(q("typing", f"isinstance({val!r}, {t})?", opts, 0, "isinstance с абстрактными/builtin типами.",
                     code=f"print(isinstance({val!r}, {t}))"))
    for origin in ["list[int]", "dict[str, int]", "tuple[int, ...]"]:
        out.append(q("typing", f"isinstance([1], {origin}) в обычном CPython?",
                     ["TypeError (или False в отдельных случаях) — generic alias не для isinstance так", "True всегда", "False всегда без ошибки", "True только в 3.12+"], 0,
                     "Для generics нужен typing.get_origin / runtime_checkable Protocol осторожно."))
    return out


def middle_dataclass_field() -> list[dict]:
    out = []
    for name, default in [("Point", 0), ("Cell", -1), ("Node", 1)]:
        out.append(q("dataclasses", f"@dataclass class {name}: x: int = {default} — экземпляры делят x?",
                     ["нет, int immutable default ок", "да, как list", "ошибка синтаксиса", "только frozen"], 0,
                     "Проблема mutable default; int безопасен."))
    for factory in ["list", "dict", "set"]:
        out.append(q("dataclasses", f"field(default_factory={factory}) зачем?",
                     [f"новый {factory}() на каждый экземпляр", f"общий один {factory}", "запретить поле", "только JSON"], 0,
                     "Избегаем общего mutable default."))
    return out


def middle_async_gather() -> list[dict]:
    out = []
    for n in [2, 3, 4]:
        out.append(q("asyncio", f"gather n={n} корутин без return_exceptions при одной ошибке…",
                     ["пробросит исключение (остальные могут продолжать до отмены политики)", "вернёт частичный list тихо", "убивает процесс", "игнор"], 0,
                     "По умолчанию первая ошибка поднимается из gather."))
        out.append(q("asyncio", f"create_task ×{n} без await/ссылок риск…",
                     ["задачи могут быть собраны GC / потеря исключений", "выполнятся надёжнее", "синхронно", "запрещены"], 0,
                     "Держи ссылки или await TaskGroup."))
    return out


def middle_path_regex() -> list[dict]:
    out = []
    for parts in [("a", "b"), ("var", "log", "app.log"), ("home", "user", "docs"), ("x", "y", "z", "w")]:
        expr = " / ".join(repr(p) for p in parts)
        # pathlib result as posix-ish string in options
        from pathlib import PurePosixPath
        exp = str(PurePosixPath(*parts))
        opts = [exp, "/".join(parts) + "/", "ошибка", "None"]
        out.append(q("pathlib", f"str(PurePosixPath({', '.join(repr(p) for p in parts)}))?",
                     opts, 0, "Path склеивает части.",
                     code=f"from pathlib import PurePosixPath\nprint(PurePosixPath({', '.join(repr(p) for p in parts)}))"))
    for pat, text, exp in [
        (r"\d+", "ab12cd", "12"),
        (r"[aeiou]", "stack", "a"),
        (r"^\d+$", "42", "42"),
        (r"^\d+$", "42a", None),
    ]:
        import re
        m = re.search(pat, text)
        show = "None" if m is None else f"'{m.group()}'"
        opts = [show, f"'{text}'", "ошибка", "[]"]
        out.append(q("regex", f"re.search({pat!r}, {text!r}) group?", opts, 0, "search — первое вхождение.",
                     code=f"import re\nm = re.search({pat!r}, {text!r})\nprint(None if m is None else m.group())"))
    return out


def middle_sql_http_variants() -> list[dict]:
    out = []
    for method in ["GET", "PUT", "DELETE", "HEAD", "OPTIONS"]:
        out.append(q("HTTP", f"Метод {method} по семантике HTTP…",
                     ["идемпотентный (в идеале)", "никогда не идемпотентный", "только с телом JSON", "запрещён REST"], 0,
                     f"{method} безопасен к повтору на уровне семантики спеки (кэш/прокси учитывай)."))
    for status, meaning in [(200, "OK"), (201, "Created"), (204, "No Content"), (301, "Moved Permanently"),
                            (400, "Bad Request"), (401, "Unauthorized"), (403, "Forbidden"), (404, "Not Found"),
                            (409, "Conflict"), (422, "Unprocessable"), (429, "Too Many Requests"), (500, "Server Error"),
                            (502, "Bad Gateway"), (503, "Unavailable")]:
        out.append(q("HTTP", f"HTTP {status} обычно значит…",
                     [meaning, "всегда успех", "только редирект", "WebSocket"], 0,
                     f"{status} — {meaning}."))
    for iso in ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"]:
        out.append(q("SQL", f"Уровень изоляции {iso} — что верно?",
                     ["разные аномалии чтения/записи; знай свою СУБД", "все уровни идентичны в PostgreSQL", "только про DDL", "отключает индексы"], 0,
                     "Изоляции отличаются допустимыми аномалиями."))
    return out


# ═══════════════════════════════════════════════════════════
# SENIOR — параметрические дубли + новые
# ═══════════════════════════════════════════════════════════

def senior_complexity_variants() -> list[dict]:
    out = []
    ops = [
        ("list.append", "O(1) амортизированно", "O(n)", "O(log n)", "O(n²)"),
        ("list.insert(0, x)", "O(n)", "O(1)", "O(log n)", "O(n log n)"),
        ("dict[key]", "O(1) амортизированно", "O(n)", "O(log n)", "O(n²)"),
        ("set.add", "O(1) амортизированно", "O(n)", "O(log n)", "O(n²)"),
        ("sorted(list)", "O(n log n)", "O(n)", "O(1)", "O(n²) всегда"),
        ("heapq.heappush", "O(log n)", "O(1)", "O(n)", "O(n log n)"),
        ("bisect.bisect_left", "O(log n)", "O(n)", "O(1)", "O(n²)"),
        ("deque.popleft", "O(1)", "O(n)", "O(log n)", "O(n²)"),
        ("str += в цикле n раз", "O(n²) типично", "O(n)", "O(1)", "O(log n)"),
        ("''.join(parts)", "O(n)", "O(n²)", "O(1)", "O(n log n)"),
    ]
    for name, good, *bad in ops:
        opts = [good, *bad]
        out.append(q("performance", f"Сложность {name}?", opts, 0, f"Большая O для {name}."))
    return out


def senior_cache_ttl_variants() -> list[dict]:
    out = []
    for ttl in [30, 60, 120, 300, 600]:
        out.append(q("cache", f"TTL={ttl}s без jitter — риск…",
                     ["синхронный stampede при массовом истечении", "только больше RAM", "невозможность hit", "GIL"], 0,
                     "Добавляй jitter / soft TTL / singleflight."))
        out.append(q("cache", f"negative cache TTL={ttl // 10}s зачем?",
                     ["не долбить origin на повторных miss/404", "хранить пароли", "увеличить hit forever", "отключить Redis"], 0,
                     "Короткий TTL на отсутствие."))
    for shards in [2, 4, 8, 16]:
        out.append(q("cache", f"hot key split на {shards} шардов идея…",
                     ["размазать нагрузку популярного ключа", "уменьшить TTL до 0", "один box сильнее", "запретить cache"], 0,
                     "Перекос ключей."))
    return out


def senior_http_api_variants() -> list[dict]:
    out = []
    for code in [429, 503, 408, 502]:
        out.append(q("api", f"Клиент получил {code} — разумная стратегия?",
                     ["exponential backoff + jitter (+ Retry-After)", "сразу 100 ретраев", "сменить на POST", "игнор"], 0,
                     "Не усиливай шторм."))
    for page in [20, 50, 100]:
        out.append(q("api", f"offset-пагинация page_size={page} минус…",
                     ["«прыжки» при вставках; глубокий offset дорог", "нельзя реализовать в SQL", "всегда лучше cursor", "запрещена REST"], 0,
                     "Для лент чаще cursor."))
    for ver in ["v1", "v2", "2024-01-01"]:
        out.append(q("api", f"Версия API `{ver}` в URL/заголовке зачем?",
                     ["эволюция контракта без ломания клиентов", "ускорение CPU", "замена auth", "только документация"], 0,
                     "Совместимость."))
    return out


def senior_db_variants() -> list[dict]:
    out = []
    for n in [1, 10, 100, 1000]:
        out.append(q("db", f"N+1: 1 запрос списка + {n} связанных — симптом…",
                     ["лишние round-trip в БД (ORM lazy)", "слишком большой JOIN всегда", "только отсутствие индекса PK", "GIL"], 0,
                     "Лечится eager/join/IN."))
    for level in ["READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"]:
        out.append(q("db", f"При {level} write skew…",
                     ["возможен или нет в зависимости от СУБД/реализации — проверяй документацию", "невозможен никогда нигде", "только в MyISAM", "только NoSQL"], 0,
                     "Теория изоляций ≠ конкретный движок."))
    for pool in [5, 10, 20, 50]:
        out.append(q("db", f"pool_size={pool} исчерпан — симптом…",
                     ["запросы ждут коннект / таймауты", "CPU 100% всегда", "только disk full", "GIL deadlock only"], 0,
                     "Утечки, длинные транзакции, мало пула."))
    return out


def senior_dist_variants() -> list[dict]:
    out = []
    for delivery in ["at-most-once", "at-least-once", "exactly-once"]:
        tip = {
            "at-most-once": "можно потерять; без дублей",
            "at-least-once": "дубли возможны → идемпотентность",
            "exactly-once": "на практике часто = at-least-once + идемпотентный приём",
        }[delivery]
        out.append(q("distributed", f"Семантика доставки {delivery}:",
                     [tip, "всегда бесплатна в любой очереди", "только UDP", "гарантируется GIL"], 0,
                     tip))
    for nodes in [3, 5, 7]:
        out.append(q("distributed", f"Кворум в Raft/Consul-подобном кластере из {nodes} узлов…",
                     [f"большинство: {nodes // 2 + 1}", f"{nodes}", "1", f"{nodes - 1}"], 0,
                     "Большинство для выбора лидера/коммита."))
    for timeout in [50, 100, 200, 500]:
        out.append(q("distributed", f"heartbeat timeout ~{timeout}ms слишком маленький риск…",
                     ["ложные failover при GC/сети", "только быстрее recovery без минусов", "не влияет", "ломает TLS"], 0,
                     "Баланс sensitivity vs stability."))
    return out


def senior_security_variants() -> list[dict]:
    out = []
    for lib in ["pickle", "yaml.load (unsafe)", "marshal", "shelve"]:
        out.append(q("security", f"Десериализация через {lib} из недоверенного источника?",
                     ["риск RCE / выполнения кода — нельзя", "безопасно как json", "только DoS", "ok за HTTPS"], 0,
                     "Не доверяй бинарным/пайтон-десериализаторам."))
    for header in ["Authorization", "Cookie", "X-API-Key", "X-Forwarded-For"]:
        out.append(q("security", f"Логировать сырой заголовок {header}?",
                     ["осторожно: секреты/PII — редактируй", "всегда полностью", "никогда никакие заголовки", "только в debug print"], 0,
                     "Redaction в логах."))
    for sink in ["SQL f-string", "shell=True + user input", "open(user_path)", "redirect=user_url"]:
        out.append(q("security", f"Антипаттерн: {sink}",
                     ["инъекции / path traversal / open redirect — валидируй и параметризуй", "ускоряет код", "требуется PEP 8", "безопасно в FastAPI всегда"], 0,
                     "Классика AppSec."))
    return out


def senior_obs_packaging() -> list[dict]:
    out = []
    for pct in [1, 5, 10, 25]:
        out.append(q("observability", f"Сэмплирование трейсов {pct}% риск…",
                     ["можно пропустить редкие ошибки — нужен tail-based/error sampling", "полная картина всегда", "ломает метрики RED", "запрещено"], 0,
                     "Комбинируй head + tail sampling."))
    for label in ["user_id", "request_id", "email", "session_id"]:
        bad = label in {"user_id", "email", "session_id"}
        out.append(q("observability", f"Метка Prometheus `{label}` на высококардинальном трафике?",
                     ["опасно взрывом time series" if bad else "обычно ок как low-cardinality/trace id не в metric labels",
                      "всегда обязательно", "ускоряет PromQL", "заменяет логи"], 0,
                     "Cardinality — главный враг метрик."))
    for py in ["3.10", "3.11", "3.12", "3.13"]:
        out.append(q("packaging", f"CI matrix с Python {py} зачем?",
                     ["ловить несовместимости версий", "только ради бейджа", "заменяет тесты", "нужен только latest"], 0,
                     "Совместимость пакета."))
    return out


def senior_cpython_variants() -> list[dict]:
    out = []
    for tip in [
        ("LOAD_FAST", "локальная переменная — быстрый доступ"),
        ("LOAD_GLOBAL", "глобальная / должее lookup"),
        ("CALL", "вызов функции"),
        ("BINARY_OP", "арифметика/операции"),
    ]:
        out.append(q("байткод", f"Опкод {tip[0]} связан с…",
                     [tip[1], "сетевым I/O", "только GC", "импортом pip"], 0,
                     f"{tip[0]}: {tip[1]}."))
    for n in [0, 1, 2, 5, 100, 256, 257]:
        # interning question variants
        if -5 <= n <= 256:
            msg = "часто один и тот же объект (intern маленьких int)"
            ans0 = "может быть True из‑за интернирования"
        else:
            msg = "не полагайся на is — интернирование не контракт для больших int"
            ans0 = "is может быть False; сравнивай через =="
        out.append(q("CPython", f"Для int {n}: надёжно ли `a is b` при равных значениях?",
                     [ans0, "всегда True по языку", "всегда False по языку", "SyntaxError"], 0,
                     msg))
    return out


# ═══════════════════════════════════════════════════════════
# Новые «штучные» вопросы (не только варианты)
# ═══════════════════════════════════════════════════════════

def junior_fresh() -> list[dict]:
    return [
        q("функции", "Что выведет код?", ["3", "ошибка", "None", "0"], 0,
          "return выходит сразу; else у for не связан с return так — здесь просто return 3.",
          code="def f():\n    for i in range(5):\n        return i + 3\nprint(f())"),
        q("исключения", "Что выведет код?", ["1\n3", "1\n2\n3", "1", "ошибка"], 0,
          "except ловит ValueError (pass); finally всегда печатает 3.",
          code="try:\n    print(1)\n    raise ValueError\nexcept ValueError:\n    pass\nfinally:\n    print(3)"),
        q("ООП", "Что выведет код?", ["B", "A", "ошибка", "None"], 0,
          "Переопределённый метод в B.",
          code="class A:\n    def f(self):\n        return 'A'\nclass B(A):\n    def f(self):\n        return 'B'\nprint(B().f())"),
        q("модули", "__all__ в модуле влияет на…",
          ["from module import *", "любой import", "только pip", "скорость"], 0,
          "Список публичных имён для star-import."),
        q("файлы", "Режим 'x' у open — это…",
          ["создать новый; ошибка если существует", "только чтение", "дозапись", "бинарный"], 0,
          "Exclusive creation."),
    ]


def middle_fresh() -> list[dict]:
    return [
        q("декораторы", "Порядок @a @b def f: это…",
          ["f = a(b(f))", "f = b(a(f))", "параллельно", "ошибка"], 0,
          "Снизу вверх: сначала b, потом a."),
        q("context", "ExitStack.enter_context нужен когда…",
          ["динамическое число CM", "только один with", "вместо try", "async only"], 0,
          "contextlib.ExitStack."),
        q("MRO", "Что выведет C.__mro__[0].__name__?", ["C", "A", "B", "object"], 0,
          "Первый в MRO — сам класс.",
          code="class A: pass\nclass B(A): pass\nclass C(B): pass\nprint(C.__mro__[0].__name__)"),
        q("match", "case _ : это…",
          ["wildcard / default ветка", "ошибка синтаксиса", "только для None", "break"], 0,
          "Ловит всё оставшееся."),
        q("тесты", "pytest.mark.parametrize умножает…",
          ["тест на набор входных данных", "потоки", "процессы", "coverage магически"], 0,
          "Таблица кейсов."),
    ]


def senior_fresh() -> list[dict]:
    return [
        q("architecture", "strangler fig pattern…",
          ["постепенно заменять легаси новым вокруг", "big-bang rewrite", "только monolith forever", "удалить тесты"], 0,
          "Эволюционная миграция."),
        q("CPython", "PEP 523 / frame evaluation API…",
          ["хуки вычисления фреймов (JIT/отладка)", "удаление GIL", "только typing", "pip API"], 0,
          "Низкоуровневые оптимизации."),
        q("distributed", "fencing token…",
          ["запретить старому лидеру писать после failover", "JWT refresh", "TTL cache", "GIL token"], 0,
          "Защита от split-brain записи."),
        q("security", "content-type confusion / desync…",
          ["разное толкование запроса proxy vs app", "только XSS", "только SQLi", "GIL"], 0,
          "HTTP request smuggling рядом."),
        q("performance", "zero-copy / buffer protocol польза…",
          ["меньше копий памяти между слоями", "убирает GC", "запрещает bytes", "только asyncio"], 0,
          "memoryview / PEP 3118."),
    ]


def build_junior() -> list[dict]:
    chunks: list[Callable[[], list[dict]]] = [
        junior_div_mod,
        junior_pow_mul,
        junior_neg_floor,
        junior_index_slice_str,
        junior_list_ops,
        junior_builtins_math,
        junior_truthiness,
        junior_dict_get,
        junior_set_ops,
        junior_comprehensions,
        junior_fstring_fmt,
        junior_zip_enum,
        junior_str_methods,
        junior_compare,
        junior_is_vs_eq,
        junior_fresh,
    ]
    out: list[dict] = []
    for fn in chunks:
        out.extend(fn())
    return out


def build_middle() -> list[dict]:
    chunks = [
        middle_closures_loop,
        middle_gen_next,
        middle_deque_counter,
        middle_itertools_variants,
        middle_lru_and_partial,
        middle_typing_runtime,
        middle_dataclass_field,
        middle_async_gather,
        middle_path_regex,
        middle_sql_http_variants,
        middle_fresh,
    ]
    out: list[dict] = []
    for fn in chunks:
        out.extend(fn())
    return out


def build_senior() -> list[dict]:
    chunks = [
        senior_complexity_variants,
        senior_cache_ttl_variants,
        senior_http_api_variants,
        senior_db_variants,
        senior_dist_variants,
        senior_security_variants,
        senior_obs_packaging,
        senior_cpython_variants,
        senior_fresh,
    ]
    out: list[dict] = []
    for fn in chunks:
        out.extend(fn())
    return out


JUNIOR_VARIANTS = build_junior()
MIDDLE_VARIANTS = build_middle()
SENIOR_VARIANTS = build_senior()


if __name__ == "__main__":
    print(
        len(JUNIOR_VARIANTS),
        len(MIDDLE_VARIANTS),
        len(SENIOR_VARIANTS),
        "total",
        len(JUNIOR_VARIANTS) + len(MIDDLE_VARIANTS) + len(SENIOR_VARIANTS),
    )
