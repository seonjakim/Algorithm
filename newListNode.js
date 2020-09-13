//참고자료 : https://www.youtube.com/watch?v=gJjPWA8wpQg
//Why use lined list? if use array and add items in between, gotta move every elements but linked list you just need to give reference.

//9월13일 23분까지 들었음 print부분 나중에 듣기!

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

LinkedList.fromValues = function (...value) {
  const ll = new LinkedList();
  for (let i = value.length - 1; i >= 0; i--) {
    ll.insertAtHead(value[i]);
  }
  return ll;
};

module.exports = LinkedList;
