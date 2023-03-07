// Напишите интерфейс для создания списка.

// Для каждого пункта:

// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
// Все элементы должны создаваться динамически.

// Если пользователь вводит HTML-теги, они должны обрабатываться как текст.





function createList() {
  const ul = document.createElement('ul');

  while (true) {
    const answer = prompt('Введите текст', '');

    if (answer === '' || answer === null) break;

    const li = document.createElement('li');
    li.textContent = answer;
    ul.append(li);
  }

  return ul;
}