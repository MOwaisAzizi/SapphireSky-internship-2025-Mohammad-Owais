//9-Fibonacci Sequence
function fibonacciSequence(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        console.log(a);
        [a, b] = [b, a + b];
    }
}
console.log(fibonacciSequence(10));
