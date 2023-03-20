// Создайте кнопку «наверх», чтобы помочь с прокруткой страницы.

// Она должна работать следующим образом:

// Пока страница не прокручена вниз хотя бы на высоту окна – кнопка невидима.
// Когда страница прокручена вниз больше, чем на высоту окна – появляется стрелка «наверх» в левом верхнем углу. Если страница прокручивается назад, стрелка исчезает.
// Когда нажимается стрелка, страница прокручивается вверх.



const topButton = document.createElement('button');
topButton.textContent = 'UP';
topButton.style.cssText = 'position:fixed; top:0; left:0;';
topButton.hidden = true;
document.body.append(topButton);

window.addEventListener('scroll', event => {
  topButton.hidden = window.scrollY < document.documentElement.clientHeight;
});

topButton.addEventListener('click', () => {
  document.body.scrollIntoView({behavior:'smooth', block:'start'});
});