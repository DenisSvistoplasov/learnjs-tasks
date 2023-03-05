// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.






// Используя setInterval.
function printNumbers(from, to) {
  let currentNumber = from;

  let intervalId = setInterval(() => {
    alert(currentNumber);
    currentNumber++;
    if (currentNumber > to) {
      clearInterval(intervalId);
    }
  }, 1000);
}

// Используя рекурсивный setTimeout.
function printNumbers(from, to) {
  setTimeout(function tick(n) {
    alert(n);
    if (n + 1 <= to) {
      setTimeout(tick, 1000, n + 1);
    }
  }, 1000, from);
}



