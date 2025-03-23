//8-How do you detect a cycle in a linked list?
function isCycle(first) {
    let slow = first;
    let fast = first;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) return true;
    }
    return false;
}

module.exports = isCycle;
