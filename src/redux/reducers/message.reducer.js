import { INPUT_CHANGE, ADD_MESSAGE } from '../actions/message.actions';


//This listens for the textInput to change via a client side action
//It is also listening for a server-side action of type 'clearInput' that will clear the textInput once the message is entered
export const textInput = (state = '', action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return action.data
    case 'clearInput':
      return action.data
    default:
      return state;
  }
}

//This listens for a server-side action of type 'messages' that sends the current chatlog history to all clients
export const messages = (state = [], action) => {
  switch (action.type) {
    case 'messages':
      return action.data;
    default:
      return state;
  }
}
