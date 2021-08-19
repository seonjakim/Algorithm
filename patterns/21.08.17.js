function averagePair(arr, target) {
  // add whatever parameters you deem necessary - good luck!
  if (!arr.length) return false
  let firstPair = (arr[0] + arr[1]) / 2
  let i
  for (i = 2; i < arr.length; i++) {
    if (firstPair !== target) {
      firstPair = (firstPair * 2 - arr[i - 2] + arr[i]) / 2
    }
    if (firstPair === target) return true
  }
  return false
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))
// fail to solve, cannot understand the instruction properly

function isSubsequence(str2, str1) {
  // good luck. Add any arguments you deem necessary.
  if (str1.length < str2.length) return false
  let i = 0
  let j = 0
  while (j < str1.length) {
    if (str1[j] === str2[i] && i < str2.length) {
      i++
    }
    j++
  }
  return i === str2.length ? true : false
}

console.log(isSubsequence('hello', 'hello world'))

function maxSubarraySum(arr, len) {
  // add whatever parameters you deem necessary - good luck!
  if (!arr.length || !len || arr.length < len) return null
  let maxSum = 0
  let tempSum = 0
  let i = 0
  while (i < len) {
    maxSum += arr[i]
    i++
  }
  tempSum = maxSum
  while (i < arr.length) {
    tempSum = tempSum - arr[i - len] + arr[i]
    if (maxSum < tempSum) {
      maxSum = tempSum
    }
    i++
  }
  return maxSum
}

console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2))
