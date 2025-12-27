// 12- Implement a function to count the number of occurrences of each character in a string
function countCharacter(str) {
    const countMap = {}

    for (let i = 0; i < str.length; i++) {
        countMap[str[i]] = (countMap[str[i]] || 0) + 1;
    }
    return countMap
}
console.log(countCharacter('Hello World'));
