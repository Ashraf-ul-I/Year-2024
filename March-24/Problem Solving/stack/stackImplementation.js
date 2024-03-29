
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
    print() {
        console.log(this.stack.toString());
    }
}


const stack = new Stack();
stack.push(10);
stack.push(11);
stack.push(12);
stack.push(13);

stack.print();
