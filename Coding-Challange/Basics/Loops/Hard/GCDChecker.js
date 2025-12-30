//13-Find GCD (Greatest Common Divisor)
function GCDChecker(a, b) {
    if (a < b) [a, b] = [b, a]

    while (b !== 0) {
        let temp = b
        b = a % b
        a = temp
    }
    return a
}
console.log(GCDChecker(60, 72));

