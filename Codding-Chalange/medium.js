//5-Given three sides of a triangle, check if they form a valid triangle. The sum of any two sides must be greater than the third.
 const checkIsValidTriangle = (right,left,bottom)=>{
    if(right+left > bottom && right+bottom > left && left + bottom > right){
        console.log('it is a triangle!');
    }else{
        console.log('it is not a triangle!');
    }
 }
   checkIsValidTriangle(10,20,15)

   //6-