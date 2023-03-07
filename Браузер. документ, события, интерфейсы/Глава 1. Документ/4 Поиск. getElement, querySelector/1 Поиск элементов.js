// Вот документ с таблицей и формой.

// Как найти?…

// 1) Таблицу с id="age-table".
// 2) Все элементы label внутри этой таблицы (их три).
// 3) Первый td в этой таблице (со словом «Age»).
// 4) Форму form с именем name="search".
// 5) Первый input в этой форме.
// 6) Последний input в этой форме.
// Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.


const table = document.getElementById('age-table');

const labels = table.querySelectorAll('label');

const td = table.querySelector('td');

const form = document.getElementsByName('search')[0];

const input = form.querySelector('input');

const inputs = form.querySelectorAll('input');
const lastInput = inputs[inputs.length - 1];