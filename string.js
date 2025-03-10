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
    let arrayString = []
    for (let i = str.length; i >= 0; i--) {
        arrayString.push(str[i])
    }
    return arrayString.join('')
}
console.log(reverseString('Hello world'));



//4- remove spaces from string
function removeSpace(str) {
    let newString = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') newString = newString
        else newString += str[i]
    }
    return newString
}
console.log(removeSpace('He llo wo r ld'));


//5- Capitalize the first leter of each word in a string
function capitalizeWord(str) {
    let arrayString = str.split(' ')
    const capitalizedArray = arrayString.map(str => str[0].toUpperCase() + str.slice(1))
    const capitalizedString = capitalizedArray.join(' ')
    return capitalizedString
}
console.log(capitalizeWord('hello world and wellcome'));



////Midium

//6-How can you find the frist non-repeating character in a string
function findFirstNonRepeatCharacter(str) {
    const arrayString = str.split('');

    for (let i = 0; i < arrayString.length; i++) {
        let isUnique = true;

        for (let j = 0; j < arrayString.length; j++) {
            if (i !== j && arrayString[i] === arrayString[j]) {
                isUnique = false;
                break;
            }
        }

        if (isUnique) {
            return arrayString[i];
        }
    }
    return null;
}
console.log(findFirstNonRepeatCharacter('HelloobHe'));



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



//9- How do you check if two strings are rotate of one another
function isRotate(str1, str2) {
    if (str1.length !== str2.length) return false;
    const mergedStrings = str1 + str1; 
    return mergedStrings.includes(str2);
}
console.log(isRotate('water', 'erwat'));



// 10- Write a function to check if a string contains only unique characters.
function isUniqueCharacters(str) {
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
console.log(isUniqueCharacters('Hi World'));



//11-Implement a function to find the longest palindrome substring in a string.
function longestPalindrome(str) {
    if (!str || str.length < 1) return "";
    let start = 0, end = 0;
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }
    for (let i = 0; i < str.length; i++) {
        let len1 = expandAroundCenter(i, i);
        let len2 = expandAroundCenter(i, i + 1); 
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return str.substring(start, end + 1);
}

console.log(longestPalindrome("babad")); // outPut: "bab" or "aba"



//14-find all permutations of a string
function getPermutations(str){
  if(str === '') return ['']
  let result = []

   for (let i=0; i<str.length; i++) {
     const char = str[i]
     const remaining = str.slice(0,i) + str.slice(i+1)
     const permutations = getPermutations(remaining)
    
    for(let perm of permutations){
        result.push(char + perm)//abc
        console.log(result);

    }
   }
   return result
}

console.log(getPermutations('abc'));



// 13- Implement a function to count the number of occurrences of each character in a string
 function countCharacter(str){
    const countMap = {}

    for (let i = 0; i < str.length; i++) { 
    countMap[str[i]] = (countMap[str[i]] || 0) + 1;   
    }
    return countMap
 }
console.log(countCharacter('Hello World'));
