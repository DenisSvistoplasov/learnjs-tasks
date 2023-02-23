'use strict';

const userLogin = prompt('Введите логин', '');
let userPassword;

if (userLogin == 'Админ') {
  userPassword = prompt('Введите пароль', '');
  if (userPassword == 'Я главный') {
    alert('Здравствуйте');
  }
  else if (userPassword == '' || userPassword == null) {
    alert('Отменено');
  }
  else {
    alert('Неверный пароль');
  }
}
else if (userLogin == '' || userLogin == null) {
  alert('Отменено');
}
else {
  alert('Я вас не знаю');
}