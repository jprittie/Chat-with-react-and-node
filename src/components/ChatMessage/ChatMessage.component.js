import React from "react";


const ChatMessage = ({message}) => (
  <div>
    <p>{message.userId} wrote:</p>
    <p>{message.message}</p>

  </div>
);

export default ChatMessage;
