/**
 * Priority Queue
 *
 * a data structure where each element has a priority.
 * Elements with higher priorities are served before elements with lower priorities
 */

class Node {
  constructor(val, priority) {
    this.value = val
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(val, priority) {
    let node = new Node(val, priority)
    this.values.push(node)
    this.bubbleUp()
  }

  bubbleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if (element.priority <= parent.priority) break
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }

  dequeue() {
    const max = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.bubbleDown()
    }
    return max
  }

  bubbleDown() {
    let idx = 0
    const len = this.value.length
    const element = this.value[0]
    while (idx < len) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 1
      let leftChild, rightChildIdx
      let swap = null
      if (leftChildIdx < len) {
        leftChild = this.value[leftChildIdx]
        if (leftChild.priority > element.priority) swap = leftChildIdx
      }
      if (rightChildIdx < len) {
        rightChild = this.value[rightChildIdx]
        if (
          rightChild.priority > element.priority &&
          swap !== null &&
          rightChild.priority > leftChild.priority
        )
          swap = rightChildIdx
      }

      if (swap === null) break
      this.value[idx] = this.value[swap]
      this.value[swap] = element
      idx = swap
    }
  }
}
