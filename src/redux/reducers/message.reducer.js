import { INPUT_CHANGE, ADD_MESSAGE } from '../actions/message.actions';


//This listens for the textInput to change
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
