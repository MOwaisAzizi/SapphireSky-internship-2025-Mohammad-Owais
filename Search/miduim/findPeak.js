//1- Implement a function to find the peak element in an array.
function findPeakElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > [i + 1]) {
            return arr[i]
        }
    }
    return -1
}
const arr = [1, 2, 7, 4, 5];
console.log(findPeakElement(arr));
