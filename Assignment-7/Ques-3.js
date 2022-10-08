/*
Input a String S with two words, and replace first word with second word
and display the result -
Input: “Hii Boy” Output: “Boy Hii”
*/

function reverseWord(str) {
  var ans = str.split(' ');
  return ans[1] + ' ' + ans[0];
}

var word = 'Hii Boy';
console.log(reverseWord(word));
