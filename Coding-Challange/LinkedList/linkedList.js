const addFirst = require('./Easy/addFirst');
const addLast = require('./Easy/addLast');
const deleteFirst = require('./Easy/deleteFirst');
const display = require('./Easy/display');
const sizeOfLinkedList = require('./Easy/size');
const findMiddleOfList = require('./Medium/findMiddleOfList');
const reverse = require('./Medium/reverse');
const isCycle = require('./Medium/isCycle');
const findNthNodeFromEnd = require('./Medium/findNthNodeFromEnd');
const removeDuplicates = require('./Hard/removeDuplicates');
const startingPointOfCycle = require('./Hard/startingPointOfCycle');
const groupEvenOdd = require('./Hard/groupEvenOdd');

class LinkedList {
  constructor() {
    this.first = null;
  }

  addFirst(data) {
    this.first = addFirst(this.first, data);
  }

  deleteFirst() {
    const result = deleteFirst(this.first);
    this.first = result.first;
    return result.deletedNode;
  }

  display() {
    display(this.first);
  }

  sizeOfLinkedList() {
    return sizeOfLinkedList(this.first);
  }

  findMiddleOfList() {
    return findMiddleOfList(this.first);
  }

  reverse() {
    this.first = reverse(this.first);
  }

  isCycle() {
    return isCycle(this.first);
  }

  findNthNodeFromEnd(n) {
    return findNthNodeFromEnd(this.first, n);
  }

  removeDuplicates() {
    this.first = removeDuplicates(this.first);
  }

  startingPointOfCycle() {
    return startingPointOfCycle(this.first);
  }

  groupEvenOdd() {
    this.first = groupEvenOdd(this.first);
  }

  addLast(data) {
    this.first = addLast(this.first, data);
  }
}

module.exports = LinkedList;
