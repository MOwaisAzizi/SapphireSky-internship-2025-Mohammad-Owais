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

  testing(){
    console.log('testing');
    
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
      return "Stack is empty";
    }
    console.log('pecking');

    return this.stack[this.top];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.stack.length;
  }

  // Clear the stack
  clear() {
    this.stack = [];
  }
}

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
    console.log(stack.sizeOfList());//2

    // Test clearing the stack 
    stack.clear();//[]
    console.log(stack.isEmpty());//true

