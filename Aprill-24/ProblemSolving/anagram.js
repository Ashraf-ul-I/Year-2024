const anagramm = (string1, string2) => {

    if (string1.length !== string2.length) {
        return false;
    }

    const obj1 = {};
    const obj2 = {};

    for (let i = 0; i < string1.length; i++) {

        obj1[string1[i]] = (obj1[string1[i]] || 0) + 1

        if (obj2[string2[i]]) {
            obj2[string2[i]] += 1;
        } else {
            obj2[string2[i]] = 1;
        }
    }
    for (let char in obj1) {
        if (obj1[char] !== obj2[char]) {
            return false;
        }
    }

    return true;

}

console.log(anagramm("anagram", "nagaram"))