
//13-Discount System Based on Membership
// Input membership type ("Gold", "Silver", "Bronze").
// Use switch to apply different discount rates on a purchase.
function discountSystem(type, amount) {
    let discount = 0
    switch (type) {
        case 'gold': discount = 0.20
            break
        case 'silver': discount = 0.15
            break
        case 'bronze': discount = 0.1
            break
        default: discount = 0
    }
    finalAmount = amount * (1 - discount)
    return [amount, discount * 100, finalAmount]
}
console.log(discountSystem('gold', 100));
