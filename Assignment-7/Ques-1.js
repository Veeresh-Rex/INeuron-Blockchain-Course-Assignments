/*
Input a String S, and check its length and if the length is greater than 4,
truncate the input String and output the result -
Input: Ice Output: Ice
Input:Icecream Output:Icec...
*/

function truncateString(str) {
  return str.length > 4 ? str.slice(0, 4) + '...' : str;
}

var ans = truncateString('Icecream');

console.log(ans);
