import React from "react";
import { connect } from 'react-redux';
import Chat from "./components/Chat/Chat.component.js";
import "./App.css";

//Connect to state at the App level, then pass props down

const App = ({messages, currentUsers, myUserInfo}) => (
  <div>
    <Chat messages={messages} currentUsers={currentUsers} myUserInfo={myUserInfo} />
  </div>
)


const mapStateToProps = (state) => ({
  messages: state.messages,
  myUserInfo: state.myUserInfo,
  currentUsers: state.currentUsers
})

const actions = {}

export default connect(mapStateToProps, actions)(App);
