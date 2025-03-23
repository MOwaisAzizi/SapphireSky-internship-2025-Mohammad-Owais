const Node = require('../Node');

//14 -Implement a function to group even and odd nodes together in a linked list.
function groupEvenOdd(first) {
  if (!first || !first.next) {
    return first;
  }

  let evenHead = new Node(0);
  let oddHead = new Node(0);
  let evenHeadTemp = evenHead;
  let oddHeadTemp = oddHead;

  let current = first;
  let index = 0;

  while (current !== null) {
    if (index % 2 === 0) {
      evenHeadTemp.next = current;
      evenHeadTemp = evenHeadTemp.next;
    } else {
      oddHeadTemp.next = current;
      oddHeadTemp = oddHeadTemp.next;
    }
    current = current.next;
    index++;
  }

  oddHeadTemp.next = null;
  evenHeadTemp.next = oddHead.next;

  return evenHead.next;
}

module.exports = groupEvenOdd;
