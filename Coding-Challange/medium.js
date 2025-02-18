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
    if(!weight || !height) return

    const BMI = weight / (height * height )
    
    if (BMI < 18.5) return 'Underweight'
    else if (BMI >= 18.5 && BMI < 25) return 'normal'
    else if (25 <= BMI < 30) return 'overweight'
    else if( BMI > 30 ) return 'Obese'
}
  // to meter
 console.log(BMICalculator(65,1.8));
 
// 9-Electricity Bill Calculator
// Units Consumed:
// Up to 100 units: $0.50 per unit
// 101 to 200 units: $0.75 per unit
// 201 to 500 units: $1.20 per unit
// Above 500 units: $1.50 per unit
// Write a program that calculates the total electricity bill.

function billCalculator(unit) {
    let bill = 0
    if(unit < 100) return  bill  = unit * 0.5
    else if (unit <= 201 && unit >= 101 ) return  bill = unit * 0.75 
    else if(unit < 500 && unit >= 201) return  bill = unit * 1.2 
    else if(unit > 500) return bill  = unit * 1.5
}
 console.log(billCalculator(300));



