
//7- Factorial of a Number
function factorial(number) {
    if (number === 0 || number === 1) return 1

    let f = 1
    for (let i = 1; i <= number; i++) {
        f *= i
    }
    return f
}
// console.log(factorial(4));
