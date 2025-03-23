//2- Implement a queue using an array in JavaScript.
class QueueArray {
    constructor() {
        this.queue = [];
        this.front = -1;
        this.rear = -1;
    }

    enqueue(element) {
        if (this.front === -1) {
            this.front = 0;
        }
        this.rear++;
        this.queue[this.rear] = element;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return null;
        }

        const deletedElement = this.queue[this.front];
        this.front++;

        if (this.front > this.rear) {
            this.front = this.rear = -1;
        }

        return deletedElement;
    }

    isEmpty() {
        return this.front === -1;
    }

    peek() {
        return this.isEmpty() ? null : this.queue[this.front];
    }
}

const queue = new QueueArray()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.dequeue());
console.log(queue.peek());
