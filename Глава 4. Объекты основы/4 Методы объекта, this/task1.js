/*Здесь функция makeUser возвращает объект.
Каким будет результат при обращении к свойству объекта ref? Почему?*/

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert(user.ref.name); // Каким будет результат?



/*
this определяется в момент вызова. В режиме 'use strict' при вызове функции makeUser, которая не вызывается как метод объекта, значение this будет равно undefined. 
Следовательно вызов makeUser() вернет объект: 
user = {
  name: "John",
  ref: undefined
}
Обращение user.ref вернет undefined, 
а обращение user.ref.name равносильно обращению undefined.name, что вызовет ошибку.
*/