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


 //5-Implement a function to find the smallest number in an array.
function smallestElement(arr) {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] < arr[0]) min = arr[i]
    }
    return min
 }
 console.log(smallestElement([1, 2, 3, 4, 2, 5]));


 
////MIDIUM

//6 - Write a function to reverse an array without using the built-in reverse() method
function reverseArray(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
       newArray[i] = arr[arr.length - 1 - i];
    }
    return newArray;
 }
 console.log(reverseArray([5, 4, 3, 2, 1]));
 

 //7-How do you merge two sorted arrays into one sorted array?
function sortedArray(sortedArr1, sortedArr2) {
    let mergedArrays = [...sortedArr1, ...sortedArr2]
 
    let newSortedArray = []
    for (let i = 0; i < mergedArrays.length; i++) {
       newSortedArray[i] = mergedArrays[i]
    }
    return newSortedArray
 }
 console.log(sortedArray([1, 2, 3], [4, 5, 6]));