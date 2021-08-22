/**
 * LIFO data structure
 *
 * - managing function invocations
 * - undo / redo
 * - routing (the history object)
 *
 * insertion : O(1)
 * removal : O(1)
 * searching : O(n)
 * access : O(n)
 */

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  push(val) {
    let node = new Node(val)
    if (!this.first) {
      this.first = node
      this.last = node
    } else {
      let tmp = this.first
      this.first = node
      this.first.next = tmp
    }
    return ++this.size
  }
  pop() {
    if (!this.size) return null
    let tmp = this.first
    if (this.first === this.last) this.last = null
    this.first = this.first.next
    this.size--
    return tmp.val
  }
}
