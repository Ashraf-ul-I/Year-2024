
//Make the string lowercase(toLowerCase method);
//Convert string to array (Split method)
//Capitalize each word (map method);
//Convert array back to string(join method);

const capitalize=str=>{
    return str.toLowerCase().split(' ').map(word=>word[0].toUpperCase()+ word.slice(1)).join(" ");
}

console.log(capitalize('Hello world'))