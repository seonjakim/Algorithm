/**
 * FIFO data structure
 *
 * - uploading resources
 * - printing / task processing
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

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  /**
   * add from the back and delete from the front
   * this way is better since deleting from the back
   * has to traverse all the way just before the last node
   * and swap
   */
  enqueue(val) {
    let node = new Node(val)
    if (!this.first) {
      this.first = node
      this.last = node
    } else {
      this.last.next = node
      this.last = node
    }
    return ++this.size
  }
  dequeue() {
    if (!this.first) return null
    let tmp = this.first
    if (this.first === this.last) this.last = null
    this.first = this.first.next
    this.size--
    return tmp.val
  }
}
