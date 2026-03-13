// 1- is stirng is palindrom?
function isPalindrom(str) {
    ////First Solution
    const arrString = []
    for (let i = 0; i <= str.length; i++) {
        arrString[i] = str[i]
    }
    arrString.reverse()
    const newString = arrString.join('')
    return newString === str

    //////Second Solution
    // let left = 0
    // let right = str.length-1
    // while(left < right){
    //     if(str[right] === str[left]) {
    //     left ++
    //     right --
    //     } 
    //     else return false
    // }
    //   return true
}

console.log(isPalindrom('wow'));