/**
 * linear search
 * - indexOf
 * - includes
 * - find
 * - findIndex
 *
 * best : O(1)
 * worst : O(n)
 * average : O(n)
 */

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i
  }
  return -1
}

/**
 * Binary Search
 * it only works on sorted array
 * Divide and Conquer
 *
 * worst and average : O(log n)
 * best : O(1)
 */

function binarySearch(arr, target) {
  let start = 0
  let end = arr.length - 1
  let mid = Math.floor((start + end) / 2)

  while (arr[mid] !== target) {
    if (start >= end) return -1
    if (target < arr[mid]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
    mid = Math.floor((start + end) / 2)
  }
  return mid
}

/**
 * Naive String Search
 */

function stringSearch(str, sub) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === sub[0]) {
      let j
      for (j = 0; j < sub.length; j++) {
        if (str[i + j] !== sub[j]) break
      }
      if (j === sub.length) count++
    }
  }
  return count
}

console.log(stringSearch('lorie loled', 'lo'))
