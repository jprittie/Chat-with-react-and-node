import React from "react";
import './ChatMessage.css';


const ChatMessage = ({message}) => (
  <div className="row valign-wrapper">
    <img src={message.avatar} className="avatar"/>
    <span className="valign userId">{message.userId}</span>
    <span className="valign">{message.message}</span>
  </div>
);

export default ChatMessage;
