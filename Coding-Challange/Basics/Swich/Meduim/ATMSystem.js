
//8-Menu-Based ATM System
// Display a menu with options:
// 1 → Check Balance
// 2 → Withdraw Money
// 3 → Deposit Money
// 4 → Exit
// Use switch to perform the correct action based on the user’s choice.

function ATMSystem(key) {
    if (typeof key !== 'number') return 'Falid. We Expected a Number!'
    let option = ''
    switch (key) {
        case 1: option = 'Check Balance'
            break;
        case 2: option = 'withdraw money'
            break;
        case 3: option = 'deposit money'
            break;
        case 4: option = 'exit'
            break;
        default: 'Not Valid input!'
    }
    return option
}
console.log(ATMSystem(2));
