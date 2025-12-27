//4-remove spaces from string
function removeSpace(str) {
    let newString = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') newString = newString
        else newString += str[i]
    }
    return newString
}
console.log(removeSpace('He llo wo r ld'));
