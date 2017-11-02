import React from 'react';
import './ChatHeader.css';

const ChatHeader = ({myUserInfo}) => (

  <div className="chat-header teal">

    <span className="user-avatar-group valign-wrapper">
       <span className="user-id">{`You are User ${myUserInfo.userId}`} </span>
       <img src={myUserInfo.avatar} className="user-avatar valign circle" alt={myUserInfo.userId} />

    </span>


  </div>
)

export default ChatHeader;
