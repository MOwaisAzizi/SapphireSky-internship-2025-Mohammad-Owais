//5-Implement a function to find the smallest number in an array.
function smallestElement(arr) {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[0]) min = arr[i]
    }
    return min
}
console.log(smallestElement([1, 2, 3, 4, 2, 5]));

