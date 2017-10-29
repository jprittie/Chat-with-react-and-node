// Set up basic express server
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 4001;

server.listen(port, function() {
  console.log("Server listening at port %d", port);
});

var currentUsers = [];
var messages = [];

io.on("connection", socket => {
  console.log("New client connected: " + socket.id);
  socket.on("disconnect", () => {
    console.log("Client with " + socket.id + " disconnected");
    //Look through currentUsers for socket.id and delete that user from currentUsers
    currentUsers = currentUsers.filter(user => {
      return user.socketId !== socket.id
    })
    console.log(currentUsers);
    //Then send updated currentUsers to all clients
    io.sockets.emit('action', {type:'userleft', data: currentUsers});

  });

  socket.on('action', (action) => {
    //This is testing the redux-socket.io middleware
    //  if(action.type === 'server/hello'){
    //    console.log('Got hello data!', action.data);
    //    socket.broadcast.emit('action', {type:'message', data:'good day!'});
    //  }


     if(action.type === 'server/userid'){
       console.log('A new user has joined the chat: ', action.data);
       //Add socket.id to current users
       //Reshape data
       const newUser = {
         userId: action.data,
         socketId: socket.id
       }
       currentUsers = currentUsers.concat(newUser);
       console.log(currentUsers);
       //Send updated currentUsers to all clients
       io.sockets.emit('action', {type:'userjoined', data: currentUsers});
       //Send message history only to the new client
       socket.emit('action', {type:'messages', data: messages});
     }

     if(action.type === 'server/message'){
       console.log('Got new message from a client!', action.data);
       //Reshape data
       const newMessage = {
         message: action.data.textInput,
         userId: action.data.myUserId
       }
       messages = messages.concat(newMessage);
       io.sockets.emit('action', {type:'messages', data: messages});
       //Send action to clear textInput on client that sent message
       socket.emit('action', {type: 'clearInput', payload: ''});
     }

   });


});
