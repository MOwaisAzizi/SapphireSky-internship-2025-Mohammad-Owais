//2- How does Selection Sort work? Implement it.

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {

        let min_idx = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;
    }
    return arr
}

//Test
console.log(selectionSort([5, 1, 3, 7]));
console.log(selectionSort([8, 1, 3, 1]));
