////Stirng part

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
    
   ////Second Solution

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

    
    // 2- count vowels in a string
    function countVowels(str){
        const vowels = ['a', 'e', 'i', 'o', 'u']
        let count = 0
        for(let i = 0; i<str.length; i++){
            if(vowels.includes(str[i].toLowerCase())) count ++
        }
        return count
    }
    console.log(countVowels('Hello World'));
    