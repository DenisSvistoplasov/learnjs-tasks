// В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.

// Когда будет выполнена запланированная функция?

// 1) После цикла.
// 2) Перед циклом.
// 3) В начале цикла.
// Что покажет alert?

let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}






// Запланированная функция будет выполнена после основного кода, т.е. после цикла.
// alert покажет значение переменной i из внешнего лексического окружения на момент вызова функции, т.е. 100000000.