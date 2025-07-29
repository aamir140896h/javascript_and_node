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

// ! call : the call method invoke a function immediately with the specified this value and indivisual arg
// const person = {
//   fullMame() {
//     return `Hi I am ${this.firstName} ${this.lastName}`;
//   },
// };
// const user = { firstName: "Aamir", lastName: "Hussain" };

// console.log(person.fullMame.call(user));

// ! apply  : the apply method invoke a function immediately with the specified this value and array arg

// const mathUtility = {
//   sum(a, b, c) {
//     return `${this.name} sum is ${a + b + c}`;
//   },
// };

// const user = { name: "Aamir" };
// console.log(mathUtility.sum.apply(user, [1, 2, 3]));

// ! bind(): the bind method retuns a new function with the specified this value and opptionally preset args, it does not call the function immediatly

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
// const response = fetch("https://api.example.com/data");
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) => {
//   console.log(err);
// });

// const data = await response.json();
// console.log(data);

// ? Generator Function

// function* greet() {
//   yield "Hello";
//   yield "I am Ammir";
//   yield "how are you";
// }

// const gen = greet();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// const user = { name: "Aamir", age: 25 };
// console.log(user);

// const copyUser = { ...user };
// copyUser.name = "Minhaj";
// console.log(copyUser);

// const str = "Aamir";
// const spreadStr = [...str];
// console.log(spreadStr);

// const words = ["a", "b", "a", "c", "b", "a"];
// const countMap = new Map();

// for (let word of words) {
//   countMap.set(word, (countMap.get(word) || 0) + 1);
// }

// console.log(countMap);

// ///////////////////////////////////////////////////////////////////////////////

// function makeCounter() {
//   let count = 0;
//   return function () {
//     return ++count;
//   };
// }

// const counter1 = makeCounter();
// const counter2 = makeCounter();

// console.log(counter1()); // 1 ?
// console.log(counter1()); //  2 ?
// console.log(counter2()); // 1

// const obj = {
//   name: "Aamir",
//   greet: () => {
//     console.log(`Hi, ${this.name}`);
//   },
// };

// obj.greet();

// async function test() {
//   return 42;
// }

// test().then(console.log);

// const original = { user: { name: "Aamir" } };
// const copy = { ...original };

// copy.user.name = "Changed";

// console.log(original.user.name);

// console.log([] == false); // ?
// console.log([] === false);

// greet();

// function greet() {
//   console.log("Hello!");
// }

// let result = "" || 0 || null || "JS" || false;
// console.log(result);

// ? HOF

// function greatUser(name) {
//   return `hello ${name}`;
// }

// function processUser(greatFn, name) {
//   return greatFn(name);
// }
// console.log(processUser(greatUser, "Aamir"));

// function outerFunc(num1) {
//   return function (num2) {
//     return num1 * num2;
//   };
// }

// const result = outerFunc(2);
// console.log(result(5));

// ? costom map function

// Array.prototype.myMap = function (callback) {
//   const result = [];

//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//   }
//   return result;
// };

// const array = [1, 2, 3, 4, 5];

// const newArray = array.myMap((num) => num * 2);
// console.log(newArray);

// ? costom filter function

// Array.prototype.myFilter = function (callback) {
//   const result = [];

//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       result.push(this[i]);
//     }
//   }

//   return result;
// };
// const array = [1, 2, 3, 4, 5];
// const evenNumber = array.myFilter((num) => {
//   return num % 2 === 0;
// });

// console.log(evenNumber);

// ? costom reducer

// Array.prototype.myReducer = function (callback, initialValue) {
//   if (typeof callback !== "function") {
//     throw new TypeError(callback, "is not a function");
//   }

//   let arr = this;
//   let accumulator; // This will hold the result as you reduce over the array
//   let startIndex; // This tracks where to start the loop, If initialValue is given → start from index 0, If not → start from index 1, because arr[0] is used as the initial accumulator.
//   if (initialValue !== undefined) {
//     accumulator = initialValue;
//     startIndex = 0;
//   } else {
//     if (arr.length === 0) {
//       throw new TypeError("reduce of empty array with no initial values");
//     }
//     accumulator = arr[0];
//     startIndex = 1;
//   }

//   for (let i = startIndex; i < arr.length; i++) {
//     accumulator = callback(accumulator, arr[i], i, arr);
//   }
//   return accumulator;
// };

// const array = [1, 2, 3, 4, 5];

// const reduceFunction = array.myReducer((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(reduceFunction);

// HOF

// function higherOrderFunction(func) {
//   return function (...args) {
//     console.log("input", args);
//     const result = func(...args);
//     console.log("otput", result);
//     return result;
//   };
// }

// function multiply(a, b) {
//   return a * b;
// }

// const loggedMultiply = higherOrderFunction(multiply);
// loggedMultiply(4, 5);

// Shallow copy

// const original = {
//   name: "Aamir",
//   address: { city: "Bangalore" },
// };

// const shallowCopy = { ...original };
// console.log(original, "504");
// console.log(shallowCopy, "505");

// shallowCopy.name = "Ali";
// shallowCopy.address.city = "Mumbai";

// console.log(original, "original");
// console.log(shallowCopy, "shallowCopy");

// deep copy

// const original = {
//   name: "Aamir",
//   address: { city: "Bangalore" },
// };

// const deepCopy = JSON.parse(JSON.stringify(original));
// deepCopy.name = "Ali";
// deepCopy.address.city = "Mumbai";

// console.log(original.name);
// console.log(original.address.city);
// console.log(original, "original");
// console.log(deepCopy, "deepCopy");

// 18008969999

// currying Function

// function multiply(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// }

// const result = multiply(2)(3)(4);
// console.log(result);

// HOF

// function double(func) {
//   return function (x) {
//     return func(x) * 2;
//   };
// }

// const squre = (x) => x * x;
// const doubleSqure = double(squre);
// console.log(doubleSqure(3));

// generator function

// const squre = (x) => x * x;
// const add = (x) => x + x;
// function* gen() {
//   yield squre(3);
//   yield add(2);
// }

// const genfunc = gen();
// console.log(genfunc.next());
// console.log(genfunc.next());
// console.log(genfunc.next());

// call by Value

// let a = 10;

// const modify = (a) => {
//   a = a + 5;
//   console.log("modified a", a);
// };

// modify(a);
// console.log("original a", a);

// function higherOrderFunction(func) {
//   return function (...arg) {
//     console.log(...arg);
//     const result = func(...arg);
//     console.log(result);
//     return result;
//   };
// }

// function multiply(a, b) {
//   return a * b;
// }

// const multiplyLogger = higherOrderFunction(multiply);
// multiplyLogger(4, 5);

// closure;

// function outerFunc() {
//   let count = 0;
//   return function inner() {
//     return ++count;
//   };
// }

// const closureResult = outerFunc();
// console.log(closureResult());
// console.log(closureResult());
// console.log(closureResult());

// const obj = {
//   name: "Aamir",
//   greet: function () {
//     console.log("Hello", this.name);
//   },
//   greetArrow: () => {
//     console.log("Hello", this.name); // `this` doesn't point to obj
//   },
// };
// obj.greet();
// obj.greetArrow();

// const number = [1, 2, 3, 4];
// const anotherNumber = number;
// anotherNumber.push(5);
// console.log(number, anotherNumber);

// function sayHello(greeting) {
//   console.log(greeting + " " + this.name);
// }

// const person = { name: "Aamir" };

// sayHello.call(person, "Hello");

// sayHello.apply(person, ["Hello"]);

// const bindReturn = sayHello.bind(person);
// bindReturn("Hello");

function multiplyBy(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5));
