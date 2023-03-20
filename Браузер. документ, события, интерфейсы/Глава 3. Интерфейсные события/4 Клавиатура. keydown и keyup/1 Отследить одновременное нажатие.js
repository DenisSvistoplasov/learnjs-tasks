// Создайте функцию runOnKeys(func, code1, code2, ... code_n), которая запускает func при одновременном нажатии клавиш с кодами code1, code2, …, code_n.

// Например, код ниже выведет alert при одновременном нажатии клавиш "Q" и "W" (в любом регистре, в любой раскладке)

runOnKeys(
  () => alert("Привет!"),
  "KeyQ",
  "KeyW"
);


function runOnKeys(func, ...codes) {
  const pushed = new Set();

  document.addEventListener('keydown', event => {
    pushed.add(event.code);
    if (isSubsetOf(codes, [...pushed])) func();
  });

  document.addEventListener('keyup', event => {
    pushed.delete(event.code);
  });
}

function isSubsetOf(arr1, arr2) {
  return arr1.every(el => arr2.includes(el));
}