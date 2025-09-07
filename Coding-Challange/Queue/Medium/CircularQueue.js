//9-Implement a circular queue and explain how it works.

// A circular queue is a linear data structure that follows the FIFO (First In, First Out) 
// principle but connects the end of the queue back to the beginning, forming a circle.
//  This makes it more efficient in terms of space compared to a regular queue, 
// as it can reuse previously occupied space after dequeuing elements.

class CircularQueue {
    constructor(size) {
        this.size = size;
        this.queue = new Array(size).fill(null);
        this.front = -1;
        this.rear = -1;
    }

    enqueue(value) {
        if ((this.rear + 1) % this.size === this.front) {
            console.log("Queue is full!");
            return;
        } else if (this.front === -1) {
            this.front = this.rear = 0;
        } else {
            this.rear = (this.rear + 1) % this.size;
        }
        this.queue[this.rear] = value;
    }

    dequeue() {
        if (this.front === -1) {
            console.log("Queue is empty!");
            return null;
        }
        let value = this.queue[this.front];
        this.queue[this.front] = null;

        if (this.front === this.rear) {
            this.front = this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }
        return value;
    }
}

// Testing
const circularQueue = new CircularQueue(5);
circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50); 
console.log(circularQueue.queue);

circularQueue.dequeue();
circularQueue.enqueue(60); 
console.log(circularQueue.queue);

