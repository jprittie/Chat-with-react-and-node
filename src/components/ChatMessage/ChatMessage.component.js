import React from "react";


const ChatMessage = ({message}) => (
  <div>
    {message.message}
    {message.userid}
  </div>
);

export default ChatLog;
