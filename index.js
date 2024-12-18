let express = require("express");
let socket = require("socket.io");

// app_setup
let app = express();

// server_setup
let server = app.listen(4000, () => {
  console.log("server is running on localhost:4000");
});

// route_setup
app.get("/", (res, req) => {
  req.sendFile(__dirname + "/public/index.html");
});

// socket_setup
let io = socket(server);
io.on("connection", (socket) => {
  socket.on("chat", (data) => {
    io.sockets.emit("chat", data);
  });
  socket.on("typing", (name) => {
    socket.broadcast.emit("typing", name);
  });
});
