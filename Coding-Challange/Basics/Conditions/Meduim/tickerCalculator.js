
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
