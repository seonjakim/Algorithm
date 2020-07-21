//참고자료 : https://www.youtube.com/watch?v=Ivyh3V4QolA&list=PLZlA0Gpn_vH8ShxSPO48q8u0SeQBuCdnN

var twoSum = function (nums, target) {
  const previousValues = {};
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const neededValue = target - currentNumber;
    const index2 = previousValues[neededValue];
    if (index2 != null) {
      return [index2, i];
    } else {
      previousValues[currentNumber] = i;
    }
  }
};
