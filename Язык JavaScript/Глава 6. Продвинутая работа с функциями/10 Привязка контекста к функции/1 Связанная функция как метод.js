// Что выведет функция?

function f() {
  alert( this ); // ?  
}

let user = {
  g: f.bind(null)
};

user.g(); // alert -> null