import fs from "fs";

// const readableStream = fs.createReadStream("example.txt", {
//   encoding: "utf8",
// });

// readableStream.on("data", (chunks) => {
//   console.log("data in chuncks", chunks);
// });

// readableStream.on("end", () => {
//   console.log("end of stream");
// });

// const writeableStream = fs.createWriteStream("output.txt");

// writeableStream.write("Hello from aamir");
// writeableStream.end();

// import net from "net";

// const server = net.createServer((socket) => {
//   socket.write("hello world");
//   socket.on("data", (data) => {
//     console.log("datata", data.toString());
//   });
// });

// server.listen(3000, () => {
//   console.log("server is listening on 3000");
// });

// const readStream = fs.createReadStream("file.txt", "utf8");
// const writeStream = fs.createWriteStream("output.txt", "utf8");

// readStream.on("data", (chunks) => {
//   console.log("Received chunk:", chunks);
// });

// readStream.on("end", () => {
//   console.log("no more data");
// });

// readStream.pipe(writeStream);

// fs.readFile("file.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
