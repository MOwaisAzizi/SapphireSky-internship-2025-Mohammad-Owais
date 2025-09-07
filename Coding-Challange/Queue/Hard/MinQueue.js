//11-How do you design a queue that supports enqueue(), dequeue(), and getMin() in constant time?
class MinQueue {
    constructor() {
        this.mainQueue = [];
        this.minQueue = [];
    }

    enqueue(element) {
        this.mainQueue.push(element);

        while (this.minQueue.length !== 0 && this.minQueue[this.minQueue.length - 1] > element) {
            this.minQueue.pop();
        }

        this.minQueue.push(element);
    }

    dequeue() {
        if (this.mainQueue.length === 0) return null;

        let removed = this.mainQueue.shift();

        if (removed === this.minQueue[0]) {
            this.minQueue.shift();
        }

        return removed;
    }

    getMin() {
        return this.minQueue.length === 0 ? null : this.minQueue[0];
    }
}

// Test
let queue = new MinQueue();
queue.enqueue(3);
queue.enqueue(1);
queue.enqueue(5);
queue.enqueue(2);
console.log(queue);
queue.dequeue();
queue.dequeue();
console.log(queue.getMin());