// Создайте дерево, которое по клику на заголовок скрывает-показывает потомков

// Требования:

// Использовать только один обработчик событий (применить делегирование)
// Клик вне текста заголовка (на пустом месте) ничего делать не должен.






const tree = document.querySelector('#tree');
const items = tree.querySelectorAll('li');

for (const li of items) {
  const firstChild = li.firstChild;

  if (firstChild.nodeName !== '#text') continue;

  const text = firstChild.data;
  firstChild.remove();

  const span = document.createElement('span');
  span.textContent = text;
  span.dataset.toggleChildren = true;
  span.style.cursor = 'pointer';
  li.prepend(span);
}

tree.addEventListener('click', e => {
  if (e.target.dataset.toggleChildren) {
    const childrenExceptSpan = [...e.target.closest('li').children].slice(1);
    toggleElements(childrenExceptSpan);
  }
});


function toggleElements(elements) {
  for (const element of elements) {
    element.hidden = !element.hidden;
  }
}