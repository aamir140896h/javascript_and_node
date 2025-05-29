const secondlargestandsecondSmallest = (arr) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
      console.log(secondLargest);
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      console.log(secondLargest);
      secondLargest = arr[i];
      console.log(secondLargest);
    }
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }
  return { secondLargest, secondSmallest };
};

let arr = [3, 5, 1, 9, 2, 8];
const result = secondlargestandsecondSmallest(arr);
console.log(result);
