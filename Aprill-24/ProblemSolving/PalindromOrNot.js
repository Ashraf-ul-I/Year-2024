function isPalindrom(x) {

    return str < 0 ? false : x === +x.toString().split("").reverse().join("");
}
console.log(isPalindrom(121))

// function isPalindrom(str) {

//     const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     let left = 0;
//     let right = cleanStr.length - 1;
//     while (left < right) {
//         if (cleanStr[left] !== cleanStr[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }

// console.log(isPalindrom("acca"))

//if it is number

// function isPalindrome(num) {

//     if (num < 0) {
//         return false;
//     }
//     let reversed = 0;
//     let result = num;
//     while (num > 0) {

//         const digit = num % 10;
//         reversed = reversed * 10 + digit;
//         num = Math.floor(num / 10);
//     }
//     return result === reversed
// }
// const testNumber = 121;
// const result = isPalindrome(testNumber);

// console.log(`${testNumber} is a palindrome: ${result}`); 