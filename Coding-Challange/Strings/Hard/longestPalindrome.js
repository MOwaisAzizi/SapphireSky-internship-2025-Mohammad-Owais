//11-Implement a function to find the longest palindrome substring in a string.
function longestPalindrome(str) {
    if (!str || str.length < 1) return "";
    let start = 0, end = 0;
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }
    for (let i = 0; i < str.length; i++) {
        let len1 = expandAroundCenter(i, i);
        let len2 = expandAroundCenter(i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return str.substring(start, end + 1);
}

console.log(longestPalindrome("babad")); // "bab" or "aba"
