
//12-Collatz Sequence (Hailstone Numbers)
function collatzSequence(number) {
    let steps = 0
    while (number !== 1) {
        if (number % 2 === 0) {
            number /= 2
            steps++
        }
        else if (number % 2 !== 0) {
            number = (number * 2) + 1
            steps++
        }
    }
    return steps
}
console.log(collatzSequence(3));
