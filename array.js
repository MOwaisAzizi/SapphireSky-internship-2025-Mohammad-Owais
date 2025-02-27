////////DATA STRUCTURE
////// ARRAY PART

////EASY

// 1- Write a function to find the largest element in an array.
function largestElement(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] > max) max = arr[i]
    }
    return max
 }
 console.log(largestElement([1, 2, 3, 6, 3, 2]));
 