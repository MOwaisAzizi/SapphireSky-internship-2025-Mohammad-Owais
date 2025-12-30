// 9-Electricity Bill Calculator
// Units Consumed:
// Up to 100 units: $0.50 per unit
// 101 to 200 units: $0.75 per unit
// 201 to 500 units: $1.20 per unit
// Above 500 units: $1.50 per unit
// Write a program that calculates the total electricity bill.
function billCalculator(unit) {
    let bill = 0
    if (unit < 100) return bill = unit * 0.5
    else if (unit <= 201 && unit >= 101) return bill = unit * 0.75
    else if (unit < 500 && unit >= 201) return bill = unit * 1.2
    else if (unit > 500) return bill = unit * 1.5
}
console.log(billCalculator(300));
