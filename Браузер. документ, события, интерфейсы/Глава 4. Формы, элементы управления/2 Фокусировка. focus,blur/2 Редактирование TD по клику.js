// Сделайте ячейки таблицы редактируемыми по клику.

// По клику – ячейка должна стать «редактируемой» (textarea появляется внутри), мы можем изменять HTML. Изменение размера ячейки должно быть отключено.
// Кнопки OK и ОТМЕНА появляются ниже ячейки и, соответственно, завершают/отменяют редактирование.
// Только одну ячейку можно редактировать за один раз. Пока <td> в «режиме редактирования», клики по другим ячейкам игнорируются.
// Таблица может иметь множество ячеек. Используйте делегирование событий.




const table = document.querySelector('table');

let isEditing = false;

table.addEventListener('click', e => {
  const cell = e.target.closest('td');

  if (!table.contains(cell) || isEditing) return;

  cell.style.position = 'relative';

  const textarea = document.createElement('textarea');
  textarea.value = cell.innerHTML;
  textarea.style.cssText = `
    position: absolute;
    inset: 0;
    resize:none;
    width:' + ${cell.offsetWidth} + 'px;
    height:' + ${cell.offsetHeight} + 'px;
    `;
  

  const controls = document.createElement('div');
  const ok = document.createElement('button');
  const cancel = document.createElement('button');
  controls.append(ok, cancel);

  ok.textContent = 'OK';
  cancel.textContent = 'ОТМЕНА';

  controls.style.cssText = `
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%);`;

  ok.addEventListener('click', () => {
    cell.innerHTML = textarea.value;
    endEditing();
  });
  cancel.addEventListener('click', endEditing);


  cell.append(textarea);
  cell.append(controls);

  textarea.focus();

  isEditing = true;

  function endEditing() {
    textarea.remove();
    controls.remove();
    isEditing = false;
  }
});

