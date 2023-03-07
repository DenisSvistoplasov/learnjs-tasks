// Объект rabbit наследует от объекта animal.

// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();




// Объект rabbit, т.к. он стоит перед точкой при вызове метода, а значит на него указывает this внутри метода.