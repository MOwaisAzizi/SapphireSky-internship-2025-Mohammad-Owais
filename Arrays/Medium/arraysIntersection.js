//10-Implement a function that finds the intersection of two arrays.
function arraysIntersection(arr1, arr2) {
    let newArr = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            newArr[i] = arr1[i]
        }
    }
    newArr = newArr.filter(() => true)
    return newArr
}
console.log(arraysIntersection([2, 3, 84, 5, , 21, 1], [3, 4, 1, 5, 5, 7]));
