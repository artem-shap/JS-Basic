function isMagicSquare(g) {
  // rows
  for (let r = 0; r < 3; r++) {
    let rowSum = 0;
    for (let c = 0; c < 3; c++) {
      rowSum += g[r * 3 + c];
    }
    if (rowSum !== 15) {
      return false;
    }
  }

  // columns
  for (let c = 0; c < 3; c++) {
    let colSum = 0;
    for (let r = 0; r < 3; r++) {
      colSum += g[r * 3 + c];
    }
    if (colSum !== 15) {
      return false;
    }
  }

  // diagonals
  if (g[0] + g[4] + g[8] !== 15) {
    return false;
  }
  if (g[2] + g[4] + g[6] !== 15) {
    return false;
  }

  return true;
}

console.log(isMagicSquare([8, 1, 6, 3, 5, 7, 4, 9, 2])); // true
console.log(isMagicSquare([2, 7, 6, 9, 5, 1, 4, 3, 8])); // true
console.log(isMagicSquare([3, 5, 7, 8, 1, 6, 4, 9, 2])); // false
console.log(isMagicSquare([8, 1, 6, 7, 5, 3, 4, 9, 2])); // false