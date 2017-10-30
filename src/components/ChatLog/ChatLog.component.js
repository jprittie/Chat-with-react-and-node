import React from "react";
import './ChatLog.css'
import ChatMessage from '../ChatMessage/ChatMessage.component.js';
import ChatInputBox from '../ChatInputBox/ChatInputBox.component.js'


const ChatLog = ({messages}) => (

  <div className="chatlog-container col s6">
    <ul>
      {messages.map((message, index) => <li key={index} ><ChatMessage message={message} /></li>)}
    </ul>
    <ChatInputBox />
  </div>

);

export default ChatLog;
