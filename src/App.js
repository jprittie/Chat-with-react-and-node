import React from "react";
import Chat from "./components/Chat/Chat.component.js";
import "./App.css";



const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to the Chatroom</h1>
    </header>
    <Chat />
  </div>
)

export default App;
