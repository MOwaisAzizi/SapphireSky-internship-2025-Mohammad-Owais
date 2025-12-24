//1-How does Interpolation Search work? Implement it.
function interpolationSearch(arr, target){
 let left = 0;
 let right = arr.length - 1;
 
  while (left <= right && target >= arr[left] && target <= arr[right]) {
        if (arr[left] === arr[right]) {
      if (arr[left] === target) return left;
      else break;
    }

    position = Math.floor(left + ((target - arr[left]) * (right - left)) / (arr[right] - arr[left]));
    if(arr[position] === target){
        return position;
    }
    if(arr[position] > target){
        right = position - 1;
    } else {
        left = position + 1
    }
 }
 return -1
}

const arr = [10,60];
console.log(interpolationSearch(arr, 60));
