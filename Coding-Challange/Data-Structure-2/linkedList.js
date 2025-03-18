const Node = require('./Node')

class LinkedList {
    constructor() {
        this.first = null;
    }

    //2-Implement a function to insert a node at the beginning of a linked list.
    addFirst(data) {
        let newNode = new Node(data);
        newNode.next = this.first;
        this.first = newNode;
    }

    //3-How do you delete a node from a linked list
    deleteFrist() {
        let temp = this.first
        this.first = this.first.next
        return temp
    }

    //4-Write a function to traverse and print a linked list.
    display() {
        let temp = this.first;
        while (temp !== null) {
            console.log(temp.data);  // Print the data of each node
            temp = temp.next;
        }
    }

    //5-Implement a program to find the length of a linked list.
    sizeOfLinkedList() {
        let count = 0;
        let temp = this.first

        while (temp !== null) {
            temp = temp.next;
            count++;
        }
        return count;
    }

    // 6-Write a function to find the middle node of a linked list.
    findMiddleOfList() {
        let slowStep = this.first
        let fastStep = this.first

        while (fastStep !== null && fastStep.next !== null) {
            fastStep = fastStep.next.next
            slowStep = slowStep.next
        }

        return slowStep.data
    }

    //7-Implement a function to reverse a linked list.
    reverse() {
        let prev = null;
        let current = this.first
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.first = prev;
    }

    //8-How do you detect a cycle in a linked list?
    isCycle() {
        let slow = this.first
        let fast = this.first

        while (fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next
            if (fast === slow) return true
        }
        return false
    }

    //-10-How do you find the nth node from the end of a linked list?
    findNthNodeFromEnd(n) {
        let slow = this.first
        let fast = this.first

        for (let i = 0; i < n - 1; i++) {
            fast = fast.next
        }

        while (fast.next !== null) {
            fast = fast.next
            slow = slow.next
        }

        return slow
    }

    // 11-Implement a function to remove duplicates from a linked list.
    removeDuplicates() {
        const duplicateContainer = new Set();
        let current = this.first;
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
    }

    // 13-Write a function to find the starting point of a cycle in a linked list.
    startingPointOfCycle() {
        let slow = this.first;
        let fast = this.first;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;

            if (fast === slow) {
                slow = this.first;

                while (slow !== fast) {
                    slow = slow.next;
                    fast = fast.next;
                }

                return slow;
            }
        }
        return null;
    }

    //14 -Implement a function to group even and odd nodes together in a linked list.
    groupEvenOdd() {
        if (!this.first || !this.first.next) {
            return this.first;
        }

        let evenHead = new Node(0);
        let oddHead = new Node(0);
        let evenHeadTemp = evenHead;
        let oddHeadTemp = oddHead;

        let current = this.first;
        let index = 0

        while (current !== null) {
            if (index % 2 === 0) {
                evenHeadTemp.next = current;
                evenHeadTemp = evenHeadTemp.next;
            } else {
                oddHeadTemp.next = current;
                oddHeadTemp = oddHeadTemp.next;
            }
            current = current.next;
            index++
        }

        oddHeadTemp.next = null;
        evenHeadTemp.next = oddHead.next;

        return evenHead.next;
    }

    addLast(data) {
        const newNode = new Node(data);

        if (this.first === null) {
            this.first = newNode;
        } else {
            let cur = this.first;
            while (cur.next !== null) {
                cur = cur.next;
            }
            cur.next = newNode;
        }
        newNode.next = null;
    }
}

module.exports = LinkedList