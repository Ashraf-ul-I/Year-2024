
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(7);

a.next = b;
b.next = c;
c.next = d;
let sum = 0;
const printLinkedList = (head) => {
    // let current = head;
    if (head === null) {
        return
    } else {
        sum += head.val;
        printLinkedList(head.next)
    }
    return sum;


}

console.log(printLinkedList(a));