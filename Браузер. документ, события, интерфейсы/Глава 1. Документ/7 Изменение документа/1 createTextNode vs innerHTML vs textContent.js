// У нас есть пустой DOM-элемент elem и строка text.

// Какие из этих 3-х команд работают одинаково?

// 1) elem.append(document.createTextNode(text))
// 2) elem.innerHTML = text
// 3) elem.textContent = text



// 1 и 3 - выведут текст как есть. 2 - выведет текст, пытаясь распознать в нем HTML теги