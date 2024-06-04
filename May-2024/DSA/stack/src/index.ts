
function addTwo(num: number) {
    return num + 2;
}
function getUpper(val: string) {

    return val.toUpperCase();

}

console.log(addTwo(5));
console.log(getUpper("ashraful"));

interface Users {
    name: string,
    email: string,
    isPaid: boolean
}

function signUpUser(name: string, email: string, isPaid: boolean): Users {
    return { name, email, isPaid }
}

function Login(user: Users): void {
    if (user.isPaid === true) {
        console.log(`${user.name} are logged in with ${user.email} id `);
    }
}

const newUser = signUpUser("ashraful", "ashraful@gmail.com", true)

Login(newUser);

function getValue(number: number): number | boolean | string {
    if (number === 5) {
        return true;
    }
    return "200 Ok"
}

console.log(getValue(5));

const getValues = (s: string): string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"];

const hero = heros.map((hero): string => {
    return hero;
});

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

console.log(hero);