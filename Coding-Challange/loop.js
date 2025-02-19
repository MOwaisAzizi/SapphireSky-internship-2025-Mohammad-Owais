//1-Print Numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    // console.log(i);
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
// console.log(sumOfNumber(5));

//3-Ask the user for a number and print its multiplication table up to 10.
function MultiplicationTable(number) {
    for (let i = 1; i <= number; i++) {
        console.log(`${i} x ${number} = ${i * number}`);
    }
}
// MultiplicationTable(10)

//4-Reverse a Number
function reverseNumber(number) {
    const numToString = String(number)
    let reverseNumber = ''

    for (let i = numToString.length - 1; i >= 0; i--) {
        reverseNumber += numToString[i]
    }
    return Number(reverseNumber)
}

// console.log(reverseNumber(123));

//5- Count Digits in a Number
function countDigit(number) {
    let count = 0;
    for (let i = 1; i <= String(number).length; i++) {
        count++
    }
    return count
}
// console.log(countDigit(3933333));


//Meduim part of loops questions
// 6-Check for Prime Number
function isPrimeNumber(number) {
    if (number < 2) return false
    else if (number === 3 || number === 2) return true
    else if (number % 3 === 0 || number % 2 === 0) return false

    for (let i = 5; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) return false
    }

    return true
}

// console.log(isPrimeNumber(15));
// console.log(isPrimeNumber(29));

//7- Factorial of a Number
function factorial(number) {
    let f = 1
    for (let i = 1; i <= number; i++) {
        f *= i
    }
    return f
}
// console.log(factorial(4));

//second solution
//   7- Factorial of a Number
function factorial2(number) {
    if (number === 0 || number === 1) return number
    return number * factorial2(number - 1)
    //  number * (number-1) (number-2) (number-3)
}
// console.log(factorial2(4));

//8-Find Largest and Smallest in a List
function findSmallAndLargeNumber(arr) {
    let small = arr[0]
    let large = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > large) large = arr[i]
        if (arr[i] < small) small = arr[i]
    }
    console.log(small, large);

}
findSmallAndLargeNumber([2, 3, 4, 5, 1, 4, 33, 1])

//9-Fibonacci Sequence
function findFibonacci(number) {
    let temp = 0
    let a = 0
    let b = 1
    for (let i = 1; i < number; i++) {
        temp = a + b
        a = b
        b = temp
    }
    return b
}
console.log(findFibonacci(5));

//10-Palindrome Checker
function palindromeChecker(number) {
    const numberToArray = String(number).split('')
    let left = 0
    let right = numberToArray.length - 1

    while (right > left) {
        if (numberToArray[left] !== numberToArray[right]) {
            return false
        }
        left++;
        right--;
    }
    return true
}
console.log(palindromeChecker(1221));
console.log(palindromeChecker(12231));


//11-Armstrong Number  Example: 153 = (1³ + 5³ + 3³) = 153
function toPower(base, power) {
    sum = 1
    for (let i = 1; i <= power; i++) {
        sum *= base
    }
    return sum
}

function isArmstrongNumber(number) {
    let sum = 0
    const numberToArray = String(number).split('')
    const powerNumber = numberToArray.length
    for (let i = 0; i < numberToArray.length; i++) {
        sum += toPower(Number(numberToArray[i]), powerNumber)
    }
    if (sum === number) return true
    return false
}
console.log(isArmstrongNumber(153));

//12-Collatz Sequence (Hailstone Numbers)
function collatzSequence(number){
    let steps = 0
 while(number !== 1){
    if(number % 2 === 0) {
     number /= 2 
     steps ++ 
    }
    else if(number % 2 !== 0){
     number = (number * 2) + 1 
     steps ++
    }
 }
   return steps
}
console.log(collatzSequence(3));

//13-Find GCD (Greatest Common Divisor)
 function GCDChecker(a,b){
    if(a<b) return 'first input must be biger then second'

    while(b!==0){
        let temp = b
        b = a % b
        a = temp
    }
    return a
 }
 console.log(GCDChecker(60,72));

 
 
