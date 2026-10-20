function powerN(base, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= base;
  }

  return result;
}

console.log(powerN(3, 1)); // 3
console.log(powerN(3, 2)); // 9
console.log(powerN(3, 3)); // 27