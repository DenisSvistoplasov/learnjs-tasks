//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.


function multiplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}