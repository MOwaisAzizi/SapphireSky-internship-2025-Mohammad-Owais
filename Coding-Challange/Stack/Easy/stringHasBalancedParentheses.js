const StackArray = require('./StackArray');

// 5- Write a function to check if a string has balanced parentheses.
function stringHasBalancedParentheses(str) {
    const stackArray = new StackArray();
    const parentheses = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < str.length; i++) {
        const char = str[i]; //(
        if (parentheses[char]) {
            stackArray.push(char);
        } 

        else if (Object.values(parentheses).includes(char)) {
            if (stackArray.size() === 0 || parentheses[stackArray.peek()] !== char) {
                return false;
            }
            stackArray.pop();
        }
    }
    return stackArray.size() === 0;
}

//test parentheses
console.log(stringHasBalancedParentheses('()')); //true
console.log(stringHasBalancedParentheses('()(')); //false
console.log(stringHasBalancedParentheses('(abc)')); //true
