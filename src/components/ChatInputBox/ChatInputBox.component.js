import React from "react";
import "./ChatInputBox.css";
import { connect } from 'react-redux';
import { inputChange, addMessage } from '../../redux/actions/message.actions';

const ChatInputBox = ({textInput, myUserInfo, onTextInputChange, onEnterMessage}) => (
  <div className="chat-input teal lighten-3">
    <div className="container">
      <div className="row">

        <div className="input-field col s10">
          <i className="prefix mdi-communication-chat" />
          <input
            className="input-field"
            placeholder="Type a message"
            value={textInput}
            onChange={ev => onTextInputChange(ev.target.value)}
          />
          <span className="chip left">
           <img src={myUserInfo.avatar} />
           <span>User {myUserInfo.userId}</span>
          </span>
        </div>

        <div className="input-field col s2">
          <button
            className="waves-effect waves-light btn-floating btn-large"
            onClick={ () => onEnterMessage({textInput, myUserInfo}) }
          >
            <i className="mdi-content-send" />
          </button>
        </div>

    </div>
  </div>
</div>

);

const mapStateToProps = (state) => ({
  textInput: state.textInput,
  myUserInfo: state.myUserInfo
})

const actions = {
  onTextInputChange: inputChange,
  onEnterMessage: addMessage,
}

export default connect(mapStateToProps, actions)(ChatInputBox);
