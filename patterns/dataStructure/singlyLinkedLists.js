class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    let node = new Node(val)
    if (!this.head) {
      this.head = node
      this.tail = this.head
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.length++
    return this
  }
  pop() {
    let current = this.head
    if (!current) return undefined
    let save = current
    while (current.next) {
      save = current
      current = current.next
    }
    this.tail = save
    this.tail.next = null
    this.length--
    if (!this.length) {
      this.head = null
      this.tail = null
    }
    return current
  }
  shift() {
    if (!this.head) return undefined
    let current = this.head
    this.head = current.next
    this.length--
    if (!this.length) this.tail = null
    return current
  }
}
