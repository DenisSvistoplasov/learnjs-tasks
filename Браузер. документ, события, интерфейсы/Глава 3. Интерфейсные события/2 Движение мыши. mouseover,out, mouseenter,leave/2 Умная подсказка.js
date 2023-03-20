// Напишите функцию, которая показывает подсказку над элементом только в случае, когда пользователь передвигает мышь на него, но не через него.

// Другими словами, если пользователь подвинул курсор на элементе и остановился – показывать подсказку. А если он просто быстро провёл курсором по элементу, то не надо ничего показывать. Кому понравится лишнее мелькание?

// Технически, мы можем измерять скорость прохода курсора мыши над элементом, и если она низкая, то можно посчитать, что пользователь остановил курсор над элементом, и показать ему подсказку. А если скорость высокая, то тогда не показывать.

// Создайте для этого универсальный объект new HoverIntent(options).

// Его настройки options:

// elem – отслеживаемый элемент.
// over – функция, вызываемая, при заходе на элемент, считаем что заход – это когда курсор медленно двигается или остановился над элементом.
// out – функция, вызываемая при уходе курсора с элемента (если был заход).
// Пример использования такого объекта для показа подсказки:

// пример подсказки
let tooltip = document.createElement('div');
tooltip.className = "tooltip";
tooltip.innerHTML = "Tooltip";

// объект будет отслеживать движение мыши и вызывать функции over/out
new HoverIntent({
  elem,
  over() {
    tooltip.style.left = elem.getBoundingClientRect().left + 'px';
    tooltip.style.top = elem.getBoundingClientRect().bottom + 5 + 'px';
    document.body.append(tooltip);
  },
  out() {
    tooltip.remove();
  }
});






class HoverIntent {
  constructor({elem, over, out}) {
    this.elem = elem;
    this.over = over;
    this.out = out;
    this.prevPosition = null;
    this.accumulatedDistance = 0;
    this.prevTime = Date.now();
    this.speed = Infinity;
    this.threshold = 0.1;
    this.isActive = false;
    this.isIn = false;
    this.destroy = this.reset;

    elem.addEventListener('mouseenter', event => {
      this.isIn = true;
      elem.addEventListener('mousemove', this.onMouseMove);
      this.interval = setInterval(this.trackTick, 100);
    });
    
    elem.addEventListener('mouseleave', event => {
      if (this.isActive) {
        this.out();
        this.isActive = false;
      }
      this.isIn = false;
      this.accumulatedDistance = 0;
      this.reset();
    });
  }

  onMouseMove = event => {
    if (this.prevPosition) {
      this.accumulatedDistance += Math.abs(this.prevPosition.x - event.clientX) + Math.abs(this.prevPosition.y - event.clientY);
    }
    this.prevPosition = {x: event.clientX, y: event.clientY};
  };

  trackTick = () => {
    const elapsedTime = Date.now() - this.prevTime;
    this.speed = this.accumulatedDistance / elapsedTime;

    this.prevTime = Date.now();
    this.accumulatedDistance = 0;

    if (this.isIn && !this.isActive && this.speed <= this.threshold) {
      this.isActive = true;
      this.over();
    }
  };

  reset() {
    if (this.interval) clearInterval(this.interval);
    this.elem.removeEventListener('mousemove', this.onMouseMove);
  }
}