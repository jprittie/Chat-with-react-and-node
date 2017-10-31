import React from 'react';
import ChatLog from '../ChatLog/ChatLog.component'
import ChatUsers from '../ChatUsers/ChatUsers.component'
import ChatInputBox from '../ChatInputBox/ChatInputBox.component.js'


const Chat = ({messages, currentUsers}) => (
  <div>
    <div className="row">
      <ChatUsers currentUsers={currentUsers} />
      <ChatLog messages={messages} />
    </div>
      <ChatInputBox />
  </div>
);


export default Chat;
