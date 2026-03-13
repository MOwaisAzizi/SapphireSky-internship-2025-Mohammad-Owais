
//12-Binary Search Algorithm
function binarySearch(arr, target) {
    let first = 0
    let last = arr.length - 1
    let mid
    while (first <= last) {
        mid = Math.floor((first + last) / 2)
        if (arr[mid] === target) return mid
        else if (arr[mid] > target) last = mid - 1
        else if (arr[mid] < target) first = mid + 1
    }
    return -1
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, , 7, 8], 2));
