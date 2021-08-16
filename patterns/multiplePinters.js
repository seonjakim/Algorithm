function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// count unique values
// my solution
function countUniqueValues(arr) {
  let obj = {};
  for (let val of arr) {
    obj[val] = (obj[val] || 0) + 1;
  }
  return Object.keys(obj).length;
}

function countUniqueValues(arr) {
  let obj = {};
  let i = 0;
  let j = 1;
  if (arr.length < 1) return 0;
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }
  return i + 1;
}

// the lecturer solution
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
}
