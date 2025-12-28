//9-Write a function to find the second largest number in an array.
function secondLargest(arr) {
    let max = arr[0]
    let secondMax = arr[0]

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > max) max = arr[i]
        if (arr[i] > secondMax && arr[i] < max) secondMax = arr[i]

    }
    return [max, secondMax]
}
console.log(secondLargest([2, 6, 5, 4, 1, 3, 4, 5]));
