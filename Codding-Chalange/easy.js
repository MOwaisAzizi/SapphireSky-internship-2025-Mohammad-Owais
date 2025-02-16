// Easy Questions

//Write a program that takes a number as input and checks if it is odd or even.
function isOddOrEvenCheck(number){
    if(number === 0) return `${number} is zero!`
    else if(number % 2 === 0) return `${number} is even!`
    else if(number % 2 !== 0) return `${number} is odd!`
}

console.log(isOddOrEvenCheck(17));
console.log(isOddOrEvenCheck(120));
console.log(isOddOrEvenCheck(0));


//Given a student's score (0-100), determine their letter grade based on the following scale:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F

function checkStudentGrade(grade){
    if(grade >= 90 && grade <= 100) return 'A'
    else if(grade >= 80 && grade <= 89) return 'B'
    else if(grade >= 70 && grade <= 79) return 'C'
    else if(grade >= 60 && grade <= 69) return 'D'
    else if( grade <= 60 && grade >= 0) return 'F'
    else return 'Not Valid Grade.please write a grade more then or equals 0 and less then or equals to 100!'
}
console.log(checkStudentGrade(95));
console.log(checkStudentGrade(75));
console.log(checkStudentGrade(83));
console.log(checkStudentGrade(60));
console.log(checkStudentGrade(110));
console.log(checkStudentGrade(-20));
