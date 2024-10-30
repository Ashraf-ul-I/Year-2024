class MyArray{
    constructor(){
        this.length=0;
        this.data={}
    }
    push(newValue){
         this.data[this.length]=newValue;
        this.length++;

        return this.length;
    }
    get(index){
        return this.data[index];
    }
    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];

        this.length=this.length-1;
        return lastItem;
        
    }

    shift(){
        const firstItem=this.data[0];
       
        for(let i=0;i<this.length;i++){
          this.data[i]=this.data[i+1]
        }
        console.log(this.data)

        delete this.data[this.length-1];//After rearrange the index and value of the array the last item will be undefined so for that we just delete the last item;
        this.length--;
        return firstItem;
        
    }

    deleteByIndex(index){
        const item=this.data[index];
        for(let i=index;i<this.length;i++){
            
                this.data[i]=this.data[i+1]

        }

            delete this.data[this.length-1];
            this.length--;
            return item;
        }
    }


const mynewArray=new MyArray();
mynewArray.push('hey ashraful');
mynewArray.push('Orange');
mynewArray.push('apple');
mynewArray.push('malta');
mynewArray.push('sour');
mynewArray.pop();
console.log(mynewArray)
console.log(mynewArray.shift());
console.log(mynewArray)
console.log(mynewArray.deleteByIndex(1));
console.log(mynewArray)