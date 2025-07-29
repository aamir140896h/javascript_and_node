// import { EventEmitter } from "events";

// const emmiter = new EventEmitter();

// const logName = (name) => {
//   console.log(`Hello, ${name}`);
// };
// emmiter.on("great", logName);
// emmiter.emit("great", "Aamir");

// const promise = new Promise((resolve, reject) => {
//   let succes = false;
//   if (succes) {
//     resolve("success response");
//   } else {
//     reject("somthing wen worng");
//   }
// });

// promise
//   .then((result) => {
//     console.log("promise resolve", result);
//   })
//   .catch((err) => {
//     console.log("promise rejected", err);
//   });

// import express from "express";

// const app = express();

// const PORT = 8080;

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

// app.listen(PORT, () => {
//   console.log(`server  is listening on port ${PORT}`);
// });

// const buffer = Buffer.from("Aamir  ");
// console.log(buffer);
// console.log(buffer.toString());
// console.log(buffer.length);
// console.log(buffer.write("Hussain"));

// console.log(buffer.toString());

// console.log("start");

// setInterval(() => {
//   console.log("🔁 setInterval executed");
// }, 1000);

// setTimeout(() => {
//   console.log("⏳ setTimeout executed");
// }, 1000);

// setImmediate(() => {
//   console.log("⚡ setImmediate executed");
// });

// Promise.resolve().then(() => {
//   console.log("Promiss executed");
// });

// console.log("end");

// callback

// function greatUser(name, callback) {
//   console.log(`Hi ${name}`);
//   callback();
// }

// function sayBye() {
//   console.log("Bye Bye !");
// }

// greatUser("Aamir", sayBye);

// const promise = new Promise((resolve, reject) => {
//   const succes = false;
//   if (succes) {
//     resolve("Operation Successfull");
//   } else {
//     reject("Operation Failed");
//   }
// });

// promise
//   .then((result) => {
//     console.log("promis Resolved", result);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// const p1 = Promise.resolve("done");
// const p2 = Promise.reject("failed");
// Promise.allSettled([p1, p2]).then((result) => console.log(result));

// import cluster from "cluster";
// import http from "http";
// import os from "os";

// const numCPUs = os.cpus().length;
// console.log(numCPUs);

// if (cluster.isPrimary) {
//   console.log(`Master ${process.pid} is running`);
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }
//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`Worker ${worker.process.pid} died`);
//     // Optionally, you can respawn
//     // cluster.fork();
//   });
// } else {
//   http
//     .createServer((req, res) => {
//       res.writeHead(200);
//       res.end(`Handled by Worker ${process.pid}`);
//     })
//     .listen(3000);
//   console.log(`Worker ${process.pid} started`);
// }

// first non repeating char

// function firstNonrepeatingChar(str) {
//   const char = {};
//   for (let ch of str) {
//     char[ch] = (char[ch] || 0) + 1;
//   }
//   for (let ch of str) {
//     if (char[ch] === 1) return ch;
//   }
// }

// const str = "aabbcdde";

// console.log(firstNonrepeatingChar(str));

// logest word

// find duplicate

// function findDuplicate(arr) {
//   const result = [];
//   const seen = {};

//   for (let num of arr) {
//     if (!seen[num]) {
//       seen[num] = true;
//       result.push(num);
//     }
//   }
//   return result;
// }

// console.log(findDuplicate([1, 2, 2, 3, 1]));

// HOF

// function greetFuncHOF(greetfunc) {
//   return function (name) {
//     greetfunc(name);
//   };
// }

// function sayHi(name) {
//   console.log(`Hi ${name}`);
// }

// const enhancedResult = greetFuncHOF(sayHi);
// enhancedResult("Aamir");

// Shallow Copy
// const original = {
//   name: "Aamir",
//   address: { city: "Bangalore" },
// };

// const copy = { ...original };
// copy.address.city = "Mumbai";
// console.log(original, copy);

// const deepCopy = JSON.parse(JSON.stringify(original));
// deepCopy.address.city = "Mumbai";
// console.log(original, deepCopy);

// call apply and bind
// const person = {
//   fullName: function (city, country) {
//     return (
//       this.firstName + " " + this.lastName + " from " + city + " ," + country
//     );
//   },
// };

// const person1 = {
//   firstName: "Aamir",
//   lastName: "Hussain",
// };

// console.log(person.fullName.call(person1, "Dehri", "India"));
// console.log(person.fullName.apply(person1, ["Dehri", "India"]));

// const bindFunc = person.fullName.bind(person1, "Dehri", "India");
// console.log(bindFunc());

function outer() {
  let count = 0;
  return function inner() {
    return ++count;
  };
}

const closureFunction = outer();
console.log(closureFunction());
console.log(closureFunction());
console.log(closureFunction());
