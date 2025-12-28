//11- who do you remove duplicate elements from an array
function removeDuplicateElements(arr) {
    let uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;

        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

console.log(removeDuplicateElements([2, 3, 2, 4, 3, 5]))
