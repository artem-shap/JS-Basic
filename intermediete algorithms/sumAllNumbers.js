function sumAll(arr) {
  let start = arr[0];
  let end = arr[1];

  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumAll([1, 4]));  // 10
console.log(sumAll([4, 1]));  // 10
console.log(sumAll([5, 10])); // 45