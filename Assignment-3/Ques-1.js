/*
Using for loops, write a Javascript program to output the following pattern -
1
2 3
4 5 6
7 8 9 10
*/

const printPattern = () => {
  let k = 1;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write(`${k} `);
      k++;
    }
    process.stdout.write(`\n`);
  }
};

printPattern();
