import React from "react";
import ChatMessage from '../ChatMessage/ChatMessage.component.js'

const ChatLog = ({messages, currentUsers}) => (
  <div>
    messages.map(message => <ChatMessage props={message} />)
  </div>
);

export default ChatLog;
