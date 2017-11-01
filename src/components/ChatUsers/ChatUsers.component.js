import React from 'react';
import './ChatUsers.css'

const ChatUsers = ({currentUsers}) => {
  return (

      <div className="chat-users teal">
        <div className="chat-users-number valign-wrapper">
          <i className="mdi-social-people"></i>
          <span className="valign user-number">{ currentUsers.length } online</span>
        </div>


        <ul>{
          currentUsers.map(user => {

            return (
              <li key={ user.socketId } className="valign-wrapper chat-user card teal">
                <img src={user.avatar} className="avatar" />
                <span className="valign">User {user.userId}</span>
              </li>
            );
          })
        }</ul>

    </div>
  )
};

export default ChatUsers;
