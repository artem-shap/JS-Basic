function sumPrimes(num) {
  let sum = 0;

  for (let n = 2; n <= num; n++) {
    let isPrime = true;

    for (let d = 2; d * d <= n; d++) {
      if (n % d === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      sum += n;
    }
  }

  return sum;
}

console.log(sumPrimes(10));  // 17
console.log(sumPrimes(977)); // 73156