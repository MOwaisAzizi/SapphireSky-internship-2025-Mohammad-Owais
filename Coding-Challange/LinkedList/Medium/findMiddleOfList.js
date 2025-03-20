// 6-Write a function to find the middle node of a linked list.
function findMiddleOfList(first) {
    let slowStep = first;
    let fastStep = first;

    while (fastStep !== null && fastStep.next !== null) {
        fastStep = fastStep.next.next;
        slowStep = slowStep.next;
    }

    return slowStep.data;
}

module.exports = findMiddleOfList;
