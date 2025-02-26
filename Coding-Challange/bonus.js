// Bonus Challenge: Nested Loops
// 1-Print Prime Numbers from 1 to 100
function printPrimeNumbers() {
    for (let num = 2; num <= 100; num++) { 
        let isPrime = true; 
        for (let i = 2; i <= Math.sqrt(num); i++) { 
            if (num % i === 0) { 
                isPrime = false; 
                break; 
            }
        }
        if (isPrime) {
            console.log(num); 
        }
    }
}
printPrimeNumbers();

console.log(Math.sqrt(12));
