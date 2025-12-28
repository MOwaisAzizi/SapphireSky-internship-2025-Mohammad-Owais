
//5- Count Digits in a Number
function countDigit(number) {
    let count = 0;
    for (let i = 1; i <= String(number).length; i++) {
        count++
    }
    return count
}
console.log(countDigit(3933333));


