const findPalindromicSubstrings = (str) => {
  let palindromeSubstring = [];
  const isPalindrome = (s) => s === s.split("").reverse().join("");

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let subString = str.slice(i, j);
      console.log(subString);
      if (isPalindrome(subString) && subString.length > 1) {
        palindromeSubstring.push(subString);
      }
    }
  }
  return palindromeSubstring;
};
const inputStr = "cabbac";
const result = findPalindromicSubstrings(inputStr);
console.log(result, "result");

// const difference = target - nums[i];
// if(map.has(difference)){
//     return [map.get(difference), i]
// }
// map.set(nums[i], i)
