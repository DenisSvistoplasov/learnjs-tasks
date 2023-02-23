// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};




////
const serializedUser = JSON.stringify(user);

const revivedUser = JSON.parse(serializedUser);