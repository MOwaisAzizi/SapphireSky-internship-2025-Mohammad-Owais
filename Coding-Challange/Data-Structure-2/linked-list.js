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
        // console.log(`node coming to first of list: ${data}`);
        let newNode = new Node(data);
        newNode.next = this.first; // Point to the current first node
        this.first = newNode; // Set new node as the first node
    }

    addLast(node) {
        //  console.log(`node comming to addLast: ${node}`);
        
        // console.log('Last Node');
        const newNode = new Node(node);
        // console.log(newNode);
    
        if (this.first === null) {
            // If the list is empty, make newNode the first node
            this.first = newNode;
        } else {
            // Traverse the list to find the last node
            let cur = this.first;
            while (cur.next !== null) {
                cur = cur.next; // Move to the next node
            }
            // Now cur is the last node, so set its next to the new node
            cur.next = newNode;
        }
        newNode.next = null; // Ensure the new node's next is null (it's the last node)
    }
    

    //3-How do you delete a node from a linked list
    deleteFrist() {
        let temp = this.first
        this.first = this.first.next
        return temp
    }

    //4-Write a function to traverse and print a linked list.
    display(head) {
        let temp = head;
        while (temp !== null) {
            console.log(temp.data);  // Print the data of each node
            temp = temp.next;
        }
    }

    //5-Implement a program to find the length of a linked list.
    sizeOfLinkedList(head = null) {

        let count = 0;
        let temp = head || this.first

        while (temp !== null) {
            temp = temp.next;
            count++;
        }
        return count;
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
    reverse(head) {
        let prev = null;
        let current =  head || this.first;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        head = prev;
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

    //9-Write a function to merge two sorted linked lists.
    mergeSortedLists(list1 = null, list2) {
        let dummyNode = new Node(0);
        let tail = dummyNode;
        let current1 = list1.first || this.first;
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

        for (let i = 0; i < n - 1; i++) fast = fast.next

        while (fast.next !== null) {
            fast = fast.next
            slow = slow.next
        }
        return slow
    }

    //// Hard

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


    //12- check if two linked lists intersects?
    intersectionOfTwoLists(list1, list2) {
        let lengthList1 = this.sizeOfLinkedList(list1);
        let lengthList2 = this.sizeOfLinkedList(list2);

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

    // 13-Write a function to find the starting point of a cycle in a linked list.
    startingPointOfCycle() {
        let slow = this.first
        let fast = this.first

        while (fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next

            if (fast === slow)
                this.slow = this.first

            while (slow !== fast) {
                slow = slow.next
                fast = fast.next
            }
            return slow
        }
        return null
    }

    //14 -Implement a function to group even and odd nodes together in a linked list.
    groupEvenOdd(head) {

        if (!head || !head.next) {
            return head;
        }

        let evenHead = new Node(0);
        let oddHead = new Node(0);
        let evenHeadTemp = evenHead;
        let oddHeadTemp = oddHead;

        let current = head;
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

        evenHeadTemp.next = null;
        oddHeadTemp.next = evenHead.next;

        return oddHead.next;
    }
}


 //15-Write a function to add two numbers represented as linked lists.
 function addLinkedLists(head1, head2) {
    const newList = new LinkedList();
    console.log('count and data of linkedlist one:');
    console.log(newList.sizeOfLinkedList(head1));
    
    console.log(head1);
    
    let p = head1;
    let q = head2;
    let carry = 0;

    while (p !== null || q !== null || carry !== 0) {
        let sum = carry;

        if (p !== null) {
            console.log(`data of first linkedList1 ${p.data}`);
            sum += p.data;
            p = p.next;
        }

        if (q !== null) {
            console.log(`data of first linkedList2 ${q.data}`);
            sum += q.data;
            q = q.next;
        }

        carry = Math.floor(sum / 10); // Carry for the next iteration
        let reminder = sum % 10; // Current digit to store in the result list
        console.log(`Add to last of new Linked list sum of two LinkedLists: ${reminder}`);
        newList.addFirst(reminder);
    }

    return newList;
}



console.log('linkedList1 data:');
const linkedList1 = new LinkedList()
// linkedList1.addFirst(6)
// linkedList1.addFirst(5)
// linkedList1.addFirst(4)
linkedList1.addFirst(3)
linkedList1.addFirst(2)
linkedList1.addFirst(1)
// linkedList1.deleteFrist()

// console.log(linkedList1.findMiddleOfList());

// linkedList1.reverse()
linkedList1.display(linkedList1.first)

// console.log(linkedList1.sizeOfLinkedList());

// console.log(linkedList1.isCycle());

const linkedList2 = new LinkedList();
linkedList2.addFirst(6);
linkedList2.addFirst(5);
linkedList2.addFirst(4);
console.log('linkedlist2 data:');
// linkedList2.addFirst(linkedList2.first,3);
linkedList2.display(linkedList2.first)
// console.log('Starting--- linked List 1');
// console.log(linkedList1);

// linkedList1.first.next.next = linkedList2.first;

// console.log(linkedList1.intersectionOfTwoLists(linkedList1, linkedList2));

// linkedList1.mergeSortedLists(linkedList2);
// linkedList1.display()

// console.log(linkedList1.findNthNodeFromEnd(1));

// linkedList1.removeDuplicates()
// linkedList1.display()

// console.log(linkedList1.startingPointOfCycle());

// linkedList1.display(linkedList1.first)
// // console.log(linkedList1.first);
// console.log('=====');
// const newList = linkedList1.groupEvenOdd(linkedList1.first)
// linkedList1.display(newList)

const addLists = addLinkedLists(linkedList1.first,linkedList2.first)
console.log('newList LinkedList:');
// addLists.addFirst(addLists.first,50)
console.log(addLists);










