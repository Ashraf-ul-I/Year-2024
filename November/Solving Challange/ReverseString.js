const str='Hello';

const stringReverse=(str)=>{
    let reverseStr='';
    for(let i=str.length-1;i>=0;i--){
         reverseStr+=str[i]
        }
        return reverseStr;
    }


console.log(stringReverse('Hello'));

//another method
const reverseString= str=>str.split("").reverse().join('');

console.log(reverseString('hello'))
//note split will split the string and make it array;
//reverse only reverse the array value not the string value;
