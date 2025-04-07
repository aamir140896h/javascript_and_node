// function outerFunction(outerVar) {
//   console.log("outer function executed");

//   return function innerFunction(innerVar) {
//     console.log("outerVar:", outerVar);
//     console.log("innerVar:", innerVar);
//   };
// }

// const result = outerFunction("hello ");
// result(" world");

// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const increament = counter();
// increament();
// increament();
// increament();

// var a = 9;
// var a = 10;
// console.log(a);
// let x = 10;
// x = 19;

// clouser trap
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// for (let i = 1; i <= 5; i++) {
//   ((j) => {
//     setTimeout(() => {
//       console.log(j);
//     }, 1000);
//   })(i);
// }

// hoisting

// console.log(a);
// var a = 10;

// var a;
// console.log(a);
// a = 10;

// 3. Function Hoisting
// syaHi();
// function syaHi() {
//   console.log("hiii");
// }

// 4. Function Expression Hoisting
// greet();
// var greet = function () {
//   console.log("Hello!");
// };

// 6. Shadowing with Hoisting
// var a = 5;
// function foo() {
//   console.log(a);
//   var a = 10;
// }
// foo();

// 7. Combined Function and Variable Hoisting
// var test = 1;
// function test() {
//   console.log("Function test");
// }

// console.log(typeof test);

// Lexical Scope

// let a = 5;
// function one() {
//   let a = 10;
//   two();
// }
// function two() {
//   console.log(a);
// }
// one();

// Prototypal Inheritance

// function A() {
//   this.value = 1;
// }

// A.prototype.print = function () {
//   return this.value;
// };

// function B() {
//   A.call(this);
// }

// B.prototype = Object.create(A.prototype);
// B.prototype.constructor = B;

// const obj = new B();

// console.log(obj.print());

// ? Different this Scenarios

// 1. Global Context

// console.log(this);

// 2. Inside a Function (non-strict mode)

// function show() {
//   console.log(this);
// }
// show(); // 👉 In browser: Window (or global object)

// ?3. Inside a Function (strict mode)

// "use strict";
// function show() {
//   console.log(this);
// }
// show(); // 👉 undefined

// ? 4. Inside an Object Method

// const user = {
//   name: "Aamir",
//   greet() {
//     console.log(this.name);
//   },
// };
// user.greet(); // 👉 "Aamir"

// ? 5. Arrow Functions
// ? Arrow functions don’t have their own this — they inherit from the parent lexical scope.

// const user = {
//   name: "Aamir",
//   greet: () => {
//     console.log(this.name); // ❌ undefined
//   },
// };
// user.greet(); // ⚠️ Not what you expect!

// ? 6. In Constructor Functions
// function Person(name) {
//   this.name = name;
// }
// const p = new Person("Aamir");
// console.log(p.name); // 👉 "Aamir"

// ? 7 With bind, call, apply

// function greet() {
//   console.log(`Hi ${this.name}`);
// }

// const user = { name: "Aamir" };
// greet.call(user);
// greet.apply(user);
// const boundGreet = greet.bind(user);
// boundGreet();

// const user = {
//   name: "Aamir",
//   greet() {
//     // const inner = function () {
//     //   console.log(this.name);
//     // };

//     // ? to fix thsis as a regular function u can use this two way
//     // ! 1 one way
//     // const inner = function () {
//     //   console.log(this.name);
//     // }.bind(this);

//     // ! 2nd way
//     // const that = this;
//     // const inner = function () {
//     //   console.log(that.name);
//     // };

//     const inner = () => console.log(this.name);
//     inner();
//   },
// };
// user.greet(); // 👉 undefined (because `inner` has global `this`)

// ? call Apply and bind ();

// ! call : the call method invoke a function immediately with the specified the value and indivisual arg
// const person = {
//   fullMame() {
//     return `Hi I am ${this.firstName} ${this.lastName}`;
//   },
// };
// const user = { firstName: "Aamir", lastName: "Hussain" };

// console.log(person.fullMame.call(user));

// ! apply  : the call method invoke a function immediately with the specified this value and array arg

// const mathUtility = {
//   sum(a, b, c) {
//     return `${this.name} sum is ${a + b + c}`;
//   },
// };

// const user = { name: "Aamir" };
// console.log(mathUtility.sum.apply(user, [1, 2, 3]));

// ! bind(): the bine method retuns a new function with the specified this value and opptionally preset args, it does not call the function immediatly

// const notifier = {
//   notify(message) {
//     console.log(`${this.name} ${message}`);
//   },
// };
// const user = { name: "Aamir" };
// const result = notifier.notify.bind(user, "You have a new message!");
// result();

// Array and objects methods

// const newArray = Array.from({ length: 5 }, (_, index) => index + 1);
// console.log(newArray);

// const user = { name: "Aamir" };
// const newObject = Object.assign({}, user, { age: 28 });

// console.log(newObject);
// console.log(newObject.hasOwnProperty("age"));

// const user = { name: "Aamir" };
// const freezedObject = Object.freeze(user);
// freezedObject.name = "hussain";

// ? asynchronous concepts in JavaScript
// 1. Callback Functions

// function fetchedData(callback) {
//   setTimeout(() => {
//     console.log("fetched data");
//     callback();
//   }, 1000);
// }

// fetchedData(() => console.log("callback executed!"));

// ? 2. setTimeout / setInterval

// setTimeout(() => console.log("execute after 1 sec"), 1000);

// let count = 0;
// const interval = setInterval(() => {
//   console.log("execute every one sec", count);
//   if (++count === 3) clearInterval(interval);
// }, 1000);

// ? 3. Promises

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("promis resoleve"), 1000);
// });

// promise.then((res) => console.log(res));

// ? 4. async/await

// async function getData() {
//   try {
//     const result = await fetch("https://api.example.com/data");
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getData();

// ? 5. fetch API
const response = fetch("https://api.example.com/data");
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) => {
//   console.log(err);
// });

// const data = await response.json();
// console.log(data);
