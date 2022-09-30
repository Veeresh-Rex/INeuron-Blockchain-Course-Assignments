/* 
Write a JavaScript program which accept a number as input in the
function parameter and insert dashes (-) between each two even
numbers.
For example if you accept 025468 as the output should be 0-254-6-8.
computeDash(025468) -> 0-254-6-8.
*/

function computeDash(n) {
  let ans = '';
  let prev_rem;
  let rem;

  while (n !== 0) {
    rem = n % 10;
    if (rem % 2 === 0 && prev_rem % 2 === 0) {
      ans += '-' + rem;
    } else {
      ans += rem;
    }
    n = Math.trunc(n / 10);
    prev_rem = rem;
  }
  ans = ans.split('').reverse().join('');
  console.log(ans);
}

computeDash(222226743680);
