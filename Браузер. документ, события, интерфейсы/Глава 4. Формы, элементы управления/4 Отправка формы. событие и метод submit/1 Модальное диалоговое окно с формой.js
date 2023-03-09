// Создайте функцию showPrompt(html, callback), которая выводит форму с сообщением (html), полем ввода и кнопками OK/ОТМЕНА.

// Пользователь должен ввести что-то в текстовое поле и нажать Enter или кнопку «OK», после чего должна вызываться функция callback(value) со значением поля.
// Если пользователь нажимает Esc или кнопку «ОТМЕНА», тогда вызывается callback(null).
// В обоих случаях нужно завершить процесс ввода и закрыть диалоговое окно с формой.

// Требования:

// Форма должна быть в центре окна.
// Форма является модальным окном, это значит, что никакое взаимодействие с остальной частью страницы невозможно, пока пользователь не закроет его.
// При показе формы, фокус должен находиться сразу внутри <input>.
// Клавиши Tab/Shift+Tab должны переключать фокус между полями формы, не позволяя ему переходить к другим элементам страницы.
// Пример использования:

showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
  alert(value);
});









const modal = document.createElement('div');
const form = document.createElement('form');
const message = document.createElement('div');
const input = document.createElement('input');
const ok = document.createElement('button');
const cancel = document.createElement('button');


modal.append(form);
form.append(message, input, ok, cancel);

modal.style.cssText = `
  position: fixed;
  inset: 0;
  z-index: 10;
  display: none;
`;
form.style.cssText = `
  max-width: 600px;
  margin: auto;
  padding: 20px;
`;

ok.textContent = 'OK';
cancel.textContent = 'ОТМЕНА';

document.body.append(modal);


function showPrompt(html, callback) {
  message.innerHTML = html;
  modal.style.display = 'flex';
  input.value = '';

  form.addEventListener('submit', onSubmit);
  cancel.addEventListener('click', onCancel);

  const formElements = form.elements;
  const firstElement = formElements[0];
  const lastElement = formElements[formElements.length - 1];

  lastElement.onkeydown = function(e) {
    if (e.key == 'Tab' && !e.shiftKey) {
      firstElement.focus();
      return false;
    }
  };

  firstElement.onkeydown = function(e) {
    if (e.key == 'Tab' && e.shiftKey) {
      lastElement.focus();
      return false;
    }
  };

  function onSubmit(e) {
    e.preventDefault();
    callback(input.value);
    closeModal();
  }
  function onCancel(e) {
    e.preventDefault();
    callback(null);
    closeModal();
  }
  function closeModal() {
    modal.style.display = 'none';
    form.removeEventListener('submit', onSubmit);
    cancel.removeEventListener('click', onCancel);
    lastElement.onkeydown = firstElement.onkeydown = null;
  }
}


