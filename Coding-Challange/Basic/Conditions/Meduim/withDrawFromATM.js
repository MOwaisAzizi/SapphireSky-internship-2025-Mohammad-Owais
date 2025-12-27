
//  7-  ATM Withdrawal
//    A person wants to withdraw money from an ATM.
//    If the withdrawal amount is a multiple of 10, allow withdrawal.
//    If not, print an error message.
//    If the account balance is less than the withdrawal amount, print "Insufficient Funds".
function withdrawFromATM(withdrawAmount) {
    let balance = 1000
    if (withdrawAmount > balance) return 'Insufficient Funds'
    else if (withdrawAmount % 10 === 0) {
        balance = balance - withdrawAmount
        console.log(`Your widthdraw was successfull ${withdrawAmount}! Your current balance is ${balance}`);
    }
    else if (withdrawAmount % 10 !== 0) console.log('Failed: your withdraw amount is not dividible by 10');
}
withdrawFromATM(100)
