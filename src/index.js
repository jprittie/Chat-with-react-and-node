import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from './redux/reducers';

// Add socket.io-client and redux-socket.io middleware
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
let socket = io('http://localhost:4001');
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(loggerMiddleware, socketIoMiddleware)
);

//This is testing the redux-socket.io middleware
store.subscribe(()=>{
  console.log('new client state', store.getState());
});
store.dispatch({type:'server/hello', data:'Hello!'});


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
