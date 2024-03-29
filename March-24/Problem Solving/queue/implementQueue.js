// class Queue {
//     constructor() {
//         this.queue = [];
//     }

//     enqueue(elem) {
//         this.queue.push(elem);
//     }

//     dequeue() {
//         return this.queue.shift();
//     }
//     peek() {
//         return this.queue[0]
//     }
// }

// const queue = new Queue();

// queue.enqueue(10);
// queue.enqueue(11);
// queue.enqueue(12);

// console.log(queue);
// queue.dequeue();
// console.log(queue);

// Queue class
class Queue {
    constructor() {
        this.items = [];
        this.front = -1;
        this.rear = -1;
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.front === -1;
    }

    // Method to check if the queue is full (not necessary in JavaScript as arrays can grow dynamically)
    isFull() {
        return false;
    }

    // Method to add an element to the queue (enqueue)
    enqueue(value) {
        if (this.rear === -1) {
            this.front = 0;
        }
        this.rear++;
        this.items[this.rear] = value;
    }

    // Method to remove an element from the queue (dequeue)
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return -1; // Return a sentinel value indicating failure
        }
        const removedItem = this.items[this.front];
        if (this.front >= this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front++;
        }
        return removedItem;
    }

    // Method to get the front element of the queue without removing it (peek)
    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return -1; // Return a sentinel value indicating failure
        }
        return this.items[this.front];
    }
}

// Create a new queue
const queue = new Queue();

// Enqueue elements
queue.enqueue(10);
queue.enqueue(11);
queue.enqueue(12);

// Print the entire queue
console.log("Current queue: ", queue);
// while (!queue.isEmpty()) {
//     console.log(queue.peek());
//     queue.dequeue();
// }

// Dequeue from an empty queue
queue.dequeue();
console.log("Current queue: ", queue);