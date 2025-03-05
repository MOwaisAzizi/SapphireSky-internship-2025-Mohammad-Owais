//// OOP PRACTICAL QUESTIONS

// 4. Write a JavaScript Class Car with a displayInfo method and brand and model property
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    displayInfo() {
        console.log(`Car: ${this.brand} ${this.model}`);
    }
}
const car1 = new Car("Toyota", "Corolla");
car1.displayInfo();



//6. Creating Private Properties in JavaScript Classes
class Employee {
    #salary;
    constructor(name, salary) {
        this.name = name; this.#salary = salary;
    }
    getSalary() {
        return this.#salary;
    }
}
const emp = new Employee("Alice", 50000);
console.log(emp.getSalary());



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

