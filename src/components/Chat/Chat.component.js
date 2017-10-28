// import React from 'react';
// import ChatLog from '../ChatLog/ChatLog.component.js'
// import import ChatInputBox from '../ChatInputBox/ChatInputBox.component.js'

// const Chat = () => (
//
//   <ChatLog />
//   <ChatInputBox />
//
// );

import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import ChatInputBox from '../ChatInputBox/ChatInputBox.component.js'

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://127.0.0.1:4001"
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    //socket.on("FromAPI", data => this.setState({ response: data }));
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <p>The Chat component has mounted</p>
        <ChatInputBox />
      </div>
    );
  }
}

export default Chat;
