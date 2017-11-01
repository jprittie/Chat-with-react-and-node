import React from 'react';
import ChatLog from '../ChatLog/ChatLog.component'
import ChatUsers from '../ChatUsers/ChatUsers.component'
import ChatHeader from '../ChatHeader/ChatHeader.component'
import ChatMessage from '../ChatMessage/ChatMessage.component'
import ChatInputBox from '../ChatInputBox/ChatInputBox.component.js'
import './Chat.component.css'


const Chat = ({messages, currentUsers, myUserInfo}) => {

    return (
      <div>
        <div className="row teal lighten-5">
          <div className="chat-users-spacing three columns">
            <ChatUsers currentUsers={currentUsers} />
          </div>
          <div className="chatlog-container nine columns">
            <ChatHeader myUserInfo={myUserInfo} />
            <ul className="collection">
              <ChatLog messages={messages} >
                {messages.map( (message, index) => {

                  return (
                    <div>
                      {( (index === 0) ? message.leftalign==true
                        :
                        ( (index > 0 && message.userId==messages[index -        1].userId) ?
                           message.leftalign==messages[index-1].leftalign
                           :
                           message.leftalign==!messages[index-1].leftalign
                        )
                      ) && (
                        <li key={index} >
                          <ChatMessage message={message}/>
                        </li>
                      )}
                    </div>
                   )  
                  }
              )}

              </ChatLog>
            </ul>
            <ChatInputBox />
          </div>
        </div>

      </div>
    )
};


export default Chat;
