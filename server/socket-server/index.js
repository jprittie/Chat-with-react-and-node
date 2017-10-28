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
  console.log("New client connected: " + socket.id);
  socket.on("disconnect", () => console.log("Client with " + socket.id + " disconnected"));

  //This is testing the redux-socket.io middleware
  socket.on('action', (action) => {
     if(action.type === 'server/hello'){
       console.log('Got hello data!', action.data);
       socket.emit('action', {type:'message', data:'good day!'});
     }

     if(action.type === 'server/message'){
       console.log('Got new message from client!', action.data);
       socket.emit('action', {type:'message', data:action.data});
     }
   });

  // when the client emits 'new message', this listens and executes
  // socket.on("new message", function(data) {
  //   // we tell the client to execute 'new message'
  //   console.log("new message received by server");
  //   socket.broadcast.emit("new message", {
  //     //username: socket.username,
  //     message: data
  //   });
  // });

});
