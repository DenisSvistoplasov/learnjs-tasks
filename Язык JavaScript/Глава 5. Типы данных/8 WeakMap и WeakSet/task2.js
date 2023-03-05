// Есть массив сообщений такой же, как и в предыдущем задании.

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];
// Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?

// В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет». Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.

// P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые мы разберём позднее.





////
const cashe = new WeakMap();
function readMessages(message) {
  if (cashe.has(message)) {
    return cashe.get(message);
  }

  const date = new Date();
  cashe.set(message, date);

  return date;
}

// Первое прочтение сообщения
readMessages(messages[1]); // только-что
readMessages(messages[0]); // только-что


// Второе прочтение сообщения
readMessages(messages[1]); // тогда-то

// Удаление сообщения из массива приведет к удалению из WeakMap
messages.pop();

