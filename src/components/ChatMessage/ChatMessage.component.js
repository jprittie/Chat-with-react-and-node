import React from "react";
import './ChatMessage.css';


const ChatMessage = ({message, format}) => (

  <div className="row valign-wrapper chat-message">
      <img src={message.avatar} className="avatar circle" alt={message.userId}/>
      <div className="card message-card">
        <p className="userId">{message.userId} wrote:</p>
        <p className="">{message.message}</p>
      </div>
  </div>
);

export default ChatMessage;
