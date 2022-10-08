/*
Input a String S with multiple words, and remove whitespaces and
output the result -
Input: “Hii Boy” Output: “HiiBoy”
*/

var s = 'Hii Boy  ,    how       r you';

function removeWhiteSpace(str) {
  return str.split(' ').join('');
}

var ans = removeWhiteSpace(s);

console.log(ans);
