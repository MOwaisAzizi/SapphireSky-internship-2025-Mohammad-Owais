//4-How can you sort an array of 0s, 1s, and 2s without extra space?
function zeroOneTwoSort(arr) {
    let low = 0, mid = 0, high = arr.length - 1;

    while (mid <= high) {//[1,1,0,2]
        if (arr[mid] === 0) {
            [arr[mid], arr[low]] = [arr[low], arr[mid]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else { // arr[mid] === 2
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }

}

let arr = [2, 1, 0, 0]
zeroOneTwoSort(arr)
console.log(arr);
