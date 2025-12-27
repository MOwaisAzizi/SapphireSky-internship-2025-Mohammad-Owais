
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
