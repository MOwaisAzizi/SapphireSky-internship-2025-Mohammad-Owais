const StackArray = require('./StackArray');

// 5- Write a function to check if a string has balanced parentheses.
function stringHasBalancedParentheses(str) {
    
    const stack = new StackArray();

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(str[i]);
        }

        else if (str[i] === ')') {
            if (stack.size() === 0) return false;

            stack.pop();
        }
    }

    return stack.size() === 0;
}

//test parantheses
console.log(stringHasBalancedParentheses('()')); //true
console.log(stringHasBalancedParentheses('()(')); //false
console.log(stringHasBalancedParentheses('(abc)')); //true
