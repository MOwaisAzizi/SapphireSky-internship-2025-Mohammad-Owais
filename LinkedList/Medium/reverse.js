//7-Implement a function to reverse a linked list.
function reverse(first) {
    let prev = null;
    let current = first;
    let next = null;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

module.exports = reverse;
