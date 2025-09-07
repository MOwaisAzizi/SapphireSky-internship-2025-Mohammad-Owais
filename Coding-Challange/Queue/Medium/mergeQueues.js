const QueueList = require('../Easy/QueueList')

//10- Implement a function to merge two queues in an alternating manner.
function mergeQueues(queue1, queue2) {
    const mergedQueue = new QueueList()

    while (!queue1.isEmpty() || !queue2.isEmpty()) {

        if (!queue1.isEmpty()) mergedQueue.enqueue(queue1.dequeue())
        if (!queue2.isEmpty()) mergedQueue.enqueue(queue2.dequeue())
    }

    return mergedQueue
}

const queue1 = new QueueList()
const queue2 = new QueueList()

queue1.enqueue(1)
queue1.enqueue(2)
queue2.enqueue(3)
queue2.enqueue(4)

console.log(mergeQueues(queue1, queue2));
