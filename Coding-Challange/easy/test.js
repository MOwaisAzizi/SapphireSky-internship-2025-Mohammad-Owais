
// Test Stack
const StackArray = require("./stackArray")
const StackList = require("./StackList");
const reverseString = require("../Miduim/ReverseString");

function testStackArray() {
    const stack = new StackArray();
    stack.push(10);
    stack.push(20);
    stack.push(30);

    console.log(stack.peek());
    console.log(stack.pop());
    console.log(stack.peek());

    console.log(stack.size());
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
    console.log(stack.peek());

    // Test popping elements
    console.log(stack.pop());
    console.log(stack.peek());
    console.log(stack.sizeOfList());

    // Test clearing the stack 
    stack.clear();
    console.log(stack.isEmpty());
}
// testStackList()



