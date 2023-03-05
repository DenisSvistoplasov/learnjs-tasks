// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:

alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date - 86400 * 1000)));





////
function formatDate(date) {
  const secondes = Math.floor((Date.now() - date) / 1000);

  if (secondes < 1) return 'прямо сейчас';
  if (secondes < 60) return secondes + ' сек. назад';

  const minutes = Math.floor(secondes / 60);
  if (minutes < 60) return minutes + ' мин. назад';
  console.log('secondes: ', secondes);
  console.log('minutes: ', minutes);

  return dateToFormatString(date);
}


function dateToFormatString(date) {
  const d = [
    date.getDate(),
    date.getMonth() + 1,
    (date.getFullYear()+'').slice(2),
    date.getHours(),
    date.getMinutes()
  ].map(saveZero);

  return d[0] + '.' + d[1] + '.' + d[2] + ' ' + d[3] + ':' + d[4];
}

function saveZero(number) {
  return (number + '').length >= 2 ? '' + number : '0' + number;
}