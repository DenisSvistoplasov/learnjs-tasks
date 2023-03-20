// Что выведет код ниже?

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);



// Вызов resolve(1) разрешает промис с результатом 1. Поэтому коллбэк alert будет вызван сразу с аргументом 1.
// Последующий вызов resolve(2) будет проигнорирован.