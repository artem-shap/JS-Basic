function findLongestWord(str) {
  let words = str.split(' ');
  let max = words[0].length;

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > max) {
      max = words[i].length;
    }
  }

  return max;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 6
console.log(findLongestWord("May the force be with you"));                      // 5