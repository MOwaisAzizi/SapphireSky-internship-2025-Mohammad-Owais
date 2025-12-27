//5- Implement a function to find the Kth largest element in an array using sorting.
function kthElementOfArray(arr, k) {
  const sortedArr = arr.slice().sort((a, b) => b - a);
  return sortedArr[k - 1]
}
//Test
console.log(kthElementOfArray(([2, 3, 1, 5, 8, 1]), 3));
