// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.



button.addEventListener('click', () => {
  document.querySelector('#text').style.display = 'none';
})