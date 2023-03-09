// Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том, действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.


// Детали:

// Содержимое #contents может быть загружено динамически и присвоено при помощи innerHTML. Так что найти все ссылки и поставить на них обработчики нельзя. Используйте делегирование.
// Содержимое может иметь вложенные теги, в том числе внутри ссылок, например, <a href=".."><i>...</i></a>.




const contents = document.querySelector('#contents');
contents.addEventListener('click', e => {
  const link = e.target.closest('#contents a');
  if (!link) return;

  const question = 'Вы действительно хотите перейти по ссылке ' + link.getAttribute('href') + '?';
  if (!confirm(question)) e.preventDefault();
});