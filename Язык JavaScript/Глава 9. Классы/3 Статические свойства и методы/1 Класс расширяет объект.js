// Как мы уже знаем, все объекты наследуют от Object.prototype и имеют доступ к «общим» методам объекта, например hasOwnProperty.

// Пример:

class Rabbit {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

// метод hasOwnProperty от Object.prototype
alert( rabbit.hasOwnProperty('name') ); // true
// Но что если мы явно напишем "class Rabbit extends Object" – тогда результат будет отличаться от обычного "class Rabbit"?

// В чем разница?

// Ниже пример кода с таким наследованием (почему он не работает? исправьте его):

class Rabbit extends Object {
  constructor(name) {
    this.name = name;
  }
}

let rabbit2 = new Rabbit("Кроль");

alert( rabbit2.hasOwnProperty('name') ); // Ошибка






// Ошибка в том, что конструктор наследующего класса обязан вызвать родительский конструктор и сделать это перед обращением к this:
class Rabbit extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

// Разница  между "class Rabbit" и "class Rabbit extends Object":
// В обоих случаях для объектов класса Rabbit будет установлен прототип Object.prototype
// Но в случае "class Rabbit extends Object", будет еще установлен и прототип для самого класса-функции Rabbit
// Rabbit.__proto__ = Object. 
// Таким образом классу Rabbit будут доступны все статические методы и поля класса Object ( Rabbit.keys({a:1}); \\['a'] )