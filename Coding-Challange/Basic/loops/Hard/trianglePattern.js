
//14-Pattern Printing - Pyramid
//    *  
//   ***  
//  *****  
// *******  
function startTrianglePattern(n) {
    for (let i = 1; i < n; i++) {
        let stars = ''

        for (let s = i; s < n - 1; s++) {
            stars += ' '
        }

        for (let j = 1; j <= i; j++) {
            i === j ? stars += '*' : stars += '**'
        }
        console.log(stars);
    }
}
startTrianglePattern(10)
