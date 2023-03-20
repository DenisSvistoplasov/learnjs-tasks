// Создайте бесконечную страницу. Когда посетитель прокручивает её до конца, она автоматически добавляет текущие время и дату в текст (чтобы посетитель мог прокрутить ещё).




fillWithDate();

window.addEventListener('scroll', fillWithDate);

function fillWithDate() {
  const bottom = document.documentElement.getBoundingClientRect().bottom;
  const height = document.documentElement.clientHeight;

  if (bottom - height > 100) return;

  document.body.append(createDateParagraph());
  
  setTimeout(fillWithDate);
}

function createDateParagraph() {
  const p = document.createElement('p');
  p.textContent = new Date();
  return p;
}