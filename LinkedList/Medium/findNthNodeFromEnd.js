//-10-How do you find the nth node from the end of a linked list?
function findNthNodeFromEnd(first, n) {
    let slow = first;
    let fast = first;

    for (let i = 0; i < n - 1; i++) {
        fast = fast.next;
    }

    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow;
}

module.exports = findNthNodeFromEnd;
