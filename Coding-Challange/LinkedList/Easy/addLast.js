const Node = require('../Node');

//this function is For usnig in sumLinkedList function
function addLast(first, data) {
  const newNode = new Node(data);

  if (first === null) {
    first = newNode;
  } else {
    let cur = first;
    while (cur.next !== null) {
      cur = cur.next;
    }
    cur.next = newNode;
  }

  return first;
}

module.exports = addLast;
