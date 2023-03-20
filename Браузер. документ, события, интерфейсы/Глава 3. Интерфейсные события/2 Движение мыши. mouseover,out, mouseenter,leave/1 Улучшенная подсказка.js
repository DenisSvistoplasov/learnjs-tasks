// Напишите JavaScript код, который показывает подсказку над элементом с атрибутом data-tooltip. Значение атрибута должно становиться текстом подсказки.

// Это похоже на задачу Поведение "подсказка", но здесь элементы с подсказками могут быть вложены друг в друга. Показываться должна подсказка на самом глубоко вложенном элементе.

// Только одна подсказка может быть показана в любой момент времени.




const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
tooltip.style.position = 'fixed';
tooltip.hidden = true;
document.body.append(tooltip);

document.addEventListener('mouseover', e => {
  const target = e.target.closest('[data-tooltip]');
  if (!target) return;

  const targetRect = target.getBoundingClientRect();

  tooltip.innerHTML = target.dataset.tooltip;
  tooltip.hidden = false;

  let top = targetRect.top - tooltip.clientHeight - 5;
  let left = targetRect.left + target.clientWidth / 2 - tooltip.offsetWidth / 2;

  if (top < 0) {
    top = targetRect.bottom + 5;
  }
  if (left < 0) {
    left = 0;
  }
  if (left + tooltip.offsetWidth > document.documentElement.clientWidth) {
    left = document.documentElement.clientWidth - tooltip.offsetWidth;
  }

  tooltip.style.top = top+'px';
  tooltip.style.left = left+'px';
});

document.addEventListener('mouseout', e => {
  if (tooltip) tooltip.hidden = true;
});
