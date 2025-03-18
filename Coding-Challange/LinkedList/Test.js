const mergeSortedLists = require('./mergeSortedLists');
const  isTwoListsIntersects = require('./isTwoListsIntersects')
const addLinkedLists = require('./sumLinkedLists')
const LinkedList = require('./LinkedList');

function testLinkedList() {
  const list = new LinkedList();

  // Test addFirst
  console.log('Add To First');
  list.addFirst(4);
  list.addFirst(3);
  list.addFirst(2);
  list.addFirst(1);

  // Test deleteFirst
  console.log('Test deleteFirst');
  const deletedNode = list.deleteFrist();
  console.log(`Deleted Node : ${deletedNode.data}`);
  
  // Test display
  console.log('Display Node Data');
  list.display(); 

  // Test sizeOfLinkedList
  console.log('sizeOfLinkedList');
  console.log(list.sizeOfLinkedList());
  
  // Test findMiddleOfList
  console.log('findMiddleOfList');
  console.log(list.findMiddleOfList());

  // Test reverse
  console.log('Test reverse');
  // list.reverse();
  list.display()

  // Test isCycle
  console.log('Test isCycle');
  // list.first.next.next = list.first;
  console.log(list.isCycle());

  // Test findNthNodeFromEnd
  console.log('Test findNthNodeFromEnd');
  const nthNode = list.findNthNodeFromEnd(2)
  console.log(nthNode.data);

  // Test removeDuplicates
  console.log('Add Duplicate Node');
  // list.addFirst(2);
  console.log('Test removeDuplicates');
  // list.removeDuplicates();
  list.display()

  // Test startingPointOfCycle
  console.log('Test startingPointOfCycle');
  // list.first.next.next = list.first;
  const cycleStart = list.startingPointOfCycle();
  console.log(cycleStart);

  // Test groupEvenOdd
  console.log('Test groupEvenOdd');
  list.groupEvenOdd();
  list.display();

  // Test mergeSortedLists
  console.log('Test mergeSortedLists');
  const list1 = new LinkedList();
  const list2 = new LinkedList();
  list1.addFirst(3);
  list1.addFirst(1);
  list2.addFirst(6);
  list2.addFirst(2);

  const mergedList = mergeSortedLists(list1, list2);
  mergedList.display()

  // Test isTwoListsIntersects
  console.log('Test isTwoListsIntersects');
  const list3 = new LinkedList();
  const list4 = new LinkedList();
  list3.addFirst(10);
  list3.addFirst(20);
  list4.addFirst(30);
  list4.addFirst(40);
  
  list3.first.next.next = list4.first.next;
  console.log(isTwoListsIntersects(list3, list4));

  // Test addLinkedLists
  console.log('Test addLinkedLists');
  const list5 = new LinkedList();
  const list6 = new LinkedList();
  list5.addFirst(5);
  list5.addFirst(4);
  list6.addFirst(6);
  list6.addFirst(5);

  console.log('list1');
  list5.display()
  
  console.log('list1');
  list6.display()
  
  const sumList = addLinkedLists(list5, list6); 
  console.log('sum of lists');
  sumList.display()
}

testLinkedList()