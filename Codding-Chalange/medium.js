//5-Given three sides of a triangle, check if they form a valid triangle. The sum of any two sides must be greater than the third.
 const checkIsValidTriangle = (right,left,bottom)=>{
    if(right+left > bottom && right+bottom > left && left + bottom > right){
        console.log('it is a triangle!');
    }else{
        console.log('it is not a triangle!');
    }
 }
   checkIsValidTriangle(10,20,15)

   //6-Speeding Ticket Calculator
//    Speed limit = 60 km/h.
//    If a driver goes above the speed limit, they get a fine.
//    If they are driving over 100 km/h, they get double the fine.
//    Implement a program that takes speed as input and determines the fine.
   
   const speedingTicketCalculator = speed =>{
      let fine = 0
      if(speed > 60 && speed <= 100 ) return `You Got ${++fine} fine`
      else if( speed > 100 ) return `You got ${fine+=2} fines`
      else return 'You have got no fine'
   }
   console.log(speedingTicketCalculator(90));
   console.log(speedingTicketCalculator(120));
   console.log(speedingTicketCalculator(12));
   