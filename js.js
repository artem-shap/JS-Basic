// 1. Print 1 - 135
{
  for (let i = 1; i <= 135; i++) {
    console.log(i);
  }
}

// 2. Print odd numbers 1 - 135
{
  for (let i = 1; i <= 135; i += 2) {
    console.log(i);
  }
}

// 3. Sum of printed numbers
{
  let sum = 0;

  for (let i = 0; i <= 135; i++) {
    sum += i;
    console.log(`Number is: ${i} Sum: ${sum}`);
  }
}

// 4. Print the elements of an array
{
  let X = [1, 4, 2, 12];

  for (let i = 0; i < X.length; i++) {
    console.log(X[i]);
  }
}

// 5. Find max
{
  let X = [2, -3, -1];
  let max = X[0];

  for (let i = 1; i < X.length; i++) {
    if (X[i] > max) {
      max = X[i];
    }
  }

  console.log(max);
}

// 6. Average
function average(X) {
  let sum = 0;

  for (let i = 0; i < X.length; i++) {
    sum += X[i];
  }

  return sum / X.length;
}


//7. Eliminate the Negatives
console.log(average([2, 1, 3]));

{
  let X = [2, -1, 4, -3];

  for (let i = 0; i < X.length; i++) {
    if (X[i] < 0) {
      X[i] = 0;
    }
  }

  console.log(X); // [2, 0, 4, 0]
}


//8. Number to String
{
  const x = [1, -4, 0, -1];

  for (let i = 0; i < x.length; i++) {
    if (x[i] < 0) {
      x[i] = 'Turing';
    }
  }

  console.log(x); // [1, 'Turing', 0, 'Turing']
}