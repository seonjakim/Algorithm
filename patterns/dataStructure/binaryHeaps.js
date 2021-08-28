/**
 *  Max Binary Heap
 *  - parent nodes are always larger than child nodes
 *  Min Binary Heap
 *  - parent nodes are always smaller than child nodes
 *
 *  for any index if an array n
 *  the left child is stored at 2n + 1
 *  the right child is at 2n + 2
 *
 *  for any child node at index n
 *  its parent is at index Math.floor((n - 1) / 2)
 *
 * insertion : O(log n)
 * removal : O(log n)
 * search : O(n)
 */

class MaxBinaryHeap {
  constructor() {
    this.value = []
  }

  myInsert(node) {
    this.value.push(node)
    let nodeIdx = this.value.length - 1
    const returnParentIdx = (idx) => {
      return Math.floor((idx - 1) / 2)
    }
    let parentIdx = returnParentIdx(nodeIdx)
    while (parentIdx > -1) {
      let parentNode = this.value[parentIdx]
      if (parentNode > node) break
      this.value[parentIdx] = node
      this.value[nodeIdx] = parentNode
      nodeIdx = parentIdx
      parentIdx = returnParentIdx(nodeIdx)
    }
  }

  insert(element) {
    this.value.push(element)
    this.bubbleUp()
  }
  bubbleUp() {
    let idx = this.value.length - 1
    const element = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if (element <= parent) break
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }

  extractMax() {
    const max = this.value[0]
    const end = this.value.pop()
    if (this.value.length > 0) {
      this.value[0] = end
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
        if (leftChild > element) swap = leftChildIdx
      }
      if (rightChildIdx < len) {
        rightChild = this.value[rightChildIdx]
        if (rightChild > element && swap !== null && rightChild > leftChild)
          swap = rightChildIdx
      }

      if (swap === null) break
      this.value[idx] = this.value[swap]
      this.value[swap] = element
      idx = swap
    }
  }
}
