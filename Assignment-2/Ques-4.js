/* 
Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100).
*/

const isPrimeNumber = (p) => {
  if (p === 2 || p === 3) return 1;
  if (p <= 1 || !(p % 2) || !(p % 3)) return 0;

  for (let i = 5; i * i <= p; i += 6) {
    if (p % i === 0 || p % (i + 2) === 0) {
      return 0;
    }
  }
  return 1;
};

const findFactorial = (f) => {
  let factorial = 1;

  for (let i = 2; i <= f; i++) factorial *= i;

  return factorial;
};

const findPrimeInRange = (a, b) => {
  for (let i = a; i < b; i++)
    if (isPrimeNumber(i)) console.log(findFactorial(i));
};

findPrimeInRange(2, 8);
