/**
 * linear search
 * - indexOf
 * - includes
 * - find
 * - findIndex
 */

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i
  }
  return -1
}
