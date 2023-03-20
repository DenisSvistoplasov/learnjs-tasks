// Создайте слайдер:
// Захватите мышкой синий бегунок и двигайте его.

// Важные детали:

// Слайдер должен нормально работать при резком движении мыши влево или вправо за пределы полосы. При этом бегунок должен останавливаться чётко в нужном конце полосы.
// При нажатом бегунке мышь может выходить за пределы полосы слайдера, но слайдер пусть всё равно работает (это удобно для пользователя).


let slider = document.querySelector('.slider');
let thumb = document.querySelector('.thumb');

thumb.addEventListener('mousedown', event=>{
  event.preventDefault(); 

  let shiftX = event.clientX - thumb.getBoundingClientRect().left;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp, {once: true});

  function onMouseMove(event) {
    let left = event.clientX - shiftX - slider.getBoundingClientRect().left;

    left = left < 0 ? 0 : left > slider.offsetWidth - thumb.offsetWidth ? slider.offsetWidth - thumb.offsetWidth : left;

    thumb.style.left = left + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
  }

});

thumb.addEventListener('dragstart', event => event.preventDefault());