//6 - Write a function to reverse an array without using the built-in reverse() method.
function reverseArray(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = arr[arr.length - 1 - i];
    }
    return newArray;
}
console.log(reverseArray([5, 4, 3, 2, 1]));
