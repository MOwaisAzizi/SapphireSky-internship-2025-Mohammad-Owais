//4- Write a function to find the first occurrence of an element in a sorted array
function farstAccuranceElement(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      result = mid;
      right = mid - 1
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result
}
const sortedArray = [1, 2, 2, 4, 4, 9, 22, 56];
console.log(farstAccuranceElement(sortedArray, 4));
