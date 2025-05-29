const lengthOfLongestSubstring = (s) => {
  let start = 0;
  let seen = {};
  let maxLen = 0;
  let result = "";

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    if (seen[char] !== undefined && seen[char] >= start) {
      start = seen[char] + 1;
    }

    seen[char] = end;

    if (end - start + 1 > maxLen) {
      maxLen = end - start + 1;
      result = s.slice(start, end + 1);
    }
  }

  return result;
};

const s = "adbcabcbb";
const result = lengthOfLongestSubstring(s);
console.log(result);
