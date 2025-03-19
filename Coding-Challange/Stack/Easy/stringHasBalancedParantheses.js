const StackArray = require('./StackArray');

// 5- Write a function to check if a string has balanced parentheses.
function stringHasBalancedParentheses(str) {
    const stackArray = new StackArray();

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stackArray.push(str[i]);
        }

        else if (str[i] === ')') {
            if (stackArray.size() === 0) return false;

            stackArray.pop();
        }
    }

    return stackArray.size() === 0;
}

module.exports = stringHasBalancedParentheses;
