// 15- Write a function to find the smallest missing positive integer using sorting.
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
            smallestMissing = arr[i]
            smallestMissing ++;
            if(smallestMissing !== arr[i+1] && smallestMissing % 2 === 0) return smallestMissing;
        }

        return 'No missing number' 
}
console.log(missingPossitiveNumber([-3,-2,-1,1,2]));
