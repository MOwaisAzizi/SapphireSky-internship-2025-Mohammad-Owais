// 3- write a function to reverse string
function reverseString(str) {
    let arrayString = []
    for (let i = str.length; i >= 0; i--) {
        arrayString.push(str[i])
    }
    return arrayString.join('')
}
console.log(reverseString('Hello world'));
