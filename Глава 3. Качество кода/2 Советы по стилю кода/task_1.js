function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else
{
  alert(pow(x,n))
}

// Какие недостатки вы видите в стиле написания кода этого примера?


// 1) Отсутствуют пробелы параметрами функций
// 2) Открывающаяся фигурная скобка тела функии и блоков if/else на новой строке
// 3) Нет пробелов вокруг не унарных операторов (=, <, *=, <=, ...)
// 4) Не везде поставлены ";" в конце выражения

// Пример более удачного стиля:
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');
if (n <= 0) {
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else {
  alert(pow(x, n));
}