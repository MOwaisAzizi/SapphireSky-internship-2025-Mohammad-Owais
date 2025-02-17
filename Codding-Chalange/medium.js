//5-Given three sides of a triangle, check if they form a valid triangle. The sum of any two sides must be greater than the third.
const checkIsValidTriangle = (right, left, bottom) => {
    if (right + left > bottom && right + bottom > left && left + bottom > right) {
        console.log('it is a triangle!');
    } else {
        console.log('it is not a triangle!');
    }
}
checkIsValidTriangle(10, 20, 15)

//6-Speeding Ticket Calculator
//    Speed limit = 60 km/h.
//    If a driver goes above the speed limit, they get a fine.
//    If they are driving over 100 km/h, they get double the fine.
//    Implement a program that takes speed as input and determines the fine.
const speedingTicketCalculator = speed => {
    let fine = 0
    if (speed > 60 && speed <= 100) return `You Got ${++fine} fine`
    else if (speed > 100) return `You got ${fine += 2} fines`
    else return 'You have got no fine'
}
console.log(speedingTicketCalculator(90));
console.log(speedingTicketCalculator(120));
console.log(speedingTicketCalculator(12));

//  7-  ATM Withdrawal
//    A person wants to withdraw money from an ATM.
//    If the withdrawal amount is a multiple of 10, allow withdrawal.
//    If not, print an error message.
//    If the account balance is less than the withdrawal amount, print "Insufficient Funds".
function withdrawFromATM(withdrawAmount) {
    let balance = 1000
    if (withdrawAmount % 10 === 0) {
        balance = balance - withdrawAmount
        console.log(`Your widthdraw was successfull ${withdrawAmount}! Your current balance is ${balance}`);
    }
    else if (withdrawAmount % 10 !== 10) console.log('Failed: your withdraw amount is not dividible by 10');
    else if (withdrawAmount > balance) console.log('Insufficient Funds');
}
withdrawFromATM(100)

//8-Body Mass Index (BMI) Calculator
// Given weight (kg) and height (m), calculate BMI using BMI = weight / (height * height).
// Categorize it into:
// Underweight: BMI < 18.5
// Normal weight: 18.5 ≤ BMI < 25
// Overweight: 25 ≤ BMI < 30
// Obese: BMI ≥ 30

const BMICalculator = (weight, height) => {
    const BMI = weight / ((height * 100) * (height *100))
    console.log(BMI);
    
    if (BMI < 18.5) return 'Underweight'
    if (BMI > 18.5 && BMI < 25) return 'normal'
    if (25 <= BMI < 30) return 'overweight'
    if( BMI > 30 ) return 'Obese'
}
 console.log(BMICalculator(65,180));
 



