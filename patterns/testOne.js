function sameFrequency(arr1, arr2) {
  // good luck. Add any arguments you deem necessary.
  let first = arr1.toString();
  let second = arr2.toString();
  if (first.length !== second.length) return false;
  let obj = {};
  for (let val of first) {
    obj[val] = (obj[val] || 0) + 1;
  }
  for (let val of second) {
    if (!obj[val]) return false;
    else {
      obj[val] = obj[val] - 1;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));

function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  let newArr = [...arguments];
  if (typeof newArr[0] === 'string') {
    newArr.sort();
  } else {
    newArr.sort((a, b) => a - b);
  }
  let i = 0;
  let j;
  for (j = 1; j < newArr.length; j++) {
    if (newArr[i] !== newArr[j]) {
      i++;
    } else {
      return true;
    }
  }
  return false;
}
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
// Duplicate관련된 함수는 Set을 사용해도 됨!!!!
