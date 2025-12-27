//1-Write a function to check if a number is even or odd.
function isEvenCheck(number) {
    if (number % 2 === 0) return true
    else if (number % 2 !== 0) return false
    else return `${number} is zero!`
}

console.log(isEvenCheck(17));
console.log(isEvenCheck(120));
console.log(isEvenCheck(0));