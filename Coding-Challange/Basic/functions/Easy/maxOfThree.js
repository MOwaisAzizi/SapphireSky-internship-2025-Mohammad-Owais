
// 2-Find the Maximum of Three Numbers
function maxOfThree(a, b, c) {
    if (a > b && a > c) return a
    else if (b > a && b > c) return b
    else if (c > a && c > b) return c
    else if (a === b && b === c) return 'Equal'
}
console.log(maxOfThree(4, 5, 4));
