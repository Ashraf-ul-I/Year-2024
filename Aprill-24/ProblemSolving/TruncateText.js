const str = "This code is for somethings good";
const maxLength = 8;
const length = str.length;
const newString = str.slice(0, maxLength + 1);
const remainingStr = str.slice(maxLength);
let truncate = newString;

if (remainingStr.length > 0) {
    truncate += '.'.repeat(remainingStr.length);
}

console.log(truncate);