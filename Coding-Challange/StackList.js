const Node = require('./Node')

// 3-How do you implement a stack using a linked list?
class StackList {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // Push an element onto the stack
  push(data) {
    const newNode = new Node(data);
    if (this.top) {
      newNode.next = this.top;
    }
    this.top = newNode;
    this.size++;
  }

  // Pop an element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }

    const poppedElement = this.top.data;
    this.top = this.top.next;
    this.size--;
    return poppedElement;
  }

  // Peek at the top element of the stack
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";  // If the stack is empty, return a message
    }
    return this.top.data;  // Return the data from the top node
  }

  // Check if the stack is empty
  isEmpty() {
    return this.top === null;  // Stack is empty if top is null
  }

  // Get the size of the stack
  sizeOfList() {
    return this.size;
  }

  // Clear the stack
  clear() {
    this.top = null;
    this.size = 0;
  }
}

module.exports = StackList;
