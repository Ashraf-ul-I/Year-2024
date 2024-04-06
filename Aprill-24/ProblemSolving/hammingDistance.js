

const hammingDistance = (x, y) => {

    if (x.length !== y.length) {
        throw new Error("Message must be the same of length");
    }

    let distance = 0;
    for (let i = 0; i < x.length; i++) {

        if (x[i] !== y[i]) {
            console.log(x[i], y[i]);
            console.log(i);
            distance = (i - distance);
            console.log(distance - 1)
        }

    }
    return distance - 1;

}

console.log(hammingDistance("hello", "hwllr"))