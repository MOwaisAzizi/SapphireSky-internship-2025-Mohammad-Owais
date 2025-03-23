1-What is a queue, and how does it follow the FIFO principle?
_answer_
A queue is a linear data structure that stores a collection of elements in a specific order. It follows a First In, First Out (FIFO) principle, meaning that the first element added to the queue will be the first one to be removed. This is similar to a line of people at a ticket counter or checkout counter, where the person who stands first in line gets served first.

FIFO Principle
FIFO (First In, First Out) is the core principle behind how a queue works.

In a queue:

The element that enters first (is enqueued) will be the first to leave (is dequeued).

New elements are added at the rear (or end) of the queue, and elements are removed from the front of the queue.

This ensures that the order in which elements are added is the same as the order in which they are removed.

Operations on a Queue
There are two primary operations for a queue:

Enqueue (add): This operation adds an element to the rear (end) of the queue.

Dequeue (remove): This operation removes an element from the front of the queue.

4-What is the difference between a queue and a stack?
_answer_
Order of Operations

    Queue
    | FIFO (First In, First Out) |

    Stack
    | LIFO (Last In, First Out) |

Insertion

    Queue
    | enqueue() adds elements at the rear |

    Stack
    | push() adds elements at the top |

Removal

    Queue
    |	dequeue() removes elements from the front |

    Stack
    | pop() removes elements from the top |

Use Cases

    Queue
    | Task scheduling, CPU scheduling, breadth-first search (BFS) |

    Stack
    | Function calls, undo/redo, depth-first search (DFS) |
