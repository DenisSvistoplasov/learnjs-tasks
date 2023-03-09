// Имеется <select>:

// <select id="genres">
//   <option value="rock">Рок</option>
//   <option value="blues" selected>Блюз</option>
// </select>
// Используя JavaScript:

// Выведите значение и текст выбранного пункта.
// Добавьте пункт: <option value="classic">Классика</option>.
// Сделайте его выбранным.


const options = genres.options;
const selectedOption = options[genres.selectedIndex];

alert(selectedOption.value + ' ' + selectedOption.text);

const classicOption = new Option('Классика', 'classic')
genres.append(classicOption);

classicOption.selected = true;

