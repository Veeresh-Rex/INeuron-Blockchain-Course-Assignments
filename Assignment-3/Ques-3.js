/*
Write a program to find whether a given number is special number or
not-
If the sum of the factorial of digits of a number (N) is equal to the

number itself, the number (N) is called a special number.
eg- 145 is a special number
Logic- 1! + 4! + 5!= 1+24+120 i.e 14
*/

function getFactorial(f) {
  let factorial = 1;
  for (let i = 2; i <= f; i++) factorial *= i;

  return factorial;
}

function isSpecialNumber(n) {
  var number = n;
  var sum = 0;
  while (n !== 0) {
    var rem = Math.trunc(n % 10);
    sum += getFactorial(rem);
    n = Math.trunc(n / 10);
  }
  if (sum === number) console.log(`${number} is a Special Number.`);
  else console.log(`${number} is not a Special Number.`);
}

isSpecialNumber(145);
