/*Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася"; */


function ucFirst(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}