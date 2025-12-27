
// 10- Password Strength Checker
// A strong password must:
// Be at least 8 characters long.
// Contain at least one uppercase letter, one lowercase letter, and one number.
// Write a program that checks if a given password is strong or weak.
function isvalidPassword(password) {
    //using regular expression(other ways are to long)
    if (password.length - 1 < 8 || !(/[A-Z]/.test(password)) || !(/[a-z]/.test(password)) || !(/\d/.test(password))) return false
    return true
}
console.log(isvalidPassword('hellO12Hi'));
