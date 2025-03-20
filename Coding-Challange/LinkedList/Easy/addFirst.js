const Node = require("../Node");

//2-Implement a function to insert a node at the beginning of a linked list.
function addFirst(first, data) {
    let newNode = new Node(data);
    newNode.next = first;
    return newNode;
}

module.exports = addFirst;
