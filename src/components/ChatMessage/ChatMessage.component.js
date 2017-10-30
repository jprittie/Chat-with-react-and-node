import React from "react";
import './ChatMessage.css';


const ChatMessage = ({message}) => (
  <div className="row valign-wrapper">
    <span className="">
      <img src={message.avatar} className="avatar"/>
      <span className="valign">{message.userId}</span>
    </span>
    <span className="valign">{message.message}</span>
  </div>
);

export default ChatMessage;
