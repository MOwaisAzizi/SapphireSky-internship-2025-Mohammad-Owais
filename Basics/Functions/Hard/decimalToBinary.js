
//13-Convert Decimal to Binary
function decimalToBinary(n) {
    const arr = [];
    while (n > 0) {
        const binary = n % 2;
        arr.push(binary);
        n = Math.floor(n / 2);
    }
    arr.reverse();
    console.log(arr.join(''));
}
decimalToBinary(10)

