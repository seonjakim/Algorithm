/**
 * store key and value pair
 *
 * Collisions
 * 1. separate chaining
 *  save in the same index
 * 2. linear probing
 * find a next empty space to store, only can store limited items
 *
 * insert : O(1)
 * Deletion : O(1)
 * Access : O(1)
 */

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }

  set(key, value) {
    let hashed = this._hash(key)
    if (!this.keyMap[hashed]) {
      this.keyMap[hashed] = []
    }
    this.keyMap[hashed].push([key, value])
  }

  get(key) {
    let hashed = this._hash(key)
    let hashedArr = this.keyMap[hashed]
    for (let i = 0; i < hashedArr.length; i++) {
      if (hashedArr[i][0] === key) return hashedArr[i][1]
    }
    return undefined
  }

  values() {
    let valuesArr = []
    for (let i = 0; i < this.keyMap.length; i++) {
      let innerArr = this.keyMap[i]
      for (let j = 0; j < innerArr.length; j++) {
        if (!valuesArr.includes(innerArr[j][1])) valuesArr.push(innerArr[j][1])
      }
    }
    return valuesArr
  }
  keys() {
    let keysArr = []
    for (let i = 0; i < this.keyMap.length; i++) {
      let innerArr = this.keyMap[i]
      for (let j = 0; j < innerArr.length; j++) {
        if (!keysArr.includes(innerArr[j][0])) keysArr.push(innerArr[j][0])
      }
    }
    return keysArr
  }
}
