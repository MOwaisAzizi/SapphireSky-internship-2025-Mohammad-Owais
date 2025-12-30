
//6-Student Grade System
//Take a student's score (0-100).
// Use switch to assign a letter grade (A, B, C, D, F).

function gradeSystem(grade) {
    let group = ''
    if (typeof grade !== 'number') return 'Please Enter a number [0-100]'

    console.log('checking')
    switch (true) {
        case grade >= 90: group = 'A'
            break
        case grade >= 80: group = 'B'
            break
        case grade >= 70: group = 'C'
            break
        case grade >= 60: group = 'D'
            break
        case grade < 60: group = 'F'
            break
        default: return 'Not Valid grade! [0-100]'
    }
    return group
}
console.log(gradeSystem(80));

