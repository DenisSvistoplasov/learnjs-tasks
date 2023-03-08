// Пусть мяч перемещается при клике на поле, туда, куда был клик

// Требования:

// Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
// CSS-анимация желательна, но не обязательна;
// Мяч ни в коем случае не должен пересекать границы поля;
// При прокрутке страницы ничего не должно ломаться;
// Заметки:

// Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
// Используйте свойства event.clientX/event.clientY для определения координат мыши при клике.



field.style.position = 'relative';
ball.style.position = 'absolute';
ball.style.transition = '1s ease-in-out';

field.addEventListener('click', (event) => {
  const fieldRect = field.getBoundingClientRect();

  let top = event.clientY - fieldRect.top - field.clientTop - ball.offsetHeight / 2;
  let left = event.clientX - fieldRect.left - field.clientLeft - ball.offsetWidth / 2;

  const maxTop = field.clientHeight - ball.offsetHeight;
  const maxLeft = field.clientWidth - ball.offsetWidth;

  top = top < 0 ? 0 : top > maxTop ? maxTop : top;
  left = left < 0 ? 0 : left > maxLeft ? maxLeft : left;

  ball.style.top = top + 'px';
  ball.style.left = left + 'px';
});