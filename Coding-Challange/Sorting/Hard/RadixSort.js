//implement radixSort
const findMaxDigits = (arr) => {
    let max = arr[0]
    for(let number of arr){
        if(number > max) max = number
    }
    const numberOfDigits = Math.floor(Math.log10(max)) + 1;
    return numberOfDigits
}

const getDigit = (num, position) => {
    return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
}

sortArrayBySingleDigit = (arr, digitPosition) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const currentDigit = getDigit(arr[i], digitPosition);
      const compareDigit = getDigit(arr[j], digitPosition);

      if (currentDigit > compareDigit) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};


function radixSort(arr){
    const maxLength = findMaxDigits(arr);
    
    for(let i = 0; i < maxLength; i++){
        arr = sortArrayBySingleDigit(arr, i);
    }
    return arr;
}

console.log(radixSort([23,8,222, 41, 78, 131]));
console.log(radixSort([2,5,1,7]));
