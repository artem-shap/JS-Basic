function iFactorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(iFactorial(5)); // 120
console.log(iFactorial(0)); // 1


function rFactorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * rFactorial(n - 1);
}

console.log(rFactorial(5)); // 120
console.log(rFactorial(0)); // 1