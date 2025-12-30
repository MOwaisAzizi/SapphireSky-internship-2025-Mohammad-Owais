
//9- Find the nth Fibonacci Number
function findFibonacci(number) {
    let temp = 0
    let a = 0
    let b = 1
    for (let i = 1; i < number - 1; i++) {
        temp = a + b
        a = b
        b = temp
    }
    return b
}
console.log(findFibonacci(5));
