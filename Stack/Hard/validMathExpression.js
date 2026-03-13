//14- Write a function to check if a given arithmetic expression is valid.
function isValidExpression(expr) {
    expr = expr.trim();
    if (expr.length === 0) return false;

    const stack = [];
    const operators = new Set(['+', '-', '*', '/']);
    let lastChar = '';
    let hasNumber = false;

    for (let i = 0; i < expr.length; i++) {
        let char = expr[i];
        if (!/[0-9+\-*/() ]/.test(char)) return false;

        if (char === ' ') continue;

        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (!stack.length || stack.pop() !== '(') return false;
        }

        if (operators.has(char)) {
            if (i === 0 || i === expr.length - 1) return false;
            if (operators.has(lastChar) || lastChar === '(') return false;
        }

        if (/[0-9]/.test(char)) hasNumber = true;
        lastChar = char;
    }

    if (stack.length !== 0) return false;

    return hasNumber;
}

// Test
console.log(isValidExpression("2 + 3 * (5 - 1)"));  // true
console.log(isValidExpression("(2+3))"));          //  false
console.log(isValidExpression("5 + * 2"));         //  false
console.log(isValidExpression("()"));              //  false
