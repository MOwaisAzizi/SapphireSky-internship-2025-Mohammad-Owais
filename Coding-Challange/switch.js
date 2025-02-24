
//1-Day of the Week
function getDayOfWeek(number){
if(typeof number !== 'number') return 'Input Should be a Number!'

switch(number){
    case 1: return 'Sunday'  
    case 2: return 'Monday'  
    case 3:  return 'Tuesday' 
    case 4: return 'Wednesday' 
    case 5: return 'Thursday' 
    case 6: return 'Saturday' 
    case 7: return 'Sunday' 
    default: return 'Not Valid Day Number! [1-7]'
}
}
console.log(getDayOfWeek(4));


//2-Simple Calculator
function calculator(num1,num2,operator){
    if(typeof num1 !== 'number' || typeof num2 !== 'number') return 'Inputs Should be Number!'

    switch (operator) {
        case '+' : return num1 + num2
        case '-' : return num1 - num2
        case '*' : return num1 * num2
        case '/' : return num1 + num2
        default : return 'Not valid Operator! [+,-,*,/]'
    }
 }
   console.log(calculator(4, 5, '*'))

   