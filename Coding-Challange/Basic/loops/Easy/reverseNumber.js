
//4-Reverse a Number
function reverseNumber(number) {
    const numToString = String(number)
    let reverseNumber = ''

    for (let i = numToString.length - 1; i >= 0; i--) {
        reverseNumber += numToString[i]
    }
    return Number(reverseNumber)
}
console.log(reverseNumber(123));
