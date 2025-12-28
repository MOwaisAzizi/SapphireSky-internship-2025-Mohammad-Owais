
//10-Palindrome Checker
function palindromeChecker(number) {
    const numberToArray = String(number).split('')
    let left = 0
    let right = numberToArray.length - 1

    while (right > left) {
        if (numberToArray[left] !== numberToArray[right]) {
            return false
        }
        left++;
        right--;
    }
    return true
}
console.log(palindromeChecker(1221));
console.log(palindromeChecker(12231));
