//7-How do you implement a stack with two queues?
//two Queue that works like and stack
class StackUsingQueues {
    constructor() {
        this.queue1 = []; 
        this.queue2 = []; 
    }

    push(element) {
        while(this.queue1.length > 0){
            //insert to last(Enqueue) and delete from front
            this.queue2.push(this.queue1.shift())
        }

        this.queue1.push(element)

        while(this.queue2.length > 0){
            //inset at last and delete from front
            this.queue1.push(this.queue2.shift())
        }
    }

     pop(){
        if (this.queue1.length === 0) {
            console.log("Stack is empty!");
            return null;
        }
        return this.queue1.shift(); 
     }

    peek() {
        return this.queue1.length === 0 ? null : this.queue1[0];
    }

    isEmpty() {
        return this.queue1.length === 0;
    }
}

// Testing
const stack = new StackUsingQueues();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);

console.log(stack.pop()); 
console.log(stack.peek()); 
console.log(stack.pop()); 
console.log(stack.isEmpty()); 
