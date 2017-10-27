import React from "react";
import Chat from "./src/components/Chat/Chat.container.js";

import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//
//           <h1 className="App-title">Welcome to the Chatroom</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

//Chat UI component will be connected to the redux store

const App = () =>
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to the Chatroom</h1>
    </header>
    <p className="App-intro">The chat UI component will go here.</p>
  </div>;

export default App;
