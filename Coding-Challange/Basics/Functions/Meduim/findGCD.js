
//8-Find the GCD of Two Numbers
function findGCD(a, b) {
    if (a < b) [a, b] = [b, a]

    while (b !== 0) {
        let temp = b
        b = a % b
        a = temp
    }
    return a
}
console.log(findGCD(72, 60));
