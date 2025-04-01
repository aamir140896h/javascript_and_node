// const twoSum = (arr, target) => {
//   const map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     let complement = target - arr[i];
//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }
//     map.set(arr[i], i);
//   }
//   return [];
// };

const twoSum = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
};
// const numArray = [2, 7, 11, 15];
// const target = 9;

// const result = twoSum(numArray, target);
// console.log(result);
