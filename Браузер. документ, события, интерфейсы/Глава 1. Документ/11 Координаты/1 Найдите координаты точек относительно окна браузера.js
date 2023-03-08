// В айфрейме ниже располагается документ с зелёным «полем».

// Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.

// Ваш код должен при помощи DOM получить четыре пары координат:

// 1) верхний левый, внешний угол (это просто).
// 2) нижний правый, внешний угол (тоже просто).
// 3) верхний левый, внутренний угол (чуть сложнее).
// 4) нижний правый, внутренний угол (есть несколько способов, выберите один).

// P.S. Код должен работать, если у элемента другие размеры или есть рамка, без привязки к конкретным числам.


const rect = field.getBoundingClientRect();

const point1 = {
  x: rect.left,
  y: rect.top
};

const point2 = {
  x: rect.right,
  y: rect.bottom
};

const point3 = {
  x: rect.left+field.clientLeft,
  y: rect.top+field.clientTop
};

const point4 = {
  x: point3.x+field.clientWidth,
  y:  point3.y+field.clientHeight
};