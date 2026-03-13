
//11-Roman Numeral Converter
// Take an integer (1-10) as input.
// Use switch to print the corresponding Roman numeral.
function romanConverter(number) {
    if (number > 10 || number < 1) return 'Invalid Month. please Enter Between 1-10'

    switch (number) {
        case 1: return "I"
        case 2: return "II"
        case 3: return "III"
        case 4: return "IV"
        case 5: return "V"
        case 6: return "VI"
        case 7: return "VII"
        case 8: return "VIII"
        case 9: return "IX"
        case 10: return "X"
        default: return 'Invalid Month!'
    }
}
console.log(romanConverter(4));
