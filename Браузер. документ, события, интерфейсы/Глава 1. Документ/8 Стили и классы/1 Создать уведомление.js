// Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.

// Пример объекта options:

// // показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
showNotification({
  top: 10, // 10px от верхней границы окна (по умолчанию 0px)
  right: 10, // 10px от правого края окна (по умолчанию 0px)
  html: "Hello!", // HTML-уведомление
  className: "welcome" // дополнительный класс для div (необязательно)
});

// Используйте CSS-позиционирование для отображения элемента в заданных координатах. Исходный документ имеет необходимые стили.




function showNotification({top = 0, right = 0, html = '', className = ''}) {
  const div = document.createElement('div');

  div.className = ('notification ' + className).trim();

  div.style.position = 'fixed';
  div.style.top = top + 'px';
  div.style.right = right + 'px';

  div.innerHTML = html;

  document.body.append(div);

  setTimeout(() => div.remove(), 1500);
}