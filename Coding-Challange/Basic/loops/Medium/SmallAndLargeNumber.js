
//8-Find Largest and Smallest in a List
function findSmallAndLargeNumber(arr) {
    let small = arr[0]
    let large = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > large) large = arr[i]
        if (arr[i] < small) small = arr[i]
    }
    return [small, large]

}
console.log(findSmallAndLargeNumber([2, 3, 4, 5, 1, 4, 33, 1]))
