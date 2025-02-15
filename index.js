// const insertionSort = (array) => {
//   const n = array.length;
//   for (let i = 0; i < array.length - 1; i++) {
//     const minIndex = i;
//     for (let j = i + 1; j < n; j++) {
//       if (array[j] < array[minIndex]) {
//         minIndex = j;
//       }

//     }
//     console.log(minIndex, i, "lkjhgfdsa");
//     if(minIndex !== i){
//         let temp = array[i];
//         array[i] = array[minIndex];
//         array[minIndex] = temp
//     }
//   }
//   return array;
// };

// const myArray = [5, 11, 12, 22, 25, 34, 64, 90];
// const result = insertionSort(myArray);
// console.log(result);

// fibonacciNumber

// function fibonacciNumber(n, memo = {}) {
//   if (n <= 1) return n;

//   if (memo[n]) return memo[n];

//   memo[n] = fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
//   return memo[n];
// }
// console.log(fibonacciNumber(6));

// Count Frequency of Elements in an Array

const arr = [1, 2, 2, 3, 3, 3, 4, 1, 5, 2];

// normal

// function countFrequency(arr) {
//   arr.sort((a, b) => a - b);
//   console.log(arr);

//   let frequentElement = [];
//   let count = 1;

//   for (let i = 1; i <= arr.length; i++) {
//     if (arr[i] === arr[i - 1]) {
//       count++;
//     } else {
//       frequentElement.push([arr[i - 1], count]);
//       count = 1;
//     }
//   }
//   return frequentElement;
// }

// const result = countFrequency(arr);
// console.log(result);

// using hashmap

// function countFrequency(arr) {
//   let freqMap = {};

//   for (const num of arr) {
//     if (freqMap[num]) {
//       freqMap[num]++;
//     } else {
//       freqMap[num] = 1;
//     }
//   }
//   return freqMap;
// }

// const result = countFrequency(arr);
// console.log(result);

//  two summ

// function twoSum(num, target) {
//   for (let i = 0; i < num.length; i++) {
//     for (let j = i + 1; j < num.length; j++) {
//       if (num[i] + num[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }

// using hasmap

// function twoSum(num, target) {
//   let numMap = {};
//   console.log(numMap);

//   for (let i = 0; i < num.length; i++) {
//     let complement = target - num[i];

//     if (numMap.hasOwnProperty(complement)) {
//       return [numMap[complement], i];
//     }
//     numMap[num[i]] = i;
//   }
//   return [];
// }

// const num = [2, 11, 7, 15];
// const target = 9;
// const result = twoSum(num, target);
// console.log(result);

//? Find the First Non-Repeating Character in a String

// function nonRepeatingChar(str) {
//   for (let i = 0; i < str.length; i++) {
//     let isUnique = true;
//     for (let j = 0; j < str.length; j++) {
//       if (i !== j && str[i] === str[j]) {
//         isUnique = false;
//         break;
//       }
//     }
//     if (isUnique) {
//       return str[i];
//     }
//   }
//   return null;
// }

// const string = "swiss";
// const result = nonRepeatingChar(string);
// console.log(result);

// const id = Symbol("123");
// const id1 = Symbol("123");
// console.log(id, id1);
// console.log(id == id1);

// const randomValue = Math.round(Math.random() * 10000);
// console.log(randomValue);

// const string = "aamir hussain";
// const data = Array.from(string);
// console.log(data);

// console.log(string.split(" ").join(" "));

// ? median of sorted array

// function median(num1, num2) {
//   const newArray = [...num1, ...num2].sort((a, b) => a - b);
//   const mid1 = newArray[Math.floor(newArray.length / 2 - 1)];
//   const mid2 = newArray[Math.floor(newArray.length / 2)];

//   console.log(newArray, mid1, mid2);

//   if (newArray.length % 2 === 0) {
//     return (mid1 + mid2) / 2;
//   } else {
//     return mid2;
//   }
// }

// const num1 = [1, 3, 4];
// const num2 = [2, 5, 6];

// console.log(median(num1, num2));

function longestPalindrome(s) {
  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
  }
}

const s = "babad";

console.log(longestPalindrome(s));
