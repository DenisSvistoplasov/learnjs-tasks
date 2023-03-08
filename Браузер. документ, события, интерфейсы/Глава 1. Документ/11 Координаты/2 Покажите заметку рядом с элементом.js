// Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem в зависимости от значения свойства position рядом с элементом anchor.

// Аргумент position – строка с одним из 3 значений:

// "top" – расположить elem прямо над anchor
// "right" – расположить elem непосредственно справа от anchor
// "bottom" – расположить elem прямо под anchor



// Совмещаем верхние левые углы, затем смещаем в зависимости от position
function positionAt(anchor, position, elem) {
  let {top, left} = anchor.getBoundingClientRect();

  const elemHeight = elem.offsetHeight;
  const anchorWidth = anchor.offsetWidth;
  const anchorHeight = anchor.offsetHeight;

  switch (position) {
    case "top":
      top -= elemHeight;
      break;
    case "right":
      left += anchorWidth;
      break;
    case "bottom":
      top += anchorHeight;
  }

  elem.style.position = 'fixed';
  elem.style.top = top + 'px';
  elem.style.left = left + 'px';
}