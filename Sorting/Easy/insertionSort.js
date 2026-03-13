//-3 Implement the Insertion Sort algorithm
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]
        let j = i - 1

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--
        }
        arr[j + 1] = key;
    }

    return arr
}

//Testing
console.log(insertionSort([2, 4, 1, 5, 6]))
console.log(insertionSort([2, 1, 7, 3, 4]))
