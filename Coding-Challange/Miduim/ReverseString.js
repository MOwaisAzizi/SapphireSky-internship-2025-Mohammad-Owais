const StackArray = require("../../stackArray");

//6-Implement a function to reverse a string using a stack.
function reverseString(str) {
    let stack = []
    let reversedString = '';

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    while (stack.length > 0) {
        reversedString += stack.pop();
    }

    return reversedString;
}
module.exports = reverseString