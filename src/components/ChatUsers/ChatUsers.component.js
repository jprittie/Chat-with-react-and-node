import React from 'react';
import './ChatUsers.css'

const ChatUsers = ({currentUsers}) => {
  return (

      <div className="online-user-list col s3 chat-users">
        <div className="online-users-number valign-wrapper">
          <i className="mdi-social-people"></i>
          <span className="valign">{ currentUsers.length } online</span>
        </div>


        <ul>{
          currentUsers.map(user => {

            return (
              <li key={ user.socketId }>
                {user.userId}
              </li>
            );
          })
        }</ul>

    </div>
  )
};

export default ChatUsers;
