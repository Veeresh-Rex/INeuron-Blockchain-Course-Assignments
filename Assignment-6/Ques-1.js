/* 
Perform the following operations to provide the implementation for a
Rectangle class. The operations are:
    1. Add an area() method to the Rectangle class.
    2. Create a Square class that satisfies the following conditions:
        ○ It is a subclass of Rectangle.
        ○ It contains a constructor and no other methods.
        ○ It can use the Rectangle class' area method to print the area of a Square object.
*/

class Rectangle {
  constructor(lenght, width) {
    this.lenght = lenght;
    this.width = width;
  }
  area() {
    return this.lenght * this.width;
  }
}

class Square extends Rectangle {
  constructor(lenght) {
    super(lenght, lenght);
  }
}

let squareObj = new Square(3);
let rectangleObj = new Rectangle(5, 7);

console.log(squareObj.area());
console.log(rectangleObj.area());
