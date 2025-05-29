const moveAllZerostolast = (arr) => {
  // let zeros = [];
  // let nozeros = [];
  // arr.map((item) => {
  //   if (item === 0) {
  //     zeros.push(item);
  //   } else {
  //     nozeros.push(item);
  //   }
  // });
  // console.log(zeros, nozeros);
  // const movedZeros = [...nozeros, ...zeros];
  // return movedZeros;
  /////////////////////////////

  let lastNonZeroIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[lastNonZeroIndex++] = arr[i];
    }
  }

  while (lastNonZeroIndex < arr.length) {
    arr[lastNonZeroIndex++] = 0;
  }

  return arr;
};

let arr = [0, 1, 0, 3, 12];
const result = moveAllZerostolast(arr);
console.log(result);
