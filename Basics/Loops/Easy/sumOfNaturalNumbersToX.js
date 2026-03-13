
//1-Sum of First N Natural Numbers
function sumOfNaturalNumbersToX(number) {
    let sum = 0
    for (let i = 1; i <= number; i++) {
        sum += i
    }
    return sum
    ////or 
    // return ((number+1)*number)/2
}
console.log(sumOfNaturalNumbersToX(5));
