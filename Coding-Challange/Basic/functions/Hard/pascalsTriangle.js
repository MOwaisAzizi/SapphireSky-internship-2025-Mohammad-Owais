
//11-Generate Pascal’s Triangle
//      1
//     1 1
//    1 2 1
//   1 3 3 1
//  1 4 6 4 1

function pascalsTriangle(numRows) {
    const triangle = [];
    for (let row = 0; row < numRows; row++) {
        const newRow = new Array(row + 1).fill(1);

        for (let col = 1; col < row; col++) {
            newRow[col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
        }
        console.log(newRow.join(' '));
        triangle.push(newRow);
    }
    return triangle
}
pascalsTriangle(5);
