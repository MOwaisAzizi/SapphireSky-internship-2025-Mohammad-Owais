//4-Write a function to count the occurrences of a specific element in an array.
function elementOccurrences(arr, el) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            count++
        }
    }
    return count
}
console.log(elementOccurrences([1, 2, 2, 3, 1, 2, 3, 1], 1));
