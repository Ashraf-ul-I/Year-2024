
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

const findLinkedList = (head, target) => {

    if (head === null) return false;
    if (head.val === target) {
        return true;
    }
    return findLinkedList(head.next, target);
}

console.log(findLinkedList(a, 'D'));