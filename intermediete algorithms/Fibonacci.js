function fib(n) {
  let a = 1n;
  let b = 1n;

  for (let i = 3; i <= n; i++) {
    let next = a + b;
    a = b;
    b = next;
  }

  return b;
}

console.log(fib(4).toString());   // 3
console.log(fib(7).toString());   // 13
console.log(fib(43).toString());  // 433494437
console.log(fib(101).toString()); // 573147844013817084101
console.log(fib(227).toString());
console.log(fib(491).toString());
console.log(fib(881).toString());