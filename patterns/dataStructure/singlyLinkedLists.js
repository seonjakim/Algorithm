/**
 *  insertion : O(1)
 *  removal : O(1) or O(n)
 *  searching : O(n)
 *  access : O(n)
 */

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
  unshift(val) {
    let newHead = new Node(val)
    if (!this.head) {
      this.head = newHead
      this.tail = this.head
    } else {
      newHead.next = this.head
      this.head = newHead
    }
    this.length++
    return this
  }
  get(idx) {
    if (0 > idx || this.length <= idx) return null
    let count = 0
    let current = this.head
    while (count !== idx) {
      current = current.next
      count++
    }
    return current
  }
  set(idx, val) {
    let target = this.get(idx)
    if (target) {
      target.val = val
      return true
    }
    return false
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false
    if (idx === 0) {
      this.unshift(val)
      return true
    } else if (idx === this.length) {
      this.push(val)
      return true
    } else {
      let node = new Node(val)
      let target = this.get(idx - 1)
      node.next = target.next
      target.next = node
      this.length++
      return true
    }
  }
  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined
    if (idx === this.length - 1) return this.pop()
    if (idx === 0) return this.shift()
    let target = this.get(idx - 1)
    let result = target.next
    target.next = result.next
    this.length--
    return result
  }
  myreverse() {
    let tmpHead = this.head
    this.head = this.tail
    this.tail = tmpHead
    let tmp = tmpHead.next
    let prev = tmpHead
    tmpHead.next = null
    while (tmpHead) {
      tmpHead = tmp
      tmp = tmpHead.next
      tmpHead.next = prev
      prev = tmpHead
    }
  }
  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node
    let next
    let prev = null
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }
}
