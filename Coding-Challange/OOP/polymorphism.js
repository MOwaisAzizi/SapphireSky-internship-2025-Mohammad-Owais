//8. Example of Polymorphism in JavaScript
//   Polymorphism allows objects of different classes to be treated as instances of the same class through method overriding.
class Shape {
    draw() {
        console.log("Drawing a shape...");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a Circle...");
    }
}

class Square extends Shape {
    draw() {
        console.log("Drawing a Square...");
    }
}
const shapes = [new Shape(), new Circle(), new Square()];
shapes.forEach(shape => shape.draw());
