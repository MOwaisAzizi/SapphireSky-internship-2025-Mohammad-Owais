Discriptive Questions

1-What is the difference between var, let, and const in JavaSipcrt?

const : is static container for variables like arrays or objects that is not going to reassign in the futures(we can not reassign it to another value). it is a block scope variable container(not accessible from outside the block)and it is the most common used container for variables.

let: is dynamic container for variables that is used for variables that might change or reassign in the future and it is a block scope variable container(it is not available outside of block).
you can reassign it to another value if you want.

var: is a global scope container for variables(if we use the same name variable for another var variable at the same file, we would get a syntext error). variables stored in these containers are accessible from anywhare and we can reassign variables that is stored in these containers.it is the most less used variable container.

2-Explain the difference between == and === in JavaScript.

 == check if a value is equals to another value without checking their data types(that means by using == operator '20' is equals to 20).
 === check if a value is equals to another value with checking their data types(that means by using === operator '20' is not equals to 20).

 7-How does this keyword work in JavaScript? Provide an example.

 this keyword have different meaning depending on where we use it and how?
 this keyword in an object method points to current object,in arrow functions it is not definded so we will get in error,in regular methods it points to object window, in the body of our file(alone) also points to window objects and in an event handling function it points to HTML emelent that receive the event.

Example:

 const obj1 = {
    name:'Ahmad'
    callName:function(){
        console.log(`Hello ${this.name}`)
    }
 }

 8-Explain the concept of hoisting in JavaScript.
 
 Hoisting in JavaScript means that you have access to variable that is not defined yet, but defined below of where you used the variable.
 variables stored in var is hoisted and we get undefined but not an error.
 variable stored in let and const is not hoisted and we get an error if we use them before initializing them.
 regular functions are hoisted but not arrow functions.

5-What are JavaScript closures? Provide an example.

A closure in JavaScript is a feature that allows a function to access variables from its outer  scope even after that scope has finished executing. in the following example the inner function has access to outvariable event after we called the outerfunction before.

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log("Outer Variable: " + outerVariable);
        console.log("Inner Variable: " + innerVariable);
    };
}
const closure = outerFunction("Hi! I am from outer scope");
closure("Hi! I am from inner scope");

