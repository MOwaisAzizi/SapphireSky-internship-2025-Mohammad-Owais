
// 14-Automated Toll Booth System
// Take a vehicle type ("Car", "Truck", "Bike") as input.
// Use switch to determine the toll fee.
function tollFeeChecker(type) {
    type = type.toLowerCase()
    let tollFee = 0
    switch (type) {
        case 'car': tollFee = 10
            break
        case 'truck': tollFee = 20
            break
        case 'Bike': tollFee = 5
            break
        default: return 'Not Valid vehicle!'
    }
    return tollFee
}
console.log(tollFeeChecker('car'));

