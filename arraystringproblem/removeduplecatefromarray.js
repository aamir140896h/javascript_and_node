// ?  this two pointer approach for sorted array

// const removeduplecatefromarray = (arr) => {
//   let j = 1;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1]) {
//       arr[j] = arr[i];
//       j++;
//     }
//   }
//   return j;
// };
// let arr = [1, 1, 2, 2, 3, 4, 4, 5];
// const result = removeduplecatefromarray(arr);

// console.log(arr.slice(0, result));
// console.log(result);

// ?  this hash approach for unsorted array

const removeduplecatefromarray = (arr) => {
  let uniqueHash = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueHash[arr[i]]) {
      uniqueHash[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
};

// let arr = [4, 3, 4, 1, 2, 3, 5, 2];
let arr = [1, 1, 2, 2, 3, 4, 4, 5];
const uniqueElement = removeduplecatefromarray(arr);
console.log(uniqueElement);
