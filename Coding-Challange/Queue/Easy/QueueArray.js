//2- Implement a queue using an array in JavaScript.
class QueueArray {
    constructor() {
        this.queue = [];
        this.front = -1;
        this.rear = -1;
        this._size = 0
    }

    enqueue(element) {
        if (this.front === -1) {
            this.front = 0;
        }
        this.rear++;
        this.queue[this.rear] = element;
        this._size ++
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

        this._size --
        return deletedElement;
    }

    isEmpty() {
        return this.front === -1;
    }

    peek() {
        return this.isEmpty() ? null : this.queue[this.front];
    }

    back() {
        return this.isEmpty() ? null : this.queue[this.rear];
    }

    size(){
        return this._size
    }

    //this method will be used in the MinQueue file
    pop() {
        if (!this.isEmpty()) {
            this.queue.pop();
            this.rear--;
            this._size--;
            if (this.rear < this.front) {
                this.front = this.rear = -1;
            }
        }
    }
    

}
module.exports = QueueArray

const queue = new QueueArray()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.dequeue());
console.log(queue.peek());
