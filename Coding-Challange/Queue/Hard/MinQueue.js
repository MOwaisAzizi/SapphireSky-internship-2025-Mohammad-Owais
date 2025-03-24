const QueueArray = require("../Easy/QueueArray"); 

//11-How do you design a queue that supports enqueue(), dequeue(), and getMin() in constant time?
class MinQueue {
    constructor() {
        this.mainQueue = new QueueArray();
        this.minQueue = new QueueArray();
    }

    enqueue(element) {
        this.mainQueue.enqueue(element);

        while (!this.minQueue.isEmpty() && this.minQueue.back() > element) {
            this.minQueue.pop();
        }

        this.minQueue.enqueue(element);
    }

    dequeue() {
        if (this.mainQueue.isEmpty()) return null;

        let removed = this.mainQueue.dequeue();

        if (removed === this.minQueue.peek()) {
            this.minQueue.dequeue();
        }

        return removed;
    }


    getMin() {
        return this.minQueue.isEmpty() ? null : this.minQueue.peek();
    }
}

// Example Usage
let queue = new MinQueue();
queue.enqueue(3);
queue.enqueue(1);
queue.enqueue(5);
queue.enqueue(2);
queue.dequeue();
queue.dequeue();
console.log(queue.getMin());
console.log(queue);