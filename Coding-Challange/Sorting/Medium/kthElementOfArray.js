const countSort = require('./countSort')
//5- Implement a function to find the Kth largest element in an array using sorting.
function kthElementOfArray(arr, k) {
    countSort(arr)
    return arr[k - 1]
}
//Test
console.log(kthElementOfArray(([2, 3, 1, 5, 8, 1]), 3));
