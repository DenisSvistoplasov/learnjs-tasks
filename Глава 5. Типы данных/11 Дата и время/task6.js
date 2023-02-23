// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.




function getSecondsToday() {
  const date = new Date();
  const dateClone = new Date(date);

  dateClone.setHours(0, 0, 0, 0);

  return Math.floor((date - dateClone)/1000);
}

