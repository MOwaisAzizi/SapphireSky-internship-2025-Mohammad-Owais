// 11-Implement a function to remove duplicates from a linked list.
function removeDuplicates(first) {
    const duplicateContainer = new Set();
    let current = first;
    let previous = null;

    while (current) {
        if (duplicateContainer.has(current.data)) {
            previous.next = current.next;
        } else {
            duplicateContainer.add(current.data);
            previous = current;
        }
        current = current.next;
    }

    return first;
}

module.exports = removeDuplicates;
