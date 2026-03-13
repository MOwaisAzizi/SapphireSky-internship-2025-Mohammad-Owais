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
