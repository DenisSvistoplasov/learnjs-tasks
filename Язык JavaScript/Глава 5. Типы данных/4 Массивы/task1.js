/*Что выведет следующий код?*/

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert(fruits.length); //  4





// Массивы являются объектами.
// После присвоения "shoppingCart = fruits" shoppingCart и fruits ссылаются на один массив.
// Добавление "shoppingCart.push("Банан")" увеличивает массив на 1 элемент.
// "fruits.length" показывает длину этого увеличившегося массива.


