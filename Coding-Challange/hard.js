

//8-Body Mass Index (BMI) Calculator
// Given weight (kg) and height (m), calculate BMI using BMI = weight / (height * height).
// Categorize it into:
// Underweight: BMI < 18.5
// Normal weight: 18.5 ≤ BMI < 25
// Overweight: 25 ≤ BMI < 30
// Obese: BMI ≥ 30
const BMICalculator = (weight, height) => {
    if (!weight || !height) return

    const BMI = weight / (height * height)

    if (BMI < 18.5) return 'Underweight'
    else if (BMI >= 18.5 && BMI < 25) return 'normal'
    else if (25 <= BMI < 30) return 'overweight'
    else if (BMI > 30) return 'Obese'
}
// to meter
console.log(BMICalculator(65, 1.8));

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

// 10- Password Strength Checker
// A strong password must:
// Be at least 8 characters long.
// Contain at least one uppercase letter, one lowercase letter, and one number.
// Write a program that checks if a given password is strong or weak.
function isvalidPassword(password) {
    //using regular expression(other ways are to long)
    if (password.length - 1 < 8 || !(/[A-Z]/.test(password)) || !(/[a-z]/.test(password)) || !(/\d/.test(password))) return false
    return true
}
console.log(isvalidPassword('hellO12Hi'));
console.log(isvalidPassword('helljdjdjd'));
console.log(isvalidPassword('helljd3Djdjd'));

