// Write a Javascript function to test whether the first character of a string
// is lowercase.

// Method -> 1

function isFirstLetterInLowerCase(str) {
  return str[0] >= 'a' && str[0] <= 'z';
}

// Method -> 2

function isFirstLetterInLowerCase2(str) {
  return str === str.toLowerCase();
}

let word = 'board';
let ans = isFirstLetterInLowerCase(word);
console.log(ans);
