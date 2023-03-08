// Измените код решения предыдущего задания так, чтобы элемент заметки использовал свойство position:absolute вместо position:fixed.

// Это предотвратит расхождение элементов при прокрутке страницы.

// Используйте решение предыдущего задания для начала. Чтобы проверить решение в условиях с прокруткой, добавьте стиль элементу <body style="height: 2000px">.




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

  // Учитывая скролл
  top += window.pageYOffset;
  left += window.pageXOffset;

  elem.style.position = 'absolute';
  elem.style.top = top + 'px';
  elem.style.left = left + 'px';

  document.body.append(elem);
}