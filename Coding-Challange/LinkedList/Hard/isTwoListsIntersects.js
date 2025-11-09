
//12- check if two linked lists intersects?
function isTwoListsIntersects(list1, list2) {
    let lengthList1 = list1.sizeOfLinkedList();
    let lengthList2 = list2.sizeOfLinkedList();

    let d = lengthList1 - lengthList2;

    let current1 = list1.first;
    let current2 = list2.first;

    while (d > 0) {
        current1 = current1.next;
        d--;
    }

    while (d < 0) {
        current2 = current2.next;
        d++;
    }

    while (current1 && current2) {
        if (current1 === current2) {
            return true;
        }
        current1 = current1.next;
        current2 = current2.next;
    }

    return false;
}

module.exports = isTwoListsIntersects