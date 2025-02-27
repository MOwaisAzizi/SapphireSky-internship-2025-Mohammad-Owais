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
 

 //2-Write a function to find the sum of all elements in an array.
function sumOfArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
       sum += arr[i]
    }
    return sum
 }
 console.log(sumOfArray([3, 4, 5]));


 //3-How do you check if an array contains a specific element?
function isInArray(arr, element) {
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] === element) return true
    }
    return false
    //SECOND WAY
    // const isElementInArray = arr.includes(element)
    // return isElementInArray
 }
 console.log(isInArray([3, 4, 5, 6], 3));


 
//4-Write a function to count the occurrences of a specific element in an array.
function elementOccurrences(arr, el) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] === el) {
          count++
       }
    }
 
    return count
 }
 console.log(elementOccurrences([1, 2, 2, 3, 1, 2, 3, 1], 1));