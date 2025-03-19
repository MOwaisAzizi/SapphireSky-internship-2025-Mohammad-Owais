// Implement a stack using an array in JavaScript.

class Stack {
    constructor() {
      this.stackArray = [];
      this.top = -1
    }
  
    // Push elements
    push(element) {
        this.top ++ 
        this.items[top] = element
    }
  
    // Pop element from the stack
    pop() {
      if(top >= 1){
          this.top --
          return this.stackArray[this.top]
      }
      return 'Stack is Empty'
    }
  
    // Peek the top element of the stack
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    size() {
      return this.items.length;
    }
  
    // Clear the stack
    clear() {
      this.items = [];
    }
  }
  
  module.exports = Stack

