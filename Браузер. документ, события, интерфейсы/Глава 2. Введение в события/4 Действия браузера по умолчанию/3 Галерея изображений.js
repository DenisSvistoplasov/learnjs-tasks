// Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.
// P.S. Используйте делегирование.




thumbs.addEventListener('click', function(event) {
  let link = event.target.closest('a');

  if (!thumbs.contains(link)) return;

  largeImg.src = link.href;

  event.preventDefault();
});
