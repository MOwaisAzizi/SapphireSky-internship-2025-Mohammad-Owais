
function isArmstrongNumber(number) {
    let sum = 0
    const numberToArray = String(number).split('')
    const powerNumber = numberToArray.length
    for (let i = 0; i < numberToArray.length; i++) {
        sum += toPower(Number(numberToArray[i]), powerNumber)
    }
    if (sum === number) return true
    return false
}
console.log(isArmstrongNumber(153));
