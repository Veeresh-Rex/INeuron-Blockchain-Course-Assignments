/*
Write a program to find whether a given number is armstrong number or

not-
The Armstrong number is a number that is equal to the sum of cubes of

its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
numbers. Let's try to understand why 153 is an Armstrong number.
153 = (1*1*1)+(5*5*5)+(3*3*3) where:
(1*1*1)=1
(5*5*5)=125
(3*3*3)=27
So:
1+125+27=153
*/

function isArmstrongNumber(a) {
  let number = a;
  let sum = 0;
  while (number !== 0) {
    var rem = Math.trunc(number % 10);
    sum += rem * rem * rem;
    number = Math.trunc(number / 10);
  }
  if (sum === a) return 1;
  return 0;
}

console.log(isArmstrongNumber(407));
