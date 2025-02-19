// Easy Questions

//1-Write a program that takes a number as input and checks if it is odd or even.
function isOddOrEvenCheck(number) {
    if (number === 0) return `${number} is zero!`
    else if (number % 2 === 0) return `${number} is even!`
    else if (number % 2 !== 0) return `${number} is odd!`
}

console.log(isOddOrEvenCheck(17));
console.log(isOddOrEvenCheck(120));
console.log(isOddOrEvenCheck(0));


//2-Given a student's score (0-100), determine their letter grade based on the following scale:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F

function checkStudentGrade(grade) {
    if(grade < 0 || grade > 100) return
    else if (grade > 90) return 'A'
    else if (grade >= 80) return 'B'
    else if (grade >= 70) return 'C'
    else if (grade >= 60) return 'D'
    else if (grade <= 60 ) return 'F'
    else return 'Not Valid Grade.please write a grade more then or equals 0 and less then or equals to 100!'
}
console.log(checkStudentGrade(95));
console.log(checkStudentGrade(75));
console.log(checkStudentGrade(110));
console.log(checkStudentGrade(-20));

//3-Write a program that takes two numbers as input and prints the smaller number.
const findSmaller = (num1, num2) => {
    if (num1 < num2) console.log(`${num1} is smaller then ${num2}`);
    else if (num1 > num2) console.log(`${num2} is smaller then ${num1}`);
    else console.log('Both numbers are the same');
}
findSmaller(29, 39)
findSmaller(22, 4)
findSmaller(5, 5)

//4- A year is a leap year if it is divisible by 4 but not by 100, 
// unless also divisible by 400. Write a program that determines if a given year is a leap year.
const isLeapYear = year => {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) return true
    else return false
}
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));

