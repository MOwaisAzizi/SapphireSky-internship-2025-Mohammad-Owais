//4-Write a program that takes user input and prints whether it is a positive, negative, or zero.
function checkPositiveOrNegative(number) {
    if (number > 0) return true
    else if (number < 0) return false
    else if (number === 0) return `${number} is Zero!`
}

const input = prompt('Enter A Number')
console.log(checkPositiveOrNegative(Number(input)));
