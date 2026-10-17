function gameOfThree(n) {
  while (n > 1) {
    let step;

    if (n % 3 === 0) {
      step = 0;
    } else if (n % 3 === 1) {
      step = -1;
    } else {
      step = 1;
    }

    console.log(`${n} ${step}`);
    n = (n + step) / 3;
  }

  console.log(1);
}

gameOfThree(100);
// 100 -1
// 33 0
// 11 1
// 4 -1
// 1