// 10- Write a function to check if a string contains only unique characters.
function hasUniqueChars(str) {
    let arrayString = str.split('')
    let isUnique = true

    for (let i = 0; i < str.length; i++) {
        if (arrayString[i] === ' ') continue

        for (let j = i; j < str.length; j++) {
            if (i !== j && j !== ' ' && arrayString[i] === arrayString[j]) return isUnique = false
        }
    }
    return isUnique
}
console.log(hasUniqueChars('Hi World'));
