// Bottom-up Approach

let fib_bottom_up = function (n) {
  if (n == 0 || n == 1) {
    return n;
  }
  let twoBehind = 0;
  let oneBehind = 1;
  let result = 0;
  for (let i = 1; i < n; i++) {
    result = twoBehind + oneBehind;
    twoBehind = oneBehind;
    oneBehind = result;
  }
  return result;
};

// Memoization & Recursion

let memo = {};
let fib = function (n) {
  if (n === 0 || n === 1) {
    return n;
  } else if (memo[n]) {
    return memo[n];
  } else {
    let result = fib(n - 1) + fib(n - 2);
    memo[n] = result;
    return result;
  }
};
