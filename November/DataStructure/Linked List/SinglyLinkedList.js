
///Singly linked list representation

// Head                                Tail
//  |                                   |
//  1-Ref-->2-ref->3-ref->4-ref->5-ref->6--> null

//starting The code

//Node 
// {
//     data:1,
//     next:null
// }

class Node{
    constructor(value){
        this.head=value;
        this.next=null;
    }
}

class LinkedList{
    /**
     * instance without an initial value: const myLinkedList= new LinkedList();.
     * In JavaScript, when you don’t provide a parameter to a constructor that expects one, it can lead to issues. Since the LinkedList constructor expects an initial value (value) and you're not providing it, the head node is not being set up properly.

      Solution
       You have two main options to fix this issue:

        Update the constructor to handle an empty initialization (where value can be optional).
        Pass an initial value when creating the linked list.
     * @param {*} value 
     */
    constructor(value = null) {
        if (value !== null) {
            this.head = new Node(value);
            this.tail = this.head;
            this.length = 1;
        } else {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
    }
    push(value){
        let newNode=new Node(value);

        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        this.tail.next= newNode;
        this.tail=newNode;
        this.length++;

    }
    pop(){
        if(!this.head){
            return undefined;
        }
        let temp=this.head;
        let prev=this.head;

        for(let i=0;i<this.length;i++){
            if(temp.next===null){
                this.tail=prev;
            }else{
                
                prev=temp;
                temp=prev.next
            }
        }
        this.tail.next=null;
        this.length--;
        if(this.length===0){
            this.head=null;
            this.tail=null;
        }
        return temp;
    }

    unshift(value){
    let newNode=new Node(value);

      if(!this.head ){
        this.head=newNode;
        this.tail=newNode;
      }
        
      newNode.next=this.head;
      this.head=newNode;
      this.length++;
      return this;

    }

    shift(){
        if(!this.head ){
            this.head=null;
            this.tail=null;
          }
        
    }
}

const myLinkedList= new LinkedList();
myLinkedList.push(10);
myLinkedList.push(5);

console.log("this : ",myLinkedList.unshift(6))
console.log(myLinkedList)