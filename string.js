////Stirng part

///EASY PART

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
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) count++
    }
    return count
}
console.log(countVowels('Hello World'));



// 3- write a function to reverse string
function reverseString(str) {
    let strArray = []
    for (let i = str.length; i >= 0; i--) {
        strArray.push(str[i])
    }
    return strArray.join('')
}
console.log(reverseString('Hello world'));


//4- remove spaces from string
function removeSpace(str){
  let newString = ''
  for (let i = 0; i < str.length; i++) {
      if(str[i] === ' ') newString = newString
      else newString += str[i]
  }
  return newString
}
console.log(removeSpace('He llo wo r ld'));


//5- Capitalize the first leter of each word in a string
function capitalizeWord(str){
    let stringArray = str.split(' ')
    const capitalizedArray = stringArray.map(str=>str[0].toUpperCase() + str.slice(1))
    const capitalizedString = capitalizedArray.join(' ')
    return capitalizedString
 }
console.log(capitalizeWord('hello world and wellcome'));



////Midium

//6-How can you find the frist non-repeating character in a string
function findNonRepeatCharacter(str) {
    const stringArray = str.split('');

    for (let i = 0; i < stringArray.length; i++) {
        let isUnique = true;
        
        for (let j = 0; j < stringArray.length; j++) {
            if (i !== j && stringArray[i] === stringArray[j]) {
                isUnique = false;
                break;
            }
        }

        if (isUnique) {
            return stringArray[i];
        }
    }
    return null;
}
console.log(findNonRepeatCharacter('HelloobHe')); 


//7- check if two strings are anagram
function isAnagram(str){

}