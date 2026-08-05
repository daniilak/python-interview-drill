// @meta topic=сравнения group=Типы и операторы
// junior · 51 cards
(window.QUESTIONS_JUNIOR = window.QUESTIONS_JUNIOR || []).push(
  {
    "q": "Что вернёт `'10' < '2'`?",
    "options": [
      "True",
      "False",
      "TypeError",
      "ValueError"
    ],
    "answer": 0,
    "explain": "Сравнение строк происходит лексикографически (посимвольно). Python сравнивает первые символы: `'1'` меньше `'2'`, что истинно. Результат всей операции — `True`, так как до остальных символов дело не доходит.",
    "kind": "single",
    "id": "j78",
    "fixed": true
  },
  {
    "q": "Что вернёт выражение `None == False`?",
    "options": [
      "False",
      "True",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "None — это отдельный объект типа NoneType, а False — булево значение. Хотя None приводится к False в логических выражениях, при прямом сравнении через `==` они не равны, так как являются объектами разных типов.",
    "kind": "single",
    "id": "j151",
    "fixed": true
  },
  {
    "q": "Что вернёт выражение `bool({'a': 1})`?",
    "options": [
      "True",
      "False",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "В Python любой непустой контейнер (список, словарь, кортеж и т.д.) при преобразовании в булево значение даёт `True`. Только пустые контейнеры, ноль и `None` приводятся к `False`.",
    "kind": "single",
    "code": "print(bool({'a': 1}))",
    "id": "j171",
    "fixed": true
  },
  {
    "q": "Что вернёт выражение 'a' < 'b'?",
    "options": [
      "True",
      "False",
      "TypeError",
      "Зависит от кодировки"
    ],
    "answer": 0,
    "explain": "Строки сравниваются лексикографически, по кодовым точкам Unicode. Код символа 'a' меньше кода 'b', поэтому результат — True. Ловушка в том, что сравнение регистрозависимо: например, 'A' будет меньше 'a'.",
    "kind": "single",
    "id": "j181",
    "fixed": true
  },
  {
    "q": "Что вернёт `bool([])`?",
    "options": [
      "False",
      "True",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Встроенная функция `bool()` возвращает `False` для пустых коллекций, включая пустой список `[]`. В Python пустые последовательности, числовой ноль и `None` считаются ложными значениями в логических контекстах.",
    "kind": "single",
    "id": "j191",
    "fixed": true
  },
  {
    "q": "Что вернёт выражение `True + True`?",
    "options": [
      "2",
      "TypeError",
      "True",
      "1"
    ],
    "answer": 0,
    "explain": "Тип `bool` в Python является подклассом `int`, где `True` эквивалентно `1`, а `False` — `0`. Поэтому сложение `True + True` выполняется как обычная арифметическая операция `1 + 1`, возвращая `2`. Многие ожидают `TypeError`, не зная об этой особенности.",
    "kind": "single",
    "id": "j251",
    "fixed": true
  },
  {
    "q": "Что вернёт выражение `3 < 2 < 1`?",
    "code": "print(3 < 2 < 1)",
    "options": [
      "False",
      "True",
      "TypeError",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Цепочки сравнений в Python эквивалентны логическому «И». Выражение `3 < 2 < 1` разворачивается в `(3 < 2) and (2 < 1)`. Поскольку первая часть `(3 < 2)` ложна, всё выражение становится ложным.",
    "kind": "single",
    "id": "j271",
    "fixed": true
  },
  {
    "q": "Что вернёт выражение [1, 2] < [1, 2]?",
    "options": [
      "False",
      "True",
      "TypeError",
      "ValueError"
    ],
    "answer": 0,
    "explain": "Сравнение списков в Python происходит поэлементно (лексикографически). Поскольку все соответствующие элементы в списках равны, списки считаются равными, а не строго меньшими друг друга, поэтому результат — False.",
    "kind": "single",
    "code": "print([1, 2] < [1, 2])",
    "id": "j335",
    "fixed": true
  },
  {
    "q": "Что вернёт вызов функции bool('')?",
    "options": [
      "False",
      "True",
      "ValueError",
      "None"
    ],
    "answer": 0,
    "explain": "В Python пустая строка '' считается «ложным» значением (falsy). Поэтому функция bool() при передаче ей пустой строки вернёт False. Это же правило относится к пустым коллекциям, числовому нулю и None.",
    "kind": "single",
    "id": "j564",
    "fixed": true
  },
  {
    "q": "Какой результат у выражения `1 < 2 > 3`?",
    "options": [
      "False",
      "True",
      "TypeError",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Операторы сравнения в Python можно объединять в цепочки. Выражение `1 < 2 > 3` эквивалентно `(1 < 2) and (2 > 3)`. Поскольку `2 > 3` ложно, итоговый результат — `False`.",
    "kind": "single",
    "code": "print(1 < 2 > 3)",
    "id": "j764",
    "fixed": true
  },
  {
    "q": "Что вернёт `bool(None)`?",
    "options": [
      "False",
      "True",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "В булевом контексте объект `None` всегда расценивается как ложное значение. К другим «ложным» объектам в Python относятся числовые нули, а также пустые строки и коллекции.",
    "kind": "single",
    "code": "print(bool(None))",
    "id": "j905",
    "fixed": true
  },
  {
    "q": "Что вернёт 'abc' < 'abd'?",
    "options": [
      "True",
      "False",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Строки сравниваются лексикографически (посимвольно). Первые два символа 'a' и 'b' совпадают, а на третьей позиции 'c' идёт раньше 'd' в алфавите, поэтому результат сравнения — True.",
    "kind": "single",
    "id": "j925",
    "fixed": true
  },
  {
    "q": "Что вернёт сравнение строк `'a' < 'b'`?",
    "options": [
      "True",
      "False",
      "TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Строки в Python сравниваются лексикографически, символ за символом, на основе их Unicode-кодов. Поскольку код символа 'a' (97) меньше кода 'b' (98), результат сравнения — True.",
    "kind": "single",
    "code": "print('a' < 'b')",
    "id": "j1003",
    "fixed": true
  },
  {
    "q": "Что верно про bool('0')?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "True. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "id": "j1102",
    "fixed": true
  },
  {
    "q": "Что верно про bool([])?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "По правилам truthiness ответ False. Пустые коллекции и 0/''/None ложны; остальное обычно истинно.",
    "kind": "single",
    "id": "j1105",
    "fixed": true
  },
  {
    "q": "Что вернёт 3 < 4 < 5?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Цепочка сравнений: 3<4 и 4<5 вычисляются вместе → True. Это не сравнение кортежей.",
    "kind": "single",
    "id": "j1114",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print('abc' < 'abd')",
    "id": "j1144",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "утверждение про другой уровень стека",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "print([1, 2, 3] < [1, 2])",
    "id": "j1150",
    "fixed": true
  },
  {
    "q": "Что верно про bool(0)?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "По правилам truthiness ответ False. Пустые коллекции и 0/''/None ложны; остальное обычно истинно.",
    "kind": "single",
    "id": "j1153",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Строки сравниваются лексикографически: '1' < '2', поэтому '10' < '2' →.",
    "kind": "single",
    "code": "print('10' < '2')",
    "id": "j1209",
    "fixed": true
  },
  {
    "q": "Что верно про bool(1)?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "True. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "id": "j1217",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "print(bool(0))",
    "id": "j1223",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print(bool((0,)))",
    "id": "j1242",
    "fixed": true
  },
  {
    "q": "Что вернёт 3 < 4 > 5?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Результат выражения — False. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "j1252",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "print(bool([]))",
    "id": "j1265",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "print(bool(()))",
    "id": "j1269",
    "fixed": true
  },
  {
    "q": "Что верно про bool({})?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "По правилам truthiness ответ False. Пустые коллекции и 0/''/None ложны; остальное обычно истинно.",
    "kind": "single",
    "id": "j1288",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "True. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "print(bool(1))",
    "id": "j1291",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "True. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "print(bool('0'))",
    "id": "j1296",
    "fixed": true
  },
  {
    "q": "Что вернёт [] == False?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Результат выражения — False. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "j1299",
    "fixed": true
  },
  {
    "q": "Можно ли сравнить [1, 2] < [1, 3]?",
    "options": [
      "да, True",
      "да, False",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Да, True. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "id": "j1315",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print(bool({0}))",
    "id": "j1319",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print('Z' < 'a')",
    "id": "j1327",
    "fixed": true
  },
  {
    "q": "Что вернёт bool([0])?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "True. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "id": "j1328",
    "fixed": true
  },
  {
    "q": "Что вернёт 'a' < 'b'?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Результат выражения — True. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "j1343",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print('aa' < 'ab')",
    "id": "j1348",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "print(bool({}))",
    "id": "j1352",
    "fixed": true
  },
  {
    "q": "Что вернёт 'b' < 'a'?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Результат выражения — False. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "j1359",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "утверждение про другой уровень стека",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "print([2] < [1, 9])",
    "id": "j1360",
    "fixed": true
  },
  {
    "q": "Что вернёт 3 < 4 > 2?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Результат выражения — True. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "j1367",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print(1 < 2 < 3)",
    "id": "j1376",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "print(bool([]))",
    "id": "j1385",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "print(bool(0.0))",
    "id": "j1392",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "print(bool(set()))",
    "id": "j1401",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "print([] == False)",
    "id": "j1402",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "print(bool(''))",
    "id": "j1415",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print(bool(-1))",
    "id": "j1429",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "утверждение про другой уровень стека",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print([1, 2] < [1, 3])",
    "id": "j1433",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "print('b' < 'a')",
    "id": "j1444",
    "fixed": true
  },
  {
    "q": "Что верно про bool(None)?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "По правилам truthiness ответ False. Пустые коллекции и 0/''/None ложны; остальное обычно истинно.",
    "kind": "single",
    "id": "j1447",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Bool от непустой строки всегда True — даже от 'False' или '0'. Смотрят на пустоту строки, не на текст.",
    "kind": "single",
    "code": "print(bool('False'))",
    "id": "j1464",
    "fixed": true
  }
);
