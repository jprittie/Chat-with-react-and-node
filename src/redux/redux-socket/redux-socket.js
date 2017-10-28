//This should start a socket connection when store is created

import { MESSAGE_ACTIONS} from '../actions/message.actions';
//import * as actions from '../actions/message.actions';
import socketIOClient from "socket.io-client";

const socket = null;

export const startChat = (store) => {
  //Here we connect socket.io client side to server side
  const endpoint = "http://127.0.0.1:4001";
  const socket = socketIOClient(endpoint);

  //When a new message is pushed from server we add it to the messageLog on state
  //Does this have to be in startChat? It would be tidier outside
  socket.on("new message", message => {
    //store.dispatch(actions.addMessage(message));
    store.dispatch(MESSAGE_ACTIONS.ADD_MESSAGE(message));
  });

  // if (action.type === actions.addMessage ) {
  //   socket.emit("new message", message => {
  //
  //   })
  // }
}

// middleware to send data to server
export function chatMiddleware(store) {
  return next => action => {
    const result = next(action);

    if (socket && action.type === MESSAGE_ACTIONS.ADD_MESSAGE) {
      let messages = store.getState().messages.messageLog;
      //why not just emit action.payload?
      socket.emit("new message", messages[messages.length -1]);
    }

    return result;
  };
}
