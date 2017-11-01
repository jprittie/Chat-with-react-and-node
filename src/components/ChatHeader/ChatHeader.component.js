import React from 'react';
import './ChatHeader.css';

const ChatHeader = ({myUserInfo}) => (

  <div className="chat-header teal">

    {/*<i className="prefix mdi-communication-chat" />*/}

    <span className="user-avatar-group valign-wrapper">
       <span className="user-id">{`You are user ${myUserInfo.userId}`} </span>
       <img src={myUserInfo.avatar} class="user-avatar valign" />

    </span>


  </div>
)

export default ChatHeader;
