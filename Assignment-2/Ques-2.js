/*
Write a function using switch case to find the grade of a student based
on marks obtained
a. “S grade” if the marks are between 90 and 100.
b. “A grade” if the marks are between 80 and 90.
c. “B grade” if the marks are between 70 and 80.
d. “C grade” if the marks are between 60 and 70.
e. “D grade” if the marks are between 50 and 60.
f. “E grade” if the marks are between 40 and 50.
g. “Student has failed” if the marks are between 0 and 40.
h. Else output “Invalid marks”.
*/

let marks = 89;

switch (Math.trunc(marks / 10)) {
  case 9:
  case 10:
    console.log('S grade');
    break;
  case 8:
    console.log('A grade');
    break;
  case 7:
    console.log('B grade');
    break;
  case 6:
    console.log('C grade');
    break;
  case 5:
    console.log('D grade');
    break;
  case 4:
    console.log('E grade');
    break;

  default:
    console.log('Invalid marks');
}
