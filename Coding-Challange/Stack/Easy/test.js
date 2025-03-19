
// Test Stack
const StackArray = require('./StackArray')
const StackList = require("./StackList");
const stringHasBalancedParantheses = require('./stringHasBalancedParantheses');

function testStackArray() {
    const stack = new StackArray();
    stack.push(10);
    stack.push(20);
    stack.push(30);

    console.log(stack.peek()); //30
    console.log(stack.pop()); //30
    console.log(stack.peek()); //20

    console.log(stack.size());//2
    stack.clear();
    console.log(stack.isEmpty());

}
// testStackArray()


//Test Stack List
function testStackList() {
    const stack = new StackList();

    // Test pushing elements
    stack.push(10);
    stack.push(20);
    stack.push(30);

    // Test peek
    console.log(stack.peek()); //30

    // Test popping elements
    console.log(stack.pop()); //30
    console.log(stack.peek()); //20
    console.log(stack.sizeOfList());

    // Test clearing the stack 
    stack.clear();
    console.log(stack.isEmpty());
}
// testStackList()

//test parantheses
function testParantheses(){
    console.log(stringHasBalancedParantheses("(())"));  // true
    console.log(stringHasBalancedParantheses("(()"));   // false
    console.log(stringHasBalancedParantheses("())"));   // false
    console.log(stringHasBalancedParantheses("()()"));  // true
}
testParantheses()

