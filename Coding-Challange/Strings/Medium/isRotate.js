
//9- How do you check if two strings are rotate of one another
function isRotate(str1, str2) {
    if (str1.length !== str2.length) return false;
    const mergedStrings = str1 + str1;
    return mergedStrings.includes(str2);
}
console.log(isRotate('water', 'erwat'));
