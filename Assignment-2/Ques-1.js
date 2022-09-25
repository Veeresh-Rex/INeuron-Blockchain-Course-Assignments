/*
Write a Javascript function to check whether a triangle is equilateral,
isosceles or scalene 
*/

let a = 10;
let b = 15;
let c = 10;

if (a === b) {
  if (a === c) {
    console.log('Triangle is equilateral.');
  } else {
    console.log('Triangle is isosceles');
  }
} else {
  if (b === c) {
    console.log('Triangle is isosceles');
  } else {
    console.log('Triangle is scalene');
  }
}
