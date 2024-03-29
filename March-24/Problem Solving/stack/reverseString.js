

class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {

        if (this.stack) {
            this.stack.push(item);
        }
    }
    pop() {
        if (this.items.length == 0) return "Underflow";

        return this.stack.pop();
    }
    peek() {
        if (this.stack.length !== 0) {
            return this.stack[this.stack.length - 1];
        }
    }

    isEmpty() {
        // if (this.stack.length === 0) {
        //     return []
        // }

        return this.stack.length === 0;
    }

    prinStack() {
        let str = [];

        for (let i = 0; i < this.stack.length; i++) {
            str.push(this.stack[i]);

        }
        return str;
    }

}

function reverseString(example) {
    // const stacks = new Stack();
    const splitString = example.split(" ");
    const reverseArr = [];
    for (let i = splitString.length - 1; i >= 0; i--) {
        reverseArr.push(splitString[i]);

    }

    const reverstring = reverseArr.join(" ");
    console.log(reverstring);

}

reverseString("the sky is blue")