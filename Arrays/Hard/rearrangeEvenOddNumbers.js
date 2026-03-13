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



