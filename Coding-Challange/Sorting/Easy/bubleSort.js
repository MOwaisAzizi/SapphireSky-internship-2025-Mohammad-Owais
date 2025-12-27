//1-Implement the Bubble Sort algorithm.
function bubleSort(arr) {
    let isSwapped = false

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                isSwapped = true
            }
        }
        if (!isSwapped) break
    }
    return arr
}

//Testing
console.log(bubleSort([3, 4, 1]));
console.log(bubleSort([5, 1, 6, 2]));
