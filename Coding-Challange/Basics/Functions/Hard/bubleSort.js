
//14-Sorting an Array Using Bubble Sort
function bubbleSort(arr) {
    let temp
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
console.log(bubbleSort([8, 4, 5, 6, 1, 21, 1]));
