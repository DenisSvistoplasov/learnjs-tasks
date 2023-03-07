// Давайте создадим новый объект rabbit:

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");
// Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi(); // "Rabbit"
Rabbit.prototype.sayHi(); // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi(); // undefined


// Первый вызов идет "от имени" объекта rabbit, у которого есть свойство name, равное "Rabbit".
// Остальные вызовы идут "от имени" прототипа, у которого нет свойства name.