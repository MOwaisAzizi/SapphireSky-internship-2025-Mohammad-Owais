//4-remove spaces from string
function removeSpaces(string) {
    let newString = ''
    for (let i = 0; i < str.length; i++) {
        if(string[i] !== ' ') newString += str[i]
    }
    return newString
}
console.log(removeSpaces('He llo wo r ld'));
