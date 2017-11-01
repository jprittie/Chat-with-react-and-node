import React from "react";
import './ChatMessage.css';

//Chat component is not changing true/false on state
//More importantly, I should not let a blank message be set on state
const ChatMessage = ({message, format}) => (
  <div className="row valign-wrapper chat-message">

    <div className="">
      <img src={message.avatar} className="left-avatar avatar circle"/>
      <div className="card message-card">
        <p className="userId">{message.userId} wrote:</p>
        <p className="">{message.message}</p>
      </div>
    </div>



  </div>
);

export default ChatMessage;

/*
{( (message.leftalign) ?

  <div className="leftalign">
    <img src={message.avatar} className="left-avatar avatar circle"/>
    <div className="card message-card">
      <p className="userId">{message.userId} wrote:</p>
      <p className="">{message.message}</p>
    </div>
  </div>
  :
  <div className="rightalign">
    <div className="card message-card">
      <p className="userId">{message.userId} wrote:</p>
      <p className="">{message.message}</p>
    </div>
    <img src={message.avatar} className="right-avatar avatar circle"/>
  </div>

 )
}*/
