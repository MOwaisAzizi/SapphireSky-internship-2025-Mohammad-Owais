// 13-Write a function to find the starting point of a cycle in a linked list.
function startingPointOfCycle(first) {
    let slow = first;
    let fast = first;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (fast === slow) {
            slow = first;

            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }

            return slow;
        }
    }
    return null;
}

module.exports = startingPointOfCycle;
