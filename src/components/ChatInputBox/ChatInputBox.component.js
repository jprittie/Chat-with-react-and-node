import React from "react";
import "./ChatInputBox.css";
import { connect } from 'react-redux';
import { inputChange, addMessage } from '../../redux/actions/message.actions';

const ChatInputBox = ({textInput, myUserInfo, onTextInputChange, onEnterMessage}) => (

    <div className="row">

      <div className="chat-input teal lighten-3 col s10 offset-s3">



          <div className="input-field valign-wrapper">

            <span className="avatar-group">
               <img src={myUserInfo.avatar} class="avatar circle" />
               <span className="">{myUserInfo.userId} </span>
            </span>

            {/*<i className="prefix mdi-communication-chat" />*/}
            <input
              className="input-field valign text-input"
              placeholder="Type a message"
              value={textInput}
              onChange={ev => onTextInputChange(ev.target.value)}
            />
            <button
              className="waves-effect waves-light btn-floating btn-large"
              onClick={ () => onEnterMessage({textInput, myUserInfo}) }
            >
              <i className="mdi-content-send" />
            </button>
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
