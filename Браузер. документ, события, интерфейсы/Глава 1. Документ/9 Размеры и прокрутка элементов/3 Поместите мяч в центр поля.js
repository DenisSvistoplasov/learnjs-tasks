


const field = document.querySelector('#field');
const ball = document.querySelector('#ball');

field.style.position = 'relative';
ball.style.position = 'absolute';

const ballOffsetX = field.clientWidth / 2 - ball.offsetWidth / 2;
const ballOffsetY = field.clientHeight / 2 - ball.offsetHeight / 2;

ball.style.left = ballOffsetX+'px';
ball.style.top = ballOffsetY+'px';