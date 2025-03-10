const maxVowelCount = (str) => {
  const vowel = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) vowelCount++;
  }
  return vowelCount;
};

const str = "abciiidef";
const result = maxVowelCount(str);
console.log(result);
