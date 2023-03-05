// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.




// Цикл
function printList(list) {
  const values = [];

  let node = list;

  while (node) {
    values.push(node.value);
    node = node.next;
  }

  for (let i = values.length - 1; i >= 0; i--){
    alert(values[i]);
  }
}

// Рекурсия
function printList(list) {
  if (list.next) {
    printList(list.next);
  }
  
  alert(list.value);
}