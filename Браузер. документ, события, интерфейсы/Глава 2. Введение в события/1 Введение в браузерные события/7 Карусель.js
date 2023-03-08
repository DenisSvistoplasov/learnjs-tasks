// Создайте «Карусель» –- ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.





let imgWidth = 130;
let visibleCount = 3;

let list = document.querySelector('ul');
let items = document.querySelectorAll('li');

let currentPosition = 0;

document.querySelector('.prev').addEventListener('click', function() {
  currentPosition += imgWidth * visibleCount;
  currentPosition = Math.min(currentPosition, 0);
  list.style.marginLeft = currentPosition + 'px';
});

document.querySelector('.next').addEventListener('click', function() {
  currentPosition -= imgWidth * visibleCount;
  currentPosition = Math.max(currentPosition, -imgWidth * (items.length - visibleCount));
  list.style.marginLeft = currentPosition + 'px';
});