class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        if (this.stack.length === 0) return "Underflow";
        return this.stack.pop();
    }

    peek() {
        if (this.stack.length !== 0) {
            return this.stack[this.stack.length - 1];
        }
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    printStack() {
        return this.stack;
    }
}

// export default Stack; // No need for export default in this context

// import Stack from "./stackImplementation"; // Not needed in this context

function postFixEvaluation(exp) {
    let stack = new Stack();
    for (let i = 0; i < exp.length; i++) {
        let c = exp[i];
        if (!isNaN(c)) // Checking if c is a number
            stack.push(parseInt(c)); // Parsing c to integer and pushing onto stack
        else {
            let val1 = stack.pop();
            let val2 = stack.pop();
            if (isNaN(val1) || isNaN(val2)) // Checking if either val1 or val2 is not a number
                return "Can not perform postfix evaluation";
            switch (c) {
                case '+':
                    stack.push(val2 + val1);
                    break;
                case '-':
                    stack.push(val2 - val1);
                    break;
                case '/':
                    stack.push(val2 / val1);
                    break;
                case '*':
                    stack.push(val2 * val1);
                    break;
            }
        }
    }
    return stack.pop();
}

console.log(postFixEvaluation("235*+8-")); // Output: 9
console.log(postFixEvaluation("23*+")); // Output: "Can not perform postfix evaluation"



function postFixEvaluations(exp) {

    const stack = new Stack();

    for (let i = 0; i < exp.length; i++) {
        let c = exp[i];
        if (!isNaN(c)) // Checking if c is a number
            stack.push(parseInt(c)); // Parsing c to integer and pushing onto stack

        else {
            let val1 = stack.pop();
            let val2 = stack.pop();
            if (isNaN(val1) || isNaN(val2)) // Checking if either val1 or val2 is not a number
                return "Can not perform postfix evaluation";

            switch (c) {
                case '+':
                    stack.push(val1 + val2);
                    break;
                case '-':
                    stack.push(val1 - val2);
                    break;
                case '/':
                    stack.push(val1 / val2);
                    break;
                case '*':
                    stack.push(val1 * val2)
                    break;
            }

        }
    }

    return stack.pop();

}