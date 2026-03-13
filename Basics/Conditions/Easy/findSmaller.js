
//3-Write a program that takes two numbers as input and prints the smaller number.
const findSmaller = (num1, num2) => {
    if (num1 < num2) return `${num1} is smaller then ${num2}`
    else if (num1 > num2) return `${num2} is smaller then ${num1}`
    else return 'Both numbers are the same'
}
console.log(findSmaller(29, 39))
