
//2-Given a student's score (0-100), determine their letter grade based on the following scale:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F
function checkStudentGrade(grade) {
    if (grade < 0 || grade > 100) return
    else if (grade > 90) return 'A'
    else if (grade >= 80) return 'B'
    else if (grade >= 70) return 'C'
    else if (grade >= 60) return 'D'
    else if (grade <= 60) return 'F'
    else return 'Not Valid Grade.please write a grade more then or equals 0 and less then or equals to 100!'
}
console.log(checkStudentGrade(95));


