//7-Implement Quick Sort and explain how pivot selection affects performance.

function sort(arr, start, end) {
    if (start >= end) return;  
    
    const boundary = partition(arr, start, end);
    sort(arr, start, boundary - 1);
    sort(arr, boundary + 1, end);
  }
  
  function partition(arr, start, end) {
      let boundary = start - 1;
      let pivot = arr[end];
      
      for (let i = start; i < end; i++) {
         if (arr[i] <= pivot) {
              boundary++;
              [arr[boundary], arr[i]] = [arr[i], arr[boundary]];
         }
      }
  
      [arr[boundary + 1], arr[end]] = [arr[end], arr[boundary + 1]];
      
      return boundary + 1;  
  }
  

const array = [15,3,1,22,10,13]
sort(array,0,5)
console.log(array);


