
//4-Month Name and Days
function getMonthName(number) {
    if (typeof number !== 'number') return 'Please Enter a Number!'

    switch (number) {
        case 1: return 'January';
        case 2: return 'February';
        case 3: return 'March';
        case 4: return 'April';
        case 5: return 'May';
        case 6: return 'June';
        case 7: return 'July';
        case 8: return 'August';
        case 9: return 'September';
        case 10: return 'October';
        case 11: return 'November';
        case 12: return 'December';
        default: return 'Invalid month number [1-12]';
    }
}
console.log(getMonthName(2));
