/**
 * a process that calls itself
 *
 * The call stack
 *
 * Two essential parts of a recursive function
 * - Base case
 * - Different input
 *
 * Helper Method Recursion
 *
 * function outer(input) {
 *  // if the functon itself do the recursion,
 *  // the array will remain empty forever!
 *  var outerScopedVariable = []
 *
 *  function helper(helperInput) {
 *    helper(helperInput--)
 *  }
 *
 *  helper(input)
 *  return outerScopedVariable
 * }
 *
 */

// Pure recursion
/**
 * Pure recursion tips
 *
 * - for array, use methods like slice, the spread operator
 *    and concat that make copies of arrays so you do not mutate them
 * - remember that strings are immutable so you will need to use methods
 *    like slice, substr, or substring to make copies of strings
 * - To make copies of objects use Object.assign or the spread operator
 */

function collectOddValues(arr) {
  let newArr = []

  if (arr.length === 0) return newArr
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)))
  return newArr
}

/** test */
function power(base, exponent) {
  if (exponent === 0) return 1
  return base * power(base, exponent - 1)
}

console.log(power(2, 2))

function factorial() {
  let number = arguments[0]
  if (number === 1 || number === 0) return 1
  return number * factorial(number - 1)
}

console.log(factorial(1))

function productOfArray(arr) {
  if (arr.length === 1) return arr[0]
  return arr[0] * productOfArray(arr.slice(1))
}

console.log(productOfArray([1, 2, 3, 10]))

function recursiveRange(num) {
  if (num === 0) return 0
  return num + recursiveRange(num - 1)
}
console.log(recursiveRange(6))

function fib(num, memo = []) {
  if (memo[num] !== undefined) {
    return memo[num]
  }
  let res
  if (num <= 2) {
    res = 1
  } else {
    res = fib(num - 1, memo) + fib(num - 2, memo)
  }
  memo[num] = res
  return res
}
console.log(fib(4))
