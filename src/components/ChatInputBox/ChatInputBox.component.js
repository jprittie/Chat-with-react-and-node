import React from "react";
import { connect } from 'react-redux';
import { inputChange, sendMessage } from '../redux/actions/message.actions';

const ChatInputBox = ({textInput, onTextInputChange, onEnterMessage}) => (
  <div className='chat-input'>
    <textarea
      name='message'
      placeholder='Enter a message'
      value={textInput}
      onChange={ev => onTextInputChange(ev.target.value)}
    />

    <button
      className="submit-button"
      onClick={ () => onEnterMessage(textInput)}
    >
      Enter
    </button>
  </div>

);

const mapStateToProps = (state) => ({
  textInput: state.textInput,
})

const actions = {
  onTextInputChange: inputChange,
  onEnterMessage: sendMessage,
}

export default connect(mapStateToProps, actions)(ChatInputBox);
