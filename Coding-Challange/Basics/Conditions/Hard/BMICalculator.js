//8-Body Mass Index (BMI) Calculator
// Given weight (kg) and height (m), calculate BMI using BMI = weight / (height * height).
// Categorize it into:
// Underweight: BMI < 18.5
// Normal weight: 18.5 ≤ BMI < 25
// Overweight: 25 ≤ BMI < 30
// Obese: BMI ≥ 30
const BMICalculator = (weight, height) => {
    if (!weight || !height) return

    const BMI = weight / (height * height)
    if (BMI < 18.5) return 'Underweight'
    else if (BMI >= 18.5 && BMI < 25) return 'normal'
    else if (25 <= BMI < 30) return 'overweight'
    else if (BMI > 30) return 'Obese'
}
// to meter
console.log(BMICalculator(65, 1.8));