//6-Implement Merge Sort and explain its time complexity.
function sort(arr) {
    if (arr.length <= 1) return;

    let middle = Math.floor(arr.length / 2);
    let left = [];
    let right = [];

    for (let i = 0; i < middle; i++) {
        left[i] = arr[i];
    }

    for (let i = middle; i < arr.length; i++) {
        right[i - middle] = arr[i];
    }

    sort(left);
    sort(right);

    merge(left, right, arr);
}

function merge(left, right, result) {
    let i = 0, j = 0, k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result[k++] = left[i++];
        } else {
            result[k++] = right[j++];
        }
    }

    while (i < left.length) {
        result[k++] = left[i++];
    }

    while (j < right.length) {
        result[k++] = right[j++];
    }
}

// Testing
sort([5, 2, 9, 1, 5, 6]);
console.log(arr);


// Dividing
// best case and worst case : O(log n)

// Mergin
// best case and worst case : O(n)

// Total
// best case and worst case : O(n log n)

// Space
// best case and worst case : O(n)

