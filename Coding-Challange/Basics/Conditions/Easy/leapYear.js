
//4- A year is a leap year if it is divisible by 4 but not by 100, 
// unless also divisible by 400. Write a program that determines if a given year is a leap year.
const isLeapYear = year => {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) return true
    else return false
}
console.log(isLeapYear(2000));

