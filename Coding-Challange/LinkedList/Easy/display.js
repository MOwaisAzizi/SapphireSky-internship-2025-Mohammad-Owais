//4-Write a function to traverse and print a linked list.
function display(first) {
    let temp = first;
    while (temp !== null) {
        console.log(temp.data);
        temp = temp.next;
    }
}

module.exports = display;
