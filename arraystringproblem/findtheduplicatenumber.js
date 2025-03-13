const findDuplecate = (nums) => {
  let t = nums[0];
  let h = nums[0];

  // The cycle exists, so the h will eventually meet the t
  do {
    t = nums[t]; // Move t by one step
    h = nums[nums[h]]; //Move h by two steps
  } while (t !== h);

  // Find the entry point to the cycle (duplicate number)
  let p1 = nums[0];
  let p2 = t; // Pointer2 is now at the meeting point
  while (p1 !== p2) {
    p1 = nums[p1]; // Move pointer1 by one step
    p2 = nums[p2]; // Move pointer2 by one step
  }
  return p1;
};

const arr = [3, 1, 3, 4, 2];

const result = findDuplecate(arr);
console.log(result);
