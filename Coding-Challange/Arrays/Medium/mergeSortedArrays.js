//7- How do you merge two sorted arrays into one sorted array?
function mergeSortedArray(sortedArr1, sortedArr2) {
    let mergedArrays = [...sortedArr1, ...sortedArr2]

    for (let i = 0; i < mergedArrays.length; i++) {

        for (let j = i; j <= mergedArrays.length; j++) {
            if (mergedArrays[j] > mergedArrays[j + 1]) {
                [mergedArrays[j], mergedArrays[j + 1]] = [mergedArrays[j + 1], mergedArrays[j]]
            }
        }
    }
    return mergedArrays
}
console.log(mergeSortedArray([1, 3, 5], [2, 4, 6]));//1,2,3,4,5,6
