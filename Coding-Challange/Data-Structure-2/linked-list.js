////SIMPLE QUESTIONS

//Class Node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

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
    //5-Implement a program to find the length of a linked list.
    display() {
        let temp = this.first

        while (temp !== null) {
            console.log(temp.data);
            temp = temp.next
        }

    }

    countLinkedList() {
        let temp = this.first
        let count = 0
        while (temp !== null) {
            temp = temp.next
            count++
        }
        return count
    }

    //MIDIUM QUESTIONS

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
        let current = this.first;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.first = prev;
    }
    //1,2,3,4,5
    // next null, cur = 1, pre = null,   next = 2, 2=>3, pre=1,cur=2,first=1
    // next=3,3=>4,pre=2,cur=3

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

    //9-Write a function to merge two sorted linked lists.
    mergeSortedLists(list2) {
        let dummyNode = new Node(0);
        let tail = dummyNode;
        let current1 = this.first;
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

        return dummyNode.next;
    }
    //10-How do you find the nth node from the end of a linked list?
    findNthNodeFromEnd(n) {
        let slow = this.first
        let fast = this.first

        for (let i = 0; i < n-1 ; i++) fast = fast.next

        while (fast.next !== null) {
            fast = fast.next
            slow = slow.next
        }
        return slow
    }

    //// Hard

// Implement a function to remove duplicates from a linked list.
   removeDuplicate(){
    console.log('start');
    
   }
}

const linkedList1 = new LinkedList()
linkedList1.addFirst(1)
linkedList1.addFirst(2)
linkedList1.addFirst(3)
linkedList1.addFirst(4)
linkedList1.addFirst(5)
linkedList1.addFirst(6)

linkedList1.deleteFrist()

console.log(linkedList1.findMiddleOfList());

linkedList1.display()
linkedList1.reverse()
linkedList1.display()

console.log(linkedList1.countLinkedList());

console.log(linkedList1.isCycle());

const linkedList2 = new LinkedList();
linkedList2.addFirst(7);
linkedList2.addFirst(8);
linkedList2.addFirst(9);

const mergedList = linkedList1.mergeSortedLists(linkedList2);
console.log(mergedList);
let temp = mergedList;
while (temp !== null) {
    console.log(temp.data);
    temp = temp.next;
}

console.log(linkedList1.findNthNodeFromEnd(1));






