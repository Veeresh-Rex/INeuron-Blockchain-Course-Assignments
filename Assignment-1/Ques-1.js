// Write a program to find whether a given year is a leap year or not.

let year = 2022;

var isLeapYear =
  year % 100 === 0 || year % 400 === 0 || year % 4 === 0 ? true : false;

console.log(`${year} is leap year:- ${isLeapYear}`);
