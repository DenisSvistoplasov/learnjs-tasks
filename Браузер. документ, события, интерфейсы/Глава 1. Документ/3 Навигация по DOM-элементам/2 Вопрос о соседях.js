// Если elem – произвольный узел DOM-элемента…

// Правда, что elem.lastChild.nextSibling всегда равен null?

// Если у elem нет детей, то elem.lastChild вернет null, а elem.lastChild.nextSibling вызовет ошибку.
// Если же значение elem.lastChild.nextSibling существует, то оно всегда null, т.к. elem.lastChild вернет последний дочерний узел, у которого нет правого соседнего узла.




// Правда, что elem.children[0].previousSibling всегда равен null ?

// Если у elem нет детей, то elem.children[0] вернет undefined, а elem.children[0].previousSibling вызовет ошибку.
// Если же значение elem.children[0].previousSibling существует, то оно может быть как null (когда последний дочерний элемент является узлом), так и узлом не-элементом (если после последнего дочернего узла-элемента есть еще узел не-элемент)