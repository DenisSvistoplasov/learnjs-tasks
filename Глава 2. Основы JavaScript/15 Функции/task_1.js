function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}


function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}


//Будет ли эта функция работать как-то иначе, если убрать else? - Нет
//Есть ли хоть одно отличие в поведении этого варианта?         - Нет
