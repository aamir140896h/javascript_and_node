// ?readStream

// const fs = require("fs");
// const readableStream = fs.createReadStream("example.txt", {
//   encoding: "utf-8",
// });

// readableStream.on("data", (chunk) => {
//   console.log("chunk", chunk);
// });
// readableStream.on("end", () => {
//   console.log("no more data to read");
// });

// readableStream.on("error", (err) => {
//   console.log("error", err);
// });

// ?writeableStream

// const fs = require("fs");

// const writableStream = fs.createWriteStream("output.txt");

// writableStream.write("Hello world \n");
// writableStream.write("i m learning node js\n");
// writableStream.write("this is the Stream ");

// ?pipline

// const fs = require("fs");
// const readable = fs.createReadStream("example.txt");
// const writable = fs.createWriteStream("output.txt");

// readable.pipe(writable);

// readable.on("end", () => {
//   console.log("file copied");
// });
// readable.on("error", (err) => {
//   console.log("error", err);
// });

// writable.on("error", (err) => {
//   console.log("error in write", err);
// });

// ?Transform

// const { Transform } = require("stream");

// const transformed = new Transform({
//   transform(chunk, encoding, callback) {
//     this.push(chunk.toString().toUpperCase());
//     callback();
//   },
// });

// process.stdin.pipe(transformed).pipe(process.stdout);
