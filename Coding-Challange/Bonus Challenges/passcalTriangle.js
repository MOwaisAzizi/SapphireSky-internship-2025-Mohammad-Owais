
//2-Pascal’s Triangle
// Generate Pascal’s Triangle up to N rows.
function pascalsTriangle(rows) {
    let triangle = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j <= i; j++) {
            row.push(factorial(i) / (factorial(j) * factorial(i - j)));
        }
        triangle.push(row);
    }
    printPascalsTriangle(triangle, rows);
}
function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}
function printPascalsTriangle(triangle, rows) {
    let maxLength = triangle[rows - 1].join(" ").length;
    for (let row of triangle) {
        let rowString = row.join(" ");
        let spaces = " ".repeat((maxLength - rowString.length) / 2);
        console.log(spaces + rowString);
    }
}
PascalsTriangle(10);

