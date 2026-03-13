//3-How do you delete a node from a linked list
function deleteFirst(first) {
    if (!first) return null
    let deletedNode = first
    first = first.next
    return { first, deletedNode }
}

module.exports = deleteFirst;

