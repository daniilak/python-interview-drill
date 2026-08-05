// @meta topic=встроенные group=Встроенные функции
// junior · 14 cards
(window.QUESTIONS_JUNIOR = window.QUESTIONS_JUNIOR || []).push(
  {
    "q": "Что вернёт max([1, 9, 3])?",
    "options": [
      "9",
      "ошибка",
      "утверждение про другой уровень стека",
      "[1, 9, 3]"
    ],
    "answer": 0,
    "explain": "Максимум — Встроенные функции вроде len, enumerate и zip работают с любыми подходящими итерируемыми объектами.",
    "kind": "single",
    "id": "j1065",
    "fixed": true
  },
  {
    "q": "Что выведет print(len([2, 8, 3, 1]))?",
    "options": [
      "4",
      "3",
      "TypeError",
      "10"
    ],
    "answer": 0,
    "explain": "len([2, 8, 3, 1]) → 4: четыре элемента.",
    "kind": "single",
    "code": "print(len([2, 8, 3, 1]))",
    "id": "j1083",
    "fixed": true
  },
  {
    "q": "Что вернёт sorted([0, -1, 2])?",
    "options": [
      "[-1, 0, 2]",
      "[0, -1, 2]",
      "ошибка",
      "[2, 0, -1]"
    ],
    "answer": 0,
    "explain": "Sorted возвращает новый список. Встроенные функции вроде len, enumerate и zip работают с любыми подходящими итерируемыми объектами.",
    "kind": "single",
    "id": "j1086",
    "fixed": true
  },
  {
    "q": "Что выведет print(abs(-1))?",
    "options": [
      "1",
      "-1",
      "0",
      "TypeError"
    ],
    "answer": 0,
    "explain": "abs(-1) = 1: функция возвращает модуль числа без знака.",
    "kind": "single",
    "code": "print(abs(-1))",
    "id": "j1095",
    "fixed": true
  },
  {
    "q": "Что выведет print(max([4]))?",
    "options": [
      "4",
      "TypeError",
      "None",
      "[4]"
    ],
    "answer": 0,
    "explain": "max([4]) → 4: из одного элемента — он сам. max([]) — ValueError.",
    "kind": "single",
    "code": "print(max([4]))",
    "id": "j1098",
    "fixed": true
  },
  {
    "q": "Что выведет print(max([2, 8, 3, 1]))?",
    "options": [
      "8",
      "2",
      "3",
      "TypeError"
    ],
    "answer": 0,
    "explain": "max([2, 8, 3, 1]) → 8 — наибольший элемент.",
    "kind": "single",
    "code": "print(max([2, 8, 3, 1]))",
    "id": "j1107",
    "fixed": true
  },
  {
    "q": "Что выведет print(divmod(11, 3))?",
    "options": [
      "(3, 2)",
      "(3,)",
      "TypeError",
      "[3, 2]"
    ],
    "answer": 0,
    "explain": "Divmod, а затем (//, %) — Встроенные функции вроде len, enumerate и zip работают с любыми подходящими итерируемыми объектами.",
    "kind": "single",
    "code": "print(divmod(11, 3))",
    "id": "j1110",
    "fixed": true
  },
  {
    "q": "Что выведет print(max([1, 2, 3]))?",
    "options": [
      "3",
      "1",
      "2",
      "TypeError"
    ],
    "answer": 0,
    "explain": "max([1, 2, 3]) → 3.",
    "kind": "single",
    "code": "print(max([1, 2, 3]))",
    "id": "j1113",
    "fixed": true
  },
  {
    "q": "Что выведет print(sorted([1, 3, 2], reverse=True))?",
    "options": [
      "[3, 2, 1]",
      "[1, 2, 3]",
      "TypeError",
      "[2, 3, 1]"
    ],
    "answer": 0,
    "explain": "Sorted(..., reverse=True) — новый список по убыванию. Встроенные функции вроде len, enumerate и zip работают с любыми подходящими итерируемыми объектами.",
    "kind": "single",
    "code": "print(sorted([1, 3, 2], reverse=True))",
    "id": "j1128",
    "fixed": true
  },
  {
    "q": "Что верно про divmod(9, 4)?",
    "options": [
      "(2, 1)",
      "(2.25,0)",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "9//4 и 9%4 — Встроенные функции вроде len, enumerate и zip работают с любыми подходящими итерируемыми объектами.",
    "kind": "single",
    "id": "j1137",
    "fixed": true
  },
  {
    "q": "Что выведет print(min([-5, -1, -3]))?",
    "options": [
      "-5",
      "-1",
      "-3",
      "TypeError"
    ],
    "answer": 0,
    "explain": "min([-5, -1, -3]) → -5 — наименьшее (самое «левое» на числовой прямой).",
    "kind": "single",
    "code": "print(min([-5, -1, -3]))",
    "id": "j1140",
    "fixed": true
  },
  {
    "q": "Что выведет print(round(2.5))?",
    "options": [
      "2",
      "3",
      "2.0",
      "TypeError"
    ],
    "answer": 0,
    "explain": "round(2.5) → 2: banker's rounding к ближайшему чётному.",
    "kind": "single",
    "code": "print(round(2.5))",
    "id": "j1149",
    "fixed": true
  },
  {
    "q": "Что выведет a = [9, 8, 7]\na.sort()\nprint(a)?",
    "options": [
      "[7, 8, 9]",
      "TypeError",
      "[9, 8, 7]",
      "None"
    ],
    "answer": 0,
    "explain": "После sort список отсортирован; print(a) показывает его. Встроенные функции вроде len, enumerate и zip работают с любыми подходящими итерируемыми объектами.",
    "kind": "single",
    "code": "a = [9, 8, 7]\na.sort()\nprint(a)",
    "id": "j1155",
    "fixed": true
  },
  {
    "q": "Что выведет print(list(zip([1, 2, 3], ['a', 'b'])))?",
    "options": [
      "[(1, 'a'), (2, 'b')]",
      "[(1, 'a'), (2, 'b'), (3, None)]",
      "TypeError",
      "[1, 2, 3, 'a', 'b']"
    ],
    "answer": 0,
    "explain": "zip([1,2,3], ['a','b']) обрезается по короткому → [(1,'a'), (2,'b')].",
    "kind": "single",
    "code": "print(list(zip([1, 2, 3], ['a', 'b'])))",
    "id": "j1164",
    "fixed": true
  }
);
