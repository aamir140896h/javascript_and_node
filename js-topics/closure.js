// function outerFunction(outerVar) {
//   console.log("outer function executed");

//   return function innerFunction(innerVar) {
//     console.log("outerVar:", outerVar);
//     console.log("innerVar:", innerVar);
//   };
// }

// const result = outerFunction("hello ");
// result(" world");

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const increament = counter();
increament();
increament();
increament();

// var a = 9;
// var a = 10;
// console.log(a);
// let x = 10;
// x = 19;
