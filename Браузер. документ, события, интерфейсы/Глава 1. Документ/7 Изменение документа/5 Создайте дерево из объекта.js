// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

// Например:
let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

// Синтаксис:
let container = document.getElementById('container');
createTree(container, data); // создаёт дерево в контейнере




function createTree(container, data) {
  if (Object.keys(data).length === 0) return;
  
  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');
    li.textContent = key;
    ul.append(li);
    createTree(li, data[key]);
  }

  container.append(ul);
}