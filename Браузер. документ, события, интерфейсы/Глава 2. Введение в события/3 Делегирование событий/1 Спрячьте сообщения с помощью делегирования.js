// Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.




document.querySelector('#container').addEventListener('click', (e) => {
  let button = e.target.closest('.remove-button');
  if (!button) return;

  let pane = button.closest('.pane');
  if (!pane) return;

  pane.hidden = true;
});