// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings)); // кришна, харе, :-O





/* ваш код */
function unique(arr) {
  const uniqueStrings = [];

  for (const string of arr) {
    if (!uniqueStrings.includes(string)) uniqueStrings.push(string);
  }

  return uniqueStrings;
}