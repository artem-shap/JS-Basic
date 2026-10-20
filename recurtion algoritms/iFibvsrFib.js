function iFib(n) {
  if (n <= 2) {
    return 1;
  }

  let a = 1;
  let b = 1;

  for (let i = 3; i <= n; i++) {
    let next = a + b;
    a = b;
    b = next;
  }

  return b;
}



function rFib(n) {
  if (n <= 2) {
    return 1;
  }

  return rFib(n - 1) + rFib(n - 2);
}