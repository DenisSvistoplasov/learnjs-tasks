/*Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно. */


function camelize(str) {
  let words = str.split('-');

  const firstWord = words.slice(0, 1);

  const restWords = words.slice(1).map(capitalize);
 
  words = firstWord.concat(restWords);
  
  return words.join('');
}

function capitalize(str='') {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}