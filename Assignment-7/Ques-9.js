/* 
Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
(any combination) using string methods.
How will you handle that ?
*/

var userInput = 'yEs';

function handleYesCombination(str) {
    return str.toLowerCase() === 'yes';
}

console.log(handleYesCombination(userInput));
