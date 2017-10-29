import React from 'react';
import ChatLog from '../ChatLog/ChatLog.component.js'
import ChatUsers from '../ChatUsers/ChatUsers.component.js'
import ChatInputBox from '../ChatInputBox/ChatInputBox.component.js'

const Chat = ({messages, currentUsers}) => (
  <div>
    <div className="row">
      <ChatUsers currentUsers={currentUsers} className="col s4" />
      <ChatLog messages={messages} className="col s8" />
    </div>
    <ChatInputBox />
  </div>
);


export default Chat;
