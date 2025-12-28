
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

