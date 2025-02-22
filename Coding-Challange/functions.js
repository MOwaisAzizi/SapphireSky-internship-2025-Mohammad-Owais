//EASY PAER
//1- Convert Celsius to Fahrenheit
// Write a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit using the formula:
//F=(C×95)+32F = (C \times \frac{9}{5}) + 32F=(C×59​)+32

function celsiusToFahrenheit(celsius){
    const fahrenheit = (celsius * 9/5 )+ 32
    return fahrenheit
}
console.log(celsiusToFahrenheit(5));

// 2-Find the Maximum of Three Numbers
 function maxOfThree(a, b, c){
    if(a > b && a > c) return a
    else if(b > a && b > c) return b
    else if(c > a && c > b) return c
    else if(a === b && b === c) return 'Equal'
 }
 console.log(maxOfThree(4,5,4));
 
