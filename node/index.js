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

console.log("start");

setInterval(() => {
  console.log("🔁 setInterval executed");
}, 1000);

setTimeout(() => {
  console.log("⏳ setTimeout executed");
}, 1000);

setImmediate(() => {
  console.log("⚡ setImmediate executed");
});

Promise.resolve().then(() => {
  console.log("Promiss executed");
});

console.log("end");
