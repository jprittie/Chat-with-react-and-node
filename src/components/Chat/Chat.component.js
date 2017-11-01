import React from 'react';
import ChatLog from '../ChatLog/ChatLog.component'
import ChatUsers from '../ChatUsers/ChatUsers.component'
import ChatMessage from '../ChatMessage/ChatMessage.component'
import ChatInputBox from '../ChatInputBox/ChatInputBox.component.js'


const Chat = ({messages, currentUsers}) => (
  <div>
    <div className="row">
      <ChatUsers currentUsers={currentUsers} />

      <div className="chatlog-container col s8 offset-s3">
        <ul className="collection">
          <ChatLog messages={messages} >
            {messages.map((message, index) => <li key={index} ><ChatMessage message={message} /></li>)}
          </ChatLog>
        </ul>
      </div>
    </div>
      <ChatInputBox />
  </div>
);


export default Chat;
