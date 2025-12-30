//2-Simple Calculator
function calculator(num1, num2, operator) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') return 'Inputs Should be Number!'

    switch (operator) {
        case '+': return num1 + num2
        case '-': return num1 - num2
        case '*': return num1 * num2
        case '/': return num1 + num2
        default: return 'Not valid Operator! [+,-,*,/]'
    }
}
console.log(calculator(4, 5, '*'))
