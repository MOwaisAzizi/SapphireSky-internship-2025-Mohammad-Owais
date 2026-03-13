
//10-Check if a String is a Palindrome
function palindromeChecker(str) {
    const strArray = str.split('')
    let left = 0
    let right = strArray.length - 1

    while (right > left) {
        if (strArray[left] !== strArray[right]) {
            return false
        }
        left++;
        right--;
    }
    return true
}

console.log(palindromeChecker('HiH'));
