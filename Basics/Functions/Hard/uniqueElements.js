
//15-Find Unique Elements in an Array
function uniqueElements(arr) {
    let arrObj = {}
    let tempArray = []
    for (let i = 0; i < arr.length; i++) {
        if (!arrObj[arr[i]]) {
            arrObj[i] = arr[i]
            tempArray.push(arr[i])
        }
    }
    return tempArray
}
console.log(uniqueElements([1, 8, 2, 3, 4, 2, 1, 2]));

