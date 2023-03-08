// В переменной button находится кнопка. Изначально на ней нет обработчиков.

// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?

button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);




// 1, 2