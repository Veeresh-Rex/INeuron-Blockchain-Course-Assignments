/*
Input a String S with a word, and replace character “a” with “x” and
display the result -
Input: “apple” Output: “xpple”
*/

function replaceChar(str) {
  return str.replace('a','x');
}

var word = 'apple';
console.log(replaceChar(word));