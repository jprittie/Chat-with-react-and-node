import React from "react";
import "./ChatInputBox.css";
import { connect } from 'react-redux';
import { inputChange, addMessage } from '../../redux/actions/message.actions';

const ChatInputBox = ({textInput, myUserId, onTextInputChange, onEnterMessage}) => (
  <div className="chat-input teal">
    <form className="container">
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
           <img src="//robohash.org/503483?set=set2&bgset=bg2&size=70x70" />
           <span>User {myUserId}</span>
          </span>
        </div>

        <div className="input-field col s2">
          <button
            className="waves-effect waves-light btn-floating btn-large"
            onClick={ () => onEnterMessage({textInput, myUserId}) }
          >
            <i className="mdi-content-send" />
          </button>
        </div>
        
    </div>
  </form>
</div>

);

const mapStateToProps = (state) => ({
  textInput: state.textInput,
  myUserId: state.myUserId
})

const actions = {
  onTextInputChange: inputChange,
  onEnterMessage: addMessage,
}

export default connect(mapStateToProps, actions)(ChatInputBox);
