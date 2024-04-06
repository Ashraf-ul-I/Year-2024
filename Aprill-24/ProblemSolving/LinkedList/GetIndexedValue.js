//GetindexedValue at the given indexed=2;

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

let countIndex = 0;
const GetindexedValue = (head, index) => {
    if (head === null) return 'notFound';
    if (countIndex === index) {
        return head.val;
    } else {
        countIndex++
    }
    return GetindexedValue(head.next, index);
}

console.log(GetindexedValue(a, 2));