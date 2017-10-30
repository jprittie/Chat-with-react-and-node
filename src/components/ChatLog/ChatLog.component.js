import React from "react";
import './ChatLog.css'
import ChatMessage from '../ChatMessage/ChatMessage.component.js'


const ChatLog = ({messages}) => (

  <div className="chatlog-container">
    <ul>
      {messages.map((message, index) => <li key={index} ><ChatMessage message={message} /></li>)}
    </ul>
  </div>
);

export default ChatLog;
