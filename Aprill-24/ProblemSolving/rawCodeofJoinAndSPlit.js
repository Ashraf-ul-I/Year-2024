
const string = "Hello world";

//using direct split() it will make an array of strings;

// const splittedArray = string.split(' ');

//Now we create raw method of this split() means how its actually works;
let char = "";
let split = []
for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
        split.push(char);
        char = "";
    } else {
        char += string[i];
    }
}
if (char !== "") {
    split.push(char);
}


console.log(split);