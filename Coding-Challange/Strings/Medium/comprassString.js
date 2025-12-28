//8-Implement a function to compress a string using character counts ("aabcccccaaa" → "a2b1c5a3").
function compressString(str) {
    let count = 1
    let compressd = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;

        } else {
            compressd += str[i] + (count > 1 ? count : '')
            count = 1
        }
    }
    return compressd
}
console.log(compressString('aaabcdee'));
