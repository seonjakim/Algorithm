// my version
function validAnagram(arr1, arr2) {
  // add whatever parameters you deem necessary - good luck!
  let first = {};
  for (let val of arr1) {
    first[val] = (first[val] || 0) + 1;
  }
  for (let val of arr2) {
    first[val] = (first[val] || 0) - 1;
  }
  for (let val in first) {
    if (first[val] !== 0) return false;
  }
  return true;
}

// the lecturer version
function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) return false;
    else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
