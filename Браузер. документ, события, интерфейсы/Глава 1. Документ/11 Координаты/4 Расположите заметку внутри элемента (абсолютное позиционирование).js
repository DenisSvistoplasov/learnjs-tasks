// Усовершенствуйте решение предыдущего задания Покажите заметку около элемента (абсолютное позиционирование): научите функцию positionAt(anchor, position, elem) вставлять elem внутрь anchor.

// Новые значения для аргумента position:

// top-out, right-out, bottom-out – работают так же, как раньше, они вставляют elem сверху/справа/снизу anchor.
// top-in, right-in, bottom-in – вставляют elem внутрь anchor: приклеивают его к верхнему/правому/нижнему краю.
// Например:

// показывает заметку поверх цитаты
positionAt(blockquote, "top-out", note);

// показывает заметку внутри цитаты вблизи верхнего края элемента
positionAt(blockquote, "top-in", note);





function positionAt(anchor, position, elem) {
  let top = left = 0;

  const elemHeight = elem.offsetHeight;
  const elemWidth = elem.offsetWidth;
  const anchorWidth = anchor.offsetWidth;
  const anchorHeight = anchor.offsetHeight;

  switch (position) {
    case "top-out":
      top -= elemHeight;
      break;
    case "right-out":
      left += anchorWidth;
      break;
    case "bottom-out":
      top += anchorHeight;
      break;
    case "right-in":
      left += anchorWidth-elemWidth;
      break;
    case "bottom-in":
      top += anchorHeight-elemHeight;
  }

  elem.style.position = 'absolute';
  anchor.style.position = 'relative';
  elem.style.top = top + 'px';
  elem.style.left = left + 'px';

  anchor.append(elem);
}