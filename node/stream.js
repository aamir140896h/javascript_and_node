// import fs from "fs";

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

import net from "net";

const server = net.createServer((socket) => {
  socket.write("hello world");
  socket.on("data", (data) => {
    console.log("datata", data.toString());
  });
});

server.listen(3000, () => {
  console.log("server is listening on 3000");
});
