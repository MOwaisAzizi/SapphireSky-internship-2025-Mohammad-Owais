//6-Write a function that calculates the factorial of a given number.
function checkFactorial(number) {
    let fac = 1
    for (let i = 1; i <= number; i++) {
        fac *= i
    }
    return fac
}
console.log(checkFactorial(5));

