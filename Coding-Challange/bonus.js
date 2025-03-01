// Bonus Challenge: Nested Loops
// 1-Print Prime Numbers from 1 to 100
function printPrimeNumbers() {
    for (let i = 2; i <= 100; i++) { 
        let isPrime = true; 
        for (let j = 2; j <= Math.sqrt(i); j++) { 
            if (i % j === 0) { 
                isPrime = false; 
                break; 
            }
        }
        if (isPrime) {
            console.log(i); 
        }
    }
}
printPrimeNumbers();
