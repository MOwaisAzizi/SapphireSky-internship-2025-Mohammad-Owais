//5- Capitalize the first leter of each word in a string
function capitalizeWords(str) {
    let arrayString = str.split(' ')
    const capitalizedArray = arrayString.map(str => str[0].toUpperCase() + str.slice(1))
    const capitalizedString = capitalizedArray.join(' ')
    return capitalizedString
}
console.log(capitalizeWords('hello world and wellcome'));
