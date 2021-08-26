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

/**
 * tree traversal
 * breath first
 * - travel every node in the same level
 * depth first
 * - pre order : when you want to clone the tree in the other place
 * - post order :
 * - in order : the result gonna be a sorted array
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

  BFS() {
    let queue = [],
      data = [],
      node = this.root
    queue.push(node)
    while (queue.length) {
      node = queue.shift()
      data.push(node)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return data
  }

  DFSPreOrder() {
    let data = [],
      current = this.root
    function traverse(node) {
      data.push(node.val)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(current)
    return data
  }

  // bottom up
  DFSPostOrder() {
    let data = [],
      current = this.root
    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.val)
    }
    traverse(current)
    return data
  }
  // return all the left side value and return right side
  DFSInOrder() {
    let data = [],
      current = this.root
    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.val)
      if (node.right) traverse(node.right)
    }
    traverse(current)
    return data
  }
}
