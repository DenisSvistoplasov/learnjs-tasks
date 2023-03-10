// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

// Пример работы вашей функции:

alert( sumTo(100) ); // 5050





// С использованием цикла.
function sumTo(n) { 
  let sum = 0;
  for (let i = 1; i <= n; i++){
    sum += i;
  }
  return sum;
}

// Через рекурсию
function sumTo(n) { 
  return n == 0 ? 0 : n + sumTo(n - 1);
}

// С использованием формулы арифметической прогрессии.
function sumTo(n) { 
  return n * (n + 1) / 2;
}



// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
//  Самый быстрый - с формулой, т.к. выполняется всего 3 действия при любом n
//  Самый медленный - через рекурсию, т.к. хоть и имеет итераций столько же, сколько и алгоритм с циклом, но на каждой итерации происходит новый вызов функции, который создает новое лексическое окружение.


// P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?
// Зависит от движка JavaScript. В большинстве случаев движки нельзя.
