// Создайте список, в котором элементы могут быть выделены, как в файловых менеджерах.

// При клике на элемент списка выделяется только этот элемент (добавляется класс .selected), отменяется выделение остальных элементов.
// Если клик сделан вместе с Ctrl (Cmd для Mac), то выделение переключается на элементе, но остальные элементы при этом не изменяются.

// P.S. В этом задании все элементы списка содержат только текст. Без вложенных тегов.

// P.P.S. Предотвратите стандартное для браузера выделение текста при кликах.



const list = document.querySelector('ul');

list.addEventListener('click', event => {
  if (event.target.tagName !== 'LI') return;

  if (event.ctrlKey || event.metaKey) {
    event.target.classList.toggle('selected');
  }
  else {
    [...list.querySelectorAll('li')].forEach(li => li.classList.remove('selected'));
    event.target.classList.add('selected');
  }
});

list.addEventListener('mousedown', event => {
  event.preventDefault();
});