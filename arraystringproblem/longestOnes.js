// ?Longest Ones (Binary Array Problem)
const longestOnes = (numArray, k) => {
  let left = 0;
  let maxLen = 0;
  let zeroes = 0;

  for (let right = 0; right < numArray.length; right++) {
    if (numArray[right] === 0) zeroes++;

    while (zeroes > k) {
      if (numArray[left] === 0) zeroes--;
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};
const result = longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2);
console.log(result);
