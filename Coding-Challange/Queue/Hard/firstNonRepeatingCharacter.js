//12-Implement a function to find the first non-repeating character in a stream of characters using a queue.
function firstNonRepeatingCharacter(stream) {
    const countMap = {};
    const queue = [];

    for (let ch of stream) {
        countMap[ch] = (countMap[ch] || 0) + 1;

        queue.push(ch);

        while (queue.length > 0 && countMap[queue[0]] > 1) {
            queue.shift();
        }
    }

    return queue[0] || 'No Non-Repeating Char'
}

console.log(firstNonRepeatingCharacter('aabbc'));
console.log(firstNonRepeatingCharacter('abc'));

