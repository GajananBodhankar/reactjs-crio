function fib(n) {
  return check(n - 1);
}
function check(n) {
  if (n == 1) {
    return 1;
  }
  if (n <= 0) {
    return 0;
  }
  return check(n - 1) + check(n - 2);
}

