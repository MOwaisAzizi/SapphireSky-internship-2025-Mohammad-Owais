// 2- Implement Binary Search on a sorted array.

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] === target) return mid;
        else if(arr[mid] > target) right = mid - 1;
        else if(arr[mid] < target) left = mid + 1
    }
     return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 7));
console.log(binarySearch([10,31,44,55,66,77,88,96], 96));
