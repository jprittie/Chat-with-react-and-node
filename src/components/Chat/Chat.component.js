import React from 'react';
import ChatLog from '../ChatLog/ChatLog.component'
import ChatUsers from '../ChatUsers/ChatUsers.component'


const Chat = ({messages, currentUsers}) => (
  <div>
    <div className="row">
      <ChatUsers currentUsers={currentUsers} />
      <ChatLog messages={messages} />
    </div>

  </div>
);


export default Chat;
