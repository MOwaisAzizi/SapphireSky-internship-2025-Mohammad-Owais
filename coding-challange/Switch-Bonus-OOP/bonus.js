////// Bonus Challenge: Nested Loops

// 1-Print Prime Numbers from 1 to 100
function printPrimeNumbers() {
    for (let i = 2; i <= 100; i++) { 
        let isPrime = true; 
        for (let j = 2; j <= Math.sqrt(i); j++) { 
            if (i % j === 0) { 
                isPrime = false; 
                break; 
            }
        }
        if (isPrime) {
            console.log(i); 
        }
    }
}
printPrimeNumbers();



//2-Pascal’s Triangle
// Generate Pascal’s Triangle up to N rows.
function PascalsTriangle(rows) {
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
 


//3-Matrix Multiplication
// Given two matrices, multiply them using nested loops.
function multiplyMatrices(A, B) {
    let m = A.length, n = A[0].length, p = B[0].length;
    if (n !== B.length) return 'Matrices can not be multiply'

    let C = new Array(m).fill(0).map(() => new Array(p).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < p; j++) {
            for (let k = 0; k < n; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return C;
}

let A = [
    [1, 2, 3],
    [4, 5, 6]
]

let B = [
    [7, 8],
    [9, 10],
    [11, 12]
]
console.log(multiplyMatrices(A, B));
