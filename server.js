const io = require("socket.io");
const http = require("http");

const apiServer = require("./api");
const httpServer = http.createServer(apiServer);
const socketServer = io(httpServer);

const sockets = require("./socket");
const PORT = 3000;

httpServer.listen(PORT, () => {
  console.log("Server is listen on PORT", PORT);
});

sockets.listen(socketServer);
