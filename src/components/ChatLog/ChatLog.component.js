import React from "react";
import './ChatLog.css'
import ChatMessage from '../ChatMessage/ChatMessage.component.js'


const ChatLog = ({messages}) => (

  <div className="chatlog-container">
    {messages.map((message, index) => <ChatMessage key={index} message={message} />)}
  </div>
);

export default ChatLog;
