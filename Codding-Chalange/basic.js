////pratical examples

//2-Write a function to check if a number is even or odd.
function isOddOrEvenCheck(number){
    if(number === 0) return `${number} is zero!`
    if(number % 2 === 0) return `${number} is even!`
    else if(number % 2 !== 0) return `${number} is odd!`
}

 console.log(isOddOrEvenCheck(17));
 console.log(isOddOrEvenCheck(120));
 console.log(isOddOrEvenCheck(0));
 
 //4-Write a program that takes user input and prints whether it is a positive, negative, or zero.
 function checkPositiveOrNegative(number){
    if(number>0) return `${number} is a positive number!`
    else if(number<0) return `${number} is a negative number!`
    else if(number === 0) return `${number} is Zero!`
   }
    
   const input = prompt('Enter A Number')
   console.log(checkPositiveOrNegative(Number(input)));


//6-Write a function that calculates the factorial of a given number.
   function checkFactorial(number){
    let fac = 1
    for (let i = 1; i <= number; i++) {
       fac*=i        
    }
    return fac
   }
  console.log(checkFactorial(5));
  
