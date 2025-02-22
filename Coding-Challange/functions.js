//EASY PAER
//1- Convert Celsius to Fahrenheit
// Write a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit using the formula:
//F=(C×95)+32F = (C \times \frac{9}{5}) + 32F=(C×59​)+32

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32
    return fahrenheit
}
console.log(celsiusToFahrenheit(5));

// 2-Find the Maximum of Three Numbers
function maxOfThree(a, b, c) {
    if (a > b && a > c) return a
    else if (b > a && b > c) return b
    else if (c > a && c > b) return c
    else if (a === b && b === c) return 'Equal'
}
console.log(maxOfThree(4, 5, 4));

//3-Check Even or Odd
function isEven(number) {
    if (number === 0) return 'Zero!'
    else if (number % 2 === 0) return true
    else if (number % 2 !== 0) return false
}

//4-Count Vowels in a String
function countVowels(str) {
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']

    vowels.forEach((el) => {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === el.toUpperCase() || str[i] === el.toLowerCase()) count++
        }
    })
    return count
}
console.log(countVowels('hellow'));

//5-Reverse a String
 function reverseString(str){
    let reverseStr = ''
    for(let i = str.length-1; i>= 0; i--){
    reverseStr += str[i]
    }
    return reverseStr
 }
 console.log(reverseString('Hello'));

 //6-Check if a Number is Prime
 function isPrimeNumber(number) {
    if (number < 2) return 'no true no false'
    else if (number === 3 || number === 2) return true
    else if (number % 3 === 0 || number % 2 === 0 || number % 5 ===0 || number % 7=== 0 || number % 11 === 0 ||number % 13 === 0 ) return false
    return true
}
 
 // 7- Calculate Factorial Using Recursion
    function factorial(n){
     if(n === 0 || n === 1) return 1
     
     return n * factorial(n-1)
    }
    console.log(factorial(4));
    


