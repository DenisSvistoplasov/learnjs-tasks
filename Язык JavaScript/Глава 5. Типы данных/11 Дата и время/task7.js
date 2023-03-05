// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.




function getSecondsToTomorrow() {
  const date = new Date();
  const dateClone = new Date(date);

  dateClone.setDate(dateClone.getDate() + 1);
  dateClone.setHours(0, 0, 0, 0);

  return Math.floor((dateClone - date) / 1000);
}