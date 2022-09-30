/* 
Write a JavaScript program to get the volume of a Cylinder, Sphere and
Cone with four decimal places using objects and classes.
Create classes for volumes for each geometric shape which returns the
output using the getVolume() method.

eg- to get volume of cylinder-
let obj= new Cylinder(radius,height);

obj.getVolume();

Formulas for volumes of the shapes-
1) Cylinder- Volume = πr^2h

where r is the radius and h is the height of the cylinder.
2)Sphere- Volume= 4/3πr^3
where r is the radius

3) Cone- Volume= πr^2h/3

where r is the radius and h is the height of the cone.
*/
class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  getVolume() {
    //Cylinder- Volume = πr^2h
    return (Math.PI * this.radius * this.radius * this.height).toFixed(4);
  }
}

class Sphere {
  constructor(radius, height) {
    this.radius = radius;
  }

  getVolume() {
    // Sphere- Volume= 4/3πr^3
    return ((4 / 3) * Math.PI * Math.pow(this.radius, 3)).toFixed(4);
  }
}

class Cone {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  getVolume() {
    // Cone- Volume= πr^2h/3
    return ((Math.PI * this.radius * this.radius * this.height) / 3).toFixed(4);
  }
}

let cylinderObj = new Cylinder(2, 4);
let coneObj = new Cone(3, 6);
let sphereObj = new Sphere(3);

console.log(cylinderObj.getVolume());
console.log(sphereObj.getVolume());
console.log(coneObj.getVolume());
