import React from 'react';
import ChatLog from '../ChatLog/ChatLog.component.js'
import ChatInputBox from '../ChatInputBox/ChatInputBox.component.js'

const Chat = ({messages, currentUsers}) => (
  <div>
    <ChatLog messages={messages}/>
    <ChatInputBox />
  </div>
);

// import React, { Component } from "react";
// import socketIOClient from "socket.io-client";
// import ChatInputBox from '../ChatInputBox/ChatInputBox.component.js'
//
// class Chat extends Component {
//   constructor() {
//     super();
//     this.state = {
//       endpoint: "http://127.0.0.1:4001"
//     };
//   }
//   componentDidMount() {
//     const { endpoint } = this.state;
//     const socket = socketIOClient(endpoint);
//     //socket.on("FromAPI", data => this.setState({ response: data }));
//   }
//   render() {
//     return (
//       <div>
//
//         <ChatInputBox />
//       </div>
//     );
//   }
// }

export default Chat;
