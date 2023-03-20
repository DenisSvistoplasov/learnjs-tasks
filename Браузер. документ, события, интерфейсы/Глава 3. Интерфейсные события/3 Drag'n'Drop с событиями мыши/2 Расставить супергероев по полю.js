// В этой задаче вы можете проверить своё понимание сразу нескольких аспектов Drag’n’Drop и DOM.

// Сделайте так, чтобы элементы с классом draggable можно было переносить мышкой. Как мяч в этой главе.

// Требования к реализации:

// Используйте делегирование событий для отслеживания начала перетаскивания: только один обработчик событий mousedown на документе.
// Если элементы подносят к верхней/нижней границе окна – оно должно прокручиваться вверх/вниз, чтобы позволить дальнейшее перетаскивание.
// Горизонтальная прокрутка отсутствует (чуть-чуть упрощает задачу, её просто добавить).
// Элемент при переносе, даже при резких движениях мышкой, не должен даже частично попасть вне окна.




const SCROLL_STEP = 4;

const field = document.querySelector('#field');

document.addEventListener('mousedown', event => {
  const target = event.target.closest('.draggable');

  if (!target) return;

  event.preventDefault();

  const rect = target.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;

  target.style.position = 'fixed';

  setPosition(target, rect.left, rect.top, false);

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp, {once: true});

  function onMouseMove(event) {
    const left = event.clientX - offsetX;
    const top = event.clientY - offsetY;

    setPosition(target, left, top);

    const breakthrough = checkBreakthrough(target, left, top);
    window.scrollBy(breakthrough.horizontal * SCROLL_STEP, breakthrough.vertical * SCROLL_STEP);
  }

  function onMouseUp(event) {
    document.removeEventListener('mousemove', onMouseMove);

    const rect = target.getBoundingClientRect();

    target.style.position = 'absolute';

    setPosition(target, rect.left + document.documentElement.scrollLeft, rect.top + document.documentElement.scrollTop, false);
  }
});


function restrictValue(value, max) {
  return value < 0 ? 0 : value > max ? max : value;
}

function setPosition(target, left, top, restrict = true) {
  if (restrict) {
    const {maxLeft, maxTop} = getMaxCoords(target);

    target.style.left = restrictValue(left, maxLeft) + 'px';
    target.style.top = restrictValue(top, maxTop) + 'px';
  }
  else {
    target.style.left = left + 'px';
    target.style.top = top + 'px';
  }
}

function getMaxCoords(target) {
  return {
    maxLeft: document.documentElement.clientWidth - target.offsetWidth,
    maxTop: document.documentElement.clientHeight - target.offsetHeight
  };
}

function checkBreakthrough(target, left, top) {
  const {maxLeft, maxTop} = getMaxCoords(target);

  return {
    horizontal: left > maxLeft ? 1 : left < 0 ? -1 : 0,
    vertical: top > maxTop ? 1 : top < 0 ? -1 : 0,
  };
}