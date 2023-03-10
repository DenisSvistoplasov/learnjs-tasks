// В чём отличие между getComputedStyle(elem).width и elem.clientWidth?

// Укажите хотя бы 3 отличия, лучше – больше.




//1) getComputedStyle(elem).width имеет значение в строковом представлении.
//2) значение getComputedStyle(elem).width представлено в виде значений CSS-свойств - с px, %. Может быть равно "auto".
//3) elem.clientWidth дает ширину контентной области + паддинги, а getComputedStyle(elem).width дает значение в зависимости от значения свойства box-sizing.
//4) браузеры могут по-разному вычитать ширину скролла от ширины элемента. Но clientWidth всегда будет давать ширину контентной области + паддинги.