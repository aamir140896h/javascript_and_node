// import http from "http";

import express from "express";
import rateLimit from "express-rate-limit";

// const server = http.createServer((req, res) => {
//   res.writeHead(200);
//   res.end("Hello world");
// });

// server.listen(8080, console.log("srever is listening on port 8080"));

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "to many requests from this ip please try again later",
});

app.use(limiter);

app.get("/", (req, res) => {
  res.send("Hello, you are within the limit!");
});

app.listen(8080, () => {
  console.log("server is listening on port 8080");
});
