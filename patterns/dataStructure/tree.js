/**
 *  a data structure that consists of nodes
 *  in a parent / child relationship
 *
 *  - HTML DOM
 *  - network routing
 *  - abstract syntax tree
 *  - artificial intelligent
 *  - computer file systems
 */

/**
 * Binary search tree
 * insertion : O(log n)
 * searching : O(log n)
 */

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  // insert(val) {
  //   let node = new Node(val)
  //   if (!this.root) {
  //     this.root = node
  //     return this
  //   }
  //   let current = this.root
  //   while (current !== null) {
  //     if (current.val > val) {
  //       current = current.left
  //     } else {
  //       current = current.right
  //     }
  //   }
  //   current = node
  //   return this
  // }
  // 마음에 안들지만 내 로직은 안되네... 개선해봐야겠다 나중에
  insert(val) {
    let node = new Node(val)
    if (!this.root) {
      this.root = node
      return this
    }
    let current = this.root
    while (true) {
      if (val === current.val) return undefined
      if (val < current.val) {
        if (current.left === null) {
          current.left = node
          return this
        }
        current = current.left
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = node
          return this
        }
        current = current.right
      }
    }
  }

  contains(val) {
    if (this.root === null) return false
    let current = this.root
    while (current !== null) {
      if (current.val === val) return true
      if (current.val > val) {
        current = current.left
      } else if (current.val < val) {
        current = current.right
      }
    }
    return false
  }
}
