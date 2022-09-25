// Write a JavaScript program to find the sum of the multiples of 3 and 5
// under 1000

var sum = 0;
for (let i = 3; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

console.log(sum);
