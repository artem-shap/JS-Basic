function myReplace(str, before, after) {
  let words = str.split(' ');
  let result = '';

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word === before) {
      let first = word.charAt(0);

      if (first === first.toUpperCase()) {
        word = after.charAt(0).toUpperCase() + after.slice(1);
      } else {
        word = after.charAt(0).toLowerCase() + after.slice(1);
      }
    }

    result += word;

    if (i < words.length - 1) {
      result += ' ';
    }
  }

  return result;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// "A quick brown fox leaped over the lazy dog"