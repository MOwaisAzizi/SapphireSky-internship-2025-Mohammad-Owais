////SIMPLE QUESTIONS

//2-Implement a function to insert a node at the beginning of a linked list.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    display() {
       let temp = this.head
       while(temp !== null){
        console.log(temp.data);
        temp = temp.next
       }
    }
}

const linkedList = new LinkedList()
linkedList.addFirst(3)
linkedList.addFirst(4)
linkedList.display()

