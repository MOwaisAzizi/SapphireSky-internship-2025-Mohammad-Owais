// Write a function to find the smallest missing positive integer using sorting.
const missingPossitiveNumber = (arr) => {
    for(let i = 0; i <arr.length-1; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
         if(arr[j] > arr[j+1] ){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
         }
        }
    }

    let smallestMissing = 1;
        for(let i = 0; i <arr.length; i++){
            if (arr[i] === smallestMissing){
                smallestMissing ++;
            }
        }

    return smallestMissing
}
console.log(missingPossitiveNumber([4,1,5,2,-1,6]));
