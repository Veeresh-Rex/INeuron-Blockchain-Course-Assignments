// Write a program to find the factorial of a number.

var number = 4;

var factorial = 1;

for (let i = 2; i <= number; i++) {
  factorial *= i;
}

console.log('Factorial of ' + number + ' is: ' + factorial);
