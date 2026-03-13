const StackArray = require("../Easy/StackArray");

//10-Write a function to sort a stack using recursion.
function sortStack(stackArray) {
    if (stackArray.isEmpty()) return

    //1,3,10.2,5
    let temp = stackArray.pop() //5
    sortStack(stackArray)

    insertElements(stackArray, temp)

}

function insertElements(stackArray, temp) { //2,4,1,2
    if (stackArray.isEmpty() || stackArray.peek() < temp) {
        stackArray.push(temp)//2,1
        return
    }

    let element = stackArray.pop()
    insertElements(stackArray, temp)

    stackArray.push(element)
}

//Test
const stack = new StackArray()
stack.push(5)
stack.push(2)
stack.push(10)
stack.push(3)
stack.push(1)

sortStack(stack)
console.log(stack);
