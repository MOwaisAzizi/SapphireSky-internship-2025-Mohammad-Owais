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



////MIDIUM SECTION

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

    for (let i = 0; i < mergedArrays.length; i++) {

        for (let j = i; j <= mergedArrays.length; j++) {
            if (mergedArrays[j] > mergedArrays[j + 1]) {
                [mergedArrays[j], mergedArrays[j + 1]] = [mergedArrays[j + 1], mergedArrays[j]]
            }
        }
    }
    return mergedArrays
}
console.log(sortedArray([1, 3, 5], [2, 4, 6]));//1,2,3,4,5,6


//8-Implement a function that rotates an array k times to the right.
function rotateArray(arr, k) {
    arr = arr.reverse()
    let temp1 = []
    let temp2 = []
    for (let i = 0; i < k; i++) {
        temp2[i] = arr[i]
    }

    for (let j = k; j < arr.length; j++) {
        temp1[j - k] = arr[j]
    }

    temp2.reverse()
    temp1.reverse()
    arr = [...temp2, ...temp1]

    return arr
}
console.log(rotateArray([1, 2, 3, 4, 5], 2));



//9-Write a function to find the second largest number in an array.
function secondLargest(arr) {
    let max = arr[0]
    let secondMax = arr[0]

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > max) max = arr[i]
        if (arr[i] > secondMax && arr[i] < max) secondMax = arr[i]

    }
    return [max, secondMax]
}
console.log(secondLargest([2, 6, 5, 4, 1, 3, 4, 5]));


//10-Implement a function that finds the intersection of two arrays.
function intersectionArrays(arr1, arr2) {
    let newArr = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            newArr[i] = arr1[i]
        }
    }
    newArr = newArr.filter(() => true)
    return newArr
}
console.log(intersectionArrays([2, 3, 84, 5, , 21, 1], [3, 4, 1, 5, 5, 7]));


////HARD SECTION

//11- who do you remove duplicate elements from an array?
function removeDuplicateElements(arr) {
    let uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false; 

        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true; 
                break;
            }
        }

        if (!isDuplicate) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

console.log(removeDuplicateElements([2, 3, 2, 4, 3, 5]))



//12-write a function to find the missing number from 1 to N
function findMissingNumbers(arr) {
    let max = arr[0]
    let sumOfArray = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i]
        sumOfArray += arr[i]
    }
    
    let sumOfOneToN = 0
    for (let i = 1; i <= max; i++) {
      sumOfOneToN += i   
    }

    const missingNumber = sumOfOneToN - sumOfArray

    return missingNumber
 }
console.log(findMissingNumbers([1,3,2,5,6]));



//13- who do you check if two arrays are equal
function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false
    
    arr1.sort()
    arr2.sort()

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false
    }
    return true
}
console.log(areArraysEqual([1, 2, 3], [2,1,3]));



//14- implement a function to find the subarray with the maximum sum(Kadane's Algorithm)
 function maxSubarraySum(arr) {
    let maxSum = -Infinity;
    let currentSum = 0;

    for (let num of arr) {
        currentSum += num;
        maxSum = Math.max(maxSum, currentSum);
        
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
}
console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); 
 



//15- write a function to rearange a the array such that even numbers appears before odd numbers
function rearrangeEvenOdd(arr) {
    const subArrayEven = []
    const subArrayOdd = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) subArrayEven.push(arr[i])
        else if (arr[i] % 2 !== 0) subArrayOdd.push(arr[i])
    }
    arr = [...subArrayEven, ...subArrayOdd]
    return arr
}
console.log(rearrangeEvenOdd([1, 2, 3, 4, 5, 6, 7, 8]));





