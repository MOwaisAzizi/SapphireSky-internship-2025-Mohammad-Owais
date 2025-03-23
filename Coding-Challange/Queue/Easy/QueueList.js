const Node = require('./Node')

//3- How do you implement a queue using a linked list?
class QueueList {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(data) {
        const newNode = new Node(data);

        if (this.front === null) { 
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode; 
            this.rear = newNode; 
        }
    }

    dequeue() {
        if (this.front === null) {
            console.log("Queue is empty!");
            return null;
        }

        const deletedData = this.front.data;
        this.front = this.front.next;

        if (this.front === null) { 
            this.rear = null; 
        }

        return deletedData;
    }

    isEmpty() {
        return this.front === null;
    }

    peek() {
        return this.front ? this.front.data : null;
    }
}

// Testing
const queue = new QueueList();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue()); 
console.log(queue.dequeue()); 
