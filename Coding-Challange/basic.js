////pratical examples

//2-Write a function to check if a number is even or odd.
function isEvenCheck(number) {
   if (number % 2 === 0) return true
   else if (number % 2 !== 0) return false
   else return `${number} is zero!`
}

console.log(isEvenCheck(17));
console.log(isEvenCheck(120));
console.log(isEvenCheck(0));

//4-Write a program that takes user input and prints whether it is a positive, negative, or zero.
function checkPositiveOrNegative(number) {
   if (number > 0) return true
   else if (number < 0) return false
   else if (number === 0) return `${number} is Zero!`
}

const input = prompt('Enter A Number')
console.log(checkPositiveOrNegative(Number(input)));


//6-Write a function that calculates the factorial of a given number.
function checkFactorial(number) {
   let fac = 1
   for (let i = 1; i <= number; i++) {
      fac *= i
   }
   return fac
}
console.log(checkFactorial(5));

// 9-Write a function to find the sum of all numbers in an array.
function sumOfArray(arr) {
   let sum = 0
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
   }
   return sum
}
console.log(sumOfArray([2, 3, 4, 5, 6]));
