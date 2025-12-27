
//5-Reverse a String
function reverseString(str) {
    let reverseStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i]
    }
    return reverseStr
}
console.log(reverseString('Hello'));
