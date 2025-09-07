// How do you sort an array of strings based on their lengths?
const sortStringByLengthOrder = (stringArr) => {
     for(let i = 0; i < stringArr.length-1; i++){
       for(let j = 0; j< stringArr.length-1; j++){
          const aLen = stringArr[j].length;
          const bLen = stringArr[j + 1].length;

          if(aLen > bLen){
            const temp = stringArr[j];
            stringArr[j] = stringArr[j+1];
            stringArr[j+1] = temp;
          }
       }
     }
     return stringArr

    //build in function
    // return stringArr.sort((a,b) => a.length - b.length)
}
console.log(sortStringByLengthOrder(['book', 'pen', 'phone']));
