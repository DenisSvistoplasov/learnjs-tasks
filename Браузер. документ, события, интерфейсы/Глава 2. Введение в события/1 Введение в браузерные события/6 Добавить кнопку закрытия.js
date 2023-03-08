// Есть список сообщений.

// При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.

const messages = document.getElementsByClassName('pane');

for (const message of messages) {
  message.style.position = 'relative';

  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'X';
  closeBtn.style.cssText = 'position:absolute; right:5px; top:5px';

  closeBtn.addEventListener('click', () => {
    message.style.display = 'none';
  });

  message.append(closeBtn);
}