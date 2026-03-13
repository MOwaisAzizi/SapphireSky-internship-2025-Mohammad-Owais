//3-How do you check if an array contains a specific element?
function isInArray(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) return true
    }
    return false
}

console.log(isInArray([3, 4, 5, 6], 3));
