//14- find all permutations of a string
function getPermutations(str) {
    if (str === '') return ['']
    let result = []

    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        const remaining = str.slice(0, i) + str.slice(i + 1)
        const permutations = getPermutations(remaining)

        for (let perm of permutations) {
            result.push(char + perm) //abc
        }
    }
    return result
}

console.log(getPermutations('abc'));
