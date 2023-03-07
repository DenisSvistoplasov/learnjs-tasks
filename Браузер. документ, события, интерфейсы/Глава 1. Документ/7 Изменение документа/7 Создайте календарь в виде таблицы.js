// Напишите функцию createCalendar(elem, year, month).

// Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.

// Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>. У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>, первым днём недели должен быть понедельник.

// Например, createCalendar(cal, 2012, 9) сгенерирует в cal следующий календарь:

// пн	вт	ср	чт	пт	сб	вс
//                     1 	 2
//  3	 4	 5	 6	 7	 8	 9
// 10	11	12	13	14	15	16
// 17	18	19	20	21	22	23
// 24	25	26	27	28	29	30




function createCalendar(elem, year, month) {
  const firstDayNumberInWeek = new Date(year, month - 1, 1).getDay() || 7;
  const emptyCountStart = firstDayNumberInWeek - 1;
  const daysAmount = new Date(year, month, 0).getDate();
  const emptyCountEnd = (7 - (emptyCountStart + daysAmount) % 7)%7;

  const days = new Array(daysAmount).fill(0).map((_, i) => i + 1);
  days.unshift(...new Array(emptyCountStart));
  days.push(...new Array(emptyCountEnd));

  const table = document.createElement('table');
  elem.append(table);

  const tableHeadRow = document.createElement('tr');
  table.append(tableHeadRow);

  ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].forEach(day => {
    const th = document.createElement('th');
    th.textContent = day;
    tableHeadRow.append(th);
  });

  let currentRow;
  for (let i = 0; i < days.length; i++) {
    if (i % 7 === 0) {
      currentRow = document.createElement('tr');
      table.append(currentRow);
    }

    const td = document.createElement('td');
    td.textContent = days[i] || '';
    currentRow.append(td);
  }
}