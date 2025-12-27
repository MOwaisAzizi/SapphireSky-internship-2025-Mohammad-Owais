const QueueArray = require('../Easy/QueueArray')

//14-Write a function to simulate a printer queue with different priorities.
class PrinterQueue {
    constructor() {
        this.printerQueue = new QueueArray();
    }

    enqueue(job, priority) {
        const newJob = { job, priority };
        let added = false;

        for (let i = 0; i < this.printerQueue.size(); i++) {
            if (this.printerQueue.queue[i].priority < priority) {
                this.printerQueue.queue.splice(i, 0, newJob);
                added = true;
                break;
            }
        }

        if (!added) {
            this.printerQueue.enqueue(newJob);
        }
    }

    dequeue() {
        if (this.printerQueue.length === 0) {
            console.log("Printer queue is empty.");
            return null;
        }
        const nextJob = this.printerQueue.dequeue();
        console.log(`Printing: ${nextJob.job} (Priority: ${nextJob.priority})`);
        return nextJob;
    }

    displayQueue() {
        if (this.printerQueue.isEmpty()) {
            console.log("Printer queue is empty.");
            return;
        }
        console.log("Current Printer Queue:");
        this.printerQueue.queue.forEach(task => {
            console.log(`- ${task.job} (Priority: ${task.priority})`);
        });
    }
}

// Testing
let printer = new PrinterQueue();
printer.enqueue("Document A", 2);
printer.enqueue("Document B", 5);
printer.enqueue("Document C", 1);
printer.enqueue("Document D", 3);

printer.displayQueue();
printer.dequeue();
printer.displayQueue(); 
