// Easy Questions

//Write a program that takes a number as input and checks if it is odd or even.
function isOddOrEvenCheck(number){
    if(number === 0) return `${number} is zero!`
    else if(number % 2 === 0) return `${number} is even!`
    else if(number % 2 !== 0) return `${number} is odd!`
}

console.log(isOddOrEvenCheck(17));
console.log(isOddOrEvenCheck(120));
console.log(isOddOrEvenCheck(0));

