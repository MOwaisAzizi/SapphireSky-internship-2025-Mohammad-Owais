const LinkedList = require('./LinkedList');
const Node = require('./Node')

//9-Write a function to merge two sorted linked lists.
function mergeSortedLists(list1, list2) {
    let dummyNode = new Node(0);
    let tail = dummyNode;
    let current1 = list1.first;
    let current2 = list2.first;

    while (current1 !== null && current2 !== null) {
        if (current1.data <= current2.data) {
            tail.next = current1;
            current1 = current1.next;
        } else {
            tail.next = current2;
            current2 = current2.next;
        }
        tail = tail.next;
    }


    if (current1 !== null) {
        tail.next = current1;
    } else {
        tail.next = current2;
    }

    const mergedList = new LinkedList()
    mergedList.first = dummyNode.next
    return mergedList;
}

module.exports = mergeSortedLists