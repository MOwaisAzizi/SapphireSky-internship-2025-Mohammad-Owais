//13-How do you implement a stack using only one queue?
class StackUsingOneQueue {
    constructor() {
        this.queue = [];
    }

    push(element) {
        let size = this.queue.length;
        this.queue.push(element);

        while (size > 0) {
            this.queue.push(this.queue.shift());
            size--;
        }
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty!");
            return null;
        }
        return this.queue.shift();
    }

    peek() {
        return this.isEmpty() ? null : this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

// Testing
const stack = new StackUsingOneQueue();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);

console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.isEmpty()); // true
