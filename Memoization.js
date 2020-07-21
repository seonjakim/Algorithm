const prevValues = [];

function square(n) {
  if (prevValues[n] != null) {
    //저장된 값이랑 같으면 그냥 그 값을 리턴해주는 부분
    return prevValues[n];
  }
  let result = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      result += 1;
    }
  }
  prevValues[n] = result;
  return result;
}

//서버에 요청할 때 많이 사용되는 알고리즘
//이미 있는 정보일 경우 불필요한 요청을 서버에 하지 않도록 하는 기능 (cache)

//아래는 Fibonacci sequence 예제
function fib(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

//without memoization it takes very long to calculate
//example with memoization
function fib(n, prevValues = []) {
  if (prevValues[n] != null) {
    return prevValues[n];
  }
  let result;
  if (n <= 2) {
    result = 1;
  } else {
    result = fib(n - 1, prevValues) + fib(n - 2, prevValues);
  }
  prevValues[n] = result;
  return result;
}
