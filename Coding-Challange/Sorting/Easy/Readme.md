4-Compare the time complexities of different sorting algorithms.
_answer_

1. Bubble Sort
   Best Case (O(n)): If the array is already sorted, only one pass is needed.
   Average & Worst Case (O(n²)): Needs nested loops to compare and swap elements.

2. Selection Sort
   Best, Average, and Worst Case (O(n²)): Always scans the entire unsorted array to find the maximum (or minimum) element.
   Does fewer swaps than Bubble Sort, making it slightly better in performance.

3. Insertion Sort
   Best Case (O(n)): If the array is nearly sorted, it only needs a single pass.
   Average & Worst Case (O(n²)): Requires shifting elements for every misplaced element.
   Faster than Bubble and Selection Sort in practice for small or nearly sorted arrays.
