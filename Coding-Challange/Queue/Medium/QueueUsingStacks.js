//7-How do you implement a queue using two stacks?
class QueueUsingStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(value) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
        
        this.stack1.push(value);

        while (this.stack2.length > 0) {
            this.stack1.push(this.stack2.pop());
        }
    }

    dequeue() {
        if (this.stack1.length === 0) {
            return "Queue is empty!";
        }
        return this.stack1.pop();
    }

    peek() {
        if (this.stack1.length === 0) {
            return "Queue is empty!";
        }
        return this.stack1[this.stack1.length - 1];
    }

    isEmpty() {
        return this.stack1.length === 0;
    }
}

