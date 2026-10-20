function rTriangle(rows) {
  if (rows <= 0) {
    return 0;
  }

  return rows + rTriangle(rows - 1);
}

console.log(rTriangle(0)); // 0
console.log(rTriangle(1)); // 1
console.log(rTriangle(2)); // 3
console.log(rTriangle(4)); // 10