// Для страницы:

// <html>
// <body>
//   <div>Пользователи:</div>
//   <ul>
//     <li>Джон</li>
//     <li>Пит</li>
//   </ul>
// </body>
// </html>
// Напишите код, как получить…

// элемент <div>?
// <ul>?
// второй <li> (с именем Пит)?





const div = document.body.firstElementChild;
const ul = document.body.lastElementChild;
const secondLi = ul.lastElementChild;
