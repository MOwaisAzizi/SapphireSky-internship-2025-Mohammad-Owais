
//6-Check if a Number is Prime
function isPrimeNumber(number) {
    if (number < 2) return 'no true no false'
    else if (number === 3 || number === 2) return true
    else if (number % 3 === 0 || number % 2 === 0 || number % 5 === 0 || number % 7 === 0 || number % 11 === 0 || number % 13 === 0) return false
    return true
}
