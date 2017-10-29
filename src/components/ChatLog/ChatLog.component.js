import React from "react";
import ChatMessage from '../ChatMessage/ChatMessage.component.js'

const ChatLog = ({messages}) => (

  <div>
    {messages.map((message, index) => <ChatMessage key={index} message={message} />)}
  </div>
);

export default ChatLog;
