//1-Write a function to check if a number is even or odd.
function isEvenCheck(number) {
    if (number === 0) return 0
    if (number % 2 === 0) return true
    else if (number % 2 !== 0) return false
}

console.log(isEvenCheck(17));
console.log(isEvenCheck(120));
console.log(isEvenCheck(0));