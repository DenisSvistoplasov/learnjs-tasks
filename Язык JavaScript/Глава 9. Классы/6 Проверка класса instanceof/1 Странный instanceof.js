// Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert(a instanceof B); // true




// Оператор instanceof проверяет, равен ли [[prototype]] объекта свойству prototype конструктора (или выше по цепочке наследования).
//  Объект а создан конструктором А, поэтому a[[prototype]] ссылается на A.prototype.
// Но A.prototype равен В.prototype. Таким образом a[[prototype]] равен В.prototype.