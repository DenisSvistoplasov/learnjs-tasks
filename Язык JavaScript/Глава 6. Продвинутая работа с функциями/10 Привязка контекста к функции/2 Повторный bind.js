// Можем ли мы изменить this дополнительным связыванием?

// Что выведет этот код?

function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();



// Нет, т.к. (первый) bind возвращает "экзотический объект", а не функцию
// Выведется "Вася"