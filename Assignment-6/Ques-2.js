/* 
Write a javascript function find_largest to return the nth largest number

in an array-
eg- given an array of integers- [3,45,6,7,23,5,7,8]

find_largest(3) will return third largest number from the above array -
which is 8.
*/

let arr = [3, 45, 6, 7, 23, 5, 7, 8];
function find_largest(n) {
  arr.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  return arr[arr.length - n];
}

console.log(find_largest(3));
