const LinkedList = require("../linkedList");

//15-Write a function to add two numbers represented as linked lists.
function sumLinkedLists(list1, list2) {
    const newList = new LinkedList();

    let p = list1.first;
    let q = list2.first;
    let carry = 0;

    while (p !== null || q !== null || carry !== 0) {
        let sum = carry;

        if (p !== null) {
            sum += p.data;
            p = p.next;
        }

        if (q !== null) {
            sum += q.data;
            q = q.next;
        }

        carry = Math.floor(sum / 10);
        let reminder = sum % 10;
        newList.addLast(reminder)
    }

    return newList;
}

module.exports = sumLinkedLists