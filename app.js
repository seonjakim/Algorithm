const LinkedList = require("./newListNode");

const l1 = new LinkedList();
l1.insertAtHead(10);
l1.insertAtHead(20);

console.log(l1);

const ll = LinkedList.fromValues(10, 20);
console.log(ll);
