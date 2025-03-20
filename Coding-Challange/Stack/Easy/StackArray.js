// 2-Implement a stack using an array in JavaScript.

class StackArray {
  constructor() {
    this.stack = [];
    this.top = -1
  }

  // Push elements
  push(element) {
    this.top++
    this.stack[this.top] = element
  }

  // Pop element from the stack
  pop() {
    if (this.top === -1) {
      return "Stack is empty";
    }
    const removedElement = this.stack[this.top];
    this.top--;

    return removedElement;
  }

  // Peek the top element of the stack
  peek() {
    if (this.isEmpty()) {
      console.log('Stack is Empty');

    }

    return this.stack[this.top];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.top === -1
  }

  // Get the size of the stack
  size() {
    return this.top + 1
  }

  // Clear the stack
  clear() {
    this.stack = [];
    this.top = -1
  }
}
module.exports = StackArray

//Test
function testStackArray() {
  const stack = new StackArray();
  //test push elements
  stack.push(10);//10
  stack.push(20);//20
  stack.push(30);//30

  //test peek of elements
  console.log(stack.peek()); //30
  console.log(stack.pop()); //30
  console.log(stack.peek()); //20

  console.log(stack.size());//2
  stack.clear();// {}
  console.log(stack.isEmpty());//true
}
// testStackArray()