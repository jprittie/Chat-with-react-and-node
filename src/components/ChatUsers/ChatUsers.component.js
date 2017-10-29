import React from 'react';

const ChatUsers = ({currentUsers}) => (
  <div>
    <p>CurrentUsers in the chatroom:</p>
    {currentUsers.map(user => <li key={user.socketId}>{user.userId}</li>)}

  </div>
);

export default ChatUsers;
