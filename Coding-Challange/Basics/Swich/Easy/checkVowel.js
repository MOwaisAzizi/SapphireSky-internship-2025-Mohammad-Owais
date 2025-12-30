//5-Check for Vowel or Consonant
function checkVowel(leter) {
    if (typeof leter !== 'string') return 'Please Enter a String!'
    leter = leter.toLocaleLowerCase()

    switch (leter) {
        case `${'a' || 'e' || 'i' || 'o' || 'u'}`: return 'Vowel Leter'
        default: return 'Consonant Leter'
    }
}
console.log(checkVowel('a'))
