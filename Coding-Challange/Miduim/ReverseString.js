const StackArray = require("../easy/stackArray");

//6-Implement a function to reverse a string using a stack.
function reverseString(str) {
    let stackArray = new StackArray()
    let reversedString = '';

    for (let i = 0; i < str.length; i++) {
        stackArray.stack.push(str[i]);
    }

    while (stackArray.stack.length > 0) {
        reversedString += stackArray.stack.pop();
    }

    return reversedString;
}

module.exports = reverseString