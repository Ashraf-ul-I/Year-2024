"use strict";
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
console.log(addTwo(5));
console.log(getUpper("ashraful"));
function signUpUser(name, email, isPaid) {
    return { name, email, isPaid };
}
function Login(user) {
    if (user.isPaid === true) {
        console.log(`${user.name} are logged in with ${user.email} id `);
    }
}
const newUser = signUpUser("ashraful", "ashraful@gmail.com", true);
Login(newUser);
function getValue(number) {
    if (number === 5) {
        return true;
    }
    return "200 Ok";
}
console.log(getValue(5));
const getValues = (s) => {
    return "";
};
const heros = ["thor", "spiderman", "ironman"];
const hero = heros.map((hero) => {
    return hero;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
console.log(hero);
