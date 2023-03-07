// Создайте цветные часы как в примере ниже:

// Для стилизации используйте HTML/CSS, JavaScript должен только обновлять время в элементах.

const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const start = document.getElementById('start');
const stop = document.getElementById('stop');

start.addEventListener('click', onStart);
stop.addEventListener('click', onStop);

let interval;

function onStart() {
  refreshClock();
  interval = setInterval(refreshClock, 123);
}

function onStop() {
  clearInterval(interval);
}

function refreshClock() {
  const nowDate = new Date();
  [hours.textContent, minutes.textContent, seconds.textContent] = nowDate.toLocaleTimeString().split(':');
}