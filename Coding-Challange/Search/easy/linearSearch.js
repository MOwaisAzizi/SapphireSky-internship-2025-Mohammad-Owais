//1- Implement Linear Search on an array.
const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i
    }

    return -1;
};

console.log(linearSearch([1, 2, 3, 4, 5], 3));
console.log(linearSearch([1, 3, 10, 55, 130, 5000, 33333], 55));