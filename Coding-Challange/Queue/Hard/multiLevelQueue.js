//13- How do you implement a multi-level queue with different priorities? 
const QueueArray = require('../Easy/QueueArray')

class MultiLevelQueue {
    constructor() {
        this.highPriorityQueue = new QueueArray();
        this.lowPriorityQueue = new QueueArray();
    }

    enqueue(process, priority) {
        if (priority > 1) {
            this.highPriorityQueue.enqueue({ process, priority })
        }
        else {
            this.lowPriorityQueue.enqueue({ process, priority })
        }
    }

    runScheduler() {
        console.log('Running Proccess...');
        console.log('High Priority');

        while (!this.highPriorityQueue.isEmpty()) {
            this.highPriorityQueue.queue.sort((a, b) => b.priority - a.priority);

            const task = this.highPriorityQueue.dequeue()
            console.log(`${task.process} is Running, Priority: ${task.priority}`)
        }

        console.log('Low Priority');
        while (!this.lowPriorityQueue.isEmpty()) {
            this.lowPriorityQueue.queue.sort((a, b) => b.priority - a.priority);

            const task = this.lowPriorityQueue.dequeue()
            console.log(`${task.process} is Running, Priority: ${task.priority}`)
        }
    }
}

// Test
let scheduler = new MultiLevelQueue()
scheduler.enqueue("Task A", 2)
scheduler.enqueue("Task B", 3)
scheduler.enqueue("Task C", 1)
scheduler.enqueue("Task D", 0)
console.log();

scheduler.runScheduler();
