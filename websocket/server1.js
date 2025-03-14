import { WebSocketServer, WebSocket } from "ws";

const server = new WebSocketServer({ port: 8080 });
const clients = new Map(); // Stores users with their WebSocket connections

server.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    console.log(message, "message");

    const data = JSON.parse(message); // Expecting JSON messages
    console.log(data, "data");

    if (data.type === "setName") {
      clients.set(ws, data.name);
      console.log(`${data.name} joined the chat.`);
      broadcastMessage("Server", `${data.name} joined the chat.`);
    } else if (data.type === "message") {
      const sender = clients.get(ws) || "Anonymous";
      console.log(`${sender}: ${data.message}`);
      broadcastMessage(sender, data.message);
    }
  });

  ws.on("close", () => {
    const name = clients.get(ws);
    clients.delete(ws);
    console.log(`${name || "A user"} disconnected.`);
    broadcastMessage("Server", `${name || "A user"} left the chat.`);
  });

  ws.send(
    JSON.stringify({
      type: "server",
      message: "Welcome to WebSocket chat! Enter your name to start chatting.",
    })
  );
});

function broadcastMessage(sender, message) {
  console.log(sender, message, "sender");

  server.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ sender, message }));
    }
  });
}

console.log("WebSocket server running on ws://localhost:8080");
