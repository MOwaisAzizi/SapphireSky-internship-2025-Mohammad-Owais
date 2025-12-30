//1-Write a program that takes a number as input and checks if it is odd or even.
function oddOrEvenCheck(number) {
    if (number === 0) return `${number} is zero!`
    else if (number % 2 === 0) return `${number} is even!`
    return `${number} is odd!`
}

console.log(odddOrEvenCheck(17));
