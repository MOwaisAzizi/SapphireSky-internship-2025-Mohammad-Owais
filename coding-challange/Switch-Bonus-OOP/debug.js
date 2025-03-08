//// DEBUGIN PRACTICAL QUESTIONS

// 7. Write a Program That Intentionally Throws and Catches an Error
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;

    } catch (error) {
        console.error("Error caught:", error.message);
    }
}
console.log(divide(10, 0)); 