import React from "react";


const ChatMessage = ({message}) => (
  <div className="row">
    <span className="chip">
      <img src="//robohash.org/503483?set=set2&bgset=bg2&size=70x70" />
      <span>{message.userId} wrote:</span>
    </span>
    <span>{message.message}</span>
  </div>
);

export default ChatMessage;
