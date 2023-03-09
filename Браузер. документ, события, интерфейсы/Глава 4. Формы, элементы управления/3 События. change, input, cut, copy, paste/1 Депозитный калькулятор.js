// Создайте интерфейс, позволяющий ввести сумму банковского вклада и процент, а затем рассчитать, какая это будет сумма через заданный промежуток времени.


// Любое изменение введённых данных должно быть обработано немедленно.

// Формула:

// initial: начальная сумма денег
// interest: проценты, например, 0.05 означает 5% в год
// years: сколько лет ждать
// let result = Math.round(initial * (1 + interest) ** years);





const initial = document.getElementsByName('money')[0];
const months = document.getElementsByName('months')[0];
const interest = document.getElementsByName('interest')[0];
const result = document.querySelector('#height-after');

initial.oninput = months.oninput = interest.oninput = function() {
  result.style.height = Math.round(100 * (1 + interest.value/100) ** (months.value/12))+'px';
}
