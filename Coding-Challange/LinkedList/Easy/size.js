//5-Implement a program to find the length of a linked list.
function size(first) {
    let count = 0;
    let temp = first;
    while (temp !== null) {
        temp = temp.next;
        count++;
    }
    return count;
}

module.exports = size;
