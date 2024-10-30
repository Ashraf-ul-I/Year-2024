
const stringPalindroms=(str)=>{

    let strReverse='';

    for(let i=str.length-1;i>=0;i--){
        strReverse += str[i];
        
    }
    if(strReverse===str){
           return true; 
    }else{
        return false;
    }
    
}

console.log(stringPalindroms('cddc'));

//Another version is 

const strPalin=str=>str===str.split('').reverse().join('');
console.log(strPalin('abbc'))