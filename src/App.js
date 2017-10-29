import React from "react";
import { connect } from 'react-redux';
import Chat from "./components/Chat/Chat.component.js";
import "./App.css";


const App = ({messages, currentUsers, myUserId}) => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to the Chatroom</h1>
      <h3>Your user ID is {myUserId}</h3>
    </header>
    <Chat messages={messages} currentUsers={currentUsers} />
  </div>
)


const mapStateToProps = (state) => ({
  messages: state.messages,
  myUserId: state.myUserId,
  currentUsers: state.currentUsers
})

const actions = {
  // onTextInputChange: inputChange,
  // onEnterMessage: addMessage,
}

export default connect(mapStateToProps, actions)(App);
