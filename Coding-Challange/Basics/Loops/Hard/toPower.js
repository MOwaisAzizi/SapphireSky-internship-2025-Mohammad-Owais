// find power of a number
function toPower(base, power) {
    sum = 1
    for (let i = 1; i <= power; i++) {
        sum *= base
    }
    return sum
}

