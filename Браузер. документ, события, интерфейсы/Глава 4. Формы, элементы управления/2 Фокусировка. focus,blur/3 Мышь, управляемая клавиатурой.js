// Установите фокус на мышь. Затем используйте клавиши со стрелками, чтобы её двигать:

// P.S. Не добавляйте обработчики никуда, кроме элемента #mouse.

// P.P.S. Не изменяйте HTML/CSS, подход должен быть общим и работать с любым элементом.




const mouse = document.querySelector('#mouse');

mouse.tabIndex = 0;

mouse.addEventListener('click', e => {
  mouse.style.position = 'fixed';

  const rect = mouse.getBoundingClientRect();
  let left = rect.left;
  let top = rect.top;
  mouse.style.left = left + 'px';
  mouse.style.top = top + 'px';


  mouse.addEventListener('keydown', move);

  function move(e) {
    if (e.key === 'ArrowUp') {
      top -= 5;
      mouse.style.top = top + 'px';
    }
    if (e.key === 'ArrowDown') {
      top += 5;
      mouse.style.top = top + 'px';
    }
    if (e.key === 'ArrowLeft') {
      left -= 5;
      mouse.style.left = left + 'px';
    }
    if (e.key === 'ArrowRight') {
      left += 5;
      mouse.style.left = left + 'px';
    }
  }
});