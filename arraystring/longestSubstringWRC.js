const lengthOfLongestSubstring = (s) => {
  let left = 0;
  let maxLen = 0;
  const subSet = new Set();

  for (let right = 0; right < s.length; right++) {
    if (subSet.has(s[right])) {
      subSet.delete(s[left]);
      left++;
    }
    subSet.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};

const s = "adbcabcbb";
const result = lengthOfLongestSubstring(s);
console.log(result);
