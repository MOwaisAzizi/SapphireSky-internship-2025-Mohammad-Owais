const StackArray = require('./Easy/stackArray')

//6-Implement a function to reverse a string using a stack.
function reverseString(str) {
    let stackArray = new StackArray()
    let reversedString = '';

    for (let i = 0; i < str.length; i++) {
        stackArray.push(str[i]);
    }

    while (stackArray.size() > 0) {
        reversedString += stackArray.stack.pop();
    }
    return reversedString;
}

module.exports = reverseString