
//11-Armstrong Number  Example: 153 = (1³ + 5³ + 3³) = 153
function toPower(base, power) {
    sum = 1
    for (let i = 1; i <= power; i++) {
        sum *= base
    }
    return sum
}

