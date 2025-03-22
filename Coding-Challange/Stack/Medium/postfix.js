// 8-Write a function to evaluate a postfix expression using a stack.

const StackArray = require("../Easy/StackArray");

function evaluatePostfix(arr){
   let stackArray = new StackArray()

   for (let element of arr){
    if(!isNaN(element)){
        stackArray.push(element)
    }else{
        let num1 = stackArray.pop()
        let num2 = stackArray.pop()

        switch(element){
          case '+' : stackArray.push(num1 + num2)
           break
           case '-' : stackArray.push(num1 - num2)
           break
           case '*' : stackArray.push(num1 * num2)
           break
           case '/' : stackArray.push(num1 / num2)
           break
        }
    }
   }
   return stackArray.pop()
}

//testing
console.log(evaluatePostfix([2,3,'+',3,'-']));
console.log(evaluatePostfix([2,3,'+',5,'*']));
