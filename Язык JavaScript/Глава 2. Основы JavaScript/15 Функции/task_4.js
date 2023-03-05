function pow(x, n) {
  if (n < 1 || n % 1) {
    alert('n должно быть натуральным числом');
    return;
  }
  return x**n;
}