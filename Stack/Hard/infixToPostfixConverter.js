// 15-Implement a function to convert an infix expression to postfix notation.

function infixToPostfix(expression) {
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };
    const output = [];
    const stack = [];

    for (let token of expression) {
        if (/[A-Za-z0-9]/.test(token)) {
            output.push(token);
        } else if (token === '(') {
            stack.push(token);
        } else if (token === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                output.push(stack.pop());
            }
            stack.pop();
        } else {
            while (stack.length && precedence[stack[stack.length - 1]] >= precedence[token]) {
                output.push(stack.pop());
            }
            stack.push(token);
        }
    }

    while (stack.length) {
        output.push(stack.pop());
    }

    return output.join(' ');
}

// Test
console.log(infixToPostfix("A+B*C"));      // Output: "A B C * +"
console.log(infixToPostfix("(A+B)*C"));    // Output: "A B + C *"
console.log(infixToPostfix("A+B*(C-D)"));  // Output: "A B C D - * +"
