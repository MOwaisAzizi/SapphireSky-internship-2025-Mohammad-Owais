//5- Write a function to check if a given number exists in a matrix.
function checkNumberInMatrix(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === target) return true;
        }
    }
    return false
}
const matrix = [
    [3, 4, 5],
    [6, 5, 3],
    [1, 2, 8],
]

console.log(checkNumberInMatrix(matrix, 2));
