const numberReverse=(intNormal)=>{

    let reversedNumber='';

    while(intNormal>0){
        reversedNumber +=intNormal%10;
        intNormal=Math.floor(intNormal/10);

    }

    return parseInt(reversedNumber);
}

console.log(numberReverse(1234))


//another method

const reverseInt=(n)=>{
    const reverserd=n.toString().split('').reverse().join('');
    return parseInt(reverserd);
}

console.log(reverseInt(12345))