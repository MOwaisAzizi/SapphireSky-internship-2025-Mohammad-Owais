1-What is the difference between var, let, and const in JavaSipcrt?

const : is static container for variables like arrays or objects that is not going to reassign in the futures(we can not reassign it to another value). it is a block scope variable container(not accessible from outside the block)and it is the most common used container for variables.

let: is dynamic container for variables that is used for variables that might change or reassign in the future and it is a block scope variable container(it is not available outside of block).
you can reassign it to another value if you want.

var: is a global scope container for variables(if we use the same name variable for another var variable at the same file, we would get a syntext error). variables stored in these containers are accessible from anywhare and we can reassign variables that is stored in these containers.it is the most less used variable container.

2-Explain the difference between == and === in JavaScript.
 == check if a value is equals to another value without checking their data types(that means by using == operator '20' is equals to 20).
 === check if a value is equals to another value with checking their data types(that means by using === operator '20' is not equals to 20).