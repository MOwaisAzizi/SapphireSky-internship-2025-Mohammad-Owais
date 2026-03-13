//15-Implement a function to process tasks in batches using a queue.
function worker(task) {
    return new Promise((resolve) => {
        console.log(`Processing ${task}`);
        setTimeout(() => {
            console.log(`Completed ${task}`);
            resolve();
        }, 1000);
    });
}

async function processTasksInBatches(tasks, batchSize) {
    let queue = [...tasks];

    while (queue.length > 0) {
        let batch = queue.splice(0, batchSize);
        console.log(`Starting batch: ${batch.join(", ")}`);

        await Promise.all(batch.map(task => worker(task)));

        console.log(`Batch completed.`);
    }

    console.log("All tasks processed.");
}

// Test
const tasks = Array.from({ length: 10 }, (_, i) => `Task-${i}`);
processTasksInBatches(tasks, 3);
