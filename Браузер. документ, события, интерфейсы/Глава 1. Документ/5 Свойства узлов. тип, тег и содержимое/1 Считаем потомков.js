// У нас есть дерево, структурированное как вложенные списки ul/li.

// Напишите код, который выведет каждый элемент списка <li>:

// Какой в нём текст (без поддерева) ?
// Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?



for (const li of document.querySelectorAll('li')) {
  const text = li.firstChild.data;
  const descendantLiCount = li.querySelectorAll('li').length;
  alert(text + ' ' + descendantLiCount);
}