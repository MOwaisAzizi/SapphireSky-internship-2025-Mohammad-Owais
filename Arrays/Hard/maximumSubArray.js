//14- implement a function to find the subarray with the maximum sum(Kadane's Algorithm)
function maxSubarraySum(arr) {
    let maxSum = -Infinity;
    let currentSum = 0;

    for (let num of arr) {
        currentSum += num;
        maxSum = Math.max(maxSum, currentSum);

        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
}
console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
