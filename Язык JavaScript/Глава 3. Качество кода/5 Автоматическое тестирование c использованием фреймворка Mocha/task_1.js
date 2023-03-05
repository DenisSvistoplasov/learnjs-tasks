// Что не так в нижеприведённом тесте функции pow?

it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});



/*
При непрохождении теста не будет понятно на каких иммено вводных тест был провален.
Лучше разбить на несколько блоков с описанием входных и выходных данных.
 */
it("5 ^ 1. Ожидается: 5", function() {
  assert.equal(pow(5, 1), 5);
});

it("5 ^ 2. Ожидается: 25", function() {
  assert.equal(pow(5, 2), 25);
});

it("5 ^ 3. Ожидается: 125", function() {
  assert.equal(pow(5, 3), 125);
});