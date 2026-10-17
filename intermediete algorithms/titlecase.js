function titleCase(str) {
  let words = str.split(' ');
  let result = '';

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let fixed = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

    result += fixed;

    if (i < words.length - 1) {
      result += ' ';
    }
  }

  return result;
}

console.log(titleCase("I'm a little tea pot")); // "I'm A Little Tea Pot"
console.log(titleCase("sHoRt AnD sToUt"));      // "Short And Stout"