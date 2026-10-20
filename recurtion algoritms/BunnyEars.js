function bunnyEars(bunnies) {
  if (bunnies === 0) {
    return 0;
  }

  return 2 + bunnyEars(bunnies - 1);
}

console.log(bunnyEars(0)); // 0
console.log(bunnyEars(1)); // 2
console.log(bunnyEars(2)); // 4
console.log(bunnyEars(5)); // 10