// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.




// Цикл
function printList(list) {
  let node = list;

  while (node) {
    alert(node.value);
    node = node.next;
  }
}

// Рекурсия
function printList(list) {
  alert(list.value);

  if (list.next) {
    printList(list.next);
  }
}


// Как лучше: с рекурсией или без?
// Вариант через цикл - более эффективный с точки зрения ресурсов, но вариант с рекурсией кому-то может быть понятнее.