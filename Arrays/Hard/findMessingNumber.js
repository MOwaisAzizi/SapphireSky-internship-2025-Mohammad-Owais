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
console.log(findMissingNumbers([1, 3, 2, 5, 6]));
