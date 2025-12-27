//7- check if two strings are anagram
function isAnagram(str1, str2) {
    // first solution
    // let arrayString = str1.split('').sort().join('')
    // let newarrayString = str2.split('').sort().join('')
    // return arrayString === newarrayString

    //second solution
    if (str1.length !== str2.length) return false
    let isleterExistsInString = false
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) isleterExistsInString = true
        }
        if (!isleterExistsInString) return false
    }
    return isleterExistsInString
}
console.log(isAnagram('Woo', 'oWo'));
