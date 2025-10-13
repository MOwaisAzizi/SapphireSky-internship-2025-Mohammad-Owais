class AdvancedRadixSort {
    static sort(arr) {
        if (arr.length === 0) return arr;
        
        const maxNum = Math.max(...arr);
        const maxDigits = Math.floor(Math.log10(maxNum)) + 1;
        
        for (let digit = 0; digit < maxDigits; digit++) {
            arr = this.countingSortForDigit(arr, digit);
        }
        
        return arr;
    }
    
    static countingSortForDigit(arr, digit) {
        const count = new Array(10).fill(0);
        const output = new Array(arr.length);
        
        // شمارش فراوانی هر رقم
        for (let i = 0; i < arr.length; i++) {
            const digitVal = this.getDigit(arr[i], digit);
            count[digitVal]++;
        }
        
        console.log(`فراوانی ارقام در مرحله ${digit}:`, count);
        
        // تبدیل به موقعیت‌های تجمعی
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }
        
        console.log(`موقعیت‌های تجمعی:`, count);
        
        // قرار دادن اعداد در موقعیت صحیح (از انتها برای پایداری)
        for (let i = arr.length - 1; i >= 0; i--) {
            const digitVal = this.getDigit(arr[i], digit);
            output[count[digitVal] - 1] = arr[i];
            count[digitVal]--;
        }
        
        return output;
    }
    
    static getDigit(num, place) {
        return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
    }
}

// تست
const testArray = [123, 45, 7, 891, 23, 4567, 89, 1, 234];
console.log("آرایه اصلی:", testArray);
console.log("مرتب شده:", AdvancedRadixSort.sort([...testArray]));