// Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.

// Каждый элемент <th> имеет атрибут data-type:

// <table id="grid">
//   <thead>
//     <tr>
//       <th data-type="number">Возраст</th>
//       <th data-type="string">Имя</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>5</td>
//       <td>Вася</td>
//     </tr>
//     <tr>
//       <td>10</td>
//       <td>Петя</td>
//     </tr>
//     ...
//   </tbody>
// </table>
// В примере выше первый столбец содержит числа, а второй – строки. Функция сортировки должна это учитывать, ведь числа сортируются иначе, чем строки.

// Сортировка должна поддерживать только типы "string" и "number".

// P.S. Таблица может быть большой, с любым числом строк и столбцов.





const table = document.querySelector('#grid');

table.addEventListener('click', e => {
  if (!e.target.tagName == 'TH' || !e.target.dataset.type) return;

  const rows = [...table.rows].slice(1);

  sortRows(rows, e.target.cellIndex, e.target.dataset.type);

  table.append(...rows);
});

function sortRows(rows = [], cellIndex, type) {
  if (type === 'string') {
    rows.sort((a, b) => a.cells[cellIndex].textContent > b.cells[cellIndex].textContent ? 1 : -1);
  }
  else {
    rows.sort((a, b) => +a.cells[cellIndex].textContent > +b.cells[cellIndex].textContent ? 1 : -1);
  }
}