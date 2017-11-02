// Set up basic express server
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 4001;

//Start server
server.listen(port, function() {
  console.log("Server listening at port %d", port);
});

//Import function to create a random avatar when a new user joins the chat
const makeNewAvatar = require('./avatar.js');

//These arrays will store the list of current users online and the chat log history
var currentUsers = [];
var messages = [];

//Listen for a new client to connect to the chatroom
io.on("connection", socket => {
  console.log("New client connected: " + socket.id);
  socket.on("disconnect", () => {
    //When a user disconnects, look through currentUsers for socket.id and delete that user from currentUsers
    currentUsers = currentUsers.filter(user => {
      return user.socketId !== socket.id
    })
    //Then send updated currentUsers to all clients
    io.sockets.emit('action', {type:'userleft', data: currentUsers});
  });

  //This is where we listen for various actions coming in from clients
  socket.on('action', (action) => {

      //This is listening for an action with a payload containing the new user's ID, which is generated on the client side
     if(action.type === 'server/userid'){
       console.log('A new user has joined the chat: ', action.data);
       //Generate url for avatar
       const randomAvatar = makeNewAvatar();
       const generateAvatar = (randomProperties) => {
         const url = randomProperties.url + randomProperties.randomShape +  action.data + randomProperties.randomTheme + randomProperties.randomColours + randomProperties.size;
         return url;
       }
       const avatarUrl = generateAvatar(randomAvatar);
       //Reshape data
       //Add socket.id to user info so it's available on disconnect
       const newUser = {
         userId: action.data,
         socketId: socket.id,
         avatar: avatarUrl
       }
       currentUsers = currentUsers.concat(newUser);
       //Send updated currentUsers to all clients
       io.sockets.emit('action', {type:'userjoined', data: currentUsers});
       //Send message history only to the new client
       socket.emit('action', {type:'messages', data: messages});
       socket.emit('action', {type:'setUserProfileInfo', data: newUser});
     }

     if(action.type === 'server/message'){
       console.log('Got new message from a client!', action.data);
       //Reshape data
       const newMessage = {
         message: action.data.textInput,
         userId: action.data.myUserInfo.userId,
         avatar: action.data.myUserInfo.avatar,
       }
       //Add new message to chatlog history
       messages = messages.concat(newMessage);
       //Dispatch updated chatlog history to all clients
       io.sockets.emit('action', {type:'messages', data: messages});
       //Send action to clear textInput on client that sent message
       socket.emit('action', {type: 'clearInput', data: ''});
     }

   });

});
