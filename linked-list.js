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
        let count = 0

        while (temp !== null) {
            console.log(temp.data);
            temp = temp.next
            count++
        }

        console.log(count);

    }
}

const linkedList = new LinkedList()
linkedList.addFirst(3)
linkedList.addFirst(4)
linkedList.deleteFrist()
linkedList.display()


//MIDIUM QUESTIONS

// 6-Write a function to find the middle node of a linked list.
 findMiddleNode(){
    
 }
