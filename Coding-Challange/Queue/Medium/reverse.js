const QueueArray = require('../Easy/QueueArray');
const QueueList = require('../Easy/QueueList');

//6- Implement a function to reverse a queue.
function reverseQueue(queue) {
    let stack = [];

    while (!queue.isEmpty()) {
        stack.push(queue.dequeue());
    }

    while (stack.length > 0) {
        queue.enqueue(stack.pop());
    }
}

// Example usage
const q = new QueueArray();
q.enqueue(1);
q.enqueue(2);
q.enqueue(5);

console.log("Original Queue:", q);
reverseQueue(q);
console.log("Reversed Queue:", q);

// Using List Queue
// function reverseQueueRecursive(queue) {
//     if (queue.isEmpty()) {
//         return;
//     }
//     let front = queue.dequeue();
//     reverseQueueRecursive(queue);
//     queue.enqueue(front);
// }

// //Testing
// const queue = new QueueList();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log("Original Queue:", queue);
// reverseQueueRecursive(queue);
// console.log("Reversed Queue:", queue);