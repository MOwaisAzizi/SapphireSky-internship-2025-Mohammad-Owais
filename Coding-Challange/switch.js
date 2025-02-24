
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

   
   //3-Traffic Light System
  function trafficLightController(color){
    if(typeof color !== 'string') return 'We expected an String!'
    color = color.toLocaleLowerCase()
    switch (color) {
        case 'red' : return 'Stop'
        case 'green': return 'Go...'
        case 'yellow': return 'Slow down'
        default: return 'Not Valid Color! [red,green,yellow]'
       }
    }
    console.log(trafficLightController('Red'));
  

   //4-Month Name and Days
    function getMonthName(number) {
        if(typeof number !== 'number') return 'Please Enter a Number!'

        switch (number) {
            case 1: return 'January';
            case 2: return 'February';
            case 3: return 'March';
            case 4: return 'April';
            case 5: return 'May';
            case 6: return 'June';
            case 7: return 'July';
            case 8: return 'August';
            case 9: return 'September';
            case 10: return 'October';
            case 11: return 'November';
            case 12: return 'December';
            default: return 'Invalid month number [1-12]';
        }
    }
    console.log(getMonthName(2)); 

    
   //5-Check for Vowel or Consonant
   function  checkVowelConsonant(leter){
    if(typeof leter !== 'string') return 'Please Enter a String!'
    leter = leter.toLocaleLowerCase()

    switch(leter){
        case `${'a' || 'e' || 'i'|| 'o'|| 'u'}` : return 'Vowel Leter'
        default: return 'Consonant Leter'
    }
   }
   console.log(checkVowelConsonant('a'))


