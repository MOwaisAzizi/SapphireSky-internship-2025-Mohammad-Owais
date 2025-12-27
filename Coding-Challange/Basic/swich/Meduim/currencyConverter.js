
//7-Currency Converter
// Take a currency code ("USD", "EUR", "INR", "JPY").
// Use switch to print the conversion rate relative to a base currency (e.g., USD).

function currencyConverter(currency) {
    let rate
    if (typeof currency !== 'string') return 'Plese Enter a String!'
    switch (currency) {
        case 'EUR': rate = 0.85
            break
        case 'INR': rate = 0.5
            break
        case 'JPY': rate = 0.3
            break
        case 'USD': rate = 1
            break
        default: 'Not Valid Currency!'
    }
    return rate
}
console.log(currencyConverter('EUR'));


