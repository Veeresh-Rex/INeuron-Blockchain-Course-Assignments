/*
Write a JavaScript program to convert temperatures to and from Celsius,
Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
*/

var Celsius = 60;

var Fahrenheit = 45;

function convertToFahrenheit(c) {
  return (c / 5) * 9 + 32;
}

function convertToCelsius(f) {
  return ((f - 32) / 9) * 5;
}

console.log(`${Fahrenheit}°F is ${convertToCelsius(Fahrenheit)}°C`);
console.log(`${Celsius}°C is ${convertToFahrenheit(Celsius)}°F`);
