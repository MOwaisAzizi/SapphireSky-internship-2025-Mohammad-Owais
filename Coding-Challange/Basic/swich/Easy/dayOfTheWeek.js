//1-Day of the Week
function getDayOfWeek(number) {
    if (typeof number !== 'number') return 'Input Should be a Number!'

    switch (number) {
        case 1: return 'Sunday'
        case 2: return 'Monday'
        case 3: return 'Tuesday'
        case 4: return 'Wednesday'
        case 5: return 'Thursday'
        case 6: return 'Saturday'
        case 7: return 'Sunday'
        default: return 'Not Valid Day Number! [1-7]'
    }
}
console.log(getDayOfWeek(4));
