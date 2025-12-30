
//4-Count Vowels in a String
function countVowels(str) {
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']

    vowels.forEach((el) => {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === el.toUpperCase() || str[i] === el.toLowerCase()) count++
        }
    })
    return count
}
console.log(countVowels('hellow'));
