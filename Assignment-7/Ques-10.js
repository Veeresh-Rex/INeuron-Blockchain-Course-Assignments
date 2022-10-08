/* 
Given a String S, achieve following tasks
a) Convert the String into upper case.
b) Convert only the first character to uppercase.
c) Convert the String into lower case.
d) Break the string into two halves and swap them.
e) Count the repeating characters.
f) Reverse the string
*/

function convertToUpperCase(str) {
  return str.toUpperCase();
}

function convertFirstCharToUpperCase(str) {
  let s = str[0].toUpperCase();
  return str.replace(str[0], s);
}

function convertToLowerCase(str) {
  return str.toLowerCase();
}

function breakStringTwoHalvesAndSwap(str) {
    let len = str.length;
    let firstPart = str.substring(0, len/2);
    let secondPart = str.substring(len/2, len);
    return secondPart+firstPart;
}

function countRepeatingCharacter(str) {
  let result = {};
  for (let s of str) {
    result[s] = result.hasOwnProperty(s) ? result[s] + 1 : 1;
  }
  return result;
}

function reverseString() {
  return str.split('').reverse().join('');
}

let str = 'veeResh';

console.log(convertToLowerCase(str));
console.log(convertToUpperCase(str));
console.log(convertFirstCharToUpperCase(str));
console.log(breakStringTwoHalvesAndSwap(str));
console.log(countRepeatingCharacter(str));
console.log(reverseString(str));