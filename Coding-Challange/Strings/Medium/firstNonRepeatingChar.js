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
