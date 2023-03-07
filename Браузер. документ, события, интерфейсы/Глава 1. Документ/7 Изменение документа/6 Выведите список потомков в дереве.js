// Есть дерево, организованное в виде вложенных списков ul/li.

// Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.



function addDescendantsCount(li) {
  const childrenLi = li.querySelector('ul,ol')?.children || [];
  let count = childrenLi.length;

  for (const child of childrenLi) {
    count += addDescendantsCount(child);
  }

  if (count) li.firstChild.textContent += ' [' + count + ']';

  return count;
}

for (const li of document.querySelector('ul').children) {
  addDescendantsCount(li);
}