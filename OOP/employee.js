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

