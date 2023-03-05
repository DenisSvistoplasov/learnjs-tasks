// Здесь объект счётчика создан с помощью функции-конструктора.

// Будет ли он работать? Что покажет?

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // 1
alert( counter.up() ); // 2
alert(counter.down()); // 1


// Будет работать - методы создаются в одном лексическом окружении и имеют доступ к одному count. Покажет 1, 2, 1