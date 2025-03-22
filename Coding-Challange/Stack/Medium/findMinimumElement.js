//9- Implement a function to find the minimum element in a stack in constant time.
//12- How do you design a stack that supports push(), pop(), and getMin() in constant time?

class Stack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    // Push an element onto the stack
    push(element) {
        this.stack.push(element);

        if (this.minStack.length === 0 || element <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(element);
        } else {
            this.minStack.push(this.minStack[this.minStack.length - 1]);
        }
    }

    pop() {
        this.stack.pop();
        // this.minStack.pop();
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// Test
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(1);
stack.push(4);
stack.push(0);

console.log(stack.getMin());
stack.pop();
console.log(stack);

console.log(stack.getMin());
