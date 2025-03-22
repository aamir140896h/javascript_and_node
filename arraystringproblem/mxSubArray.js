// ? find the max sum subarray

const mxSubArray = (arr) => {
  let maxSum = -Infinity;
  let currentSum = 0;
  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum = currentSum + arr[i];

    // If we find a new maximum sum, update the maxSum and track the indices
    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }

    // If currentSum becomes negative, reset it and set the potential start of the subarray
    if (currentSum < 0) {
      currentSum = 0;
      tempStart = i + 1;
    }
  }

  // Return the maximum sum and the subarray
  console.log(start, end + 1);

  const subArray = arr.slice(start, end);
  return { maxSum, subArray };
};

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = mxSubArray(arr);
console.log(result.maxSum, "max sum");
console.log(result.subArray, "subarray");
