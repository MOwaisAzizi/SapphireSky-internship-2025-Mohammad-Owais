//7-Write a function to perform Counting Sort.
function countSort(arr) {
    console.log(arr);

    let maxSize = maxEl(arr)
    let countArray = new Array(maxSize + 1).fill(0);
    arr.forEach(element => {
        countArray[element]++
    })

    let k = 0
    for (let i = 0; i < countArray.length; i++) {
        for (let j = 0; j < countArray[i]; j++) {
            arr[k] = i
            k++
        }
    }
}

function maxEl(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i]
    }
    return max
}
module.exports = countSort

//Testing
let arr = [1, 6, 1, 5, 2, 4]
countSort(arr)
console.log(arr);
