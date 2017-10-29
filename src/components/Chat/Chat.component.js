import React from 'react';
import ChatLog from '../ChatLog/ChatLog.component.js'
import ChatUsers from '../ChatUsers/ChatUsers.component.js'
import ChatInputBox from '../ChatInputBox/ChatInputBox.component.js'

const Chat = ({messages, currentUsers}) => (
  <div>
    <ChatUsers currentUsers={currentUsers} />
    <ChatLog messages={messages} />
    <ChatInputBox />
  </div>
);


export default Chat;
