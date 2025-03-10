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

        this.first = prev;  // Update the head to the new first node
    }
}

const linkedList = new LinkedList()
linkedList.addFirst(1)
linkedList.addFirst(2)
linkedList.addFirst(3)
linkedList.addFirst(4)
linkedList.addFirst(5)
linkedList.addFirst(6)
linkedList.deleteFrist()
console.log(linkedList.findMiddleOfList());
linkedList.display()
linkedList.reverse()
linkedList.display()
console.log(linkedList.countLinkedList());




