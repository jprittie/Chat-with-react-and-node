// Setup basic express server
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 4001;

//const app - express.createServer();
//const io = require('socket.io').listen(app);

server.listen(port, function() {
  console.log("Server listening at port %d", port);
});

io.on("connection", socket => {
  console.log("New client connected");
  socket.on("disconnect", () => console.log("Client disconnected"));

  // when the client emits 'new message', this listens and executes
  socket.on("new message", function(data) {
    // we tell the client to execute 'new message'
    console.log("new message received by server");
    socket.broadcast.emit("new message", {
      username: socket.username,
      message: data
    });
  });
});
