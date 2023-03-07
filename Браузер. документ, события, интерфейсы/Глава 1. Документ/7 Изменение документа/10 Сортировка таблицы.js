// Вот таблица:

// <table>
// <thead>
//   <tr>
//     <th>Name</th><th>Surname</th><th>Age</th>
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <td>John</td><td>Smith</td><td>10</td>
//   </tr>
//   <tr>
//     <td>Pete</td><td>Brown</td><td>15</td>
//   </tr>
//   <tr>
//     <td>Ann</td><td>Lee</td><td>5</td>
//   </tr>
//   <tr>
//     <td>...</td><td>...</td><td>...</td>
//   </tr>
// </tbody>
// </table>
// В ней может быть больше строк.

// Напишите код для сортировки по столбцу "name".

const tbody = document.querySelector('tbody');
const rows = Array.from(tbody.children).slice(1);

rows.sort((a, b) => a.firstElementChild.textContent > b.firstElementChild.textContent ? 1 : -1);

rows.forEach(row => tbody.append(row));
