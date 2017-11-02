import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from './redux/reducers';

import { CREATE_RANDOM_USERID, newId } from './redux/actions/userid.actions';

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


store.subscribe(()=>{
  console.log('new client state', store.getState());
});


//This action is sending the new user id to the server; from there
//it will be added to an array of current users and pushed to all clients
store.dispatch({type: CREATE_RANDOM_USERID, data: newId});



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
