// 10-Implement Ternary Search.
function ternarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let mid1;
    let mid2;
    while (left <= right) {
        mid1 = left + Math.floor((right - left) / 3)
        mid2 = right - Math.floor((right - left) / 3)

        if (arr[mid1] === target) return mid1;
        if (arr[mid2] === target) return mid2;

        if (arr[mid1] < target && arr[mid2] > target) {
            right = mid2 - 1
            left = mid1 + 1
        }

        if (target > arr[mid2]) left = mid2 + 1
        if (target < arr[mid1]) right = mid1 - 1

    }
    return -1
}
console.log(ternarySearch([2, 3, 66, 77, 88, 99], 88));
console.log(ternarySearch([2, 3, 66, 77, 88, 99], 66));