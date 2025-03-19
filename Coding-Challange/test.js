
// Test Stack
import Stack from "./Stack";

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); 
console.log(stack.pop()); 
console.log(stack.peek()); 
console.log(stack.size());
stack.clear();
console.log(stack.isEmpty()); 
