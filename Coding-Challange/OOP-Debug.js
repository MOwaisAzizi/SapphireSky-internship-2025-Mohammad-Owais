////OOP AND DEBUGIN PRACTICAL QUESTIONS

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

