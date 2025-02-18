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
   