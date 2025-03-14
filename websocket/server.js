import { WebSocketServer, WebSocket } from "ws";
// const WebSocket = require("ws");
console.log(WebSocketServer);

const server = new WebSocketServer({ port: 8080 });

server.on("connection", (ws) => {
  console.log("client connected");
  ws.on("message", (message) => {
    console.log("received message");
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(`server : ${message}`);
      }
    });
  });

  ws.on("close", () => {
    console.log("client disconnected");
  });

  ws.send("Welcome to websocket server");
});

console.log("WebSocket server running on ws://localhost:8080");
