EXPLANATORY QUESTIONS

1-What is a linked list, and how does it differ from an array?
_Answer_
A linked list is a data structure used to store a collection of elements in a sequential manner. Unlike arrays, linked lists do not store elements in contiguous memory locations; instead, they consist of nodes where each node contains a value and a reference (or pointer) to the next node in the sequence. This structure allows for efficient insertion and deletion of elements.

▎Key Characteristics of Linked Lists:

1. Node Structure: Each node typically contains two components:

   • Data: The value or data stored in the node.
   • Next Pointer: A reference to the next node in the list.

2. Dynamic Size: Linked lists can grow and shrink in size dynamically as elements are added or removed, making them more flexible than arrays.

• Circular Linked List: The last node points back to the first node, forming a circle.

▎Use Cases:

• Linked Lists are often used when:

• Frequent insertions and deletions are required.

• The size of the dataset is unknown or can change frequently.

• Arrays are preferred when:

• Fast access to elements by index is required.

• The size of the dataset is known and relatively stable.

In summary, linked lists and arrays have different strengths and weaknesses, making them suitable for different scenarios depending on the requirements of the application.
