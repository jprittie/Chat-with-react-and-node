import React from "react";
import './ChatMessage.css';


const ChatMessage = ({message}) => (
  <div className="row valign-wrapper chat-message">
    <img src={message.avatar} className="avatar"/>
    <div>
    <p className="userId">{message.userId}</p>
    <p className="">{message.message}</p>
    </div>
  </div>
);

export default ChatMessage;
