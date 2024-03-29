function checkingTheBracket(bracket) {
    const stack = [];
    for (let i = 0; i < bracket.length; i++) {
        const char = bracket[i];
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else if (char === ")" || char === "}" || char === "]") {
            if (stack.length === 0) {
                return false; // No matching opening bracket
            }
            const top = stack.pop();
            if (char === ")" && top !== "(" || char === "}" && top !== "{" || char === "]" && top !== "[") {
                return false; // Mismatched opening bracket
            }
        }
    }
    return stack.length === 0; // Check if there are any remaining unmatched opening brackets
}

const string = checkingTheBracket("({[]})");
console.log(string); // Output: true
