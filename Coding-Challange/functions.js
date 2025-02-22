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


