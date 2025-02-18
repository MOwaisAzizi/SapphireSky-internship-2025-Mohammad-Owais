//1-Print Numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

//2-Sum of First N Natural Numbers
function sumOfNumber(number) {
    let sum = 0
    for (let i = 1; i <= number; i++) {
        sum += i
    }
    return sum
    ////or 
    // return ((number+1)*number)/2
}
console.log(sumOfNumber(5));

//3-Ask the user for a number and print its multiplication table up to 10.
function MultiplicationTable(number) {
    for (let i = 1; i <= number; i++) {
        console.log(`${i} x ${number} = ${i * number}`);
    }
}
MultiplicationTable(10)

//4-Reverse a Number
function reverseNumber(number) {
    const numToString = String(number)
    let reverseNumber = ''

    for (let i = numToString.length - 1; i >= 0; i--) {
        reverseNumber += numToString[i]
    }
    return Number(reverseNumber)
}

console.log(reverseNumber(123));

//5- Count Digits in a Number
   function countDigit(number){
    let count = 0;    
     for(let i = 1; i <= String(number).length; i++){
       count++
     }
     return count
   }
   console.log(countDigit(3933333));


   //Meduim part of loops questions
   // 6-Check for Prime Number
   function isPrimeNumber(number){
    if(number < 2) return false
    else if(number === 3 || number === 2) return true
    else if(number % 3 === 0 || number % 2 === 0) return false

    for(let i = 5; i<=Math.sqrt(number);i+=2){
        if (number % i === 0) return false
    }

    return true
   }

   console.log(isPrimeNumber(15));
   console.log(isPrimeNumber(29));
   
   //7- Factorial of a Number
     function factorial(number){
        let f = 1
        for(let i = 1;i<=number;i++){
            f *= i
        }
        return f
     }
      console.log(factorial(4));

      //second solution
    //   7- Factorial of a Number
    function factorial2(number){
        if(number ===0 || number === 1) return number
         return number * factorial2(number-1)
    } 
   console.log(factorial2(4));

   