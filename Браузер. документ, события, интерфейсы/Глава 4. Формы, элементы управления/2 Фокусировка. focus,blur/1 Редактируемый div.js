// Создайте <div>, который превращается в <textarea>, если на него кликнуть.

// <textarea> позволяет редактировать HTML в элементе <div>.

// Когда пользователь нажимает Enter или переводит фокус, <textarea> превращается обратно в <div>, и его содержимое становится HTML-кодом в <div>.



const div = document.querySelector('#view');
const textarea = document.createElement('textarea');
textarea.classList.add('edit');

div.addEventListener('click', replaceWithTextarea);

textarea.addEventListener('blur', replaceWithDiv);
textarea.addEventListener('keydown', e => {
  if (e.code === 'Enter') replaceWithDiv(e);
});

function replaceWithTextarea(e) {
  textarea.value = div.innerHTML;
  div.replaceWith(textarea);
  textarea.focus();
}

function replaceWithDiv(e) {
  div.innerHTML = textarea.value;
  textarea.replaceWith(div);
}