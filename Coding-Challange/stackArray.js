// 2-Implement a stack using an array in JavaScript.

class StackArray {
  constructor() {
    this.stackArray = [];
    this.top = -1
  }

  // Push elements
  push(element) {
    this.top++
    this.stackArray[this.top] = element
  }

  // Pop element from the stack
  pop() {
    if (this.top === -1) {
      return "Stack is empty";
    }
    const removedElement = this.stackArray[this.top];
    this.top--;

    return removedElement;
  }

  // Peek the top element of the stack
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    console.log('pecking');

    return this.stackArray[this.top];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stackArray.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.stackArray.length;
  }

  // Clear the stack
  clear() {
    this.stackArray = [];
  }
}

module.exports = StackArray

