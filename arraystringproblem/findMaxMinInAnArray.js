const findMaxMin = (arr) => {
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { max, min };
};
let arr = [3, 5, 1, 9, 2, 8];
const result = findMaxMin(arr);
console.log(result);
